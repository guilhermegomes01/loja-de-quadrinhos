import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics/comics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.css']
})
export class ComicsDetailComponent implements OnInit {
  comic = [];
  constructor(private comicsService: ComicsService, private route: ActivatedRoute) { }

  ngOnInit() {
    return this.comicsService.getComicById(this.route.snapshot.params['id'])
      .subscribe(
        response => {
          this.comic = response['data'].results;
          console.log(this.comic);
        }
      )
  }

}
