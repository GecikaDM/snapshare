import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap! : FaceSnap;
  mySecondSnap! : FaceSnap;
  myThirdSnap! : FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap (
      "Jaycee",
      "I am the owner of the application",
      "https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501_1280.jpg",
      new Date(),
      0
      );
    this.mySecondSnap = new FaceSnap (
      "Earth",
      "View's earth",
      "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      new Date(),
      0
      );
    this.myThirdSnap = new FaceSnap (
      "Mars",
      "View's Mars",
      "https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      new Date(),
      0
      );
    }
  }
