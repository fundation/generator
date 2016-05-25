<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>{{ title }}</title>

	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" />

	<link rel="stylesheet" href="{{ cdn }}/ui/css/common.css" />
	{% for cssFile in cssFiles %}<link rel="stylesheet" href="{{ cdn }}/ui/css/{{ cssFile }}" />{% endfor %}

</head>
<body>

	<header id="header">
		<h3 id="logo"><a href="/">Site Name</a></h3>
	</header>

	<div id="body">
	{% autoescape false %}{{ html }}{% endautoescape %}
	</div>

	<footer id="footer">
	</footer>

	<!--Application JavaScript Files-->
	<script type="text/javascript" src="{{ cdn }}/ui/js/common.js"></script>
	{% for jsFile in jsFiles %}<script type="text/javascript" src="{{ cdn }}/ui/js/{{ jsFile }}"></script>{% endfor %}

</body>
</html>
