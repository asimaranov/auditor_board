import { FAUCET_ADDRESS } from '@constants/index'
import { ethers, providers } from 'ethers'
import { NextResponse } from 'next/server'
import { FAUCET_ABI } from '@abis/Faucet';

const provider = new providers.JsonRpcProvider(`https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`);
const signer = new ethers.Wallet(process.env.FAUCET_PRIVATE_KEY!, provider);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const auditor = searchParams.get('auditor');
  const nftId = searchParams.get('nftId');

  const faucetContract = new ethers.Contract(
    FAUCET_ADDRESS!,
    FAUCET_ABI,
    provider
  ).connect(signer);

  const feeData = await provider.getFeeData()

  try {
  const gas = faucetContract.estimateGas.requestAirdrop(
    auditor,
    nftId,
    {
      gasPrice: feeData.gasPrice
    }
  );

  const receipt = await faucetContract.requestAirdrop(
    auditor,
    nftId,
    {
      gasPrice: feeData.gasPrice  // Otherwise transaction stucks in polygon
    }
  );

  return NextResponse.json({error: null, ...receipt})

  } catch (e) {
    return NextResponse.json({error: e})
  }
}
