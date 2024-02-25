## Frontend-Framework
Making a frontend framework just for learning.

I followed the Tutorial here: https://mfrachet.github.io/create-frontend-framework/intro.html

run via `npx parcel index.html`

Click on the text and the first name changes.

### Thoughts

This was a great exercise and I learned a lot. I will write more about this later...

### Bugs Fixed
I had to make some changes on how snabbdom was imported.

There was an 'undefined' that showed up in the rendered `<div>` tag. The problem was how the createElemnt function handled the templte string . 

### TODO
Review code and think about the process. There's a lot here I need to understand.

Could add:
- children rendering
- managing lifecycle: the biggest problem with our implementation is How / When to fetch data?
- improving performances
- managing style encapsulation (shadow DOM and alternatives)
- dependency injection system
