import React, { useEffect, useState } from 'react'
import { api } from "../../services/api"

export function Category() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategory() {
      const response = get.use('/categories')
    }

    loadCategory()
  }, [])

  return (
    <div></div>
  )
}