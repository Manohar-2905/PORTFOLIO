import { useState, useEffect } from "react"

export function useTypewriter(words, speed = 75, pause = 2200) {
  const [txt, setTxt] = useState("")
  const [wi, setWi] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return
    const cur = words[wi]
    const timer = setTimeout(() => {
      if (!del) {
        if (txt.length < cur.length) {
          setTxt(cur.slice(0, txt.length + 1))
        } else {
          setTimeout(() => setDel(true), pause)
        }
      } else {
        if (txt.length > 0) {
          setTxt(cur.slice(0, txt.length - 1))
        } else {
          setDel(false)
          setWi((i) => (i + 1) % words.length)
        }
      }
    }, del ? speed / 2 : speed)

    return () => clearTimeout(timer)
  }, [txt, del, wi, words, speed, pause])

  return txt
}
