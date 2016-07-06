Blockly.Blocks['error'] = {
  init: function() {
    this.appendValueInput("Error")
        .setCheck("String")
        .appendField("Error");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['error'] = function(block) {
  var error = Blockly.JavaScript.valueToCode(block, 'Error', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'log.error.print('+ error +')\n';
  return code;
};