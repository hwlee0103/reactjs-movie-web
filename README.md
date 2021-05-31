# Movie App 2021

React JS Fundamentals Course (2021)
-ver 2019 updated

1. create-react-app
   : npx create-react-app, npm start -> local server

2. Dynamic Component Generatio
   : use data with dynamic array
   ; using javascript map function
   ; to render food

3. use id to give unique prop
   : to each item

4. prop-types
   : to check components'; validation
   : 변수 값의 유형 등에 대한 validation이 가능.
   ; string.isRequired이라면 string유형으로 필수값이라는 뜻.

5. to use state
   : delete food compo; hard coded data.
   : we need dynamic data.

6. React class Component
   : render method instead of return

7. onClick
   : useful property from react

8. setState
   : cannot modify state directly.
   ; use setState to modify state value and refresh page.

9. life cycle method
   : mounting, updating, unmounting
   ; see which method is called first: studying method's order

10. setTimeout
    : use setTimeout to change message on screen
    ; with js ternary operator

11. use YTS API
    : to fetch data
    ; using YTS API

12. axios
    : to get data
    ; with async function and await keyword to make program to wait for axios

13. getting movie data
    : setting data on state
    ; Movie.js - set propTypes

14. styling movie components
    : using css file
    ; import css file and write css code on css files.

15. getting 'genre' information
    ; use className in jsx tags

16. add styles
    : in css files
    ; 영화별 포스터, 제목, 연도, 줄거리를 일정한 크기의 칸으로!
    -> 추후 내 스타일로 바꿔보기!

17. cutting summary text
    : using summary.slice; string is array

18. move part of App.css style code to Movie.css
    : css 작성 및 모듈화 하기

19. upload to cloud
    : make gh-pages
    ; 코코아 클론 publish와 또 다른 방식.
    ; terminal에서 deploy

20. add react-router-dom
    : install with npm

21. make components and routes directory
    : to order files

22. import HashRouter and Route
    : to load component for each pages
    ; set Routes for paths
    ; use exact={true} props to render exactly on each path.
    ; 중복 url로 여겨져 중복 렌더링되는 것을 방지.

23. import Link from react-router-dom
    : to make react page interactive
    ; not using html a tag to kill react and refresh page

24. add movie-detail page
    : send all movie info as props
