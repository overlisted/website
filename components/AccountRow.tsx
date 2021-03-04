import {Account} from "types/account";
import Image from "next/image";

export const AccountRow = ({ account }: { account: Account }) =>
  <div className="gap-2 flex-row-reverse items-center">
    {account.url
      ? <a href={account.url} target="_blank" className="hover:text-indigo-600">{account.user}</a>
      : account.user
    }
    {account.icon && <Image src={account.icon} alt={account.service} width={24} height={24}/>}
  </div>;
