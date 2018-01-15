var watchAt = {
	judgeIsAt:function(parm){
		if (parm.value.substring(getCursor(parm).start-1,getCursor(parm).start) == '@'){
			// document.querySelector(".textbox").style.display="block";
            this.getCurrentPosition(parm)
		}else{
            // document.querySelector(".textbox").style.display="none";
            $('.textbox').hide()
        }
	},
	getCurrentPosition:function(parm){

          $('#positionTheText').html('')
          var str="<span>"+parm.value.substring(0,getCursor(parm).start-1)+"</span><cite style='position:relative;'>@</cite><span>"+parm.value.substring(getCursor(parm).start,parm.value.length)+"</span>"
          $('#positionTheText').append(str)
          var _left = $('#positionTheText cite').offset().left+20 +'px'
          var _top = $('#positionTheText cite').offset().top+20 +'px'
          /*-------以下是ajax成功后获取的---------*/
          $('.textbox').css({'left':_left,'top': _top}).show()
	},
	insteadAt:function(){

	},
	saveTheAtText:function(){

	}
}

     function getCursor(elem) {   
        var _this=this;   
        var rangeData = {   
            start: 0,   
            end: 0,   
            text: ""   
        };   
        if(typeof(elem.selectionStart)=="number") {//W3C   
            rangeData.start=elem.selectionStart;//光标起始位置   
            rangeData.end=elem.selectionEnd;//光标末尾位置   
            rangeData.text=elem.value.substring(0,elem.selectionStart);//获取文本框value   
        } else if (document.selection) {//IE   
            var sRange=document.selection.createRange();   
            var oRange=document.body.createTextRange();   
            oRange.moveToElementText(elem);   
            rangeData.text=sRange.text;   
            rangeData.bookmark = sRange.getBookmark();   
        for(i=0;oRange.compareEndPoints("StartToStart",sRange)< 0 && sRange.moveStart("character", -1) !== 0; i ++) {   
                if (elem.value.charAt(i) == '\r') {   
                    i ++;//IE的特殊处理，遇到enter键需要加1   
                }   
            }   
            rangeData.start=i;   
            rangeDatarangeData.end = rangeData.text.length + rangeData.start;   
            rangeData.text=this.elem.value.substring(0,i);   
        }   
        //alert(rangeData.text)   
        return rangeData;   
    }

$('.textbox').on('click','li',function(){
    var str = ' @'+$(this).html()+'&nbsp'
    $('#positionTheText cite').html(str)
    $('#atText').val( $('#positionTheText').text())
    $(this).parents('.textbox').hide()
})

