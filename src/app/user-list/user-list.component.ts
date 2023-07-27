import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './state/users.service';
import { UsersQuery } from './state/users.query';
import { Observable, map } from 'rxjs';
import { User } from './state/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  readonly users$: Observable<User[]>;
  readonly usersEditable$: Observable<UsersEditable>;

  readonly userForm: FormGroup;

  constructor(
    private readonly usersService: UsersService,
    readonly usersQuery: UsersQuery,
    readonly fb: FormBuilder
  ) {
    this.users$ = usersQuery.all$;
    this.usersEditable$ = this.users$.pipe(
      map((users: User[]) => {
        return {
          canEdit:
            users.length < 5 &&
            users.filter((user) => user.active).length === users.length,
        };
      })
    );

    this.userForm = fb.group({
      name: fb.control('', Validators.required),
      active: fb.control(false, Validators.required),
    });
  }

  showModal(modalRef: any, canAdd: boolean): void {
    if (canAdd) {
      modalRef.showModal();
    }
  }

  addUser(dialogRef: any): void {
    if (this.userForm.valid) {
      this.usersService.add(
        this.userForm.value.name,
        this.userForm.value.active
      );
      dialogRef.close();
      this.userForm.reset({
        name: '',
        active: false,
      });
    }
  }
}

interface UsersEditable {
  canEdit: boolean;
}
