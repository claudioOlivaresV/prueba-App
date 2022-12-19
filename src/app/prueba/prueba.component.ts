import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const resp = this.launchAppOnAppleDevice();
    console.log(resp);
    
    
    
    
  }

  launchAppOnAppleDevice() {
    const url = "bancochilebanconexion://";
    let respo = window.location.replace(url) + '';
    
  }
  lunchMarket() {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      const url = "market://details?id=cl.bancochile.mi_banco&hl=es_CL&gl=US";
      let respo = window.location.replace(url);
      console.log(respo);
      // if(respo === 'undefined') {
      //   setTimeout(() => {
      //     window.location.href = 'https://appgallery.huawei.com/app/C106022449?sharePrepath=ag';        
      //   }, 30);
      // }
      
    }
    if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
      window.location.href = 'https://apps.apple.com/cl/app/mi-banco-chile/id1516872542';
    }
    if(navigator.userAgent.match(/iPad|iPod/i) || navigator.userAgent.includes("Mac") && "ontouchend" in document) {
      window.location.href = 'https://apps.apple.com/cl/app/mi-banco-chile/id1516872542';      
    }
    if(navigator.userAgent.toLowerCase().indexOf("harmonyos") > -1 ) {
      window.location.href = 'https://appgallery.huawei.com/app/C106022449?sharePrepath=ag';
    }
  }
}
