import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';
 
import './body.html';
 
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
  'keypress .new-task'(event) {
    if (event.which === 13) { // if the key is enter
      const target = event.currentTarget;
      const text = target.textContent;

      Tasks.insert({
        text,
        createdAt: new Date(), // current time
      });

      target.textContent = '';
    }
  },
});


function pasteHtmlAtCaret(html) {
//by Tim Downs at http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div

    var sel, range;
    // debugger;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            var firstNode = frag.firstChild;
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        // IE < 9
        var originalRange = sel.createRange();
        originalRange.collapse(true);
        sel.createRange().pasteHTML(html);
    }
}

window.onload = function() {
makeButton('updown');
makeButton('hyper');
makeButton('sarcastic');
makeButton('ellipsis');
makeButton('nervous');
makeButton('anxious');
makeButton('sad');
makeButton('angry');
makeButton('confused');
makeButton('urgent');
}


function makeButton(name) {


        document.getElementById(name).onclick = function() {
            document.getElementById('input').focus();
            console.log("hi");

            var buttonTest = '<span class="'+name+ ' punctumotion">.</span>&#8203;';

            pasteHtmlAtCaret(buttonTest); //need to move cursor forward to replace &nbsp;
            return false;
        };
}
