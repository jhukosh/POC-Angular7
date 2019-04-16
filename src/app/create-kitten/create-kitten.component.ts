import { Component, OnInit } from '@angular/core';

import { Kitten }    from '../kitten';
import { KittenTransferService } from '../services/kitten-transfer.service';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  kittenName :string;
  kittenRace:string;
  kittenBirth: string;
  kittenPicture: string;
  kitten : object;
  submitted :boolean;
  
  constructor(private kittenTransferService : KittenTransferService) { }

  ngOnInit() {
  }

  // Creating and adding new kitten to list and sending to the service

  addKittenToList(){
    this.kitten = new Kitten(this.kittenName, this.kittenRace, this.kittenBirth, this.kittenPicture)
    this.kittenTransferService.addKitten(this.kitten);
    this.kittenName = '';
    this.kittenRace = '';
    this.kittenBirth = '';
    this.kittenPicture = '';
  }

  enableSubmit(){
    
  }
}
