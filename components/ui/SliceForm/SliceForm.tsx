import { useState, Dispatch, SetStateAction } from "react"
import { Button, SliceFormBlockSplitter } from "@components/ui"
import { Slice } from "@lib/handlers/chain"
import handleSubmit from "@utils/handleSubmit"
import handleMessage from "@utils/handleMessage"
import { LogDescription } from "ethers/lib/utils"

type Props = {
  success: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  setSuccess: Dispatch<SetStateAction<boolean>>
  setLog: Dispatch<SetStateAction<LogDescription>>
}

const SliceForm = ({ success, setLoading, setSuccess, setLog }: Props) => {
  const [addresses, setAddresses] = useState([""])
  const [shares, setShares] = useState([1000000])
  const [minimumShares, setMinimumShares] = useState(0)
  const [totalShares, setTotalShares] = useState(1000000)
  const [{ message, messageStatus }, setMessage] = useState({
    message: "",
    messageStatus: "success",
  })
  const cleanedAddresses = addresses.filter(() => true)
  const cleanedShares = shares.filter(() => true)

  const submit = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    if (
      cleanedShares.length == cleanedAddresses.length &&
      cleanedShares.length <= 30
    ) {
      const eventLog = await handleSubmit(
        Slice(cleanedAddresses, cleanedShares, minimumShares),
        setMessage,
        setLoading,
        setSuccess,
        true
      )
      setLog(eventLog)
    } else {
      handleMessage(
        {
          message: "Inputs don't correspond, please try again",
          messageStatus: "error",
        },
        setMessage
      )
    }
  }

  return (
    <form
      className="w-full max-w-screen-sm py-6 mx-auto space-y-4"
      onSubmit={submit}
    >
      <SliceFormBlockSplitter
        success={success}
        addresses={addresses}
        shares={shares}
        minimumShares={minimumShares}
        totalShares={totalShares}
        setAddresses={setAddresses}
        setShares={setShares}
        setMinimumShares={setMinimumShares}
        setTotalShares={setTotalShares}
      />

      <div className="pt-4 pb-6">
        <p>
          <strong>Note</strong>: minimum and total shares cannot be changed
          later.
        </p>
        {totalShares === 1 && (
          <p className="pt-4">
            <strong>Note</strong>: You are about to create a non-fractionable
            Slicer. That means that there can only be a single owner at any
            given time which gets all ETH earned by the slicer.
          </p>
        )}
      </div>
      <div className="py-1">
        <Button label="Slice" type="submit" />
      </div>
      {message && (
        <p
          className={
            messageStatus === "error" ? "text-red-500" : "text-green-600"
          }
        >
          {message}
        </p>
      )}
    </form>
  )
}

export default SliceForm