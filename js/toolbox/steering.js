Blockly.Blocks['steering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steering");
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['steering'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};