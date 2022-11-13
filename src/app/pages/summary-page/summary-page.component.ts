import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss'],
})
export class SummaryPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'summary';

  types: string[] = data[0].data.reduce((acc: string[], item) => {
    if (acc.includes(item.type)) return acc;

    return [...acc, item.type];
  }, []);
}
