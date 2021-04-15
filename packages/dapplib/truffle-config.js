require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note rifle unknown hope enter olympic slogan'; 
let testAccounts = [
"0x915cf7905cf3700181be1cd672c993b302b5085a0c664124d2cb4bff03559152",
"0x6990665cd4343d043bf36ac3fbdda7d10fce60e4fcaa9de21e7ff81724de8a93",
"0xa9c51d30d5a6b1c1c3bb9d81dddb61f0aab4834a5d84959cdb57fdda536867ea",
"0xef982af6971b3d2256843a3e86f41568d5be545723ae957983524d24b69dd834",
"0x660c0e759ee4e4484eef0818ad86f52f4b0a6eb08de632203ab0b690b1a8305c",
"0xe283eb7c9ed491d50ceee7b09061077ed6771ee2e1237e302773e221297e83dc",
"0x711f3ae28d8064a1912ee23ae75b88665b2318b80c0ff257f377a9f5f68aaf30",
"0xfe40a8055205f5e7fa453c3d5b4dc8dc43e634041fea4eb4a8e75fd7a3ff203d",
"0xbd93856450648efebf8e5d9d7ee7c9559f5d442f182387c6badd3d3304caae36",
"0x595b9f0d68bfd90ed849122c1e4b6f1ecdda5fd3582555d0bd150f23e39f08e4"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
