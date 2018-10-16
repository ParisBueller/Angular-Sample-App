import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';

import { User } from '../../../models/User';
import { FormGroup, FormControl } from '@angular/forms';


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

  show: boolean;

  subscriptions = [ 'Basic', 'Advanced', 'Pro'];
  default: string = "Advanced";

  subscriptionForm: FormGroup;

  @ViewChild('userForm') form: any;

  constructor(private flashMessage: FlashMessagesService,
              private router: Router
    ) { 
      // set show/toggle password 
      this.show = false;
      //set default value of dropdown subscription select
      this.subscriptionForm = new FormGroup({
        subscription: new FormControl(null)
      });
      this.subscriptionForm.controls['subscription'].setValue(this.default, {onlySelf: true});
    }

  ngOnInit() {
  }

  //Toggle show/hide password
  toggleShow() {
    this.show = !this.show;
  }
  //submit form
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
