
try {
  Object.defineProperty(window, 'parent', { get: () => window, configurable: true });
  Object.defineProperty(window, 'top', { get: () => window, configurable: true });
} catch(e) {}


try {
  Object.defineProperty(document, 'referrer', {
    get: () => 'https://www.youtube.com/',
    configurable: true
  });
} catch(e) {}


try {
  Object.defineProperty(window.location, 'ancestorOrigins', {
    get: () => ({ length: 1, 0: 'https://www.youtube.com', contains: (o) => o === 'https://www.youtube.com' }),
    configurable: true
  });
} catch(e) {}

window.ytgame = window.ytgame || {};


(function() {
  const requiredHash = '#flags=%7B"enableServiceWorker"%3Afalse%7D&origin=https%3A%2F%2Fwww.youtube.com';
  try {
    if (window.location.hash !== requiredHash) window.location.hash = requiredHash;
  } catch(e) {}
})();
