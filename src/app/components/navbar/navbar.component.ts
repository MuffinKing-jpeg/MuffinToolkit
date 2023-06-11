import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import Config from '../../../config/main.json';
import {modulesManifest} from '../../modules-manifest';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnChanges {

  @Input()
  activeRoute?: string

  title = Config.projectName;
  toggleNav = false;
  protected readonly modulesManifest = modulesManifest;
  protected readonly window = window;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
