import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title! : string;
  description! : string;
  createDate! : Date;
  snaps! : number;
  imageUrl! : string;
  buttonText! : string;

  ngOnInit() {
    this.title = "Jaycee";
    this.description = "I am the owner of the application";
    this.createDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501_1280.jpg';
    this.buttonText = '👍';
  }

  onLike() {
    if (this.buttonText === '👍') {
       this.snaps++;
       this.buttonText = '👌';
    } else {
       this.snaps--;
       this.buttonText = '👍';
    }
  }
}

