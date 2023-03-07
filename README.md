# hypocorism

A dead simple utility to match give names with their shortened version.

## Installation

```bash
npm install @shareledgerjs/hypocorism
// or yarn
yarn add @shareledgerjs/hypocorism
```

### Usage

To determine if a one version of a person's first name matches another version

```typescript
import {match} from "@shareledgerjs/hypocorism";

match("Aaron", "Ronny"); // true
match("Chris", "Christopher"); // true
match("Cooper", "Crystal"); // false
```

To list out all names that match a given first name


```typescript
import {hypocoristics} from "@shareledgerjs/hypocorism";

hypocoristics("Rosabella"); // return ["Rosable", "Belle", "Rosa", "Rose", "Roz", "Isabella", "Roseanne", "Rosarita", "Rosalyn"]
```

## Test

```
yarn jest --code-coverage
```

## Developing

```
git clone http://github.com/ShareRing/hypocorism.git

cd hypocorism

yarn
```

## References

- https://en.wiktionary.org/wiki/Appendix:English_given_names
- https://raw.githubusercontent.com/brianary/Lingua-EN-Nickname/main/nicknames.txt

## License

MIT License

Copyright (c) 2023 ShareRing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
