import Link from "next/link"
import { ConnectWallet, NavbarContainer, NavbarSection } from "./styled"
import { usePathname } from "next/navigation";
import { Web3Button } from "@web3modal/react";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavbarContainer>
      <NavbarSection active={pathname == '/'}><Link href="/">Main</Link></NavbarSection>
      <NavbarSection active={pathname == '/contests'}><Link href="/contests">Contests</Link></NavbarSection>
      {/* <NavbarSection active={pathname == '/auditors'}><Link href="/auditors">Auditors</Link></NavbarSection> */}
      <NavbarSection active={pathname == '/profile'}><Link href="/profile">Me</Link></NavbarSection>
      <ConnectWallet>
        <Web3Button />
      </ConnectWallet>
    </NavbarContainer>
  )
}