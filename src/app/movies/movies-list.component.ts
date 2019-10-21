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
    if (localStorage.getItem(this.storage_key)) {
      this.favorites = JSON.parse(localStorage.getItem(this.storage_key))
    }
  }

  addToFavorites(id: Number) {
    this.favorites.push(id);
    localStorage.setItem(this.storage_key, JSON.stringify(this.favorites))
  }
}
