export const ContentContainer = (props: React.PropsWithChildren) => {
  return (
    <main className='mx-auto flex min-h-screen w-full max-w-7xl flex-col p-5'>
      {props.children}
    </main>
  )
}
