
(function(doc){
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = ['[awesome-ui-components] Deprecated script, please remove: ' + scriptElm.outerHTML];

  warn.push('To improve performance it is recommended to set the differential scripts in the head as follows:')

  var parts = scriptElm.src.split('/');
  parts.pop();
  parts.push('awesome-ui-components');
  var url = parts.join('/');

  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = url + '/awesome-ui-components.esm.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-stencil-namespace', 'awesome-ui-components');
  doc.head.appendChild(scriptElm);

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = url + '/awesome-ui-components.js';
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute('data-stencil-namespace', 'awesome-ui-components');
  doc.head.appendChild(scriptElm);

  console.warn(warn.join('\n'));

})(document);