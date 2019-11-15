import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './../model/card';
import { List } from './../model/list';
import { Answer } from './../model/answer';

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

  listAnswer(id: string) {
    return this.http.get<Answer>(this.HOST_URL+'pub/answer/group/'+id);
  }

  agreeAnswer(id: string) {
    return this.http.get(this.HOST_URL+'pub/answer/ok/'+id);
  }

  disagreeAnswer(id: string) {
    return this.http.get(this.HOST_URL+'pub/answer/no/'+id);
  }
}
