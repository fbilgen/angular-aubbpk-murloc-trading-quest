import { Injectable } from "@angular/core";
import {Ingredient, Item} from "./app.models";

@Injectable()
export class IngredientService{

  commons: Item[] = [
    { name: 'Unidentified Mass', ingredients: [{ name: 'G', amount: 1 }], murloc: "Flrgrrl" },
    { name: 'Slimy Naga Eyeball', ingredients: [{ name: 'G', amount: 1 }], murloc: "Mrrglrlr" },
    { name: 'Sweet Sea Vegetable', ingredients: [{ name: 'G', amount: 1 }], murloc: "Hurlgrl"  },
    { name: 'Flatulent Fish', ingredients: [{ name: 'G', amount: 1 }], murloc: "Grrmrlg" }
  ]

  uncommons: Item[] = [
    { name: 'Bag of Who-Knows-What', ingredients: [{ name: 'Flatulent Fish', amount: 2 }], murloc: "Flrgrrl" },
    { name: 'Just Regular Butter', ingredients: [{ name: 'Sweet Sea Vegetable', amount: 4 }], murloc: "Flrgrrl" },
    { name: 'Disintegrating Sand Sculpture', ingredients: [{ name: 'Sweet Sea Vegetable', amount: 4 }], murloc: "Mrrglrlr"  },
    { name: 'Jar of Fish Faces', ingredients: [{ name: 'Flatulent Fish', amount: 5 }], murloc: "Hurlgrl" },
    { name: 'Dirty/Clean Murloc Sock', ingredients: [{ name: 'Unidentified Mass', amount: 6 }], murloc: "Hurlgrl"  },
    { name: 'Curious Murloc Horn', ingredients: [{ name: 'Slimy Naga Eyeball', amount: 3 }], murloc: "Grrmrlg" }
  ];

  rares: Item[] = [
    { name: 'Ghost Food', ingredients: [{ name: 'Curious Murloc Horn', amount: 6 }], murloc: "Flrgrrl" },
    { name: 'Particularly Dense Rock', ingredients: [{ name: 'Bag of Who-Knows-What', amount: 3 }, { name: 'Jar of Fish Faces', amount: 3 }],murloc: "Mrrglrlr" },
    { name: 'Smelly Pile of Gloop', ingredients: [{ name: 'Just Regular Butter', amount: 2 }], murloc: "Mrrglrlr" },
    { name: 'Healthy Murloc Lunch', ingredients: [{ name: 'Curious Murloc Horn', amount: 5 }], murloc: "Hurlgrl" },
    { name: 'Extra-Slimy Snail', ingredients: [{ name: 'Disintegrating Sand Sculpture', amount: 5 }] ,murloc: "Grrmrlg" },
    { name: 'Sea Giant Foot Dust', ingredients: [{ name: 'Dirty/Clean Murloc Sock', amount: 3 }],murloc: "Grrmrlg" }
  ];

  epics: Item[] = [
    { name: 'Beckoners Rosetta Stone', ingredients: [{ name: 'Smelly Pile of Gloop', amount: 2 }, { name: 'Particularly Dense Rock', amount: 9 }], murloc: "Flrgrrl" },
    { name: 'Pulsating Blood Stone', ingredients: [{ name: 'Sea Giant Foot Dust', amount: 8 }, { name: 'Healthy Murloc Lunch', amount: 7 }],murloc: "Mrrglrlr" },
    { name: 'Cultist Pinky Finger', ingredients: [{ name: 'Smelly Pile of Gloop', amount: 4 }, { name: 'Ghost Food', amount: 7 }], murloc: "Hurlgrl" },
    { name: 'Overwhelmingly-Alluring Idol', ingredients: [{ name: 'Healthy Murloc Lunch', amount: 8 }, { name: 'Ghost Food', amount: 4 }],murloc: "Grrmrlg" }
  ]
  constructor(){
  }

  getCommons(){
   return this.commons;
  }
  getUncommons(){
    return this.uncommons;
  }
  getRares(){
    return this.rares;
  }
  getEpics(){
    return this.epics;
  }
}