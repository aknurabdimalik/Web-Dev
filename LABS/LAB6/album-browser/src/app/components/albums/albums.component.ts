import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums {
  albums: Album[] = [];
  loading = true;

  constructor(
    private albumService: AlbumService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.albumService.getAlbums().subscribe({
      next: (data) => { 
        this.albums = [...data];
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => { 
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.cdr.detectChanges();
    });
  }
}