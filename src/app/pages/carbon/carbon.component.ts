import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.css']
})
export class CarbonComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
}
