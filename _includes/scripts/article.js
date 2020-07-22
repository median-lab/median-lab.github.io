(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  window.Lazyload.js(SOURCES.jquery, function() {
    $(function() {
      var $this ,$scroll;
      var $articleContent = $('.js-article-content');
      var hasSidebar = $('.js-page-root').hasClass('layout--page--sidebar');
      var scroll = hasSidebar ? '.js-page-main' : 'html, body';
      $scroll = $(scroll);

      $articleContent.find('.highlight').each(function() {
        $this = $(this);
        $this.attr('data-lang', $this.find('code').attr('data-lang'));
      });
      $articleContent.find('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').each(function() {
        $this = $(this);
        $this.append($('<a class="anchor d-print-none" aria-hidden="true"></a>').html('<i class="fas fa-anchor"></i>'));
      });
      $articleContent.on('click', '.anchor', function() {
        $scroll.scrollToAnchor('#' + $(this).parent().attr('id'), 400);
      });
    });
  });
})();

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
  };
})();