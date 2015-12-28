/* ************************************************************************

   Copyright:
      2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Theme.define("bamboo.theme.Font",
{
  fonts:
  {
    "default":
    {
      size: ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ? 13 : 13,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? [ "Lucida Grande" ] :
        ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ?
        [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial", "sans-serif" ]
    },

    "bold":
    {
      size: ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ? 13 : 13,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? [ "Lucida Grande" ] :
        ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ?
        [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial", "sans-serif" ],
      bold: true
    },

    "small":
    {
      size: ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ? 12 : 12,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? [ "Lucida Grande" ] :
        ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ?
        [ "Segoe UI", "Candara" ] :
        [ "Tahoma", "Liberation Sans", "Arial", "sans-serif" ]
    },

    "monospace":
    {
      size: 11,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? [ "Lucida Console", "Monaco" ] :
        ((qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "vista") || (qx.core.Environment.get("os.name") === "win" && qx.core.Environment.get("os.version") === "7")) ?
        [ "Consolas" ] :
        [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
    }
  }
});
