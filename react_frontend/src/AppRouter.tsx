// page 연결하는 메인 페이지
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// pages
import Test from './__tests__/pages/Test'

const Approuter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/main/*' element={<Test />} />
          <Route path='/' element={<Navigate replace to='/main' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default Approuter
