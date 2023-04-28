import Image from 'next/image'
import { gql } from '../data-access/graphql-client'

const Page = async (): Promise<JSX.Element> => {
  const { users } = await gql.GetUsers()
  console.log(users)

  return (
    <figure className="rounded-xl bg-slate-100 p-8 text-white dark:bg-slate-800 md:flex md:p-0">
      <Image
        className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
        src=""
        alt="Avatar"
        width="384"
        height="512"
      />
      <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that Ive seen scale on large teams. Its easy to
            customize, adapts to any design, and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div className="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  )
}

export default Page
