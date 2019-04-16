import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenAdoptionService {
  kittensAdopted = localStorage.getItem('kittensAdopted') ? JSON.parse(localStorage.getItem('kittensAdopted')) : [];

  constructor() { }

  // receiving adopted kitten from listComponent

  adoptedKittens(kitten){
    this.kittensAdopted.push(kitten);
    console.log(this.kittensAdopted);
    this.saveToLocalStorage();
  }

  // sending adopted kittens list to userComponent

  sendAdoptedKittensList(){
    return this.kittensAdopted;
  }

  saveToLocalStorage() {
    localStorage.setItem('kittensAdopted', JSON.stringify(this.kittensAdopted));
  }
}
