import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'
const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-200 hover:text-primary-300 dark:hover:text-primary-300">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}
export default Tag
