This is the audior board project that shows global auditors results in the Stronghold DAO (ex. MixBytes Camp) and shows info from auditor's SoulBound Token\
[Stronghold DAO Twitter](https://twitter.com/stronghold_dao)\
[Stronghold DAO Website](https://strongholdsec.io/)\
[More info about SBT](https://twitter.com/MixBytes/status/1643629493922287618?s=20)

## Goals of the project
- Make your results recorded in SBT shareable for LinkedIn 
- Connect your public credentials to your results. Auditors can link their LinkedIn or social accounts to their SBT by adding social info to contract
- Create global scoreboard to develop the spirit of competition
- Handy check what findings were accepted in competition
- Track your progress
- Implement achievements to make more fun for auditors
- Share your portfolio to social networks
- Easily mint new SBT
- Generate personal certificate PDF

## Roadmap
#### Q4 2023
- Move current `Contests` page to `Global Stats` page
- Make `Contests` page where all the contests are listed
- Make page for every contest with it's results
- Allow auditors to add their telegram, twitter, github to the auditor's page. Add share (copy link or tweet) button to auditor and contest pages [DONE]
- Implement smartcontract to store auditor's social links [DONE]
- Calculate global DAO statistics e.g. total number of reported bugs by all the users

#### Q1 2024
- Implement telegram DAO management to handle proposals and manage DAO funds e.g. to motivite internal content generation or hackatons. Bot should collect proposal polls result as an off-chain oracle, create on-chain proposal and ask DAO admins to confirm the results.
- Implement smartcontract for DAO management

## How to contribute
- Redesign in Figma
- Propose new features to display
- Pull requests are welcome


## Deployment
### Vercel
Just add repo to the Vercel workspace and it's automatically deployed and updated

### NodeJS
To run application using NodeJS, run 
- `yarn next build`
- `yarn next start`

### Docker
To deploy application using docker, run 
- `docker build -t auditor-board .`
- `docker run -p 3000:3000 auditor-board`

## Env variables

Should be stored in `.env` file like described in `.env.example`

- `NEXT_PUBLIC_POLYGON_API_KEY`\
Alchemy api key for polygon mainnet. Can be created on https://dashboard.alchemy.com/

- `NEXT_PUBLIC_WALLECTCONNECT_PROJECT_ID`\
Walletconnect project api key. Can be created on https://cloud.walletconnect.com/app

- `FAUCET_PRIVATE_KEY`\
Private key with MATIC balance to create airdrop transactions. Highly recommended to create new private key for this purpose