import {Component, OnInit} from '@angular/core';
import LangConf from '../../../config/lang.json'

const pathRegEx = /^\/([^/]+)/

@Component({
  selector: 'app-locale-selector',
  templateUrl: './locale-selector.component.html',
  styleUrls: ['./locale-selector.component.scss']
})
export class LocaleSelectorComponent implements OnInit {
  langConfig = LangConf
  activeLang? = 'en'

  globalPath = window.location.pathname;
  protected readonly window = window;

  ngOnInit() {
    console.log()
    this.activeLang = this.globalPath.match(pathRegEx)?.[0].replace('/', '')
  }
}
