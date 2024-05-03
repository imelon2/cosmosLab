// import { create } from "@cosmjs/stargate";
import { createBankAminoConverters } from "@cosmjs/stargate";
import { decodeTxRaw } from "@cosmjs/proto-signing";
import { fromBase64 } from "@cosmjs/encoding";

async function main() {
  /**
   * [cli] ts-node script/run/decodeComsmosTx.ts
   */
//   const raw =
//     "CowBCokBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmkKK2V0aG0xNmV6cjIyanpudWxsODVzMzl6cHFtajc5OGNycmRwZDN4YzM4N3oSK2V0aG0xNW04YXNjNGx6emt5OHloZTQzdGZ2MjQ5MHZhNHp5eGRuNWVjeXYaDQoHYXBob3RvbhICMTASegpZCk8KKC9ldGhlcm1pbnQuY3J5cHRvLnYxLmV0aHNlY3AyNTZrMS5QdWJLZXkSIwohArHe3CkpoN9YIMzofXHJB+7OllK65U59z8s8GtIUjDBeEgQKAggBGAISHQoXCgdhcGhvdG9uEgwyMDAwMDAwMDAwMDAQwJoMGkEN+T9zEsz3YsFd9y/uRJ4WsvYGtgBmhBWS0PhTWZPcfhX20pkSHqmrfzH7wT2JF7HY8pjYRqMlmpbLKMhHZUw9AA==";
//   const data = fromBase64(raw);
//   const decoded = decodeTxRaw(data);

//   console.log(decoded.authInfo.signerInfos);
  

    const data = Buffer.from("MHg0Y2MwMTM4NDY2NGFlOGQxMTIwZTIwODVkMDEzZTE1OWY0N2FlYzc5NGE2MjQ0MmM4NmRiODY5MWQ4NjY1MjI4","base64").toString("utf8")

    console.log(data);
    
}

main();
