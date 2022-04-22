import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService, UserPhoto } from '../home/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  photos: UserPhoto[] = [];
  constructor(private photoService: PhotoService, private router: Router) {}

  ngOnInit() {
    // this.photoService.fetchData();
    this.photoService.photosSubject.subscribe((photos) => {
      this.photos = [...photos];
    });
  }

  onClick(webviewPath: string) {
    this.router.navigate(['gallery', webviewPath]);
  }
}
