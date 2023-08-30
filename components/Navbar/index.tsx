import Link from "next/link"
import { ConnectWallet, NavbarContainer, NavbarSection } from "./styled"
import { usePathname } from "next/navigation";
import { useAccount, useConnect } from "wagmi";
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { polygon } from '@wagmi/core/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { publicProvider } from '@wagmi/core/providers/public'
import { Web3Button } from "@web3modal/react";

export const Navbar = () => {
    const pathname = usePathname();

    const { connector: activeConnector, isConnected } = useAccount();
    const { connect, connectors, error, isLoading, pendingConnector } =
      useConnect({
        connector: activeConnector
      })
  
    return (
    <NavbarContainer>
        <NavbarSection active={pathname == '/'}><Link href="/">Main</Link></NavbarSection>
        <NavbarSection active={pathname == '/contests'}><Link href="/contests">Contests</Link></NavbarSection>
        {/* <NavbarSection active={pathname == '/auditors'}><Link href="/auditors">Auditors</Link></NavbarSection> */}
        <NavbarSection active={pathname == '/profile'}><Link href="/profile">Profile</Link></NavbarSection>
        
        <ConnectWallet><Web3Button /></ConnectWallet>
    </NavbarContainer>
    )
}