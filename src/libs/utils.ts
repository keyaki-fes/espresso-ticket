export const parseRsvId = (rsvId: string) => {
    const type = rsvId.slice(0, 1);
    const id = rsvId.slice(1, 5);
    const random = rsvId.slice(5, 8);
    return { type, id, random };
};