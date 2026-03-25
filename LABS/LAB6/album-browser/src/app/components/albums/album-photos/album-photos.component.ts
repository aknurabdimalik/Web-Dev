import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../../services/album.service';
import { Photo } from '../../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotos {
  photos: Photo[] = [];
  albumId!: number;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => { 
        this.photos = [...data];
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => { 
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void { this.router.navigate(['/albums', this.albumId]); }
}