import { Injectable } from '@angular/core';
import { Course } from '@app/shared/models/course.model';
import { mockedCoursesList } from '@app/shared/mocks/mocks';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses = mockedCoursesList;
    getAll() : Observable<Course[]> {
        return of(this.courses);
    }

    createCourse(course: Course) : Observable<Course> {
        this.courses.push(course);
        return of(course);
    }

    editCourse(id: string, course: Course) : Observable<Course | undefined> {
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) {
            this.courses[index] = course;
            return of(course);
        }
        return of(undefined);
    }

    getCourse(id: string) : Observable<Course | undefined> {
        const course = this.courses.find(course => course.id === id);
        return of(course);
    }

    deleteCourse(id: string) : Observable<void> {
        this.courses = this.courses.filter(c => c.id !== id);
        return of(undefined);
    }

    filterCourses(value: string) : Observable<Course[]> {
        const filtered = this.courses.filter(course => course.title.includes(value));
        return of(filtered);
    }

    getAllAuthors() : Observable<string[]> {
        const authors = this.courses.flatMap(course => course.authors);
        return of(authors);
    }

    createAuthor(name: string) : Observable<string> {
        // Add your code here
        return of(name);
    }

    getAuthorById(id: string) : Observable<string | undefined> {
        const author = this.courses.flatMap(course => course.authors).find(author => author === id);
        return of(author);
    }
}
