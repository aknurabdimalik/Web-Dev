import { Routes } from '@angular/router';
import { Home } from './components/home/home.component';
import { About } from './components/about/about.component';
import { Albums } from './components/albums/albums.component';
import { AlbumDetail } from './components/albums/album-detail/album-detail.component';
import { AlbumPhotos } from './components/albums/album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'albums', component: Albums },
  { path: 'albums/:id', component: AlbumDetail },
  { path: 'albums/:id/photos', component: AlbumPhotos },
];
console.log('Routes loaded:', routes.length);