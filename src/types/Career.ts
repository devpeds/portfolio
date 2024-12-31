export interface JobPosition {
  title: string
  employmentType: string
  startAt: Date
  endAt?: Date
  performances: string[]
}

interface Career {
  company: {
    name: string
  }
  positions: JobPosition[]
}

export default Career
