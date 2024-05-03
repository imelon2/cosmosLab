import {encode as encodeBech32} from "bech32-buffer"
import { ripemd160 } from '@noble/hashes/ripemd160';
import dotenv from "dotenv";
import { ethers } from 'ethers';
import { SigningKey, sha256 } from 'ethers/lib/utils';
import { remove0x, convertTo5BitArray, numberToBinary } from '../utils';
dotenv.config();

/**
 * Secp256k1 -> compressedPublicKey -> sha256 -> RIPEMD-160 -> HRP + separator char(1) + Bech32 Encode + BCH::checksum(3 bytes)
 * @link https://docs.cosmos.network/main/build/architecture/adr-028-public-key-addresses#legacy-public-key-addresses-dont-change
 * @link https://en.bitcoin.it/wiki/Bech32
 * @link https://emn178.github.io/online-tools/ripemd_160.html
 * @link https://slowli.github.io/bech32-buffer/
 */
function main() {
    const HRP = "neutron" // Human-readable part
    const PK = process.env.PRIVATE_KEY!;

    const bytes32 = ethers.utils.arrayify(PK)
    const key = new SigningKey(bytes32)
    const sha = sha256(key.compressedPublicKey)

    
    const text = Buffer.from(remove0x(sha),"hex")
    const ripemd160ed = ripemd160(text);
    
    
    const ripemd160ed_hex = Buffer.from(ripemd160(text)).toString("hex");
    const ripemd160ed_bit5 = convertTo5BitArray(ripemd160ed).map((nibble) => numberToBinary(5,nibble));
    
    const address = encodeBech32(HRP,ripemd160ed)
    console.log(address);
    
}


main()