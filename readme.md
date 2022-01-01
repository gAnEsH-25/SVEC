### Front-end Technologies

- HTML
- CSS
- JavaScript
- Bootstrap framework
- Angular framework
- ReactJs

### Back-end Technologies

- Node.js
	- express.js(middle ware)
	- nodemoon
	- cors
	- dotenv
- PHP
- C#
- Java
- Python 

### DataBases

- MongoDd
- Mysql
- SQLite
- Firebase
- Postgressql (java)
- Oracle

### VCS (Version Control System) /(Source Code Management (SCM))

- Distributed VCS
	- Git,Mercurial
- Remote(Central) VCS
	- Github,Bitbucket

### Git
- git init
- git add filename
- git add filename1 filename2 
- git add . or git add --all   (for adding all files in a folder)
- git status
- do git configuration(set )
- commit data with commit message
	- git commit -m "msg" 
- git remote add origin <link>
- git push origin master


### HTML

- Hyper Text Markup Language
- Semantic Elements
	- header
	- section
	- article
	- aside
	- footer
	- table

- Block Level Elements
	- h1 to h6
	- p 
	- div
	- all semantic elements
	- text with start from newline

- Inline Elements
	- span
	- img
	- a
	- nav
	- form
	- input
	- textarea
	- legend
	- nav
	- sub
	- sup


### CSS (Cascading Style Sheets)

- Inline 
- Internal
- External

+ Syntax of Css

	```
	selector{
			css properties
	}
	```
#### Selectors
 + simple selectors
	- universal selector(*)
	- by element name
	- grouping selector(,)
	- class selector
	- id selector

+ Combinators
	- descendant selector ( )
	- child selector (>)
	- Adjacent sibling selector(+)
	- General sibling selector(~)

+ pseudo class selector(:)
+ Pseudo element selector(::)
+ Attribute selector

### Box Model

+ margin
+ border
+ padding
	- padding : 10px (for all adajacent sides)
	- padding : 10px 30px (10px for top & bottom and 30px for right & left)
	- padding : 10px 30px 50px (10px for top ,30px for right & left and 50px for bottom)
	- padding : 10px 30px 4px 50px (top,right,bottom,left)
+ width
1rem=16px

### Media Quries

- Extra small devices (Mobiles)
	+ max-width:600px
- Small devices (Large Phones)
	+ min-width:600px
- Medium (landscape devices or small laptops)
	+ min-width:768px
- Large (large laptops or Desktops)
	+ min-width:992px
- Extra Large Devices ()
	+ min-width:
 
```
	@media only screen (min-width:) and (max-width:){
		CSS Code
	}
```

### Animation
### Respnsive Web Design
 - flex box
	- display
		+ flex
			- flex-wrap
			- justiy-content
			- flex-direction
			- flex-flow

### Flex-Box

- display 
	+ none
	+ inline
	+ block
	+ inline - block
- position
	+ staitc
	+ relative
	+ absolute
	+ fixed
	+ sticky
- algin-content
- algin-items
- align-self

### Bootstrap4.6

- It is a css framework
- module ( collection of functions and ckasses)
- package ( collection of modules)
- library ( collection of packages)
- framework ( collection of library
	+ module --> package --> library --> framework)
- types of modes
	+ offline
	+ online
		- CDN links 
- background-color -- bg
- text-white

+ margin in bootstrap(m-* (0-5))
	- 0 --> 0rem
	- 1 --> 0.25rem (4px)
	- 2 --> 0.5rem (5px)
	- 3 --> 1rm (16px)
	- 4 --> 1.5rem (24px)
	- 5 --> 3rem (48px)
- margin-left -- ml
- margin -- m 
- margin-top -- mt
- margin-right -- mr
- margin-bottom -- mb
+ padding (padding left --> pl-5)

+ colors
	- primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white

+ we can use color classes for 
	- buttons (btn btn-primary)
	- text (text-white)
	- background (bg-secondary)
	- alrets(alret alret-primary)

### JavaScript

+ In 1995 `Brenden Eich` introduced JavaScript (ES- 262)
+ JavaScript loosely toupled and dynamic language
+ JavaScript is text-based programming language and  we can use in client side and server side for dynamic web applications
- ECMA-Script(european computer manufaturing assciation)(ES-1 to 11(except 4))
	- let & const
	- map() [for repeatation]
	- arrow function
	- classes
	
	- spread operator
		+ to change array elements from one array to another
		+ 
		 ```
		 ...variable Name
		 ```
	- rest parameter
		+ to handle function parameters
		+ 
		 ```
		 ...parameter
		 ```

