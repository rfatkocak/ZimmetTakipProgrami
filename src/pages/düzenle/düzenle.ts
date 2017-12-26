import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage}from'../home/home';

/**
 * Generated class for the DüzenlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-düzenle',
  templateUrl: 'düzenle.html'
})
export class DüzenlePage {
 
 
  aD:string;
  tarih1D:string;
  tarih2D:string;
  adD:string;
  zimmetD:string;
  zimmetI:string;
  adI:string;
  tarih1I:string;
  tarih2I:string;

  
  constructor(public navCtrl: NavController, public navParams: NavParams)  {
     this.tarih1D = navParams.get('tarih1');
     this.tarih2D = navParams.get('tarih2');
      this.adD  = navParams.get('ad');
     this.zimmetD= navParams.get('zimmet');
     this.aD=navParams.get('a');
     
    }
   
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad DüzenlePage');
  
}
guncel()
{
  console.log("Eski zimmet bilgileri aşagıdaki gibidir.")
  console.log(this.zimmetD);
  console.log(this.adD);
  console.log(this.tarih1D);
  console.log(this.tarih2D);

  console.log("Yeni zimmet bilgileri aşagıdaki gibidir.");
  console.log(this.zimmetI);
  console.log(this.adI);
  console.log(this.tarih1I);
  console.log(this.tarih2I);
  
  this.navCtrl.push(HomePage);

}
sil()
{
  console.log("Aşağıdaki veriler silinecektir.")
  console.log(this.zimmetD);
  console.log(this.adD);
  console.log(this.tarih1D);
  console.log(this.tarih2D);

  this.navCtrl.push(HomePage);
}

}