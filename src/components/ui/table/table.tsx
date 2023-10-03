import { FC, ReactNode } from 'react'

import { Table } from '@radix-ui/themes'

import { Typography } from '../typography/typography'

import s from './table.module.scss'

interface TableComponentType {
  variant: 'myPack' | 'friendsPack' | 'packList'
  headerTitle: string[]
  valueBody: ReactNode[]
}

export const TableComponent: FC<TableComponentType> = ({ variant, headerTitle, valueBody }) => {
  return (
    <Table.Root className={s.tableRoot}>
      {variant === 'packList' && (
        <>
          <Table.Header className={s.tableHeader}>
            <Table.Row className={s.tableRow}>
              {headerTitle.map((value, index) => (
                <Table.Cell className={s.tableCell} key={index}>
                  <Typography variant="subtitle2">{value}</Typography>
                </Table.Cell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body className={s.tableBody}>
            <Table.Row className={s.tableRow}>
              {valueBody.map((value, index) =>
                index === valueBody.length - 1 ? (
                  <Table.Cell className={s.properties} key={index}>
                    {value}
                  </Table.Cell>
                ) : (
                  <Table.Cell className={s.tableCell} key={index}>
                    <Typography variant="body2">{value}</Typography>
                  </Table.Cell>
                )
              )}
            </Table.Row>
          </Table.Body>
        </>
      )}
      {variant === 'friendsPack' && (
        <>
          <Table.Header className={s.tableHeader}>
            <Table.Row className={s.tableRow}>
              {headerTitle.map((value, index) =>
                index === headerTitle.length - 1 ? (
                  <Table.Cell className={s.grade} key={index}>
                    <Typography variant="subtitle2">{value}</Typography>
                  </Table.Cell>
                ) : (
                  <Table.Cell className={`${index === 2 ? s.tableDate : s.tCell}`} key={index}>
                    <Typography variant="subtitle2">{value}</Typography>
                  </Table.Cell>
                )
              )}
            </Table.Row>
          </Table.Header>

          <Table.Body className={s.tableBody}>
            <Table.Row className={s.tableRow}>
              {valueBody.map((value, index) =>
                index === valueBody.length - 1 ? (
                  <Table.Cell className={s.grade} key={index}>
                    {value}
                  </Table.Cell>
                ) : (
                  <Table.Cell className={`${index === 2 ? s.tableDate : s.tCell}`} key={index}>
                    <Typography variant="body2">{value}</Typography>
                  </Table.Cell>
                )
              )}
            </Table.Row>
          </Table.Body>
        </>
      )}
      {variant === 'myPack' && (
        <>
          <Table.Header className={s.tableHeader}>
            <Table.Row className={s.tableRow}>
              {headerTitle.map((value, index) => {
                if (index === headerTitle.length - 2) {
                  return (
                    <Table.Cell className={s.grade} key={index}>
                      <Typography variant="subtitle2">{value}</Typography>
                    </Table.Cell>
                  )
                } else if (index === headerTitle.length - 1) {
                  return (
                    <Table.Cell className={`${s.properties} ${s.pMyPack}`} key={index}>
                      <Typography variant="subtitle2">{value}</Typography>
                    </Table.Cell>
                  )
                } else {
                  return (
                    <Table.Cell className={index === 2 ? s.tDate : s.tCell} key={index}>
                      <Typography variant="subtitle2">{value}</Typography>
                    </Table.Cell>
                  )
                }
              })}
            </Table.Row>
          </Table.Header>

          <Table.Body className={s.tableBody}>
            <Table.Row className={s.tableRow}>
              {valueBody.map((value, index) => {
                if (index === valueBody.length - 2) {
                  return (
                    <Table.Cell className={s.grade} key={index}>
                      {value}
                    </Table.Cell>
                  )
                } else if (index === valueBody.length - 1) {
                  return (
                    <Table.Cell className={`${s.properties} ${s.pMyPack}`} key={index}>
                      {value}
                    </Table.Cell>
                  )
                } else {
                  return (
                    <Table.Cell className={index === 2 ? s.tDate : s.tCell} key={index}>
                      <Typography variant="body2">{value}</Typography>
                    </Table.Cell>
                  )
                }
              })}
            </Table.Row>
          </Table.Body>
        </>
      )}
    </Table.Root>
  )
}
