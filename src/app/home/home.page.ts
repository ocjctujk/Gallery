import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { PhotoService, UserPhoto } from './photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private photoService: PhotoService, private router: Router) {}

  async onClick() {
    const photo = await Camera.getPhoto({
      allowEditing: false,
      quality: 100,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    console.log(photo);

    // const savedImage = await this.savePicture(photo);

    this.photoService.addPhotos({
      filepath: 'soon...',
      webviewPath: photo.webPath
    });

    // this.photoService.addPhotos({
    //   filepath: savedImage.filePath,
    //   webviewPath: savedImage.webViewPath,
    // });
    // console.log(savedImage);
    this.router.navigate(['gallery']);
  }

  async savePicture(photo) {
    const base64data = await this.readAsBase64(photo);

    const fileName = new Date().getTime()+'.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64data,
      directory: Directory.Data
    });

    return{
      filePath: fileName,
      webViewPath: photo.webPath
    }

  }

  async readAsBase64(photo: Photo) {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    return (await this.convertBlobToBase64(blob)) as string;
  }

  private convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
