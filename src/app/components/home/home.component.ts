import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private auth: AuthService, private router: Router) {
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }
}