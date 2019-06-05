import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice-labs';
  currentTheme: any;
  opened: boolean;
  themes: Array<any>;

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
   this.initThemes();
   this.setTheme(0);   
  }

  private getColour(cssVar): string {
    return window.getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
  }

  private setCssVar(property, value) {
    document.documentElement.style.setProperty('--' + property , value);
  }

  public setColour(e, colour) {
    this.setCssVar(colour, e.target.value);
  }

  private setTheme(id:number) {
    this.setCssVar('primary', this.themes[id].primary);
    this.setCssVar('accent', this.themes[id].accent);
    this.setCssVar('warn', this.themes[id].warn);
    this.setCssVar('background', this.themes[id].background);
    this.setCssVar('foreground', this.themes[id].foreground);
    const message =  this.themes[id].name + ' selected';
    this._snackBar.open(message, 'Dance', {
      duration: 2000,
    });
    this.currentTheme = this.themes[id];
  }

  private initThemes() {
    this.themes = [
      {
        id: 0,
        name: 'Practice Labs',
        logo: 'Practice-Labs-color.png',
        primary: this.getColour('--primary'), 
        accent: this.getColour('--accent'), 
        warn: this.getColour('--warn'),
        background: this.getColour('--background'),
        foreground: this.getColour('--foreground'),
      },
      {
        id: 1,
        name: 'Practice Labs Academic',
        logo: 'Practice-Labs-color.png',
        primary: '#8a81e7', 
        accent: '#2e60bb', 
        warn: '#cc0000',
        background: '#F4F4F4',
        foreground: '#000000'
      },
      {
        id: 2,
        name: 'Practice Labs Corporate',
        logo: 'Practice-Labs-color.png',
        primary: '#01c0ff', 
        accent: '#2e60bb', 
        warn: '#cc0000',
        background: '#F4F4F4',
        foreground: '#000000'
      },
      {
        id: 3,
        name: 'IT Training',
        logo: 'Practice-Labs-color.png',
        primary: '#2BB98D', 
        accent: '#2e60bb', 
        warn: '#cc0000',
        background: '#F4F4F4',
        foreground: '#000000'
      },
      {
        id: 4,
        name: 'ITG',
        logo: 'logo-itg.png',
        primary: '#5EC4B6', 
        accent: '#106dab', 
        warn: '#dc3545',
        background: '#f3f4f6',
        foreground: '#555555'
      },
      {
        id: 5,
        name: 'KFC',
        logo: 'logo-kfc.png',
        primary: '#ac172c', 
        accent: '#000000', 
        warn: '#dc3545',
        background: '#ffffff',
        foreground: '#131313'
      }
     ]
  }
}
