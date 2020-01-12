import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // send value from register comp to home component
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successfully!');
    }, error => {
      console.log(error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
