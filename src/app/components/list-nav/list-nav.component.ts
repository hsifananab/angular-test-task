import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.scss'],
})
export class ListNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  types: string[] = data[0].data.reduce((acc: string[], item) => {
    if (acc.includes(item.type)) return acc;

    return [...acc, item.type];
  }, []);

  @Input() index: string;
}
