
| API | Method | Data format | Describe |
| :- | :-: | :-| :- |
| http://localhost:5000/user/register| POST | Body:<br>{<br>first_name: string <br> last_name: string <br> username: string <br> password: string <br> gender: "male" \| "female" <br> dob: string("YYYY-mm-dd") <br> role: "student" \| "teacher"<br>} | Đăng ký một người dùng |
| http://localhost:5000/user/login | POST | Body:<br>{<br>username: string <br> password: string<br>} | Đăng nhập |
| http://localhost:5000/user/course/create | POST | HTTP Header:<br> Authorization: Bearer your_token<br>Body: <br> {<br>name: string<br>startDay: string("YYYY-mm-dd")<br>endDate: string("YYYY-mm-dd")<br>description: string<br>} | Giáo viên thêm một khóa học |
| http://localhost:5000/user/course/attend | POST | HTTP Header:<br>Authorization: Bearer your_token<br>Body:<br>{<br>course: course_id<br>} | Học sinh tham gia khóa học bằng cách nhập id khóa học |