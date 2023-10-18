// import useData from "./useData";  --> for fetching data dynamically from backend(API)
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


// const useGenres = () => useData<Genre>('/genres'); --> for fetching data dynamically from backend(API)
const useGenres = () => ({data: genres, isLoading: false, error: null}) //--> for fetching data statically from local storage
export default useGenres;