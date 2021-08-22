function StringChallenge(str) {
  if (str === null || str === '') return 'false';

  const tags = str.match(/(<([^>]+)>)/gi, '');
  const stack = [];
  const openings = ['<div>', '<b>', '<i>', '<em>', '<p>'];
  const closings = ['</div>', '</b>', '</i>', '</em>', '</p>'];

  for (let i = 0; i < tags.length; i++) {
    if (openings.includes(tags[i])) stack.push(tags[i]);
    if (closings.includes(tags[i])) {
      const top = stack.pop();

      if (!top) return 'false';
      if (
        (top === '<div>' && tags[i] !== '</div>') ||
        (top === '<b>' && tags[i] !== '</b>') ||
        (top === '<i>' && tags[i] !== '</i>') ||
        (top === '<em>' && tags[i] !== '</em>') ||
        (top === '<p>' && tags[i] !== '</p>')
      )
        return top.replace(/[<>]+/g, '');
    }
  }

  if (stack.length === 0) {
    return 'true';
  } else {
    return 'false';
  }
}

console.log(StringChallenge('<b></b>'));

// Regular expression to identify HTML tags in
// the input string. Replacing the identified
// Remove tags and return content: str.replace(/(<([^>]+)>)/gi, '');
// Remove tags and return an array of tags: str.match(/(<([^>]+)>)/gi, '');
