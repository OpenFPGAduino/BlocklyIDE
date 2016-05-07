Blockly.Blocks['rgb_led'] = {
  init: function() {
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("Red");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("Green");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("Blue");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
