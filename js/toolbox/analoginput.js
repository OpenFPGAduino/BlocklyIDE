Blockly.Blocks['analoginput'] = {
  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.ANALOGIN);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A", "a"], ["B", "b"]]), "CH");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]), "ID");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['analoginput'] = function(block) {
  var ch = block.getFieldValue('CH');
  var id = block.getFieldValue('ID');
  var code = 
    "ajax_post('/fpga/api/call/ain_"+ch+"', ["+ id+"])"
  return [code, Blockly.JavaScript.ORDER_NONE];
};
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
