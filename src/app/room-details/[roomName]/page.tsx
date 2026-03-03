import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { ImageLightboxProvider, LightboxTrigger } from "@/components/ImageLightbox";
import { rooms } from "@/data/rooms";

const twinRoomImages = [
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639894.jpg?k=6b90318d747d4905d009b2f9ecac4f2a0f310e6aa24c62f7bcf06e4567e50ea0&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430921.jpg?k=6b966d4872521068c01a0654defa9ff2d0491ad4667f0e2d1bb7b50553c51546&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430917.jpg?k=e7e76936e24c28e50afddd6ed3ec68d388f4a4f419bfedc319b53f6e4eb4b9f9&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430924.jpg?k=64b55678aaf3b8b90ea663b922b27c130057f82b338fe80d858a1bdfca054a6b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430926.jpg?k=b421f7135e983eb9b202ddeddda82a500f0fd1f375a14561588c1fdbff5e9dd5&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430929.jpg?k=9fa381b3257900cda4ae238578a721c0a2ca239ece74ac749b49a25822cbf4eb&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430934.jpg?k=66e4e8f1e8970b50f481f581f188f8c4dcdba88a69135281591f993d67c54a30&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430939.jpg?k=ee003f9497936c1467a1745ebbb5f747b17c70433743c43330498687a94ffe37&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430943.jpg?k=29576f10bc4d846a08eb4d33c84260f34b3076898078c69ab17ee1ff4c66ddfa&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430945.jpg?k=04885b22d781807bf913f35458a4c988febf3667d15468c256b2662d1f5a0e5a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430949.jpg?k=42136353b770b0acc225a9090b5e99361c518b9fe58fc9bc543d26f47db8dce1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430953.jpg?k=9a154201fc5740d9616339daf1538323456c20aaaf63871227ba3359c5470212&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430956.jpg?k=556604ec6284e5e994ee67ab0e0894a642e3b9a97e50b2f21a0a0ab896b7f926&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813430958.jpg?k=61c5035a05a3969324dbd875bae58e898f7b109d0c08e039a03954723c52bdc4&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265485.jpg?k=5ef6fc8f10f32672df3c769fe605bba8e9f8dd10e2089a7bcd5e6e8d8549efcd&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262608.jpg?k=6f10b232f2cdf1fb80e11916738c8b8398320907279892f0f97554d3906ae187&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262547.jpg?k=376c50c9485f0e4396cb95383892bc397c6bc531bc0388cd9f4fac8b9c486b5a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262817.jpg?k=0bce3c1cac5fb20877a2f2eeaf30b08e1807bd7980fa93f3f97d64701be258ae&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529653171.jpg?k=18ad6487ea21dbc9cd2ec953e4af98b1b26fc0202ae65d6136bcfcd100fb8cd1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639892.jpg?k=bbfb098d42f05b1863c2df51449e453068f629a564b40cb4b6b4182e5211abe0&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639897.jpg?k=115f681b0ae55ed176fc5fcdb48d7d2af3cfc6c9d6015d43cacbe0d8410e7130&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639891.jpg?k=d0b64bac85a16ed3edfde656dcf532d5378323d4676702fb5c1f218fcb1ec608&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639899.jpg?k=9529fcffb18f971305bd7388e621075759a35dbd9a7f31418de3571728df06b5&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529672758.jpg?k=6a07257240d37a19ea3489ea487e0b5b62be0406d9d58459310cb012a9bcd536&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529672748.jpg?k=6d1e5d6ef3fbfc69eef905e1a215c0705bf73a8544f09a87449ca2a20f443120&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529672747.jpg?k=d14241981991cadee9d5cd1110a7cc681975d1d1a97b85a3547c3dea099852a7&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557261477.jpg?k=6829e9200035b396a551775f20e9c34de215841e1af78e512341dc577249b86a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557261642.jpg?k=7505b0dcaf3ce57e02fa3981cba8b01facb6d4aa0abb89f7d171d249a18329d0&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557261718.jpg?k=46950653d1bb107c6f840ee4f6ae727d77cbc6baceffeff8866c642565f2f92b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262230.jpg?k=59e16cc0c0fec58d44ff620d93388348c3f795fbc51f38cdf37491c01326e146&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262255.jpg?k=3ba617b10a87c9a1d16d314b0ed4542c2380e241793b23885b5f1d414b9ac76b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262391.jpg?k=1f80ed993d172763a9f14047ffc04f836bef070166b19884d7a5c87205acf779&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262615.jpg?k=696fc649c26270f4b7aa24f53df8486cb61326acc47339788b938b5ba4f6cd34&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265316.jpg?k=5a2d46f07faabf89b3392eb881c91bdf9b15533755a2e1c0d3d4560fd5ba41d8&o=",
];

