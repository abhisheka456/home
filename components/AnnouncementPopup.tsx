import React from 'react';

interface AnnouncementPopupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const announcements = [
  {
    id: 1,
    title: 'New Research Paper Published',
    content: 'Our latest paper on AI optimization has been published in Journal X',
    date: '2 days ago'
  },
  {
    id: 2,
    title: 'Upcoming Conference',
    content: 'I will be speaking at the International AI Conference next month',
    date: '1 week ago'
  },
  {
    id: 3,
    title: 'Website Update',
    content: 'Added new projects section to showcase recent work',
    date: '3 weeks ago'
  }
];

const AnnouncementPopup: React.FC<AnnouncementPopupProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-16 right-4 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-indigo-700 rounded-t-xl">
        <h3 className="font-bold text-lg text-white">Latest Announcements</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-indigo-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {announcements.map(announcement => (
          <div key={announcement.id} className="p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <h4 className="font-semibold text-indigo-700 dark:text-indigo-300">{announcement.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{announcement.content}</p>
            <p className="text-xs text-gray-400 dark:text-gray-400 mt-2">{announcement.date}</p>
          </div>
        ))}
      </div>
      <div className="p-3 bg-gray-50 dark:bg-gray-700 text-center rounded-b-xl">
        <button
          onClick={() => setIsOpen(false)}
          className="text-sm font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-100 px-4 py-2 rounded-lg bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
        >
          Close Notifications
        </button>
      </div>
    </div>
  );
};

export default AnnouncementPopup;