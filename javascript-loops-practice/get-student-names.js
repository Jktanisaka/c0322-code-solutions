/* exported getStudentNames */
function getStudentNames(students) {
  var names = [];
  for (var i in students) {
    names.push(students[i].name);
  }
  return names;
}
