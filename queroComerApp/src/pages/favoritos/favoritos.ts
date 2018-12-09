import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Receita } from '../../model/receita';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  public receita = {} as Receita;
  public receitasFavoritas: Array<Receita> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {

    this.receitasFavoritas = [
      this.navParams.get("receitaFavorito")
    ];

  }

  mensagem(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    al.present();
  }

  opcoesFavoritos(tituloDaReceita, imagemDaReceita, descricaoDaReceita) {
    const share = this.actionSheetCtrl.create({
      title: 'OPÇÕES',
      buttons: [
        {
          text: 'Remover de Favoritos',
          icon: 'trash',
          handler: () => {
            this.mensagem('Remoção', 'Receita foi removida da sua lista de favoritos com sucesso');
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
    console.log('ionViewDidLoad FavoritosPage', this.receitasFavoritas);
  }

}
