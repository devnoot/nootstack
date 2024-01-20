export const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-slate-800 text-white flex flex-col items-center justify-center">
      {children}
    </div>
  )
}
