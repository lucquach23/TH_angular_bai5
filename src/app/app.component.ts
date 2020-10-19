import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public listCity=[
  //   {id:1,name:'Hà Nội'},
  //   {id:2,name:'Hưng Yên'},
  //   {id:3,name:'Hải Phòng'},
  //   {id:4,name:'TP.HCM'},
  // ]
  // onSubmit(value: any) {
  //   console.log(value);
  // }
}
//   ngAfterViewInit() {
//     this.loadScripts();
//   }
//   public loadScripts() {
//     this.renderExternalScript('assets/js/main.js').onload = () => {
//     }
//   }
// public renderExternalScript(src: string): HTMLScriptElement {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = src;
//     script.async = true;
//     script.defer = true;
//     this.renderer.appendChild(document.body, script);
//     return script;
//   }
// constructor(private renderer: Renderer2) {

//   }
// }
// import { Component, OnInit, Renderer2, AfterViewInit } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, AfterViewInit {
//   title = 'hiraola';
//   products: any;
//   menus: any;
//   constructor(private renderer: Renderer2) {
//   }
//   ngOnInit() {  
//   }
//   ngAfterViewInit() { 
//     this.loadScripts();
//   }
//   public loadScripts() {
//     this.renderExternalScript('assets/js/main.js').onload = () => {
//     }
//   }
// public renderExternalScript(src: string): HTMLScriptElement {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = src;
//     script.async = true;
//     script.defer = true;
//     this.renderer.appendChild(document.body, script);
//     return script;
//   }

// }
