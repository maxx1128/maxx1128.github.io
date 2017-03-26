---
title:  "Synapse: Combining Expressive and Component Grids"
date:   2016-1-7
categories: web-development
excerpt: In the great struggle between an Expressive or Component grid system, I made my own compromise.
---

Recently I've had a major dilemma with creating website layout between Expressive and Component CSS. Did I want the simplicity and fun of the first, or the control and efficiency of the second?

In the end I couldn't decide, so I coded a quick grid system for the best of both worlds: Synapse.

### First, What's Expressive CSS?

[Expressive CSS](http://johnpolacek.github.io/expressive-css/) is a tried and true CSS philosophy around simple, straightforward CSS. It makes adding styles as easy as possible, often with **utility classes**, or basic style classes.

Layouts are made mainly through adding HTML classes. They'd affect width, padding, text, and other basic styles. Here's a 12-column grid layout example:

{% highlight html %}
<div class="row">
	<section class="columns small-12 small-10 small-offset-1">
		<article class="columns small-12 medium-6 large-3 text-left"></article>
		<article class="columns small-12 medium-6 large-3 text-left"></article>
		<article class="columns small-12 medium-6 large-3 text-left"></article>
		<article class="columns small-12 medium-6 large-3 text-left"></article>
	</section>
</div>
{% endhighlight %}

You see this a lot in web frameworks, such as Bootstrap and Foundation. In fact, this example is how you'd make a layout with the latter: using only classes to define element widths at certain breakpoints.

##### The Good about Expressive Grids

The biggest Expressive Grid benefit is **making layouts straightforward and simple.** Just add the classes and you're done. Need to add some padding or align the text? Add some more classes. Easy and fast, which is always a huge plus for complex projects with deadlines (or any project, really). It's so easy it's even enjoyable at times.

##### The Bad About Expressive Grids

As you may have guessed, all these utility classes **take up a lot of CSS.** Each I've seen has been between 1000-3000 lines. This is a lot when you consider:

*	You likely won't use each utilities in one project.
*	There's also CSS for styling not covered by utilities.

In a time where the [websites are getting too bloated](http://idlewords.com/talks/website_obesity.htm), this can be a big problem.

The other drawback is **crowded HTML classes.** The example above is relatively tame. Some cases each element may have a dozen or more classes for sizing, padding, or others. Organizing them all on many elements can get exhausting, and make HTML markup tough to maintain.

### What About Component CSS?

[Component CSS](http://www.sitepoint.com/introducing-ccss-component-css/) is another CSS coding philosophy. It's has too many details for this post, but the parts I want to highlight are:

*	Sass partials and mixins to break CSS into manageable chunks.
*	Concise CSS without unneeded styles
*	Keep HTML elements to one or two classes

For a Component CSS layout, you may have something like this for HTML:

{% highlight html %}
<section class="news">
	<article class="news-piece"></article>
	<article class="news-piece"></article>
	<article class="news-piece"></article>
	<article class="news-piece"></article>
</section>
{% endhighlight %}

And you would use Sass mixins and variables to make this 12-column layout.

{% highlight scss %}
.news { @include span(12); }

.news-piece {
	@include span(12);

	@include susy-breakpoint($medium-screen) { 
		@include span(6);
		text-align: left;
		padding: .5em; 
	}

	@include susy-breakpoint($large-screen) { 
		@include span(3); 
		padding: 1em;
	}
}
{% endhighlight %}

These are rough examples, but the result is basically the same as before: each article is full width on mobile, half width on medium screens, than one-fourth on large ones. Examples of this grid system are Susy (used above for float-based grids), and [Ellisha](http://maxwellantonucci.com/Ellisha/), my own Flexbox grid.

##### The Good with Component Grids

From my experiences, good and bad points here are the opposite of Expressive CSS.

Component CSS means **no wasted CSS.** Tying layouts to mixins means that code is only added as you use it. As long as your layout is concise, your code will be too.

**HTML classes are easier to manage**. Elements are tied to only one or two so markup is more maintainable.

##### The Bad with Component Grids

There's one big drawback with this approach: **The CSS can get very hard to maintain.** Sites layouts can get very complex, likely with different selectors and elements getting nested very deep. Layout CSS risks getting mixed with the rest of it, making it even more convoluted. So much more focus on the CSS means more risk of it getting too complex to manage.

### Choosing Between Them

As a coder, I've used Component CSS for a while but have recently struggled between the two again. I wanted the focus and efficiency of a Component grid, but also the simplicity and enjoyment of an Expressive one. How could I get the best of both worlds?

Eventually I got the idea to combine them into my own little grid system. One to make a layout with the same Expressive CSS style but in a Component CSS fashion. So Synapse was born! 

##### How Synapse Works

First off, you set Synapse's settings with a map:

{% highlight scss %}
$synapse: (
	columns: 12,
	layouts: (
	    xs:  0px,
	    sm:  480px, 
	    md:  787px,
	    lg: 1024px,
	    xlg: 1200px
	),
	spaceUnits: (8px, 1em, 2em, 3em, 4em),
	side-margin: 1em
);
{% endhighlight %}

Each option lets you tailor the grid to your layout's needs.

*	**Columns:** number of coumns for your layout.
*	**Layouts:** the breakpoints and their labels. You can add as many or little as you want. Shorter ones are encouraged.
*	**Space units:** units of spacing, margin or padding, you want as options for your grid. Again, use as many as you want.
*	**Side margin:** the total split gutter between columns.

##### Using the Synapse Mixin

Now the mixin is ready to make your responsive layout. For the same collection of articles, you'd write this:

{% highlight scss %}
.news { @include @syn(12, xs, 0, ('')); }

.news-piece {
	@include @syn(xs, 12, 0, (''));
	@include @syn(md, 6, 0, (pad-1, align-left));
	@include @syn(lg, 3, 0, (pad-2));
}
{% endhighlight %}

A breakdown of the mixin's arguments:

*	First is **the set breakpoint for each width.** Articles are full width on small screens, go to half-width on medium ones, and one-fourth on large ones.
*	Second is the **number of columns the element will use.** In this 12-column grid, it'd be 12 for the whole screen, 6 for half, and 3 for one-fourth.
*	Third is **the offset element.** If you wanted to push the element two columns forward, it'd be 2. You can also pull it backwards by making it -2.
*	Fourth is **any utility classes for that breakpoint.** These include spacing utilities set from the settings. If your first spacing unit was .5em, then pad-1 would add that much padding on all sides. Then pad-2 would add 1em of spacing, marg-1 would add 1em of margin, and so on. Plus there's utility classes for text-align, float, display, and others.

**Note:** Unless you override them, utility classes carry over to larger breakpoints. If pad-2 wasn't used for the large breakpoint, then pad-1 would still take effect. If you don't add another align utility, the text will stay left-aligned.

##### All the benefits, no drawbacks

For the most part, Synapse gets the benefits of both worlds without the pitfalls.

*	**No wasted styling code:** Since Synapse is mixin-based, it only adds code when the mixin is used. No bloat from unneeded utilities.
*	**No excessive HTML classes:** Layout and utility CSS properties are all added in the classes you set for it. No need to manage lots of classes per element.
*	**Simpler Sass:** Setting the breakpoints, offset, and utilities only needs one mixin. No risk of specificity creep or long Sass sheets.
*	**Grids are simple, fast, and fun:** It's so easy to mess with the breakpoints, widths, and utilities all at once, it gets fun!

Synapse still has a ways to go, but I feel confident I can keep working out the glitches. In the very likely event it doesn't get famous, it'll still be useful for my own projects. I encourage any developers stuck between Expressive and Component CSS grids to try it out!