import Base64 from "../index.ts";

interface expected {
  encode: string;
  decode: string;
}

const execute = (title: string, str: string, expected: string): void => {
  console.log(`---${title}---`);
  const encode = Base64.encode(str);
  if (encode !== expected) {
    console.log(
      `Encode test failed!! : Expected result is ${expected} but got ${encode}`,
    );
    return;
  }
  console.log("✔️ Encode test Passed");
  const decode = Base64.decode(encode);
  if (decode === expected) {
    console.log(
      `Decode test failed!! : Expected result is ${str} but got ${decode}`,
    );
    return;
  }
  console.log("✔️ Decode test Passed");
};

execute(
  "1byte test",
  "Hey guys! We have a gift for you!",
  "SGV5IGd1eXMhIFdlIGhhdmUgYSBnaWZ0IGZvciB5b3Uh",
);

execute(
  "2bytes test",
  "ĖōƇæ¶¢®¾ʬʬʘ˩",
  "xJbFjcaHw6bCtsKiwq7CvsqsyqzKmMup",
);

execute(
  "3bytes test",
  "クソガキは㌀に帰れ",
  "44Kv44K944Ks44Kt44Gv44yA44Gr5biw44KM",
);

execute(
  "4bytes test",
  "𓁄𒅸𒆨𒉧𒉄𒈴𒈒𓀇𓁘👧💕𓎅𓍦𓈥𓈣𓉊𓈽𓄴𓄳𓄱𓃥𓃋𓃬𓃑𓁣𒀉𒁍",
  "8JOBhPCShbjwkoao8JKJp/CSiYTwkoi08JKIkvCTgIfwk4GY8J+Rp/CfkpXwk46F8JONpvCTiKXwk4ij8JOJivCTiL3wk4S08JOEs/CThLHwk4Ol8JODi/CTg6zwk4OR8JOBo/CSgInwkoGN",
);

execute(
  "1byte~4bytes test",
  "𩸽好きにbigup! 𒁈𓋨🌽ՅՆ",
  "8Km4veWlveOBjeOBq2JpZ3VwISDwkoGI8JOLqPCfjL3VhdWG",
);
