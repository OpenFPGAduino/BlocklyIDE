Blockly.Blocks['console'] = {
  init: function() {
    this.appendValueInput("Console")
        .setCheck("String")
        .appendField("Console");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['console'] = function(block) {
  var console = Blockly.JavaScript.valueToCode(block, 'Console', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'log.console.print('+ console +')\n';
  return code;
};