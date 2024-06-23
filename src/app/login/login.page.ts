import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { environment } from "src/environments/environment";
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { mergeScan } from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fireApp = initializeApp(environment.firebaseConfig);
  fireAuth = getAuth(this.fireApp);
  fireEmail = ""
  fireSenha = ""

  public alertaBotao = [
    {
      text: 'Cancelar'
    },
    {
      text: 'Resetar',
      handler: (data : any) =>{
        this.resetarSenha(data  )
      }
    }

  ];
  public alertaInput = [
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email'
    },

  ];


  constructor(
    private alertController: AlertController,
    private navctrl: NavController,
  ) { }

  ngOnInit() {
  }
  loginUsuario(){
    signInWithEmailAndPassword(this.fireAuth, this.fireEmail, this.fireSenha)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    this.navctrl.navigateForward('home');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)

    // ..
  });

  }
  
  resetarSenha(data: any){
    console.log(data)
    sendPasswordResetEmail(this.fireAuth, data.email)
  .then(() => {
    this.presentAlert('Já enviamos um E-mail para sua caixa de entrada!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['Action'],
    });

    }
  

}
