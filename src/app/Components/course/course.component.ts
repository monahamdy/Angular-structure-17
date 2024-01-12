import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule,NgForOf } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule,NgForOf,PaginatorModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseComponent {

   first: number = 0;
    rows: number = 10;
    onPageChange(event: PageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }
  CourseName:any='';
   // Pagination parameters.
  //  p: any = 1;
  //  count: any = 3;
   courses: { CourseName: string, Banks: string,sections:string,lessons:number,
    Beneficiaries:number, parts:number }[] = [];

   ngOnInit() {
       this.courses = [
           { CourseName:'oop',Banks:'AltBanks',sections: 'section1',lessons:1
           ,Beneficiaries:0, parts:0 },
           { CourseName:'html',Banks:'Banks',sections: 'section2',lessons:2
           ,Beneficiaries:1, parts:1 },
           { CourseName:'css',Banks:'AltBanks',sections: 'coll Andrson',lessons:5
           ,Beneficiaries:3, parts:4 },
           { CourseName:'js',Banks:'AltBanks',sections: 'section4',lessons:6
           ,Beneficiaries:2, parts:5 },

       ];
   }
}
