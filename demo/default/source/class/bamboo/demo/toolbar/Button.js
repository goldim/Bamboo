/* ************************************************************************

   Copyright:
     2015 Norbert Schröder, http://scro34.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bamboo.demo.toolbar.Button",
{
  extend: qx.ui.toolbar.Button,

  construct: function(label, iconDefault, iconHovered)
  {
    this.base(arguments, label, iconDefault);
    
    this._iconDefault = iconDefault;
    this._iconHovered = iconHovered;
    
    this.addListener("pointerover", function() {
      this.setIcon(this._iconHovered);
    }, this);
    
    this.addListener("pointerout", function() {
      this.setIcon(this._iconDefault);
    }, this);
  },

  members:
  {
    _iconDefault: null,
    _iconHovered: null
  }
});
