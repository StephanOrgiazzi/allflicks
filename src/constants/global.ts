const baseUrl = 'https://api.themoviedb.org/3'
const imgBaseUrl = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/'
const backdropBaseUrl = 'https://image.tmdb.org/t/p/w500/'
const apiKey = 'api_key=4279c0bf7fc9803dfda201662c10705f'

const movieGenreOptions = [
    { value: '', name: 'All' },
    { value: '28', name: 'Action' },
    { value: '12', name: 'Adventure' },
    { value: '35', name: 'Comedy' },
    { value: '18', name: 'Drama' },
    { value: '36', name: 'History' },
    { value: '10749', name: 'Romance' },
    { value: '878', name: 'Sci-Fi' },
    { value: '53', name: 'Thriller' },
    { value: '10752', name: 'War' }
]

const tvGenreOptions = [
    { value: '', name: 'All' },
    { value: '10759', name: 'Action-Adventure' },
    { value: '35', name: 'Comedy' },
    { value: '80', name: 'Crime' },
    { value: '18', name: 'Drama' },
    { value: '10765', name: 'Sci-Fi-Fantasy' },
    { value: '9648', name: 'Mystery' }
]

export { baseUrl, imgBaseUrl, backdropBaseUrl, apiKey, movieGenreOptions, tvGenreOptions }
