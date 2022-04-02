/* exported defaults */
/*
purpose: create a function that adds properties from source into target
conditions: source should not override target, empty source should not copy over anything
adds missing properties,

create function with parameters target and source, both will be objects
create a for in loop to iterate through all properties of source
check to see if the property in source exists in target
if the source property does not yet exist, add it
if it does exist, do nothing
*/
function defaults(target, source) {
  for (var keys in source) {
    if (target[keys] === undefined) {
      target[keys] = source[keys];
    }
  }
}
