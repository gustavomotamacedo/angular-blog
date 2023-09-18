import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png'
  cardTitle: string = 'Default TItle'
  cardDescription: string = 'Default Description'

  constructor() { }

  ngOnInit(): void {
  }

}
