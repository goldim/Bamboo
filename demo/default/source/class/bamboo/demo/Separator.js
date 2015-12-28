/* ************************************************************************

   Copyright:
     2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Class.define("bamboo.demo.Separator",
{
  extend: qx.ui.container.Composite,

  construct: function(width)
  {
    this.base(arguments);

    var layout = new qx.ui.layout.HBox(5).set({
      alignX: "center",
      alignY: "middle" 
    });
    
    this.set({
      layout: layout
    });
    
    this.add(new qx.ui.menu.Separator().set({
      width: width,
      maxHeight: 2
    }));
    
    this.add(new qx.ui.basic.Atom().set({
      icon: "bamboo/decoration/radiobutton/unchecked.png",
      decorator: "radiobutton-hovered", 
      marginBottom: 3
    }));
    
    this.add(new qx.ui.menu.Separator().set({
      width: width,
      maxHeight: 2
    }));
      
  }

});