const standardDoubleImages = [
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529650128.jpg?k=a919a58311f8b650997f9b3d5c75cc11677c9fd60acd8748ba0e7c6d97abbbd2&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423461.jpg?k=4bb9c551190da8a2a516bd71b0eb62e09b6e9288d6b82aced33ae63cc8de45a6&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423455.jpg?k=276bef4afa74c1ff3f7eb42a72c90d3ec4ba2698465982dcffdd3ae7bedc3c1d&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423418.jpg?k=43d90eff89c362bd50414e66dbfa2bc5a8e200f70c8b66f128db2becb9a74b25&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423421.jpg?k=e526b67fc4639b190aef4ab6b8377fc9ba33d9e3f7bb75d36d68d146b2edee7d&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423416.jpg?k=443c0374ebf9e6bded8a79f7f8222626a0ecf19d5814e0ca20921afa47b6eeac&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423436.jpg?k=6a570a27a98ff9a932d6fa9c7dcba66211af466dbc01a52cba1239d2795abea6&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423458.jpg?k=7a636f9610aad8e0442b88f50c7b007904758375783fd88f6d091c51c2845704&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423465.jpg?k=3061c6f661ff11e002b5d5774efddb6871d8f3c8f1caf3a09d6689fd908ac27c&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423467.jpg?k=48d5e50b8b6bf0f88e92730b77a52a472e5fcc9cd24db2702a4947fde175b008&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423471.jpg?k=fd50ba9c0357097c2acf8f4f079817583a9186d4e8cec1af181cf380a0d7a498&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423475.jpg?k=c100276de68e0e9e97048707993ebfbcfd4aadaceb09a124fddfe97aac1c3bf6&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423479.jpg?k=d831210d8ac836293cdaeae945f9b36b80d7e60b6549d0d5e1337448a8a3bbbb&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423488.jpg?k=c71b43a33cb6f7713880dd6ea1fdb2dbd9a4a329dcb23620341d25e45aaba491&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423491.jpg?k=48dc61ba5eecc10e431e3fbeaa8460ad5172a2ccd98c3987a653263a8a0cd133&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423495.jpg?k=1ab6243c9275f6fe8fb341b38c385b07ede8469be106901d77407ec7922f7e1b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423499.jpg?k=4b4daff8acf16b24f4d0b113d522e5e9ae02b5e84b0c7629c5072ddf67493279&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813423506.jpg?k=745576f94f6b777a8851e61c36582eb0f1ae42274de9b635ff242f79cbc33b9d&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263913.jpg?k=e81474d80ee09259f8038c001d1f9817bc68985c0a3d7bf6c0f2dfeced979e1d&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265316.jpg?k=5a2d46f07faabf89b3392eb881c91bdf9b15533755a2e1c0d3d4560fd5ba41d8&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262817.jpg?k=0bce3c1cac5fb20877a2f2eeaf30b08e1807bd7980fa93f3f97d64701be258ae&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655813.jpg?k=b07dbf184c5846fdaf7af490a744e59ebb054900702fe14109fb49340f57163a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529639899.jpg?k=9529fcffb18f971305bd7388e621075759a35dbd9a7f31418de3571728df06b5&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529662950.jpg?k=3de5d90ca42c6be808427ef18281a9afc386703df38b6a13851a9dfa3071b45e&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655820.jpg?k=8104d4e5fb9846c1682c90746da0549ceb3726450c91cc938c1e212cba8749ce&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655825.jpg?k=553a6666a4c7cacbc0b4269f1795a75bf61c2d15bdd4337800d46b8744315458&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655101.jpg?k=269cae7379d114fb216e6da66fbfecc55c2f463a6665f14954db46aa67e22175&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655779.jpg?k=22efce3d733f21077e858552c9bf7570fcc52bd4ee580e2f2e3ac39eeffc4e15&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655879.jpg?k=b3d6fc7ddc1b9c74e679f50c841d67c7d757af829a9a51c21b0183ec6fa0e368&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655147.jpg?k=252dd6a02f27ba0a788431e917ceafa2572717815b139bee3bd0ce049e088a81&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655009.jpg?k=ba339a8d56a900fd0ad11d7e7eb3005008eb8531b48f6aa9db2c0f1174de5413&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529651714.jpg?k=a02c84d763544be931aeb3b3e71e5572f34a5113af032d76cf06b4f7d6f9e3d0&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262732.jpg?k=67dab599971718758b71b25dcf88b5547ac734f29d063d8f1653d853bae6c3a1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263030.jpg?k=e7e6cfebcaeb92f67166cdcd2570ba7faebbc39ac1d48d68b3d44a0375b91577&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263267.jpg?k=1faa83eb1bc29a5ee44741d9c22215fee887c5c553a7f925bf8e0685e26ecad7&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263386.jpg?k=f2865b643e36d096b6cdb7a1537baaa70b1309361b406fa5bef8fb98757df163&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557264029.jpg?k=e8fe9958060761779e40524c6d40662b713e3d9cfe413d2b1653743429bfeaef&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262547.jpg?k=376c50c9485f0e4396cb95383892bc397c6bc531bc0388cd9f4fac8b9c486b5a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265485.jpg?k=5ef6fc8f10f32672df3c769fe605bba8e9f8dd10e2089a7bcd5e6e8d8549efcd&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813425232.jpg?k=4dd27b9fba45c26c41b4710e735b2f891fafab3ae324fabb7aabe5898ed4f368&o=",
];

