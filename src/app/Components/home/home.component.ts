import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf,CommonModule,TabViewModule,CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  tabs: { title: string, content: string }[] = [];

  ngOnInit() {
      this.tabs = [
          { title: 'Latest Articles', content: 'مقال2' },
          { title: 'Popular Articles', content: 'test' },
          { title: 'Favorites Articles ', content: 'مقال3' }
      ];
  }
}
