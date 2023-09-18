import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() Id: string = '0'
  @Input() photoCover: string = 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png'
  @Input() cardTitle: string = 'Default title'

  constructor() { }

  ngOnInit(): void {
  }

}
