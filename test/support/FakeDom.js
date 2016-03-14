import jsdom from 'jsdom';

export const makeFakeDom = () => {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  global.document = doc;
  global.window = doc.defaultView;
};