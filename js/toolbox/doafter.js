Blockly.Blocks['do_after'] = {
  // Print statement.
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendField('After')
    this.appendDummyInput()
        .appendField(Blockly.Msg.WAIT_SECONDS);
    this.setInputsInline(true);
    this.appendStatementInput('ONTIMEOUT')
       .appendField('do');
	this.setPreviousStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript.do_after = function() {
  var branch = Blockly.JavaScript.statementToCode(this, 'ONTIMEOUT');
  var millis = this.getFieldValue('MILLIS');
  var id = this.getFieldValue('ID') || 'Main';
  var code = 'var timer=setTimeout(function(){\n' + branch + '\n},' + millis + ');\n\n';
  return code;
};
