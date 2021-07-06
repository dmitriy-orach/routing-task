import { Component, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/model';
import { UserServise } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: UserInformation | any;

  constructor(
      private userServise: UserServise, 
      private route: ActivatedRoute,
      private location: Location
    ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.userServise.getUserData(id)
      .subscribe((user: UserInformation) => this.user = user);
  }

  public goBack(): void {
    this.location.back();
  }
}
