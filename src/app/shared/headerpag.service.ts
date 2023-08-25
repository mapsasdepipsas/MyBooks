import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderpagService {
  currentPage: string = '';

  constructor() { }

  setCurrentPage(page: string) {
    this.currentPage = page;
  }
}
