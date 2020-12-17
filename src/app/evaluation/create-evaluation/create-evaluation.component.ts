import { EvaluationService } from '../../services/evaluation.service';
import { Evaluation } from '../../model/evaluation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-evaluation',
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.css']
})
export class CreateEvaluationComponent implements OnInit {

  evaluation: Evaluation = new Evaluation();
  submitted = false;

  constructor(private evaluationService: EvaluationService,
    private router: Router) { }

  ngOnInit() {
  }

  newEvaluation(): void {
    this.submitted = false;
    this.evaluation = new Evaluation();
  }

  save() {
    this.evaluationService.createEvaluation(this.evaluation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.evaluation = new Evaluation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}