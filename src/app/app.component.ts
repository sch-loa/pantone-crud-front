import { Component } from '@angular/core'
import { ColorCard } from 'src/domain/ColorCard'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pantone-crud-front'
  colorCards = [new ColorCard(107, 'U', 'ffb6b3'),
  new ColorCard(134, 'C', 'e67e22'),
  new ColorCard(156, 'C', '8c564b'),
  new ColorCard(161, 'U', 'c6913d'),
  new ColorCard(179, 'C', 'a6522d'),
  new ColorCard(192, 'C', 'd2b48c'),
  new ColorCard(230, 'C', 'b87333'),
  new ColorCard(241, 'C', '6d4c41'),
  new ColorCard(294, 'C', '85987f'),
  new ColorCard(330, 'C', '4c5c62'),
  new ColorCard(349, 'C', '83DCB0'),
  new ColorCard(572, 'C', 'eebbc6'),
  new ColorCard(7558, 'C', 'e7b77f'),
  new ColorCard(268, 'C', '663399'),
  new ColorCard(518, 'C', '997D9B'),
  new ColorCard(264, 'C', 'CD91EE'),
  new ColorCard(186, 'C', 'C40233'),
  new ColorCard(199, 'C', 'DC2628'),
  new ColorCard(2304, 'U', '00AAEE'),
  new ColorCard(521, 'U', '209'),
  new ColorCard(286, 'C', '003366'),
  new ColorCard(675, 'C', 'A8A8C0'),
  new ColorCard(1224, 'C', '24F5'),
  new ColorCard(1205, 'C', 'FFFA65'),
  new ColorCard(117, 'U', '075'),
  new ColorCard(116, 'C', 'FFF943')]
}
