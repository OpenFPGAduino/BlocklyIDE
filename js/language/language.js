//Load Blockly's language strings.
if (!window.localStorage.getItem("language")) {
	window.localStorage.setItem("language", "en");
}
document.documentElement.lang = window.localStorage.getItem("language");
var language = document.documentElement.lang;
document.write('<script src="blockly/msg/js/' + language + '.js"></script>\n');
document.write('<script src="js/toolbox/language/' + language + '.js"></script>\n');
document.write('<script src="js/language/' + language + '.js"></script>\n');

var load_language = function () {

    /**
   * Lookup for names of supported languages.  Keys should be in ISO 639 format.
   */
	LANGUAGE_NAME = {
        'en': 'English',
        'zh-hans': '简体中文',
	};

    // Sort languages alphabetically.
    var languages = [];
    for (var lang in LANGUAGE_NAME) {
		languages.push([LANGUAGE_NAME[lang], lang]);
    }

    var languageMenu = document.getElementById('languageMenu');
    languageMenu.options.length = 0;
    for (var i = 0; i < languages.length; i++) {
		var tuple = languages[i];
		var lang = tuple[tuple.length - 1];
		var option = new Option(tuple[0], lang);
		if (lang == language) {
			option.selected = true;
		}
		languageMenu.options.add(option);
    }
	var changeLanguage = function () {
		var newLang = encodeURIComponent(
			languageMenu.options[languageMenu.selectedIndex].value);
		window.localStorage.setItem("language", newLang);
		window.location.reload();
	};
    languageMenu.addEventListener('change', changeLanguage, true);

	var categories = ['catLogic', 'catLoops', 'catMath', 'catText', 'catLists',
		'catColour', 'catVariables', 'catFunctions','catChart'];
	for (var i = 0, cat; cat = categories[i]; i++) {
		document.getElementById(cat).setAttribute('name', MSG[cat]);
	}
	var textVars = document.getElementsByClassName('textVar');
	for (var i = 0, textVar; textVar = textVars[i]; i++) {
		textVar.textContent = MSG['textVariable'];
	}
	var listVars = document.getElementsByClassName('listVar');
	for (var i = 0, listVar; listVar = listVars[i]; i++) {
		listVar.textContent = MSG['listVariable'];
	}

	for (var text in TEXT) {
		var dom = document.getElementById(text);
		if (dom != null) {
			dom.textContent = TEXT[text];
		}
	}
	for (var title in TITLE) {
		var dom = document.getElementById(title);
		if (dom != null) {
			dom.title = TITLE[title];
		}
	}
};

