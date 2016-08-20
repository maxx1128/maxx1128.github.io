---
layout: post
title:  "A Personal Site Refactor"
date:   2016-08-20
categories: coding
excerpt: "Site refactors fix plenty, and my site was overdue for one. But with luck, I'll make less in the future."
featured-img: /img/posts/site-refactor/featured.png
---

It's never too late to change - this applies to life goals, Pokemon teams, or your website's front-end architecture. All are equally important, but here I'm talking about that last one. My site's needed a tune up for a while, and I finally addressed the big issues: an inconsistent menu, blog posts layout, and that demon that would leap from computer screens and steal people's souls.

These have been taken care of. Most of them, anyway.

I go into more detail about the most important ones below. They're useful if you're thinking of refactoring your own site! But looking at each change carefully, I noticed a common theme about why they were there - and how they could've been avoided.

However, if your screen suddenly turns red and you hear high-pitched laughter, turn off your computer and run before reading on.

### Combined Jekyll with Gulp

[I love Jekyll.]({% post_url 2015-11-29-reasons-move-wordpress-to-jekyll %}) Who doesn't love Jekyll? Many of [my idols of the webdev world are Jekyll fans](http://hugogiraudel.com/2015/05/29/oh-jekyll-here-we-go-again/). All the cool coders (that is, all coders) use it. However, while Jekyll is great in managing static data and HTML, out of the box its asset management is limited. It has Sass but no helpful add-ons like Autoprefixer or Source Maps, and has Javascript without Uglify and Browserify.

While there are plugins to handle at least some of those, I wanted use Gulp. It's an environment I'm familiar with, so I can more easily solve these issues and tailor things to my needs. Plus integrating the two is [surprisingly easy](https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/)!

My new workflow is just running `gulp` from the terminal, and Jekyll runs with all the HTML, CSS, and Javascript benefits at full speed. I'm especially glad Autoprefixer is there, as the gaps in my browser prefixes were bad surprises. Plus not using it today is borderline irresponsible and risks public Twitter shaming.

I'd known these issues for a while, but instead of taking note, I'd pushed them aside. **So they kept growing until I had to spend lots of time to fixing them.**

Some may ask why not just run it all through Gulp with a simpler HTML template system, like [Nunjucks](https://mozilla.github.io/nunjucks/)? I've done that plenty, both in personal and client work. In my experience, Jekyll and Nunjucks work about the same in smaller projects, but the larger they get the more unwieldy Nunjucks gets. It doesn't have the convenience of posts or collections built in, and it can't incrementally regenerate HTML files - changing one page in a 100 page site means a 100 page refresh.

Sorry Nunjucks, but the cool name won't beat Jekyll's simplicity and convenience in managing HTML. Setting it up with Gulp is so useful [I saved it](https://github.com/maxx1128/jekyll-gulp) for future use.

### Cleaned up the Dependencies

The more I've coded, the more I've realized *simpler is better,* especially with dependencies. It's important to judge if any third-party code has enough benefits to be worth the extra weight and risk. One shouldn't be afraid to move on from some packages, return all their stuff, and delete them from your phone contacts and Bower.json file. Some relationships get too abusive or expensive to maintain, and it's best to sever ties before it goes to court.

For me, these unneeded bits included [Hover](https://github.com/IanLunn/Hover) and [Ellisha](https://github.com/maxx1128/Ellisha), a flexbox-based Sass grid system. Over time I'd used both of these less in my Sass until I wasn't at all. Removing all references was just changing a few files in ten minutes. When taking out a dependency is that easy, it's the Internet's way of telling you to move on. **It's really my fault for not checking if I wasn't using my dependencies anymore.**

The only dependency I felt 100% confident keeping was [Synapse](https://github.com/maxx1128/Synapse-Grid) for three reasons:

1. As a Sass mixin it only adds weight when it's used.
2. It's routinely made writing my code easier, not tougher.
3. It's deeply integrated into my current files so removing it would be a much huger task.

The other one I kept was [Bourbon](https://github.com/thoughtbot/bourbon) for the same reasons. But I plan to later replace it with [Scut](https://github.com/davidtheclark/scut), a more practical and straightforward version.

### Used Consistent BEM naming

In a large pattern library I'm making for a client, I'm writing new classes using [the BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). It gives elements clearer, organized classes that also makes styling more precise and overlap less.

As the work continued I noticed something funny: while issues with overlapping styles still popped up, it never happened with elements using BEM. In fact, these typical issues would almost NEVER happen.

Lesson learned: BEM is the naming syntax for me. Using it for all my site elements helped organize the folders, files, and styles efficiently and neatly. Changing styles is less confusing and adding them doesn't risk any overlap. I'd already used it in a few places, but had to follow through everywhere else. **The core of the issue was, again, not being consistent when I wrote the code.**

Another bonus is it makes components easier to use in many places. Using the same code to show blog posts on my homepage and the actual blog page was child's play this time around.

#### Less Revamps, Better Day to Day

As great as site revamps feel, even relatively small ones like this, they shouldn't be relied on. The common theme with almost every major issue is they could've been handled earlier on. It would've just taken an extra 10-15 minutes by making these changes whenever I was working.

I'm not sure how aware I was of these better practices before, but since I know them now, I don't have any excuse to ignore them on a daily basis. Otherwise I'll [keep thinking that a lack of refactors is the problem, not a lack of good coding habits](http://tinnedfruit.com/2016/07/25/are-you-writing-legacy-css-code.html).

Keeping that in mind, as much as I liked making this revamp, here's hoping I make far less in the future.


