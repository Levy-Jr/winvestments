import 'react'

declare module 'react' {
  interface CSSProperties {
    '--mobile-bg'?: string;
    '--desktop-bg'?: string;
  }
}