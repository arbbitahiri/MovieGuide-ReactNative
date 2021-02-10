export function convertDate(date) {
    const newDate = new Date(date);
    return (
        `${newDate.getDate() + 1}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    );
}