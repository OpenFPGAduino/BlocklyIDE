Blockly.Blocks['analoginit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ANALOGINIT);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A", "a"], ["B", "b"]]), "CH");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['analoginit'] = function(block) {
  var ch = block.getFieldValue('CH');
  var code = "ajax_post('/fpga/api/call/ain_"+ch+"_init', []);";
  return code;
};
