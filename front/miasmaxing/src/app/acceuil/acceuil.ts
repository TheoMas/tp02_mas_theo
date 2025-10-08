import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recap } from '../recap/recap';

@Component({
  selector: 'app-acceuil',
  imports: [ReactiveFormsModule, Recap],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.css'
})
export class Acceuil {
  pollutionFormValid: boolean = false;
  pollutionFormValues: { [key: string]: string | null} = {};

  pollutionForm = new FormGroup({
    pollutionTitle: new FormControl('' , Validators.required),
    pollutionType: new FormControl('' , Validators.required),
    pollutionDescription: new FormControl('' , Validators.required),
    pollutionDate: new FormControl('' , Validators.required),
    pollutionLocation: new FormControl('' , Validators.required),
    pollutionLatitude: new FormControl('' , [Validators.required, Validators.pattern(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/)]),
    pollutionLongitude: new FormControl('' , [Validators.required, Validators.pattern(/^[-+]?((1[0-7]\d)|([1-9]?\d))(\.\d+)?$/)]),
    pollutionPhoto: new FormControl(''),
  });

  onSubmit() {
    console.log(this.pollutionForm.value);
    this.pollutionFormValid = true;
    this.pollutionFormValues = this.pollutionForm.value;
    this.pollutionForm.reset();
  }
}
