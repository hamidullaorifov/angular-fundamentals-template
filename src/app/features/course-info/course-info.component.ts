import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '@app/services/courses.service';
import { Course } from '@app/shared/models/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
  @Input() course?: Course;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit(): void {
    if (!this.course) {
      const courseId = this.route.snapshot.paramMap.get('id');
      if (courseId){
        this.course = this.coursesService.getCourse(courseId);
        console.log(courseId);
        console.log(this.course);
      }
      
    }
  }
}
