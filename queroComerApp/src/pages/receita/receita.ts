import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { firebase } from '../../../node_modules/firebase/firebase';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {
  public tituloDaReceita;
  public descricaoDaReceita;
  public imagemDaReceita;
  public modoDePreparoReceita;
  public ingredientesDaReceita;
  public curtida: number;
  public descurtida: number;
  public avaliado: boolean;       //verifica se já foi avalidado
  public like: boolean;          //verifica se já foi curtido
  public deslike: boolean;       //verifica se já foi descurtido

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController
  ) {

    //recebe os parametros que chegam a essa page da HomePage
    this.tituloDaReceita = this.navParams.get("tituloDaReceita");     //nome da receita da HomePage
    this.descricaoDaReceita = this.navParams.get("descricaoDaReceita");     //descricao da receita da HomePage
    this.imagemDaReceita = this.navParams.get("imagemDaReceita");     //imagem da receita da HomePage
    this.modoDePreparoReceita = this.navParams.get("modoDePreparoReceita");   //modo de preparo da receita da HomePage
    this.ingredientesDaReceita = this.navParams.get("ingredientesDaReceita");   //ingredientes da receita da HomePage

    this.curtida = 0;
    this.descurtida = 0;
    this.avaliado = false;
    this.like = false;
    this.deslike = false;
  }

  //funções de avaliação positiva
  curtir() {
    if (this.avaliado == false) {
      this.curtida++;
      this.avaliado = true;
      this.like = true;
    } else if (this.avaliado == true && this.like == true) {
      this.curtida--;
      this.avaliado = false;
      this.like = false;
    }
    else if (this.avaliado == true && this.like == false) {
      this.curtida++;
      this.descurtida--;
      this.like = true;
      this.deslike = false;
    }
  }

  //funções de avaliação negativa
  descurtir() {
    if (this.avaliado == false) {
      this.descurtida++;
      this.avaliado = true;
      this.deslike = true;
    } else if (this.avaliado == true && this.deslike == true) {
      this.descurtida--;
      this.avaliado = false;
      this.deslike = false;
    }
    else if (this.avaliado == true && this.deslike == false) {
      this.descurtida++;
      this.curtida--;
      this.deslike = true;
      this.like = false;
    }
  }

  //função de compartilhar
  compartilhar(tituloDaReceita,imagemDaReceita,descricaoDaReceita) {
    const share = this.actionSheetCtrl.create({
      title: 'COMPARTILHAR RECEITA',
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
