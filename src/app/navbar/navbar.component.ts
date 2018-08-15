import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar') navbarEl: ElementRef;

  public menuItems = [
    new MenuItem('About', '/about'),
    new MenuItem('Contact', '/contact')
  ];

  private landingPageStyleChanges: { style: string, value: string }[] = [
    { style: 'position', value: 'absolute' },
    { style: 'z-index', value: '1' },
    { style: 'background', value: '#A8DADC' },
    { style: 'opacity', value: '.33' },
    { style: 'width', value: '100%' },
  ];

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.router.events.subscribe((navEnd: NavigationEnd) => {
      const url = navEnd.url;
      if (url) {
        if (url === '/') {
          this.applyLandingPageStyleChanges();
        } else {
          this.removeLandingPageStyleChanges();
        }
      }
    });
  }

  applyLandingPageStyleChanges() {
    // _.forEach(this.landingPageStyleChanges, (styleChange: { style: string, value: string }) => {
    //   this.renderer.setStyle(this.navbarEl.nativeElement, styleChange.style, styleChange.value);
    // });
  }

  removeLandingPageStyleChanges() {
    // _.forEach(this.landingPageStyleChanges, (styleChange: { style: string, value: string }) => {
    //   this.renderer.removeStyle(this.navbarEl.nativeElement, styleChange.style);
    // });
  }

  onMouseover() {
    // if (this.router.url === '/') {
    //   this.renderer.removeStyle(this.navbarEl.nativeElement, 'opacity');
    // }
  }

  onMouseleave() {
    // if (this.router.url === '/') {
    //   this.renderer.setStyle(this.navbarEl.nativeElement, 'opacity', '.33');
    // }
  }
}
