import Link from "next/link"
import { NavbarContainer, NavbarSection } from "./styled"
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
    <NavbarContainer>
        <NavbarSection active={pathname == '/'}><Link href="/">Main</Link></NavbarSection>
        <NavbarSection active={pathname == '/contests'}><Link href="/contests">Contests</Link></NavbarSection>
        <NavbarSection active={pathname == '/auditors'}><Link href="/auditors">Auditors</Link></NavbarSection>
        <NavbarSection active={pathname == '/profile'}>Profile</NavbarSection>
    </NavbarContainer>
    )
}