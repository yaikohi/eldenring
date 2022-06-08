export {}

/**
 * src: https://bobbyhadz.com/blog/typescript-process-env-type
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
    }
  }
}
