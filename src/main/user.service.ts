import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService{
  getUsers():User[]{
    return [
      {
        name:'安否太郎',
        id:'12345678'
      },
      {
        name:'安否ニ郎',
        id:'12345679'
      }
    ]; 
  }
}