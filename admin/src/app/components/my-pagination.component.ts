import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-my-pagination',
  template: `
    <nav aria-label="Page navigation example">
        <ul class="pagination pagination-circle pg-blue">
            <li class="page-item" 
                [ngClass]="{'disabled': pagination.page === 1}" 
                (click)="changePage(1)">
                <a class="page-link" mdbWavesEffect>
                    First
                </a>
            </li>
            
            <li class="page-item" 
                [ngClass]="{'disabled': pagination.page === 1}" 
                (click)="changePage(pagination.page - 1)">
                <a class="page-link" aria-label="Previous" mdbWavesEffect>
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>

            <li class="page-item" (click)="changePage(page)" 
                [ngClass]="{'active': page === pagination.page}" 
                *ngFor="let page of pages">
                <a class="page-link" mdbWavesEffect>
                    {{ page }}
                </a>
            </li>
        
            <li class="page-item" 
                [ngClass]="{'disabled': pagination.page === pages.length}" 
                (click)="changePage(pagination.page + 1)">
                <a class="page-link" aria-label="Next" mdbWavesEffect>
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
            <li class="page-item" 
                (click)="changePage(pages.length)" 
                [ngClass]="{'disabled': pages.length === pagination.page}">
                <a class="page-link"  mdbWavesEffect>
                    Last
                </a>
            </li>
        </ul>
    </nav>
  `,
})

export class MyPaginationComponent implements OnInit {
    @Input('pagination')  pagination: any;
    @Output('onChangePage') onChangePage = new EventEmitter(); 

    pages = [];

    constructor() { 
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        const { previousValue, currentValue } = changes.pagination;
        if(previousValue && (previousValue.totalPages != currentValue.totalPages)){
            this.getPagesArray( currentValue.totalPages);
        }
    }

    ngOnInit() {
        const { totalPages } = this.pagination;
        this.getPagesArray(totalPages);
    }

    getPagesArray(totalPages){
        this.pages = Array(totalPages).fill(0).map((x, i) => i + 1);
    }

    changePage(page){
        this.onChangePage.emit(page);
    }


}
