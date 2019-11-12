import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './../model/card';
import { List } from './../model/list';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private http: HttpClient) { }

  HOST_URL: string = "http://localhost:3000/"

  getConfig() {
    return this.http.get(this.HOST_URL);
  }

  listQuestion() {
    return this.http.get<Card[]>(this.HOST_URL+'pub/question');
  }

  agreeAnswer(id: string) {
    return this.http.get(this.HOST_URL+'pub/answer/ok/'+id);
  }

  disagreeAnswer(id: string) {
    return this.http.get(this.HOST_URL+'pub/answer/no/'+id);
  }
}
