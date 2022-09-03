

        $(document).ready(function(){
            $('.example').izoomify();
        })
            $(document).ready(function(){


    $("#wrapper .item").click(function(){
        var thisclicked = $(this); 
        $("#wrapper .item").removeClass('active');
        thisclicked.addClass('active');
        var selected = $(this); 
        var src = selected.closest('#wrapper .item.active').find('img').attr('src');
        $('#wrapper .showImg img').attr("src", src);
        $('.example').izoomify();

    });
});
$(document).ready(function(){

    var scroll = $("#wrapper .img-container");
    $("#wrapper .navigation-button.left").click(function(){
        var item =   $("#wrapper .item");
        var location = $('#wrapper .item.active').attr('data-location');
        item.removeClass('active');
        for (i = 0; i < item.length; i++) {
            var j = item.length - 1;
            if(location === '0'){
                item.eq(j).addClass('active');
                scroll.animate({scrollLeft: $(item.eq(j)).offset().left}, '500');
                var src = $('#wrapper .item.active img').attr("src"); ;                 //var src = selected.closest(item[i]).find('item').attr('src');
                $('#wrapper .showImg img').attr("src", src);
            }
            else{
                if(location === i.toString()){
                    item.eq(i-1).addClass('active');
                    var leftPos = $('#wrapper .img-container').scrollLeft();
                    $("#wrapper .img-container").animate({scrollLeft: leftPos - 94}, 1);
                    var src = $('#wrapper .item.active img').attr("src"); ;                 //var src = selected.closest(item[i]).find('item').attr('src');
                    $('#wrapper .showImg img').attr("src", src);
                }
            }
        }
       $('.example').izoomify();


    });
    $("#wrapper .navigation-button.right").click(function(){
        var item =   $("#wrapper .item");
        var location = $('#wrapper .item.active').attr('data-location');
        item.removeClass('active');
        for (i = 0; i < item.length; i++) {
            var j = item.length - 1;
            if(location === j.toString()){
                item.eq(0).addClass('active');
                $("#wrapper .img-container").animate({scrollLeft: 0}, 1);
                var src = $('.item.active img').attr("src"); ;                 //var src = selected.closest(item[i]).find('item').attr('src');
                $('#wrapper .showImg img').attr("src", src);
            }
            else{
                if(location === i.toString()){
                    item.eq(i+1).addClass('active');
                    var leftPos = $('#wrapper .img-container').scrollLeft();
                    $("#wrapper .img-container").animate({scrollLeft: leftPos + 94}, 1);
                    
                    var src = $('#wrapper .item.active img').attr("src"); ;                 //var src = selected.closest(item[i]).find('item').attr('src');
                    $('#wrapper .showImg img').attr("src", src);
                }
            }
        }
        $('.example').izoomify();

    });
})
$(document).ready(function(){
    var item = $("#wrapper .item");
    for (i = 0; i < item.length; i++) {
        var j = 'jj'+i.toString();
        item.eq(i).addClass(j);
    }
});



$(document).ready(function(){

    var arrObject = new Array();
    var item = $("#wrapper .item");
    for (i = 0; i < item.length; i++) {
        var k = '.jj'+i.toString();
        arrObject.push(k);
        load_data(k);
    }            
    function load_data(j){
            const isHover = e => e.parentElement.querySelector(':hover') === e;    
            const myDiv = document.querySelector('#wrapper .item'+j);
        var src = $('#wrapper .active .showImg img').attr("src");
        document.addEventListener('mousemove', function checkHover() {
        const hovered = isHover(myDiv);
        if(hovered !== checkHover.hovered) {
            if(hovered){
                var s =  document.querySelector('#wrapper '+j+' img').getAttribute('src');
                $('#wrapper .showImg img').attr("src",s);
            }
            else{
                $('#wrapper .showImg img').attr("src",src);
            }
            checkHover.hovered = hovered;
            }
            });
        }


    })
    


    $(document).ready(function(){
        $("#ImagesTab .close").click(function(){
            $("#tab-views").removeClass('active');
        });
        $("#wrapper .showImg").click(function(){
            var src= $('#wrapper .showImg img').attr("src");
            $("#tab-views").addClass('active');
            var item =   $("#tab-views .item");
            var location = $('#wrapper .item.active img').attr('src');
            for (i = 0; i < item.length; i++) {
                var location = $('#wrapper .item.active img').attr('src');
                var selected = item.eq(i); 
                var src = selected.closest('.item').find('img').attr('src');
                if(location === src){
                    $("#tab-views .item").removeClass('active');
                    item.eq(i).addClass('active');
                    $('#tab-views .showImg img').attr("src", location);

                }
            }
        
        });
    });

    
$(document).ready(function(){
    $("#tab-views .item").click(function(){
        var thisclicked = $(this);
        
        $("#tab-views .item").removeClass('active');
        thisclicked.addClass('active');
        
        
        var selected = $(this); 
        var src = selected.closest('#tab-views .item.active').find('img').attr('src');
        $('#tab-views .showImg img').attr("src", src);
    });
});

$(document).ready(function (){
    document.querySelector('#tab-views .item.active').style.display = "none";

    
})
