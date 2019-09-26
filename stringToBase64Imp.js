// base64 karaktersæt
var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

strengToBase64 = function(streng) {
    streng = String(streng);
    let bitmap, a, b, c,
    resultat = "", i = 0,
    rest = streng.length % 3; 

    for (; i < streng.length;) {
        if ((a = streng.charCodeAt(i++)) > 255
            || (b = streng.charCodeAt(i++)) > 255
            || (c = streng.charCodeAt(i++)) > 255)
      
        bitmap = (a << 16) | (b << 8) | c;
        resultat += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63)
            + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
}

// Hvis der er brug for padding erstattes A´er med ===
return rest ? resultat.slice(0, rest - 3) + "===".substring(rest) : resultat;
};
