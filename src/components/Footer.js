import { forwardRef } from "react";


const Footer = forwardRef((props, ref) => {
  const {autoScroll} = props
  return (
    <div className="footer_bottom" ref={ref.footerRef}>
      <button onClick={() => autoScroll(ref.headerRef)}>Scroll to Header</button>
    </div>
  )
})
export default Footer