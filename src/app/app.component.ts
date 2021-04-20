import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme = 'assets/components/themes/fluent-light/theme.css';
  themes = [
    {name: 'Dark Blue', theme: 'assets/components/themes/bootstrap4-dark-blue/theme.css'},
    {name: 'Fluent-Light', theme: 'assets/components/themes/fluent-light/theme.css'},
  ];

  constructor() {

  }

  changeTheme(event: Event): void {
    const themeElement = document.getElementById('theme-link');
    themeElement.setAttribute('href', this.theme);
  }

  ngOnInit(): void {
    this.changeTheme(null);
  }
}
