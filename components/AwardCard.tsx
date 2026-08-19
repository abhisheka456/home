import Link from 'next/link';
import React from 'react';
import { IoUnlinkOutline } from 'react-icons/io5';

export default function AwardCard(props) {
  const isDemoLink = props.link;
  let demoLink;
  if (isDemoLink) {
    demoLink = (
      <Link href={isDemoLink}>
        <div className="flex mb-2 gap-2 items-center mt-3">
          <IoUnlinkOutline className="flex-none text-lg" />
          <p className="text-base text-blue-600 hover:text-blue-800 hover:underline transition-colors">
            {props.linkText}
          </p>
        </div>
      </Link>
    );
  } else {
    demoLink = <></>;
  }
  return (
    <div className="p-4 mb-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-400 dark:border-indigo-500">
      <div className="flex gap-3 items-center">
        {props.icon && <span className="text-3xl text-indigo-500 dark:text-indigo-300">{props.icon}</span>}
        <h5 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
          {props.title}
        </h5>
      </div>
      <div className="ml-12 mt-2">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">{props.place}</h3>
        <h3 className="text-base text-blue-600 dark:text-blue-400 font-normal">{props.date}</h3>
        {props.description && (
          <p className="text-base text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">{props.description}</p>
        )}
        {demoLink}
      </div>
    </div>
  );
}
