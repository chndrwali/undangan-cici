import React from 'react';
import Link from 'next/link';

interface ProfileCardProps {
  name: string;
  description: string;
  parents: string;
  instagram: string;
  backgroundImage: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, parents, instagram, backgroundImage }) => {
  return (
    <div className="flex flex-col items-center bg-cover bg-center bg-no-repeat p-8" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-50 p-4 rounded-md text-white text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="mt-2">{description}</p>
        <p className="mt-1 text-sm">{parents}</p>
        <Link href={instagram} className="mt-4 inline-block text-blue-400">
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
