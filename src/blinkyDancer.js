var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.left = left;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps){
  Dancer.prototype.step.call(this,timeBetweenSteps);
  this.$node.toggle();
  this.$node.css({left:this.left,top:this.top});
};

BlinkyDancer.prototype.lineUp = function(top){
  this.whistle();
  var windowLeft = $(window).width();
  var CSS = {
              "border":"10px solid red",
              "border-radius":"10px",
              "position":"absolute",
              "left": windowLeft - 50,
              "top": top
            };
            debugger;
  this.$node.css(CSS);
};