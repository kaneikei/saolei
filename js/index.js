$(function()
{
	var row=17;
	var el="";
	for(var i=0;i<row*row;i++)
	{
		el += "<div></div>"
	}
	var colors=['pink','orange','yellow'];
	var hua=function()
	{
		$(".sence").html(el).find('div')
		.addClass(function(i,old)
		{
			return 'block orange';
		})
		.each(function(i)
		{
			$(this).data('index',i);
		})
		.end()
		.find("div:lt("+row+")").removeClass()
		.end()
		.find("div:gt("+(row*(row-1)-1)+")").removeClass()
		.end()
		.find("div:nth-child(17n)").removeClass()
		.end()
		.find("div:nth-child(17n+1)").removeClass()
		.end()
		.find(".block")
		.each(function()
		{
			if( Math.random()>0.8 )
			{
				$(this).data('islei','true')
				//.text('雷');
			}
		})
		.click(function()
		{
			if( $(this).data('islei') )
			{	
				setTimeout(function()
				{
					$('.faxian').css({display:'block'});
					$('.sencecopy').css({display:'block'})
				},1000)
				
				$('.sence .block').each(function()
				{
					if( $(this).data('islei') )
					{
						$(this).addClass('red donghua').css("animation-delay",((Math.random()*2).toFixed(2))+'s')
					}
				})
				
			}
			else
			{	var shuzi=0;
				var num=$(this).data("index");
				if( $('.sence div').eq(num+1).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num-1).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num-row).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num-row-1).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num-row+1).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num+row).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num+row+1).data('islei') ){shuzi+=1;}
				if( $('.sence div').eq(num+row-1).data('islei') ){shuzi+=1;}
				$(this).text(shuzi);			
			}
		})
	}
	hua();

	$('.hao').click(function()
	{
		$('.faxian').css({display:'none'});
		$('.sencecopy').css({display:'none'});
		hua()
	})
	$('.buhao').click(function()
	{
		$('.faxian').css({display:'none'});
	})
	$('.chongxin').click(function()
	{
		$('.faxian').css({display:'none'});
		$('.sencecopy').css({display:'none'});
		hua()
	})
})
