---
title:  "When to Use a Front-end Framework"
date:   2016-4-24
icon : codepen
excerpt: While I've not crazy about front-end frameworks anymore, they're still handy at times.
featured-img: /img/posts/frontend-frameworks/twitter-bootstrap.jpg
---

Let me begin by typing that while I once loved front-end frameworks like Bootstrap and Foundation, most of my excitement has faded.

I was a big fan while learning the front-end basics. But there comes a time in every front-end developer's life when they need to lose their training wheels and build their site architecture from the bottom-up. One that meets their specific needs, and they understand enough to use flexibly. Ever since I got [Plately](https://github.com/maxx1128/Plately) together, I've been building on that and hardly use third-party frameworks.

But that's no reason to dismiss them entirely. There's still times where they'd come in handy for me or anyone else.

**I like to compare front-end frameworks to religions.** There's a lot of options out there, with passionate and sometimes scary disagreement. Some people are ardent followers of one framework or a few, some don't believe in any at all, and others chose the best parts of some without committing. What you ultimately choose comes down to your preferences, needs, and how comfortable you are with silk robes and animal sacrifice.

Lost track of that metaphor, but I have seven situations where I'd accept using front-end frameworks, for work or side projects. If it doesn't match any of them, I recommend going with something totally custom.

### 1. You're in a Hurry

This one's a given. If a project has a strict deadline, using a framework with the basics built in may be the only way to save enough time.

You may ask: *how much of a hurry do I need to be in?* Simple: take the amount of time you'd have for a project that'd put you in a horrid panic fearing for your job. Then take off a few days. If you have less time than that, go for it!

### 2. You use Most of it

The biggest issue with frameworks is code bloat. Lots of elements and patterns are included that, if you don't use, weigh your site down.

If you actually need that many components, then that issue's gone. There's no unneeded bloat since you're working on a larger site that naturally has a larger codebase. But this means having a clear idea of what the site needs from the start...which isn't always the case.

But what if you can code all those components yourself with less code? In that case, a framework may not work after all. If you have the time to pull that off.

### 3. You Cut out Everything you don't use

Related to the above issue: if you're not using most or all of a framework, but can remove the bloat of what's **not** used, that works too. Many have Sass versions that let you add and remove components as needed.

However, if you're using a remote CDN to pull all the styles and functionality at once, you're out of luck.

### 4. You Customize it. A Lot.

Personally my biggest issue with frameworks is they give sites an "out of the box," rushed feel. I know that's more of a pet peeve, but is still worth mentioning. If visitors see the site's had little effort put into making it, it risks [hurting their impression of it.](http://adventurega.me/bootstrap/) I acknowledge it's not a huge risk, but it's there nonetheless.

It's why I prefer frameworks that are either bare bones or built on Sass -  they're easier to customize consistently. To me, a site uses a framework best when you can't easily tell which one was used.

### 5. You're New to the Front-end

As [some back-end programmers discussed](https://news.ycombinator.com/item?id=11287413) about front-end frameworks, they're very helpful if front-end isn't your thing. It helps them focus on the product and content without fretting over the CSS and UI.

I don't think that should be the case for every site, but it'll be the case for many. Not everyone wanting to make a site can add custom styles. Plus many developers with varying experience could be collaborating and need a common starting point. Those are good moments for frameworks to shine.

### 6. You need a Reliable UI

Many frameworks are built with user experience already in mind. Elements like navigation, carousels, buttons, and forms are made to be responsive and easy to understand. UI can be surprisingly tricky, as I routinely learn, so having this handled beforehand is a big help.

### 7. Your Client Already uses it

I don't need to explain much. Inheriting a major project with the framework already built in? Unless you have a big, compelling reason to migrate away from it and justify all that work, you'll be using it. And even then, it may be too much work to be worth it.

#### In Conclusion

I'll wrap up this post with some frameworks I recommend based on past experience:

* [Bourbon](http://bourbon.io/) is my top choice despite not technically being a singular framework. It's four tools you can mix or match to build out a site: the Bourbon mixin library, the Neat grid system, the Bitters scaffolding styles, and the Refills component library. It's very scalable and you can use select pieces on other projects. My own framework uses Bourbon and parts of Bitters, so they're very useful.
* [Foundation](http://foundation.zurb.com/) is the only "mainstream" one I like. It has advanced functions, is scalable, and gives many options for setup and customization. I use it frequently in my work for a big client and, while it can be more confusing than others, is still reliable.
* [MaterializeCSS](http://materializecss.com/) takes Google's Materialize styling and turns it into a useable, enjoyable framework. I've used it mainly since I love the look and feel of Materialize, and others who do too should give this one a try.
* Want more? I've got a [whole Pinterest board of frameworks](https://www.pinterest.com/maxwell1128/frontend-frameworks/) to browse through.

While I still feel that a personal, tailored framework made on their own should be an ultimate goal for front-end developers, the ones already out there are great starting points. Plus, who says we won't be using one in some future projects?
