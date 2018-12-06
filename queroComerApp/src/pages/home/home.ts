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
        "nome": "Sorvete",
        "descricao": " Sorvete ou gelado é uma sobremesa gelada à base de lacticínios.",
        "imagem": "https://www.bonde.com.br/img/galeriasocial/img_gal2_18355.jpg"
      },
      {
        "nome": "X-Tudo",
        "descricao": " Sanduíche de carne temperada dentro do pão, como cebola, alface, tomate, maionese, ketchup, queijo e bacon e ovos.",
        "imagem": "https://media-cdn.tripadvisor.com/media/photo-s/0b/ed/c8/10/x-tudo.jpg"
      },
      {
        "nome": "Feijoada",
        "descricao": " Um guisado de feijão com carne bovina e carne de porco, servido com arroz.",
        "imagem": "http://esbrasil.com.br/wp-content/uploads/2018/04/Feijoada-696x443.jpg"
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
  goToReceitaPage(receita) {
    console.log(receita);
    this.navCtrl.push(ReceitaPage, { tituloDaReceita: receita.nome, descricaoDaReceita: receita.descricao, imagemDaReceita: receita.imagem });
  }
  //função que carrega a pagina cadastro
  goToCadastroReceitaPage() {
    this.navCtrl.push(CadastroPage);
  }

}
