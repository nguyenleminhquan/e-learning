
| API | Method | Data format | 
| :-: | :-: | :-|
| http://localhost:5000/user/register| POST | {<br>first_name: string <br> last_name: string <br> username: string <br> password: string <br> gender: "male" \| "female" <br> dob: string <br> role: "student" \| "teacher"<br>} |
| http://localhost:5000/user/login | POST | {<br>username: string <br> password: string<br>}