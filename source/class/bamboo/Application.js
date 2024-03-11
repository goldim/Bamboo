/**
 * @asset(bamboo/about.html)
 */
qx.Class.define("bamboo.Application", {
  extend: scro34.themedemo.Application,

  members: {
    main(){
      super.main({ about_url: "bamboo/about.html" });
    },

    _getCustomIcons(){
      return new bamboo.Icons();
    }
  }
});
