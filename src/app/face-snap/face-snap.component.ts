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

  ngOnInit() {
    this.title = "Jaycee";
    this.description = "I am the owner of the application";
    this.createDate = new Date();
    this.snaps = 6;
  }
}

