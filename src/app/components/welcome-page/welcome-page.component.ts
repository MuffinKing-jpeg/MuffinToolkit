import {Component} from '@angular/core';
import Config from "../../../config/main.json";
import Lang from "../../../config/lang.json";
import {modulesManifest} from "../../modules-manifest";
import {ThemeServiceService} from "../../services/theme/theme-service.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  title = Config.projectName;
  displayLang = Lang.length > 1 || environment.isDev;
  protected readonly modulesManifest = modulesManifest;

  constructor(public theme: ThemeServiceService) {
  }
}
