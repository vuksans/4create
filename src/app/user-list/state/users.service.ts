import { User, createUser } from './user.model';
import { UsersStore } from './users.store';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private usersStore: UsersStore) {
    usersStore.set(SAMPLE_USERS);
  }

  add(name: string, isActive: boolean) {
    this.usersStore.add(createUser(name, isActive));
  }

  update(isActive: boolean, id: string) {
    this.usersStore.update(id, { active: isActive });
  }
}

const SAMPLE_USERS: User[] = [
  createUser('John Doe', true),
  createUser('Pablo Banchero', false),
];
