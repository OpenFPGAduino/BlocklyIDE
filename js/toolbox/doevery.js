Blockly.Blocks['do_every'] = {
  // Print statement.
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendField('Every')
        .appendField(new Blockly.FieldTextInput(''), 'MILLIS')
        .appendField('milli-seconds');
     this.appendStatementInput('ONTIMEOUT')
       .appendField('do');
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript.do_every = function() {
  var branch = Blockly.JavaScript.statementToCode(this, 'ONTIMEOUT');
  var millis = this.getFieldValue('MILLIS');
  var id = this.getFieldValue('ID');
  var code = 'var timer=setInterval(function(){\n' + branch + '\n},' + millis + ');\n\n';
  return code;
};