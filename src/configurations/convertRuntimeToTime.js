export const convertRuntimeToTime = (runtime) => {
    let hours = Math.floor(runtime / 60);
    let minutes = runtime % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}hrs ${minutes}min`;
}