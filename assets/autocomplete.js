const keys = require('~/keys')

export const autocomplete = ({
  language,
  textToBaseOn,
  basedOnFrontText,
  front: startFront,
  back: startBack,
}) => {
  if (language === 'ja') {
    return new Promise((resolve) => {
      const japaneseRegex =
        /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u3400-\u4DBF]/
      const isJapanese = japaneseRegex.test(textToBaseOn)
      const kanjiRegex = /[\u4E00-\u9FAF\u3400-\u4DBF]/
      const hasKanji = kanjiRegex.test(textToBaseOn)

      try {
        fetch(
          `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://jisho.org/api/v1/search/words?keyword=${textToBaseOn}`
        )
          .then((res) => res.json())
          .then((data) => data.data[0])
          .then((entry) => {
            if (!entry) {
              if (basedOnFrontText)
                resolve({
                  front: '',
                  back: `Couldn't find a definition for that!`,
                })
              resolve({
                back: '',
                front: `Couldn't find a definition for that!`,
              })
            }
            // console.log(entry)
            const isCommon = entry.is_common
            let front = startFront
            let back = startBack
            let shouldAutoSetImage = false
            const definition = entry.senses
              .slice(0, 2)
              .reduce(
                (acc, sense) => [
                  ...acc,
                  ...sense.english_definitions.slice(0, 2),
                ],
                []
              )
              .join(', ')

            if (basedOnFrontText) {
              if (isJapanese) {
                if (hasKanji && entry.japanese[0].reading)
                  back = entry.japanese[0].reading
                else if (!hasKanji && entry.japanese[0].word)
                  back = entry.japanese[0].word
                back = back + '\n' + definition
              } else if (!isJapanese) {
                front = definition
                back =
                  (entry.japanese[0].word
                    ? entry.japanese[0].word + '\n'
                    : '') +
                  (entry.japanese[0].reading ? entry.japanese[0].reading : '')
                shouldAutoSetImage = true
              }
            } else if (!basedOnFrontText) {
              if (isJapanese) {
                front = definition
                back =
                  (entry.japanese[0].word
                    ? entry.japanese[0].word + '\n'
                    : '') +
                  (entry.japanese[0].reading ? entry.japanese[0].reading : '')
                shouldAutoSetImage = true
              } else if (!isJapanese) {
                front = entry.japanese[0].word
                  ? entry.japanese[0].word
                  : entry.japanese[0].reading
                  ? entry.japanese[0].reading
                  : `Whoops, couldn't find that one.`
                back =
                  (entry.japanese[0].reading
                    ? entry.japanese[0].reading + '\n'
                    : '') + definition
              }
            }
            back += isCommon ? '' : '\n_(uncommon word)_'
            resolve({
              front,
              back,
              shouldAutoSetImage,
            })
          })
      } catch (e) {
        resolve({
          front: basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
          back: !basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
        })
      }
    })
  } else if (language === 'es') {
    return new Promise((resolve) => {
      try {
        fetch(
          // `https://od-api.oxforddictionaries.com/api/v2/translations/EN-US/ES/${textToBaseOn.toLowerCase()}`,
          `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.spanishdict.com/translate/${textToBaseOn}`
          // {
          //   headers: new Headers({
          //     app_id: keys.oxfordAppID,
          //     app_key: keys.oxfordApiKey,
          //   }),
          // }
        )
          .then((result) => {
            console.log(result.status)
            return result.text()
          })
          .then((entry) => {
            const regexResult =
              /<div id="headword-(en|es)" [^>]*><h1 [^<]*>([^<]*)<\/h1><\/div>.*<div .*quickdef1[^>]*><a href="\/translate[^>]*>([^<]*)/g.exec(
                entry
              )
            if (!regexResult) {
              if (basedOnFrontText)
                resolve({
                  front: '',
                  back: `Couldn't find a definition for that!`,
                })
              resolve({
                back: '',
                front: `Couldn't find a definition for that!`,
              })
              return
            }

            const [full, primaryTextLanguage, word, definition] = regexResult

            // console.log(primaryTextLanguage, word, definition)

            const image = /<img class="thumbnailImage.+? src="([^"]*)"/g.exec(
              entry
            )?.[1]

            let examples
            let example =
              /<span class="exampleFirstHalf[^\s]+ lang="([^"]+)">([^<]*)<\/span>.*?<span class="exampleSecondHalf[^\s]+ lang="([^"]+)">([^<]*)<\/span>/g.exec(
                entry
              )
            if (example) {
              const [full, lang1, text1, lang2, text2] = example
              if (!examples) examples = []
              if (lang1 === 'en') examples.push(`${text1}@${text2}`)
              else examples.push(`${text2}@${text1}`)
            }

            const front = basedOnFrontText ? word : definition
            const back = !basedOnFrontText ? word : definition
            const shouldAutoSetImage =
              (basedOnFrontText && primaryTextLanguage === 'en') ||
              (!basedOnFrontText && primaryTextLanguage === 'es')
            resolve({
              front,
              back,
              image,
              examples,
              shouldAutoSetImage,
            })
          })
      } catch (e) {
        resolve({
          front: basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
          back: !basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
        })
      }
    })
  }
  // else if (language === 'fr') {
  //   return new Promise((resolve) => {
  //     try {
  //       fetch(
  //         `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.wordreference.com/enfr/${textToBaseOn}`
  //       )
  //         .then((result) => {
  //           console.log(result.status)
  //           return result.text()
  //         })
  //         .then((entry) => {

  //           // const regexResult =
  //           //   /ToWrd">([^<]*)<\/h1><\/div>.*<div .*quickdef[^>]*><a href="\/translate[^>]*>([^<]*)/g.exec(
  //           //     entry
  //           //   )
  //           // if (!regexResult) {
  //           //   if (basedOnFrontText)
  //           //     resolve({
  //           //       front: '',
  //           //       back: `Couldn't find a definition for that!`,
  //           //     })
  //           //   resolve({
  //           //     back: '',
  //           //     front: `Couldn't find a definition for that!`,
  //           //   })
  //           //   return
  //           // }

  //           // const [full, primaryTextLanguage, word, definition] = regexResult

  //           // console.log( word, definition)
  //           // const front = basedOnFrontText ? word : definition
  //           // const back = !basedOnFrontText ? word : definition
  //           // const shouldAutoSetImage =
  //           //   (basedOnFrontText && primaryTextLanguage === 'en') ||
  //           //   (!basedOnFrontText && primaryTextLanguage === 'es')
  //           // resolve({
  //           //   front,
  //           //   back,
  //           //   shouldAutoSetImage,
  //           // })
  //         })
  //     } catch (e) {
  //       resolve({
  //         front: basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
  //         back: !basedOnFrontText ? textToBaseOn : `Error in fetching data!`,
  //       })
  //     }
  //   })
  // }
  else {
    resolve({
      front: basedOnFrontText
        ? textToBaseOn
        : `That language isn't supported yet!`,
      back: !basedOnFrontText
        ? textToBaseOn
        : `That language isn't supported yet!`,
    })
  }
}
