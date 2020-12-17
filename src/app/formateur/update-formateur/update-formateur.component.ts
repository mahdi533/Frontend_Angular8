import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../model/formateur';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from '../../services/formateur.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  id: number;
  formateur: Formateur;

  constructor(private route: ActivatedRoute,private router: Router,
    private formateurService: FormateurService) { }

  ngOnInit() {
    this.formateur = new Formateur();

    this.id = this.route.snapshot.params['id'];
    
    this.formateurService.getFormateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.formateur = data;
      }, error => console.log(error));
  }

  updateFormateur() {
    this.formateurService.updateFormateur(this.id, this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.gotoList();
  }

  onSubmit() {
    this.updateFormateur();    
  }

  gotoList() {
    this.router.navigate(['/formateurs']);
  }
}