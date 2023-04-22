import { extendBaseTheme } from "@chakra-ui/react";
import { Button as ButtonTheme, List as ListTheme } from "@chakra-ui/theme/components";

const theme = extendBaseTheme({
    components: {
        Button: ButtonTheme,
        List: ListTheme,
    },
    colors: {
        blue: {
            "50": "#eff6ff",
            "100": "#dbeafe",
            "200": "#bfdbfe",
            "300": "#93c5fd",
            "400": "#60a5fa",
            "500": "#3b82f6",
            "600": "#2563eb",
            "700": "#1d4ed8",
            "800": "#1e40af",
            "900": "#1e3a8a",
        },
        red: {
            "50": "#fef2f2",
            "100": "#fee2e2",
            "200": "#fecaca",
            "300": "#fca5a5",
            "400": "#f87171",
            "500": "#ef4444",
            "600": "#dc2626",
            "700": "#b91c1c",
            "800": "#991b1b",
            "900": "#7f1d1d",
        },
        slate: {
            "50": "#F8fafc",
            "100": "#F1f5f9",
            "200": "#E2e8f0",
            "300": "#cbd5e1",
            "400": "#94a3b8",
            "500": "#64748b",
            "600": "#475569",
            "700": "#334155",
            "800": "#1e293b",
            "900": "#0f172a",
        },
    },
});

export default theme;