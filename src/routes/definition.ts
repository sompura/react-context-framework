const PREFIX = "";

export interface Route {
  name: string;
  path: string;
  exact: boolean;
  view: string;
  sitemap: {
    priority: number;
    frequency: string;
    lastMod?: string | number;
  };
}

// eslint-disable-next-line
export default <Route[]>[
  {
    name: "home",
    path: `${PREFIX}/`,
    exact: true,
    view: "HomeView",
    sitemap: {
      frequency: "WEEKLY",
      priority: 1,
    },
  },
];
