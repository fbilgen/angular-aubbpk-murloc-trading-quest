import { Injectable } from "@angular/core";
import {Ingredient, Item} from "./app.models";

@Injectable()
export class IngredientService{

  whites: Item[] = [
    { name: 'Unidentified Mass', ingredients: [{ name: 'G', amount: 1 }] },
    { name: 'Slimy Naga Eyeball', ingredients: [{ name: 'G', amount: 1 }] },
    { name: 'Sweet Sea Vegetable', ingredients: [{ name: 'G', amount: 1 }] },
    { name: 'Flatulent Fish', ingredients: [{ name: 'G', amount: 1 }] },
  ]

  greens: Item[] = [
    { name: 'Bag of Who-Knows-What', ingredients: [{ name: 'Flatulent Fish', amount: 2 }] },
    { name: 'Just Regular Butter', ingredients: [{ name: 'Sweet Sea Vegetable', amount: 4 }] },
    { name: 'Disintegrating Sand Sculpture', ingredients: [{ name: 'Sweet Sea Vegetable', amount: 4 }] },
    { name: 'Jar of Fish Faces', ingredients: [{ name: 'Flatulent Fish', amount: 5 }] },
    { name: 'Dirty/Clean Murloc Sock', ingredients: [{ name: 'Unidentified Mass', amount: 6 }] },
    { name: 'Curious Murloc Horn', ingredients: [{ name: 'Slimy Naga Eyeball', amount: 3 }] },
  ];

  blues: Item[] = [
    { name: 'Ghost Food', ingredients: [{ name: 'Curious Murloc Horn', amount: 6 }] },
    { name: 'Particularly Dense Rock', ingredients: [{ name: 'Bag of Who-Knows-What', amount: 3 }, { name: 'Jar of Fish Faces', amount: 3 }] },
    { name: 'Smelly Pile of Gloop', ingredients: [{ name: 'Just Regular Butter', amount: 2 }] },
    { name: 'Healthy Murloc Lunch', ingredients: [{ name: 'Curious Murloc Horn', amount: 5 }] },
    { name: 'Extra-Slimy Snail', ingredients: [{ name: 'Disintegrating Sand Sculpture', amount: 5 }] },
    { name: 'Sea Giant Foot Dust', ingredients: [{ name: 'Dirty/Clean Murloc Sock', amount: 3 }] }
  ];

  purples: Item[] = [
    { name: 'Beckoners Rosetta Stone', ingredients: [{ name: 'Smelly Pile of Gloop', amount: 2 }, { name: 'Particularly Dense Rock', amount: 9 }] },
    { name: 'Pulsating Blood Stone', ingredients: [{ name: 'Sea Giant Foot Dust', amount: 8 }, { name: 'Healthy Murloc Lunch', amount: 7 }] },
    { name: 'Cultist Pinky Finger', ingredients: [{ name: 'Smelly Pile of Gloop', amount: 4 }, { name: 'Ghost Food', amount: 7 }] },
    { name: 'Overwhelmingly-Alluring Idol', ingredients: [{ name: 'Healthy Murloc Lunch', amount: 8 }, { name: 'Ghost Food', amount: 4 }] },
  ]
  constructor(){

  }

  getBlues(){
    return this.blues;
  }

  getGreens(){
    return this.greens;
  }

  getPurples(){
    return this.purples;
  }
 getWhites(){
   return this.whites;
 }
}