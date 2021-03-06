import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

//importação do modelo de usuario
import { User } from '../../model/user';
//autenticação
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Definindo o nosso atributo usuário do tipo User
  public user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private auth: AuthProvider) {
  }

  // Método para exibir as nossas mensagens de erro.
  public mensagem(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }
  // Método usado para login do usuário
  // Recebe como parametro um tipo user e tenta fazer o login
  async login(user: User) {
    // Valida se foi informado email e password
    if (user.email == "" || user.password == "") {
      this.mensagem('Erro', 'É necessário informar o email e senha');
    } else {
      try {
        // Chama o método para fazer login
        const result = await this.auth.login(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página tabs
          this.navCtrl.setRoot(HomePage);
        }
      } catch (e) {
        this.mensagem('Erro ao logar', 'Preencha os campos de E-mail e Senha corretamente');
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.auth.logout();
  }

  goToRegisterPage() {
    this.navCtrl.push(RegisterPage);
  }
}
