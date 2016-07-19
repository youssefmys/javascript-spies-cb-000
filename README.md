# JavaScript Spies

## Objectives

1. Explain why we use spies in JavaScript
2. Describe how to use Jasmine spies
3. Practice using Jasmine spies

## Outline

It seems like we could productively walk students through a lab like this
one: https://github.com/learn-co-curriculum/javascript-strings-lab

The lab itself is fairly simple, but the test setup is pretty weird (since
students aren't wrapping their code in functions but are just calling
`console` methods inline).

The main thing is getting students to understand how we can replace a
function with a function that knows when it's been called. This is kind of
mind-blowing, so we should take it slow. (And perhaps show students how they
might "roll their own" hacky version to demystify it a bit:

```javascript
function createSpy() {
  let calls = [];

  function spy() {
    calls.push(arguments);

    return calls;
  }

  spy.wasCalled = () => {
    return calls.length > 0
  }

  return spy
}
```
