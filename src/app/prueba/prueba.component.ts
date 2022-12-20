import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const resp = this.launchAppOnAppleDevice();
    // console.log(resp);
    this.launchAppOnAppleDevice().then((rest)=> {
      console.log(rest); 
    }, (err) => {
      console.log(err);
      
    })
    
    
    
    
  }

  async launchAppOnAppleDevice() {
    const url = "bancochilebanconexion://";
    let respo = await fetch( window.location.href = url );
    return respo
  }
  lunchMarket() {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      
      const url = "market://details?id=cl.bancochile.mi_banco&hl=es_CL&gl=US";
      const test =  fetch( window.location.href = url );

      console.log(test);
      
      // let respo = window.open(url);
      // console.log(respo);
      // console.log(respo?.document.URL);
      // if(respo?.document.URL === 'about:blank') {
      //   // console.log('no ablre');
      //   // // if(respo === 'undefined') {
      //   //   setTimeout(() => {
      //   //     window.location.href = 'https://appgallery.huawei.com/app/C106022449?sharePrepath=ag';        
      //   //   }, 30);
      //   // // }
        

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
