Blockly.Blocks['console'] = {
  init: function() {
    this.appendValueInput("Console")
        .appendField(Blockly.Msg.CONSOLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['console'] = function(block) {
  var console = Blockly.JavaScript.valueToCode(block, 'Console', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console_print('+ console +')\n';
  return code;
};