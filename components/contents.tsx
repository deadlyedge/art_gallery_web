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
import { LuHeart } from "react-icons/lu"
import { IoChatboxEllipsesOutline } from "react-icons/io5"

type ContentsProps = {}

export const Contents = ({}: ContentsProps) => {
  return (
    <section className=''>
      <div className='w-full mx-auto px-5'>
        <h2 className='flex flex-row flex-wrap justify-center py-12 text-2xl'>
          中文测试: 虽然即将发售的《逆转检察官1&2
        </h2>
        <div className='container sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 mb-2 break-inside-avoid-column'>
          <div className='mb-4 w-full relative'>
            <Image
              src='https://file.zick.me/s/FE8RRKXh'
              alt='https://file.zick.me/s/FE8RRKXh'
              width={600}
              height={600}
              className='object-contain'
            />
            <div className='absolute top-0 w-full h-8 bg-slate-600/20 flex  items-center px-2'>
              <IoChatboxEllipsesOutline className='w-6 h-6' />
              <span className='absolute right-2'>
                <LuHeart className='w-6 h-6' />
              </span>
            </div>
            <div className='absolute bottom-0 w-full h-12 bg-slate-600/50 flex  items-center px-2'>
              <p>老陆自画像</p>
            </div>
          </div>
          <div className='mb-4 w-full relative'>
            <Image
              src='https://file.zick.me/s/PgphsE2M'
              alt='https://file.zick.me/s/PgphsE2M'
              width={600}
              height={600}
              className='object-contain'
            />
            <div className='absolute top-0 w-full h-8 bg-slate-600/20 flex  items-center px-2'>
              <IoChatboxEllipsesOutline className='w-6 h-6' />
              <span className='absolute right-2'>
                <LuHeart className='w-6 h-6' />
              </span>
            </div>
            <div className='absolute bottom-0 w-full h-12 bg-slate-600/50 flex  items-center px-2'>
              <p>老陆自画像</p>
            </div>
          </div>
          <div className='mb-4 w-full relative'>
            <Image
              src='https://file.zick.me/s/FE8RRKXh'
              alt='https://file.zick.me/s/FE8RRKXh'
              width={600}
              height={600}
              className='object-contain'
            />
            <div className='absolute top-0 w-full h-8 bg-slate-600/20 flex  items-center px-2'>
              <IoChatboxEllipsesOutline className='w-6 h-6' />
              <span className='absolute right-2'>
                <LuHeart className='w-6 h-6' />
              </span>
            </div>
            <div className='absolute bottom-0 w-full h-12 bg-slate-600/50 flex  items-center px-2'>
              <p>老陆自画像</p>
            </div>
          </div>
          <div className='mb-4 w-full relative'>
            <Image
              src='https://file.zick.me/s/hbw6fArF'
              alt='https://file.zick.me/s/hbw6fArF'
              width={600}
              height={600}
              className='object-contain'
            />
            <div className='absolute top-0 w-full h-8 bg-slate-600/20 flex  items-center px-2'>
              <IoChatboxEllipsesOutline className='w-6 h-6' />
              <span className='absolute right-2'>
                <LuHeart className='w-6 h-6' />
              </span>
            </div>
            <div className='absolute bottom-0 w-full h-12 bg-slate-600/50 flex  items-center px-2'>
              <p>老陆自画像</p>
            </div>
          </div>
          <div className='mb-4 w-full relative'>
            <Image
              src='https://file.zick.me/s/PgphsE2M'
              alt='https://file.zick.me/s/PgphsE2M'
              width={600}
              height={600}
              className='object-contain'
            />
            <div className='absolute top-0 w-full h-8 bg-slate-600/20 flex  items-center px-2'>
              <IoChatboxEllipsesOutline className='w-6 h-6' />
              <span className='absolute right-2'>
                <LuHeart className='w-6 h-6' />
              </span>
            </div>
            <div className='absolute bottom-0 w-full h-12 bg-slate-600/50 flex  items-center px-2'>
              <p>老陆自画像</p>
            </div>
          </div>
          <div className='mb-4 w-full relative'>
            <Image
              src='https://file.zick.me/s/hbw6fArF'
              alt='https://file.zick.me/s/hbw6fArF'
              width={600}
              height={600}
              className='object-contain'
            />
            <div className='absolute top-0 w-full h-8 bg-slate-600/20 flex  items-center px-2'>
              <IoChatboxEllipsesOutline className='w-6 h-6' />
              <span className='absolute right-2'>
                <LuHeart className='w-6 h-6' />
              </span>
            </div>
            <div className='absolute bottom-0 w-full h-12 bg-slate-600/50 flex  items-center px-2'>
              <p>老陆自画像</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
