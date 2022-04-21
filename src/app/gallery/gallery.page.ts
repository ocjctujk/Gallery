import { Component, OnInit } from '@angular/core';
import { PhotoService, UserPhoto } from '../home/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  imageSource = 'https://i.pinimg.com/originals/43/16/60/4316602d5ed1c62195ffd7fd86f7af02.jpg';
  photos: UserPhoto[] = [];
  constructor(private photoService : PhotoService) { }

  ngOnInit() {
    // this.photoService.fetchData();
    this.photoService.photosSubject.subscribe(photos=>{
      this.photos = [...photos]; 
    })
  }

}
