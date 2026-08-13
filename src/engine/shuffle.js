/** Fisher-Yates. Returns a new array; never mutates the input. */
export function shuffle(list) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Loose text compare: ignore case, punctuation-ish spacing and double spaces. */
export function normalise(text) {
  return String(text)
    .toLowerCase()
    .replace(/[“”"']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Same as normalise but also drops trailing full stops and all spaces. */
export function normaliseHard(text) {
  return normalise(text).replace(/[.,;:]+$/g, '').replace(/\s/g, '');
}
