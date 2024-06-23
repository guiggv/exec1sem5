import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.page.html',
  styleUrls: ['./tela-inicio.page.scss'],
})
export class TelaInicioPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }

  onclic() {
    this.navctrl.navigateForward('cadastro');
  }

  showmenu(){

    this.navctrl.navigateForward('login');

  }

  ano(){
    this.navctrl.navigateForward('home');
  }

}
