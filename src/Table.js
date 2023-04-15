import React from 'react'


const Table = () => {
  return (
    <table class="table table-dark table-striped ">
        <thead>
            <tr>
                <th scope="col" style={{color:'yellow'}}>Qualification</th>
                <th scope="col" style={{color:'yellow'}}>Institution</th>
                <th scope="col" style={{color:'yellow'}}>Year of Passing</th>
                <th scope="col" style={{color:'yellow'}}>GPA</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>MCA</td>
                <td>Sri Chaitanya Jr College</td>
                <td>2018</td>
                <td>8.3</td>
            </tr>
            <tr>
                <td>Degree</td>
                <td>Sri Chaitanya Jr College</td>
                <td>2018</td>
                <td>8.3</td>
            </tr>
            <tr>
                <td>Intermediate</td>
                <td>Sri Chaitanya Jr College</td>
                <td>2018</td>
                <td>8.3</td>
            </tr>
            <tr>
                <td>Secondary</td>
                <td>Sri Chaitanya Jr College</td>
                <td>2018</td>
                <td>8.3</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table