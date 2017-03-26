---
title:  "My Eight Coding Laws"
date:   2016-05-20
categories: web-development philosophy
featured-img: /img/posts/coding-commandments/featured.png
excerpt: Having a firm, clear set of rules helps a lot in web development. These aim for modular, maintainable code at all times.
---

The good and bad about web projects is they can get complex. It's good because one can make incredible things limited only by imagination, free time, and lack of social life. It's bad because overly-complex projects are hard to maintain, slowly break down, and eventually self-destruct.

For the sake of work and insurance premiums, complexity must be kept at bay. Not removed altogether, as we then couldn't savor others' bemused expressions when showing off our work. Coders just need to control and manage their project's complexity so it scales without breaking.

This isn't new info. The fun part comes when coders talk about **how** they control it. There's no set in stone rules. Some are common, some are rare, all depend on the person.

In my case, I have eight general yet firm rules for my code. They keep it modular, editable, and easier to manage. I won't scream them from the rooftops as the token to our salvation. But I'll share them for other front-end coders looking to write or improve their own rules.

Plus my megaphone is broken and there's no tall rooftops in my neighborhood. So let's begin!

#### Thou Shalt Write Lots of Inline Comments

Informative comments in code seem like a chore. One that takes too much time, especially for projects with deadlines. This does not matter. For the love of a supposed God, write lots of comments.

I've learned their importance first-hand. At the start of the year I finished up a prototype. Earlier this month I had to make some changes. Looking through it was like going through a familiar maze after being spun around, blindfolded, and all signs were written in German.

No matter how obvious the code was to me before, enough time will take that away. Inline comments are the simplest, most effective way I've found to avoid this. For me, [inline comments](https://seesparkbox.com/foundry/lets_write_beautiful_css_comments) should be for:

* Each page's basic function - put at the very top.
* Variables - what they're used for and their unit of value.
* Loops or functions - use, output, arguments, and examples.
* *Any* complex chunks of code - to avoid future "look at it weep" situations.

#### Thou Shalt not Style Components Through Parent Elements

Modular CSS is written it can easily go from one project to another. Elements' styles must be totally independent, or at least easily editable. A common way I've broken this rule is making important styles reliant on containers.

> CSS Components must have styles completely independent of elements around them.

For example, let's say I had a slider full of pirate ship pictures called a Pirate Slider. Normally the Pirate Slider is full width, but I made it half-width inside an article container. That's convenient for this code, but now using it's harder to use my Pirate Slider in other projects. That's because code *outside* the component is effecting it so much. The component becomes more of a hassle to use.

Simple lesson from our Pirate Slider: don't have any styles rely on container or parent elements. **Especially widths, floats, padding, or margins**, as they're the most noticeable and volatile ones.

#### Thou Shalt Always Use Scoped Variables in Component Style Sheets

A common issue I've faced moving components from one project to another: it's full of variables and values unique to that project. Restyling means going through the sheet several times replacing them, checking if I've missed any, finding some, and repeating at least three times. Imagine doing this every time a component is used elsewhere and don't feel frustrated. I'll wait.

The makers behind Bourbon's [Refills](http://refills.bourbon.io/) knew about this when making web components designed to be dropped into projects. All important values are held in unique, local scope variables atop the page. Changing the core styles is as easy as changing the variables.

{% highlight scss %}

.accordion-tabs {
  $base-border-color: #dcdcdc !default;
  $base-border-radius: 3px !default;
  $base-background-color: #fff !default;
  $base-spacing: 1.5em !default;
  $action-color: #477dca !default;
  $dark-gray: #333 !default;
  $light-gray: #ddd !default;
  $medium-screen: 40em !default;
  $tab-border: 1px solid $base-border-color;
  $tab-content-background: lighten($light-gray, 10);
  $tab-active-background: $tab-content-background;
  $tab-inactive-color: $base-background-color;
  $tab-inactive-hover-color: darken($light-gray, 5);
  $tab-mode: $medium-screen;

// Rest of styles and selectors go here

}

{% endhighlight %}

I don't do this for every component's styles, since it's too much work. It has to meet these criteria:

* It's separate from the project's base styling, like typography or colors.
* It's styled mainly with unique classes. At the very least, all first-level selectors should be classes.
* It's something likely to be used in other projects. A general-purpose menu? Sure! A menu built specifically for vegetarian pizza websites? Congrats on designing something with such an odd specification. Likely not needed elsewhere.

#### Thou Shalt Use the BEM Naming Convention

The previous commandment has one flaw: with all those class names, there's a higher risk of some being the same. It *also* has a footing flaw during its tennis backhand, but that's its own problem.

