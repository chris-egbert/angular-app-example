import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {Observable} from 'rxjs';
import {Movie} from '../movie';
import {map} from 'rxjs/operators';
import {MovieSearchResult} from '../movie-search-result';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    public movieList$: Observable<Array<Movie>>;

    constructor(
        private movieService: MovieService,
    ) {
    }

    ngOnInit(): void {
        this.movieList$ = this.movieService.searchForMovies('Star Wars')
            .pipe(
                map((result: MovieSearchResult) => {
                    return result.Search;
                })
            );
    }

}
