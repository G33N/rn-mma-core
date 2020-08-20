// options available
exports.options = [
  {name: 'android:release', description: 'Build an android release binary '},
  {name: 'ios:release', description: 'Build an ios release binary '},
];
exports.typesPlain = exports.options.map(function (o) {
  return o.name + ' (' + o.description + ')'; // convert to one line
});
