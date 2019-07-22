# Refactoring

## Pair Programming

In these exercises, work in pairs. See why [below](#appendix-pair-programming).

When pair programming, one person writes the code. The other navigates and reviews, with a conversation between the two. Switch roles occasionally.


### Refactor the Tax Calculator

Earlier you looked at `federal-tax/fedtax.js`.

1. In your `tax-calculator` project, create a `src` folder and
   copy in the fedtax.js file.
2. Initialize a git repository and check-in the initial version.
3. Adding tests is likely to help your refactoring effort. Which
   tests make sense to add? (See the official tax
   [documentation](https://www.irs.gov/pub/irs-prior/p15--2015.pdf)
   if necessary).
4. Apply your refactorings one at a time, checking in your code at
   each stage.



---

## Appendix: Pair Programming

Why pair program? Here's David Harvey's take:

> Pairing with a view to teaching and learning is important. With a more experienced/less experienced pair, stopping after refactoring and talking about what you just did should be part of the rhythm of reflective practice. More experienced designers should do this with their less experienced colleagues as a matter of course: those less experienced should have the courage and the curiosity to ask why (for example) the refactored design is better. (As it happens I was in just this position recently after guiding a complex refactoring: we both learned from the experience of me explaining)...
>
> In a peer pairing situation, or indeed working individually, checklists and agreed procedures can play an important part in framing reflection after refactoring. Maybe even just run down the SOLID principles and decide which of these you’ve changed in the code, and by how much?
> [David Harvey](http://www.teamsandtechnology.com/dh/component/option,com_mojo/Itemid,44/p,96/)
