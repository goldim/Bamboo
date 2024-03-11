/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)
     * Dmitrii Zolotov (goldim)

************************************************************************ */

/**
 * @asset(bamboo/about.html)
 */
qx.Class.define("bamboo.demo.Application", {
  extend: scro34.themedemo.Application,

  members: {
    main(){
      super.main({ about_url: "bamboo/about.html" });
    },

    _getCustomIcons(){
      return new bamboo.demo.Icons();
    }
  }
});
