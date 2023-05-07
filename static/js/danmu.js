function selectNum(lowNum,upNum) {
 var num = upNum-lowNum+1;
 // Math.floor() 向下取整
 return Math.floor(Math.random()*num+lowNum);
 };
         
let ps =document.getElementsByTagName("p");
let barrageList=[];
let topList=[];

for (var i = 0; i < ps.length; i++) {
    barrageList.push(ps[i].innerHTML);
    topList.push(selectNum(280,430));
}


let num = Math.floor(Math.random() * 10) // 随机生成一个数，然后取一个距离顶部的位置 

let barrageBox = document.querySelector('.screen')

function createBarrage(barrageList) {
    for (let index = 0; index < barrageList.length; index++) {
        (function (index) {
            setTimeout(() => {
                let num = Math.floor(Math.random() * 10)
                let div = document.createElement('div')
                div.innerText = barrageList[index]
                div.classList.add('box')
                div.style.top = topList[num] + 'px'
                div.style.color = 'rgb(' + my_rgb() + ')' //随机生成一个颜色的
                barrageBox.appendChild(div)
            }, index * 1000);
        })(index)
    }
}

createBarrage(barrageList)

// 动画循环播放 差不多就是所有的元素都走了一遍，才会一起走第二遍 时间的计算是这样的：每隔一秒生成一个，到最后一个走完，6s是走完一遍的动画，就是长度+6的时间，如果弹幕的数量足够多，这个可以删除
// var my_set = setInterval(() => {
//     barrageBox.innerHTML = ''
//     createBarrage(barrageList)
// }, (barrageList.length + 6) * 1000);

// 随机生成一个颜色的
function my_rgb() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return r + ',' + g + ',' + b
}





  $(function () {
        //设置“发送”按钮点击事件，将弹幕体显示在弹幕墙上
        $('.send').click(function () {
            //获取文本输入框的内容
            var val = $('.content').val();
       

            //将文本框内容用div包裹起来，便于后续处理
            var $content = $('<div class="text">' + val + '</div>');
            //获取弹幕墙对象
            screen = $(".screen");
            //设置弹幕体出现时的上边距，为任意值
            var top =  350;
            //设置弹幕体的上边距和左边距
            $content.css({
                top: top + "px",
                left: 10+"%",
                "color":"red",
                "font-size":30+"px"
            });
            $content.addClass("box")
            //将弹幕体添加到弹幕墙中
            $('.dm_show').append($content);
            var form = $("form").serialize();
            $.ajax({
                type: "GET",
                url: "/show",
                data: form,
                processData: false,
                contentType: false,
            });
            
            //将文本框的内容赋值给val后，将文本框的内容清除，以便用户下一次输入
            $('.content').val('');
            
        });
        

    });