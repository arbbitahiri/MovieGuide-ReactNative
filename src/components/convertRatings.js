export function convertRatings(rating) {
    const average = rating > 5 ? Math.round(rating) : rating;

    if (average >= 5) {
        const length = average != 10 ? parseInt(`${average}`.charAt(0)) - 5 : average - 5;

        return [...Array(length)].map((_, i) => i);
    }

    return [];
};