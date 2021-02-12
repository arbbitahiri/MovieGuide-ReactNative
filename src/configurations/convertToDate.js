export const convertToDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const newDate = new Date(date);

    return (
        `${monthNames[newDate.getMonth()]} ${newDate.getDate() + 1}, ${newDate.getFullYear()}`
    );
}