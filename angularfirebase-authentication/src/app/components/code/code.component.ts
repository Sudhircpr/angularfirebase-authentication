import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  otp!: string;
  verify: any;
  constructor(private router: Router) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otpCode: any) {
    this.otp = otpCode;
    console.log(this.otp);
  }

  handleClick() {
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

   
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log('here the code is' +response);
        console.log(response);
        // this.router.navigate(['/dashboard']);
        // localStorage.setItem('user_data', JSON.stringify(response));
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}