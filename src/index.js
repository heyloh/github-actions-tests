module.exports = {
  sayMyName(name) {
    if (name === '' || !name) return null;
    if (typeof name !== 'string') return name;
    return `Hello ${name}`;
  }
}