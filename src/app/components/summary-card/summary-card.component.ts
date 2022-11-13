import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss'],
})
export class SummaryCardComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  count: number = data[0].total;

  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
