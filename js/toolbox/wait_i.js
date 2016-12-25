Here's a drop-in solution

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#b99xcz
Blockly.Blocks['wait'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("wait")
        .appendField(new Blockly.FieldDropdown([["half a second", "500"], ["a second", "1000"], ["two seconds", "2000"], ["five seconds", "5000"]]), "DELAY");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};


Blockly.JavaScript['wait'] = function(block) {
  var dropdown_delay = block.getFieldValue('DELAY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'wait(' + dropdown_delay + ');\n';
  return code;
};


var nextStepDelay = 10;


function wait(d) {
  nextStepDelay = d;
}


function nextStep() {
  if (myInterpreter.step()) {
    var temp = nextStepDelay;
    nextStepDelay = 10;
    window.setTimeout(nextStep, temp);
  }
}

and add this of course to your initApi function

var wrapper = function(d) {
  return interpreter.createPrimitive(wait(d));
}
interpreter.setProperty(scope, 'wait',
    interpreter.createNativeFunction(wrapper));
