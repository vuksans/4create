import { QueryEntity } from '@datorama/akita';
import { UsersState, UsersStore } from './users.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {
  all$ = this.selectAll();

  constructor(store: UsersStore) {
    super(store);
  }
}
