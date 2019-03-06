import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics/comics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'loja-quadrinhos';
  copyright: string;

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    return this.comicsService.getComics()
    .subscribe(
      response => {
        this.copyright = response['attributionText'];
      }
    )
  }
}
