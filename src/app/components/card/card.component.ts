import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @Input() cardType: string;

  getCount(type: string) {
    return data[0].data.reduce((acc, item) => {
      if (item.type === type) acc += 1;
      return acc;
    }, 0);
  }

  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
