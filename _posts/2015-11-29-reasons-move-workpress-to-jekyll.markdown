---
layout: post
title:  "Why I Switched to Jekyll"
date:   2015-11-29 05:40:02 -0500
categories: web-development
published: true
---

Even though I remade my personal website twice in the last six months, I did it again with Jekyll. Its benefits were too good to pass up.

It wasn't an easy decision. My old WordPress sites each took weeks to develop. The styles, frameworks, loops, custom fields, and experience sucked up much of my free time. Why throw all this away for Jekyll?

{% include image.html url="/img/posts/jekyll/jekyll-logo.png" description="Jekyll logo" %}

Simply put, WordPress's worst weaknesses were Jekyll's best strengths. While I still love WordPress, it's not the best fit for a personal website. The transition was worth it.

### How are WordPress and Jekyll Different?

I can't count the number of articles I've read comparing WordPress and Jekyll, so I recommend reading some first. If I had to chose one, it'd be [this one](http://www.sitepoint.com/blogging-wordPress-or-jekyll/) by Hugo Giraudel. As with everything, explains it better than me.

The short version is Jekyll is static while WordPress is dynamic. Jekyll takes code, creates some webpages, and gives that as a site. When you visit a Jekyll site, you're reading pages made ahead of time. Whereas on a WordPress site, it stores important info like titles or post content in a database. The site pulls data from the database as you load the page, not ahead of time.

Each has their benefits and drawbacks, so choosing one should be done case-by-case. I [even asked the author of the above article how he'd chose.](https://github.com/HugoGiraudel/ama/issues/52) His final point was Jekyll is better for smaller, simpler sites, while more complex ones with frequently changing data may be better for WordPress or another database-driven CMS.

Back to the point, why throw away a WordPress site I spent so long on in favor of a simplified Jekyll one? I have three main reasons. People who know both CMSs likely know what many are already.

### Jekyll is Faster

This is the clearest perk: static sites run faster than database-driven ones. Requesting all that data from different parts of a database takes time. Getting info from a few static files is much simpler and faster.

It was clear right away this new site's MUCH faster. From what I've read, websites should aim for load times lower than 3 seconds or risk visitors leaving. I'm ashamed to say the average load time for my old site was 8-10 seconds. This was not good, and happened for many reasons:

* Requesting external dependencies
* Lots of image requests
* Getting web fonts
* Custom loops, with some pages having more than one

For my Jekyll site, the average page load time is half a second. This is longer for pages with a few images, but is still around 2.5 seconds. At worst, my new site is 300% faster than my old one. At best it's 2000% faster.

In terms of speed, it's hard to argue with Jekyll.

### Jekyll is Easier to Maintain

If I have one complaint about WordPress, it's that **managing the MySQL database is a huge pain.** It's another login to record, another code structure and language to remember, and making backups and/or restoring it's either very confusing or time-consuming. Plus hacks can compromise the whole site, and the lengthy restoring process begins. Assuming someone remembers to back up their site. There are plugins to make all this easier, but the good ones often aren't free and the free ones often aren't good.

As Giraudel also mentioned, Jekyll doesn't have these issues. There's no database to back up or risk with hacks. No new complex languages to sift through. There's HTML for the pages, Sass and CSS for the styles, and maybe some Javascript. There's small touches of YAML and Liquid for adding WordPress logic, like loops and custom fields, but they're easy to learn and manage. WordPress needs extra plugins or more complex PHP. Jekyll just needs another file or two..

For a personal site, this simplicity and ease of management is great. My own site is something I make in my free time, away from the stress of full-time work. The easier it is to control, backup and customize, the better. If it's too much like work, I'll be less likely to give it the work it needs.

### My New Site is Less Serious

The big reason I put so much time in my old sites was I saw them as testaments to my work. A good-looking website means a good front-end developer, right?

Turns out I was wrong for two reasons:

1. **The sites looked good, but ran poorly.** A site can have all the bells and whistles, but if they don't load and function well then it doesn't matter. So they did damage instead of good. It can even seem I'm over-compensating for weakness in other areas, like web performance.
2. **I should let the rest of my work speak for itself.** A front-end web developer shouldn't be judged mainly on their personal website. To some degree they should, since making sites is what we do. But it should mostly be by the rest of our professional work. By the work we make for clients and employers, not ourselves in our free time.

So hopefully with this new site, I'll better balance taking myself less seriously while still putting a good face forward.

#### In Conclusion

I won't pretend my new site's perfect. I have to do the things WordPress used to automate, like SEO meta fields. Plus there's the usual domain name issues I deal with in any new website.

But weighing the good against the bad, I stand by Jekyll. Like most sites it's actively changing, but this way making them will be simpler, faster, and safer. For a small personal site, these are the most important traits that Jekyll has in spades.