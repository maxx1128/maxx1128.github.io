---
title        : "Making a Custom Lorem Ipsum Generator"
date         : 2017-06-04
categories   : programming javascript
excerpt      : Fancy placeholder text generator is possible with just three JavaScript functions
icon         : codepen
featured-img : /img/posts/make-custom-lorem-ipsum-generator/featured.jpg
---

My first official app idea came in a weird way. I needed placeholder text for a web project and thought, "There's lots of weird Lorem Ipsum makers out there. Is there one for my favorite video game?" That game is the Ace Attorney franchise. And no, there wasn't. Cue personal outrage.

Fast forward to today, and [Ace Attorney Ipsum](http://www.aceattorneyipsum.com/) is now available for all, deployed on Heroku as a simple Node app.

It doesn't have much complex code since, unsurprisingly, spitting out random text isn't that tough. But I thought I'd break down the steps to making a custom Lorem Ipsum generator with JavaScript, since it was an easy yet enjoyable challenge. Hopefully someone reading this can make placeholder text from their favorite franchise available to the world too!

### Make an Array of all the Text

The first step was obvious: I needed quotes. A LOT of quotes. In my case I got lucky and found the [WikiQuote page](https://en.wikiquote.org/wiki/Ace_Attorney) for all the released Ace Attorney games at that time. The page was just what I needed - I just had to copy the HTML, remove the tags, put them in a JS array, clean up the punctuation, and it was done. My final result looked like this:

{% highlight javascript %}
const lines = [ 
    "Random sentences go here, one at a time!",
    "Here's another one! Just keep adding them on.",
    "Look, here's another one.",
    "And yet another. Along with dozens of others."

    // ...lots of other lines here
];
{% endhighlight %}

The more lines the better, and mine has at least 1300. Obviously this is overkill, and 100 lines should be a safe minimum. You can maybe get away with less, since people likely won't care about some repeat lines every now and then.

### Get a Random Line

I worked backwards from my final goal of creating paragraphs of Lorem Ipsum. For that I'd need to make a paragraph. For that I'd need a random bit of text.

I started with getting a single line from the array. The function is simple with ES6 and fits in one line:

{% highlight javascript %}
const random_quote = () => lines[Math.floor(Math.random() * lines.length)]
{% endhighlight %}

### Make a Random Paragraph

Using `random_quote()` now gives me a random quote! Now I needed to do this several times to make a paragraph.

The function for that was slightly less simple. The only difference is setting the number of lines. I wanted some variance for a mix of short and large paragraphs. This function gets 3-6 random quotes and puts them together like so:

{% highlight javascript %}
const random_paragraph = () => {
  let
    num = Math.floor(Math.random() * (6 - 3 + 1) + 3),
    lines = ''
  ;

  for (var i = 0; i < num; i++) { lines += (random_quote() + ' '); }

  return lines;
}
{% endhighlight %}

### Make Lots of Random Text

Now `random_paragraph()` makes a placeholder paragraph. The last task was making lots at once.

The catch is I wanted to let users decide how many paragraphs. This function accepts a parameter to do just that. Plus this is final function the app used, so I needed to export it.

{% highlight javascript %}
exports.ipsum = function(num) {
  let ipsum = [];

  while ( ipsum.length < num ) { ipsum.push(random_paragraph()); }

  return ipsum;
}
{% endhighlight %}

Now it can make any number of Lorem Ipsum paragraphs a user asks for! Here's how it's used in the app itself, using Express for the routing:

{% highlight javascript %}
let
  express   = require("express"),
  router    = express.Router(),
  generator = require('./_javascript/ipsum')
;

router.get("/", function(request, response) {

  response.render("index", {
    title: "Ace Attorney Ipsum",
    ipsum: generator.ipsum(3)
  });
});

router.post("/", function(request, response) {

  let paragraphs = request.body.paragraphs

  response.render("feed", {
    title: "Take That!",
    ipsum: generator.ipsum(paragraphs)
  });
});
{% endhighlight %}

I use this `generator.ipsum` function twice. The first creates three example placeholder paragraphs on the homepage. The second creates however many a user asks for from the homepage. The output is an array without `<p>` tags, so the template adds those when looping through the `ipsum` variable.

### Keeping a Modular Approach

Once the functionality was done, I decided against combining these three functions into a single exportable one in the name of maintainability. **Three simpler functions are always better understood than a single, large one.** Plus if I want to use these pieces elsewhere, each is already separate and easy to carry over. The code's more readable and flexible in the long-run.

I encourage keeping this modular approach if someone uses these three functions for their own Lorem Ipsum generator. Or even better, find a different approach! One of my favorite parts of coding is the same problem has near-infinite solutions. And Lorem Ipsum generators are one of those great projects that's simple, but allows for creative solutions.

So choose your own favorite video game or television franchise, find some quotes, and give it a try! I'm sure your fellow fans will enjoy it too.
