import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SignUpComponent } from '../signup/sign-up.component';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide: boolean = false;
  constructor(
    public authService: AuthService,
    public dialog: MatDialog
  ) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SignUpComponent, {
      width: 'auto',
      height: '100px;',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  ngOnInit() { }
}