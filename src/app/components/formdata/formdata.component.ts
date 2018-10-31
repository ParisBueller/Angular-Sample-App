import { Component, OnInit } from '@angular/core';

import { FormService } from '../../services/form.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent implements OnInit {
  user = null;
  constructor(private formservice: FormService) { }
  ngOnInit() {
    this.user = JSON.stringify(this.formservice.user, null, 2);
  }


}
