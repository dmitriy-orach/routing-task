import { Component, Input, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/model';
import { UserServise } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input() public user: UserInformation | any;

  constructor(private userServise: UserServise, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.userServise.getUser(+id)
      .subscribe((user: UserInformation | undefined) => this.user = user);
  }

}
