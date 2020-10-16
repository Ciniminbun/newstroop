function randomNews(){
    const aList = ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12', 'g13', 'g14', 'g15', 'g16', 'g17', 'g18', 'g19', 'g20', 'g21', 'g22', '032420', '032520', '032520-2', '042920', '051520', '060220'];
    var rArticle = aList[Math.floor(Math.random() * aList.length)];
    var url =  "articles/" + rArticle + ".html"
    window.open(url, "_blank")
    }