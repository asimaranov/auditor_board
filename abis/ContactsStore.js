export const CONTACTS_STORE_ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "auditor",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "socialNetwork",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "contact",
                "type": "bytes32"
            }
        ],
        "name": "ConactSet",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "auditor",
                "type": "address"
            },
            {
                "internalType": "bytes32[]",
                "name": "socialNetworks",
                "type": "bytes32[]"
            }
        ],
        "name": "getContacts",
        "outputs": [
            {
                "internalType": "bytes32[]",
                "name": "contacts_",
                "type": "bytes32[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32[]",
                "name": "socialNetworks",
                "type": "bytes32[]"
            },
            {
                "internalType": "bytes32[]",
                "name": "contacts_",
                "type": "bytes32[]"
            }
        ],
        "name": "setContacts",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];