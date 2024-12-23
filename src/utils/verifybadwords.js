const getBadWords = () => {
  const words = import.meta.env.VITE_BAD_WORDS || ''
  return words.split(',');
}
const badwords = getBadWords()
const badWordsArray = []
badWordsArray.push(...badwords)

export const verifyOfensiveWords = (commentText) => {
  const commentsWord = commentText;
  const filterArray = commentsWord.split(" ")
  const verify = filterArray.filter((word) => badWordsArray.includes(word))
  if (verify.length >= 2) {
    // setformValues(prevState => ({
    //   ...prevState,
    //   isOfensive: true
    // }))
    return true

  } else {
    return false
    // setformValues(prevState => ({
    //   ...prevState,
    //   isOfensive: false
    // }))
  }
}