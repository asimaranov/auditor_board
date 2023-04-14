import { providers } from "ethers";

export const getMedal = (top: number) => top == 0 ? '🥇' : top == 1 ? '🥈' : top == 2 ? '🥉' : '';
export const formatAddress = (x: string) => x.slice(0, 6) + '..' + x.slice(38);
export const competitionNames: {[id: number]: string} = {
    0: 'Farm Winter 2023',
    1: 'Farm Spring 2022',
    2: 'Farm Autumn 2022',
    3: 'Moonwell Contest',
    4: 'Sidechain Oracles Contest',
    5: 'Lido Contest'
}
export const guessCompetitionName = (id: number) => {
    return competitionNames?.[id] || '???';
}

export const provider = new providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL);  // Polygon rpc on alchemy.com
export const matic = {
  name: 'matic',
  chainId: 137,
  _defaultProvider: (providers: any) => provider
}
