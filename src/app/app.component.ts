import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  year = new Date().getFullYear();
  movie_link = `http://www.omdbapi.com/?apikey=ea5978f5&y=${this.year}`
  title = 'Mini Netflix';
  movies = [
    {
      title: "Avangers",
      image: "https://p7.hiclipart.com/preview/375/745/117/captain-america-thor-iron-man-marvel-cinematic-universe-youtube-avangers.jpg",
      description: "Some movie description",
      year: "2019"
    },
    {
      title: "Black Panther",
      image: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/02/black_panther_hero_image.jpg",
      description: "Some other long description",
      year: "2021"
    },
    {
      title: "Oceans 8",
      image: "https://images-na.ssl-images-amazon.com/images/I/91nPLihxWYL._SL1500_.jpg",
      description: "Some other long description",
      year: "2008"
    },
  ]
}
