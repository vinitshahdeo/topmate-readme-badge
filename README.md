<div align="center">
  <a href="https://topmate.io/vinitshahdeo">
    <img src="https://topmate-readme-badge.herokuapp.com/"/>
  </a>
</div>

<h1 align="center">Topmate <code>README</code> Badge</h1>

![](./public/images/topmate-banner.png)

Topmate is a platform to connect 1:1 with your audience & monetise your time better. Basically, one link to do it all ➥ [topmate.io/vinitshahdeo](https://topmate.io/vinitshahdeo). Even better, you can now **add a markdown badge** in your GitHub profile `README` to connect with your community!

### Here's how?

Replace `vinitshahdeo` in the markdown with your Peerlist username. **Get a [Topmate profile here](https://topmate.io/) if you don't have one already!**

```md
[![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo)](https://topmate.io/vinitshahdeo)
```
[![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo)](https://topmate.io/vinitshahdeo)

### 🎨 Style your badge 

Additionally it supports the styles. **To use a different style**: Replace `flat-square` in the markdown with any of the styles below. :point_down:

```md
![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=flat-square)
```

#### Available styles

| Type  | Badge  |
|:---|:---|
| `flat` <br> <sub>This is the default style.<sub>  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo) |
| `flat-square`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=flat-square)  |
| `plastic`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=plastic)  |
| `social`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=social)  |
| `for-the-badge`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=for-the-badge)  |

### Local Setup

```bash
npm i
npm start
```

Run the above command and visit `http://localhost:3000/`

### API Documentation
  
### Under the hood
  
![Deployed on Heroku](https://img.shields.io/badge/Deployed%20on%20Heroku-430098?style=flat&logo=heroku&logoColor=white)
  
The badges are powered by an express app deployed on Heroku. These are generated using a tiny-service written by me: [topmate.js]()
  
```js
topmate
  .generateBadge(username, style)
  .then((badge) => {
    // here is your badge
  })
  .catch(console.log);
```

> Huge shoutout to [Shields.io](https://shields.io/) service for providing badges in the SVG format.


### Author
  
Vinit Shahdeo | MIT License




