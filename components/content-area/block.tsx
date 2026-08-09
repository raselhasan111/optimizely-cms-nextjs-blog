import dynamic from 'next/dynamic'
import blocksMapperFactory from '@/lib/utils/block-factory'

// Dynamically import each block
const AvailabilityBlock = dynamic(() => import('../block/availability-block'))
const ContactBlock = dynamic(() => import('../block/contact-block'))
const HeroBlock = dynamic(() => import('../block/hero-block'))
const LogosBlock = dynamic(() => import('../block/logos-block'))
const PortfolioGridBlock = dynamic(
  () => import('../block/portfolio-grid-block')
)
const ProfileBlock = dynamic(() => import('../block/profile-block'))
const ServicesBlock = dynamic(() => import('../block/services-block'))
const StoryBlock = dynamic(() => import('../block/story-block'))
const TestimonialsBlock = dynamic(() => import('../block/testimonials-block'))

// Map the dynamically imported blocks
export const blocks = {
  AvailabilityBlock,
  ContactBlock,
  HeroBlock,
  LogosBlock,
  PortfolioGridBlock,
  ProfileBlock,
  ServicesBlock,
  StoryBlock,
  TestimonialsBlock,
} as const

export default blocksMapperFactory(blocks)
