import { Component, OnInit } from '@angular/core';
import { KittenAdoptionService } from '../services/kitten-adoption.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss']
})
export class UserKittenComponent implements OnInit {
  kittensAdopted = localStorage.getItem('kittensAdopted') ? JSON.parse(localStorage.getItem('kittensAdopted')) : [];
  kittenPicture : string;

  constructor(private kittenAdoptionService : KittenAdoptionService) { }

  ngOnInit() {
    this.displayAdoptedKittens();
  }

  // receiving adopted kittens list from adoption service 

  displayAdoptedKittens(){
    this.kittensAdopted = this.kittenAdoptionService.sendAdoptedKittensList();
    console.log(this.kittensAdopted);
    this.saveToLocalStorage();
  }

  sendKittenPic(kitten){
    console.log(kitten);
    this.kittenPicture = kitten.picture;
    this.saveToLocalStorage();
    return this.kittenPicture;
  }

  saveToLocalStorage() {
    localStorage.setItem('kittensAdopted', JSON.stringify(this.kittensAdopted));
  }

}

