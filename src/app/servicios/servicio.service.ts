import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

const TOKEN_KEY = 'AuthToken'
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url = "https://backendportfolioapbrunocorti.herokuapp.com/personas/"
  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.url + "traer/perfil");
  }
}
