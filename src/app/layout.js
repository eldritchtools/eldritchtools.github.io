import "./globals.css";
import Script from "next/script";

export const metadata = {
    title: "Eldritch Tools | Free Webtools",
    description: "Eldritch Tools profile",
    icons: {
        icon: [
            { url: "/favicon.ico", type: "image/x-icon" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}

                <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZKTR8HMLF7" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-ZKTR8HMLF7');
                    `}
                </Script>
            </body>
        </html>
    );
}
