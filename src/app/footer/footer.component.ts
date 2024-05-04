import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  X=`email:mahmoudnaamneh5@gmail.com`;
  y='phone:0556658291';
  z="https://www.facebook.com/Carnival/";
  constructor() { }

  ngOnInit(): void {
  }

}
