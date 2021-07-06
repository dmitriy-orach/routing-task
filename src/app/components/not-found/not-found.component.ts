import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public title: string = '404 Error! Page Not Found!'

  constructor() { }

  ngOnInit(): void {
  }

}
