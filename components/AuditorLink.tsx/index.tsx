import { formatAddress } from "@utils/utils"
import { AuditorLinkContainer } from "./styled"

export const AuditorLink = ({address}: {address: string}) => {
    return (<AuditorLinkContainer href={`/auditor/${address}`}>{formatAddress(address)}</AuditorLinkContainer>)
}