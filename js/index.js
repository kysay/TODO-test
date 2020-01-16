

function list() {

    const $listWrap = document.getElementById("listWrap");
    const $listItem = document.getElementsByClassName("listItem");

    // button
    const $deleteBut = document.getElementsByClassName("delete_but");

    console.log($deleteBut.target);
    $deleteBut.addEventListener("click", function () {
        console.log('1')
    });

}
list()