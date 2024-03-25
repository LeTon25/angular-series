import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('A test Recipe','This is a simple Test','https://hips.hearstapps.com/hmg-prod/images/chicken-tamale-pie-index-64da954c33aab.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'),
    new Recipe('A test Recipe','This is a simple Test','https://hips.hearstapps.com/hmg-prod/images/chicken-tamale-pie-index-64da954c33aab.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*')

  ]

  constructor(){}
  
  ngOnInit(): void {
    
  }
}
