// Préfixe un chemin interne avec la base du site (ex. /test/ sur GitHub Pages).
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const url = (path = '') => base + path.replace(/^\//, '');
