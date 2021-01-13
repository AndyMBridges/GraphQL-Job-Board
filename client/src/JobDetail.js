import React from 'react';
import { useQuery } from '@apollo/client';
import { jobQuery } from './graphql/requests'
import { Link } from 'react-router-dom';
import { Spinner } from './Spinner'

export const JobDetail = props => {
  const { jobId } = props.match.params

  const { data, loading } = useQuery(jobQuery, {
    variables: { id: jobId }
  })
  const job = data ? data.job : {}

  if (loading) {
    return <Spinner />
  }

  const { title, description, company: { id, name } } = job

  return (
    <div>
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${id}`}>{name}</Link>
      </h2>
      <div className="box">{description}</div>
    </div>
  );
}