import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PhotoService } from 'src/app/home/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  imageSource = '';
  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.imageSource = this.route.snapshot.paramMap.get('id');
  }

  onDelete() {
    this.alertCtrl
      .create({
        header: 'Are you sure you want to delete the pic?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              console.log('deleting ' + this.imageSource);
              this.photoService.removePhoto(this.imageSource);
              this.router.navigate(['gallery']);
            },
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
