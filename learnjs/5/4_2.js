let music = ["Джаз", "Блюз"];
console.log(music);

music.push("Рок-н-ролл");
console.log(music);

let center = Math.floor(music.length / 2);
music[center] = "Классика";
console.log(music);

console.log(music[0]);
music.shift(0);
console.log(music);

music.unshift("Рэп", "Регги")
console.log(music);
