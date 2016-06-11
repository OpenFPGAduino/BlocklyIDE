Blockly.Blocks['steering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEERING);
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['steering'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  var code = ';\n';
  return code;
};