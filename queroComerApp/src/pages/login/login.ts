import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string;
  password:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.username.length==0 || this.password.length==0){
      let alert = this.alertCtrl.create({
        title: 'ERRO',
        subTitle: 'Sua senha ou nome de usuário podem estar erradas',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.setRoot(HomePage);
    }
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}
