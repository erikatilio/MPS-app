import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FirebaseServiceProvider {
  private PATH = 'receitas/';

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

//função que guarda no banco de dados a receita
  save(receita: any) {
  	this.db.list('receitas').push(receita).then(r => console.log(r));
  }

  getReceitas(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes =>{
      return changes.map(r =>({ key: r.payload.key, ...r.payload.val()}));
    })
  }

  getUmaReceita(key: string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(r =>{
      return { key: r.payload.key, ...r.payload.val()};
    })
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }

}
