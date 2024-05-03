import { JsonRpcProvider } from "../type/ethersType";

export const sendRawTransaction = async (provider:JsonRpcProvider,raw:string) => {
    const response = await provider.sendTransaction(raw)

    console.log("Transaction Response");
    console.log(response);
    return await response.wait()
}