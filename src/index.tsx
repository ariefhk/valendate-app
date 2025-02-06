import "./styles/css/index.css"
import { QueryClientProvider } from "@tanstack/react-query"
import { NuqsAdapter } from "nuqs/adapters/react-router/v7"
import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter } from "react-router"
import { queryClientInstance } from "./common/services/react-query-instance.ts"
import { store } from "./common/store/index.ts"
import Pages from "./routes/index.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClientInstance}>
      <ReduxProvider store={store}>
        <NuqsAdapter>
          <BrowserRouter>
            <Suspense fallback={<></>}>
              <Pages />
            </Suspense>
          </BrowserRouter>
        </NuqsAdapter>
      </ReduxProvider>
    </QueryClientProvider>
  </StrictMode>,
)
