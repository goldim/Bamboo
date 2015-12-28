/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclijadt.demo.org/org/documents/epl-v10.php

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

qx.Class.define("bamboo.demo.view.TabView",
{
  extend: qx.ui.tabview.TabView,


  construct: function()
  {
    this.base(arguments);

    this.init();
    this.addListener("changeSelection", this.__rememberCurrentTab, this);
    this.__setCurrentTab();
  },

  members:
  {
    init: function() 
    {
      var controls, classname;

      // Form
      classname = "bamboo.demo.pages.Form";
      controls = {disabled: true, hovered: true, focused: true, invalid: true};
      var form = new bamboo.demo.view.TabPage("Form", classname, controls);
      this.add(form);

      // Tree
      classname = "bamboo.demo.pages.Tree";
      controls = {disabled: true};
      var tree = new bamboo.demo.view.TabPage("Tree", classname, controls);
      this.add(tree);

      // List
      classname = "bamboo.demo.pages.List";
      controls = {disabled: true};
      var list = new bamboo.demo.view.TabPage("List", classname, controls);
      this.add(list);

      // Menu
      classname = "bamboo.demo.pages.ToolBar";
      controls = {disabled: true, hovered: true, selected: true, hidesome: true};
      var menu = new bamboo.demo.view.TabPage("Toolbar/Menu", classname, controls);
      this.add(menu);

      // Window
      classname = "bamboo.demo.pages.Window";
      controls = {disabled: true};
      var win = new bamboo.demo.view.TabPage("Window", classname, controls);
      this.add(win);

      // Tab
      classname = "bamboo.demo.pages.Tab";
      controls = {disabled: true, overflow: true};
      var tab = new bamboo.demo.view.TabPage("Tab", classname, controls);
      this.add(tab);

      // Embed
      classname = "bamboo.demo.pages.Embed";
      controls = {};
      var embed = new bamboo.demo.view.TabPage("Embed", classname, controls);
      this.add(embed);

      // EmbedFrame
      classname = "bamboo.demo.pages.EmbedFrame";
      controls = {};
      var embedFrame = new bamboo.demo.view.TabPage("EmbedFrame", classname, controls);
      this.add(embedFrame);

      // Misc
      classname = "bamboo.demo.pages.Misc";
      controls = {disabled: true};
      var misc = new bamboo.demo.view.TabPage("Misc", classname, controls);
      this.add(misc);
    },

    __rememberCurrentTab: function(e) {
      qx.bom.Cookie.set("currentTab", e.getData()[0].getLabel());
    },

    __setCurrentTab: function() {
      var cookie = qx.bom.Cookie.get("currentTab") ||
                   qx.bom.Cookie.set("currentTab", "basic");

      var currentTab = new qx.type.Array().append(this.getSelectables()).filter(function(tab) {
        return tab.getLabel() == cookie;
      })[0];

      if (currentTab) {
        this.setSelection([currentTab]);
      }
    }
  }
});
