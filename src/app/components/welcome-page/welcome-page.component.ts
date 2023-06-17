import {Component} from '@angular/core';
import Config from "../../../config/main.json";
import {modulesManifest} from "../../modules-manifest";
import {ThemeServiceService} from "../../services/theme-service.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  title = Config.projectName;
  protected readonly modulesManifest = modulesManifest;

  constructor(public theme: ThemeServiceService) {
  }
}
