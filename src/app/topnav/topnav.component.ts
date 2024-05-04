import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  title = 'topnav';
  name1='Main Page';
  name2='Explore';
  name3='Plan';
  name4='Manage';

  constructor() { }

  ngOnInit(): void {
  }

}
