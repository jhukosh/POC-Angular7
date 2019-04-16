import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KittenTransferService {
  kittensList = localStorage.getItem('kittenList') ? JSON.parse(localStorage.getItem('kittenList')) : [];


  constructor() { }

  // receiving new kitten from createKitten component and adding it to the list

  addKitten(kitten){
    this.kittensList.push(kitten);
    console.log(this.kittensList);
    this.saveToLocalStorage();
  }

  // sending kittenList to ListComponent

  sendKittenList(){
    return this.kittensList;
  }

  saveToLocalStorage() {
    localStorage.setItem('kittensList', JSON.stringify(this.kittensList));
  }
}
