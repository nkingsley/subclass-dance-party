




var BabyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class = "BabyDancer"> <img src = "baby1.png"/></span>');
  this.setPosition(top, left);
};

BabyDancer.prototype = Object.create(Dancer.prototype);

BabyDancer.prototype.constructor = BabyDancer;

BabyDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this,timeBetweenSteps);
  var danceMode = Math.ceil(Math.random()*4);
  var danceMode2 = Math.ceil(Math.random()*3);
    this.$node.animate({top : danceMode*100, left: danceMode2*100, rotation: danceMode2 + "deg"});
  this.$node.html('<span class = "BabyDancer"> <img src = "baby' + danceMode + '.png"/></span>');
};

BabyDancer.prototype.lineUp = function(left){
  this.whistle();
  this.$node.animate({left: left, top: 10});
};