const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '62f917b7abfb0fcf93ecff677aa06f7e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;