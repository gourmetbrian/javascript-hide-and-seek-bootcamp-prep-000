function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list li")

  for (var i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild(){
  var current = document.querySelectorAll("div#grand-node");

  while (current){
    if (current[0].children.length === 0) {
      return current[0];
    }
    current = current[0].children
  }
}
