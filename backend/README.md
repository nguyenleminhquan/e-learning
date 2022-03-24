
| API | Method | Data format | Describe |
| :-: | :-: | :-| :- |
| http://localhost:5000/user/register| POST | {<br>first_name: string <br> last_name: string <br> username: string <br> password: string <br> gender: "male" \| "female" <br> dob: string("YYYY-mm-dd") <br> role: "student" \| "teacher"<br>} | Đăng ký một người dùng |
| http://localhost:5000/user/login | POST | {<br>username: string <br> password: string<br>} | Đăng nhập |
