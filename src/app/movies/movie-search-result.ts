export interface MovieSearchResult {
    Search: Array<{
        Title: string,
        imdbID: string,
        Poster: string,
    }>;
    totalResults: string;
    Response: string;
}
