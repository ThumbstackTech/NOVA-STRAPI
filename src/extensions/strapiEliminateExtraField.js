"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
function MapData(Data) {
  var FinalData = Data.map(function (data) {
    return (data = __assign({}, data.attributes));
  });
  FinalData.forEach(function (data) {
    Object.keys(data).forEach(function (key) {
      if (data[key].data) {
        data[key] = MapData(data[key].data);
      }
    });
  });
  return FinalData;
}
exports["default"] = MapData;
