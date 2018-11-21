import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  goToFavoritosPage(){
    this.navCtrl.push(FavoritosPage);
  }

  goToSobrePage(){
    this.navCtrl.push(SobrePage);
  }

  goToLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

}
