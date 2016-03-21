function pasteHtmlAtCaret(html) {
//by Tim Downs at http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div

    var sel, range;
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

function makeButton(name) {

        document.getElementById(name).onclick = function() {
            document.getElementById('text').focus();

            var buttonTest = '<span class="'+name+ ' punctumotion">.</span>&#8203;';

            pasteHtmlAtCaret(buttonTest); //need to move cursor forward to replace &nbsp;
            return false;
        };
}

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



// $('#send').click(function(){
//     var myTxt = $('#text').html();
//     $.ajax({
//         type: 'POST',
//         url:  this.href,
//         data: myTxt
//     });

// });