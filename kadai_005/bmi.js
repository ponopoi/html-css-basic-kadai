//体重（kg）と身長（cm）を変数に代入
let weight = 68; //　例：68㎏
let height_cm = 170; // 例：170cm

// 身長をメートルに変換
let height_m = height_cm / 100;

// BMI を計算する関数
function calculateBIM(weight,height) {
    return weight / (height * height);
}

//BIMの値を計算
let bim = calculateBIM(weight,height_m);

// 結果をコンソールに出力
console.log("体重: " + weight + " kg");
console.log("身長: " + height_cm + " cm");
console.log("BMI: " + bim.toFixed(15));