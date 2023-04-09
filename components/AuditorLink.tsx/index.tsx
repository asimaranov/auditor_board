import { formatAddress } from "@utils/utils"
import { AuditorLinkContainer } from "./styled"
import Link from "next/link"

export const AuditorLink = ({address}: {address: string}) => {
    return (<AuditorLinkContainer>
        <Link href={{pathname: "/auditor/[address]", query: {address}}} as={`/auditor/${address}`}>
{formatAddress(address)}</Link></AuditorLinkContainer>)
}