import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';
import { ReceitaPage } from '../receita/receita';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public listaReceitas: Array<object> = [];

  constructor(public navCtrl: NavController) {
    this.listaReceitas = [
      {
        "nome": "Sorvete 1",
        "descricao": " Sorvete ou gelado é uma sobremesa gelada à base de lacticínios.",
        "imagem": "https://www.bonde.com.br/img/galeriasocial/img_gal2_18355.jpg"
      },
      {
        "nome": "Sorvete 2",
        "descricao": " Sorvete ou gelado é uma sobremesa gelada à base de lacticínios.",
        "imagem": "http://g.glbimg.com/og/gs/gsat5/f/thumbs/tag/2015/08/27/sorvete-620.jpg"
      },
      {
        "nome": "Sorvete 3",
        "descricao": " Sorvete ou gelado é uma sobremesa gelada à base de lacticínios.",
        "imagem": "https://www.comidaereceitas.com.br/images/stories/2012/11/sorvete_cremoso_baunilha.jpg"
      }
    ]
  }

  goToFavoritosPage() {
    this.navCtrl.push(FavoritosPage);
  }

  goToSobrePage() {
    this.navCtrl.push(SobrePage);
  }

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  goToReceitaPage(){
    this.navCtrl.push(ReceitaPage);
  }

}
