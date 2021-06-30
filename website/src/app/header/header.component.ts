import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="navbar is-dark">
    <div class="navbar-brand">
    <!--logo-->
      <a class="navbar-item">
        MY LOGO GOES HERE!
      </a>
    </div>  
  </div>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
