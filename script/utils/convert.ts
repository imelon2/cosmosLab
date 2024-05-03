export const convertTo5BitArray = (uint8Array: Uint8Array): number[] => {
    const outputArray: number[] = [];
    
    // 8비트 부호 없는 정수 배열의 각 요소를 5비트 부호 없는 정수 배열로 변환
    let buffer = 0;
    let bufferSize = 0;
    for (let i = 0; i < uint8Array.length; i++) {
        buffer = (buffer << 8) | uint8Array[i];
        bufferSize += 8;

        while (bufferSize >= 5) {
            outputArray.push((buffer >> (bufferSize - 5)) & 0x1F);
            bufferSize -= 5;
        }
    }
    
    // 남은 비트 처리
    if (bufferSize > 0) {
        buffer <<= (5 - bufferSize);
        outputArray.push(buffer & 0x1F);
    }

    return outputArray;
}

export const numberToBinary = (bit:number,number: number): string => {
    return number.toString(2).padStart(bit, '0');
}

export function uint8ArrayToDecimal(uint8Array: Uint8Array): string {
    // Uint8Array를 문자열로 변환하고 10진수로 파싱
    const decimalValue = Array.from(uint8Array).map(byte => byte.toString(10)).join('');
    return decimalValue;
}