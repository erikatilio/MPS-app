import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {
  public titulo:string;
  public curtida:number;
  public descurtida:number;
  public avaliado:boolean;       //verifica se já foi avalidado
  public like:boolean;          //verifica se já foi curtido
  public deslike:boolean;       //verifica se já foi descurtido

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo = "Titulo da Receita";
    this.curtida = 0;
    this.descurtida = 0;
    this.avaliado = false;
    this.like = false;
    this.deslike = false;
  }

  curtir(){
    if(this.avaliado == false){
      this.curtida++;
      this.avaliado = true;
      this.like = true;
    }else if(this.avaliado == true && this.like == true){
      this.curtida--;
      this.avaliado = false;
      this.like = false;
    }
    else if (this.avaliado == true && this.like == false) {
      this.curtida++;
      this.like = true;
      this.deslike = false;
    }
  }

  descurtir(){
    if(this.avaliado == false){
      this.descurtida++;
      this.avaliado = true;
      this.deslike = true;
    }else if(this.avaliado == true && this.deslike == true){
      this.descurtida--;
      this.avaliado = false;
      this.deslike = false;
    }
    else if (this.avaliado == true && this.deslike == false) {
      this.descurtida++;
      this.deslike = true;
      this.like = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitaPage');
  }

}
