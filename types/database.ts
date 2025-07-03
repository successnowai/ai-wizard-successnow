export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'super_admin' | 'admin' | 'dev_admin' | 'client'
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'super_admin' | 'admin' | 'dev_admin' | 'client'
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'super_admin' | 'admin' | 'dev_admin' | 'client'
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          status: 'draft' | 'in_progress' | 'completed' | 'archived'
          current_step: number
          total_steps: number
          started_at: string
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          status?: 'draft' | 'in_progress' | 'completed' | 'archived'
          current_step?: number
          total_steps?: number
          started_at?: string
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          status?: 'draft' | 'in_progress' | 'completed' | 'archived'
          current_step?: number
          total_steps?: number
          started_at?: string
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      ai_agents: {
        Row: {
          id: string
          step_number: number
          name: string
          role: string
          system_prompt: string
          personality: string
          intro_message: string | null
          fallback_responses: string[]
          model: string
          temperature: number
          max_tokens: number
          is_active: boolean
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          step_number: number
          name: string
          role: string
          system_prompt: string
          personality?: string
          intro_message?: string | null
          fallback_responses?: string[]
          model?: string
          temperature?: number
          max_tokens?: number
          is_active?: boolean
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          step_number?: number
          name?: string
          role?: string
          system_prompt?: string
          personality?: string
          intro_message?: string | null
          fallback_responses?: string[]
          model?: string
          temperature?: number
          max_tokens?: number
          is_active?: boolean
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      project_steps: {
        Row: {
          id: string
          project_id: string
          step_number: number
          step_name: string
          status: 'not_started' | 'in_progress' | 'completed'
          form_data: any
          ai_output: any
          chat_history: any[]
          scraped_data: any
          started_at: string | null
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          step_number: number
          step_name: string
          status?: 'not_started' | 'in_progress' | 'completed'
          form_data?: any
          ai_output?: any
          chat_history?: any[]
          scraped_data?: any
          started_at?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          step_number?: number
          step_name?: string
          status?: 'not_started' | 'in_progress' | 'completed'
          form_data?: any
          ai_output?: any
          chat_history?: any[]
          scraped_data?: any
          started_at?: string | null
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      project_prds: {
        Row: {
          id: string
          project_id: string
          compiled_data: any
          claude_prompt: string
          generated_output: string | null
          version: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          compiled_data: any
          claude_prompt: string
          generated_output?: string | null
          version?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          compiled_data?: any
          claude_prompt?: string
          generated_output?: string | null
          version?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
