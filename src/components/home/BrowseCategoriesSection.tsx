import { motion } from 'framer-motion'
import { categories } from '../../data/categories'
import { stories } from '../../data/stories'
import { CategoryCard } from '../story/CategoryCard'
import { SectionContainer } from './SectionContainer'
import { SectionHeader } from './SectionHeader'

export function BrowseCategoriesSection() {
  return (
    <SectionContainer className="py-16 md:py-24">
      <div className="rounded-[2rem] bg-[#fffaf5] p-6 ring-1 ring-[#f0e4d8] sm:p-10 lg:p-12">
        <SectionHeader
          eyebrow="Browse by category"
          title="Find the perfect mood"
          description="Whether you need a calm bedtime story or a bright afternoon adventure, start with a feeling."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <CategoryCard
                category={category}
                storyCount={
                  stories.filter((story) => story.categoryId === category.id).length
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
