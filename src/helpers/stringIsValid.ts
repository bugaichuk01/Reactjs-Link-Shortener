export default function stringIsValid(
    str: string,
    str2: string
) {
    return !str.trim() || !str2?.trim();
}