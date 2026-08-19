import React, { useState } from 'react';
import Header from '@/components/Header';
import Aside from '@/components/Aside';
import PageScrollBar from '@/components/PageScrollBar';
import AnnouncementPopup from '@/components/AnnouncementPopup';

interface LayoutProps {
  border?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ border = '', children }) => {
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);

  return (
    <>
      <AnnouncementPopup 
        isOpen={isAnnouncementOpen} 
        setIsOpen={setIsAnnouncementOpen} 
      />
      <div className="bg-white text-black dark:bg-gray-900">
        <Header
          setIsAnnouncementOpen={setIsAnnouncementOpen}
          isAnnouncementOpen={isAnnouncementOpen}
        />
        <PageScrollBar
          color="#0aa863"
          gradientColor="#2bf29c"
          gradient={true}
          height={4}
        />
        <div className="lg:px-12 xl:px-48 flex flex-col lg:flex-row">
          <Aside />
          <main className="flex-1 p-3 mt-3 lg:px-8 lg:pb-8 lg:pt-4 h-auto w-full">
            <div className={`p-4 lg:px-6 lg:pb-6 lg:pt-2 border-gray-300 rounded ${border}`}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
