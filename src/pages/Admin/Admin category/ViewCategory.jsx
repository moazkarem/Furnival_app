import React from 'react'
import UseDetailsCategory from '../../../hooks/use-details-category'

const ViewCategory = () => {
    const { loading, categ } = UseDetailsCategory()
  return (
    <div>
      <p>{categ.id}</p>
    </div>
  )
}

export default ViewCategory
