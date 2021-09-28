import { useEffect, useState } from 'react'

function useCopyToClipboard(params = null, node = null) {
  const { debug } = params || {}
  const [isCopied, setIsCopied] = useState()
  const [copiedText, setCopiedText] = useState()

  /* Copy text to Clipboard */
  async function copyToClipboard(copyMe) {
    try {
      await navigator.clipboard.writeText(copyMe)
      setIsCopied(true)
      setCopiedText(copyMe)

      if (debug) console.log(`Copy success ${copyMe}`)
    } catch (err) {
      setIsCopied(false)
      setCopiedText()
      if (debug) console.log(`Copy Failed ${copyMe}`)
    }
  }
  /* Handle onClick Outside */
  const handleClickOutside = e => {
    if (node?.current?.contains(e.target)) {
      // inside click
      return
    }

    // Outside click
    setIsCopied(false)
  }

  /* Click Outside Event Listener */
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return [copyToClipboard, isCopied, copiedText]
}

export default useCopyToClipboard
