import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf,CommonModule,TabViewModule,CardModule,InputGroupModule,InputGroupAddonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  tabs: { title: string, content: string,active:boolean }[] = [];

  ngOnInit() {
      this.tabs = [
          { title: 'Latest Articles', content: 'مقال2',active: true },
          { title: 'Popular Articles', content: 'test',active: false },
          { title: 'Favorites Articles ', content: 'مقال3',active: false }
      ];
  }
  onchange(event: any): void {
    console.log(event?.target?.value);

  }
}
