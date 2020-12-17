import { Component, OnInit } from '@angular/core';
import { FormationService } from '../../services/formation.service';
import { Formation } from '../../model/formation';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {

   formations: Observable<Formation[]>;

  constructor(private formationService: FormationService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.formations = this.formationService.getFormationsList();
  }

  deleteFormation(id: number) {
    this.formationService.deleteFormation(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  formationDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateFormation(id: number){
    this.router.navigate(['update-formation', id]);
  }
}