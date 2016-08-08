---
layout: post
title:  "Write a Program like a Novel"
date:   2016-08-08
categories: coding philosophy
excerpt: "A better mindset for writing clear, understandable code may be writing it like a story."
featured-img: /img/posts/write-code-like-novel/featured.jpg
---

When people think of how programs get written, I imagine many think of large, incomprehensible blocks of text. I had the same impression when I started. For a while that was how I coded: take what's needed and make it a massive block, which worked as long as I remembered what it did.

But as I revisited older projects for updates and debugging, these habits came back to slap me. Hard, while wearing some thick rings. Those giant blobs were hard to decipher and harder to edit, even though I wrote them. I could only imagine how others would feel reading it.

I realized [my perspective on writing and organizing my code had to change.](https://seesparkbox.com/foundry/lets_write_beautiful_css_comments) So why not make it read less like a program and more like a novel?

### Writing Code as a Story

I tested this idea out with a recent component, fittingly enough for fiction or long-form text. I aimed to write the Sass comments like a novel.

<p data-height="270" data-theme-id="dark" data-slug-hash="pbaxpK" data-default-tab="css,result" data-user="max1128" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/max1128/pen/pbaxpK/">Slow Parallax Text Background</a> by Maxwell Antonucci (<a href="http://codepen.io/max1128">@max1128</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

- An **introduction** with the component's description and its goal.
- The **rising action** building with each selector, with comments showing how each piece builds towards the result.
- A **denouement** tying up any remaining plot threads, in this case the parallax effect, and a quick summary.

The final stylesheet is a smoother read with important parts easier to spot and edit. Plus it was just more fun to write. It satisfies that [innate human need to hear and tell stories.](http://www.newyorker.com/books/page-turner/can-science-explain-why-we-tell-stories) Even if it's the story of how a long-form parallax effect grew from nothing to a full-fledged component.

In the literary world, that's **character development!** Yes, there's character development in the web development field. Realizing this led me to a big revelation.

### Seeing Websites as Novels

I saw it's easy to think of a website as a novel. Especially with the growth of [Atomic Design.](http://bradfrost.com/blog/post/atomic-web-design/)

Atomic Design is creating systems of individual components and gradually combining them into larger ones until the result is a website. You start with the basic concept, then build out separate pieces like buttons and fonts. Those are mixed and matched to create menus, articles, sidebars, and whatever else. The result is ultimately a finished website with all pieces in their right places, helping spread a message to the world.

<video src="/img/posts/write-code-like-novel/atomic-design.mp4" autoplay loop muted></video>

<figcaption>
    Clever visual explainer by <a href="http://patternlab.io/" target="_blank"> PatternLab.io</a>
</figcaption>

**At its core, isn't this the same as reading a novel?**

In the beginning you have the premise, whether it's of a new blog or an international thriller. It starts with an intriguing idea you're curious about. So you read and begin learning about the story's parts: the format, characters, setting, past events, etc.

As you read, every aspect gets fleshed out and mixed with each other in different ways. New characters finally meet, settings change, new developments get revealed. The end result is the compelling scenes of the climax and ending, like a site's patterns coming together to make the site.

There's even more aspects that coding and fiction have in common:

* The rush to hit a deadline
* One error in spelling or context can ruin everything
* Removing all unneeded or repeated details
* Most people doing it rely too much on coffee and shots of adrenaline to make it through a work day.

To me there's too many similarities between coding and novels to write off. These similarities should be embraced when it comes to writing programs.

#### In Conclusion

I won't say coders *need* to learn fiction or non-fiction writing skills. There's already a ton to learn for us, and it grows every day. But trying out these skills is something to consider, since there's many benefits. It helps one write clear and understandable code, which makes it easier for others to use and improve it. Plus good writing has lots of uses, from tweeting to documentation or long-form code reviews - all things more coders are being expected to do.

Maybe in the future, more people will see coding as a writing sub-genre instead of just jargon, symbols, and nonsense. It's sadly the latter many times. But if we think of it as the former more, it'll help make our code more accessible as well as interesting.

After all, who doesn't love a good novel? Maybe we'll make some new classics, like "The Little Modal That Could."
