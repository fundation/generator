<h1>Homepage</h1>

<ul>
{% for article in latestArticles %}
    <li>{{ article.title }}</li>
{% endfor %}
</ul>
