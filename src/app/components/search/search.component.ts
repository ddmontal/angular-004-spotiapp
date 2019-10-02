import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  search(term: string) {
    console.log(term);
    this.spotifyService.searchArtist(term).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
    });
  }
}
