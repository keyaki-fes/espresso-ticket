import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/libs/firebaseAdmin";
import { errorLog } from "@/libs/utils";
import { rateLimit } from "@/libs/rate-limit";

const limiter = rateLimit({
    uniqueTokenPerInterval: 20,
    interval: 60000,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // レートリミット
    try {
        await limiter.check(res, 20, 'CACHE_TOKEN');
    } catch (e) {
        errorLog("too many requests", req);
        res.status(429).json({ message: e });
        return;
    }

    const { id } = req.query;
    if (!id) {
        errorLog("id is required", req);
        res.status(400).json({ message: "id is required" });
        return;
    }

    try {
        const doc = await db.collection("reservation").doc(id as string).get();
        if (!doc.exists) {
            errorLog("not found", req);
            res.status(404).json({ message: "not found" });
            return;
        }
        const data = doc.data();
        res.status(200).json(data);
    } catch (e) {
        errorLog(e, req);
        res.status(500).json({ message: e })
    }
}

//todo:チェックしたことのフラグを立てる