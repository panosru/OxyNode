OxyFront
=============================

OxyFront is a collection of libraries and theories in order to help developers to structure their web applications in 
front-end level. OxyFront uses **Domain-driven Design (DDD)** approach, **Command-query Responsibility Segregation (CQRS)**
architecture which follows **Command and Query Separation (CQS)** design pattern and **Event Sourcing (ES)** architectural 
pattern. I build a diagram that show the [application flow](http://dl.dropbox.com/u/16165490/js-ddd-cqrs2.png) in client-side with the use of OxyFront.
The project is inspired by [OxyBase](http://code.google.com/p/oxybase/) where I contribute and it is created by Tomas Bartkus.
  
The purpose of this framework is to easily start building front-end parts of web applications.


When you should use OxyFront
----------------------------

* If you have complex domain (very complex business rules)
* If you have at least 1 experienced developer in your team
* If you have experience if advanced JavaScript OOP patterns
* If you know what is DDD

When you should not use OxyFront
--------------------------------

You can use it for any kind of project, but more likely that you will not benefit from packages and features it provides. 
Although, if you will try to implement some small, not complex application by using all those "things" described above - 
most likely that you will fail, because it will be just to much work and very little benefit. [why to avoid cqrs](http://www.udidahan.com/2011/04/22/when-to-avoid-cqrs/ "When to avoid CQRS") read this 
before you start redesigning anything.

OxyFront's Extras!
------------------

This project uses:

* HTML5 Boilerplate
* Twitter Bootstrap CSS & JavaScript
* Modernizr (full featured)
* Pretify lib (code highlighting)
* Chosen select boxes lib
* Jwerty for easy keyboard handling
* Bootbox for nice alert and confirm type boxes
* jQuery
* Backbone.js
* Underscore.js
* JSON2.js
* Require.js to apply JavaScript AMD (Asynchronous Module Definition)
* QUnit for testings
* LESS Css files with less Node.js module for compiling
* Money.js as Node.js module
* Moment.js as Node.js module


Lot's of things are on their way.

*Please if you think that any of the project's file violate any license please let me know if it does it's not on purpose 
<<<<<<< HEAD
and I will replace/remove or ask permission to use it.*



Next!
====
* Examples need to be added in order to represent the flow of DDD/CQRS and how can be interacted with UI
* js/app.js uses eval in some parts, unfortunately I can't avoid it but I believe it is safe in the way I use it but I 
will listen any alternatives ! :)
* I revisit the code daily so things could be changed on how they work (flow may be changed to if I find that something 
could work in a better way)
=======
and I will replace/remove or ask permission to use it.*
>>>>>>> 6a2563ba51cc24eba0f5f4098b4255a4644165e9
