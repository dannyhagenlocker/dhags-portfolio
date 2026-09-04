// Single source of truth for the top-level tabs.
// The order of this list is the tab order: it decides which way pages slide
// when navigating between them, so keep it in sync with the tab bar layout.

export type Tab = {
  name: string;
  path: string;
};

export const TABS: Tab[] = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Life", path: "/life" },
];

/** Position of a path in the tab order, or -1 if it is not a tab. */
export function tabIndex(pathname: string): number {
  return TABS.findIndex((tab) => tab.path === pathname);
}

export function isTabPath(pathname: string): boolean {
  return tabIndex(pathname) !== -1;
}
