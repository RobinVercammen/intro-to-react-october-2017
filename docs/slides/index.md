# Intro to React

[https://goo.gl/idkU3A](https://goo.gl/idkU3A)  
[www.involved-it.be](https://www.involved-it.be)



# 1990s  
## {Html}


```http
HTTP GET /
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /dashboard
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /products
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>



# 2000s  
## <i class="devicon-php-plain"></i>


```http
HTTP GET /
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /dashboard
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /products
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>



# 2010s  
## <i class="devicon-javascript-plain"></i>


```http
HTTP GET /
```
## <i class="fa fa-file"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /dashboard
```
## <i class="fa fa-table"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>


```http
HTTP GET /products
```
## <i class="fa fa-table"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-cog"></i> <i class="fa fa-arrow-left"></i> <i class="fa fa-server"></i>



# <i class="fa fa-calendar-o"></i> Today
## <i class="devicon-angularjs-plain"></i><i class="devicon-react-original"></i><i class="devicon-backbonejs-plain"></i><i class="devicon-vuejs-plain"></i>



# <i class="devicon-react-original" style="font-size:5em;"></i>


## [create-react-app](https://github.com/facebookincubator/create-react-app)
```bash
create-react-app [name]
```


## Start vs Build
```bash
# start server (dev)
npm start 
# serve your own (prod)
npm run build
```


## Components
```js
import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    render() {
        return (
            <button>Click</button>
        )
    }
}
```


## State
```js
import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = { clickCount: 0 };
    }
    onClick = () => {
        // this.state.clickCount++;
        this.setState({ clickCount: this.state.clickCount + 1 })
    }
    render() {
        return (
            <button onClick={this.onClick}>Click {this.state.clickCount}</button>
        )
    }
}

```


## Props
```js
import React, { Component } from 'react';

export default class ButtonComponent extends Component {
    // ...
    render() {
        return (
            <button onClick={this.onClick}>Click {this.state.clickCount}</button>
        )
    }
}
```  
```html
    <MyButton title="Click Me Title"></MyButton>
```


## Lifecycle
```js
// Mount
constructor()
componentWillMount()
render()
componentDidMount()

// Update
componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()
```


## Routing
```shell
npm install -S react-router react-router-dom
```  
```js
import { BrowserRouter, Link, Route } from 'react-router-dom';
<BrowserRouter>
    <div className="App">
        <!--...-->
        <Link to="/">Dashboard  </Link>
        <Link to="/mount">mount  </Link>
        <Link to="/update">update</Link>
        <!--...-->
        <Route exact path="/" component={MyButtonPage}></Route>
        <Route path="/mount" component={MountButtonPage}></Route>
        <Route path="/update" render={() => (<UpdateButtonPage time={this.state.time} />)} ></Route>
    </div>
</BrowserRouter>
```


## Data



# <i class="fa fa-comments-o" style="font-size:5em;"></i>