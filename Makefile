all:
	rm -rf blocklyide
	mkdir -p blocklyide/blockly
	cp -rpf blockly/blockly_compressed.js blocklyide/blockly/
	cp -rpf blockly/blocks_compressed.js blocklyide/blockly/
	cp -rpf blockly/javascript_compressed.js blocklyide/blockly/
	cp -rpf blockly/media blocklyide/blockly/media
	cp -rpf blockly/msg blocklyide/blockly/msg
	cp -rpf js blocklyide/
	cp -rpf css blocklyide/
	cp -rpf index.html blocklyide/
	
clean:
	rm -rf blocklyide
	@echo "clean ready"
format: clean
	find . -name "*.js" -exec js-beautify -r {} \;	 
	find . -name "*.html" -exec html-beautify -r {} \;	 
	find . -name "*.css" -exec css-beautify -r {} \;	 
