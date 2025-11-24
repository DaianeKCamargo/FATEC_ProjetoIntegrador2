"use client";

import Script from "next/script";

export default function VLibras() {
    return (
        <>
            <Script
                src="https://vlibras.gov.br/app/vlibras-plugin.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // @ts-ignore
                    new window.VLibras.Widget("https://vlibras.gov.br/app");
                }}
            />

            <div data-vw="true" className="enabled">
                <div data-vw-access-button="true"></div>
                <div data-vw-plugin-wrapper="true">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
        </>
    );
}
