var course = new Object();

// course.title = "JS Training";
// course.instructor = "Morten";
// course.level = 1

var course = {
  title: "JS Training",
  instructor: "Morten",
  level: 1,
  published: true,
  views: 0,
  updateViews: function() {
    return ++this.views;
  }
};

console.log(course.views);
course.updateViews();
course.updateViews();
console.log(course.views);

// ================================================================

// function Course(title, instructor, level, published, views) {
//   this.title = title;
//   this.instructor = instructor;
//   this.level = level;
//   this.published = published;
//   this.views = views;
//   this.updateViews = function() {
//     return ++this.views;
//   };
// }

class Course {
  constructor(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
      return ++this.views;
    };
  }
}

var currentDate = new Date();

var course01 = new Course("JS", "Morten", 1, true, 0);
var course02 = new Course("ECMA", "Eva", 1, true, 123);

var courses = [course01, course02];

console.log(course01);
console.log(courses);
