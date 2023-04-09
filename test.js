const url =
  "https://res.cloudinary.com/de0tzzevl/image/upload/v1681030348/travle_tien/wgzk9af8vvgnii5ewzhd.png";

console.log(url.match(/travle_tien\/[\w]+/)[0]); // false
