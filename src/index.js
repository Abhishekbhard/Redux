import { compose, pipe } from "lodash/fp";

const tag = ({ tag }) => tag;

//console.log(tag);

const toLowerCase = (str) => str.toLowerCase();
const addParanthesis =
  ({ opening, closing }) =>
  (toLowerCase) =>
    opening.concat(toLowerCase).concat(closing);
// opening.concat(str).concat(closing).toString();

const transform = pipe(
  tag,
  toLowerCase,
  addParanthesis({ opening: "(", closing: ")" })
);
const input = { tag: "JAVASCRIPT" };

const output = transform(input);
console.log(output);
