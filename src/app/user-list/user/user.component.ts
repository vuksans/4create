import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../state/users.service';
import { User } from '../state/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user?: User;
  readonly userActiveControl = new FormControl();

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.userActiveControl.setValue(this.user?.active);
  }

  activeChanged(): void {
    if (this.user) {
      this.usersService.update(this.userActiveControl.value, this.user.id);
    }
  }
}
