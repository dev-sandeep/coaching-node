import React from 'react'
import { Form } from 'react-bootstrap'

export const SearchNav = () => {
  return (
    <div className='w-100' id='searchBar'>
        {/* Search Bar  */}
        <Form>
            <Form.Control className=' bg-transparent border-bottom border-0' type="text" placeholder="Search" />
        </Form>
    </div>
  )
}
