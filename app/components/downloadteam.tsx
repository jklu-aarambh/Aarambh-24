"use client"
import React from 'react';
import { IoMdDownload } from 'react-icons/io';

interface DownloadTeamProps {
  downloadbutton: string;
}

const teamlisturl = '../teamlist.pdf';

const DownloadTeam: React.FC<DownloadTeamProps> = ({ downloadbutton }) => {
  const downloadFileAtURL = () => {
    const fileName = 'teamlist.pdf';
    const aTag = document.createElement('a');
    aTag.href = teamlisturl;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      {/* Download teamlist */}
      <button><a
        className="flex place-content-center items-center text-white px-4 py-2 bg-footerpink rounded-full gap-1"
        href="/teamlist.pdf" download>
        Download TeamList{" "}<IoMdDownload className='place-items-center' />
      </a>
      </button>
    </div>
  );
};

export default DownloadTeam;
