import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-sendapp',
  templateUrl: './sendapp.component.html',
  styleUrls: ['./sendapp.component.css']
})
export class SendappComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}
