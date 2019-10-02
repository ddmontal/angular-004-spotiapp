import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any;
  loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtist(params.id);
    });
  }

  ngOnInit() {}

  getArtist(id: string) {
    this.spotifyService.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }
}
