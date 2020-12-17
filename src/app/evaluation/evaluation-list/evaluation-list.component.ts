import { Observable } from "rxjs";
import { EvaluationService } from "../../services/evaluation.service";
import { Evaluation } from "../../model/evaluation";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-evaluation-list",
  templateUrl: "./evaluation-list.component.html",
  styleUrls: ["./evaluation-list.component.css"]
})
export class EvaluationListComponent implements OnInit {
  evaluations: Observable<Evaluation[]>;

  constructor(private evaluationService: EvaluationService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.evaluations = this.evaluationService.getEvaluationsList();
  }

  deleteEvaluation(id: number) {
    this.evaluationService.deleteEvaluation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
