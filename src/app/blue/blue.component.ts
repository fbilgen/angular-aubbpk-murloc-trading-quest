
import { Component, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

import { IngredientService } from '../ingredient.service';

import { Item, Ingredient } from '.././app.models';

@Component({
  selector: 'app-blue',
  templateUrl: 'blue.component.html'
})
export class BlueComponent {
  bluesForm: FormGroup;
  blues: Item[];

  @Output() blueTargets = new EventEmitter<Ingredient[]>();


  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService) {
  }

  ngOnInit() {
    // initialize the form
    this.bluesForm = this.formBuilder.group({
      blue1: this.formBuilder.group({ name: [''], amount: [''] }),
      blue2: this.formBuilder.group({ name: [''], amount: [''], }),
      blue3: this.formBuilder.group({ name: [''], amount: [''] })
    });

    this.blues = this.ingredientService.getBlues();
  }


  getBlueTargets() {

    let target: Ingredient[] =[];

    Object.keys(this.bluesForm.controls).forEach(key => {
      let ingredient = this.bluesForm.controls[key].value as Ingredient;
      if (ingredient.name && ingredient.amount) {

        console.log(this.bluesForm.controls[key].value);
        target.push(this.bluesForm.controls[key].value);
      }

    });

    this.blueTargets.emit(target);


    // console.log(this.bluesForm.value as FormArray);
    // console.log(this.bluesForm.get('blue1').value);
  }
}
