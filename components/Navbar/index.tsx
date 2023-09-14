import Link from "next/link"
import { ConnectWallet, NavbarContainer, NavbarSection } from "./styled"
import { usePathname } from "next/navigation";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";

export const Navbar = () => {
  const pathname = usePathname();
  const { address } = useAccount({});
  
  return (
    <NavbarContainer>
      <Link href='/'>
        <NavbarSection active={pathname == '/'}>Main</NavbarSection>
      </Link>
      <Link href='/contests'>
        <NavbarSection active={pathname == '/contests'}>Contests</NavbarSection>
      </Link>
      <Link href={`/auditor/${address ? address : 'me'}`}>
        <NavbarSection active={pathname == `/auditor/${address ? address : 'me'}`}>Me</NavbarSection>
      </Link>
      <ConnectWallet>
        <Web3Button />
      </ConnectWallet>
    </NavbarContainer>
  )
}