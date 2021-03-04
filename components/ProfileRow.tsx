import {Profile} from "types/profile";
import Image from "next/image";

export const ProfileRow = ({ profile }: { profile: Profile }) =>
  <div className="gap-2 flex-row-reverse items-center">
    {profile.url
      ? <a href={profile.url} target="_blank" className="hover:text-indigo-600">{profile.user}</a>
      : profile.user
    }
    {profile.icon && <Image src={profile.icon} alt={profile.service} width={24} height={24}/>}
  </div>;
