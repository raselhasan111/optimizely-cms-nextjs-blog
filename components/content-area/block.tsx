import blocksMapperFactory from '@/lib/utils/block-factory'

// No portfolio blocks remain; the mapper/factory infrastructure is kept
// for CMSPage/Visual Builder content areas.
export const blocks = {} as const

export default blocksMapperFactory(blocks)
