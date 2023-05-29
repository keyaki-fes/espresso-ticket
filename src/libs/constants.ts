export const constants = {
    app_version: '1.2.2',
}

type GuestType = "招待" | "PTA" | "一般" | "テスト";

export const getGuestType = (type: string): GuestType => {
    switch (type) {
        case "1":
            return "招待";
        case "2":
            return "PTA";
        case "3":
            return "一般";
        case "9":
            return "テスト";
        default:
            return "一般";
    }
};

export const guestColor = (type: GuestType) => {
    switch (type) {
        case "招待":
            return "red";
        case "PTA":
            return "cyan";
        case "一般":
            return "blue";
        case "テスト":
            return "purple";
        default:
            return "blue";
    }
}