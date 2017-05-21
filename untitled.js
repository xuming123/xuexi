 function move(e) {
       if(time){
           clearInterval(time);
           time= setInterval(next,2000)
       }
        var num=e+1;
        $("#lunbo ul").animate({left:-num*1200},400,function () {
            var left=parseInt($("#lunbo ul").css("left"));
            var num=-left/1200;
            //闪切逻辑
            if(num===0){
                $("#lunbo ul").css("left",-1200*5);
            }else if(num===6){
                $("#lunbo ul").css("left",-1200*1)
            }
            var liindex=-parseInt($("#lunbo ul").css("left"))/1200-1;
            $("#lunbo ol li").eq(liindex).addClass("select").siblings().removeClass()
           
        });
    }

    function getIndex() {
        return $("#lunbo ol .select").index()
    }

    function next() {
        var num=getIndex();
        move(num+1);
    }

    function prev() {
        var num=getIndex();

        move(num-1);
    }

    function init() {
        //小圆点绑定点击事件
        $("#lunbo ol li").click(function () {
            move($(this).index())
        })
    }
    init()
    time= setInterval(next,2000)



