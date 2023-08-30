'use client';

import { AuditorPage } from "components/AuditorPage";
import { useAccount } from "wagmi";

export const ProfilePage = () => {
    const { address } = useAccount({});

    return (
        <AuditorPage address={address!} />
    )
}