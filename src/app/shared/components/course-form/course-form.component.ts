import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder, FormControl, FormGroup,
  Validators
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm!: FormGroup;
  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      duration: [null, [Validators.required, Validators.min(1)]],
      author: ['', [Validators.minLength(2), Validators.pattern(/^[A-Za-z0-9 ]*$/)]],
      authors: this.fb.array([]),
    })
  }
  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }
  addAuthor(){
    const authorName = this.courseForm.get('author')?.value;
    if (authorName && this.courseForm.get('author')?.valid) {
      this.authors.push(new FormControl(authorName));
      this.courseForm.get('author')?.reset();
    }
  }
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
}
