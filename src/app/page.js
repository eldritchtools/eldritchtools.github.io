"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Card from "./Card";
import tools from "./tools.json";
import { Tooltip } from "react-tooltip";

export default function Home() {
    return (
        <div className="p-14 pb-20">
            <main className="flex flex-col gap-[32px] items-center sm:items-center">
                <Image
                    className="rounded-full"
                    src="/logo.png"
                    alt="logo"
                    width={128}
                    height={128}
                    priority
                />

                <div>A collection of free web tools for various games.</div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
                    {tools.main.map((tool, index) => <Card key={index} title={tool.title} description={tool.description} longDescription={tool.longDescription} href={tool.href} />)}
                </div>

                <details className="mt-12">
                    <summary className="text-center cursor-pointer text-lg font-semibold hover:underline">
                        Experimental Tools
                    </summary>
                    Tools that are mostly functional but may not be complete and are not being actively maintained. They made be picked up again or completely remade sometime in the future.
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
                        {tools.experimental.map((tool, index) => <Card key={index} title={tool.title} description={tool.description} longDescription={tool.longDescription} href={tool.href} experimental={true} />)}
                    </div>
                </details>

                <div className="flex flex-col text-sm items-center gap-4">
                    <p>Hi! I&apos;m Eld. I make free, accessible web tools for games. I also stream no-commentary gameplay of whatever I&apos;m playing from time to time.</p>
                    <p>If you’ve found my tools useful and would like to support me, consider checking out my ko-fi or other socials.</p>
                    <SocialLinks />
                </div>

                <Tooltip
                    id={"cardTooltip"}
                    className="outline outline-1 outline-grey-100 whitespace-pre-wrap z-[9999] max-w-2xl"
                    style={{ backgroundColor: "black", borderRadius: "0.5rem" }}
                />
            </main>
        </div>
    );
}
