import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public skillsImages = [
    new Image('/assets/images/angular.png', 'angular'),
    new Image('/assets/images/ts.png', 'typescript'),
    new Image('/assets/images/js.png', 'javasctipt'),
    new Image('/assets/images/d3.png', 'd3'),
    new Image('/assets/images/html.png', 'html'),
    new Image('/assets/images/css.png', 'css'),
    new Image('/assets/images/sass.png', 'sass'),
    new Image('/assets/images/vscode.png', 'vscode'),
    new Image('/assets/images/github.png', 'github'),
    new Image('/assets/images/travis.png', 'travis'),
    new Image('/assets/images/terminal.png', 'terminal'),
    new Image('/assets/images/webpack.png', 'webpack'),
    new Image('/assets/images/nodejs.png', 'nodejs'),
    new Image('/assets/images/npm.png', 'npm'),
    new Image('/assets/images/rest.png', 'rest'),
    new Image('/assets/images/ubuntu.svg', 'ubuntu'),
    new Image('/assets/images/react.png', 'react'),
    new Image('/assets/images/redux.png', 'redux'),
    new Image('/assets/images/slack.png', 'slack'),
    new Image('/assets/images/java.png', 'java'),
    new Image('/assets/images/sql.png', 'sql'),
    new Image('/assets/images/db2.png', 'db2'),
    new Image('/assets/images/wordpress.png', 'wordpress')
  ];

  constructor() { }

  ngOnInit() {
  }

}
