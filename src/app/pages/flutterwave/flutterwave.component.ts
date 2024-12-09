import { Component, inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  standalone: false,
  selector: 'app-flutterwave',
  templateUrl: './flutterwave.component.html',
  styleUrls: ['./flutterwave.component.css']
})
export class FlutterwaveComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  images = [
    '../../../assets/images/slider.png',
    '../../../assets/images/slider1.png'
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
