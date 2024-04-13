/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'

interface Field {
  key: string
  label: string
}

interface Props {
  fields: Field[]
  items: any[]
  children?: React.ReactNode
}

export const Table: FC<Props> = ({ fields, items, children }) => {
  return (
    <div className="relative overflow-x-auto shadow sm:rounded mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkGray dark:text-gray-400">
          <tr>
            {fields.map((field) => (
              <th key={field.key} scope="col" className="px-6 py-3">
                {field.label}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-100 dark:bg-darkGray/50'
              } dark:bg-dark border-b dark:border-darkGray last:border-0`}>
              {fields.map((field) => (
                <td key={field.key} className="px-6 py-4">
                  {item[field.key]}
                </td>
              ))}
              <td className="px-6 py-4 text-right">{children}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
