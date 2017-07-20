import Ember from 'ember';

import emojiTranslator from 'emoji-all-the-things/utils/emoji-translator';

export default Ember.Controller.extend({
	// '\\U000' + b.codePointAt(0).toString(16)
	input: null,

	output: Ember.computed(function() {
		var input = this.get('input');
		if (!input) {
			return '';
		}

		return Array.from(input).map(function(x) {
			return emojiTranslator(x);
		}).join('');
	}).property('input'),

	pythonOutput: Ember.computed(function() {
		// return this.get('output').split('\n').map(function(x) {
		// 	return "print u'''" + x + "'''"
		// }).join('\n');

		return "print u'''\n" + this.get('output') + "\n'''"
	}).property('output'),
});
