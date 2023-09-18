import React from 'react'
import UseAdminDetails from '../../../../hooks/use-admin-details'

const ViewDetails = () => {
    const { loading, filtercolor } = UseAdminDetails()
    

  return (
    <div>
      <p>{filtercolor.id}</p>
      <p>{filtercolor.name}</p>
    </div>
  )
}

export default ViewDetails
