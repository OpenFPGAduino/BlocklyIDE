function ajax_post(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("post", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.responseText);
    return (JSON.parse(xhr.responseText));
}

function ajax_get(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    debuginf(xhr.responseText);
    return (JSON.parse(xhr.responseText));
}

function ajax_delete(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("delete", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.status);
}