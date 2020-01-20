// function list() {
//
//     const $listWrap = document.getElementById("listWrap");
//     const $listItem = document.getElementsByClassName("listItem");
//     // const $listItem = document.querySelector(".listItem");
//
//     // button
//     const listAddBut = document.getElementById("listAddBut");
//     const $deleteBut = document.getElementsByClassName("delete_but");
//
//     const barWidth = document.getElementById("barWidth");
//
// }
//
//
// window.onload = function () {
//
//     document.querySelector(".delete_but").onclick = function () {
//         console.log('.delete_but');
//     };
//
//     const inputReset = document.getElementById('reset');
//
//     inputReset.onclick = () => {
//         console.log('리셋');
//         console.log(document.getElementById('new_list_text').value);
//
//         document.getElementById('new_list_text').focus();
//
//         // input.addEventListener("click", function(e) {
//             // document.getElementById('new_list_text').value = 11;
//         // });
//
//         };
//
//     listAddBut.onclick = () => {
//         newList();
//     }
// };
//
//
// function newList() {
//
//     if(textNode !== ''){
//         liContent()
//     }
//     else {
//         alert('내용을 입력해주세요');
//     }
// }
//
// function liContent(){
//
//     const node = document.createElement("LI");
//     const checkbox = document.getElementById('');
//
//     const textNode = document.getElementById('new_list_text').value;
//
//     if(textNode !== ''){
//         node.append(textNode);
//         document.getElementById('listWrap').appendChild(node);
//     }
//     else {
//         alert('내용을 입력해주세요');
//     }
// }