import { Component, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/model';
import { UserServise } from '../../user.service'

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {

  public usersData: Array<UserInformation> = [];

  constructor(private userServise: UserServise) {}

  ngOnInit() {
    this.userServise.getData().subscribe((data: Array<UserInformation>) => {
      return this.usersData = data;
    });
  }
}
