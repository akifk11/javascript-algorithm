export const longestWord = (sen) => {

    const arr = sen.replace(/([^a-zA-z ])/g, "").split(" ")
    arr.sort((a, b) => b.length - a.length)

    return arr[0]
}

//noktalama işaretlerini kaldır
//cümleyi boşluklardan bölüp bir array oluştur
//kelimelerle oluşturduğumuz diziyi azalan bir şekilde sıralamak
//ilk kelimeyi diziden almak 

// /([^a-zA-z ])/g bunlardan biri değilse demek anlamına geliyor ^bu değilse işareti demek 