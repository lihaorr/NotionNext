import BLOG from '@/blog.config'
import BlogPostListPage from './components/BlogPostListPage'
import BlogPostListScroll from './components/BlogPostListScroll'
import Header from './components/Header'
import CONFIG_HEXO from './config_hexo'
import LayoutBase from './LayoutBase'
import Link from 'next/link'
import Card from './components/Card'

export const LayoutIndex = (props) => {
    const { categories } = props
  const { locale } = useGlobal()
  return <LayoutBase {...props} headerSlot={CONFIG_HEXO.HOME_BANNER_ENABLE && <Header {...props} />}>
 <div className='bg-white dark:bg-gray-700 p-10'>
      <div className='dark:text-gray-200 mb-5'>
        <i className='mr-4 fas fa-th' />{locale.COMMON.CATEGORY}:
      </div>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {categories && categories.map(category => {
          return <Link key={category.name} href={`/category/${category.name}`} passHref>
            <div
              className={'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'}>
              <i className='mr-4 fas fa-folder' />{category.name}({category.count})
            </div>
          </Link>
        })}
      </div>
    </div>
    {BLOG.POST_LIST_STYLE === 'page' ? <BlogPostListPage {...props} /> : <BlogPostListScroll {...props} />}
  </LayoutBase>
}
