const pageMarkup = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Hero</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body,
      #root {
        height: 100%;
      }
      .arrow-next-container {
        margin-right: 30px;
      }
      .arrow-next-image {
        width: 40px;
        height: 40px;
        transform: rotate(180deg);
      }
      .arrow-back-image {
        width: 40px;
        height: 40px;
      }
      .arrows-container {
        width: 100%;
        position: absolute;
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 30px;
      }
      .home {
        position: absolute;
        top: 50px;
        left: 40px;
      }
      .home-image {
        width: 40px;
        height: 40px;
      }
    </style>
  </head>

  <body>
    <img alt="Page1" src="images/page{{current-page}}.svg" style="width: 100%; height: 100%" />

    <div class="arrows-container">
      <a class="arrow-next-container" href="page{{next-page}}.html">
        <img alt="Next page" class="arrow-next-image" src="images/next.gif" />
      </a>
      <a class="arrow-back-container" href="page{{prev-page}}.html">
        <img
          alt="Previous page"
          class="arrow-back-image"
          src="images/next.gif"
        />
      </a>
    </div>

    <a href="index.html" class="home">
      <img src="images/home.gif" alt="Homepage" class="home-image" />
    </a>
  </body>
</html>
`;

const fs = require("fs");

for (let i = 1; i < 22; i++) {
  const content = pageMarkup
    .replace("{{current-page}}", i.toString())
    .replace("{{prev-page}}", (i - 1).toString())
    .replace("{{next-page}}", (i + 1).toString());

  fs.writeFile(`./page${i}.html`, content, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}