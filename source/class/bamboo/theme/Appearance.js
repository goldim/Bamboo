/* ************************************************************************

   Copyright:
     2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     Norbert Schröder (scro34)

************************************************************************ */

/**
 * The Bamboo appearance theme.
 * 
 * @asset(bamboo/*)
 * 
 * @asset(qx/icon/${qx.icontheme}/16/actions/view-refresh.png)
 * @asset(qx/static/*)
 */
qx.Theme.define("bamboo.theme.Appearance",
{
  aliases: {
    decoration: "bamboo/decoration"
  },
  
  appearances:
  {
    /*
    ---------------------------------------------------------------------------
      APPLICATION
    ---------------------------------------------------------------------------
    */

    "app-header":
    {
      style: function(states)
      {
        return {
          font: "bold",
          textColor: "text-app-header",
          padding: [8, 12],
          decorator: "app-header"
        };
      }
    },

    "app-header-label": "label",

    "app-splitpane":
    {
      alias: "splitpane",
      
      style: function(states)
      {
        return {
          padding: 0
        };
      }
    },
    
    "app-logo":
    {
      include: "app-header",
      
      style: function(states)
      {
        return {
          font: "headline",
          decorator: "app-logo"
        }
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    "button-frame":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator, textColor;
        var padding = states.checked || states.pressed ? [3, 9] : [2, 9, 4]; 

        if (states.checked && states.focused && !states.inner) {
          if (states.circle) {
            decorator = states.hovered ? "button-circle-checked-hovered" : "button-circle-checked-focused";
          } else {
            decorator = states.hovered ? "button-checked-hovered" : "button-checked-focused";
          }
          textColor = states.pressed ? "text-hovered" : "text-selected";
        } else if (states.disabled) {
		      if (states.circle) {
			      decorator = states.checked ? "button-circle-checked-disabled" : "button-circle-disabled";
		      } else {
			      decorator = states.checked ? "button-checked-disabled" : "button-disabled";
		      }
          textColor = undefined;
        } else if (states.pressed) {
          if (states.circle) {
            decorator = "button-circle-pressed";
          } else {
            decorator = states.hovered ? "button-checked-hovered" : "button-checked";
          }
          textColor = "text-hovered";
        } else if (states.checked) {
          if (states.circle) {
            decorator = states.hovered ? "button-circle-checked-hovered" : "button-circle-checked";
          } else {
            decorator = states.hovered ? "button-checked-hovered" : "button-checked";
          }
          textColor = states.hovered ? "text-hovered" : undefined;
        } else if (states.hovered) {
          if (states.circle) {
            decorator = "button-circle-hovered";
          } else {
            decorator = "button-hovered";
          }
          textColor = "text-hovered";
        } else if (states.focused && !states.inner) {
          if (states.circle) {
            decorator = "button-circle-focused";
          } else {
            decorator = "button-hovered";
          }
          textColor = "text-selected";
        } else {
          if (states.circle) {
            decorator = "button-circle";
          } else {
            decorator = "button";
          }
          textColor = undefined;
        }

        if (states.invalid && !states.disabled) {
          decorator += "-invalid";
        }

        return {
          decorator: decorator,
          textColor: textColor,
          padding: padding,
          margin: states.circle ? [3, 0] : [1, 0],
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    "toggle-button" : "button",

    "button-frame/image":
    {
      style: function(states)
      {
        return {
          opacity: !states.replacement && states.disabled ? 0.5 : 1
        };
      }
    },

    "button":
    {
      alias: "button-frame",
      include: "button-frame",

      style: function(states)
      {
        return {
          center: true
        };
      }
    },

    "hover-button":
    {
      alias: "atom",
      include: "atom",

      style: function(states)
      {
        return {
          decorator: states.hovered ? "selected" : undefined,
          textColor: states.hovered ? "text-highlight" : undefined
        };
      }
    },

    "menubutton": 
    {
      include: "button",
      alias: "button",

      style: function(states)
      {
        return {
          icon: "decoration/arrows/down.png",
          iconPosition: "right"
        };
      }
    },

    "splitbutton": {},
    
    "splitbutton/button":
    {
      alias: "button",
      include: "button",

      style: function(states, superStyles)
      {
		    return {
		      margin: [2, 0, 2, 1]
		  }
	  }
	},
	  
    
    "splitbutton/arrow":
    {
      alias: "button",
      include: "button",

      style: function(states, superStyles)
      {
        var icon = "decoration/arrows/down";
        
        if (states.focused || states.hovered) {
          icon += "-focused.png";
        } else {
          icon += ".png";
        }
        
        return {
          icon: icon,
          margin: [2, 1, 2, 0],
          padding: [superStyles.padding[0], superStyles.padding[1] - 2]
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */

    "checkbox":
    {
      alias: "atom",

      style: function(states)
      {
        var icon = states.disabled ? states.undetermined ? "decoration/checkbox/undetermined-disabled" : 
                                          states.checked ? "decoration/checkbox/checked-disabled" : 
                                                           "decoration/checkbox/unchecked-disabled" : 
                   states.undetermined ? "decoration/checkbox/undetermined" :
                        states.checked ? "decoration/checkbox/checked" : 
                                         "decoration/checkbox/unchecked";
        
        if ((states.hovered || states.focused) && !states.disabled) {
          icon += "-hovered";
        }
        
        if (states.invalid && !states.disabled) {
          icon += "-invalid";
        }
        
        icon += ".png";
        
        return {
          icon: icon,
          gap: 8,
          padding: 2,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },
    
    "checkbox/icon": 
    {
      style: function(states)
      {
        return {
          width: 17,
          height: 17,
          decorator: states.disabled ? undefined :
                     states.invalid  ? "checkbox-invalid" : 
                     states.checked  ? undefined : 
                     states.hovered  ? "checkbox-hovered" : 
                                       "checkbox",
          cursor: states.disabled ? "default" : "pointer"
        }
      }
    },

    /*
    ---------------------------------------------------------------------------
      COLOR POPUP
    ---------------------------------------------------------------------------
    */

    "colorpopup":
    {
      alias: "popup",
      include: "popup",

      style: function(states)
      {
        return {
          padding: 5
          //~ backgroundColor: "background-application"
        };
      }
    },

    "colorpopup/field":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          margin: 2,
          width: 14,
          height: 14,
          backgroundColor: "background-light"
        };
      }
    },

    "colorpopup/selector-button": "button",
    "colorpopup/auto-button": "button",
    "colorpopup/preview-pane": "groupbox",

    "colorpopup/current-preview":
    {
      style: function(state)
      {
        return {
          height: 20,
          padding: 4,
          marginLeft: 4,
          decorator: "main",
          allowGrowX: true
        };
      }
    },

    "colorpopup/selected-preview":
    {
      style: function(state)
      {
        return {
          height: 20,
          padding: 4,
          marginRight: 4,
          decorator: "main",
          allowGrowX: true
        };
      }
    },

    "colorpopup/colorselector-okbutton":
    {
      alias: "button",
      include: "button",

      style: function(states)
      {
        return {
          icon: "decoration/form/check.png"
        };
      }
    },

    "colorpopup/colorselector-cancelbutton":
   {
      alias: "button",
      include: "button",

      style: function(states)
      {
        return {
          icon: "decoration/form/ban.png"
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      COLOR SELECTOR
    ---------------------------------------------------------------------------
    */

    "colorselector": "widget",
    "colorselector/control-bar": "widget",
    "colorselector/control-pane": "widget",
    "colorselector/visual-pane": "groupbox",
    "colorselector/preset-grid": "widget",

    "colorselector/colorbucket":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          width: 16,
          height: 16
        };
      }
    },

    "colorselector/preset-field-set": "groupbox",
    
    "colorselector/input-field-set": 
    {
      include: "groupbox",
      alias: "groupbox",
      style: function() {
        return {
          paddingTop: 20
        };
      }
    },

    "colorselector/preview-field-set": 
    {
      include: "groupbox",
      
      alias: "groupbox",
      style: function() {
        return {
          paddingTop: 20
        };
      }
    },


    "colorselector/hex-field-composite": "widget",
    "colorselector/hex-field": "textfield",

    "colorselector/rgb-spinner-composite": "widget",
    "colorselector/rgb-spinner-red": "spinner",
    "colorselector/rgb-spinner-green": "spinner",
    "colorselector/rgb-spinner-blue": "spinner",

    "colorselector/hsb-spinner-composite": "widget",
    "colorselector/hsb-spinner-hue": "spinner",
    "colorselector/hsb-spinner-saturation": "spinner",
    "colorselector/hsb-spinner-brightness": "spinner",

    "colorselector/preview-content-old":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          width: 50,
          height: 10
        };
      }
    },

    "colorselector/preview-content-new":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          backgroundColor: "background-light",
          width: 50,
          height: 10
        };
      }
    },


    "colorselector/hue-saturation-field":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          margin: 5
        };
      }
    },

    "colorselector/brightness-field":
    {
      style: function(states)
      {
        return {
          decorator: "main",
          margin: [5, 7]
        };
      }
    },

    "colorselector/hue-saturation-pane": "widget",
    
    "colorselector/hue-saturation-handle": 
    {
      style: function(states)
      {
        return {
          cursor: "pointer"
        }
      }
    },
    
    "colorselector/brightness-pane": "widget",
    
    "colorselector/brightness-handle": 
    {
      style: function(states)
      {
        return {
          cursor: "pointer"
        }
      }
    },

    /*
    ---------------------------------------------------------------------------
      COMBOBOX
    ---------------------------------------------------------------------------
    */

    "combobox" :
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        return {
          decorator: decorator,
          margin: 1
        };
      }
    },

    "combobox/popup": "popup",

    "combobox/list": {
      alias: "list"
    },

    "combobox/button":
    {
      include: "button",
      alias: "button",

      style: function(states, superStyles)
      {
        var icon = "decoration/arrows/down";
        
        if (states.focused || states.hovered || states.pressed) {
          icon += "-focused.png";
          superStyles.decorator = states.pressed ? "button-pressed" : "button-focused";
        } else {
          icon += ".png";
        }
        
        return {
          icon: icon,
          padding: [superStyles.padding[0] - 1, superStyles.padding[1] - 2],
          margin: 0
        };
      }
    },

    "combobox/textfield" :
    {
      include: "textfield",

      style: function(states)
      {
        return {
          decorator: undefined,
          padding: 1
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "atom": {},
    "atom/label": "label",
    "atom/icon": "image",

    "dragdrop-cursor":
    {
      style: function(states)
      {
        var icon = "nodrop";

        if (states.copy) {
          icon = "copy";
        } else if (states.move) {
          icon = "move";
        } else if (states.alias) {
          icon = "alias";
        }

        return {
          source: "decoration/cursors/" + icon + ".gif",
          position: "right-top",
          offset: [ 2, 16, 2, 6 ]
        };
      }
    },

    "image":
    {
      style: function(states)
      {
        return {
          opacity: !states.replacement && states.disabled ? 0.3 : 1
        };
      }
    },
    
    "label":
    {
      style: function(states)
      {
        return {
          textColor: states.disabled ? "text-disabled" : undefined
        };
      }
    },
    
    "move-frame":
    {
      style: function(states)
      {
        return {
          decorator: "main"
        };
      }
    },

    "popup":
    {
      style: function(states)
      {
        return {
          marginLeft: 2,
          decorator: states.disabled ? "popup-disabled" : "popup",
          textColor: "text-label"
        };
      }
    },

    "resize-frame": "move-frame",

    "root":
    {
      style: function(states)
      {
        return {
          decorator: "app-background",
          textColor: "text-label",
          font: "default"
        };
      }
    },

    "widget": {},

    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */

    "datechooser":
    {
      style : function(states)
      {
        return {
          padding: 0,
          decorator: "popup"
        };
      }
    },

    "datechooser/navigation-bar": {},

    "datechooser/nav-button" :
    {
      include : "button-frame",
      alias : "button-frame",

      style : function(states)
      {
        var result = {
          padding : [ 2, 4 ]
        };

        if (states.lastYear) {
          result.icon = "decoration/arrows/rewind";
          result.marginRight = 1;
        } else if (states.lastMonth) {
          result.icon = "decoration/arrows/left";
        } else if (states.nextYear) {
          result.icon = "decoration/arrows/forward";
          result.marginLeft = 1;
        } else if (states.nextMonth) {
          result.icon = "decoration/arrows/right";
        }
        
        if (states.hovered || states.pressed) {
		      result.icon += "-focused";
		    }
		
		    result.icon += ".png";

        return result;
      }
    },

    "datechooser/last-year-button-tooltip" : "tooltip",
    "datechooser/last-month-button-tooltip" : "tooltip",
    "datechooser/next-year-button-tooltip" : "tooltip",
    "datechooser/next-month-button-tooltip" : "tooltip",

    "datechooser/last-year-button" : "datechooser/nav-button",
    "datechooser/last-month-button" : "datechooser/nav-button",
    "datechooser/next-month-button" : "datechooser/nav-button",
    "datechooser/next-year-button" : "datechooser/nav-button",

    "datechooser/month-year-label":
    {
      style : function(states)
      {
        return {
          font: "bold",
          textAlign: "center",
          decorator: "button",
          textColor: states.disabled ? "text-disabled" : "text-highlight"
        };
      }
    },

    "datechooser/date-pane":
    {
      style : function(states)
      {
        return {
          textColor: states.disabled ? "text-disabled" : undefined,
          marginTop : 2
        };
      }
    },

    "datechooser/weekday" :
    {
      style : function(states)
      {
        return {
          textColor : states.disabled ? "text-disabled" : states.weekend ? "text-highlight" : undefined,
          textAlign: "center",
          paddingTop : 2,
          paddingRight: 5,
          decorator: "background-transparent"
        };
      }
    },

    "datechooser/week" :
    {
      style : function(states)
      {
        return {
          textAlign: "center",
          textColor: undefined,
          padding: [ 2, 8, 2, 4 ],
          decorator: "background-transparent"
        };
      }
    },

    "datechooser/day" :
    {
      style : function(states)
      {
        var decorator = states.disabled ? undefined : states.selected ? "selected" : undefined;

        return {
          textAlign: "center",
          decorator : decorator,
          textColor : states.disabled   ? "text-disabled" : 
                      states.selected   ? "text-selected" : 
                      states.otherMonth ? "text-gray" : 
                                          undefined,
          font      : states.today ? "bold" : undefined,
          padding   : [ 2, 4 ]
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      DATE FIELD
    ---------------------------------------------------------------------------
    */

    "datefield": "combobox",

    "datefield/button":
    {
      alias: "button",
      include: "button",

      style: function(states, superStyles)
      {
        if (states.focused) {
          superStyles.decorator = "button-focused";
        }
        
        return {
          icon: states.hovered || states.focused ? "decoration/form/calendar-focused.png" : 
                                                   "decoration/form/calendar.png",
          padding: [1, 3],
          margin: 0
        };
      }
    },

    "datefield/textfield": "combobox/textfield",

    "datefield/list":
    {
      alias: "datechooser",
      include: "datechooser",

      style: function(states)
      {
        return {
          decorator: undefined
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      FORM RENDERER
    ---------------------------------------------------------------------------
    */

    "form-renderer-label": 
    {
      include: "label",
      
      style: function() 
      {
        return {
          paddingTop: 4
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      GROUP BOX
    ---------------------------------------------------------------------------
    */

    "groupbox":
    {
      style: function(states)
      {
        return {
          legendPosition: "top"
        };
      }
    },

    "groupbox/legend":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          padding: [1, 0, 0, 10],
          textColor: states.invalid ? "invalid" : "text-selected",
          font: "bold"
        };
      }
    },

    "groupbox/frame":
    {
      style: function(states)
      {
        return {
          padding: 10,
          margin: 5,
          decorator: "group"
        };
      }
    },

    "check-groupbox": "groupbox",

    "check-groupbox/legend":
    {
      alias: "checkbox",
      include: "checkbox",

      style: function(states)
      {
        return {
          padding: [1, 0, 0, 10],
          textColor: states.invalid ? "invalid" : "text-hovered",
          font: "bold"
        };
      }
    },

    "radio-groupbox": "groupbox",

    "radio-groupbox/legend":
    {
      alias: "radiobutton",
      include: "radiobutton",

      style: function(states)
      {
        return {
          padding: [1, 0, 0, 10],
          textColor: states.invalid ? "invalid" : "text-hovered",
          font: "bold"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      HTMLAREA
    ---------------------------------------------------------------------------
    */

    "htmlarea":
    {
      include: "widget",

      style: function(states)
      {
        return {
          backgroundColor: "background-htmlarea",
          opacity: 0.5
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      IFRAME
    ---------------------------------------------------------------------------
    */

    "iframe":
    {
      style: function(states)
      {
        return {
          decorator: "input"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      LIST
    ---------------------------------------------------------------------------
    */

    "list":
    {
      alias: "scrollarea",

      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        return {
          decorator: decorator
        };
      }
    },

    "list/pane": "widget",

    "listitem":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          padding: states.dragover ? [4, 4, 2, 6] : [4, 4, 4, 6],
          textColor: states.selected ? "text-highlight" : undefined,
          decorator: states.selected ? "selected" : undefined,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

   "menu":
    {
      style: function(states)
      {
        var result =
        {
          decorator: "menu",
          spacingX: 6,
          spacingY: 1,
          iconColumnWidth: 16,
          arrowColumnWidth: 4,
          placementModeY: states.submenu || states.contextmenu ? "best-fit" : "keep-align"
        };

        if (states.submenu)
        {
          result.position = "right-top";
          result.offset = [-2, -3];
        }

        return result;
      }
    },

    "menu/slidebar": "menu-slidebar",

    "menu-slidebar": "widget",

    "menu-slidebar-button":
    {
      style: function(states)
      {
        return {
          decorator: states.hovered  ? "selected" : undefined,
          padding: 7,
          center: true
        };
      }
    },

    "menu-slidebar/button-backward":
    {
      include: "menu-slidebar-button",

      style: function(states)
      {
        return {
          icon: states.hovered ? "decoration/arrows/up-focused.png" : "decoration/arrows/up.png"
        };
      }
    },

    "menu-slidebar/button-forward":
    {
      include: "menu-slidebar-button",

      style: function(states)
      {
        return {
          icon: states.hovered ? "decoration/arrows/down-focused.png" : "decoration/arrows/down.png"
        };
      }
    },

    "menu-separator":
    {
      style: function(states)
      {
        return {
          height: 0,
          decorator: "menu-separator",
          margin: [ 4, 2 ]
        };
      }
    },

    "menu-button":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          decorator: states.selected ? "selected" : undefined,
          textColor: states.selected ? "text-highlight" : undefined,
          padding: [ 4, 6 ]
        };
      }
    },

    "menu-button/icon":
    {
      include: "image",

      style: function(states)
      {
        return {
          alignY: "middle"
        };
      }
    },

    "menu-button/label":
    {
      include: "label",

      style: function(states)
      {
        return {
          alignY: "middle",
          padding: 1
        };
      }
    },

    "menu-button/shortcut":
    {
      include: "label",

      style: function(states)
      {
        return {
          alignY: "middle",
          marginLeft: 14,
          padding: 1
        };
      }
    },

    "menu-button/arrow":
    {
      include: "image",

      style: function(states)
      {
        return {
          source: states.selected ? "decoration/arrows/right-focused.png" : "decoration/arrows/right.png",
          alignY: "middle",
          marginLeft: 5
        };
      }
    },

    "menu-checkbox":
    {
      alias: "menu-button",
      include: "menu-button",

      style: function(states)
      {
        return {
          icon: !states.checked ? undefined : states.selected ? "decoration/menu/checkbox-selected.gif" : "decoration/menu/checkbox.gif"
        };
      }
    },

    "menu-radiobutton":
    {
      alias: "menu-button",
      include: "menu-button",

      style: function(states)
      {
        return {
          icon: !states.checked ? undefined : states.selected ? "decoration/menu/radiobutton-selected.gif" : "decoration/menu/radiobutton.gif"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */

    "menubar":
    {
      style: function(states)
      {
        return {
          decorator: "menubar"
        };
      }
    },

    "menubar-button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator = (states.pressed || states.hovered) && !states.disabled ? "menubar-button-hovered" : undefined;

        return {
          decorator: decorator,
          textColor: states.pressed || states.hovered ? "text-selected" : undefined,
          padding: [ 3, 8 ]
        };
      }
    },


    /*
    ---------------------------------------------------------------------------
      PROGRESSIVE
    ---------------------------------------------------------------------------
    */

    "progressive-table-header":
    {
      alias: "widget",

      style: function(states)
      {
        return {
          decorator: "progressive-table-header"
        };
      }
    },

    "progressive-table-header-cell":
    {
      alias: "atom",
      style: function(states)
      {
        return {
          minWidth: 40,
          minHeight: 25,
          paddingLeft: 6,
          decorator: "progressive-table-header-cell"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */
    
    "progressbar":
    {
      style: function(states)
      {
        return {
          decorator: states.disabled ? "progressbar-disabled" : "progressbar",
          width: 200,
          height: 14
        };
      }
    },

    "progressbar/progress":
    {
      style: function(states)
      {
        return {
          decorator: states.disabled ? "progressbar-progress-disabled" : "scrollbar-slider-horizontal"
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    "radiobutton":
    {
      alias: "atom",

      style: function(states)
      {
        var icon = states.checked ? "decoration/radiobutton/checked" : "decoration/radiobutton/unchecked";
        
        if (states.disabled) {
          icon += "-disabled";
        } else {
          if (states.hovered || states.focused) {
            icon += "-hovered";
          }
        
          if (states.invalid) {
            icon += "-invalid";
          }
        }
        
        icon += ".png";
        
        return {
          icon: icon,
          gap: 8,
          padding: 2,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    "radiobutton/icon": 
    {
      style: function(states)
      {
        return {
          width: 17,
          height: 17,
          decorator: states.disabled ? undefined : 
                     states.invalid  ? "radiobutton-invalid" : 
                     states.checked  ? undefined : 
                     states.hovered  ? "radiobutton-hovered" : 
                                       "radiobutton",
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      RESIZER
    ---------------------------------------------------------------------------
    */

    "resizer":
    {
      style: function(states)
      {
        return {
          decorator: "pane"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SCROLL AREA
    ---------------------------------------------------------------------------
    */

    "scrollarea":
    {
      style: function(states)
      {
        return {
          // Since the scroll container disregards the min size of the scrollbars
          // we have to set the min size of the scroll area to ensure that the
          // scrollbars always have a usable size.
          minWidth: 50,
          minHeight: 50
        };
      }
    },

    "scrollarea/corner":
    {
      style: function(states)
      {
        return {
          backgroundColor: "background-pane"
        };
      }
    },

    "scrollarea/pane": "widget",
    "scrollarea/scrollbar-x": "scrollbar",
    "scrollarea/scrollbar-y": "scrollbar",

    /*
    ---------------------------------------------------------------------------
      SCROLL BAR
    ---------------------------------------------------------------------------
    */

    "scrollbar":
    {
      style: function(states)
      {
        if (states["native"]) {
          return {};
        }
        
        var decorator = states.horizontal ? "scrollbar-horizontal" : "scrollbar-vertical";
        
        if (states.disabled) {
          decorator += "-disabled";
        }

        return {
          width: states.horizontal ? undefined : 12,
          height: states.horizontal ? 12 : undefined,
          decorator: decorator,
          padding: 0,
          margin: 0
        };
      }
    },

    "scrollbar/slider":
    {
      alias: "slider",

      style: function(states)
      {
        return {
          padding: states.horizontal ? [0, 1, 0, 1] : [1, 0, 1, 0],
          zIndex: 0
        };
      }
    },

    "scrollbar/slider/knob":
    {
      include: "button-frame",

      style: function(states)
      {

        var decorator = states.horizontal ? "scrollbar-slider-horizontal" :
                                            "scrollbar-slider-vertical";
        if (states.disabled) {
          decorator += "-disabled";
        }
        
        if (states.pressed) {
          decorator += "-pressed";
        } else if (states.hovered) {
          decorator += "-hovered";
        }

        return {
          decorator: decorator,
          minHeight: states.horizontal ? undefined : 12,
          minWidth: states.horizontal ? 12 : undefined,
          padding: undefined,
          margin: [0],
          opacity: states.disabled ? 0.9 : 1.0
        };
      }
    },

    "scrollbar/button":
    {
      style: function(states)
      {
        var icon = "decoration/scrollbar/scrollbar-";
        var decorator = "scrollbar-bg-button-";
        var margin = 0;
        
        
        if (states.left) {
          icon += "left";
          decorator += "left";
        } else if (states.right) {
          icon += "right";
          decorator += "right";
        } else if (states.up) {
          icon += "up";
          decorator += "up";
        } else {
          icon += "down";
          decorator += "down";
        }
        
        if (states.hovered) {
          icon += "-hovered";
          decorator += "-hovered";
        } else if (states.pressed) {
		      icon += "-hovered";
		      decorator += "-pressed";
		    }
        
        icon += ".png";

        if (states.left || states.right)
        {
          return {
            padding: states.left ? [3, 5, 3, 4] : [3, 0, 3, 14],
            icon: icon,
            decorator: decorator,
            margin: states.left ? [0, -7, 0, 0] : [0, 0, 0, -7],
            minWidth: 23,
            cursor: states.hovered ? "pointer" : "default"
          };
        }
        else
        {
          return {
            padding: states.up ? [0, 0, 7, 3] : [8, 0, 0, 3],
            icon: icon,
            decorator: decorator,
            margin: states.up ? [0, 0, -7 ,0] : [-9, 0, 0, 0],
            minHeight: 23,
            cursor: states.hovered ? "pointer" : "default"
          };
        }
      }
    },

    "scrollbar/button-begin": "scrollbar/button",
    "scrollbar/button-end": "scrollbar/button",

    /*
    ---------------------------------------------------------------------------
      SELECTBOX
    ---------------------------------------------------------------------------
    */

    "selectbox": "button-frame",
    "selectbox/atom": "atom",
    "selectbox/popup": "popup",

    "selectbox/list": {
      alias: "list"
    },

    "selectbox/arrow":
    {
      include: "image",

      style: function(states)
      {
        return {
          source: (states.hovered || states.focused) ? "decoration/arrows/down-focused.png" : "decoration/arrows/down.png",
          paddingLeft: 5
        };
      }
    },


    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */

    "slider":
    {
      style: function(states)
      {
        return {
          decorator: states.horizontal ? "slider-horizontal" : "slider-vertical"
        };
      }
    },

    "slider/knob":
    {
      style: function(states)
      {
        return {
          decorator: states.disabled ? "scrollbar-slider-horizontal-disabled" :
                     states.hovered ?  "slider-knob-hovered" :
                                       "slider-knob",
          maxHeight: 16,
          maxWidth: 16,
          margin: 2,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDE BAR
    ---------------------------------------------------------------------------
    */

    "slidebar": {},
    "slidebar/scrollpane": {},
    "slidebar/content": {},

    "slidebar/button-forward":
    {
      alias: "button-frame",
      include: "button-frame",

      style: function(states)
      {
        var decorator = "slidebar-button";
        var icon = states.vertical ? "decoration/arrows/down" : "decoration/arrows/right"
        
        switch (true)
        {
          case states.pressed:
            decorator += "-pressed";
            icon += "-focused.png";
            break;
            
          case states.hovered:
            decorator += "-hovered";
            icon += "-focused.png";
            break;
            
          default:
            icon += ".png";
        }
            
        return {
          decorator: decorator,
          padding: 5,
          center: true,
          icon: icon
        };
      }
    },

    "slidebar/button-backward":
    {
      alias: "button-frame",
      include: "button-frame",

      style: function(states)
      {
        var decorator = "slidebar-button";
        var icon = states.vertical ? "decoration/arrows/up" : "decoration/arrows/left"
        
        switch (true)
        {
          case states.pressed:
            decorator += "-pressed";
            icon += "-focused.png";
            break;
            
          case states.hovered:
            decorator += "-hovered";
            icon += "-focused.png";
            break;
            
          default:
            icon += ".png";
        }
            
        return {
          decorator: decorator,
          padding: 5,
          center: true,
          icon: icon
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPINNER
    ---------------------------------------------------------------------------
    */

    "spinner":
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        return {
          decorator: decorator
        };
      }
    },

    "spinner/textfield":
    {
      style: function(states)
      {
        return {
          marginRight: 2,
          padding: [1, 4, 2],
          textColor: states.disabled ? "text-disabled" : "text-active"
        };
      }
    },

    "spinner/upbutton":
    {
      alias: "button-frame",
      include: "button-frame",

      style: function(states)
      {
        var icon = "decoration/arrows/up-small";
        
        if (states.focused || states.hovered) {
          icon += "-focused.png";
        } else {
          icon += ".png";
        }
        
        return {
          icon: icon,
          padding: [1, 3],
          width: 13,
          
          margin: 0
        };
      }
    },

    "spinner/downbutton":
    {
      alias: "button-frame",
      include: "button-frame",

      style: function(states)
      {
        var icon = "decoration/arrows/down-small";
        
        if (states.focused || states.hovered) {
          icon += "-focused.png";
        } else {
          icon += ".png";
        }
        
        return {
          icon: icon,
          padding: [1, 3],
          width: 13,
          margin: 0
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE
    ---------------------------------------------------------------------------
    */

    "splitpane":
    {
      style: function(states)
      {
        return {
          decorator: "splitpane"
        };
      }
    },

    "splitpane/splitter":
    {
      style: function(states)
      {
        return {
          width: states.horizontal ? 3 : undefined,
          height: states.vertical ? 3 : undefined,
          backgroundColor: "background-splitpane"
        };
      }
    },

    "splitpane/splitter/knob":
    {
      style: function(states)
      {
        return {
          decorator: states.horizontal ? "splitter-knob-horizontal" : "splitter-knob-vertical",
          width: states.horizontal ? 8 : 20,
          height: states.horizontal ? 20 : 8
        };
      }
    },

    "splitpane/slider":
    {
      style: function(states)
      {
        return {
          width: states.horizontal ? 3 : undefined,
          height: states.vertical ? 3 : undefined,
          backgroundColor: "background-splitpane-slider"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table":
    {
      alias: "widget",

      style: function(states)
      {
        return {
          decorator: "table"
        };
      }
    },
    
    "table/cell" :
    {
      style : function(states)
      {
        return {
          padding   : [ 20 ],
          textColor: "text-active"
        };
      }
    },

    "table/statusbar" :
    {
      style : function(states)
      {
        return {
          decorator : "table-statusbar",
          padding   : [ 2 ],
          textColor: "text-active"
        };
      }
    },

    "table/column-button":
    {
      alias: "button-frame",

      style: function(states)
      {
        return {
          decorator: states.hovered ? "table-scroller-header-hovered" : "table-scroller-header",
          padding: 3,
          icon: states.hovered || states.pressed ? "decoration/table/select-column-order-focused.png" : 
                                                   "decoration/table/select-column-order.png",
          cursor: "pointer"
        };
      }
    },

    "table-column-reset-button":
    {
      include: "menu-button",
      alias: "menu-button",

      style: function()
      {
        return {
          icon: "icon/16/actions/view-refresh.png"
        };
      }
    },

    "table-scroller": "widget",

    "table-scroller/scrollbar-x": "scrollbar",
    "table-scroller/scrollbar-y": "scrollbar",

    "table-scroller/header":
    {
      style: function(states)
      {
        return {
          decorator: "table-scroller-header",
          textColor: states.disabled ? "text-disabled" : undefined
        };
      }
    },

    "table-scroller/pane" :
    {
      style : function(states)
      {
        return {
          backgroundColor : "transparent",
          decorator: "table-pane"
        };
      }
    },

    "table-scroller/focus-indicator":
    {
      style: function(states)
      {
        return {
          decorator: "table-scroller-focus-indicator"
        };
      }
    },

    "table-scroller/resize-line" :
    {
      style: function(states)
      {
        return {
          backgroundColor: "border-separator",
          width: 2
        };
      }
    },

    "table-header-cell":
    {
      alias: "atom",
      
      style: function(states)
      {
        return {
          minWidth: 13,
          minHeight: 22,
          padding: [ 1, 8, 3 ],
          decorator: states.hovered ? "table-header-cell-hovered" : "table-header-cell",
          textColor: states.hovered ? "text-selected" : "text-label",
          cursor: "pointer",
          sortIcon: states.sorted ?
              (states.sortedAscending ? 
                 states.hovered ? "decoration/table/ascending-focused.png" : 
                                  "decoration/table/ascending.png" : 
                 states.hovered ? "decoration/table/descending-focused.png" : 
                                  "decoration/table/descending.png")
              : undefined
        };
      }
    },

    "table-header-cell/label":
    {
      style: function(states)
      {
        return {
          minWidth: 0,
          alignY: "middle"
        };
      }
    },

    "table-header-cell/sort-icon":
    {
      style: function(states)
      {
        return {
          alignY: "middle",
          alignX: "right",
          opacity: states.disabled ? 0.3 : 1
        };
      }
    },

    "table-header-cell/icon":
    {
      style: function(states)
      {
        return {
          minWidth: 0,
          alignY: "middle",
          paddingRight: 5,
          opacity: states.disabled ? 0.3 : 1
        };
      }
    },

    "table-editor-textfield":
    {
      include: "textfield",

      style: function(states)
      {
        return {
          decorator: undefined,
          padding: [ 2, 2 ],
          backgroundColor: "background-light"
        };
      }
    },

    "table-editor-selectbox":
    {
      include: "selectbox",
      alias: "selectbox",

      style: function(states)
      {
        return {
          padding: [ 0, 2 ],
          backgroundColor: "background-light"
        };
      }
    },

    "table-editor-combobox":
    {
      include: "combobox",
      alias: "combobox",

      style: function(states)
      {
        return {
          decorator: undefined,
          backgroundColor: "background-light"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */

    "tabview":
    {
      style: function(states)
      {
        return {
          contentPadding: 0
        };
      }
    },

    "tabview/bar":
    {
      alias: "slidebar",

      style: function(states)
      {
        return {
          padding: states.barTop || states.barBottom ? [0, 5] : [5, 0]
        };
      }
    },

    "tabview/bar/button-forward":
    {
      include: "slidebar/button-forward",
      alias: "slidebar/button-forward",
      

      style: function(states)
      {
        return {
          margin: 0
        }
      }
    },

    "tabview/bar/button-backward":
    {
      include: "slidebar/button-backward",
      alias: "slidebar/button-backward",
      

      style: function(states)
      {
        return {
          margin: 0
        }
      }
    },

    "tabview/bar/scrollpane": {},

    "tabview/pane":
    {
      style: function(states)
      {
        return {
          decorator: states.disabled ? "tabview-pane-disabled" : "tabview-pane",
          marginBottom: states.barBottom ? -1 : 0,
          marginTop: states.barTop ? -1 : 0,
          marginLeft: states.barLeft ? -1 : 0,
          marginRight: states.barRight ? -1 : 0
        };
      }
    },

    "tabview-page": 
    {
      alias: "widget",
      include: "widget",

      style: function(states)
      {
        return {
          padding: [6, 5]
        };
      }
    },

    "tabview-page/button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator = "tabview-page-button";
        
        switch (true) 
        {
          case states.checked:
            if (states.disabled) {
              decorator += "-disabled";
            } else {
              decorator += "-active";
            }
            break;
            
          case states.hovered:
            decorator += "-hovered";
            break;
            
          default:
            decorator += "-inactive";
        }
          
        return {
          zIndex: states.checked ? 10 : 5,
          decorator: decorator,
          padding: [4, 7],
          marginTop: 0,
          marginBottom: states.barTop || states.barBottom ? 0 : -1,
          marginLeft: 0,
          marginRight: states.barTop || states.barBottom ? -1 : 0,
          font: "bold",
          textColor: states.disabled ? "text-disabled" :
                     states.checked ? "text-highlight" : 
                     states.hovered ? "text-selected" : "text-label",
          cursor: states.checked ? "default" : "pointer"
        };
      }
    },

    "tabview-page/button/label":
    {
      alias: "label",

      style: function(states)
      {
        return {
          padding: states.focused ? [0, 1, 0, 1] : [1, 2, 1, 2],
          decorator: states.focused ? "keyboard-focus" : undefined
        };
      }
    },

    "tabview-page/button/close-button":
    {
      style: function(states)
      {
        return {
          decorator: states.hovered ? "tabview-close-button-hovered" : "tabview-close-button",
          minWidth: 11,
          minHeight: 11,
          maxWidth: 11,
          maxHeight: 11,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TEXT AREA
    ---------------------------------------------------------------------------
    */

    "textarea":
    {
      include: "textfield",

      style: function(states)
      {
        return {
          padding: 4
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "textfield":
    {
      style: function(states)
      {
        var decorator;

        var focused = !!states.focused;
        var invalid = !!states.invalid;
        var disabled = !!states.disabled;
        var hovered = !!states.hovered;

        if (focused && invalid && !disabled) {
          decorator = "input-focused-invalid";
        } else if (focused && !invalid && !disabled) {
          decorator = "input-focused";
        } else if (disabled) {
          decorator = "input-disabled";
        } else if (!focused && invalid && !disabled) {
          decorator = "input-invalid";
        } else {
          decorator = "input";
        }

        var textColor;
        if (states.disabled) {
          textColor = "text-disabled";
        } else if (states.showingPlaceholder) {
          textColor = "text-placeholder";
        } else {
          textColor = "text-label";
        }

        return {
          decorator: decorator,
          padding: [ 2, 4 ],
          margin: 2,
          textColor: textColor
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOL BAR
    ---------------------------------------------------------------------------
    */

    "toolbar":
    {
      style: function(states)
      {
        return {
          decorator: "toolbar",
          margin: 0,
          spacing: 2,
          textColor: "text-active"
        };
      }
    },

    "toolbar/part":
    {
      style: function(states)
      {
        return {
          decorator: "toolbar-part",
          spacing: 5,
          marginRight: -2
        };
      }
    },

    "toolbar/part/container":
    {
      style: function(states)
      {
        return {
          padding: 0
        };
      }
    },

    "toolbar/part/handle":
    {
      style: function(states)
      {
        return {
          source: "decoration/toolbar/toolbar-handle-knob.png",
          marginLeft: 3,
          marginRight: 3
        };
      }
    },

    "toolbar-button":
    {
      alias: "atom",

      style: function(states)
      {
        var decorator = "toolbar-button";
        
        if (states.pressed || (states.checked && states.hovered)) {
          decorator = "button-checked-hovered";
        } else if (states.checked && !states.hovered && !states.disabled) {
          decorator = "button-checked";
        } else if (states.checked && states.disabled) {
          decorator = "button-checked-disabled";
        } else if (states.hovered && !states.disabled) {
          decorator = "button-hovered";
        }

        return {
          margin: [1, 2],
          padding: states.pressed || states.checked ? [4, 6, 2, 6] : [3, 6],
          decorator: decorator,
          textColor: states.hovered && !states.disabled ? "text-hovered" : undefined,
          cursor: states.disabled ? "default" : "pointer"
        };
      }
    },

    "toolbar-menubutton":
    {
      alias: "toolbar-button",
      include: "toolbar-button",

      style: function(states)
      {
        return {
          showArrow: true
        };
      }
    },

    "toolbar-menubutton/arrow":
    {
      alias: "image",
      include: "image",

      style: function(states)
      {
        return {
          source: states.selected || states.focused || states.hovered ? "decoration/arrows/down-small-selected.png" : "decoration/arrows/down-small.png"
        };
      }
    },

    "toolbar-splitbutton":
    {
      style: function(states)
      {
        return {
          marginTop: 3,
          marginBottom: 3
        };
      }
    },

    "toolbar-splitbutton/button":
    {
      alias: "toolbar-button",
      include: "toolbar-button",

      style: function(states)
      {
        return {
          marginTop: undefined,
          marginBottom: undefined,
          marginRight: 0
        };
      }
    },

    "toolbar-splitbutton/arrow":
    {
      alias: "toolbar-button",
      include: "toolbar-button",

      style: function(states)
      {
        if (states.pressed || states.checked) {
          var padding = [4, 3, 2, 3];
        } else {
          var padding = 3;
        }

        return {
          padding: padding,
          icon: states.hovered || states.focused ? "decoration/arrows/down-focused.png" : "decoration/arrows/down.png",
          marginTop: undefined,
          marginBottom: undefined,
          marginLeft: 0
        };
      }
    },

    "toolbar-separator":
    {
      style: function(states)
      {
        return {
          decorator: "toolbar-separator",
          margin: 7
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip":
    {
      include: "popup",

      style: function(states)
      {
        return {
          padding: [ 1, 4, 2, 4 ],
          offset: [ 15, 5, 5, 5 ]
        };
      }
    },

    "tooltip/atom": "atom",

    "tooltip-error": 
    {
      style: function(states)
      {
        return {
          placeMethod: "widget",
          offset: [-3, 1, 0, 0],
          arrowPosition: states.placementLeft ? "left" : "right",
          position: "right-top",
          showTimeout: 100,
          hideTimeout: 10000,
          padding: [0, 4, 4, 0]
        };
      }
    },

    "tooltip-error/arrow": 
    {
      include: "image",

      style: function(states)
      {
        var source = states.placementLeft ?
          "decoration/form/tooltip-error-arrow-right.png" : "decoration/form/tooltip-error-arrow-left.png";
        return {
          source: source,
          padding: [6, 0, 0, 0],
          zIndex: 10000001
        };
      }
    },

    "tooltip-error/atom":
    {
      include: "popup",

      style: function(states)
      {
        return {
          textColor: "text-selected",
          backgroundColor: undefined,
          decorator: "tooltip-error",
          font: "bold",
          padding: [3, 4, 4, 4],
          margin: [1, 0, 0, 0],
          maxWidth: 333
        };
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TREE
    ---------------------------------------------------------------------------
    */

    "tree": "list",

    "tree-item":
    {
      style: function(states)
      {
        var decorator = states.selected ? "selected" : undefined;

        return {
          padding: [ 2, 6 ],
          textColor: states.selected ? "text-highlight" : undefined,
          decorator: decorator
        };
      }
    },

    "tree-item/icon":
    {
      include: "image",

      style: function(states)
      {
        return {
          paddingRight: 5
        };
      }
    },

    "tree-item/label": "label",

    "tree-item/open":
    {
      include: "image",

      style: function(states)
      {
        var icon;
        
        if (states.selected && states.opened) {
          icon = "decoration/arrows/down-focused.png";
        } else if (states.selected && !states.opened) {
          icon = "decoration/arrows/right-focused.png";
        } else if (states.opened) {
          icon = "decoration/arrows/down.png";
        } else {
          icon = "decoration/arrows/right.png";
        }

        return {
          padding: [0, 5, 0, 2],
          source: icon
        };
      }
    },

    "tree-folder":
    {
      include: "tree-item",
      alias: "tree-item",

      style: function(states)
      {
        var icon, iconOpened;
        
        if (states.small) {
          icon = states.opened ? "decoration/tree/16/folder-open" : "decoration/tree/16/folder";
          iconOpened = "decoration/tree/16/folder-open";
        } else if (states.large) {
          icon = states.opened ? "decoration/tree/32/folder-open" : "decoration/tree/32/folder";
          iconOpened = "decoration/tree/32/folder-open";
        } else {
          icon = states.opened ? "decoration/tree/22/folder-open" : "decoration/tree/22/folder";
          iconOpened = "decoration/tree/22/folder-open";
        }
        
        icon += states.selected ? "-focused.png" : ".png";

        return {
          icon: icon,
          iconOpened: iconOpened,
          cursor: "pointer"
        };
      }
    },

    "tree-file":
    {
      include: "tree-item",
      alias: "tree-item",

      style: function(states)
      {
        var icon = states.small ? "decoration/tree/16/file" :
                   states.large ? "decoration/tree/32/file" :
                                  "decoration/tree/22/file";
                                  
        icon += states.selected ? "-focused.png" : ".png";
        
        return {
          icon: icon
        };
      }
    },


    /*
    ---------------------------------------------------------------------------
      TREE VIRTUAL
    ---------------------------------------------------------------------------
    */

    "treevirtual": "table",

    "treevirtual-folder":
    {
      style: function(states)
      {
        var icon = states.opened ? "decoration/treevirtual/folder-open.png" : 
                                   "decoration/treevirtual/folder.png";
        return {
          icon: icon
        };
      }
    },

    "treevirtual-file":
    {
      include: "treevirtual-folder",
      alias: "treevirtual-folder",

      style: function(states)
      {
        return {
          icon: "decoration/treevirtual/file.png"
        };
      }
    },

    "treevirtual-line":
    {
      style: function(states)
      {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    "treevirtual-contract":
    {
      style: function(states)
      {
        return {
          icon: "decoration/arrows/down.png",
          paddingLeft: 5,
          paddingTop: 7
        };
      }
    },

    "treevirtual-expand":
    {
      style: function(states)
      {
        return {
          icon: "decoration/arrows/right.png",
          paddingLeft: 5,
          paddingTop: 5
        };
      }
    },

    "treevirtual-only-contract": "treevirtual-contract",
    "treevirtual-only-expand": "treevirtual-expand",
    "treevirtual-start-contract": "treevirtual-contract",
    "treevirtual-start-expand": "treevirtual-expand",
    "treevirtual-end-contract": "treevirtual-contract",
    "treevirtual-end-expand": "treevirtual-expand",
    "treevirtual-cross-contract": "treevirtual-contract",
    "treevirtual-cross-expand": "treevirtual-expand",

    "treevirtual-end":
    {
      style: function(states)
      {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    "treevirtual-cross":
    {
      style: function(states)
      {
        return {
          icon: "qx/static/blank.gif"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */

    "virtual-list": "list",
    "virtual-list/row-layer": "row-layer",

    "row-layer": "widget",

    "group-item":
    {
      include: "label",
      alias: "label",

      style: function(states)
      {
        return {
          padding: [2, 4],
          decorator: states.disabled ? "group-item-disabled" : "group-item",
          textColor: states.disabled ? "text-gray" : "text-active",
          font: "bold"
        };
      }
    },

    "virtual-selectbox": "selectbox",
    "virtual-selectbox/dropdown": "popup",
    "virtual-selectbox/dropdown/list": {
      alias: "virtual-list"
    },

    "virtual-combobox": "combobox",
    "virtual-combobox/dropdown": "popup",
    "virtual-combobox/dropdown/list": {
      alias: "virtual-list"
    },

    "virtual-tree":
    {
      include: "tree",
      alias: "tree",

      style: function(states)
      {
        return {
          itemHeight: 26
        };
      }
    },

    "virtual-tree-folder": "tree-folder",
    "virtual-tree-file": "tree-file",

    "column-layer": "widget",

    "cell":
    {
      style: function(states)
      {
        return {
          textColor: states.selected ? "text-selected" : "text-label",
          padding: [3, 6],
          font: "default"
        };
      }
    },

    "cell-string": "cell",
    
    "cell-number":
    {
      include: "cell",
      style: function(states)
      {
        return {
          textAlign: "right"
        };
      }
    },
    
    "cell-image": "cell",
    
    "cell-boolean":
    {
      include: "cell",
      
      style: function(states)
      {
        return {
          iconTrue: "decoration/table/boolean-true.png",
          iconFalse: "decoration/table/boolean-false.png"
        };
      }
    },
    
    "cell-atom": "cell",
    "cell-date": "cell",
    "cell-html": "cell",

    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "window":
    {
      style: function(states)
      {
        var decorator;
        
        if (states.active) {
          decorator = states.showStatusbar ? "window-incl-statusbar-active" : "window-active";
        } else {
          decorator = states.showStatusbar ? "window-incl-statusbar-inactive" : "window-inactive";
        }
        return {
          decorator: decorator,
          contentPadding: 5,
          margin: states.maximized ? 0 : [0, 5, 5, 0]
        };
      }
    },

    "window-resize-frame":
    {
      style: function(states)
      {
        return {
          decorator: states.showStatusbar ?
            "window-resize-frame-incl-statusbar" : "window-resize-frame"
        };
      }
    },

    "window/pane":
    {
      style: function(states)
      {
        var decorator = states.active ? "window-pane-active" : "window-pane-inactive";
        
        if (states.showStatusbar) {
          decorator += "-incl-statusbar";
        }
        
        return {
          decorator: decorator,
          opacity: states.active ? 1.0 : 0.9
        };
      }
    },

    "window/captionbar":
    {
      style: function(states)
      {
        return {
          decorator: states.active && !states.disabled ? "window-captionbar-active" : "window-captionbar-inactive",
          textColor: states.active && !states.disabled ? "text-highlight" : "text-gray",
          minHeight: 30,
          paddingRight: 2
        };
      }
    },

    "window/icon":
    {
      style: function(states)
      {
        return {
          alignY: "middle",
          margin: [ 0, 5]
        };
      }
    },

    "window/title":
    {
      style: function(states)
      {
        return {
          alignY: "middle",
          font: "bold",
          marginLeft: 6,
          marginRight: 12
        };
      }
    },
    
    "window-button":
    {
      alias: "atom",

      style: function(states)
      {
        return {
          margin: [8, 3],
          paddingLeft: 1,
          width: 17,
          height: 17,
          cursor: states.hovered ? "pointer" : states.active ? "default" : "default"
        };
      }
    },

    "window/minimize-button":
    {
      include: "window-button",

      style: function(states)
      {
        return {
          icon: states.hovered || states.pressed ? "decoration/window/minimize-hovered.png" : "decoration/window/button.png"
        };
      }
    },
    
    "window/restore-button":
    {
      include: "window-button",

      style: function(states)
      {
        return {
          icon: states.hovered || states.pressed ? "decoration/window/restore-hovered.png" : "decoration/window/button.png"
        };
      }
    },

    "window/maximize-button":
    {
      include: "window-button",

      style: function(states)
      {
        return {
          icon: states.hovered || states.pressed ? "decoration/window/maximize-hovered.png" : "decoration/window/button.png"
        };
      }
    },

    "window/close-button":
    {
      include: "window-button",

      style: function(states)
      {
        return {
          margin: [8, 5, 8, 3],
          icon: states.hovered || states.pressed ? "decoration/window/close-hovered.png" : "decoration/window/button.png"
        };
      }
    },

    "window/statusbar":
    {
      style: function(states)
      {
        return {
          padding: [ 2, 6 ],
          decorator: states.active ? "window-statusbar-active" : "window-statusbar-inactive",
          minHeight: 18,
          textColor: "text-statusbar"
        };
      }
    },

    "window/statusbar-text":
    {
      style: function(states)
      {
        return {
          font: "small"
        };
      }
    }
    
  }
});
