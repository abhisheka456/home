import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import {
  IoLogoGithub,
  IoLogoGoogle,
  IoDocumentTextOutline,
  IoPaperPlane,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { FaResearchgate, FaOrcid } from 'react-icons/fa';

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact :: Abhishek Kumar</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-4">Contact Details</h3>
        <div className="mt-3">
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-lg font-semibold">
              Let's talk about everything!
            </h2>
            <h3 className="text-sm md:text-md">
              Don't like forms? Send me an{' '}
              <a
                href="mailto:abhisheka456@gmail.com"
                className="text-blue-600 hover:underline"
              >
                email
              </a>
              . 👋
            </h3>
            <h4>
              <span className="text-sm md:text-md font-semibold">Email : </span>
              abhisheka456@gmail.com
            </h4>
            <h4>
              <span className="text-sm md:text-md font-semibold">
                Mobile :{' '}
              </span>{' '}
              (+91) 8858445884
            </h4>
            <h4>
              <span className="text-sm md:text-md font-semibold">
                Location :{' '}
              </span>{' '}
              Czech Republic
            </h4>
            <div className="mt-2">
              <div className="text-black text-xl flex gap-5">
                <Link href="https://github.com/abhisheka456">
                  <IoLogoGithub className="hover:text-pink-600" />
                </Link>
                <Link href="https://scholar.google.com/citations?user=uZRyTFIAAAAJ">
                  <IoLogoGoogle className="hover:text-pink-600" />
                </Link>
                <Link href="https://www.researchgate.net/profile/Abhishek-Kumar-173">
                  <FaResearchgate className="hover:text-pink-600" />
                </Link>
                <Link href="https://www.webofscience.com/wos/author/record/ABA-5251-2021">
                  <IoDocumentTextOutline className="hover:text-pink-600" />
                </Link>
                <Link href="https://orcid.org/0000-0002-8783-5128">
                  <FaOrcid className="hover:text-pink-600" />
                </Link>
                <Link href="https://telegram.me/">
                  <IoPaperPlane className="hover:text-pink-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-6 mb-4">Contact Form</h3>
        <div className="flex flex-col gap-2 px-4">
          <form>
            <div className="grid grid-cols-1 gap-6 md:max-w-md lg:max-w-lg">
              <label className="block">
                <span className="text-gray-900">Full Name</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Your name"
                  name="Name"
                  id="Name"
                />
              </label>
              <label className="block">
                <span className="text-gray-900">Email Address</span>
                <input
                  type="email"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="you@example.com"
                  name="Email"
                  id="Email"
                />
              </label>
              <label className="block">
                <span className="text-gray-900">Subject</span>
                <input
                  type="text"
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Just a casual hello."
                  name="Subject"
                  id="Subject"
                />
              </label>

              <label className="block">
                <span className="text-gray-900">Message</span>
                <textarea
                  className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  rows={4}
                  placeholder="How can I help you?"
                  name="Message"
                  id="Message"
                ></textarea>
              </label>
              <button
                type="submit"
                className="flex gap-1 items-center w-max border-none rounded px-3 py-1 bg-green-700 text-white hover:bg-green-600"
              >
                <IoPaperPlaneOutline />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}