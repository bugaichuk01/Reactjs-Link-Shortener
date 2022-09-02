export const getPageCount = (totalCount: number) => {
    return Math.ceil(totalCount / 10 )
}

export const getPagesArray = (totalPages: number) => {
    const result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1);
    }

    return result;
}