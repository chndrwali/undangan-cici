import ProfileCard from '@/components/ui/profile-card';

const Mempelai = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-row space-x-8">
        <ProfileCard name="ARI AGIANA" description="Putra Kedua Dari" parents="Bpk. Agus Kusnadi & Ibu Nonong Desi" instagram="https://www.instagram.com/ariagiana" backgroundImage="/bg/5.webp" />
        <ProfileCard name="CICI FEBRIANTI" description="Putra Kedua Dari" parents="Bpk. Desi Suryana & Ibu Ratniti" instagram="https://www.instagram.com/cicifebrianti" backgroundImage="/bg/1.webp" />
      </div>
    </div>
  );
};

export default Mempelai;
