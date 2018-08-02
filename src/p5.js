export default function sketch(p) {
  let rotation = 0;
  p.setup = function() {
    p.createCanvas(600, 400, p.WEBGL);
    p.background(0);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p.draw = function() {
    p.noStroke();
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };
}
