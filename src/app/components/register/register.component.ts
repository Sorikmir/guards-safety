import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  onRegister() {
    this.auth.register(this.username, this.password);
    this.router.navigate(['/login']);
  }
}