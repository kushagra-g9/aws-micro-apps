import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return [
      { id: 1, name: 'Rahul', role: 'Developer' },
      { id: 2, name: 'Ankit', role: 'DevOps Engineer' },
      { id: 3, name: 'Neha', role: 'QA Engineer' }
    ];
  }
}
