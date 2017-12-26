import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DüzenlePage } from '../düzenle/düzenle';
import { EklePage } from '../ekle/ekle';


@Component({
 
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tarih1:string;
  tarih2:string;
  ad:string;
  zimmet:string;
  a:string;
  constructor(public navCtrl: NavController) {
    
  }
  openDuzenleBir() {
    this.navCtrl.push(DüzenlePage,{
      tarih1:"15.10.2015",
      tarih2:"22.11.2020",
      ad:"Rıfat Koçak",
      zimmet:"Çalışma Masası",
      a:"/assets/imgs/masa (2).jpg"});
  }
  openDuzenleIki() {
    this.navCtrl.push(DüzenlePage,{
    tarih1:"03.09.2011",
    tarih2:"11.02.2018",
    ad:"Ammar Eşit",
    zimmet:"Yazıcı",
    a:"/assets/imgs/yazıcı.jpg"});
  }
  openDuzenleUc() {
    this.navCtrl.push(DüzenlePage,{

    tarih1:"06.09.2017",
    tarih2:"12.27.2021",
    ad:"Alperen Uzun",
    zimmet:"Çalışma Ofisi",
    a:"/assets/imgs/ofis.jpg"});
  }
  openDuzenleDort() {
    this.navCtrl.push(DüzenlePage,{

    tarih1:"03.13.2014",
    tarih2:"11.18.2019",
    ad:"Kadir Doğan",
    zimmet:"Bilgisayar",
    a:"/assets/imgs/bilgisayar.jpg"});
  }
  openEkle() {
    
    this.navCtrl.push(EklePage);
  }
 
}
