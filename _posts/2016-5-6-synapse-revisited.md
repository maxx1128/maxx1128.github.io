---
layout: post
title:  "Synapse Revisited - First Grids, then the World!"
date:   2016-05-06 07:40:02 -0500
categories: web-development
subheading: "After working out Synapse's bugs, it's gone from a grid system to a flexible, multi-purpose time-saver."
---

A few months ago I finished [Synapse](https://github.com/maxx1128/Synapse-Grid), a Sass grid-system trying to bring the simplicity of Expressive CSS without the bloat. It's come in handy for several projects but has been limited. I quickly found several bugs, big and small. Plus it'd eaten way too much fast food and got some serious artery problems.

I'm happy to say most of Synapse's bugs are gone and it's almost back to its original weight. While I'm leaving the fast food story to whatever daytime talk show makes the best offer, the rest I'm happy to explain. Its newfound flexibility makes it a useful time-saver for any front-end project. I've been using it on layouts, base styles, components, and almost everything else.

If you want a basic intro to what Synapse is, I recommend <a href="{% post_url 2016-1-5-synapse-expressive-component-css %}" target="_blank">reading my first post on it.</a> I lack the time and monetary compensation to review it all now. Otherwise this post will make less sense than I think it will.

### No more Zero-width breakpoints
**Problem:** Creating base styles meant setting a zero-pixel breakpoint. However, the resulting output had an unneeded media query:

{% highlight scss %}
@media screen and (min-width: 0) {
  article {
    width: 33.33333333%;
    padding: 0;
    margin-bottom: 0;
  }
}
{% endhighlight %}

This was tough, as the core Synapse code has a media query built around it. From what I know, it's impossible to make a media query conditional without making everything inside conditional too. Giving an option to use or not use a media query would mean writing Synapse's core Sass twice - with and without a media query. [This is terrible for keeping your code DRY.](http://alistapart.com/article/dry-ing-out-your-sass-mixins)

**Solution:** The answer was simple but not easy: put Synapse's main code in a mixin called *column-basics*, and use that mixin in both conditions. That way the code can be used twice while only writing it once.

{% highlight scss %}

// Sets up the media query and adds the basic grid properties and
// width based on the number of columns in the mixin
@if ($breakpoint-width == 0) {
  @include column-basics($breakpoint-width, $width-per, $utilities, $offset, $columns, $total-columns);
} @else {
  @media screen and (min-width: $breakpoint-width) {
    @include column-basics($breakpoint-width, $width-per, $utilities, $offset, $columns, $total-columns);
  }
}

{% endhighlight %}

This new mixin needs a lot of variables (all of them, really), but does the job. When Synapse detects a zero-width breakpoint, it skips the unneeded media query.

### Can Create Custom Utilities
**Problem:** Utilities were limited to the built-in Sass map. Since the general rule is "don't directly touch any third-party code," custom utilities couldn't be added. Even if they could, they'd be limited to single property-value pairs, which is no fun. And coders love fun!

**Solution:** Add a third condition when the core mixin looked for utilities. If they weren't in the utilities map, they'd search through a mixin with the utility as an argument.

You (presumably) guessed it, you can easily make this mixin! Just define the *synapse-custom* mixin, put in some conditionals, add styles, and it's ready.

{% highlight scss %}

@mixin synapse-custom($var) {
  @if ($var == 'big-font') {
    font-weight: 700;
    font-style: italic;
  } @elseif ($var == 'small-font') {
    font-weight: 300;
    text-decoration: underline;
    font-style: none;
  }
}

{% endhighlight %}

Congrats, *big-font* and *small-font* are now Synapse utilities.

Custom utilities can be simple or robust and can even use other mixins. This makes Synapse extraordinarily flexible and can be fine-tuned for many projects.

Added bonus: using misspelled or nonexistent utility classes won't break Synapse now. It'll look through the custom mixin, find nothing, add nothing, and carry on.

### Better Spacing Utility Classes
**Problem:** The utility map only allows for singular property-value pairs. This was a huge issue with some padding and margin values. It couldn't define top and bottom padding without touching the left and right sides, which would need two property-value pairs.

This wasn't a huge deal, but bothered me a lot. Synapse is about speedy and convenient Sass. Having to define padding for every individual side is neither. I wanted it to define top and bottom, left and right, and other side combos, while not affecting other padding.

This comes back to Synapse's utilities being limited to single property-value pairs. I couldn't ignore the problem anymore.

**Solution:** Like all other Sass issues, it's solved by pacing, brainstorming, angry kicking, giant pandas, and more conditionals.

Synapse's utilities are written into a Sass map with two keys: 'property' and 'value.' The mixin looks for both when needed and adds them to the CSS. The issue was it only looked for one of each. I had to make it tell the difference between one and two property-value pairs.

The answer has two parts. First, a common property to tell them apart called **num.**

{% highlight scss %}
border-b: (
  num: 1,
  property: box-sizing,
  value: border-box
),
center-m: (
  num: 2,
  property-1: margin-left,
  value-1: auto,
  property-2: margin-right,
  value-2: auto
),
{% endhighlight %}

Second, have Synapse check that before adding one or two lines of CSS.

{% highlight scss %}
@if (map-check($utilities-list, $utility-name) == true) {
    $num: map-deep-get($utilities-list, $utility-name, 'num');

    @if ($num == 1) {
      $property: map-deep-get($utilities-list, $utility-name, 'property');
      $value: map-deep-get($utilities-list, $utility-name, 'value');

      #{$property}: $value;
    } @elseif ($num == 2) {
      $property-1: map-deep-get($utilities-list, $utility-name, 'property-1');
      $value-1: map-deep-get($utilities-list, $utility-name, 'value-1');
      $property-2: map-deep-get($utilities-list, $utility-name, 'property-2');
      $value-2: map-deep-get($utilities-list, $utility-name, 'value-2');

      #{$property-1}: $value-1;
      #{$property-2}: $value-2;
    }
}
{% endhighlight %}

Now I could generate spacing utilities that affect only top and bottom padding without left and right. Those spacing values are still defined by custom values in the Synapse config so the coder keeps control of the results.

#### Can Add Utilities without Changing Widths
**Problem:** Every time Synapse was used, the coder had to define the number of columns for an element's width. This meant if one wanted to add only utilities at a breakpoint, Synapse would break and they were sad.

**Solution:** As always, an extra conditional saves us from sadness. Before it automatically got the width based on the columns used and the total columns. Now it does that only if you use a number for columns.

{% highlight scss %}

@if ($columns == $total-columns) {
  width: 100%;
} @elseif ($columns != 0) {
  width: $width-per;
}

{% endhighlight %}

What happens if someone uses zero columns? With this logic, nothing. It skips over the width and calculates the rest. Breaking and sadness averted.

### A Multi-Purpose Synapse

I first made Synapse only for grids and basic layouts. But these changes have made me use Synapse beyond that. It's easy to add common and repeated CSS properties both common and customized, in a way that's simple and fast. Linking it to breakpoints even makes it responsive-friendly. This goes well beyond grids and is now much more multi-purpose.

Synapse is still rooted in giving coders Expressive CSS's speed and fun with the Component CSS's efficiency. But I didn't expect it to go beyond basic layout with its uses. It'll never be a famous tool, but it'll be a regular time-saver in my Sass workflow. That's the best benefit I can ask for.