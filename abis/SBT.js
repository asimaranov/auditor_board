export const SBT_ABI = [
    {
       "inputs":[
          {
             "internalType":"string",
             "name":"uri_",
             "type":"string"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "indexed":true,
             "internalType":"bytes32",
             "name":"previousAdminRole",
             "type":"bytes32"
          },
          {
             "indexed":true,
             "internalType":"bytes32",
             "name":"newAdminRole",
             "type":"bytes32"
          }
       ],
       "name":"RoleAdminChanged",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"account",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          }
       ],
       "name":"RoleGranted",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"account",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"sender",
             "type":"address"
          }
       ],
       "name":"RoleRevoked",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"operator",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"TransferSingle",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"operator",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"value",
             "type":"uint256"
          }
       ],
       "name":"TransferSingleStarted",
       "type":"event"
    },
    {
       "inputs":[
          
       ],
       "name":"BURNER_ROLE",
       "outputs":[
          {
             "internalType":"bytes32",
             "name":"",
             "type":"bytes32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"DEFAULT_ADMIN_ROLE",
       "outputs":[
          {
             "internalType":"bytes32",
             "name":"",
             "type":"bytes32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"MINTER_ROLE",
       "outputs":[
          {
             "internalType":"bytes32",
             "name":"",
             "type":"bytes32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"OPERATOR_ROLE",
       "outputs":[
          {
             "internalType":"bytes32",
             "name":"",
             "type":"bytes32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          }
       ],
       "name":"acceptToken",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          }
       ],
       "name":"acceptTokenBatch",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          }
       ],
       "name":"balanceOf",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address[]",
             "name":"accounts",
             "type":"address[]"
          },
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          }
       ],
       "name":"balanceOfBatch",
       "outputs":[
          {
             "internalType":"uint256[]",
             "name":"",
             "type":"uint256[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"from",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          }
       ],
       "name":"burn",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address[]",
             "name":"from",
             "type":"address[]"
          },
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          }
       ],
       "name":"burnBatch",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"id_",
             "type":"uint256"
          },
          {
             "internalType":"bool",
             "name":"isAllowed",
             "type":"bool"
          }
       ],
       "name":"changeMintingState",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"enableNextIDMinting",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getIds",
       "outputs":[
          {
             "internalType":"uint256[]",
             "name":"",
             "type":"uint256[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getIdsLength",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"user",
             "type":"address"
          }
       ],
       "name":"getPendingBalance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          },
          {
             "internalType":"address[]",
             "name":"users",
             "type":"address[]"
          }
       ],
       "name":"getPendingBalances",
       "outputs":[
          {
             "internalType":"uint256[]",
             "name":"",
             "type":"uint256[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          }
       ],
       "name":"getRoleAdmin",
       "outputs":[
          {
             "internalType":"bytes32",
             "name":"",
             "type":"bytes32"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"user",
             "type":"address"
          }
       ],
       "name":"getTokenData",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"amount",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"weight",
                   "type":"uint256"
                },
                {
                   "internalType":"string",
                   "name":"metaData",
                   "type":"string"
                },
                {
                   "internalType":"bytes32[]",
                   "name":"params",
                   "type":"bytes32[]"
                }
             ],
             "internalType":"struct SBT.TokenData",
             "name":"",
             "type":"tuple"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          },
          {
             "internalType":"address[]",
             "name":"users",
             "type":"address[]"
          }
       ],
       "name":"getTokensData",
       "outputs":[
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"amount",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"weight",
                   "type":"uint256"
                },
                {
                   "internalType":"string",
                   "name":"metaData",
                   "type":"string"
                },
                {
                   "internalType":"bytes32[]",
                   "name":"params",
                   "type":"bytes32[]"
                }
             ],
             "internalType":"struct SBT.TokenData[]",
             "name":"",
             "type":"tuple[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"getURI",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"user",
             "type":"address"
          }
       ],
       "name":"getUserTokens",
       "outputs":[
          {
             "internalType":"uint256[]",
             "name":"",
             "type":"uint256[]"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"grantRole",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"hasRole",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"idIsExist",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"to",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          },
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"amount",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"weight",
                   "type":"uint256"
                },
                {
                   "internalType":"string",
                   "name":"metaData",
                   "type":"string"
                },
                {
                   "internalType":"bytes32[]",
                   "name":"params",
                   "type":"bytes32[]"
                }
             ],
             "internalType":"struct SBT.TokenData",
             "name":"data",
             "type":"tuple"
          }
       ],
       "name":"mint",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"mintAllowed",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address[]",
             "name":"to",
             "type":"address[]"
          },
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          },
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"amount",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"weight",
                   "type":"uint256"
                },
                {
                   "internalType":"string",
                   "name":"metaData",
                   "type":"string"
                },
                {
                   "internalType":"bytes32[]",
                   "name":"params",
                   "type":"bytes32[]"
                }
             ],
             "internalType":"struct SBT.TokenData[]",
             "name":"data",
             "type":"tuple[]"
          }
       ],
       "name":"mintBatch",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"nextID",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"renounceRole",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes32",
             "name":"role",
             "type":"bytes32"
          },
          {
             "internalType":"address",
             "name":"account",
             "type":"address"
          }
       ],
       "name":"revokeRole",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"string",
             "name":"newuri",
             "type":"string"
          }
       ],
       "name":"setURI",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"bytes4",
             "name":"interfaceId",
             "type":"bytes4"
          }
       ],
       "name":"supportsInterface",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          }
       ],
       "name":"totalSupply",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"user",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"id",
             "type":"uint256"
          },
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"amount",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"weight",
                   "type":"uint256"
                },
                {
                   "internalType":"string",
                   "name":"metaData",
                   "type":"string"
                },
                {
                   "internalType":"bytes32[]",
                   "name":"params",
                   "type":"bytes32[]"
                }
             ],
             "internalType":"struct SBT.TokenData",
             "name":"data",
             "type":"tuple"
          }
       ],
       "name":"update",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address[]",
             "name":"users",
             "type":"address[]"
          },
          {
             "internalType":"uint256[]",
             "name":"ids",
             "type":"uint256[]"
          },
          {
             "components":[
                {
                   "internalType":"uint256",
                   "name":"amount",
                   "type":"uint256"
                },
                {
                   "internalType":"uint256",
                   "name":"weight",
                   "type":"uint256"
                },
                {
                   "internalType":"string",
                   "name":"metaData",
                   "type":"string"
                },
                {
                   "internalType":"bytes32[]",
                   "name":"params",
                   "type":"bytes32[]"
                }
             ],
             "internalType":"struct SBT.TokenData[]",
             "name":"data",
             "type":"tuple[]"
          }
       ],
       "name":"updateBatch",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"id_",
             "type":"uint256"
          }
       ],
       "name":"uri",
       "outputs":[
          {
             "internalType":"string",
             "name":"",
             "type":"string"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"userTokens",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    }
 ]