---
title        : "Make a Custom Lorem Ipsum Generator"
date         : 2017-06-02
categories   : programming javascript
excerpt      : Making a custom placeholder text generator is possible with just three JavaScript functions
featured-img : /img/posts/make-custom-lorem-ipsum-generator/featured.jpg
---

### Make an Array of all the Text

{% highlight javascript %}
const lines = [ 
    "Random sentences go here, one at a time!",
    "Here's another one! Just keep adding them on.",
    "Look, here's another one.",
    "And yet another. Along with dozens of others."

    // ...lots of other lines here
];
{% endhighlight %}

### Pull a Random Line

{% highlight javascript %}
const random_quote = () => lines[Math.floor(Math.random() * lines.length)]
{% endhighlight %}

### Make a Paragraph of Random Lines

{% highlight javascript %}
const random_paragraph = () => {
  let
    num = Math.floor(Math.random() * (6 - 3 + 1) + 3),
    lines = '',
    counter = 0
  ;

  while ( counter < num ) {
    lines += (random_quote() + ' ');
    counter++;
  }

  return lines;
}
{% endhighlight %}

### Return a Number of Random Paragraphs

{% highlight javascript %}
exports.ipsum = function(num) {
  let ipsum = [];

  while ( ipsum.length < num ) { ipsum.push(random_paragraph()); }

  return ipsum;
}
{% endhighlight %}
