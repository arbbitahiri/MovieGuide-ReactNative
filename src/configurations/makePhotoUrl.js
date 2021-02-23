export default (path, size = "w342") =>
    `https://image.tmdb.org/t/p/${size}${path}`;

export const convertImage = (path, size = "w342") => {
    if (path != null || path != undefined) {
        return `https://image.tmdb.org/t/p/${size}${path}`;
    } else {
        return `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`
    }
}