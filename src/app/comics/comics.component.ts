import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics = []
  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    return this.comicsService.getComics(100)
      .subscribe(
        response => {
          this.comics = response['data'].results;
        }
      )
  }

}
