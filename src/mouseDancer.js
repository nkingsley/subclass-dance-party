var alreadyCalled = false;
var MouseDancer = function(top, left, timeBetweenSteps){
  if (!alreadyCalled){
    Dancer.apply(this,arguments);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    this.$node = $('<span class = "MouseDancer"> <img src = "mouse.png"/></span>');
    this.setPosition(top, left);
    alreadyCalled = true;
  }
};

MouseDancer.prototype = Object.create(Dancer.prototype);

MouseDancer.prototype.constructor = MouseDancer;

MouseDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this,timeBetweenSteps);
  var danceMode = Math.ceil(Math.random()*3);
  var danceMode2 = Math.ceil(Math.random()*3);
    this.$node.animate({top : danceMode*500-600, left: danceMode2*300-800, rotation: danceMode2 + "deg"});
};

MouseDancer.prototype.lineUp = function(left){
  this.whistle();
  this.$node.animate({left: $(window).width()/2, top: $(window).height()/2});
};