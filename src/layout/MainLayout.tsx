import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="tapshare-ui-theme">
    <Outlet/>
    </ThemeProvider>
  );
}