export const cleanNewLinesMarkdownBody = (body) => {
  return body.replace(/\n+ *([A-Za-z0-9])/gm, (x) => {
    if (/^\n./.test(x)) {
      return x.replace(/^\n */, ' ')
    }

    return x
  })
}
