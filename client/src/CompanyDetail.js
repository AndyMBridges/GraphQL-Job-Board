import React from 'react';
import { useQuery } from '@apollo/client'
import { companyQuery } from './graphql/requests'
import { JobList } from './JobList'
import { Spinner } from './Spinner'

export const CompanyDetail = props => {
  const { companyId } = props.match.params;

  const { data, loading } = useQuery(companyQuery, {
    variables: { id: companyId }
  })
  const company = data ? data.company : {}

  if (loading) {
    return <Spinner />
  }

  const { name, description, jobs } = company

  return (
    <div>
      <h1 className="title">{name}</h1>
      <div className="box">{description}</div>
      <h5 className="title is-5">Jobs at {name}</h5>
      <JobList jobs={jobs} />
    </div>
  );
}