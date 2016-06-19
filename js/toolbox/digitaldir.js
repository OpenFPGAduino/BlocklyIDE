Blockly.Blocks['digitialdir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital port");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"]]), "port");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["input", "0"], ["output", "1"]]), "dir");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['digitialdir'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dir = block.getFieldValue('dir');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};