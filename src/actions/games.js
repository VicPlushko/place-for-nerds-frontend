export const getGames = () => {
    const GAMES_KEY = process.env.REACT_APP_GAMES_KEY
    const gamesURL = `https://api.rawg.io/api/games?key=${GAMES_KEY}&page_size=30&dates=2019-01-01,2021-03-30&ordering=-metacritic&metacritic=80,100`
}