const tripleRoomImages = [
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655647.jpg?k=667a18b4dfd6277c6d15b18c7d99d7dcc904e8ded58f3cd35818b92e9f2b842f&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265485.jpg?k=5ef6fc8f10f32672df3c769fe605bba8e9f8dd10e2089a7bcd5e6e8d8549efcd&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655064.jpg?k=cb0aba7e50fd95a1596b97d1fca4ecd8000f3819e7e5af6eb04888cb02f3c720&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655246.jpg?k=ae70cba683944861b5f905268d89cfe8e0a5d1b2f2f7bed0752aa3d9c828342c&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529651233.jpg?k=02bea80f31069f8beebf43b33dc65798afe2dfa78ba83a3f87737abd9897eb2e&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655447.jpg?k=b8ae54136f197b482db730e9f3bce0f1d6d623fdb35cb67eed1449a9892714ea&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655812.jpg?k=d15040fa7feb8fa6bc0582f9f8ef0197919dad47da0ebc24b6de54ee2ef203fd&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655466.jpg?k=f2f8ea82630261fbb7b668cbaf0fbad54ab13284b9e2d099030e9a2b6a66846e&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655648.jpg?k=dbcba5e1cebe3c0208447d17e51916671a8f2d1195509e172bd7ee4310519e9d&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/529655295.jpg?k=42b3b5551c1f9d6f2d80abdabec4be426b292a33ad318e9cedd8b105e3b2210c&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262817.jpg?k=0bce3c1cac5fb20877a2f2eeaf30b08e1807bd7980fa93f3f97d64701be258ae&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557262608.jpg?k=6f10b232f2cdf1fb80e11916738c8b8398320907279892f0f97554d3906ae187&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557263913.jpg?k=e81474d80ee09259f8038c001d1f9817bc68985c0a3d7bf6c0f2dfeced979e1d&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265469.jpg?k=9c42c6fa7dfc82b73de05ad5c92c802bc754dc56b693dde133396fb336c4ecb0&o=",
];

