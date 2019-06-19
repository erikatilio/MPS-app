import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

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
  public receitas: any;
  public receita = {} as Receita;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider,
    private alertCtrl: AlertController) {
    this.receitas = "";
  }

  public mensagem(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    al.present();
  }

  //função para cadastrar receita
  cadastrar(receita: Receita) {
    try {
      this.dbService.save(receita);  //chama a função
      this.mensagem("Parabéns", "Sua receita foi cadastrada com sucesso.");
    } catch (e) {
      this.mensagem("Desculpe", "Não foi possivel cadastrar sua receita, tente mais tarde.");
    }

    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }
}
