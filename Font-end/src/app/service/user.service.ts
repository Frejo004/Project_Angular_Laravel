import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { USER } from '../data/userConnexion'
import { UserConnexion } from '../models/user-connexion'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Méthode de vérification d'user lors du login
  constructor (private router: Router, private http: HttpClient) {}

  private user: UserConnexion[] = USER

  public getUser = (): UserConnexion[] => this.user

  userLogin: boolean = false
  login (email: string, password: string): boolean {
    const user = this.user.find(
      u => u.email === email && u.password === password
    )

    if (user) {
      this.router.navigate(['/'])
      return true
    } else {
      return false
    }
  }

  //Méthodes pour faire des requêtes à l'API
  private apiUrl = 'http://127.0.0.1:8000/api/users' // URL de l'API Laravel

  getUsers (): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  addUser (user: any): Observable<any> {
    return this.http.post(this.apiUrl, user)
  }
}
