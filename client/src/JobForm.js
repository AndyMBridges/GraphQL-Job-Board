import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { createJobMutation, jobQuery } from './graphql/requests'

export const JobForm = props => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [addJob] = useMutation(createJobMutation, {
    variables: {
      input: {
        title,
        description
      }
    },
    onCompleted: ({ job }) => {
      props.history.push(`/jobs/${job.id}`)
    },
    update: (cache, { data }) => {
      console.log('mutation result ', data)
      cache.writeQuery({
          query: jobQuery,
          variables: { id: data.job.id },
          data
      })
    }
  })

  return (
    <div>
      <h1 className="title">New Job</h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" type="text" name="title" value={title}
                onChange={e => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea className="input" style={{height: '10em'}}
                name="description" value={description} onChange={e => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                onClick={e => {
                  e.preventDefault()
                  addJob()
                }}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}