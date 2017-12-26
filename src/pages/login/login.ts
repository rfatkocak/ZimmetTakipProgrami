import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  giris() {
    this.navCtrl.push(HomePage);
    
  }
  sifreUnuttum(){
    console.log("Şifremi Unuttum adlı sayfaya gidecektir.")
  }
  uyeOl()
  {
    console.log("Yeni üye kaydının alınacağı sayfaya gidecektir.")
  }
}
