import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  userData: any;

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
    ) {}

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('user_data') || '{}');
    this.userData = data.user.phoneNumber;
    console.log(this.userData);
  }

  // logout() {
  //   return this.afAuth.signOut().then(() => {

  //       this.router.navigate(['sign-in']);

  //   });
  // }
}