import Ember from 'ember';

export default Ember.Controller.extend({
	// '\\U000' + b.codePointAt(0).toString(16)
	input: null,

	output: Ember.computed(function() {
		var input = this.get('input');
		if (!input) {
			return '';
		}

		return Array.from(input).map(function(x) {
			var codePoint = x.codePointAt(0);

			if (codePoint > 200) {
				var strCode = codePoint.toString(16);
				var padding = Array(8 + 1 - Array.from(strCode).length).join('0');
				return '\\U' + padding + strCode;
			} else {
				return x
			}
		}).join('');
	}).property('input'),

	pythonOutput: Ember.computed(function() {
		// return this.get('output').split('\n').map(function(x) {
		// 	return "print u'''" + x + "'''"
		// }).join('\n');

		return "print u'''\n" + this.get('output') + "\n'''"
	}).property('output'),
});
