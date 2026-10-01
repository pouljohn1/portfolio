import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import { App } from "./App"
import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from "react-router"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
