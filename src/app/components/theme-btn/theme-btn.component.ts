import {Component} from '@angular/core';
import {ThemeServiceService} from '../../services/theme-service.service';

@Component({
  selector: 'app-theme-btn',
  templateUrl: './theme-btn.component.html',
  styleUrls: ['./theme-btn.component.scss']
})
export class ThemeBtnComponent {

  constructor(public themeService: ThemeServiceService) {
  }
}
