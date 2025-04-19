export default function ({
  transaction,
  amount,
  date,
  time,
  status,
  transfer
}: {
  transaction: string;
  amount: number;
  date: string;
  time: string;
  status: string;
  transfer:string
}) {
  return (
    <tr>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">
          {transaction}
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className={`${status === "Pending"? " text-yellow-900":null }
        ${status === "Success" ? "text-green-900":null}
         ${transfer === "receive"?"text-green-900":null}
          ${transfer === "send" ? "text-red-400":null}block font-sans text-sm antialiased font-medium leading-no text-green-gray-900`}>

          {status === "Success" ? `+ ${amount / 100}.${amount % 100}`  : null  }
          {status === "Pending" ? `${amount / 100}.${amount % 100}`  : null  }

          </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans  text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {date}
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div className="relative grid items-center font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap ">
            <span
              className={`${status === "Pending" ? "bg-yellow-500/20 text-yellow-900  px-2 py-1 rounded-md select-none whitespace-nowrap " : null}${status === "Success" ? " bg-green-500/20 text-green-900  px-2 py-1 rounded-md " : null}`}
            >
              {" "}
              {status}{" "}
            </span>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal capitalize text-blue-gray-900">
              payTM
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
              {time}
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
}
