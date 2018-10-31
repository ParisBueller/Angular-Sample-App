import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

import { User } from '../../../models/User';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    subscription: ''
  }

  formValue: string = '';

  show: boolean;

  subscriptions = [ 'Basic', 'Advanced', 'Pro'];
  default: string = "Advanced";
  subscriptionForm: FormGroup;

  confirm: boolean;

  @ViewChild('userForm') form: any;
  constructor(private flashMessage: FlashMessagesService,
              private router: Router,
              private formservice: FormService

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
  //clear form field
  clearForm() {
    if(window.confirm('Are you sure?') == true) {
      this.formValue = null;
    }   
  }

  //Toggle show/hide password
  toggleShow() {
    this.show = !this.show;
  }
  //submit form
  onSubmit({value,valid}: {valid: boolean, value: User}) {

    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      console.log('submitted');
      this.formservice.user = this.user;
      
        this.flashMessage.show('Success!', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['formdata']);
    }
  }

}
