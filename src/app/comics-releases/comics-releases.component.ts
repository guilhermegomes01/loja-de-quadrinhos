import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../comics/comics.service';

@Component({
  selector: 'app-comics-releases',
  templateUrl: './comics-releases.component.html',
  styleUrls: ['./comics-releases.component.css']
})
export class ComicsReleasesComponent implements OnInit {
  comicsReleases = []
  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    return this.comicsService.getComicByDateRange()
      .subscribe(
        response => {
          this.comicsReleases = response['data'].results;
        }
      )
  }

}
