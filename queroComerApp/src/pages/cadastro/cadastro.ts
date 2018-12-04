import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

//importação do firebase
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

//importação de interface
import { Receita } from '../../model/receita';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
	public receitas:any;
	public receita = {} as Receita;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
  	this.receitas = "";
  }

//função para cadastrar receita
  cadastrar(receita:Receita) {
  	try {
      this.dbService.save(receita);  //chama a função
  		alert("Receita cadastrada");
    } catch (e) {
        alert("Não foi possível cadastrar a receita, tente mais tarde");
    }

  	this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
}
