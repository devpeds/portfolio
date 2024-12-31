function formatDate(date: Date): string {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`
}

export function formatInterval(startAt: Date, endAt?: Date): string {
  return `${formatDate(startAt)} ~ ${endAt ? formatDate(endAt) : '현재'}`
}

export function formatDuration(startAt: Date, endAt?: Date): string {
  endAt = endAt ?? new Date()
  if (startAt > endAt) {
    throw new Error('startAt cannot be bigger than endAt')
  }

  let years = endAt.getFullYear() - startAt.getFullYear()
  let months = endAt.getMonth() - startAt.getMonth() + 1

  if (!years) {
    return `${months}개월`
  }

  if (!months) {
    return `${years}년`
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  return `${years}년 ${months}개월`
}
