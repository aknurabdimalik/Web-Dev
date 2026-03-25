import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.saving = true;
    this.albumService.updateAlbum({ ...this.album, title: this.editTitle }).subscribe(() => {
      this.album!.title = this.editTitle;
      this.saving = false;
      this.saved = true;
      this.cdr.detectChanges();
      setTimeout(() => { this.saved = false; this.cdr.detectChanges(); }, 2000);
    });
  }

  goToPhotos(): void { this.router.navigate(['/albums', this.album!.id, 'photos']); }
  goBack(): void { this.router.navigate(['/albums']); }
}