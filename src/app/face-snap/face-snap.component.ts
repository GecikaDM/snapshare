import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap! : FaceSnap;

  title! : string;
  description! : string;
  createDate! : Date;
  snaps! : number;
  imageUrl! : string;
  buttonText! : string;

  ngOnInit() {
    this.buttonText = '👍';
  }

  onLike() {
    if (this.buttonText === '👍') {
       this.faceSnap.snaps++;
       this.buttonText = '👌';
    } else {
       this.faceSnap.snaps--;
       this.buttonText = '👍';
    }
  }
}

