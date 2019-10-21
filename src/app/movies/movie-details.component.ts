import { Component, OnInit } from '@angular/core';
import { Movie } from './list';

@Component({
    selector: 'main',
    templateUrl: './movie-details.component.html',
})


export class MovieDetailsComponent implements OnInit {
    movie: Movie

    ngOnInit() {
        this.movie = {
            id: 1,
            title: "Avangers",
            image: "https://p7.hiclipart.com/preview/375/745/117/captain-america-thor-iron-man-marvel-cinematic-universe-youtube-avangers.jpg",
            description: "Some movie description",
            year: "2019"
        }
    }
}