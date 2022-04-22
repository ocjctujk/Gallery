import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  onToggle(event,mode: string){
    this.themeService.toggleTheme(event.detail.checked,mode);
  }

}
