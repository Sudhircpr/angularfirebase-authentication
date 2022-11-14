import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


const config = {
  apiKey: "AIzaSyCB2g836bON0occUbPZF7qK4A0jBKvxaOg",
  authDomain: "geportal-aaeca.firebaseapp.com",
  projectId: "geportal-aaeca",
  storageBucket: "geportal-aaeca.appspot.com",
  messagingSenderId: "480915991146",
  appId: "1:480915991146:web:5b96aa4927c5c675b97813"
};


@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.scss'],
})
export class PhoneNumberComponent implements OnInit {
  phoneNumber: any;
  reCaptchaVerifier!: any;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
    ) {}

  ngOnInit() {
    firebase.initializeApp(config);
  }

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    // console.log(this.reCaptchaVerifier);

    // console.log(this.phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem('verificationId',
         JSON.stringify(confirmationResult.verificationId)
        );
        this.router.navigate(['/code']);
      })
      .catch((error) => {
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }
}