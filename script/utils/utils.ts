export const remove0x = (hexString: string) : string => {
    return hexString.startsWith("0x") ? hexString.slice(2) : hexString;
}