import { Component, OnInit } from '@angular/core';
import { KittenTransferService } from '../services/kitten-transfer.service';
import { KittenAdoptionService } from '../services/kitten-adoption.service';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {

  kittenList = localStorage.getItem('kittenList') ? JSON.parse(localStorage.getItem('kittenList')) : [];
  kittenName = 'Twins';
  kittenRace = 'Bastards';
  kittenBirth = 'November the 1st, 2018';
  kittenPicture = '../assets/pictures/Kittens.jpg';
  kittenNative : object;
  firstKitten = localStorage.getItem('firstKitten') ? JSON.parse(localStorage.getItem('firstKitten')) : true;

  constructor(private kittenTransferService : KittenTransferService, private kittenAdoptionService : KittenAdoptionService) { }

  ngOnInit() {
    this.displayKittens()
  }

  // receiving updated list from KittenTransferService

  displayKittens(){
    this.kittenList = this.kittenTransferService.sendKittenList();
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('kittenList', JSON.stringify(this.kittenList));
    localStorage.setItem('firstKitten', JSON.stringify(this.firstKitten));
  }

  // sending chosen kitten to adoptionService 

  adopt(kitten, index){
    this.kittenAdoptionService.adoptedKittens(kitten);
    this.kittenList.splice(index, 1);
    this.saveToLocalStorage();
  }

  adoptNatives() {
    this.kittenNative = new Kitten (this.kittenName, this.kittenRace, this.kittenBirth, this.kittenPicture);
    this.kittenAdoptionService.adoptedKittens(this.kittenNative);
    this.firstKitten = false;
    this.saveToLocalStorage();
  }

}
