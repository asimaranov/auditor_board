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
      <NavbarSection active={pathname == '/'}><Link href="/">Main</Link></NavbarSection>
      <NavbarSection active={pathname == '/contests'}><Link href="/contests">Contests</Link></NavbarSection>
      {/* <NavbarSection active={pathname == '/auditors'}><Link href="/auditors">Auditors</Link></NavbarSection> */}
      <NavbarSection active={pathname == `/auditor/${address}`}><Link href={`/auditor/${address ? address : 'me'}`}>Me</Link></NavbarSection>
      <ConnectWallet>
        <Web3Button />
      </ConnectWallet>
    </NavbarContainer>
  )
}