import { Component, OnInit } from '@angular/core';
import { Movies } from "./list"

@Component({
  selector: 'main',
  templateUrl: './movies-list.component.html',
})


export class MoviesListComponent implements OnInit {
  year = new Date().getFullYear();
  title = 'Mini Netflix';
  movies = Movies
  favorites = new Array()
  storage_key = 'mininetflix_favorite_movies'

  ngOnInit() {

  }

  addToFavorites(id: Number) {

  }
}
