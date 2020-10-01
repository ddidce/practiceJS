const rankingList = [
    'a','b','c','d','e','섹시승학','자스고수승학','승학센세'
]

for(let i = 0, rankingListLength =  rankingList.length ; i < rankingListLength ; i++) {
    let ranking = rankingList[i];
    let li = document.createElement('li');
    li.innerHTML = ranking;
    document.getElementById('list').appendChild(li);
}