Blockly.Blocks['shield_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SHIELDINIT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['shield_init'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "ajax_post('/fpga/api/call/shield_ctrl_init', []);\n";
  return code;
};