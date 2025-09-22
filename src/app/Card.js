import Link from "next/link";

const normalClass = "rounded-2xl border border-gray-700 bg-[#2a2a2a] p-6 shadow-sm transition hover:shadow-lg hover:border-gray-500 hover:bg-[#333333] cursor-pointer";
const experimentalClass = "p-6 rounded-lg border-2 border-dashed border-yellow-500 bg-[#2a2a2a] hover:bg-[#333333] transition-colors";

export default function Card({ title, description, longDescription, href, experimental }) {
  return (
    <Link data-tooltip-id={"cardTooltip"} data-tooltip-content={longDescription} href={href} className="w-full max-w-sm">
      <div className={experimental ? experimentalClass : normalClass}>
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </Link>
  );
}