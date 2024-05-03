import dotenv from "dotenv";
import { Wallet as wal, providers as prov } from "ethers";
dotenv.config();

type IChainName = "tevmos"
export const init = (chain:IChainName) => {
    const providers = {
        "tevmos": new prov.JsonRpcProvider(process.env.EVMOS_TEST_PROVIDER_URL)
    }

    const wallets = {
        "tevmos": new wal(process.env.PRIVATE_KEY!,providers["tevmos"])
    }

    return {
        provider : providers[chain],
        wallet : wallets[chain]
    }
}