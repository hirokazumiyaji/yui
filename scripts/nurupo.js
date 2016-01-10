"use strict";

module.exports = function exports(robot) {
  robot.hear(/ぬるぽ/i, function (res) {
    res.send("ガッ");
  });
};
