import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Item, Ingredient } from './app.models';
import { IngredientService } from './ingredient.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  bluesForm: FormGroup;
  greens: Item[];
  blues: Item[];
  blueResult: Item[] = [];

  hurlgrl = ['Sweet Sea Vegetable', 'Jar of Fish Faces', 'Dirty Murloc Sock', 'Healty Murloc Lunch', 'Cultist Pinky Finger'];

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit(){
    this.greens = this.ingredientService.getGreens();
    this.blues = this.ingredientService.getRares();
  }

  prepareRares(target: Ingredient[]) {

    target.forEach(x => {
      let blueItem = { name: x.name, ingredients: [], color:"blue", amount:x.amount };
      var greens = this.blues.find(b => b.name == x.name).ingredients;

      greens.forEach(g => {
        blueItem.ingredients.push({ name: g.name, amount: x.amount * g.amount, color:"green"});

        var whites = [...this.greens.find(w => w.name == g.name).ingredients];
        whites.forEach(w => {
        blueItem.ingredients.push({ name: w.name, amount: x.amount * g.amount * w.amount, color:"white" });
        });
      });

      this.blueResult.push(blueItem);
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


