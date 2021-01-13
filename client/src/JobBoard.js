import React from 'react'
import { useQuery } from '@apollo/client';
import { JobList } from './JobList';
import { jobsQuery } from './graphql/requests'

export const JobBoard = () => {

  const { data } = useQuery(jobsQuery, {
    fetchPolicy: 'no-cache'
  })
  const jobs = data ? data.jobs : []

  return (
    <div>
      <h1 className="title">Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  );
}
