import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import token_info from '../../../api_key.json';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token_info.token}`
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(
      map(data => data['albums']['items'])
    );
  }

  searchArtist(term: string) {
    return this.getQuery(`search?type=artist&limit=15&q=${term}`).pipe(
      map(data => data['artists']['items'])
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