const juniorSuiteImages = [
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500775.jpg?k=9c7883fc2c4492d1b0f96d41752a219a6f8868a008238bd0e4cbfbbb7da25829&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500606.jpg?k=ba567eb786827bc13782095ead393c08e2550cc06e47e8e89dc7dee26ae136f6&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500618.jpg?k=dfb4a04c3b0f1bd8757bb1adb316422030c59a90bfba90d25030f04be11f9071&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500638.jpg?k=92aab05abaca13ba4ed1876685bfd4bcb83d1ad2b956925f27d555c4de4e6fa9&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500656.jpg?k=7bf4c430e460079974db2ed4e4dbc9da66d3b5a569da5351469b3835de200a66&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500668.jpg?k=dc13faaacbcfd3b5275d038b6a56d4ea0d2fbc543a2e21f4dec893ee563dc924&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500685.jpg?k=8ab9838ab893d03c8e17fdab61470252c3dbde58cdc25f5ff1219f23e509a702&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500709.jpg?k=28a2e0f2d5802cddc35e34ed360e0e0a21490cdb058bea58badef93ee651b6c8&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500735.jpg?k=a58de345cd76a17eda44680e88a7aa7b206dc0ce18b252369d47fe38d130f51b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500755.jpg?k=24588d75e2f48852028336edd3b00c7db7301b33fe3de13dfeac8472a1a6a584&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500802.jpg?k=005e7238cdb9c0e8612a54ba16b1c9d91d07747b3e266c42453ab044d08e488c&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500831.jpg?k=854e436c49cf523b5d843b49496a06ca5181e1e37b8ff05952b75c02039d36ca&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500862.jpg?k=435f8fac32e96e9e039accab9ee463f414bb4232d900783af86bfcef29e71bc8&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500894.jpg?k=f1180bbf893e292c81b7667e7e2093b90087aaae03ed1c8b65cd3f6f98f49e1b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500921.jpg?k=2476303fb30929bb59be7dfb5033a459006d06decbf490ce9fea398fc30e66d1&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500938.jpg?k=46552dddd17797cad92ff87848d936f71b8127e2fcc6c96a338a8c78ccf4b5ee&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/624500956.jpg?k=2af041d21b952ff77209f96226db116038618758c7825811362811313d3980ed&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/557265485.jpg?k=5ef6fc8f10f32672df3c769fe605bba8e9f8dd10e2089a7bcd5e6e8d8549efcd&o=",
];

