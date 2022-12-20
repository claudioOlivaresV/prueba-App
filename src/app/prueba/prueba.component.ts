import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const resp = this.launchAppOnAppleDevice().catch(() => {
    //   console.log('aqui')
    // });
    // console.log(resp);




  }

  async launchAppOnAppleDevice() {
    const url = "cl.bancochile.banconexion ://";
    let respo = await fetch(window.location.href = url);
    return respo
  }
  openAndroid() {
    // const url = "market://details?id=cl.bancochile.mi_banco&hl=es_CL&gl=US";
    // window.location.href = url;
    const urlHuawei = 'market://details?id=C106022449?sharePrepath=ag'
    window.location.href = urlHuawei;




  }
  lunchMarket() {
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
      // this.openAndroid();
      // const url = "market://details?id=cl.bancochile.mi_banco&hl=es_CL&gl=US";
      // window.location.href = url;
      const urlHuawei = 'appmarket://C104725277'
      window.location.href = urlHuawei;
      // this.openAndroid().then(() => {
      //   console.log('ok');

      // }).catch(()=> {
      //   console.log('error');

      // })

      // const url = "market://details?id=cl.bancochile.mi_banco&hl=es_CL&gl=US";
      // const test = window.open = function() { 
      //   if(url) { 
      //     location.href = url; 
      //   } 
      //   return window; 
      // } 

      // console.log(test);

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
    if (navigator.userAgent.match(/iPad|iPod/i) || navigator.userAgent.includes("Mac") && "ontouchend" in document) {
      window.location.href = 'https://apps.apple.com/cl/app/mi-banco-chile/id1516872542';
    }
    if (navigator.userAgent.toLowerCase().indexOf("harmonyos") > -1) {
      window.location.href = 'https://appgallery.huawei.com/app/C104725277';
    }
  }
}
