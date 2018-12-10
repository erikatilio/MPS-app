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
  public receitasFavoritas: Array<Receita> = [];    //array com receitas favoritas

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {

    //recebe a receita quando adicionada
    this.receitasFavoritas = [ this.navParams.get("receita") ];
  }

  //função que exclui receita da lista de favoritos
  excluirDeFavoritos(receita){

  }

  //função que exibe mensagem
  mensagem(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    al.present();
  }

  //função que contem as opções de receita favorita
  opcoesFavoritos(receita) {
    const share = this.actionSheetCtrl.create({
      title: 'OPÇÕES',
      buttons: [
        {
          text: 'Remover de Favoritos',
          icon: 'trash',
          handler: () => {
            this.excluirDeFavoritos(receita);
            this.mensagem('Remoção', 'Receita foi removida da sua lista de favoritos com sucesso');
          }
        }, {
          text: 'Compartilhar com Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook(receita.nome, receita.imagem, receita.descricao);
          }
        }, {
          text: 'Compartilhar com Whatsapp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.socialSharing.shareViaWhatsApp(receita.nome, receita.imagem, receita.descricao);
          }
        }, {
          text: 'Compartilhar com Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.socialSharing.shareViaInstagram(receita.descricao, receita.imagem);
          }
        }, {
          text: 'Compartilhar com Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter(receita.nome, receita.imagem, receita.descricao);
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
