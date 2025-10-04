import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layouts/themes";
import RqProvider from "@/providers/react-query";
import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { DEFAULT_METADATA } from "@/config/metadata";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["vietnamese"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("site");
  return {
    ...DEFAULT_METADATA,
    title: {
      default: `Core | ${t("title")}`,
      template: `%s | ${t("title")}`,
    },
  };
};

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  minimumScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning className="select-none">
      <body className={cn(montserrat.variable, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader color="var(--foreground)" showSpinner={false} />
          <NextIntlClientProvider>
            <RqProvider>{children}</RqProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
