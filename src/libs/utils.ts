import type { NextApiRequest } from "next";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);


export const parseRsvId = (rsvId: string) => {
    const type = rsvId.slice(0, 1);
    const num = rsvId.slice(1, 2);
    const id = rsvId.slice(2, 6);
    const random = rsvId.slice(6, 9);
    console.log(type, num, id, random);
    return { type, num, id, random };
};

export function errorLog(e: any, req: NextApiRequest) {
    if (process.env.WEBHOOK_URL === undefined) {
        return;
    }
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    let content = "```time: " + dayjs().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss") + "\n";

    content += "UA: " + req.headers["user-agent"] + "\n";
    content += "IP: " + req.headers["x-forwarded-for"] + "\n";
    content += "URL: " + req.url + "\n";
    content += "error: " + e + "```";


    const data = {
        content: content,
    };
    axios.post(process.env.WEBHOOK_URL, data, config).catch((e) => {
        console.log(e);
    }
    );
}
