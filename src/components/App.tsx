import './App.less'

import Header from './Header/Header'
import LineBlock from './LineBlock/LineBlock'
import Title from './Title/Title'


import img_ray from '../img/ray.png'
import img_segment from '../img/segment.png'
import img_line from '../img/line.png'
import img_vertLine from '../img/vertLine.png'
import img_hortLine from '../img/hortLine.png'
import img_oblLine from '../img/oblLine.png'
import img_intersectingLines from '../img/intersectingLines.png'
import img_parLines from '../img/parLines.png'
import img_perLines from '../img/perLines.png'
import img_intersectingPlanes from '../img/intersectingPlanes.png'
import img_parPlanes from '../img/parPlanes.png'
import img_perPlanes from '../img/perPlanes.png'

import img_en1 from '../img/en1.png'
import img_en2 from '../img/en2.png'
import img_en3 from '../img/en3.png'
import img_en4 from '../img/en4.png'
import img_en5 from '../img/en5.png'
import img_en6 from '../img/en6.png'

import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'

const App = () => {
  return (
    <div>
      <Header/>

      <Title text='Lines'/>
      <LineBlock imgType='' text='Ray' srcImg={img_ray}/>
      <LineBlock imgType='' text='Segment' srcImg={img_segment}/>
      <LineBlock imgType='' text='Line' srcImg={img_line}/>
      <div style={{borderTop: "5px solid #318951", margin: "20px 0"}}></div>
      <LineBlock imgType='line_block_image_2' text='Vertical lines' srcImg={img_vertLine}/>
      <LineBlock imgType='' text='Horizontal lines' srcImg={img_hortLine}/>
      <LineBlock imgType='line_block_image_2' text='Line' srcImg={img_oblLine}/>
      <div style={{borderTop: "5px solid #318951", margin: "20px 0"}}></div>
      <LineBlock imgType='' text='Intersecting lines' srcImg={img_intersectingLines}/>
      <LineBlock imgType='' text='Parallel lines' srcImg={img_parLines}/>
      <LineBlock imgType='' text='Perpendicular lines' srcImg={img_perLines}/>

      <Title text='Planes'/>
      <LineBlock imgType='' text='Intersecting Planes' srcImg={img_intersectingPlanes}/>
      <LineBlock imgType='' text='Parallel Planes' srcImg={img_parPlanes}/>
      <LineBlock imgType='' text='Perpendicular Planes' srcImg={img_perPlanes}/>

      <Title text='Angles'/>
      <LineBlock imgType='' text='acute angle' srcImg={img_en1}/>
      <LineBlock imgType='' text='right angle' srcImg={img_en2}/>
      <LineBlock imgType='' text='obtuse angle' srcImg={img_en3}/>
      <div style={{borderTop: "5px solid #318951", margin: "20px 0"}}></div>
      <LineBlock imgType='' text='straight angle' srcImg={img_en4}/>
      <LineBlock imgType='' text='reflex angle' srcImg={img_en5}/>
      <LineBlock imgType='' text='complete angle' srcImg={img_en6}/>

      <Title text='Points'/>
      <LineBlock imgType='' text='Collinear points' srcImg={img_p1}/>
      <LineBlock imgType='' text='Coplanar points' srcImg={img_p2}/>
      <LineBlock imgType='' text='Non-colinear points' srcImg={img_p3}/>
      <LineBlock imgType='' text='Non-ciplanar points' srcImg={img_p4}/>


    </div>
  )
}

export default App