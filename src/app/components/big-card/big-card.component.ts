import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png'
  @Input() cardTitle: string = 'Default title'
  @Input() cardDescription: string = 'Default description'

  constructor() { }

  ngOnInit(): void {
  }

}
