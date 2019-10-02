import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.newSongs = data.albums.items;
    });
  }

  ngOnInit() {}
}
