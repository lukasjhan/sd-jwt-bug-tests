import { SDJwtInstance } from '@sd-jwt/core';
import { digest, ES256, generateSalt } from '@sd-jwt/crypto-nodejs';

(async () => {
  const sdjwt = new SDJwtInstance({
    hasher: digest,
  });

  const data1 =
    'eyJraWQiOiJKMUZ3SlA4N0M2LVFOX1dTSU9tSkFRYzZuNUNRX2JaZGFGSjVHRG5XMVJrIiwidHlwIjoidmMrc2Qtand0IiwiYWxnIjoiRVMyNTYifQ.eyJfc2QiOlsiMWM5ZUpBTzNEVm1NOTBMOU9xWjRoaWVudHFGaVQ0U1ZueUV2SzIxTzdRQSIsIjY5N3ZyRnRSNUFkWWMwTlg4cFBwNUN2WkN3V196d3VPTGxBV1dDM2c0c00iLCI2dENSazJjWUdqSDlLRmlidmlCYnNrUzdUem5qcW5Lb0Vab1MycFMtWENVIiwiRGFadVhKM3FtR2p1OFlvdkkyNFZGUnBhUzMyREFMV1RQd2RzVXQwcUtvWSIsIkhVRnRMaTFRR2p0XzUxVjlkcmlNYzJISjdaSTQ1WkNGRXFSTUloNUdjUEUiLCJJWjliSWNDSUtuaEYyOFZGQnM4TlNQUk5rWlU5cTBFT01hRW1ySE9FRVp3IiwiUzNqYk9VWS1RWUllVVlwZEsyXzVUZnZURUdJZ3B0VU9vTDJhRE5HdU5WcyIsIlc5SDUtU2FWRV91RnBNYWdXNi1ULThCWGRaS1gzUUpzeUVBd3VtOE9PUEEiXSwidmN0IjoiaHR0cHM6Ly9jcmVkZW50aWFscy5leGFtcGxlLmNvbS9pZGVudGl0eV9jcmVkZW50aWFsIiwiX3NkX2FsZyI6InNoYS0yNTYiLCJpc3MiOiJodHRwczovL3RyaWFsLmF1dGhsZXRlLm5ldCIsImNuZiI6eyJqd2siOnsia3R5IjoiRUMiLCJjcnYiOiJQLTI1NiIsImtpZCI6Ik5QSG44V0RWbUtHeGdiY25QSzdHMjRWa0V2UDQ3LS1lS2h3R1hiU3A0bWMiLCJ4IjoiNkZISllzSTBieTkxWFNsbERTSE1OUzIwUmx3NkxyUE5tUEFSN2phZGVGcyIsInkiOiJnSmlIQ0RQMWpiQUtfczVpSXRDN1J0S1Y4SHg1UmxMRG9QX21FYVdmZTl3In19LCJpYXQiOjE3MDg2MTMwOTh9.IXG7_24Rf8YVu1lM_altOUb5cLKkkMPNuRH0ya8ZFcZfIIhEcujSORNht5Zs82ROiF87yY0voud1q-oMruxzkg~WyJRQU1SMnY5ZmtXQ1VyV2pTOTBqMnZ3Iiwic3ViIiwiMTAwNCJd~WyIxT1BqMzlVZFloSmU0SlV0NHFUREpBIiwiZ2l2ZW5fbmFtZSIsIkluZ2EiXQ~WyJXYUpNUExEVFJQWU5WZVZhMzRzREdRIiwiZmFtaWx5X25hbWUiLCJTaWx2ZXJzdG9uZSJd~WyJPWkdsYWJMSXRwZGNwZFBTdlNRWmxnIiwiYmlydGhkYXRlIiwiMTk5MS0xMS0wNiJd~';
  //[ 'birthdate', 'family_name', 'given_name', 'sub' ]

  const data2 =
    'eyJ0eXAiOiJzZC1qd3QiLCJhbGciOiJFZERTQSJ9.eyJ0ZXN0Ijp7Il9zZCI6WyJqVEszMHNleDZhYV9kUk1KSWZDR056Q0FwbVB5MzRRNjNBa3QzS3hhSktzIl19LCJfc2QiOlsiME9nMi1ReG95eW1UOGNnVzZZUjVSSFpQLUJuR2tHUi1NM2otLV92RWlzSSIsIkcwZ3lHNnExVFMyUlQxMkZ3X2RRRDVVcjlZc1AwZlVWOXVtQWdGMC1jQ1EiXSwiX3NkX2FsZyI6InNoYS0yNTYifQ.ggEyE4SeDO2Hu3tol3VLmi7NQj56yKzKQDaafocgkLrUBdivghohtzrfcbrMN7CRufJ_Cnh0EL54kymXLGTdDQ~WyIwNGU0MjAzOWU4ZWFiOWRjIiwiYSIsIjEiXQ~WyIwOGE1Yjc5MjMyYjAzYzBhIiwiMSJd~WyJiNWE2YjUzZGQwYTFmMGIwIiwienp6IiwieHh4Il0~WyIxYzdmOTE4ZTE0MjA2NzZiIiwiZm9vIiwiYmFyIl0~WyJmZjYxYzQ5ZGU2NjFiYzMxIiwiYXJyIixbeyIuLi4iOiJTSG96VW5KNUpkd0ZtTjVCbXB5dXZCWGZfZWRjckVvcExPYThTVlBFUmg0In0sIjIiLHsiX3NkIjpbIkpuODNhZkp0OGx4NG1FMzZpRkZyS2U2R2VnN0dlVUQ4Z3UwdVo3NnRZcW8iXX1dXQ~';
  // [ 'arr', 'arr.0', 'arr.2.a', 'foo', 'test.zzz' ]

  // you can change data1 to data2 to see the difference
  const result = await sdjwt.presentableKeys(data1);
  console.log(result);
})();
