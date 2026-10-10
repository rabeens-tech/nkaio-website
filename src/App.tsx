import { HashRouter, Route, Routes } from "react-router";
import { LanguageProvider } from "./i18n";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SiteLayout } from "./components/SiteLayout";
import { SomethingWentWrong } from "./components/SomethingWentWrong";
import NotFound from "./pages/NotFound";
import { ROUTES } from "./routes";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <ErrorBoundary fallback={<SomethingWentWrong />}>
          <Routes>
            <Route element={<SiteLayout />}>
              {ROUTES.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
