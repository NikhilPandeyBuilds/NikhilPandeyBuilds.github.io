import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

/**
 * Normalizes URL paths: lowercase, strips trailing slashes (except root '/')
 */
export function normalizePath(path = '/') {
  if (!path) return '/';
  const clean = path.split('?')[0].split('#')[0].trim();
  if (clean === '' || clean === '/') return '/';
  return clean.replace(/\/+$/, '');
}

/**
 * Lightweight SPA Router Provider using HTML5 History API
 */
export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    return normalizePath(window.location.pathname);
  });

  const navigate = useCallback((to, { replace = false, preserveHash = false } = {}) => {
    if (!to) return;
    
    // Handle external links or protocol links
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    const [targetPath, hash] = to.split('#');
    const normalized = normalizePath(targetPath || '/');

    if (replace) {
      window.history.replaceState({}, '', to);
    } else if (window.location.pathname !== normalized || (hash && window.location.hash !== `#${hash}`)) {
      window.history.pushState({}, '', to);
    }

    setCurrentPath(normalized);

    // Scroll handling
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

/**
 * Hook to access current navigation state
 */
export function useRouter() {
  return useContext(RouterContext);
}

/**
 * Crawlable Link component producing real HTML <a href="...">
 * Intercepts clicks for SPA routing unless modifier keys are pressed.
 */
export function Link({ to, children, className = '', activeClassName = 'active', style, title, ariaLabel, ...rest }) {
  const { currentPath, navigate } = useRouter();
  const normalizedTo = normalizePath(to ? to.split('#')[0] : '/');
  const isActive = currentPath === normalizedTo;

  const handleClick = (e) => {
    // Preserve default browser behavior for cmd/ctrl/shift/alt clicks or right clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    // If external link, let browser handle normally
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      return;
    }

    e.preventDefault();
    navigate(to);
  };

  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a
      href={to}
      onClick={handleClick}
      className={combinedClasses}
      style={style}
      title={title}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}

/**
 * Conditional Route component
 */
export function Route({ path, component: Component, children }) {
  const { currentPath } = useRouter();
  const normalizedPath = normalizePath(path);

  if (currentPath !== normalizedPath) {
    return null;
  }

  if (Component) {
    return <Component />;
  }

  return <>{children}</>;
}
