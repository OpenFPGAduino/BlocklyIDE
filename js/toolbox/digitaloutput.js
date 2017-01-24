Blockly.Blocks['digitaloutput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DIGITALOUTPUT);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A", "a"], ["B", "b"]]), "io");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "onoff");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['digitaloutput'] = function(block) {
  var io = block.getFieldValue('io');
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var onoff = block.getFieldValue('onoff');
  var code = "ajax_post('/fpga/api/call/dio_"+io+"_out', ["+ id +","+ onoff +"]);\n";
  return code;
};

Blockly.Blocks['digitaldir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DIGITALDIR);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"]]), "port");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.INPUT, "0"], [Blockly.Msg.OUTPUT, "1"]]), "dir");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['digitaldir'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dir = block.getFieldValue('dir');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};