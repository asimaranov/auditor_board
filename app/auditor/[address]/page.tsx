import { AuditorPage } from "components/AuditorPage";

export default function Auditor({ params }: { params: { address: string } }) {
  return (
    <AuditorPage address={params.address} />
  )
}
