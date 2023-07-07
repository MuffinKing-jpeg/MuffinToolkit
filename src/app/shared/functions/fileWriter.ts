export function writeContents(content: Blob, fileName: string, contentType: string, extension: string) {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName + '.' + new Date().getTime() + extension;
  a.click();
  return a.download
}
