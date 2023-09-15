import React, { useState } from 'react'
import {
  checkboxColumn,
  Column,
  DataSheetGrid,
  floatColumn,
  intColumn,
  keyColumn,
  textColumn,
} from '../../src'
import '../../src/style.css'

type Row = {
  active: boolean
  firstName: string | null
  lastName: string | null
  age: number | null
  money: number | null
}

function App() {
  const [data, setData] = useState<Row[]>([
    { active: true, firstName: 'Elon', lastName: 'Musk', age: 45, money: 25.2 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35.5 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35.5 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35 },
    { active: false, firstName: 'Jeff', lastName: 'Bezos', age: 56, money: 35 },
  ])

  const columns: Column<Row>[] = [
    {
      ...keyColumn<Row, 'active'>('active', checkboxColumn),
      title: 'Active',
      grow: 0.5,
    },
    {
      ...keyColumn<Row, 'firstName'>('firstName', textColumn),
      title: 'First name',
    },
    {
      ...keyColumn<Row, 'lastName'>('lastName', textColumn),
      title: 'Last name',
      grow: 2,
    },
    {
      ...keyColumn<Row, 'age'>('age', intColumn),
      title: 'age',
    },
    {
      ...keyColumn<Row, 'money'>('money', floatColumn),
      title: 'age',
    }
  ]

  return (
    <div
      style={{
        margin: '50px',
        padding: '50px',
        maxWidth: '900px',
        background: '#f3f3f3',
      }}
    >
      <DataSheetGrid value={data} onChange={setData} columns={columns} />
    </div>
  )
}

export default App
