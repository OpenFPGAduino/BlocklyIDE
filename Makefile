all:
	rm -rf blocklyide
	mkdir -p blocklyide/blockly
	rsync -rp blockly/blockly_compressed.js blocklyide/blockly/
	rsync -rp blockly/blocks_compressed.js blocklyide/blockly/
	rsync -rp blockly/javascript_compressed.js blocklyide/blockly/
	rsync -rp blockly/media blocklyide/blockly/media
	rsync -rp blockly/msg blocklyide/blockly/msg
	rsync -rp js blocklyide/
	rsync -rp css blocklyide/
	rsync -rp index.html blocklyide/
	
clean:
	rm -rf blocklyide
	@echo "clean ready"
format: clean
	find . -name "*.js" -exec js-beautify -r {} \;	 
	find . -name "*.html" -exec html-beautify -r {} \;	 
	find . -name "*.css" -exec css-beautify -r {} \;	 
