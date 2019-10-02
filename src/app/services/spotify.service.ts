import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  headers = new HttpHeaders({
    'Authorization':
      'Bearer '
  });

  constructor(private http: HttpClient) {}

  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
      headers: this.headers
    });
  }
}
