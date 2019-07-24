
import { Component, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

import { IngredientService } from '../ingredient.service';

import { Item, Ingredient } from '.././app.models';

@Component({
  selector: 'app-rare',
  templateUrl: 'rare.component.html'
})
export class RareComponent {
  raresForm: FormGroup;
  blues: Item[];

  @Output() rareTargets = new EventEmitter<Ingredient[]>();


  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService) {
  }

  ngOnInit() {
    // initialize the form
    this.raresForm = this.formBuilder.group({
      blue1: this.formBuilder.group({ name: [''], amount: [''] }),
      blue2: this.formBuilder.group({ name: [''], amount: [''], }),
      blue3: this.formBuilder.group({ name: [''], amount: [''] })
    });

    this.blues = this.ingredientService.getRares();
  }


  getBlueTargets() {

    let target: Ingredient[] =[];

    Object.keys(this.raresForm.controls).forEach(key => {
      let ingredient = this.raresForm.controls[key].value as Ingredient;
      if (ingredient.name && ingredient.amount) {
        target.push(this.raresForm.controls[key].value);
      }

    });

    this.rareTargets.emit(target);


    // console.log(this.bluesForm.value as FormArray);
    // console.log(this.bluesForm.get('blue1').value);
  }
}
