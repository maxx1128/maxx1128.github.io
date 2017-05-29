---
title        : "Organizing a Smart Tic-Tac-Toe Game"
date         : 2017-05-29
categories   : programming javascript
excerpt      : Using a favorite JavaScript pattern of mine to code a simple yet challenging game
featured-img : /img/posts/structuring-tic-tac-toe/featured.png
---

I recently had the pleasure of presenting at Bethel Middle School' yearly career day. It was the same fare as last year: explain front-end and back-end programming, describe my own job, show some examples, deal with students that were either too loud or too quiet, and make cryptic remarks how my sister was likely their English teacher.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Thank you to everyone who volunteered at the BMS Career Fair, especially <a href="https://twitter.com/Maxwell_Dev">@Maxwell_Dev</a> ! :) <a href="https://t.co/wfgfZ1Hdzk">pic.twitter.com/wfgfZ1Hdzk</a></p>&mdash; Allison Antonucci (@AANT176) <a href="https://twitter.com/AANT176/status/865652104274128896">May 19, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Something I made specifically for this was a tic-tac-toe game written with JavaScript. My goal was more than the opponent randomly selecting open squares - it actively tries to block the player's wins and take its own. We played a couple rounds, I explained some of the code, showed them said code, got uncomprehending stares, felt a bizarre satisfaction, and repeated.

In this post I thought I'd explain the general structure of the game's code. I could explain the specifics, but that'd take away the fun of discovering it yourself, wouldn't it? But I will write how, despite the complexity, I kept it maintainable, organized, and DRY.

### Using Containerized JS

Containerized JS is a pattern a past colleague taught me to keep JS functionality from leaking out. While working on a Pattern Library, we had issues where one component's JS was inadvertently affecting others. This happened even more with multiple component copies on that page, and click events hit each one in the DOM.

This pattern fixes that by limiting all JS to the DOM within that component, "containing" it to stop leaks. The basic structure I use is below:

{% highlight javascript %}
function containerized_function(patternId) {
    let pattern = $("#" + patternId);

    // Consistent component variables
    const v = {};

    // Reusable functions, used frequently the component
    const f = {};

    // What to do when the page loads
    function init() {}

    // Events triggered by the user, mostly click events
    function setEvents() {}

    // Running the initial and event functions when page loads
    function docReady() {
        init();
        setEvents();
    }

    $(document).on({ ready: docReady() });
}

$(".component").each(function() {
    var id = $(this).attr("id");

    if (typeof id === typeof undefined && id !== false) {
        id = "IDUNIQUE_" + Math.floor(Math.random() * 999999999999 + 1);
        $(this).attr("id", id);
    }

    containerized_function(id);
});
{% endhighlight javascript %}

First is the "containerized function" - that's where the most important stuff happens. There's a few important parts to be aware of:

* `pattern` is declared right from the start, storing the components entire DOM for easy reference. We'll come back to common uses for it in a bit.
* `const v` stores any consistent variables for the component. For example, if an array of strings must be used or mapped in several events, I'd place them here. It's stored in the variable `v` so it's easy to reference. When someone sees `v.bank_limit`, they'll know it's a consistent variable outside of that specific event.
* `const f` is the same as above, but with consistent functions. Any frequently used mapping or calculation functions go here, stored in a similar variable for the same reasons.
* `init()` is for any functionality triggered when the component first loads before anything else. I access the DOM through the `pattern` variable, such as `pattern.find('.element').text('new text here');` This ensures I change the DOM of that specific component and nothing else.
* `setEvents()` is where most of the important stuff goes - click events. Triggers are also set through the `pattern` variable. For example, `pattern.on('click', '.element', function(){ ... });` sets a click event for the targeted element only in this component. This syntax works even if the initial DOM changed.

After that, that small bit of code below does the rest. It scans the page, finds every components for the function, gives them unique IDs (if they need them), and runs the function.

There you go! Each component has that functionality contained in its own DOM. Even with several on one page, the functions and variables are independent of each other.

There's some obvious benefits to all this:

* It's very modular, easy to add and remove into a project without complications. In the containerized function itself, each piece - variables, functions, events - are separate and easy to organize.
* The pattern's scope is limited to avoid accidental triggers in anything else.
* It can be easily used as a JS module. The code triggering the containerization can be separated like this:

{% highlight javascript %}
exports.component_init = function(selector, component_function) {
  $(selector).each(function(){

    var id = $(this).attr('id');
    
    if ( typeof id === typeof undefined && id !== false ) {
      
      id = 'IDUNIQUE_' + Math.floor((Math.random() * 99999999999999999) + 1);;
      $(this).attr('id', id);
    }
    
    component_function(id);
  });
}
{% endhighlight %}

In the JS file with the containerized function, it can then export the function:

{% highlight javascript %}
let f = require('./functions');

function containerized_function(patternId) {
    // Function stuff goes here!
}

exports.activate = function(selector) {
  f.component_init(selector, containerized_function);
}
{% endhighlight %}

Finally, you'd require and use it in your main file with the selector:

{% highlight javascript %}
let component = require('./component');

component.activate('.component-class');
{% endhighlight %}

There it is - easy, portable, and customizable.

### Containerizing the Game

The final result using this pattern worked nicely and is [on CodePen.](https://codepen.io/max1128/pen/JNbyaL/) Here's a broad overview of what's in each part of the containerization:

* The variables have frequently referenced game data: all the board positions, winning combinations, and near-winning combinations. I wound up writing out all 24 near-wins, along with how to win them, so it's the largest variable by far - but also the most important for a challenging game.
* Functions is vital since it has several key pieces: checking if the match is over, letting the player or opponent select a square, finding what spaces are open, and so on. Most are simply shortcuts for getting info, often using the variables and board DOM, and only a few change the visible game.
* No `init` functions needed here.
* As you may have guessed, there's only one click event: when the player makes a move. It references variables and functions already made, so creating the event itself is easy.

The final game is below - scroll through the JS and play a round or two!

<p data-height="445" data-theme-id="0" data-slug-hash="JNbyaL" data-default-tab="js,result" data-user="max1128" data-embed-version="2" data-pen-title="Tic Tac Toe" class="codepen">See the Pen <a href="https://codepen.io/max1128/pen/JNbyaL/">Tic Tac Toe</a> by Maxwell Antonucci (<a href="https://codepen.io/max1128">@max1128</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### In Conclusion

This containerization pattern didn't make the code for key game functions any easier to figure out. Having the computer play smarter than some random square selection still gave plenty of puzzles to solve and walls to bang my fist on. But it did give an easier structure for laying out all the different puzzle pieces and putting them together.

So if you're coding in a modular environment, especially something like a pattern library, and need a reliable JS component pattern, this one's definitely worth a try!





