(function () {
	var page__header = document.getElementsByClassName('page__header')[0];
	var header = document.getElementById('hd');
	var content = document.getElementById('con_main');
  var articleCover = document.getElementsByClassName('article__header--cover')[0];
	var oTop = content.offsetTop;
	var martop = page__header.outerHeight;
	var sTop = 0;
	// 监听页面的滚动
	window.onscroll = function () {
	    // 获取页面向上滚动的距离
	    sTop = document.documentElement.scrollTop || document.body.scrollTop;
	    page__header.style.position = 'fixed';
	    page__header.style.top = '0';
      page__header.style.right = '0';
      page__header.style.left = '0';
      articleCover.style.marginTop = '80px';
	    // if (oTop>sTop>0) {
	    //     header.style.background = 'rgba(0,0,0, .15)';
	    // } else if (sTop>oTop) {
	    //     header.style.background = 'rgba(0,0,0, .8)';
	    // }
	};
})();
