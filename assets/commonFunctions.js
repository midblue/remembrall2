const keys = require('~/keys.js')

function findImagesForKeyword(keyword, count = 10, offset = 0) {
  // const urlBase = `https://www.googleapis.com/customsearch/v1?imgSize=large&imgType=photo&searchType=image&key=${keys.GOOGLE}&cx=${keys.GSEARCH}`
  const query = encodeURI(keyword)
  return new Promise((resolve) => {
    try {
      fetch(
        `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.flickr.com/search/?text=${query}`
      )
        .then((res) => res.text())
        .then((html) => {
          let urls = []
          html = html
            .slice(
              html.indexOf('search-photos-results'),
              html.indexOf('sidebar-column')
            )
            .replace(/\n/g, '')
          const regex = /photo-list-photo-container.*?src="([^"]*)"/g
          let found = regex.exec(html)
          while (found) {
            urls.push(`https:${found[1]}`)
            found = regex.exec(html)
          }

          urls = urls.slice(offset % urls.length).slice(0, count)

          resolve(urls)
        })
    } catch (e) {
      resolve([])
    }
    // fetch(
    //   `https://us-central1-general-prototype-project.cloudfunctions.net/cors-proxy?url=https://www.bing.com/images/search?q=${query}`
    // )
    //   .then((res) => res.text())
    //   .then((html) => {
    //     console.log(html)
    //     const regex = /<img class="mimg[^>]*src="(.*?)"/g
    //     let found = regex.exec(html)
    //     while (found) {
    //       console.log(found[1])
    //       found = regex.exec(html)
    //     }
    //     resolve([])
    //   })
    // fetch(`${urlBase}&q=${query}&num=${count}&start=${offset}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     if (!json.items) {
    //       console.log(json)
    //       resolve([])
    //     } else resolve(json.items.map((image) => image.link))
    //   })
  })
}
exports.findImagesForKeyword = findImagesForKeyword

function getKeyWord(text, allowSpaces = false) {
  return text
    .replace(/\(.*\)/g, '')
    .replace(/[*_-]/g, '')
    .split('\n')[0]
    .toLowerCase()
    .split(allowSpaces ? /[/;.,?¿!+()\[\]{}<>]/ : /[  ・/;.,?¿!+()\[\]{}<>]/)
    .reduce(
      (longestString, currString) =>
        currString.length > longestString.length ? currString : longestString,
      ''
    )
}
exports.getKeyWord = getKeyWord

let currOffset = 1
exports.getRandomImage = function (text) {
  const keyword = getKeyWord(text, true)
  console.log(`Searching image for ${keyword}...`)
  currOffset = (currOffset % 99) + 1
  return new Promise((resolve) => {
    findImagesForKeyword(keyword, 1, currOffset).then((images) => {
      if (images) resolve(images[Math.floor(Math.random() * images.length)])
      else resolve()
    })
  })
}

exports.getNumberDueInSet = function (set) {
  const now = Date.now()
  const maxNew = set.settings ? set.settings.maxNewPerDay : 999999
  const newToday = set.newToday
  if (!set.cards?.length) return 0

  const dueInDeck = Math.min(
    set.cards.reduce(
      (dueCount, card) =>
        card.nextReview < now &&
        card.totalReviews &&
        card.totalReviews > 0 &&
        !card.suspended
          ? dueCount + 1
          : dueCount,
      0
    ),
    set.settings && set.settings.maxReviewsPerDay
      ? set.settings.maxReviewsPerDay - set.reviewsToday
      : 999999
  )
  const newInDeck = set.cards.reduce(
    (dueCount, card) =>
      (!card.totalReviews || card.totalReviews === 0) && !card.suspended
        ? dueCount + 1
        : dueCount,
    0
  )
  return dueInDeck + Math.min(maxNew - Math.min(newToday, maxNew), newInDeck)
}

exports.msToString = function (ms = 0, short = true) {
  const negativePrefix = ms < 0 ? `-` : ``
  if (negativePrefix) ms *= -1
  let remainingSeconds = Math.floor(ms / 1000)

  let years = Math.floor(remainingSeconds / (60 * 60 * 24 * 365))
  remainingSeconds -= years * 60 * 60 * 24 * 365

  let days = Math.floor(remainingSeconds / (60 * 60 * 24))
  remainingSeconds -= days * 60 * 60 * 24

  let hours = Math.floor(remainingSeconds / (60 * 60))
  remainingSeconds -= hours * 60 * 60

  let minutes = Math.floor(remainingSeconds / 60)
  remainingSeconds -= minutes * 60
  // if (minutes < 10 && hours > 0) minutes = `0${minutes}`

  let seconds = remainingSeconds
  if (seconds < 10 && minutes > 0) seconds = `0${seconds}`

  if (!years && !days && !hours && !minutes)
    return `${negativePrefix}${seconds}s`
  if (!years && !days && !hours)
    return `${negativePrefix}${minutes}${
      !short && seconds ? `:${seconds}` : `m`
    }`
  if (!years && !days)
    return `${negativePrefix}${hours}h${
      !short && minutes ? ` ${minutes}m` : ``
    }`
  if (!years)
    return `${negativePrefix}${days}d${!short && hours ? ` ${hours}h` : ``}`
  return `${negativePrefix}${years}y${!short && days ? ` ${days}d` : ``}`
}
