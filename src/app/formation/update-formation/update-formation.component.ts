import { Component, OnInit } from '@angular/core';
import { Formation } from '../../model/formation';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import {FormateurService} from '../../services/formateur.service';
import {Formateur} from '../../model/formateur';


@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id: number;
  formation: Formation;

  constructor(private route: ActivatedRoute,private router: Router,private formateurservice: FormateurService,
    private formationService: FormationService) { }

    formateurs: Formateur[];

  ngOnInit() {
    this.formation = new Formation();
    this.listFormateur();


    this.id = this.route.snapshot.params['id'];
    
    this.formationService.getFormation(this.id)
      .subscribe(data => {
        console.log(data)
        this.formation = data;
      }, error => console.log(error));
  }

  updateFormation() {
    this.formationService.updateFormation(this.id, this.formation)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formation = new Formation();
    this.gotoList();
  }

  onSubmit() {
    this.updateFormation();    
  }

  gotoList() {
    this.router.navigate(['home/list-formation']);
  }

  public listFormateur() {
    this.formateurservice.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });
  }

}