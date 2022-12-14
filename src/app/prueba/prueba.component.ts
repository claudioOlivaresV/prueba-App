import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.launchAppOnAppleDevice();
  }

  launchAppOnAppleDevice() {
    const url = "mibanco://";
    window.location.replace(url);
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      console.log('es un dispositivo');
      
    }
  }
  lunchMarket() {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      window.location.href = 'https://play.google.com/store/apps/details?id=cl.bancochile.mi_banco&hl=es_CL&gl=US';
    }
    if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
      window.location.href = 'https://apps.apple.com/cl/app/mi-banco-chile/id1516872542';
    }
    if(navigator.userAgent.toLowerCase().indexOf("ipad") > -1 ) {
      alert('soy un ipad')
      // window.location.href = 'https://www.google.cl';
    }
    if(navigator.userAgent.toLowerCase().indexOf("huawei") > -1 ) {
      window.location.href = 'https://appgallery.huawei.com/app/C106022449?sharePrepath=ag';
    }
    

  }
  lunchAppGallery() {
    window.location.href = 'https://appgallery.huawei.com/app/C106022449?sharePrepath=ag';
  }

}
