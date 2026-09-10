import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// Map keys must equal GraphQL __typename exactly — that string equality is
// the wiring. ProfileBlock/StoryBlock/AvailabilityBlock/ContactBlock back the
// /about CMSPage; LatestPostsElement is a Visual Builder element used on the
// homepage Experience.
const ProfileBlock = dynamic(() => import('../block/profile-block'))
const StoryBlock = dynamic(() => import('../block/story-block'))
const AvailabilityBlock = dynamic(() => import('../block/availability-block'))
const ContactBlock = dynamic(() => import('../block/contact-block'))
const LatestPostsBlock = dynamic(() => import('../block/latest-posts-block'))

export const blocks = {
  ProfileBlock,
  StoryBlock,
  AvailabilityBlock,
  ContactBlock,
  LatestPostsElement: LatestPostsBlock,
} as const

export default blocksMapperFactory(blocks)
