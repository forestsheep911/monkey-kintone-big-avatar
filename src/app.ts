const app = () => {
  // console.log(kintone)
  kintone.events.on('app.record.detail.show', () => {
    const avatarEle = document.querySelectorAll('.user-link-cybozu > img')
    if (avatarEle && avatarEle.length > 0) {
      console.log(avatarEle[1])
      avatarEle[0].addEventListener('mouseenter', () => {})
    }
  })
}

export default app
