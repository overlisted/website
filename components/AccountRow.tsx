import {Account} from "types/account";
import Image from "next/image";

export const AccountRow = ({ account }: { account: Account }) =>
  <>
    {account.icon && <Image className="col-span-1" src={account.icon} alt={account.service} width={24} height={24}/>}
    {account.url
      ? <a href={account.url} target="_blank" className="col-span-2 hover:text-indigo-600">{account.user}</a>
      : <span className="col-span-2">account.user</span>
    }
  </>;
