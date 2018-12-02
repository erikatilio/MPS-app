import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';
import { ReceitaPage } from '../receita/receita';
import { CadastroPage } from '../cadastro/cadastro';

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
  //função que carrega a pagina favoritos
  goToFavoritosPage() {
    this.navCtrl.push(FavoritosPage);
  }
  //função que carrega a pagina sobre
  goToSobrePage() {
    this.navCtrl.push(SobrePage);
  }
  //função que carrega a pagina login
  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }
  //função que carrega a pagina receitas
  goToReceitaPage() {
    this.navCtrl.push(ReceitaPage);
  }
  //função que carrega a pagina cadastro
  goToCadastroReceitaPage() {
    this.navCtrl.push(CadastroPage);
  }

}
