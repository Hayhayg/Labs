let editDate = document.lastModified;
function dateEditedFunc() {
  return editDate;
}
document.getElementById("dateModified").innerHTML = dateEditedFunc();