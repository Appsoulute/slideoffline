function setTopPanelHandler() {
  var thumb    = document.getElementById("thumb");
  var fn_toc   = document.getElementById("fn_toc");
  var fn_print = document.getElementById("fn_print");
  var fn_goto  = document.getElementById("fn_goto");
  var fn_note  = document.getElementById("fn_note");
  thumb.addEventListener("click", function(e) {
    var topPanelContainer = document.getElementById("top-panel-container");
    var classList = topPanelContainer.classList;
    if (classList.contains('hide-right')) {
      classList.remove('hide-right');
    } else {
      classList.add('hide-right');
    }
    e.preventDefault();
  });
  fn_note.addEventListener("click", function() {
    var slideDocContainer = document.getElementById("slide-doc-container");
    var classList = slideDocContainer.classList;
    if (classList.contains('hide-right')) {
      classList.remove('hide-right');
    } else {
      classList.add('hide-right');
    }
  });
  fn_toc.addEventListener("click", function() {
      var topPanelContainer = document.getElementById("top-panel-container");
      var classList = topPanelContainer.classList;
      if (!classList.contains('hide-right')) {
        classList.add('hide-right');
      }
      Reveal.navigateTo(0,1);
  });
}

var setUpTOCHandler = function() {
  var collapse = function(item) {
    item.removeClass('spread');
  };
  var expand = function(item) {
    item.addClass('show');
    setTimeout(function() {
      item.removeClass('show');
      item.addClass('spread');
    }, 1);
  }
  $('.toc-list-container .toc-head').click(function(e) {
    var nextItem = $(e.target).next();
    if (nextItem.css("display")==="none") {
      collapse($(".toc-list"));
      setTimeout(function() { expand(nextItem); } , 5);
    } else {
      collapse(nextItem);
    }
    e.preventDefault();
  });
};
var runApp=function() {
  setTopPanelHandler();
  setUpTOCHandler();
};

var slideDocInner = document.getElementById("slide-doc-inner");
Reveal.addEventListener('ready', runApp );
Reveal.addEventListener('slidechanged', function(event) {
  //console.log(event.previousSlide, event.currentSlide, event.indexh, event.indexv);
  if (event.indexv>0) {
    var noteFile = "./lecture/slidedoc"+(event.indexv+1)+".html";
    console.log("load notes", noteFile);
    slideDocInner.src= noteFile;
  }
  var slideDocContainer = document.getElementById("slide-doc-container");
  var classList = slideDocContainer.classList;
  classList.add('hide-right');
});
