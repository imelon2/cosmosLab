#!/bin/sh

# Path Config
ROOT=$HOME/.ethermintd
CONFIG_ROOT=$ROOT/config
GENESIS_PATH=$CONFIG_ROOT/genesis.json

# Auth Config
GENESIS_ACCOUNT=test

# Node Config
MONIKER=choi-test
CHAIN_ID=choi_4444-1

# Block Config
BLOCKGASLIMIT='"15000000"'

echo "remove "$ROOT
rm -rf $ROOT && 

echo "init"
ethermintd init $MONIKER --chain-id $CHAIN_ID &&


echo "add-genesis-account"
ethermintd add-genesis-account test 1000000000stake,1000000000000000000aphoton


echo "gentx"
ethermintd gentx test 70000000stake --chain-id $CHAIN_ID

echo "collect-gentxs"
ethermintd collect-gentxs

echo "Set max-gas : "$GENESIS_PATH 
jq '.consensus_params.block.max_gas ='$BLOCKGASLIMIT $GENESIS_PATH > temp.json && mv temp.json $GENESIS_PATH

ehco "start"
ethermintd start --json-rpc.api eth,net,web3,debug


echo "End"