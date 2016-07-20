Blockly.Blocks['error'] = {
  init: function() {
    this.appendValueInput("Error")
        .setCheck("String")
        .appendField(Blockly.Msg.ERROR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['error'] = function(block) {
  var error = Blockly.JavaScript.valueToCode(block, 'Error', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'error_print('+ error +')\n';
  return code;
};