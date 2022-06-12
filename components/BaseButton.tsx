import { ReactNode } from 'react'

interface BaseButtonProps {
  children: ReactNode
  onClick?: any
  disabled?: boolean
}
export const BaseButton = ({
  onClick,
  children,
  disabled,
}: BaseButtonProps) => {
  return (
    <div className="p-2 bg-yellow-900 rounded-xl" onClick={onClick}>
      <button
        disabled={disabled}
        className="h-8 max-w-xs min-w-full rounded-xl max-h-10"
      >
        <p className="text-xl text-center text-white ">{children}</p>
      </button>
    </div>
  )
}
