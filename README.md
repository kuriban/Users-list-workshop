
### Initial setup

```bash
# Clone the repo...
git clone https://github.com/VadimZhiltsov/.git
cd 

# Then, you need to install all the dependencies...
npm install
npm install -g gulp
```

### Running in the browser
```bash
gulp build
gulp serve

# If you wanna Gulp to re-build on every change...
gulp watch
```


### What are all the pieces involved?

#### [Babel]
Transpiles ES6 code into regular ES5 (today's JavaScript) so that it can be run in a today browser. Like traceur but doesn't need a runtime to work. Formerly known as 6to5.

#### [CommonJS]
Babel is configured to transpile ES6 modules into CommonJS syntax and we use browserify to bundle the code into one file to deliver it to the browser.

#### [Browserify]
Browserify walks through all files and traces down all `require()`s to bundle all files together.  

#### [Gulp]
Task runner to make defining and running the tasks simpler.

[ES6]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts
[Babel]: http://babeljs.io/
[CommonJS]: http://wiki.commonjs.org/wiki/CommonJS
[Browserify]: http://browserify.org/
[Gulp]: http://gulpjs.com/




### What you need to do:

1. Create login page
1.1 using ajax send request and verify credentials
1.1.1 if credentials are correct, send user to list page
1.1.2 if credentials are wrong, show message

2. Create user list page:
2.1 show all users from http://193.111.63.76:3000/api/v1/Users in table
2.2 each user should have link to edit page
2.3 each user should have delete button
2.4 page must have create user link

3. Create user creation page
3.1 page must have form:
3.1.1 page must have email field (unique) (required)
3.1.2 page must have password field (required)
3.1.3 page must have name field (required)
3.1.4 page must have comment field
3.1.5 page must have simple validation
3.2 page should be submited by ajax
3.3 when form submited successefully, user should be redirected to list page

4. Create edit user page
4.1 page must have the same form as for Create page, but with preloaded data
4.2 submit button should be disabled untill user data is loaded
4.3 when form submited successefully, user should be redirected to list page




# API

### Get user list
GET requst to URL: http://193.111.63.76:3000/api/v1/Users

### Create user
POST request to URL:
http://193.111.63.76:3000/api/v1/Users
With JSON data:
```
{
	name: "Vadim",
	password: "ЕхалиМедведиНаВелосипеде",
	email: "vadim.zhiltsov@mail.ru",
	comment: "Лабудибудилабуда",
}
```

### Edit user 
PUT request to URL:
http://193.111.63.76:3000/api/v1/Users/user_id
WARN: user_id need to be replaced
With changed data:
```
{
  "name":"Vadimz"

}
```

### Delete user 
DELETE request to URL:
http://193.111.63.76:3000/api/v1/Users/user_id
WARN: user_id need to be replaced



