




var RobotDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class = "robotDancer"> <img src = "robot1.jpg"/></span>');
  this.setPosition(top, left);
};

RobotDancer.prototype = Object.create(Dancer.prototype);

RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this,timeBetweenSteps);
  var danceMode = Math.ceil(Math.random()*3);
  var danceMode2 = Math.ceil(Math.random()*5);
    this.$node.animate({top : danceMode*200, left: danceMode2*150, rotation: danceMode2 + "deg"});
  this.$node.html('<span class = "robotDancer"> <img src = "robot' + danceMode + '.jpg"/></span>');
};

RobotDancer.prototype.lineUp = function(top){
  this.$node.animate({left: 50, top: top});
};