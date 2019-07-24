
import { Component, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

import { IngredientService } from '../ingredient.service';

import { Item, Ingredient } from '.././app.models';

@Component({
  selector: 'app-epic',
  templateUrl: 'epic.component.html'

})
export class EpicComponent{
  epicsForm: FormGroup;
  epics: Item[];

  @Output() epicTargets = new EventEmitter<Ingredient[]>();


  constructor(
    private formBuilder: FormBuilder,
    private ingredientService: IngredientService) {
  }

ngOnInit() {
    // initialize the form
    this.epicsForm = this.formBuilder.group({
      epic1: this.formBuilder.group({ name: [''], amount: [''] }),
      epic2: this.formBuilder.group({ name: [''], amount: [''], }),
      epic3: this.formBuilder.group({ name: [''], amount: [''] })
    });

    this.epics = this.ingredientService.getEpics();
  }


  getEpicTargets() {

    let target: Ingredient[] =[];

    Object.keys(this.epicsForm.controls).forEach(key => {
      let ingredient = this.epicsForm.controls[key].value as Ingredient;
      if (ingredient.name && ingredient.amount) {
        target.push(this.epicsForm.controls[key].value);
      }

    });

    this.epicTargets.emit(target);

  }
}