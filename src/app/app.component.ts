import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Item, Ingredient } from './app.models';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bluesForm: FormGroup;
  greens: Item[];
  blues: Item[];
  result: string[];

  hurlgrl = ['Sweet Sea Vegetable', 'Jar of Fish Faces', 'Dirty Murloc Sock', 'Healty Murloc Lunch', 'Cultist Pinky Finger'];

  constructor( private ingredientService: IngredientService) {
  }

  prepareBlues(target: Ingredient[]) {
    this.result = [];
    this.greens  = this.ingredientService.getGreens();
    this.blues = this.ingredientService.getBlues();
    target.forEach(x => {
      console.log('>>>>>> ' + x.name + ',' + x.amount);
      this.result.push('>>>>>> ' + x.name + ',' + x.amount);
      var greens = this.blues.find(b => b.name == x.name).ingredients;

      greens.forEach(g => {
        var green = g.name;
        console.log('Green: ' + g.name + ',' + x.amount * g.amount);
          this.result.push('Green: ' + g.name + ',' + x.amount * g.amount);

        var whites = [...this.greens.find(w => w.name == green).ingredients];
        whites.forEach(w => {
          var white = w.name;
          console.log('White: ' + w.name + ',' + x.amount * g.amount * w.amount);
          this.result.push('White: ' + w.name + ',' + x.amount * g.amount * w.amount);
        });
      });
    });
  }

  // preparePurple(target: Ingredient[]) {
  //   target.forEach(x => {
  //     var blues = this.purples.find(p => p.name == x.name).ingredients;
  //     blues.forEach(b => {
  //       var blue = b.name;
  //       var greens = [...this.blues.find(b => b.name == blue).ingredients];

  //       greens.forEach(g => {
  //         var green = g.name;

  //         var whites = [...this.greens.find(w => w.name == green).ingredients];
  //         whites.forEach(w => {
  //           var white = w.name;
  //           var amount = b.amount * g.amount * w.amount;


  //           console.log(w.name + ',' + amount);
  //         });


  //       });

  //     });
  //   })

  // }



}


