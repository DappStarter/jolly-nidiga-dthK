require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture street cruise museum coconut gentle light army gesture'; 
let testAccounts = [
"0xced14e2af00b1ce357bbc6a73f2170918cc4db5474fd6b4bc4ff64ef744ac4f8",
"0xe0972a75048a1b503c7ce2ec771c78e36b6458f796975c97d5c92e72dc77e402",
"0x27dc095cea97d7a84e3090df3d09316ea47818e8a436faecdb3be1e33b29abaa",
"0x10d95c1ad0cae4f552332549002432a6a35cd42bce1e6be58fdfc0626a751c36",
"0x430705b8e50e23e0895e77b9799077565c2d6e3b4c315fb8fac00826d9b9a37e",
"0xd991fd6c63538bb143b31a594426012b9e20b6f227042aec47f7b8b70c4a2c36",
"0xc084bd4120614ada6c8a28d7b04e024ce592c56369581db982a501ca1a162969",
"0x7f324eea4f9a675febb6b032c7a7293388d1b42ab0625367d0bc0a5754330c4c",
"0x25fba7ab6394ba44d038d7f1915a1ce448a49e51a7fd4b115f8eb77f8ff5d0d5",
"0x58e950e19b62aaae2d4795850a6bf563b1c8ebc953468f462af13daa3afacb44"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


