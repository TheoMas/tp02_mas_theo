import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recap',
  imports: [CommonModule],
  templateUrl: './recap.html',
   styleUrl: './recap.css'
})
export class Recap {
  @Input() pollutionFormValues: { [key: string]: string | null} = {};
}