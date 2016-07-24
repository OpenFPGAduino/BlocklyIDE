all:
	rm -rf blocklyide
	mkdir -p blocklyide/blockly
	rsync -aR blockly/demos/interpreter/acorn_interpreter.js blocklyide
	rsync -aR blockly/demos/code/msg/ blocklyide
	rsync -aR blockly/blockly_compressed.js blocklyide
	rsync -aR blockly/blocks_compressed.js blocklyide
	rsync -aR blockly/javascript_compressed.js blocklyide
	rsync -aR blockly/media blocklyide
	rsync -aR blockly/msg/js blocklyide
	rsync -aR js blocklyide
	rsync -aR css blocklyide
	rsync -aR index.html blocklyide
install: all
	cp -r blocklyide ../Arduinojs/page/	
clean:
	rm -rf blocklyide
	@echo "clean ready"
format: clean
	find . -name "*.js" -exec js-beautify -r {} \;	 
	find . -name "*.html" -exec html-beautify -r {} \;	 
	find . -name "*.css" -exec css-beautify -r {} \;	 
