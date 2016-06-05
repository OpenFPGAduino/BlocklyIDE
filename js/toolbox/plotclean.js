Blockly.Blocks['plotclean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Plot Clean");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['plotclean'] = function(block) {
  var code = 'plotclean();\n';
  return code;
};