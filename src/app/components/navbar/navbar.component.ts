import {Component} from '@angular/core';
import Config from '../../../config/main.json';
import {modulesManifest} from '../../modules-manifest';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  title = Config.projectName;
  toggleNav = false;
  protected readonly modulesManifest = modulesManifest;
  protected readonly window = window;
}
