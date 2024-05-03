import { init } from "../confg/init"
import { sendRawTransaction } from "../modules/transaction.m";
import { TransactionRequest } from "../type/ethersType";

/**
 * [cli] ts-node script/run/signRawTransaction.ts
 */
async function main() {
    const {provider,wallet} = init("tevmos")
    
    const tx: TransactionRequest = {
        to: "0xa6CFd862Bf10Ac4392f9AC56962aa57b3B5110Cd",
        value: 100,
        gasLimit: 21000,
      };

    const _tx = await wallet.populateTransaction(tx)
    console.log(_tx);

    const raw = await wallet.signTransaction(_tx)
    console.log("raw : " + raw);

    const receipt = await sendRawTransaction(provider,raw)
    console.log(receipt);
    
}

main()

//1531862492