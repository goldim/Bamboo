/* ************************************************************************

   Copyright:
     2015 Norbert Schröder, http://scro34.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bamboo.demo.toolbar.SplitButton",
{
  extend: qx.ui.toolbar.SplitButton,

  construct: function(label, iconDefault, menu, command, iconHovered)
  {
    this.base(arguments, label, iconDefault, menu, command);
    
    this._iconDefault = iconDefault;
    this._iconHovered = iconHovered;
    
    this.getChildControl("button").addListener("mouseover", function() {
      this.getChildControl("button").setIcon(this._iconHovered);
    }, this);
    
    this.getChildControl("button").addListener("mouseout", function() {
      this.getChildControl("button").setIcon(this._iconDefault);
    }, this);
  },

  members:
  {
    _iconDefault: null,
    _iconHovered: null
  }
});
