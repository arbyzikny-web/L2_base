function ipv4Parser(ip, mask) {
  const ipOctets = ip.split('.');
  const maskOctets = mask.split('.');

  let networkBlock = [];
  let hostIdentifier = [];

  for (let i = 0; i < 4; i++) {
    const ipNum = parseInt(ipOctets[i], 10);
    const maskNum = parseInt(maskOctets[i], 10);

    // Побитовое И (AND) для получения адреса сети
    const networkNum = ipNum & maskNum;
    networkBlock.push(networkNum);

    // Идентификатор хоста - это оставшаяся часть IP-адреса
    const hostNum = ipNum - networkNum;
    hostIdentifier.push(hostNum);
  }

  return [networkBlock.join('.'), hostIdentifier.join('.')];
}

console.log(ipv4Parser("192.168.2.1", "255.255.255.0"));