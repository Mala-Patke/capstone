export default defineEventHandler(async e => {
    let { movie } = getQuery(e);

    const stuffData = await $fetch(`https://api.themoviedb.org/3/search/movie?api_key=097b0dc81ba90c40cc25cb2613c6e6e1&include_adult=false&page=1&query=${movie}`);

    return `m_${stuffData}`;
});