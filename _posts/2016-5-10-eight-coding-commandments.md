---
layout: post
title:  "My Eight Coding Commandments"
date:   2016-05-06 07:40:02 -0500
categories: web-development philosophy
excerpt: "Having a firm, clear set of rules helps a lot in web development. These aim for modular, maintainable code at all times."
---

The good and bad about web projects is they can get very complex. It's good because one can make incredible things limited only to one's imagination, free time, and lack of social life. It's bad because overly-complex projects are hard to maintain, slowly break down, and eventually self-destruct in an explosion.

So for the sake of our work and insurance premiums, complexity must be kept at bay. Not removed altogether, as we then couldn't savor others' bemused expressions when showing off our work. Coders just need ways to control and manage their project's complexity so it scales without breaking.

This isn't new or startling info. The fun part comes when coders talk about **how** they do it. There's no set in stone ways to reliably go by. Some rules are common, some are rare, all depend on the person doing the coding.

In my case, I've come up with eight firm rules for front-end development. They aim to keep code modular, editable, and easier to manage. While I won't scream them from the rooftops as the token to our salvation, I'll share them here for other front-end developers looking to write or improve on their own rules.

Also since my megaphone is broken and there's no tall rooftops close to my room. Mostly the first reason. Anyway, let's begin!

#### Thou Shalt Write Lots of Inline Comments

Informative comments in code seem like a chore. One that takes too much time, especially for projects with deadlines. This does not matter. For the love of a supposed God, write lots of informative, inline comments.

I've learned the importance of this rule first-hand. In the year's start I finished up a prototype built with Nunjucks and Angular. Earlier this month I had to make some changes. Looking through it was like going through a familiar maze after being spun around, blindfolded, and any signs were written in German.

No matter how obvious the code was to me while writing it, enough time will make it take that away. Inline documentation is the simplest, most effective way I've found to avoid this. Specifically, inline comments should be written for:

* The top of any page - their basic role and functions.
* Variables - what they're used for and their unit of value.
* Loops or functions - use, output, arguments, and examples.
* *Any* complex chunks of code - to avoid future "look at it and burst out weeping" situations.

#### Thou Shalt not Style Components Through Parent Elements

Modular CSS is written so specific pieces can easily move from one project to another. This means elements' styles must be totally independent, or at least easily edited to be. A common way I've broken this rule is making important component styles reliant on containers.

For example, let's say I had a CSS component of a slider full of pirate ship pictures called a Pirate Slider. Normally the Pirate Slider is full width, but I made it so it would be half width inside an article container. That's convenient for this code, but makes using my Pirate Slider in other projects with different article containers more work. Plus I may not always know where that article container is, or when I'd want that affect elsewhere, so the component becomes a hassle to use.

Simple lesson from our Pirate Slider: don't have any styles rely on container or parent elements. Especially widths, floats, padding, or margins, as they're the most noticeable and volatile styles.

#### Thou Shalt Always Use Scoped Variables in Component Style Sheets
* Never rely on externally defined elements or variables for key styles. Use scoped variables instead.

#### Thou Shalt Use the BEM Naming Convention
* Each element must use unique, scoped classes with the BEM naming convention.

#### Thou Shalt Only Next Classes, and Never More than Two
* Only nest classes, and never nest them further than two selectors down.

#### Thou Shalt Use Sass Maps for Global Variables
* Always use one level Sass maps for global variables, and two level maps if they have a range of values.
* Reference that BigEng article here?

#### Thou Shalt only Bind JS to Data Attributes
* Always bind JS to data-* attributes, never classes.

#### Thou Shalt Put Tags and Their Content on Different Lines
* Never put element tags and their content on the same line.

