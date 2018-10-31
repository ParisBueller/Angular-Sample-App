import { Injectable } from '@angular/core';

import { User } from '../../models/User';

@Injectable()
export class FormService {
  user: User = {
    email: '',
    password: ''
  }
  constructor() {
    this.user = null;
   }

}
