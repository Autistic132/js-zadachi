const string = "Привет! Как дела?";

const vowels = ["у", "е", "ё", "ы" , "а", "о", "э", "я", "и", "ю" ];
const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i].toLowerCase();

        if (vowels.includes(currentLetter) ){
            extractedVowels = extractedVowels + currentLetter;

        }
        

    }

 return extractedVowels;
}

console.log(getVowels(string));