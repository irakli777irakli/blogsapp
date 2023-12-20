export interface TopicWrapper {
    data: Topic[]
  }
  
  export interface Topic {
    id: number
    title?: string
    text_color: string
    background_color: string
  }