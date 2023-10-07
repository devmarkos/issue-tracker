"use client"

import { TextField, TextArea } from '@radix-ui/themes'
import React from 'react'

export const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder='Description' />
        <Button>Submit New Issue</Button>
    </div>
  )
}
export default NewIssuePage
