import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

/** About StrictMode
 * A tool for highlighting potential problems in an application
 *  It activates additional checks and warnings for its descendants
 * Strict mode checks are run in development mode only
 */

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

