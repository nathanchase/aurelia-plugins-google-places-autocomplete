define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var HighlightValueConverter = exports.HighlightValueConverter = function () {
    function HighlightValueConverter() {
      
    }

    HighlightValueConverter.prototype.toView = function toView(array) {
      array.forEach(function (item) {
        if (!item.matched_substrings || !item.matched_substrings.length) return;
        item.innerHTML = item.description;
        for (var i = 0, j = item.matched_substrings.length; i < j; i++) {
          var length = item.matched_substrings[i].length;
          var offset = item.matched_substrings[i].offset + i * 17;
          item.innerHTML = [item.innerHTML.slice(0, offset), '<strong>', item.innerHTML.slice(offset, length), '</strong>', item.innerHTML.slice(length)].join('');
        }
      });
      return array;
    };

    return HighlightValueConverter;
  }();
});