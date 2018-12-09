import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { Book } from 'src/models/book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'go-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  addNewBookForm: FormGroup;
  books: Book[];

  constructor(
    private fb: FormBuilder,
    private booksService: BooksService ) { }

  ngOnInit() {
    this.getBooks();
    this.addNewBookForm = this.fb.group( {
      title: [
        null,
        [
          Validators.required
        ]
      ],
      category: [
        null,
        [
          Validators.required
        ]
      ],
      description: [
        null,
        [
          Validators.required
        ]
      ]
    });
  }

  addBook(formDirective: NgForm) {
    this.booksService.addBook( this.addNewBookForm.value ).subscribe( ( a ) => {
      formDirective.resetForm();
      this.addNewBookForm.root.reset();
      this.getBooks();
    }, ( error ) => {
      console.log( error );
    } );
  }

  private getBooks() {
    this.booksService.getBooks().subscribe( books => this.books = books);
  }
}
