import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { DisplayImageComponent } from './components/display-image/display-image.component'
import { StepSelectorComponent } from './components/step-selector/step-selector.component'
import { StateService } from './services/state/state.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StepSelectorComponent, RouterOutlet, DisplayImageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public state: StateService){}
}
