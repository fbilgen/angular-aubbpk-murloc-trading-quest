import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Item, Ingredient} from './app.models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bluesForm: FormGroup;

  hurlgrl = ['Sweet Sea Vegetable', 'Jar of Fish Faces', 'Dirty Murloc Sock', 'Healty Murloc Lunch', 'Cultist Pinky Finger'];

  constructor() {
  }
  ngOnInit() {

    let target: Ingredient[] = [
      { name: 'Beckoners Rosetta Stone', amount: 1 },
      { name: 'Pulsating Blood Stone', amount: 1 },
      { name: 'Overwhelmingly-Alluring Idol', amount: 1 }
    ];

    let target1: Ingredient[] = [
      { name: 'Healthy Murloc Lunch', amount: 3 },
      { name: 'Particularly Dense Rock', amount: 3 },
      { name: 'Smelly Pile of Gloop', amount: 3 }
    ];


    //this.preparePurple(target);

    // this.prepareBlue(target1);
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

  // prepareBlue(target: Ingredient[]) {
  //   target.forEach(x => {
  //     console.log('>>>>>> ' + x.name + ',' + x.amount);
  //     var greens = this.blues.find(b => b.name == x.name).ingredients;

  //     greens.forEach(g => {
  //       var green = g.name;
  //       console.log(g.name + ',' + x.amount * g.amount);

  //       var whites = [...this.greens.find(w => w.name == green).ingredients];
  //       whites.forEach(w => {
  //         var white = w.name;
  //         console.log(w.name + ',' + x.amount * g.amount * w.amount);
  //       });
  //     });
  //   });
  // }

}


