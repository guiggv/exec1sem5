import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from "src/environments/environment";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  fireApp = initializeApp(environment.firebaseConfig);
  fireAuth = getAuth();
  account = {} as any
  constructor(
    private navctrl: NavController,
  ) { }

  ngOnInit() {
  }
  cadastreUsuario(){
    console.log(this.account)
    createUserWithEmailAndPassword(this.fireAuth,this.account.Email, this.account.Senha)
  .then((userCredential) => {
    const user = userCredential.user;
    this.navctrl.navigateForward('home');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);

  });
    
  }
}
