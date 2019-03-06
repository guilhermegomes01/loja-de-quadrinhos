import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics/comics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  comics = []
  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    return this.comicsService.getComics(8, 100)
    .subscribe(
      response => {
        this.comics = response['data'].results;
      }
    )
  }

}