const executiveSuiteImages = [
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438616.jpg?k=2721ee5965e596ecfe7f234c5f2fe57aae5cb3f4fa634a83552a597016ebf7d6&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438601.jpg?k=3acb7acd98f5aed1bc8ccc2a993b5eed45dd26dcd56c41c8bbafd7b7812cf7bc&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438599.jpg?k=5c9d11943670ea7e46ae0a201bc5a7779b61fd1c99cefc13d3c00c044a28a10a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438602.jpg?k=6fed8f802112189e96f0fb73a85aebafb905eaf5e23df51feb09045336c4bc85&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438608.jpg?k=ad564165f33dbf61d2921772657edf570f970527316e523729ae6bbcee50ef14&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438610.jpg?k=3488009102fbb1e4225ebe6632bf715453f519c6873d491c5683bbdaf7eb9809&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438613.jpg?k=ce7ca75a3295b9ae3dc5b15c114f4fd990f62a7818a23609326f3d322314b481&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438618.jpg?k=e0006737aee262bd129e498a307b2b898e41e7a1b63d62f300d946cb28b2b8dd&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438623.jpg?k=65f763cba4f2815286659eb211307179164a5e8a8d49ef9046b5326d5ed23e1a&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438624.jpg?k=6904d8ccbf3e70c6d0653a854063454be4ae7b877d95e95bcdd9395ad0fbbc84&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438626.jpg?k=85407469e5ce08476a58ee2e8af1f4c3696836e16791f11e8a45d5ffcef76289&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438630.jpg?k=5273e5d8f527437d77eb1eb0a327ce4e79daa87fe77f6a2f96061bc125d23bcc&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438631.jpg?k=4490d6ec2ba8d7ab8501a685116d816d368c123887d1c3ece34fe21d7c704806&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438633.jpg?k=7173e4624582f0b8d866ee659c5f3a6ea2ff48e25c40f20d1a654c8533a6b915&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438636.jpg?k=cbf3584da324b688270b579bd3edb663aae8d13a3e87b01647c5cd79f49181fb&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438640.jpg?k=4c587e00d409cce70c48fa6670c4bd51e43630ed1c7769283f89e5daedaa72e3&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438643.jpg?k=e4c5c695c94aea8abaf177cf59d37b31286ef9260350f0535c9daa2721fd8bfe&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438646.jpg?k=0f7f5d1b974af8690370c56be39e5ede83598b0cd48acdfd057d6236221e489b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438649.jpg?k=c711dd74b62fd56be3f6592cb8077af2ee87e6173e2dc6a03bfac40648e52b62&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438652.jpg?k=20713084d224d90ec225baf07e7c2b95da6e4a21a267a236d3c57ae433b11d15&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438660.jpg?k=7abad4478b2fbb7ff2a9392089d5d75503f45ee62c0bd9f4489f101fd8b458d9&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438666.jpg?k=ad79d561e385a92e1d61ab0779aa70ce8599dc6d209b0f7540e6e8ff83bf89b3&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438677.jpg?k=949789c343409895832e16e9c5a3f0feb2ade7f988ade6279bd81dfdcc6030ef&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438685.jpg?k=0f0b47b27df8189b7c0de5ad9d323635430b938b5629c49179ea46004cd7cb0b&o=",
  "https://cf.bstatic.com/xdata/images/hotel/max2024x2024/813438690.jpg?k=9d3fec54a7d7588abc7dee2483e1db2db90cb211e45ebfb949bdf2dffbfe5fd4&o=",
];

type Props = {
  params: Promise<{ roomName: string }>;
};

