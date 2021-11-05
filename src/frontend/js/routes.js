import DocumentBrowser from "./components/DocumentBrowser";
import DocumentBuilder from "./components/DocumentBuilder";
import Settings from "./components/Settings";
export default [
  { path: "/", redirect: "/documents" },
  { path: "/documents", component: DocumentBrowser },
  { path: "/documents/new", component: DocumentBuilder },
  { path: "/settings", component: Settings }
];
