import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should load courses', () => {
    const mockCourses = [
      { id: 1, name: 'Angular Basics', code: 'NG101', credits: 3 }
    ];

    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(1);
    });

    httpMock.expectOne('http://localhost:3000/courses').flush(mockCourses);
  });
});
