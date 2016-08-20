window.onload=function() {
    var one = document.getElementById("one");
    var show = document.getElementById("two");
    function showUl(){
        one.onmouseover = function(){
            show.style.display = "block";
            }
    }
    function hideUl(){
        one.onmouseleave = function(){
            show.style.display = "none";
        }
    }
    showUl();
    hideUl();

}
