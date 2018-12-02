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
  public avaliado:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.titulo = "Titulo da Receita";
    this.curtida = 0;
    this.descurtida = 0;
    this.avaliado = false;
  }

  curtir(){
    if(this.avaliado==false){
      this.curtida++;
      this.descurtida=0;
      this.avaliado = true;
    }else if(this.descurtida==0){
      this.curtida--;
      this.avaliado = false;
    }
  }

  descurtir(){
    if(this.avaliado==false){
      this.descurtida++;
      this.curtida=0;
      this.avaliado = true;
    }else if(this.curtida==0){
      this.descurtida--;
      this.avaliado = false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceitaPage');
  }

}
