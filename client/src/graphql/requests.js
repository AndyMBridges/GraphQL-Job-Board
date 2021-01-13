import gql from 'graphql-tag'

const jobDetailFragment  = gql`
    fragment JobDetail on Job {
        id
        title
        company {
            id
            name
        }
        description
    }
`

export const createJobMutation =  gql`
    mutation createJob($input: CreateJobInput) {
        job: createJob(input: $input) {
            ...JobDetail
        }
    }
    ${jobDetailFragment}
`

export const companyQuery = gql`query companyQuery($id: ID!) {
    company(id: $id) {
    id
    name
    description
    jobs {
        id
        title
    }
  }
}`

export const jobQuery = gql`
    query jobQuery($id: ID!) {
        job(id: $id) {
            ...JobDetail
        }
    }
    ${jobDetailFragment}
`

export const jobsQuery = gql`query JobsQuery {
    jobs {
        id
        title
        company {
            id
            name
        }
    }
}`