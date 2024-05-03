import { base64, sha256 } from "ethers/lib/utils"
import protobuf from "protobufjs"
import * as path from "path";

(async () => {
let a = "CtsCCqcCCh8vZXRoZXJtaW50LmV2bS52MS5Nc2dFdGhlcmV1bVR4EoMCCrwBCh4vZXRoZXJtaW50LmV2bS52MS5EeW5hbWljRmVlVHgSmQEKBDQ0NDQQAhoKMTUwMDAwMDAwMCIKMTUwMDAwMDAxNCiIpAEyKjB4YTZDRmQ4NjJCZjEwQWM0MzkyZjlBQzU2OTYyYWE1N2IzQjUxMTBDZDoDMTAwWiCHyNAZyJlKOIATywYl2V4Os2V7SXqWjp1U/l8PERSKcGIgFarPKOc/SqUa1l4wF2vI6KrYyGcVoy8Nrbm6eXSNXJsaQjB4M2M3Y2VmNDI1ZmM2OTk1ZDJiNGJlZTdmOTRmMjA5OWQxYjYyMWMyNTc3ZjZhNzRmMDQxMDk1ZjQwM2NkMDUwOPo/LgosL2V0aGVybWludC5ldm0udjEuRXh0ZW5zaW9uT3B0aW9uc0V0aGVyZXVtVHgSIRIfChkKB2FwaG90b24SDjMxNTAwMDAwMjk0MDAwEIikAQ=="

let decode_a = base64.decode(a)

// const A = Buffer.from(decode_a)
const p = path.join(__dirname, "../proto/")
console.log(p);

// 프로토콜 버퍼 메시지를 로드
protobuf.load(p, function (err, root:any) {
    console.log(root);
    if (err) throw err;
  
    
    // 디코딩할 메시지 유형 선택 (여기서는 예시로 'Block' 사용)
    const Block = root.lookupType("cosmos.tx.v1beta1.Tx");
  
    // 디코딩
    const message = Block.decode(decode_a);
  
    // 결과 출력
    console.log(message);
  });

const txHash = sha256(Buffer.from(a,'base64'))

console.log(txHash);


})()