import { FC } from "react"
import Spinner from "@components/icons/Spinner"
import Link from "next/link"
import { useAppContext } from "@components/ui/context"
import Logo from "@components/icons/Logo"

interface ButtonProps {
  loading?: boolean
  requireConnection?: boolean
  double?: boolean
  className?: string
  color?: string
  type?: "button" | "submit" | "reset"
  label?: string | JSX.Element
  href?: string
  onClick?: any
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className = "h-[40px] font-bold tracking-wide rounded-sm overflow-hidden border-white border-[3px] nightwind-prevent",
    color = "text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700",
    type,
    label,
    href,
    onClick,
    loading = false,
    requireConnection = false,
    double = true,
    ...rest
  } = props

  const { color1, color2, isConnected } = useAppContext()
  const innerText =
    requireConnection && !isConnected ? (
      <>
        <p>{label}</p>
        <div className="mb-1 ml-3">
          <Logo
            size="w-[17px]"
            margin="mt-[3px] ml-[5px]"
            interactive={false}
          />
        </div>
      </>
    ) : (
      <p>{label}</p>
    )

  const requestAccount = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" })
  }

  const rootClassName = `px-7 min-w-[150px] focus:outline-none ${className}`

  return (
    <div className="relative inline-block">
      {href ? (
        <Link href={href} passHref>
          <button className={`peer relative z-10 ${rootClassName} ${color}`}>
            <div className="flex items-center justify-center">{innerText}</div>
          </button>
        </Link>
      ) : (
        <button
          className={`peer relative z-10 ${rootClassName} ${color}`}
          type={type}
          onClick={
            !loading
              ? requireConnection && !isConnected
                ? requestAccount
                : onClick
              : null
          }
        >
          {loading ? (
            <div className="flex items-center justify-center w-full">
              <Spinner />
            </div>
          ) : (
            <div className="flex items-center justify-center">{innerText}</div>
          )}
        </button>
      )}
      {double && (
        <div
          className={`${rootClassName} shadow-light-random absolute top-0 mt-[0.6rem] ml-[0.6rem] mr-[-0.6rem] bg-gradient-to-br ${color1[3]} ${color2[4]} text-transparent peer-hover:mt-0 peer-hover:ml-0 peer-hover:mr-0 peer-focus:mt-0 peer-focus:ml-0 peer-focus:mr-0 transition-all duration-150`}
        >
          <div className="relative flex items-center justify-center -z-10">
            {innerText}
          </div>
        </div>
      )}
    </div>
  )
}

export default Button
