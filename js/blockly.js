var workspace;
var load_blockly = function () {
    load_language();
    workspace = Blockly.inject('blocklyDiv',
        {
            media: 'blockly/media/',
            zoom: { controls: true, wheel: true },
            toolbox: document.getElementById('toolbox')
        });
    Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'),
        workspace);
}