<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <div>当前要点的奶茶是{{ list[result] }}</div>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          {{ item }}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>
