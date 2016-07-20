var log = {
    console: {
        print: function (text) {
            text = text.replace(/\n/gi, '</p><p>');
            text = text.replace(/\r/gi, '</p><p>');
            document.getElementById("console").innerHTML += "<p>" + text + "<\p>";
        },
        clean: function () {
            document.getElementById("console").innerHTML = " ";
        }
    },
    error: {
        print: function (text) {
            text = text.replace(/\n/gi, '</p><p>');
            text = text.replace(/\r/gi, '</p><p>');
            document.getElementById("error").innerHTML += "<p>" + text + "<\p>";
        },
        clean: function () {
            document.getElementById("error").innerHTML = " ";
        }
    }
}

function console_print(text) 
{
    log.console.print(text)
}

function console_clean() 
{
    log.console.clean()
}

function error_print(text) 
{
    log.error.print(text)
}

function console_clean() 
{
    log.error.clean()
}