+ Datatypes
	- Number
	- BigInt(2^53 - 1)
	- String
	- Booleam
	- undefine
	- Null
	- Object
		```
		{
			name:"vvvv"
		}
		```
	- Arrray 
	

+ Varibles
	- var,let & const
	- scope
		+ fuction level --> var
		+ block level --> let & const
	- Redefine
	- Redeclare
	- `typeof()`

### Alerts

+ to generate notification
	- alert
	- prompt(to take input from the user)
	- confrim

+ console statements 
	-  `console.log()`
	-  `console.info()`
	-  `console.warn()`
	-  `console.error()`


+ Destructing of array

+ function with function name
	
- ```
  function demo(x,y){
	  return x+y
  }
  demo()
   ```
- anomymous function
 ```
  let demo=function(x,y)
  {
	  return x+y
  }
 ```
- Arrow function
 ```
 let demo= (x,y) =>{
	 return x*y
 }
 demo (3,4)

 ```
+ for-in
	- to get index values of an array

+ for-of
	- to get elements in an array

+ forEach --> (ES-5)

+ map() --> (ES-6)


### DOM

- Document Object Model
- Document
- history
- window
- navigator

+ DOM Methods
	- getElementById()
	- getElementsByClassName()
	- querySelector
	- innerText 
	- textContent  
	- append
	- appendChild
	- innerHTML
	- setAttribute()
	- classList
	- style
	- src


### JSON

+ JavaScript Object Notation
	- To exchange information between application and server 

```
{
	"name":"Ganesh",
	"age":20,
	"salary":"Student",
	"phno":6300899762
}
```
+ Ajax call or Promises(fetch API) or axios


### ReactJS

 ##### ReactJS features

+ It is a library
+ It follows component based Architecture
	- Functiom Component
	- Class Component
	- Pure Component
	- Higher Order Component
+ It Provides virtual DOM
+ It provides JFX(JavaScript )
+ Unidirectional data flow 
+ Single Page Application


+ Props
	
	- to pass data from one  component to another component we will use props
	- props are immutable

	+ Union Bank(Functional)
		- AndhraBank (Functional)
		- CorportionBank(Class)

+ States
	- In react to maintain information we will use states
	- we can maintain states in class component only(Before react 16.8 version)
	- to take state in react,try to create constructor above render method and inside of class component
	- use `rconst` sinpet
	```
	constructor(){
		super();
		this.state={

		}
	}
	```
	- to update the information in class component use `setState()` method
	- to update the information in class component we have to follow component life cycle methods
		- ``componentWillReceiveProps()`
		- `componentWillMount()`
		- `componentDidMount()`
		- `ShouldComponentUpdate()`
		- `componentWillUpdate()`
		- `componentWillUnmount()`
		- `componentDidUpdate()`

### Hooks

+ from react16.8 Hooks are introduced

- To maintain information in Functional component we can use Hooks

- parent - child1 --> chhild2 --> child3
- `useState()`
- `useEffect()`
- `useMemo()`
- `useRef`
- `useContext`

### List Rendering

### Event Handling & Form Handling

- `onChange`
- `onSubmit`
- `preventDefault()`


### Routing in React

+ To navigate (Route) from one component to another
	- install react-router-dom package by using
		`npm install react-router-dom`1
	- `BrowserRouter`
	- `Routes`
	- `Route`
	- `Link`
	- `path`
	- `element` 

+ Project Envirnoment setup
	- Download VisualStudiocode
	- Download Nodejs
	- install nodejs and check versions of `node` and `npm` (node pack manager)
		- `node -v`
		- `npm -v`
	- `webpack` and `babel`
	- `create-react-app`
		- `npm install create-react-app`
			- `create-react-app projectname`
	- `npx create-react-app appaname`


+ Index.gtml
+ index.js
+ 
+ Index Page
	- nav.js
	- body.js
	- footer.js

	+ Home.js
		- nav
		- body
		- footer

	+ Logiin.js
	+ Register
	+ About 
	+ Comtact




### Reference websites for resources
- flaticon
- html color codes
- webaim
- freesvg.org

### Task 1:
===========

- audio
- video
- canvas
- progress
- meter
- datalist
- select element

### task 2:
===========

+ index page
+ registration
+ login

### Task 3:
===========
- navbar with Responsive