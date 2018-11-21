import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username:string;
  password:string;
  repassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0){
      let alert = this.alertCtrl.create({
        title: 'ERRO',
        subTitle: 'Preencha todos os campos corretamente!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.pop();
    }
  }

}
