<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Responsive aspect-ratio issue
</h1>

The affected code is found in `components/image.js`

## How to recreate the issue

1.  **Build the site!**

    The issue only shows in built-version of the website 

    ```shell
    npm run build
    ```

1.  **Serve the site**

    ```shell
    npm run serve
    ```

1.  **Open site**

    Your site is now running at `http://localhost:9000`!
    
    Alternatively visit [this site](https://relaxed-bartik-f6857a.netlify.app/)

    The issue shows when loading on a mobile device or a browser with a viewport-width smaller than 678px (the configuration of the media query).

    For reference look at the video below. It shows the image ratio as they should be, after reloading the issue is apparent immediatly. 

    When inspecting the element, the aspect-ratio set with the padding-bottom is the ratio of the desktop version.

[![Demonstration](http://img.youtube.com/vi/XpqRRe8UrJo/0.jpg)](http://www.youtube.com/watch?v=XpqRRe8UrJo "")


