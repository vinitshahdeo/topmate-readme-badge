<h1 align="center">
   Topmate <code>README</code> Badge <br>
   <a href="https://topmate.io/vinitshahdeo">
   <img src="https://topmate-readme-badge.herokuapp.com/"/>
   </a>
</h1>

![](./public/images/topmate-banner.png)

<div align='center'>
   <img src="https://img.shields.io/badge/Deployed%20on%20Heroku-430098?style=flat&logo=heroku&logoColor=white"/>
   <a href="https://twitter.com/Vinit_Shahdeo">
    <img src="https://img.shields.io/twitter/follow/vinit_shahdeo?style=social"/>
   </a>
   <a href="https://www.postman.com/restless-rocket-22186/workspace/topmate-readme-badges-api/documentation/6178851-c863d626-b2e3-49bf-82d0-4e4cb46a089c">
    <img src="http://img.shields.io/badge/Postman-Collection-orange.svg?style=flat&logo=postman"/>
   </a>
   </br>
   </br>
</div>

Topmate is a platform to connect 1:1 with your audience & monetise your time better. Basically, one link to do it all ➥ [topmate.io/vinitshahdeo](https://topmate.io/vinitshahdeo). Even better, you can now **add a markdown badge** in your GitHub profile `README` to connect with your community! If you haven't claimed your topmate link yet, visit [topmate.io](https://topmate.io/) to join 1000+ creators, experts and mentors creating impact with their time.

## Here's how?

Replace `vinitshahdeo` in the markdown with your Peerlist username. **Get a [Topmate profile here](https://topmate.io/) if you don't have one already!**

```markdown
[![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo)](https://topmate.io/vinitshahdeo)
```
[![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo)](https://topmate.io/vinitshahdeo)

## 🎨 Style your badge 

Additionally it supports the styles. **To use a different style**: Replace `flat-square` in the markdown with any of the styles below. :point_down:

```markdown
![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=flat-square)
```

### Available styles

| Type  | Badge  |
|:---|:---|
| `flat` <br> <sub>This is the default style.<sub>  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo) |
| `flat-square`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=flat-square)  |
| `plastic`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=plastic)  |
| `social`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=social)  |
| `for-the-badge`  | ![Topmate](https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=for-the-badge)  |

## Local Setup

```bash
npm i
npm start
```

Run the above command and visit `http://localhost:3000/`

## API Documentation

`GET baseUrl/:username` - please refer to the [Topmate README Badges public Postman collection](https://www.postman.com/restless-rocket-22186/workspace/topmate-readme-badges-api/documentation/6178851-c863d626-b2e3-49bf-82d0-4e4cb46a089c) for the API documentation. Please feel free to fork and use! You can directly run the collection in Postman by using the **Run in Postman** button below :point_down:
  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/6178851-c863d626-b2e3-49bf-82d0-4e4cb46a089c?action=collection%2Ffork&collection-url=entityId%3D6178851-c863d626-b2e3-49bf-82d0-4e4cb46a089c%26entityType%3Dcollection%26workspaceId%3Ddfda0a54-561a-45a8-b795-18038b8fd159#?env%5Btopmate%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cHM6Ly90b3BtYXRlLXJlYWRtZS1iYWRnZS5oZXJva3VhcHAuY29tIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
  
## Under the hood
  
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


## Support

Glad to see you here! Did you love it? Consider giving a :star: and share it with your friends! You can also find me on [Twitter](https://twitter.com/Vinit_Shahdeo).


<a href="https://www.buymeacoffee.com/vinitshahdeo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 20% !important;width: 20% !important;" ></a>




