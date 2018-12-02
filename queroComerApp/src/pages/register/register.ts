import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

//importação do modelo de usuario
import { User } from '../../model/user';
//autenticação
import { AuthProvider } from '../../provider/auth/auth';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  // Definindo o nosso atributo usuário do tipo User
  public user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private auth: AuthProvider) {
  }


  // Método para exibir as nossas mensagens de erro.
  msgErro(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async register(user: User) {

    // Valida se foi informado email e password
    if (user.email == "" || user.password == "") {
      this.msgErro('Erro', 'É necessário informar o email e senha');
    } else {
      try {

        // Chama o método para cadastrar usuário
        const result = await this.auth.register(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página tabs
          this.navCtrl.setRoot(HomePage);
        }
      } catch (e) {
        this.msgErro('Erro ao cadastrar', e.message);
      }
    }
  }
  /*register(){
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0){
      let alert = this.alertCtrl.create({
        title: 'ERRO',
        subTitle: 'Preencha todos os campos corretamente!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.navCtrl.pop();
    }
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
}
