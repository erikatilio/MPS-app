import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { SobrePage } from '../sobre/sobre';
import { LoginPage } from '../login/login';
import { ReceitaPage } from '../receita/receita';
import { CadastroPage } from '../cadastro/cadastro';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listaReceitas: Observable<any>;//variavel que armazena a lista de receitas que viram do abnco de dados

  constructor(
    public navCtrl: NavController,
    public dbService: FirebaseServiceProvider
  ) {
    this.listaReceitas = this.dbService.getReceitas();
    this.gerarListaReceitas();//chama a lista de receitas no construtor para que seja atualizada na home
  }

  //fução que gera a lista de receitas
  gerarListaReceitas() {
    this.ionViewDidLoad();
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
    this.navCtrl.push(ReceitaPage, {
      tituloDaReceita: receita.nome,
      descricaoDaReceita: receita.descricao,
      imagemDaReceita: receita.imagem,
      modoDePreparoReceita: receita.modoPreparo,
      ingredientesDaReceita: receita.ingredientes
    });
  }
  //função que carrega a pagina cadastro
  goToCadastroReceitaPage() {
    this.navCtrl.push(CadastroPage);
  }

  //Função que filtar receitas pegando por parametro o input do serachbar
  filtrarReceita(event: any) {
    this.gerarListaReceitas();//atualiza a lista de receitas
    let searchTerm = event.target.value;

    //filtra oque foi digitado no seacrh bar na listaDeReceitas
    if (searchTerm && searchTerm.trim() != '') {
      this.listaReceitas = this.listaReceitas.filter((item) => {
        return (item.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) > - 1);
      })
    }

  }

  //Função que recarrega a pagina
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.gerarListaReceitas();//atualiza a lista de receitas

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    this.listaReceitas = this.dbService.getReceitas();//pega as receitas do banco de dados
    console.log('ionViewDidLoad HomePage');
  }

}
