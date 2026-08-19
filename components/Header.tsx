import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  IoAlertCircleOutline,
  IoAlbumsOutline,
  IoMailOutline,
  IoMenuSharp,
  IoChatboxEllipsesOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoNewspaperOutline,
  IoLogoGithub,
  IoDocumentTextOutline,
  IoCode,
  IoNotificationsOutline,
} from 'react-icons/io5';
import { FaGraduationCap, FaResearchgate, FaOrcid } from 'react-icons/fa';

import DarkToggle from './DarkToggle';

export default function Header({ setIsAnnouncementOpen, isAnnouncementOpen }) {
  const router = useRouter();
  const [subHeader, setSubHeader] = useState(0);

  const resizeSubHeader = () => {
    if (window.scrollY >= 60) {
      setSubHeader(0);
    } else {
      setSubHeader(1);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', resizeSubHeader);
  }

  return (
    <>
      {/* Mobile Nav Starts */}
      <div
        className="block sticky top-0 lg:hidden h-auto bg-gray-900 dark:bg-black"
        id="header"
      >
        <div className="flex justify-between px-4  py-2 text-white dark:text-white">
          <Menu as="div" className="relative inline-block text-left pt-1">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="focus:outline-none">
                    <IoMenuSharp className="text-3xl" aria-hidden="true" />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="absolute left-2 w-60 origin-top-right bg-white dark:bg-black dark:shadow-xl rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        <a
                          href="/"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoAlertCircleOutline className="w-5 h-5 mr-2" />
                          About
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/education-skills"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoSchoolOutline className="w-5 h-5 mr-2" />
                          Research & Education
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/experience"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoBriefcaseOutline className="w-5 h-5 mr-2" />
                          Experience
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/projects"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoAlbumsOutline className="w-5 h-5 mr-2" />
                          Projects
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/publications"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoNewspaperOutline className="w-5 h-5 mr-2" />
                          Publications
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/awards-certification"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoRibbonOutline className="w-5 h-5 mr-2" />
                          Awards & Certifications
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/blogs"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoChatboxEllipsesOutline className="w-5 h-5 mr-2" />
                          Blogs
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="/contact"
                          className="bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm"
                        >
                          <IoMailOutline className="w-5 h-5 mr-2" />
                          Contact
                        </a>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <Link href="/">
            <div className="flex gap-2 items-center">
              <IoCode className="text-2xl" />
              <h3 className="text-lg font-bold">Abhishek Kumar, Ph. D</h3>
            </div>
          </Link>
          <div className="pt-2">
            <DarkToggle classE="text-white" />
          </div>
        </div>
      </div>
      {/* Mobile Nav Ends */}

      {/* Large Screen Nav Starts */}
      <div
        className="hidden lg:block h-auto bg-gray-900 dark:bg-black"
        id="header"
      >
        <div className="flex flex-row justify-between px-8 py-4 text-white dark:text-white">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <IoCode className="text-2xl" />
              <h3 className="text-lg font-bold">Abhishek Kumar, Ph. D</h3>
            </div>
          </Link>

          <div className="pt-1">
            <div className="text-white text-xl flex gap-5 dark:text-white">
              <Link href="https://github.com/abhisheka456">
                <IoLogoGithub className="hover:text-blue-300" />
              </Link>
              <Link href="https://scholar.google.com/citations?user=uZRyTFIAAAAJ">
                <FaGraduationCap className="hover:text-blue-300" />
              </Link>
              <Link href="https://www.researchgate.net/profile/Abhishek-Kumar-173">
                <FaResearchgate className="hover:text-blue-300" />
              </Link>
              <Link href="https://www.webofscience.com/wos/author/record/ABA-5251-2021">
                <IoDocumentTextOutline className="hover:text-blue-300" />
              </Link>
              <Link href="https://orcid.org/0000-0002-8783-5128">
                <FaOrcid className="hover:text-blue-300" />
              </Link>
              <button onClick={() => setIsAnnouncementOpen(!isAnnouncementOpen)}>
                <IoNotificationsOutline className="hover:text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Subheader Starts */}
      <div
        className="hidden lg:block sticky top-0 bg-white h-auto border-b dark:bg-gray-800 dark:border-black"
        id="sub-header"
      >
        <div
          className={
            subHeader
              ? 'pt-8 gap-6 text-md xl:text-lg flex flex-col lg:flex-row justify-center transition ease-in-out duration-75'
              : 'pt-2 gap-6 text-md xl:text-lg flex flex-col lg:flex-row justify-center transition ease-in-out duration-75'
          }
        >
          <Link href="/">
            <div
              className={
                router.pathname == '/'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoAlertCircleOutline />
              <h1 className="ml-2">About</h1>
            </div>
          </Link>
          <Link href="/education-skills">
            <div
              className={
                router.pathname == '/education-skills'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoSchoolOutline />
              <h1 className="ml-2">Research & Education</h1>
            </div>
          </Link>
          <Link href="/experience">
            <div
              className={
                router.pathname == '/experience'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoBriefcaseOutline />
              <h1 className="ml-2">Experience</h1>
            </div>
          </Link>
          <Link href="/projects">
            <div
              className={
                router.pathname == '/projects'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoAlbumsOutline />
              <h1 className="ml-2">Projects</h1>
            </div>
          </Link>
          <Link href="/publications">
            <div
              className={
                router.pathname == '/publications'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoNewspaperOutline />
              <h1 className="ml-2">Publications</h1>
            </div>
          </Link>
          <Link href="/awards-certification">
            <div
              className={
                router.pathname == '/awards-certification'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoRibbonOutline />
              <h1 className="ml-2">Awards & Certification</h1>
            </div>
          </Link>
          <Link href="/blogs">
            <div
              className={
                router.pathname == '/blogs'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoChatboxEllipsesOutline />
              <h1 className="ml-2">Blogs</h1>
            </div>
          </Link>
          <Link href="/contact">
            <div
              className={
                router.pathname == '/contact'
                  ? 'p-2 w-auto flex border-b border-red-500 items-center'
                  : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center'
              }
            >
              <IoMailOutline />
              <h1 className="ml-2">Contact</h1>
            </div>
          </Link>
          <div className="p-2 ">
            <DarkToggle />
          </div>
        </div>
      </div>
      {/* Large Screen Nav Ends */}
    </>
  );
}
