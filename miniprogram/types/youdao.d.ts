export interface YouDaoResp {
  errorCode: string
  query: string // 查询内容
  translation: string
  basic?: BasicParaphrase
  web?: Array<WebParaphraseItem>
  dict: DictUrl
  webdict: WebDictUrl
  l: string
  tSpeakUrl: string//翻译后的发音地址
  speakUrl: string //查询文本的发音地址
  isWord?: boolean // 是否单词
}

export interface WebParaphraseItem { // 网络释义
  key: string
  value: Array<string>
}

export interface DictUrl { // 词典地址
  url: string
}

export interface WebDictUrl {
  url: string
}

export interface BasicParaphrase {
  exam_type: Array<string>
  phonetic: string
  'uk-phonetic': string
  'us-phonetic': string
  'uk-speech': string
  'us-speech': string
  explains: Array<string>
  wfs: Array<{
    wf: {
      name: string
      value: string
    }
  }>
}
