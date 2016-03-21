(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ($scope, $log) {
    var tabs = [
	      { title: '说明', content: "这是材料设计主题angularjs框架演示,详细文档请翻墙后访问http://material.angularjs.org/"},
          { title: '谷歌字体', content: "https://font.c2cmalls.com"},
          { title: '谷歌前端公共库', content: "https://ajax.c2cmalls.com"},
          { title: 'CDNJS镜像', content: "https://cdnjs.c2cbc.com"},
          { title: '谷歌设计', content: "https://design.c2cbc.com."},
          { title: '谷歌字体含', content: "https://storage.c2cbc.com"},
          { title: '谷歌图标', content: "https://font.c2cmalls.com/icon?family=Material+Icons"},
          { title: '谷歌其他', content: "https://themes.c2cbc.com"},
          { title: 'jsdelivr镜像', content: "https://cdn.c2cbc.com"},
          { title: '高级定制', content: "https://cdn.c2cmalls.com"},
          { title: '字体真棒', content: "https://cdn.c2cbc.com/fontawesome/4.5.0/css/font-awesome.min.css"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('再见 ' + previous.title + '!');
      if ( current + 1 )                $log.debug('你好! ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }
})();



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/