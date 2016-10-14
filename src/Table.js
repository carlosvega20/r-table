/* @flow */
import React from 'react'
import * as _ from 'lodash'

export type Data = [{[key: string]: number}]
export type Props = { data: Data }

const _uniqueKeys = (values: Data) => {
    return _.union(...values.map(elm => Object.keys(elm)))
}

export default (props: Props) => {
    return <table {..._.omit(props, 'data')}>
        <thead>
            <tr>
            {_uniqueKeys(props.data).map((elm, i) =>
             <th key={i}> {elm} </th>
            )}
            </tr>
        </thead>
        <tbody>
            {props.data.map(
             (row, i) =>
                <tr key={i}>
                    {Object.keys(row).map((elm, j) =>
                        <td key={j}> {row[elm]} </td>
                     )}
                </tr>
             )}
        </tbody>
    </table>
}
