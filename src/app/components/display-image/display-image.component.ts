import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-display-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-image.component.html',
  styleUrl: './display-image.component.scss'
})
export class DisplayImageComponent {
  @Input() carCode?: string = ''
  @Input() colorCode?: string = ''
}
