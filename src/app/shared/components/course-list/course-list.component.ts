import { Component, OnInit } from '@angular/core';
import { Course } from '@app/shared/models/course.model';
import { CoursesService} from '@app/services/courses.service'
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  constructor (private courseService: CoursesService) { }
  ngOnInit(): void {
    this.courses = this.courseService.getAll();
  }
}
