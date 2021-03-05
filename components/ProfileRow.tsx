import { Profile } from "types/profile";
import Image from "next/image";
import { FC } from "react";

export const ProfileRow: FC<{ profile: Profile }> = ({ profile }) =>
  <div className={`gap-2 flex-row-reverse items-center ${profile.icon ? "" : "pl-8"}`}>
    {profile.url
      ? <a href={profile.url} target="_blank" rel="noreferrer" className="hover:text-indigo-600">{profile.user}</a>
      : profile.user
    }
    {profile.icon && <Image src={profile.icon} alt={profile.service} width={24} height={24}/>}
  </div>;
