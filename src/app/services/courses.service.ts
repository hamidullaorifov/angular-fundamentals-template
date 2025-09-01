import { Injectable } from '@angular/core';
import { Course } from '@app/shared/models/course.model';
import { mockedCoursesList } from '@app/shared/mocks/mocks';
@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private courses = mockedCoursesList;
    getAll() : Course[] {
        return this.courses;
    }

    createCourse(course: Course) {
        this.courses.push(course);
    }

    editCourse(id: string, course: Course) {
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) this.courses[index] = course;
    }

    getCourse(id: string) : Course | undefined {
        return this.courses.find(course => course.id === id);
    }

    deleteCourse(id: string) {
        this.courses = this.courses.filter(c => c.id !== id);
    }

    filterCourses(value: string) {
        return this.courses.filter(course => course.title.includes(value));
    }

    getAllAuthors() {
        return this.courses.flatMap(course => course.authors);
    }

    createAuthor(name: string) {
        // Add your code here
    }

    getAuthorById(id: string) {
        // Add your code here
    }
}
