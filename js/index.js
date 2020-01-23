
document.getElementById('new_list_text');
document.getElementById('listAddBut');
document.getElementById('listWrap');


window.onload = function () {

    // 진행도
    const barWidth = document.getElementById('barWidth');
    barWidth.style.width = "150px";
    // 진행도

    // 등록클릭 (엔터처리도 해보자)
    document.getElementById('listAddBut').addEventListener("click", function () {
        if(document.getElementById('new_list_text').value !== '' ){
            setInputValue();
        }
        else {
            alert('텍스트를 입력해주세요.');
        }
    });

    const delete_but = document.getElementsByClassName('delete_but');

    // delete_but.addEventListener("click", function () {
    //     console.log('삭제되어야함');
    // });

    document.getElementById('listWrap').forEach(function(li) {
        li.addEventListener('click', function () {
            console.log('삭제되어야함');
        });
    });

};


// 등록버튼 누르면 input 내용 리스트에 추가하기
function setInputValue() {
    setListContent();
    document.getElementById('new_list_text').value = null;
    document.getElementById('new_list_text').focus();
}


// 리스트에 들어갈 콘텐츠 만드는곳 (체크박스, 내용, 버튼들)
function setListContent() {

    // 전부를 감쌀 li
    const node = document.createElement("LI");

    // 작성한 내용
    const textNode = document.createTextNode(document.getElementById('new_list_text').value);
    const textWrap = document.createElement("div");

    // console.log(textNode + 'hello');
    // console.log(textWrap + 'hello2');
    textWrap.appendChild(textNode);
    node.appendChild(textNode);


    console.log('gg');
    document.getElementById('listWrap').appendChild(node);
}



