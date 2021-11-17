import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  listCategory:Category[];
  constructor(private categorySer: CategoryService) { }

  ngOnInit(): void {
    this.categorySer.getcategories().subscribe((data: Category[]) => 
    this.listCategory = data)

  }

}
