import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ContentsProps = {}

export const Contents = ({}: ContentsProps) => {
  return (
    <section className=''>
      <div className='w-full mx-auto px-5'>
        <h2 className='flex flex-row flex-wrap justify-center py-12 text-2xl'>
          中文测试: 虽然即将发售的《逆转检察官1&2
        </h2>
        <div className='container columns-2 mb-2'>
        {/* <div className='flex flex-row flex-wrap justify-center gap-4 mb-2'> */}
          <Card className=''>
            <CardContent className='relative h-80 mb-1 flex justify-center items-center'>
              <Image
                src='https://file.zick.me/s/FE8RRKXh'
                alt='https://file.zick.me/s/FE8RRKXh'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw'
                className='object-cover rounded-t-md'
              />
            </CardContent>
            <CardHeader className='mx-2 p-2'>
              <CardTitle className='text-xl'>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            {/* <CardFooter className='flex justify-between'>
              <Button variant='outline'>Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter> */}
          </Card>
          <Card className='relative w-80 sm:max-w-96'>
            <CardContent className='h-80 relative mb-1 flex justify-center items-center'>
              <Image
                src='https://file.zick.me/s/PgphsE2M'
                alt='https://file.zick.me/s/PgphsE2M'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw'
                className='object-cover rounded-t-md'
              />
            </CardContent>
            <CardHeader className='mx-2 p-2'>
              <CardTitle className='text-xl'>Create project</CardTitle>
              <CardDescription>这两款游戏自最初
              </CardDescription>
            </CardHeader>
            {/* <CardFooter className='flex justify-between'>
              <Button variant='outline'>Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter> */}
          </Card>
          <Card className='relative sm:max-w-96'>
            <CardContent className='w-full h-80 relative mb-1 flex justify-center items-center'>
              <Image
                src='https://file.zick.me/s/FE8RRKXh'
                alt='https://file.zick.me/s/FE8RRKXh'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw'
                className='object-cover rounded-t-md'
              />
            </CardContent>
            <CardHeader className='mx-2 p-2'>
              <CardTitle className='text-xl'>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            {/* <CardFooter className='flex justify-between'>
              <Button variant='outline'>Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter> */}
          </Card>
          <Card className='relative sm:max-w-96'>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Templates are built with blocks, that means you can add and swap
                blocks to give your landing page a custom feel while using a
                template. 中文测试: 虽然即将发售的《逆转检察官1&2
                御剑精选集》可能不是最热门的游戏，但对于这个备受喜爱的系列来说，它却是一部重要的作品。原因在于，这个两部作品合集是该系列最后一部被带入现代游戏时代的作品。这两款游戏自最初的NDS版本以来都进行了更新，开发团队也介绍了为现代主机制作重制
              </p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button variant='outline'>Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
          <Card className='relative sm:max-w-96'>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Templates are built with blocks, that means you can add and swap
                blocks to give your landing page a custom feel while using a
                template. 中文测试: 虽然即将发售的《逆转检察官1&2
                御剑精选集》可能不是最热门的游戏，但对于这个备受喜爱的系列来说，它却是一部重要的作品。原因在于，这个两部作品合集是该系列最后一部被带入现代游戏时代的作品。这两款游戏自最初的NDS版本以来都进行了更新，开发团队也介绍了为现代主机制作重制
              </p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button variant='outline'>Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
