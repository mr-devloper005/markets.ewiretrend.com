import { notFound } from 'next/navigation'
import { taskMetadata } from '@/editable/pages/TaskArchivePage'
import { mediaDistributionRoute } from '@/config/media-distribution-route'

export const revalidate = 3
export const generateMetadata = () => taskMetadata('mediaDistribution', mediaDistributionRoute)

export default async function MediaDistributionPage({
  searchParams: _searchParams,
}: {
  searchParams?: Promise<{ category?: string; page?: string }>
}) {
  notFound()
}
