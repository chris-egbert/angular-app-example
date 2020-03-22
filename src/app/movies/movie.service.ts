import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './movie';

import {environment} from '../../environments/environment';
import {MovieSearchResult} from './movie-search-result';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private apiBaseurl = environment.movie.api.baseUrl;
    private apiKey = environment.movie.api.key;

    constructor(
        private httpClient: HttpClient
    ) {
    }

    public fetchMovieDetail(movieId: string): Observable<Movie> {
        return this.httpClient.get<Movie>(this.apiBaseurl, {
            params: {
                apikey: this.apiKey,
                i: movieId,
            }
        });
    }

    public searchForMovies(searchString: string): Observable<MovieSearchResult> {
        return this.httpClient.get<MovieSearchResult>(this.apiBaseurl, {
            params: {
                apikey: this.apiKey,
                s: searchString
            }
        });
    }
}
