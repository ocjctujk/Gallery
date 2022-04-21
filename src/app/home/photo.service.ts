import { Injectable } from '@angular/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { BehaviorSubject } from 'rxjs';

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private _photos: UserPhoto[] = [
    // "https://i.pinimg.com/originals/43/16/60/4316602d5ed1c62195ffd7fd86f7af02.jpg",
    // "https://i.pinimg.com/originals/84/5d/50/845d508c345e2d594238f3451e345826.jpg"
  ];
  photosSubject = new BehaviorSubject<UserPhoto[]>(this._photos);
  constructor() {}

  addPhotos(photo: UserPhoto) {
    this._photos.push(photo);
    this.photosSubject.next(this._photos);
    // this.setData();
  }

  // async fetchData() {
  //   const photoList = await Storage.get({ key: 'photos' })
  //   this._photos = JSON.parse(photoList.value) || [];
  //   this.photosSubject.next(this._photos);

  //   for (let photo of this._photos) {
  //     // Read each saved photo's data from the Filesystem
  //     const readFile = await Filesystem.readFile({
  //       path: photo.filepath,
  //       directory: Directory.Data,
  //     });
    
  //     // Web platform only: Load the photo as base64 data
  //     photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
  //   }

  // }
  // setData() {
  //   Storage.set({
  //     key: 'photos',
  //     value: JSON.stringify(this._photos),
  //   });
  // }
}
