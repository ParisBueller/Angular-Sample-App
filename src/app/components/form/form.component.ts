import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { User } from '../../../models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  }

  @ViewChild('userForm') form: any;

  constructor(private flashMessage: FlashMessagesService,
              private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit({valid}: {valid: boolean}) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
        this.flashMessage.show('Success!', {
          cssClass: 'alert-success', timeout: 4000
        });
    }
    //Redirect with router to new page with form values
  }

}
