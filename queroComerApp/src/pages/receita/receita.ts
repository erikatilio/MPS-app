import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Receita } from '../../model/receita';
import { FavoritosPage } from '../favoritos/favoritos';

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {
  public receita = {} as Receita;

  private avaliado: boolean;       //verifica se já foi avalidado
  private like: boolean;          //verifica se já foi curtido
  private deslike: boolean;       //verifica se já foi descurtido

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController,
    public fb: FirebaseServiceProvider,    //acessa as funcionalidades do firebase provider
  ) {

    this.receita = this.navParams.get('receita'); //recebe as informações vindas da homePage

    //verificadores unico
    this.avaliado = false;
    this.like = false;
    this.deslike = false;
  }

  // função para atualizar avaliação
  updateValue(receita) {
    this.fb.upgrade(receita);
  }

  //funções de avaliação positiva
  curtir(receita) {
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
  descurtir(receita) {
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
  compartilhar(tituloDaReceita, imagemDaReceita, descricaoDaReceita) {
    const share = this.actionSheetCtrl.create({
      title: 'OPÇÕES',
      buttons: [
        {
          text: 'Adicionar a favoritos',
          icon: 'heart',
          handler: () => {
            this.navCtrl.push(FavoritosPage, { 'receitaFavorito': this.receita });//envia receita para favoritos
          }
        }, {
          text: 'Compartilhar com Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook(tituloDaReceita, imagemDaReceita, descricaoDaReceita);
          }
        }, {
          text: 'Compartilhar com Whatsapp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialSharing.shareViaWhatsApp(tituloDaReceita, imagemDaReceita, descricaoDaReceita);
          }
        }, {
          text: 'Compartilhar com Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.socialSharing.shareViaInstagram(descricaoDaReceita, imagemDaReceita);
          }
        }, {
          text: 'Compartilhar com Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter(tituloDaReceita, imagemDaReceita, descricaoDaReceita);
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