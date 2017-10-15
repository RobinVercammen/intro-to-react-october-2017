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


## Lifecycle


## Routing


## Data



# <i class="fa fa-comments-o" style="font-size:5em;"></i>