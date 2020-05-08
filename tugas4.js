var siswa_A = 180;
var siswa_B = 170;
var siswa_C = 175;

if (siswa_A > siswa_B && siswa_A > siswa_C && siswa_B > siswa_C) {
    console.log("Siswa A merupakan siswa yang tertinggi, kemudian tertinggi kedua siswa B, dan terakhir siswa C");
}

else if (siswa_A > siswa_B && siswa_A > siswa_C && siswa_C > siswa_B) {
    console.log("Siswa A merupakan siswa yang tertinggi, kemudian tertinggi kedua siswa C, dan terakhir siswa B");
}

else if (siswa_B > siswa_A && siswa_B > siswa_C && siswa_A > siswa_C) {
    console.log("Siswa B merupakan siswa yang tertinggi, kemudian tertinggi kedua siswa A, dan terakhir siswa C")  
}

else if (siswa_B > siswa_A && siswa_B > siswa_C && siswa_C > siswa_A) {
    console.log("Siswa B merupakan siswa yang tertinggi, kemudian tertinggi kedua siswa C, dan terakhir siswa A")  
}
    
else if (siswa_C > siswa_B && siswa_C > siswa_A && siswa_B > siswa_A) {
    console.log("Siswa C merupakan siswa yang tertinggi, kemudian tertinggi kedua siswa B, dan terakhir siswa A")   
}

else if (siswa_C > siswa_B && siswa_C > siswa_A && siswa_A > siswa_B) {
    console.log("Siswa C merupakan siswa yang tertinggi, kemudian tertinggi kedua siswa A, dan terakhir siswa B")   
}

else {
    console.log("Bilangan tak terdefinisi");
    
}
