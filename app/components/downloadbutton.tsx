"use client"
import React from 'react';
import { IoMdDownload } from 'react-icons/io';

interface MyComponentProps {
  downloadbutton: string;
}

const scheduleurl = '../schedule.pdf';

const MyComponent: React.FC<MyComponentProps> = ({ downloadbutton }) => {
  const downloadFileAtURL = () => {
    const fileName = 'Schedule.pdf';
    const aTag = document.createElement('a');
    aTag.href = scheduleurl;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className='App'>
      {/* Download Schedule */}
      <button onClick={downloadFileAtURL} className="flex place-content-center items-center text-white px-4 py-2 bg-footerpink rounded-full gap-1">
        Download Schedule <IoMdDownload className='place-items-center'/>
      </button>
    </div>
  );
};

export default MyComponent;
