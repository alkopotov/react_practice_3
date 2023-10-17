import { forwardRef } from "react";


const Header = forwardRef((props, ref) => {
  const {autoScroll} = props
  return (
    <div className="header_top" ref={ref.headerRef}>
      <button onClick={() => autoScroll(ref.footerRef)}>Scroll to Footer</button>
    </div>
  )
})
export default Header 