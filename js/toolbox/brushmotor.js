Blockly.Blocks['brushmotorinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("brushmotor");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['brushmotorinit'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';//void brushmotor_init(int id, unsigned int frequence, unsigned int duty_cycle);

  return code;
};

Blockly.Blocks['brushmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("brushmotor");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['brushmotor'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';//void brushmotor_run(int id, unsigned int on_off, unsigned int forward_back, unsigned int duty_cycle);
  return code;
};