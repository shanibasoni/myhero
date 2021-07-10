const fs = require("fs");

function generate(pages) {
  let videoIndex = 2;
  pages.forEach((page) => {
    const content = pageMarkup
      .replace("{{current-page}}", page.toString())
      .replace("{{current-page}}", page.toString())
      .replace("{{prev-page}}", (page - 1).toString())
      .replace("{{next-page}}", (page + 1).toString())
      .replace("{{video-page}}", videoIndex.toString());

    fs.writeFile(`./page${page}.html`, content, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
    videoIndex++;
  });
}

const pages = [6, 8, 11, 13, 15, 18, 20];

const pageMarkup = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MyHero</title>
    <style>
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    </style>
    <style>
      * {
        box-sizing: border-box;
      }
      html,
      body,
      #container {
        width: 100%;
        height: 100%;
      }
      #container {
        text-align: center;
        position: relative;
      }
      #box {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-repeat: no-repeat;
      }

      .arrows-container {
        position: absolute;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        z-index: 2;
        bottom: 1.5%;
        height: 5%;
        padding: 0 20px;
      }
      .arrows-container img {
        width: 30%;
      }
      .arrow-next-container {
        text-align: left;
      }
      .arrow-back-container {
        text-align: right;
      }
      .arrow-next-image {
        transform: rotateY(180deg);
      }

      .home {
        width: 4%;
        position: absolute;
        top: 5%;
        left: 4%;
        max-width: 30px;
      }
      .home-image {
        width: 100%;
        height: auto;
      }

      #video_player {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        display: none;
      }
      #play_button {
        cursor: pointer;
        width: 200px;
        height: 200px;
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background: none;
        border: none;
        background-image: url(images/play_button.gif);
        background-size: contain;
      }
      @media screen and (max-width: 600px) {
        #play_button {
          width: 100px;
          height: 100px;
        }
      }
      .controls {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <div
        id="box"
        style="display: none; background-image: url('images/page6.svg')"
        data-imageurl="images/page6.svg"
      >
        <video
          autoplay
          controls
          width="100%"
          height="100%"
          id="video_player"
          class="controls"
        >
          <source src="videos/page2.mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <button
          id="play_button"
          onclick="startVideo()"
          class="controls"
        ></button>

        <div class="arrows-container">
          <a class="arrow-next-container controls" href="page7.html">
            <img
              alt="Next page"
              class="arrow-next-image"
              src="images/next.gif"
            />
          </a>
          <a class="arrow-back-container controls" href="page5.html">
            <img
              alt="Previous page"
              class="arrow-back-image"
              src="images/next.gif"
            />
          </a>
        </div>

        <a href="index.html" class="home controls">
          <img src="images/home.gif" alt="Homepage" class="home-image" />
        </a>
      </div>
    </div>
    <script>
      const aspectRatio = 810 / 1010;
      const calculate = (width, height) => {
        let newHeight = height;
        let newWidth = height * aspectRatio;

        if (newWidth > width) {
          const delta = newWidth / width;
          newWidth = newWidth / delta;
          newHeight = newHeight / delta;
        }

        return {
          width: +newWidth.toFixed(2),
          height: +newHeight.toFixed(2),
        };
      };
      function startVideo() {
        document.getElementById("play_button").style.display = "none";
        document.getElementById("video_player").play();
      }
      function showControls() {
        Array.from(document.getElementsByClassName("controls")).forEach(
          (el) => {
            el.style.display = "block";
          }
        );
      }
      function waitForImage() {
        const url = document
          .getElementById("box")
          .getAttribute("data-imageurl");

        const img = new Image();
        img.onload = function () {
          showControls();
        };
        img.onerror = function () {
          console.error("Failed loading main image");
          showControls();
        };
        img.src = url;
        if (img.complete) {
          img.onload();
        }
      }
      function main() {
        const size = calculate(window.innerWidth, window.innerHeight);
        const box = document.getElementById("box");
        box.style.width = size.width + "px";
        box.style.height = size.height + "px";
        box.style.display = "block";

        const video = document.getElementById("video_player");
        const video_width = size.width * 0.95;
        video.style.width = video_width + "px";
        video.style.height = video_width + "px";
        video.onplay = () => {
          document.getElementById("play_button").style.display = "none";
        };
        waitForImage();
      }
      document.addEventListener("DOMContentLoaded", main, false);
      window.onresize = main;
    </script>
  </body>
</html>
`;
generate(pages);
