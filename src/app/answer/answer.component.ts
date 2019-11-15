import { Component, OnInit, Input } from '@angular/core';
//import { Answer } from './../../model/answer';
import { ConfigService } from './../../service/init.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() qid: string;

  answerOk: number;
  answerNo: number;
  answerNull: number;
  myAnswer: boolean;

  constructor(private configService: ConfigService) {
    this.answerOk = 0;
    this.answerNo = 0;
    this.answerNull = 22;
    this.myAnswer = true;

  }

  ngOnInit() {
    this.groupAnswer(this.qid);
  }

  groupAnswer(id: string) {
    this.configService.listAnswer(id).subscribe( resp => {
      for (let i = 0; i < resp.length; i++){
        if (resp[i].answer == true) {
          this.answerOk = this.answerOk+1;
        }
      }
    });
  }


}
