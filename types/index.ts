// Core application types
export interface User {
  id: string
  email: string
  full_name: string | null
  role: 'super_admin' | 'admin' | 'dev_admin' | 'client'
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface Project {
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
  user?: User
  steps?: ProjectStep[]
}

export interface AIAgent {
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

export interface ProjectStep {
  id: string
  project_id: string
  step_number: number
  step_name: string
  status: 'not_started' | 'in_progress' | 'completed'
  form_data: Record<string, any>
  ai_output: Record<string, any>
  chat_history: ChatMessage[]
  scraped_data: Record<string, any>
  started_at: string | null
  completed_at: string | null
  created_at: string
  updated_at: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: string
  metadata?: Record<string, any>
}

export interface WizardStepConfig {
  stepNumber: number
  title: string
  description: string
  icon: string
  fields: FormField[]
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'file' | 'url' | 'email' | 'tel'
  required: boolean
  placeholder?: string
  options?: string[]
  validation?: string
  helpText?: string
}

export interface ScrapedWebsite {
  id: string
  project_id: string
  step_number: number
  url: string
  screenshot_url: string | null
  color_palette: {
    primary: string[]
    secondary: string[]
    accent: string[]
  }
  fonts_detected: string[]
  layout_structure: {
    header: any
    navigation: any
    content_sections: any[]
    footer: any
  }
  meta_data: {
    title: string
    description: string
    keywords: string[]
  }
  scraped_at: string
}

export interface ProjectPRD {
  id: string
  project_id: string
  compiled_data: {
    business_info: Record<string, any>
    goals_outcomes: Record<string, any>
    design_branding: Record<string, any>
    website_content: Record<string, any>
    funnel_design: Record<string, any>
    ai_agent_setup: Record<string, any>
    ads_seo: Record<string, any>
    automation_setup: Record<string, any>
    client_portal: Record<string, any>
    final_review: Record<string, any>
  }
  claude_prompt: string
  generated_output: string | null
  version: number
  created_at: string
  updated_at: string
}
