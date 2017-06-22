

// jQuery
$(document).ready(()=>{

    let list = ['./image/overwatch1.jpg', './image/overwatch2.jpg'];
    let count = 0;

    function nextBackground() {
        $('#main-img').attr('src', list[count = ++count % list.length]);

        setTimeout(nextBackground, 5000);
    }

    // setTimeout(nextBackground, 5000);

    setInterval(function () {
        $("#main-img")
            .fadeTo(2000, 0, function(){
                $("#main-img").attr('src',list[count = ++count % list.length])
            })
            .fadeTo(2000, 1)
            .delay(3000);
    });

    $("#main-img").click(()=>{
        // $('#main-img').attr('src', list[count = ++count % list.length]);

    });

    $('.navbar-item').click((event)=>{
        alert($("#" + event.target.id).attr('id'));
    });
});

