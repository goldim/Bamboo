/* ************************************************************************

   Copyright:
     2015 Norbert Schröder, http://scro34.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bamboo.demo.toolbar.RadioButton",
{
  extend: qx.ui.toolbar.RadioButton,

  construct: function(label, iconDefault, iconHovered, iconPressedDefault, iconPressedHovered)
  {
    this.base(arguments, label, iconDefault);
    
    this._iconDefault = iconDefault;
    this._iconHovered = iconHovered ? iconHovered : iconDefault;
    this._iconPressedDefault = iconPressedDefault ? iconPressedDefault : iconDefault;
    this._iconPressedHovered = iconPressedHovered ? iconPressedHovered : iconHovered;
    
    this.addListener("pointerover", function() {
      this.setIcon(this.getValue() ? this._iconPressedHovered : this._iconHovered);
    }, this);
    
    this.addListener("pointerout", function() {
      this.setIcon(this.getValue() ? this._iconPressedDefault : this._iconDefault);
    }, this);
  },

  members:
  {
    _iconDefault: null,
    _iconHovered: null,
    _iconPressedDefault: null,
    _iconPressedHovered: null
  }
});
