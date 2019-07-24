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
  result: Item[];

  hurlgrl = ['Sweet Sea Vegetable', 'Jar of Fish Faces', 'Dirty Murloc Sock', 'Healty Murloc Lunch', 'Cultist Pinky Finger'];

  constructor(private ingredientService: IngredientService) {
  }

  prepareBlues(target: Ingredient[]) {
    this.result = [];
    this.greens = this.ingredientService.getGreens();
    this.blues = this.ingredientService.getBlues();
    target.forEach(x => {
      this.result.push({ name: x.name, ingredients: [], color:"blue", amount:x.amount });
      var greens = this.blues.find(b => b.name == x.name).ingredients;
      var blueTarget = this.result.find(item => item.name == x.name);

      greens.forEach(g => {
        blueTarget.ingredients.push({ name: g.name, amount: x.amount * g.amount, color:"green"});
        //this.result.push({name : g.name , amount : x.amount * g.amount });

        var whites = [...this.greens.find(w => w.name == g.name).ingredients];
        whites.forEach(w => {
          blueTarget.ingredients.push({ name: w.name, amount: x.amount * g.amount * w.amount, color:"white" });
          // this.result.push({name : w.name , amount: x.amount * g.amount * w.amount});
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


