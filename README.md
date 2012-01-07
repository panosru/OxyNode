OxyFront
=============================

OxyFront is a collection of libraries and theories in order to help developers to structure their web applications in 
front-end level. OxyFront uses **Domain-driven Design (DDD)** approach, **Command-query Responsibility Segregation (CQRS)**
architecture which follows **Command and Query Separation (CQS)** design pattern and **Event Sourcing (ES)** architectural 
pattern. I build a diagram that show the [application flow](http://dl.dropbox.com/u/16165490/js-ddd-cqrs2.png) in client-side with the use of OxyFront.
The project is inspired by [OxyBase](http://code.google.com/p/oxybase/) where I contribute and it is created by Tomas Bartkus.
  
The purpose of this framework is to easily start building front-end parts of web applications.

Resources for DDD/CQRS/ES:

* [Domain Driven Design - Step by Step](http://thinkddd.com/assets/2/Domain_Driven_Design_-_Step_by_Step.pdf)
* [DDD Sample & Definitions](http://dddsample.sourceforge.net/patterns-reference.html)
* [Domain Event](http://martinfowler.com/eaaDev/DomainEvent.html)
* **[Architectural Innovation: Eventing, Event Sourcing by Greg Young](http://skillsmatter.com/podcast/design-architecture/architectural-innovation-eventing-event-sourcing/zx-553)** *1hour video*
* **[CQRS and Event Sourcing - the Business Perspective by Greg Young](http://skillsmatter.com/podcast/design-architecture/greg-young-cqrs-event-sourcing-the-business-perspective)** *2hour video*
* [Domain Driven Design and Development In Practice](http://www.infoq.com/articles/ddd-in-practice)
* [Domain-driven design (Wikipedia)](http://en.wikipedia.org/wiki/Domain-driven_design)
* **[Domain-Driven Design: Tackling Complexity in the Heart of Software by Eric Evans](http://www.amazon.com/dp/0321125215)** This is a must have book if you are about to dive in DDD
* **[Design Patterns: Elements of Reusable Object-Oriented Software](http://www.amazon.com/dp/0201633612/)** This is also a must have book in order to understand design patterns in OOP programming



When you should use OxyFront with DDD / CQRS
----------------------------

* If you have complex domain (very complex business rules)
* If you have at least 1 experienced developer in your team
* If you have experience in advanced JavaScript OOP patterns
* If you know what is DDD

When you should not use OxyFront
--------------------------------

You can use it for any kind of project, but more likely that you will not benefit from packages and features it provides. 
Although, if you will try to implement some small, not complex application by using all those "things" described above - 
most likely that you will fail, because it will be just too much work and very little benefit. [why to avoid cqrs](http://www.udidahan.com/2011/04/22/when-to-avoid-cqrs/ "When to avoid CQRS") read this 
before you start redesigning anything.

OxyFront's Extras!
------------------

This framework contains the following libraries but feel free to remove the ones that you don't really need:


Core (those are the core of the framework but still you can for example remove Modenizr or jQuery or Twitter bootstrap or replace them with the ones you prefer):

* [HTML5 Boilerplate](http://html5boilerplate.com/)
* Twitter Bootstrap [CSS](http://twitter.github.com/bootstrap/) & [JavaScript](http://twitter.github.com/bootstrap/javascript.html) 
(Thanks to [mklabs](https://github.com/mklabs) who provided [a nice script](https://gist.github.com/1422879) to use html5boilerplate with twitter bootstrap!)
* [LESS](http://lesscss.org/) Css files with less Node.js module for compiling
* [Modernizr](http://www.modernizr.com/) (full featured)
* [Yepnope.js](http://yepnopejs.com/) included with Modernizr
* [jQuery](http://jquery.com/)


Used for DDD/CQRS (If you don't want to follow DDD/CQRS feel free to remove those libraries or use them in different way):

* [Backbone.js](http://documentcloud.github.com/backbone/) - [Backbone Tutorials](http://backbonetutorials.com/) helped a lot to start up with Backbone.js!
* [Underscore.js](http://documentcloud.github.com/underscore/)
* [JSON2.js](https://github.com/douglascrockford/JSON-js)
* [Require.js](http://requirejs.org/) to apply [JavaScript AMD (Asynchronous Module Definition)](https://github.com/amdjs/amdjs-api/wiki/AMD)


Optional (those can be removed and they are here only in case you need them):

* [QUnit](http://docs.jquery.com/QUnit) for testings (I would recommend to keep this for Test Driven Development)
* [Pretify](http://google-code-prettify.googlecode.com/svn/trunk/README.html) lib (code highlighting)
* [Chosen](http://harvesthq.github.com/chosen/) select boxes lib
* [Jwerty](http://keithcirkel.co.uk/jwerty/) for easy keyboard handling
* [Bootbox](http://paynedigital.com/2011/11/bootbox-js-alert-confirm-dialogs-for-twitter-bootstrap) for nice alert and confirm type boxes
* [Money.js](http://josscrowcroft.github.com/money.js/) as Node.js module
* [Moment.js](http://momentjs.com/) as Node.js module
* [Animate.css](http://daneden.me/animate/)
* [Table sorter](http://tablesorter.com/docs/) for easy table shoring & pagination
* [Silex](http://silex.sensiolabs.org/doc/usage.html) PHP micro-framework based on Symfony 2 (I added this for purpose of examples when interacting with back-end)

*Please if you think that any of the project's file violate any license please let me know if it does it's not on purpose 
and I will replace/remove or ask permission to use it.*



Next!
====
* Examples need to be added in order to represent the flow of DDD/CQRS and how can be interacted with UI
* js/app.js uses eval in some parts, unfortunately I can't avoid it but I believe it is safe in the way I use it but I 
will listen any alternatives ! :)
* I revisit the code daily so things could be changed on how they work (flow may be changed too if I find that something 
could work in a better way)
* A/B Testing script to make A/B Testing easy to use!
* A growl like notification lib
* Plupload of course... best upload way in my opinion
* Form user-input auto saver (so if browser crash or something happens the user won't have to re-type again everything he may lost)
* Mustache.js as an extra option for templating :) you could use mustache.js or underscore.js or both! 
* some node.js modules I belive could be useful to have in RIA app
* Icons! lots of them!

Lot's of more things are on their way!