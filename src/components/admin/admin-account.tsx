import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CircleUserRound } from 'lucide-react'
import { useForm } from 'react-hook-form'

export default function AdminAccount() {
  const form = useForm()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className='h-auto w-full cursor-pointer justify-start px-2 py-1.5 text-sm font-normal'
          variant={'ghost'}>
          <CircleUserRound />
          Tài khoản
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]' aria-describedby={undefined}>
        <Tabs defaultValue='profile' className='mt-4'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
            <TabsTrigger value='password'>Password</TabsTrigger>
          </TabsList>
          <TabsContent value='profile' className='mt-3'>
            <Form {...form}>
              <form className='space-y-3'>
                <FormField
                  control={form.control}
                  name='fullName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <input type='file' name='' id='' />
                <div className='flex items-center justify-end gap-2'>
                  <Button type='button' variant='destructive'>
                    Hủy
                  </Button>
                  <Button type='submit'>Lưu</Button>
                </div>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value='password' className='mt-3'>
            <Form {...form}>
              <form className='space-y-3'>
                <FormField
                  control={form.control}
                  name='currentPass'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mật khẩu hiện tại</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='newPass'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mật khẩu mới</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='confirmPass'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Xác nhận mật khẩu</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='flex items-center justify-end gap-2'>
                  <Button type='button' variant='destructive'>
                    Hủy
                  </Button>
                  <Button type='submit'>Lưu</Button>
                </div>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
