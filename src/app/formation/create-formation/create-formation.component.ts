import { FormationService } from '../../services/formation.service';
import { Formation } from '../../model/formation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormateurService} from '../../services/formateur.service';
import {Formateur} from '../../model/formateur';


@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {

  formation: Formation = new Formation();
  submitted = false;

  constructor(private formationService: FormationService,private formateurservice: FormateurService,
    private router: Router) { }

    formateurs: Formateur[];

  ngOnInit() {
    this.listFormateur();
  }

  newFormation(): void {
    this.submitted = false;
    this.formation = new Formation();
  }

  save() {
    this.formationService.createFormation(this.formation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formation = new Formation();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['formation']);
  }

  public listFormateur() {
    this.formateurservice.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });
  }

}