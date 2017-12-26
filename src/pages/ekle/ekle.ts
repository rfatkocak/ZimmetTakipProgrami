import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the EklePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ekle',
  templateUrl: 'ekle.html',
})
export class EklePage {
  zimmetA:string;
  adA:string;
  tarih1A:string;
  tarih2A:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EklePage');
  }
ekle()
{
  console.log("Aşağıdaki zimmet bilgileri sisteme eklenecektir.")
  console.log(this.zimmetA);
  console.log(this.adA);
  console.log(this.tarih1A);
  console.log(this.tarih2A);
  this.navCtrl.push(HomePage);
}
}
