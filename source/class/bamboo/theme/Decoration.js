/* ************************************************************************

   Copyright:
     2015 Norbert Schröder

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     Norbert Schröder (scro34)

************************************************************************ */

qx.Theme.define("bamboo.theme.Decoration",
{
  aliases: {
    decoration: "bamboo/decoration"
  },

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      APPLICATION
    ---------------------------------------------------------------------------
    */

    "app-header":
    {
      style: {
        startColor: "app-header-start",
        endColor: "app-header-end",
        startColorPosition: 20,
        endColorPosition: 80,
        backgroundImage: "decoration/application/app-header.jpg"
      }
    },
    
    "app-logo":
    {
      include: "button",
      
      style: {
        radius: 45,
        shadowLength: 0,
        shadowBlurRadius: 10,
        shadowColor: "shadow"
      }
    },
    
    "app-background":
    {
      style: {
        backgroundImage: "decoration/application/app-background.jpg"
      }
        
    },
    
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
    
    "button":
    {
      style: {
        width: 1,
        color: "border-button",
        innerWidth: 1,
        innerColorTop: "border-button-inner",
        shadowColor: "shadow",
        shadowBlurRadius: 3,
        shadowLength: 0,
        radius: 3,
        backgroundImage: "decoration/button/button.png",
        backgroundRepeat: "scale"
      }
    },
    
    "button-disabled":
    {
      include: "button",
      
      style: {
        color: "border-button-disabled",
        innerColorTop: "transparent",
        shadowBlurRadius: 0
      }
    },

    "button-hovered":
    {
      include: "button",
      
      style: {
        shadowColor: "shadow-window",
        backgroundImage: "decoration/button/button-hovered.png"
      }
    },

    "button-pressed":
    {
      include: "button",
      
      style: {
        inset: true,
        innerColorTop: "border-button-inner-pressed",
        backgroundImage: "decoration/button/button-hovered.png"
      }
    },
    
    "button-focused": 
    {
      include: "button-hovered"
    },
    
    "button-checked":
    {
      include: "button-pressed",
      
      style: {
        shadowColor: "shadow",
        color: "border-button-checked"
      }
    },
    
    "button-checked-hovered":
    {
      include: "button-checked"
    },
    
    "button-checked-focused": 
    {
      include: "button-checked"
    },
    
    "button-checked-disabled": 
    {
      include: "button-checked",
      
      style: {
        shadowBlurRadius: 0
      }
    },

    "button-invalid": 
    {
      include: "button",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-disabled-invalid":
    {
      include: "button-disabled",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-hovered-invalid":
    {
      include: "button-hovered",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-checked-invalid":
    {
      include: "button-checked",
      
      style: {
        shadowColor: "border-invalid"
      }
    },

    "button-pressed-invalid":
    {
      include: "button-pressed",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-focused-invalid": 
    {
      include: "button-focused",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-checked-focused-invalid": 
    {
      include: "button-checked-focused",
      
      style: {
        color: "border-invalid"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      BUTTON-CIRCLE
    ---------------------------------------------------------------------------
    */
    
    "button-circle":
    {
      include: "button",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-disabled":
    {
      include: "button-disabled",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-hovered":
    {
      include: "button-hovered",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-pressed":
    {
      include: "button-checked",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-focused":
    {
      include: "button-focused",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-checked":
    {
      include: "button-checked",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-checked-disabled":
    {
      include: "button-checked-disabled",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-checked-hovered":
    {
      include: "button-circle-pressed"
    },

    "button-circle-checked-focused": 
    {
      include: "button-circle-checked"
    },
    
    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */
    
    "checkbox": 
    {
      style: {
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 0
      }
    },

    "checkbox-hovered":
    {
      include: "checkbox",
      
      style: {
        shadowBlurRadius: 3
      }
    },
    
    "checkbox-invalid":
    {
      include: "checkbox",
      
      style: {
        shadowColor: "border-invalid",
        shadowBlurRadius: 3
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      COMBOBOX
    ---------------------------------------------------------------------------
    */
    
    "combobox-button":
    {
      include: "button",
      
      style: {
        radius: 1
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-invalid": 
    {
      include: "input",
      
      style: {
        color: "border-invalid"
      }
    },
    
    "background-transparent":
    {
	  style: {
        backgroundImage: "decoration/form/background-transparent.png"
      }
    },
    
    "dragover":
    {
      style: {
        bottom: [2, "solid", "border-dragover"]
      }
    },

    "group":
    {
      style: {
        widthTop: 1,
        color: "border-group",
        innerWidthTop: 1,
        innerColor: "border-group-inner"
      }
    },

    "keyboard-focus":
    {
      style: {
        width: 1,
        color: "keyboard-focus",
        style: "dotted"
      }
    },
    
    "main":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-main"
      }
    },
    
    "pane": 
    {
      include: "input"
    },

    "selected":
    {
      style: {
        backgroundColor: "background-selected",
        shadowLength: 0,
        shadowBlurRadius: 3,
        shadowColor: "shadow"
      }
    },

    /*
    ---------------------------------------------------------------------------
      IFRAME
    ---------------------------------------------------------------------------
    */

    "iframe":
    {
      include: "input"
    },
    
    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    "menu":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-menu",
        shadowColor: "shadow",
        shadowBlurRadius: 8,
        shadowLength: 0,
        backgroundImage: "decoration/menu/background.jpg"
      }
    },

    "menu-separator":
    {
      style: {
        widthTop: 1,
        colorTop: "menu-separator-top",

        widthBottom: 1,
        colorBottom: "menu-separator-bottom"
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */

    "menubar":
    {
      style: {
        width: 1,
        colorBottom: "border-menu-bar",
        shadowColor: "shadow",
        shadowBlurRadius: 5,
        shadowLength: 0,
        backgroundImage: "decoration/menu/menubar.png",
        backgroundRepeat: "repeat"
      }
    },
    
    "menubar-button-hovered":
    {
	    include: "menubar",
	  
      style: {
		    width: 0,
		    radius: 2,
        backgroundImage: "decoration/menu/menubar-hovered.png"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      POPUP
    ---------------------------------------------------------------------------
    */

    "popup":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-popup",
        shadowColor: "shadow",
        shadowBlurRadius: 5,
        shadowLength: 0,
        backgroundImage: "decoration/menu/background.jpg"
      }
    },
    
    "popup-disabled":
    {
      include: "popup",
      
      style: {
        shadowBlurRadius: 0
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar":
    {
      include: "scrollbar-horizontal",
      
      style: {
        radius: 10
      }
    },
    
    "progressbar-disabled":
    {
      include: "scrollbar-horizontal-disabled",
      
      style: {
        radius: 10
      }
    },
    
    "progressbar-progress-disabled":
    {
      include: "scrollbar-slider-horizontal-disabled",
      
      style: {
        radius: 10
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      PROGRESSIVE
    ---------------------------------------------------------------------------
    */

    "progressive-table-header":
    {
       style: {
         width: 1,
         color: "border-main",
         style: "solid"
       }
    },

    "progressive-table-header-cell":
    {
      style: {
        gradientStart: ["table-header-start", 10],
        gradientEnd: ["table-header-end", 90],

        widthRight: 1,
        colorRight: "progressive-table-header-border-right"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */
    
    "radiobutton":
    {
      style: {
        radius: 15,
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 0
      }
    },
    
    "radiobutton-hovered": 
    {
      include: "radiobutton",
      
      style: {
        shadowBlurRadius: 3
      }
    },
    
    "radiobutton-invalid":
    {
      include: "radiobutton",
      
      style: {
        shadowColor: "border-invalid",
        shadowBlurRadius: 3
      }
    },

    /*
    ---------------------------------------------------------------------------
      SCROLLBAR
    ---------------------------------------------------------------------------
    */
    
    "scrollbar-horizontal":
    {
      style: {
        orientation: "vertical",
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 0,
        backgroundImage : "decoration/scrollbar/scrollbar-bg-horizontal.png",
        backgroundRepeat : "scale"
      }
    },
    
    "scrollbar-vertical": 
    {
      style: {
        orientation: "horizontal",
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 0,
        backgroundImage : "decoration/scrollbar/scrollbar-bg-vertical.png",
        backgroundRepeat : "scale"
      }
    },
    
    "scrollbar-horizontal-disabled":
    {
      icnlude: "scrollbar-horizontal",
      
      style: {
        backgroundImage : "decoration/scrollbar/scrollbar-bg-horizontal-disabled.png",
        backgroundRepeat : "scale"
      }
    },
    
    "scrollbar-vertical-disabled": 
    {
      include: "scrollbar-vertical",
      
      style: {
        backgroundImage : "decoration/scrollbar/scrollbar-bg-vertical-disabled.png",
        backgroundRepeat : "scale"
      }
    },
    
    "scrollbar-bg-button-up":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-vertical-top.png"
	    }
	  },
	
	  "scrollbar-bg-button-up-hovered":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-vertical-top-hovered.png"
	    }
	  },
	
	  "scrollbar-bg-button-up-pressed":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-vertical-top-pressed.png"
	    }
	  },
	
	  "scrollbar-bg-button-down":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-vertical-bottom.png"
	    }
	  },
    
    "scrollbar-bg-button-down-hovered":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-vertical-bottom-hovered.png"
	    }
	  },
	
	  "scrollbar-bg-button-down-pressed":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-vertical-bottom-pressed.png"
	    }
	  },
	
	  "scrollbar-bg-button-left":
    {
	    style: {
	      backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-left.png"
	    }
	  },
    
    "scrollbar-bg-button-left-hovered":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-left-hovered.png"
	    }
	  },
	
	  "scrollbar-bg-button-left-pressed":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-left-pressed.png"
	    }
	  },
	
	  "scrollbar-bg-button-right":
    {
	    style: {
	      backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-right.png"
	    }
	  },
    
    "scrollbar-bg-button-right-hovered":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-right-hovered.png"
	    }
	  },
	
	  "scrollbar-bg-button-right-pressed":
    {
	    style: {
		    backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-right-pressed.png"
	    }
	  },

    "scrollbar-slider-horizontal":
    {
      include: "button",
      
      style: {
        radius: 10,
        color: "shadow-scrollbar",
        backgroundImage: "decoration/scrollbar/scrollbar-button-horizontal.png",
        backgroundRepeat: "scale"
      }
    },

    "scrollbar-slider-vertical":
    {
      include: "scrollbar-slider-horizontal",
      
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-vertical.png",
        backgroundRepeat: "scale",
        orientation: "horizontal"
      }
    },
    
    "scrollbar-slider-horizontal-hovered":
    {
      include: "scrollbar-slider-horizontal",
      
      style: {
        backgroundImage: "decoration/scrollbar/scrollbar-button-horizontal-hovered.png"
      }
    },
    
    "scrollbar-slider-vertical-hovered":
    {
      include: "scrollbar-slider-horizontal-hovered",
      
      style: {
        orientation: "horizontal"
      }
    },
    
    "scrollbar-slider-horizontal-pressed":
    {
      include: "scrollbar-slider-horizontal",
      
      style: {
        backgroundImage : "decoration/scrollbar/scrollbar-button-horizontal-pressed.png"
      }
    },
    
    "scrollbar-slider-vertical-pressed":
    {
      include: "scrollbar-slider-horizontal-pressed",
      
      style: {
        orientation: "horizontal"
      }
    },

    "scrollbar-slider-horizontal-disabled":
    {
      include: "scrollbar-slider-horizontal",
      
      style: {
        radius: 10,
        innerWidth: 0,
        shadowBlurRadius: 0
      }
    },

    "scrollbar-slider-vertical-disabled":
    {
      include: "scrollbar-slider-horizontal-disabled",
      
      style: {
        orientation: "horizontal"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal":
    {
      style: {
        widthLeft: 1,
        colorLeft: "border-separator"
      }
    },

    "separator-vertical":
    {
      style: {
        widthTop: 1,
        colorTop: "border-separator"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SLIDEBAR
    ---------------------------------------------------------------------------
    */
    
    "slidebar-button":
    {
      include: "tabview-page-button-inactive"
    },
    
    "slidebar-button-hovered":
    {
      include: "tabview-page-button-hovered"
    },
    
    "slidebar-button-pressed":
    {
      include: "button-checked"
    },
    
    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */

    "slider-horizontal":
    {
      style: {
        borderImage: "decoration/slider/slider-horizontal.png",
        slice: [2, 1]
      }
    },
    
    "slider-vertical":
    {
      style: {
        borderImage: "decoration/slider/slider-vertical.png",
        slice: 1
      }
    },
    
    "slider-knob":
    {
      include: "button",
      
      style: {
        radius: 15
      }
    },
    
    "slider-knob-hovered":
    {
      include: "button-hovered",
      
      style: {
        radius: 15
      }
    },
    
    "slider-knob-disabled":
    {
      include: "button-disabled",
      
      style: {
        radius: 15
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SPLITPANE
    ---------------------------------------------------------------------------
    */

    "splitpane":
    {
      include: "input",
      
      style: {
        endColor: "transparent"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SPLITTER
    ---------------------------------------------------------------------------
    */
    
    "splitter-knob-horizontal":
    {
      include: "scrollbar-slider-horizontal-pressed",
      
      style: {
        shadowBlurRadius: 0
      }
    },
    
    "splitter-knob-vertical":
    {
      include: "scrollbar-slider-vertical-pressed",
      
      style: {
        shadowBlurRadius: 0
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table":
    {
      style: {
        width : 1,
        color : "border-main",
        style : "solid"
      }
    },
    
    "table-pane":
    {
      style:
      {
        backgroundImage: "decoration/table/table-pane.jpg",
        backgroundRepeat: "scale"
      }
    },

    "table-statusbar" :
    {
      style :
      {
        backgroundImage: "decoration/window/captionbar-inactive.jpg"
      }
    },

    "table-scroller-header":
    {
      style: {
        backgroundImage: "decoration/window/captionbar-inactive.jpg",
        
        widthBottom: 1,
        colorBottom: "#835813"
      }
    },
    
    "table-scroller-header-hovered":
    {
      include: "table-scroller-header",
      
      style: {
        colorBottom: "border-button-disabled"
      }
    },

    "table-header-cell":
    {
      style: {
        widthRight : 1,
        colorRight : "border-separator",
        styleRight : "solid"
      }
    },


    "table-header-cell-hovered":
    {
      include: "table-header-cell",
      
      style: {
        widthRight : 1,
        colorRight : "border-separator",
        styleRight : "solid",

        widthBottom : 1,
        colorBottom : "table-header-hovered",
        styleBottom : "solid"
      }
    },

    "table-scroller-focus-indicator":
    {
      style: {
        width: 2,
        color: "table-focus-indicator",
        style: "solid"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TABVIEW
    ---------------------------------------------------------------------------
    */

    "tabview-pane":
    {
      include: "input"
    },
    
    "tabview-pane-disabled":
    {
      include: "input-disabled"
    },

    "tabview-page-button-active": 
    {
      include: "button-hovered"
    },
    
    "tabview-page-button-disabled": 
    {
      include: "button-checked-disabled"
    },

    "tabview-page-button-inactive":
    {
      include: "button"
    },
    
    "tabview-page-button-hovered": 
    {
      include: "button"
    },
    
    "tabview-close-button":
    {
      include: "button",
      
      style: {
        radius: 15
      }
    },
    
    "tabview-close-button-hovered":
    {
      include: "button-pressed",
      
      style: {
        radius: 15
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "input":
    {
      style: {
        borderImage: "decoration/form/input.png",
        slice: 2
        
      }
    },
    
    "input-hovered":
    {
      include: "input",
      
      style: {
        startColor: "input-hovered-start",
        endColor: "input-hovered-end"
      }
    },

    "input-focused": 
    {
      include: "input",
      
      style: {
        borderImage: "decoration/form/input-focused.png",
        slice: 2
      }
    },
    
    "input-invalid": 
    {
      style: {
        borderImage: "decoration/form/input-invalid.png",
        slice: 2
      }
    },

    "input-focused-invalid": 
    {
      style: {
        borderImage: "decoration/form/input-focused-invalid.png",
        slice: 2
      }
    },

    "input-disabled": 
    {
      style: {
        borderImage: "decoration/form/input-disabled.png",
        slice: 2
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar":
    {
      include: "button",
      
      style: 
      {
        radius: 0
      }
    },
    
    "toolbar-button":
    {
      include: "button",
      
      style: {
        color: "transparent",
        innerColorTop: "transparent",
        shadowColor: "transparent",
        backgroundColor: "transparent",
        backgroundImage: null
      }
    },
    
    "toolbar-separator":
    {
      style: 
      {
        widthLeft: 1,
        widthRight: 1,

        colorLeft: "toolbar-separator-left",
        colorRight: "toolbar-separator-right"
      }
    },

    "toolbar-part":
    {
      style: {
        widthLeft: 1,
        widthRight: 1,

        colorLeft: "toolbar-separator-right",
        colorRight: "toolbar-separator-left"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TOOLTIP
    ---------------------------------------------------------------------------
    */
    
    "tooltip-error":
    {
      style: {
        backgroundColor: "tooltip-error",
        radius: 4,
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 1
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */

    "group-item":
    {
      include: "button",
      
      style: {
        radius: 0
      }
    },
    
    "group-item-disabled":
    {
      include: "button-disabled",
      
      style: {
        radius: 0
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */
    
    "window-active":
    {
      style: {
        radius: [5, 5, 0, 0],
        shadowBlurRadius: 10,
        shadowLength: 0,
        shadowVerticalLength: 5,
        shadowColor: "shadow-window"
      }
    },
    
    "window-inactive":
    {
      style: 
      {
        radius: [5, 5, 0, 0],
        shadowBlurRadius: 5,
        shadowLength: 0,
        shadowVerticalLength: 3,
        shadowColor: "shadow-window-inactive"
      }
    },

    "window-incl-statusbar-active": 
    {
      include: "window-active",
       
      style: 
      {
        radius: [5, 5, 0, 0]
      }
    },
    
    "window-incl-statusbar-inactive": 
    {
      include: "window-inactive",
       
      style: 
      {
        radius: [5, 5, 0, 0]
      }
    },

    "window-resize-frame":
    {
      style: {
        radius: [5, 5, 0, 0],
        width: 1,
        color: "border-main"
      }
    },

    "window-resize-frame-incl-statusbar":
    {
       include: "window-resize-frame",
       
       style: {
         radius: 0
       }
    },

    "window-captionbar-active":
    {
      style: {
        backgroundImage: "decoration/window/captionbar-active.jpg",
        backgroundRepeat: "scale",
        
        widthBottom: 1,
        colorBottom: "border-captionbar-active-bottom"
      }
    },

    "window-captionbar-inactive":
    {
      include: "window-captionbar-active",
      
      style: {
        backgroundImage: "decoration/window/captionbar-inactive.jpg"
      }
    },

    "window-statusbar-active":
    {
      style: {
        widthTop: 1,
        colorTop: "border-statusbar-top",
        
        innerWidthTop: 1,
        innerColorTop: "border-statusbar-top-inner",
        
        backgroundImage: "decoration/window/window-active.jpg"
      }
    },
    
    "window-statusbar-inactive":
    {
      include: "window-statusbar-active",
      
      style: {
        backgroundImage: "decoration/window/window-inactive.png"
      }
    },

    "window-pane-active":
    {
      style: {
        backgroundImage: "decoration/window/window-active.jpg"
      }
    },
    
    "window-pane-active-incl-statusbar":
    {
      include: "window-pane-active",
      
      style: {
        radius: 0
      }
    },
    
    "window-pane-inactive":
    {
      include: "window-pane-active"
    },
    
    "window-pane-inactive-incl-statusbar":
    {
      include: "window-pane-inactive",
      
      style: {
        radius: 0
      }
    }
    
  }
});
