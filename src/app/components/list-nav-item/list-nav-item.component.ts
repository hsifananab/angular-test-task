import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-nav-item',
  templateUrl: './list-nav-item.component.html',
  styleUrls: ['./list-nav-item.component.scss'],
})
export class ListNavItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() index: number;
  @Input() type: string;
  isActive: boolean = true;
}