export default async function RoomDetailsPage({ params }: Props) {
  const { roomName } = await params;

  const isTwin = roomName === "twin-room";
  const isStandardDouble = roomName === "standard-double-room";
  const isTriple = roomName === "triple-room";
  const isJuniorSuite = roomName === "junior-suite";
  const isExecutiveSuite = roomName === "executive-suite";

  if (!isTwin && !isStandardDouble && !isTriple && !isJuniorSuite && !isExecutiveSuite) {
    return notFound();
  }

  const images = isTwin
    ? twinRoomImages
    : isStandardDouble
      ? standardDoubleImages
      : isTriple
        ? tripleRoomImages
        : isJuniorSuite
          ? juniorSuiteImages
          : executiveSuiteImages;

  const roomTitle = isTwin
    ? "Twin Room"
    : isStandardDouble
      ? "Standard Double Room"
      : isTriple
        ? "Triple Room"
        : isJuniorSuite
          ? "Junior Suite"
          : "Executive Suite";

  return (
    <PageShell>
      <ImageLightboxProvider images={images} alt={roomTitle}>
      {/* Page hero */}
      <LightboxTrigger index={0} className="block">
        <div
          className="rts__section page__hero__height page__hero__bg"
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="page__hero__content">
                <h1 className="wow fadeInUp">{roomTitle}</h1>
                <p className="wow fadeInUp font-sm">
                  Cozy accommodation with thoughtfully arranged bedding, ideal for friends, couples, or family
                  traveling together.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </LightboxTrigger>

      {/* Room details area */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">

            {/* Left column — room details */}
            <div className="col-xxl-8 col-xl-7">
              <div className="room__details">
                <span className="h4 price">122$</span>
                <h2 className="room__title">{roomTitle}</h2>
                <div className="room__meta">
                  <span><i className="flaticon-construction" />35 sqm</span>
                  <span><i className="flaticon-user" />2 Person</span>
                </div>
                <p>
                  Our {roomTitle} is thoughtfully designed for guests who prefer comfort and practicality without
                  compromising on comfort or style. Each bed features high-quality linens and plush pillows,
                  ensuring a restful night&apos;s sleep.
                  <br /><br />
                  The room offers warm lighting, a functional work area, and ample storage, making it ideal
                  for both short and extended stays. Large windows invite natural light and a calming view,
                  creating a welcoming atmosphere to unwind after your day.
                </p>

                {/* Twin room images */}
                <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                  <LightboxTrigger index={1}>
                    <div className="room__image__item">
                      <img className="rounded-2" src={images[1]} alt={`${roomTitle} photo 1`} />
                    </div>
                  </LightboxTrigger>
                  <LightboxTrigger index={2}>
                    <div className="room__image__item">
                      <img className="rounded-2" src={images[2]} alt={`${roomTitle} photo 2`} />
                    </div>
                  </LightboxTrigger>
                </div>

                {/* Room Amenities */}
                <span className="h4 d-block mb-30">Room Amenities</span>
                <div className="room__amenity mb-50">
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/wifi.svg" height={30} width={36} alt="" />
                      <span>Free Wifi</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/shower.svg" height={30} width={36} alt="" />
                      <span>Shower</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/aeroplane.svg" height={30} width={36} alt="" />
                      <span>Airport transport</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/balcony.svg" height={30} width={36} alt="" />
                      <span>Balcony</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/refrigerator.svg" height={30} width={36} alt="" />
                      <span>Refrigerator</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/support.svg" height={30} width={36} alt="" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/desk.svg" height={30} width={36} alt="" />
                      <span>Work Desk</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/fitness.svg" height={30} width={36} alt="" />
                      <span>Fitness Center</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/swimming-pool.svg" height={30} width={36} alt="" />
                      <span>Swimming Pool</span>
                    </div>
                  </div>
                </div>

                {/* Twin room gallery / features */}
                <span className="h4 d-block mb-50">Room Features</span>
                <div className="room__feature mb-30">
                  <div className="room__feature__image mb-50">
                    <LightboxTrigger index={3}>
                      <img className="rounded-2" src={images[3]} alt={`${roomTitle} overview`} />
                    </LightboxTrigger>
                  </div>
                  <div className="group__row">
                    <ul className="list__item">
                      <li>Two comfortable twin beds</li>
                      <li>Climate control</li>
                      <li>Workspace with desk and chair</li>
                      <li>Coffee/Tea Maker</li>
                      <li>High-end bedding and linens</li>
                      <li>Smart TV and in-room safe</li>
                    </ul>
                  </div>
                </div>

                <p>
                  Whether you&apos;re traveling alone, with a friend, colleague, or partner, our {roomTitle} is a
                  practical and stylish choice. Enjoy a peaceful ambiance and all the essentials you need for a
                  comfortable stay.
                </p>

                {/* Simple thumbnail strip */}
                <div className="row g-3 mt-40">
                  {images.slice(4).map((src, idx) => (
                    <LightboxTrigger key={idx} index={4 + idx} className="col-sm-4 col-6">
                      <img className="rounded-2 w-100" src={src} alt={`${roomTitle} photo ${5 + idx}`} />
                    </LightboxTrigger>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — sticky booking form */}
            <div className="col-xxl-4 col-xl-5 sticky-item">
              <div className="rts__booking__form has__background is__room__details">
                <form action="#" method="post" className="advance__search">
                  <h5 className="pt-0">Book Your Stay</h5>
                  <div className="advance__search__wrapper">

                    <div className="query__input wow fadeInUp">
                      <label htmlFor="rd-check-in" className="query__label">Check In</label>
                      <div className="query__input__position">
                        <input type="date" id="rd-check-in" name="check__in" required />
                        <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".3s">
                      <label htmlFor="rd-check-out" className="query__label">Check Out</label>
                      <div className="query__input__position">
                        <input type="date" id="rd-check-out" name="check__out" required />
                        <div className="query__input__icon"><i className="flaticon-calendar" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".4s">
                      <label htmlFor="rd-adult" className="query__label">Adult</label>
                      <div className="query__input__position">
                        <select name="adult" id="rd-adult" className="form-select">
                          {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Person</option>)}
                        </select>
                        <div className="query__input__icon"><i className="flaticon-user" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="rd-child" className="query__label">Child</label>
                      <div className="query__input__position">
                        <select name="child" id="rd-child" className="form-select">
                          {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Child</option>)}
                        </select>
                        <div className="query__input__icon"><i className="flaticon-user" /></div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="rd-room" className="query__label">Room</label>
                      <div className="query__input__position">
                        <select name="room" id="rd-room" className="form-select">
                          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} Room</option>)}
                        </select>
                        <div className="query__input__icon is__svg">
                          <img src="/assets/images/icon/room.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp" data-wow-delay=".5s">
                      <label htmlFor="rd-exbed" className="query__label">Extra Bed</label>
                      <div className="query__input__position">
                        <select name="exbed" id="rd-exbed" className="form-select">
                          {[1,2,3,4].map(n => <option key={n} value={n}>{n} Bed</option>)}
                        </select>
                        <div className="query__input__icon is__svg">
                          <img src="/assets/images/icon/bed-alt.svg" alt="" />
                        </div>
                      </div>
                    </div>

                    <h5 className="p-0 mt-20">Extra Services</h5>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="clean" id="rd-clean" />
                      <label htmlFor="rd-clean">Room Clean</label>
                      <span>$12 / Night</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="parking" id="rd-parking" />
                      <label htmlFor="rd-parking">Parking</label>
                      <span>Free</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="transport" id="rd-transport" />
                      <label htmlFor="rd-transport">Airport transport</label>
                      <span>$30 / Night</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" name="pet" id="rd-pet" />
                      <label htmlFor="rd-pet">Pet-Friendly</label>
                      <span>$40 / Night</span>
                    </div>

                    <div className="total__price">
                      <span className="total h6 mb-0">Total Price</span>
                      <span className="price h6 m-0">$82</span>
                    </div>

                    <button
                      className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <span>Book Your Room</span>
                    </button>

                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Similar rooms */}
      <div className="rts__section pb-120">
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <span className="h6 subtitle__icon__two d-block">Similar Rooms</span>
              <h2 className="content__title h2 lh-1">Similar Rooms</h2>
            </div>
          </div>
          <div className="row g-30">
            {rooms.filter((r) => r.slug !== roomName).slice(0, 3).map((room, i) => (
              <div key={i} className="col-lg-6 col-xl-4 col-md-6">
                <div className="room__card">
                  <div className="room__card__top">
                    <div className="room__card__image">
                      <Link href={`/room-details/${room.slug}`}>
                        <img
                          src={room.thumb}
                          width={420}
                          height={310}
                          alt={room.title}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="room__card__meta">
                    <Link href={`/room-details/${room.slug}`} className="room__card__title h5">{room.title}</Link>
                    <div className="room__card__meta__info">
                      <span><i className="flaticon-construction" />{room.sqm} sqm</span>
                      <span><i className="flaticon-user" />{room.person} Person</span>
                    </div>
                    <div className="room__price__tag">
                      <span className="h6 d-block">{room.price}</span>
                    </div>
                    <Link href={`/room-details/${room.slug}`} className="room__card__link">Discover More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </ImageLightboxProvider>
    </PageShell>
  );
}

