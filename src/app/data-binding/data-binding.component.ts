import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Interpoláció
  interpolacio: string =
    '1.) Egyszerű adatkötés, beszúrás. Más néven interpoláció.';
  velemeny: string = 'Szeretem az Angulart';
  udvozles: string = 'Szia, világ!';

  //Property Binding
  utvonal: string = 'https://angular.io/';
  keplink: string =
    'https://1.bp.blogspot.com/-MwJI22_Ek_0/XJQEjL9WGjI/AAAAAAAAJSs/Kd9WAGTItDoTRoaIFLE8qwOrj3STIMbfQCK4BGAYYCw/s1600/logo%2Bangular%2Bicon.png';
  kepfelirat: string = 'Angular honlap';
  meret: number = 100;
  celpont: string = '_blank';

  //Event Binding
  message(): void {
    alert('This is an alerted handler message!');
  }

  //Two-way data binding
  aOldal: number = 1;

  //Gyakorló feladatok:

  //1.) Feladat: Név, team, szak kiíratása interpolációval feladat
  taskOneName: string = 'Szenkovics Szabolcs';
  taskOneTeam: number = 9;
  taskOneCourse: string = 'Front End';


  //2.) Feladat: Ruander honlapjának logója, kattintható verzióban
  pathToRuander: string = 'https://www.ruander.hu/';
  picRuanderLink: string =
    'https://www.ruander.hu/images/site/R-Ruander-newlogo_oktatokozpont_m.svg';
  picRuanderLabel: string = 'A Ruander iskola honlapja';
  picSize: number = 100;
  picTarget: string = '_blank';


  //3.) Feladat: A Google logója, kattintható verzióban
  pathToGoogle: string = 'https://www.google.com/';
  picGoogleLink: string =
    'https://logosandtypes.com/wp-content/uploads/2020/11/Google.png';
  picGoogleLabel: string = 'A Google oldala';


  //4.) Feladat: Adatmódosító event: Kattintásra módosul az oldal címsora!
  adatModosito(): void {
    this.taskOneCourse = "Webfejlesztő"
  }


  //5.) Feladat: Random generáló - Kattintásra random értéket generál ki!
  randomGen(): void {
    const randNum = Math.round(Math.random() * 100);
    alert(randNum);
  }

  //6.) Feladat: Téglalap kerülete és területe
  teglaA: number = 1;
  teglaB: number = 1;

}

  
