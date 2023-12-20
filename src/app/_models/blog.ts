export interface BlogsData {
    data: Blog[]
  }
  
  export interface Blog {
    id: number
    title: string
    description: string
    image: string
    publish_date: string
    categories: Category[]
    author: string
  }
  
  export interface Category {
    id: number
    name: string
    text_color: string
    background_color: string
  }
  