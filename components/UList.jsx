import React from 'react';
import Link from 'next/link';
import { dm_sans } from "@/utils/fonts";
const Ulist = ({
  url,
  linkText,
  isActive,
  externalLinks,
}) => {
  return (
    <li className="flex vm-link">
      {externalLinks ? (
        <a
          href={url}
          rel="noreferrer"
          target="_blank"
          className={`${dm_sans.className} ${isActive ? 'vm-link-active' : ''}`}
        >
          {linkText}
        </a>
      ) : (
        <Link
          href={url}
          className={`${dm_sans.className} ${isActive ? 'vm-link-active' : ''}`}
        >
          {linkText}
        </Link>
      )}
    </li>
  );
};

export default Ulist;
