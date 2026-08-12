import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// The four block types still used by the /about CMSPage. Map keys must
// equal GraphQL __typename exactly — that string equality is the wiring.
const ProfileBlock = dynamic(() => import('../block/profile-block'))
const StoryBlock = dynamic(() => import('../block/story-block'))
const AvailabilityBlock = dynamic(() => import('../block/availability-block'))
const ContactBlock = dynamic(() => import('../block/contact-block'))

export const blocks = {
  ProfileBlock,
  StoryBlock,
  AvailabilityBlock,
  ContactBlock,
} as const

export default blocksMapperFactory(blocks)
