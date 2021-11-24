import DocumentBrowser from "./components/DocumentBrowser";
import DocumentBuilder from "./components/DocumentBuilder";
import GroupBuilder from "./components/GroupBuilder";
import Settings from "./components/Settings";
export default [
  {
    name: "Home",
    path: "/",
    redirect: "/documents"
  },
  {
    name: "BrowseDocuments",
    path: "/documents",
    component: DocumentBrowser
  },
  {
    name: "NewDocument",
    path: "/documents/new/:groupUuid",
    component: DocumentBuilder,
    props: true
  },
  {
    name: "EditDocument",
    path: "/documents/edit/:uuid",
    component: DocumentBuilder,
    props: true
  },
  {
    name: "BrowseGroup",
    path: "/documents/:uuid",
    component: DocumentBrowser,
    props: true
  },
  {
    name: "NewGroup",
    path: "/groups/new/:groupUuid",
    component: GroupBuilder,
    props: true
  },
  {
    name: "EditGroup",
    path: "/groups/edit/:uuid",
    component: GroupBuilder,
    props: true
  },
  {
    name: "Settings",
    path: "/settings",
    component: Settings
  }
];
