export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "project-content": {
        Row: {
          desc: string
          github_link: string
          id: number
          title: string
          website_link: string
        }
        Insert: {
          desc: string
          github_link?: string
          id?: number
          title: string
          website_link?: string
        }
        Update: {
          desc?: string
          github_link?: string
          id?: number
          title?: string
          website_link?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
