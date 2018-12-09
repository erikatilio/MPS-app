import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Receita } from '../../model/receita';

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {
  public receita = {
    'curtidas': 0,
    'descurtidas': 0,
    'descricao': '',
    'imagem': '',
    'nome': '',
    'ingredientes': '',
    'modoPreparo': ''
  } as Receita;

  private avaliado: boolean;       //verifica se já foi avalidado
  private like: boolean;          //verifica se já foi curtido
  private deslike: boolean;       //verifica se já foi descurtido

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController,
    public fb: FirebaseServiceProvider
  ) {

    //recebe os parametros que chegam a essa page da HomePage
    this.receita.nome = this.navParams.get("nome");     //nome da receita da HomePage
    this.receita.descricao = this.navParams.get("descricao");     //descricao da receita da HomePage
    this.receita.imagem = this.navParams.get("imagem");     //imagem da receita da HomePage
    this.receita.modoPreparo = this.navParams.get("modoPreparo");   //modo de preparo da receita da HomePage
    this.receita.ingredientes = this.navParams.get("ingredientes");   //ingredientes da receita da HomePage
    this.receita.curtidas = this.navParams.get("curtidas");   //curtidas da receita da HomePage
    this.receita.descurtidas = this.navParams.get("descurtidas");    //descurtidas da receita da HomePage

    //verificadores unico
    this.avaliado = false;
    this.like = false;
    this.deslike = false;
  }

  // função para atualizar avaliação
  updateValue(receita: Receita) {
    this.fb.upgrade(receita);
  }

  //funções de avaliação positiva
  curtir(receita: Receita) {
    if (this.avaliado == false) {
      this.receita.curtidas++;
      this.avaliado = true;
      this.like = true;
     this.updateValue(receita);
    } else if (this.avaliado == true && this.like == true) {
      this.receita.curtidas--;
      this.avaliado = false;
      this.like = false;
      this.updateValue(receita);
    }
    else if (this.avaliado == true && this.like == false) {
      this.receita.curtidas++;
      this.receita.descurtidas--;
      this.like = true;
      this.deslike = false;
      this.updateValue(receita);
    }
  }

  //funções de avaliação negativa
  descurtir(receita: Receita) {
    if (this.avaliado == false) {
      this.receita.descurtidas++;
      this.avaliado = true;
      this.deslike = true;
      this.updateValue(receita);
    } else if (this.avaliado == true && this.deslike == true) {
      this.receita.descurtidas--;
      this.avaliado = false;
      this.deslike = false;
      this.updateValue(receita);
    }
    else if (this.avaliado == true && this.deslike == false) {
      this.receita.descurtidas++;
      this.receita.curtidas--;
      this.deslike = true;
      this.like = false;
      this.updateValue(receita);
    }
  }

  //função de compartilhar
  compartilhar(tituloDaReceita,imagemDaReceita,descricaoDaReceita) {
    const share = this.actionSheetCtrl.create({
      title: 'OPÇÕES',
      buttons: [
        {
          text: 'Compartilhar com Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook(tituloDaReceita,imagemDaReceita,descricaoDaReceita);
          }
        }, {
          text: 'Compartilhar com Whatsapp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialSharing.shareViaWhatsApp(tituloDaReceita,imagemDaReceita,descricaoDaReceita);
          }
        }, {
          text: 'Compartilhar com Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.socialSharing.shareViaInstagram(descricaoDaReceita,imagemDaReceita);
          }
        }, {
          text: 'Compartilhar com Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter(tituloDaReceita,imagemDaReceita,descricaoDaReceita);
          }
        }, {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    share.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitaPage');
  }
}