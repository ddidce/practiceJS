const rankingList = [
    'a','b','c','d','e','섹시승학','자스고수승학','승학센세'
]

for(var i = 0 ; i < rankingList.length ; i++) {
    var ranking = rankingList[i];
    console.log(ranking);
    var li = document.createElement('li');
    li.innerHTML = ranking;
    document.getElementById('list').appendChild(li);
}