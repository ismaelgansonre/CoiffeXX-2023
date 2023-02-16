import { Injectable } from '@angular/core';

import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[];

  constructor() {
    this.users = [];
  }

  public addUser(newUser: User): void {
    this.users.push(newUser);
  }

  public getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  public checkIfUserNameTaken(username: string): boolean {
    return this.users.some(user => user.username === username);
  }
}
