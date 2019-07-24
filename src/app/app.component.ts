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

  uncommons: Item[];
  rares: Item[];
  epics: Item[];
  rareResult: Item[];
  epicResult: Item[];

  hurlgrl = ['Sweet Sea Vegetable', 'Jar of Fish Faces', 'Dirty Murloc Sock', 'Healty Murloc Lunch', 'Cultist Pinky Finger'];

  constructor(private ingredientService: IngredientService) {
  }

  ngOnInit() {
    this.uncommons = this.ingredientService.getUncommons();
    this.rares = this.ingredientService.getRares();
    this.epics = this.ingredientService.getEpics();
  }

  prepareRares(target: Ingredient[]) {
    this.rareResult = [];
    target.forEach(x => {
      // create rareItem result
      let result = { name: x.name, ingredients: [], color: "blue", amount: x.amount };

      // uncommons
      this.rares.find(r => r.name == x.name).ingredients
        .forEach(u => {
          result.ingredients.push({ name: u.name, amount: x.amount * u.amount, color: "green" });
          //commons : clone from uncommons
          [...this.uncommons.find(w => w.name == u.name).ingredients]
            .forEach(w => {
              result.ingredients.push({ name: w.name, amount: x.amount * u.amount * w.amount, color: "white" });
            });
        });

      this.rareResult.push(result);
    });
  }


  prepareEpics(target: Ingredient[]) {
    this.epicResult = [];

    target.forEach(x => {
      // create epicItem result
      let result = { name: x.name, ingredients: [], color: "purple", amount: x.amount };

      // rares
      this.epics.find(e => e.name == x.name).ingredients
        .forEach(r => {
          result.ingredients.push({ name: r.name, amount: x.amount * r.amount, color: "blue" });
          // uncommons: clone from rares
          [...this.rares.find(y => y.name == r.name).ingredients]
            .forEach(u => {
              result.ingredients.push({ name: u.name, amount: x.amount * r.amount * u.amount, color: "green" });
              //commons : clone from uncommons
              [...this.uncommons.find(w => w.name == u.name).ingredients]
                .forEach(w => {
                  result.ingredients.push({ name: w.name, amount: x.amount * r.amount * u.amount * w.amount, color: "white" });
                });
            });
        });
      this.epicResult.push(result);
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