Anyway, my preferred way to avoid this is the BEM (block, element, modifier) naming convention. I won't explain it here, as lately there's been [tons](http://getbem.com/naming/) [of articles](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) [doing](https://css-tricks.com/bem-101/) [just that](https://medium.com/@stowball/bemantic-dry-like-you-mean-it-133ea3843d98#.bmu38udt5). But I will say it's very useful keep classes specific and organized, especially for components.

#### Thou Shalt Use Sass Maps for Global Variables

Before I used basic Sass variables to define global variables for major elements like typography, colors, breakpoints, and containers. But there's lots of risks with this:

* Naming things is tough, and so is remembering those names. The more global variables, the more different names you need, the harder using them gets.
* There's always the small, but still dangerous, risk of overlapping variable names.
* The relationships between the variables can get complex, such as different colors or font-sizes. Capturing these in variable names makes them long and unmanageable.

I'd just accepted all this, but a [BigEng article](http://www.bigeng.io/how-we-use-sass-maps-for-design-tokens-and-developer-happiness/) showed another approach: Sass Maps for global variables.

Now instead of a big, confusing list, they're organized to clearly show their values and relationships:

{% highlight scss %}

$g-color-main: #00F;
$g-color-action: #F00;

$color-map: (
  main: (
    lightest: tint($g-color-main, 85%),
    lighter: tint($g-color-main, 50%),
    light: tint($g-color-main, 15%),
    base: $g-color-main,
    dark: shade($g-color-main, 15%),
    darker: shade($g-color-main, 50%),
    darkest: shade($g-color-main, 85%)
  ),

  action: (
    base: $g-color-action,
    hover: shade($g-color-action, 15%)
  ),

  mono: (
    white: #fffefc,
    black: #111
  ),
  ...
);
{% endhighlight %}

Referencing them is also more straightforward and flexible with functions.

{% highlight scss %}
button {
  color: color(main);
  background-color: color: color(main, lightest);

  a { color: color(action); }
}
{% endhighlight %}

While every map needs it's own function, it's worth it for easier use and scalable management.

#### Thou Shalt Only Nest Classes, and Never More than One

Aside from reading too much manga on weekends, my only serious bad habit is too much Sass nesting. It starts simple: nesting one element in another. But the more changes I make, the deeper that nesting gets. Before I know it an element's CSS is a nested clusterf**k with impossible maintenance.

{% highlight scss %}

.first-selector {
    color: black;
    font-size: 3em;

    background-color: red;

    .second-selector {
        border: 1px solid purple;
        
        .element {
            @include position(absolute, 0 null null 0);
            padding-bottom: 2em;
        }

        .element-two {

            .some-text {
                font-size: 0.83em;
                text-underline: underline;

                .that-one-element-you-need-to-change { //Good luck finding this
                    margin: 1em;
                    float: right;
                }
            }
        }
    }
}

{% endhighlight %}

This rule cuts this behavior off before it gets ugly: if you're about to nest something inside something already nested, STOP. Take the extra minute to add a class and extra selector. It's shorter than the extra ten minutes of tracking the element down in the aforementioned "nested clusterf**k" each change.

#### Thou Shalt only Bind JS to Data Attributes

A small yet important step to separate style and function is not linking JavaScript to classes. This keeps two scenarios from ruining a project's code:

> Function and style should always be separate, especially with classes

1. **A component's class, or multiple classes, change.** If the JavaScript is linked to those classes, it means going through all the related code and making changes. Repeat every time a class changes and tell me how fun that is.

2. **Two or more different components need the same JS functionality.** If the class linking the JavaScript has lots of styles, it can lead to painful patches and workarounds to get the same effect without those styles. Example: Foundation 5.5.3's modals are closed by clicking a `.close-reveal-modal` element. However, it also affects an element's size, type, and positions it in the top right. Want a close button at the bottom of the modal? Not much fun either, I'll tell you.

To avoid all this "fun," link all JS code to attributes separate from styles. A simple rule is using attributes with a "data-*" name. But anything guaranteed not to overlap with CSS works fine.

#### Thou Shalt Put Tags and Their Content on Different Lines

This rule iss simple, easy to explain, and more of a personal preference. In a nutshell:

{% highlight html %}
<!-- Write this in HTML -->

<p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>

<!-- Don't write this in HTML -->
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
{% endhighlight %}

Viola! With this little rule the content's more organized and maintainable. The fewer large, hard-to-read blocks of code, the better.

### General Rules for All Projects

These rules are meant to be specific but not too specific so they can work for any project. I won't change each past project to follow them, but I will follow them as much as possible moving forward.

For any developer who hasn't made similar rules for themselves yet, I encourage it as soon as possible. The sooner it's done, the easier and more effective they'll be. Setting your principles and standards up for yourself early means more improvement now and much better quality in the long run. Although don't go as far as carving them into stone in your office - there's always a chance some will change later.

Plus white boards are much cheaper and quieter.



