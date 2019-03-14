function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  const allRanks=document.querySelectorAll(".ranked-list")
  for(let i=0;i<allRanks.length;i++){
    let content=parseInt(allRanks[i].innerHTML);
    content++
    allRanks[i].innerHTML=content
  }
}

function deepestChild(){
  let grandNode=document.querySelector('div#grand-node');
  while(grandNode.children[0]){
    grandNode=grandNode.children[0]
  }
  return grandNode;
}