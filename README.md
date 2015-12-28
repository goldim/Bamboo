# About the «Bamboo» theme

This is another theme contribution which can be used with applications written in qooxdoo v3.0 or above. 
The theme has a "wooden" visual appeal which partly reminds me of bamboo, hence its name. It took ages to develop
(more than three years), because this is a typical spare time project and finding/designing the bits and pieces 
suitable for creating a coherent overall appearance was quite a demanding task.

In contrast to my previous theme demos, the «Bamboo» demo application uses neither Oxygen nor Tango, but a slightly 
customized subset of the [Font Awesome](http://fontawesome.io/) icons. However, instead of trying to make the awesome 
CSS/SVG mechanics work in a qooxdoo program I'm simply using PNG versions of the icons 
([https://github.com/encharm/Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG).

## How to use «Bamboo»

1. Download the theme files and unzip the contents into an appropriate folder on your local machine. 
(Recommendation: Put the theme outside of the qooxdoo SDK folder, but on the same directory level.)

2. Modify the contrib.json file of your application by adding «Bamboo» as a library, e.g.
  
  `"jobs" :
  {
    "libraries" :
    {
      "library" :
      [
        {
          "manifest" : "../Bamboo/Manifest.json"
        }
      ]
    }
  }`
  
3. Change the `QXTHEME` key in `config.json` to `"bamboo.theme.Theme"`. This way the theme of your application is 
**replaced** by «Bamboo». The downside to this approach: If you want to modify and/or extend the "bambooish" appearance 
of your application you have to do this directly in the «Bamboo» theme files which may later lead to subtle bugs or
strange side effects.

You might, therefore, want to invest a few more minutes, leave the `QXTHEME` key in `config.json` untouched and let
your predefined application theme **inherit** from «Bamboo» instead of being replaced by it. To do this, go to the 
theme folder of your application and modify Appearance.js, Color.js, Decoration.js and Font.js as shown in this 
example:

`qx.Theme.define("myapp.theme.Appearance",
{
  //extend : qx.theme.modern.Appearance,
  extend : bamboo.theme.Appearance,

  appearances :
  {
  }
});`

This way you can safely add new appearances, decorators, colors and fonts, or overwrite existing ones.

4. Now generate your application and your are done.
