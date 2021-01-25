export const SliderArrows = ({ moveSliderForArrows }) => {

  return(
    <>
      <span onClick={() => moveSliderForArrows(false)} className="left-arrow arrow"></span>
      <span onClick={() => moveSliderForArrows(true)} className="right-arrow arrow"></span>
    </>
  )
}