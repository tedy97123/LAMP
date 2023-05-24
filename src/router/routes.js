const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/route",
        component: () => import("pages/RoutePage.vue"),
        children: [
          //Perfierals
          { path: "/", component: () => import("pages/route/RouteSelect.vue") },
          {
            path: "/add-route",
            component: () => import("pages/route/AddRoute.vue"),
          },
          {
            path: "/saved-routes",
            component: () => import("pages/route/SavedRoutes.vue"),
          },

          //Auth
          {
            path: "/auth",
            component: () => import("pages/AuthPage.vue"),
            children: [
              {
                path: "login",
                component: () => import("pages/auth/LoginSection.vue"),
              },
              {
                path: "register",
                component: () => import("pages/auth/RegisterSection.vue"),
              },
            ],
          },
          {
            path: "/account",
            component: () => import("pages/AccountPage.vue"),
            children: [
              {
                path: "accountMenu",
                component: () => import("pages/account/AccountMenu.vue"),
              },
              {
                path: "details",
                component: () => import("pages/account/My_Details.vue"),
              },
            ],
          },
        ],
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
