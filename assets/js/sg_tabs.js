function sg_tabs(t,a){function s(){e.find(".sg-tabs__tabItem:first-of-type").addClass("sg-tabs__tabItem--active"),e.find(".sg-tabs__contentPanel:first-of-type").addClass("sg-tabs__contentPanel--active")}function n(){e.on("click",".sg-tabs__tabItem",function(){var a=t(this).attr("tabs-link-id");e.find(".sg-tabs__tabItem").removeClass("sg-tabs__tabItem--active"),t(this).addClass("sg-tabs__tabItem--active"),e.find(".sg-tabs__contentPanel").each(function(){var s=t(this).attr("tabs-content-id");s==a?t(this).addClass("sg-tabs__contentPanel--active"):t(this).removeClass("sg-tabs__contentPanel--active")})})}function i(){e=t("#"+a),s(),n()}var e;return i}var SG_TABS_EXT={init:function(){$(".sg-tabs").each(function(){if(a=$(this).attr("id"),void 0===a){var t=1+Math.floor(999999999*Math.random()),a="UNIQUE_ID_"+t;$(this).attr("id",a)}sg_tabs(jQuery,a)()})}};