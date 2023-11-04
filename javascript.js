function preview() {
    var code = document.getElementById("code").value;
    document.getElementById("preview").innerHTML = code;
}
function selectText() {
    var code = document.getElementById("code");
    code.focus();
    code.select();
}

function applyBold() {
    var code = document.getElementById("code");
    var cursorPosition = code.selectionStart;
    var currentCode = code.value;
    var selectedText = code.value.slice(code.selectionStart, code.selectionEnd);
    var newCode = currentCode.slice(0, cursorPosition) + "<b>" + selectedText + "</b>" + currentCode.slice(code.selectionEnd);
    code.value = newCode;
}
function applyright() {
  var code = document.getElementById("code");
  var cursorPosition = code.selectionStart;
  var currentCode = code.value;
  var selectedText = code.value.slice(code.selectionStart, code.selectionEnd);
  var newCode = currentCode.slice(0, cursorPosition) + "<code style='text-align:right'>" + selectedText + "</code>" + currentCode.slice(code.selectionEnd);
  code.value = newCode;
}