import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png'
  cardTitle: string = 'Default TItle'
  cardDescription: string = 'Default Description'
  private Id: string | null = '0'

  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.Id = value.get('id'))
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id: string | null): void{
    const result = dataFake.filter(article => article.Id == id)[0]
    console.log(result)
    if (result != null) {
      this.photoCover = result.photo
      this.cardTitle = result.title
      this.cardDescription  =  result.description
    }
  }

}
