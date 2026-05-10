import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import SuspenseWrapper from "./SuspenseWrapper";

const ReportsPage = lazy(() => import("../../pages/ReportsPage"));
const ReportPage = lazy(() => import("../../pages/ReportPage"));
const UsersPage = lazy(() => import("../../pages/UsersPage"));
const GroupsPage = lazy(() => import("../../pages/GroupsPage"));
const CategoriesPage = lazy(() => import("../../pages/CategoriesPage"));
const AuditPage = lazy(() => import("../../pages/AuditPage"));
const NotificationsPage = lazy(() => import("../../pages/NotificationsPage"));
const SettingsPage = lazy(() => import("../../pages/SettingsPage"));
const ProfilePage = lazy(() => import("../../pages/ProfilePage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <SuspenseWrapper component={ReportsPage} /> },
      {
        path: "reports",
        children: [
          { index: true, element: <SuspenseWrapper component={ReportsPage} /> },
          {
            path: ":reportId",
            element: <SuspenseWrapper component={ReportPage} />,
          },
        ],
      },
      { path: "users", element: <SuspenseWrapper component={UsersPage} /> },
      { path: "groups", element: <SuspenseWrapper component={GroupsPage} /> },
      {
        path: "categories",
        element: <SuspenseWrapper component={CategoriesPage} />,
      },
      { path: "audit", element: <SuspenseWrapper component={AuditPage} /> },
      {
        path: "notifications",
        element: <SuspenseWrapper component={NotificationsPage} />,
      },
      {
        path: "settings",
        element: <SuspenseWrapper component={SettingsPage} />,
      },
      { path: "profile", element: <SuspenseWrapper component={ProfilePage} /> },
    ],
  },
  {
    path: "*",
    element: <SuspenseWrapper component={NotFoundPage} />,
  },
]);
