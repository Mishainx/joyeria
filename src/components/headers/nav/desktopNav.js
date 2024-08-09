import Link from "next/link";

export default function DesktopNav({ pages }) {
  return (
    <ul className="hidden text-white lg:flex space-x-4">
      {pages.map((page, index) => (
        <li key={index} >
          <Link href={page.path}>
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
