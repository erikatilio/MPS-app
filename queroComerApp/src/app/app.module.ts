import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Importações para funcionamento do Firebase e da Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SlidesPageModule } from '../pages/slides/slides.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { FavoritosPageModule } from '../pages/favoritos/favoritos.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { ReceitaPageModule } from '../pages/receita/receita.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';

// Configurações do FIREBASE
import { config } from '../config';
import { AuthProvider } from '../providers/auth/auth';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SlidesPageModule,
    LoginPageModule,
    RegisterPageModule,
    FavoritosPageModule,
    SobrePageModule,
    ReceitaPageModule,
    CadastroPageModule,
    // Configurações do Firebase
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule ,
    // Configuração do serviço de autenticação do firebase
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseServiceProvider
  ]
})
export class AppModule {}
