var FredDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class = "FredDancer"> <img src = "fred1.png" height = "200"/></span>');
  this.setPosition(top, left);
};

FredDancer.prototype = Object.create(Dancer.prototype);

FredDancer.prototype.constructor = FredDancer;

FredDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this,timeBetweenSteps);
  var danceMode = Math.ceil(Math.random()*3);
  var danceMode2 = Math.ceil(Math.random()*10);
  this.$node.html('<span class = "FredDancer"> <img src = "fred' + danceMode + '.png" height = "200"/></span>');
  this.$node.animate({top : this.top + danceMode2*50, left: this.left + danceMode2*100});
  this.$node.transition({rotate: danceMode2*30 + "deg"});
};

FredDancer.prototype.lineUp = function(left){
  this.whistle();
  this.$node.animate({left: left, top: $(window).height() - 300});
};