import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly tokenKey = 'auth_Token'
  
  setToken(tokenValue: string) {
    localStorage.setItem(this.tokenKey, tokenValue)
  }

  getToken() {
    return localStorage.getItem(this.tokenKey)
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey)
  }

  isAuthentificated(): Boolean {
    return this.getToken() !== null;
  }

  register(username: string, pasword: string) {
     console.log('Registered', username)
  }

  login(username: string, pasword: string) {
    this.setToken('Fake_Token')
 }
  
 logout() {
  this.removeToken()
}


}
