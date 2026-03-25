import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
  return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`).pipe(
    map((photos: Photo[]) => photos.map((photo, i) => ({
      ...photo,
      thumbnailUrl: `https://picsum.photos/150/150?random=${id * 100 + i}`,
      url: `https://picsum.photos/600/400?random=${id * 100 + i}`
    })))
  );
}

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}