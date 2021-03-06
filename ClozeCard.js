// * Create a new file named `ClozeCard.js`:

//         * This file should define a Node module that exports a constructor 
// 				for creating cloze-deletion flashcards, e.g.:
//         `module.exports = ClozeCard;`

//         * The constructor should accept two arguments: `text` and `cloze`.

//         * The constructed object should have a `cloze` property that contains 
// 				_only_ the cloze-deleted portion of the text.

//         * The constructed object should have a `partial` property that contains 
// 				_only_ the partial text.

//         * The constructed object should have a `fullText` property that contains 
// 				_only_ the full text.

//         * The constructor should throw or log an error when 
// 				the cloze deletion does _not_ appear in the input text.

//         * Use prototypes to attach these methods, wherever possible.

//======================================================================
//======================================================================

var ClozeCard = function(text, cloze) {
	this.fullText = fullText;
	this.partialText = partialText;
	this.clozeText = clozeText;

	var cQuestionOne = new ClozeCard("Is this the first question?", "Yes");
	var cQuestionTwo = new ClozeCard("Is this the second question?", "Yes");
	var cQuestionThree = new ClozeCard("Is this the fourth question?", "No");
}




module.exports = ClozeCard;