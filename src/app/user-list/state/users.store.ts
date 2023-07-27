import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './user.model';
import { Injectable } from '@angular/core';

export interface UsersState extends EntityState<User, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super();
  }
}
