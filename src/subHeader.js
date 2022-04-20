import React,{useState} from 'react'
import { Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
// import pic from './images/search_icon.png';
// import cart from './images/cart.png'
export default function SubHeader() {

    const [women,setWomen]= useState(["Bottoms","Dresses","Outer wears","Tops","Swim","Accessories","Shoes"])
    const [men,setMen] =useState(["Accessories","Bottoms","Outer wears","Shirts","Underthings","Shoes"])
    const [Jewellery,setJewellery] =useState(["Body Jewellery","Earrings", "Men's", "Necklace", "Rings", "Bracelets", "Brooches"]);
    const [art,setArt] =useState(["Illustration","Multi-media","Photography"])
    const [home,setHome]=useState(["Decor","Candles & Scents","Bedding","Bath","Kitchen"]);
    const [kids,setKids]=useState(["Toys & Games","Clothing","Accessories"]);
    const [music,setMusic]=useState(["CDs","Digital Downloads","Vinyl"]);
    const [health,setHealth]=useState(["Fragrance","Nutrition","Makeup"]);
    const [speciality,setSpeciality]=useState(["Pets","Games","Wedding"]);
    const [tech,setTech]=useState(["Accessories","Video Games"]);

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);

  return (
    <div>
         <Navbar variant="light" className='navbar navbar-expand-lg navbar-light bg-light'>
              <Container>
                  {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Shop Brands</Nav.Link>                      
                      <Nav.Link href="#features">Collections</Nav.Link>
                      <Nav.Link href="#pricing">Editor's pics</Nav.Link>
                      {/* <Nav.Link href="#features">Women's</Nav.Link> */}
                      <NavDropdown title="Women's" id="navbarScrollingDropdown" show={show}
                          onMouseEnter={()=>setShow(!show)}
                          onMouseLeave={()=>setShow(false)}
                      >
                       {women.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}   

                      </NavDropdown>
                      <NavDropdown title="Men's" id="navbarScrollingDropdown" show={show1}
                          onMouseEnter={()=>setShow1(!show1)}
                          onMouseLeave={()=>setShow1(false)}
                      >
                          {men.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}

                      </NavDropdown>
                      <NavDropdown title="Jewellery" id="navbarScrollingDropdown" show={show2}
                          onMouseEnter={()=>setShow2(!show2)}
                          onMouseLeave={()=>setShow2(false)}
                      >
                          {Jewellery.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                          

                      </NavDropdown>
                      <NavDropdown title="Art" id="navbarScrollingDropdown" show={show3}
                          onMouseEnter={()=>setShow3(!show3)}
                          onMouseLeave={()=>setShow3(false)}
                      >
                          {art.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown>                      
                      <NavDropdown title="Home" id="navbarScrollingDropdown" show={show4}
                          onMouseEnter={()=>setShow4(!show4)}
                          onMouseLeave={()=>setShow4(false)}
                      >
                          {home.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown> 
                      <NavDropdown title="Kids" id="navbarScrollingDropdown" show={show5}
                          onMouseEnter={()=>setShow5(!show5)}
                          onMouseLeave={()=>setShow5(false)}
                      >
                          {kids.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown> 
                      <NavDropdown title="Music" id="navbarScrollingDropdown" show={show6}
                          onMouseEnter={()=>setShow6(!show6)}
                          onMouseLeave={()=>setShow6(false)}
                      >
                          {music.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown> 
                      <NavDropdown title="Health" id="navbarScrollingDropdown" show={show7}
                          onMouseEnter={()=>setShow7(!show7)}
                          onMouseLeave={()=>setShow7(false)}
                      >
                          {health.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown>                       
                      <NavDropdown title="Speciality" id="navbarScrollingDropdown" show={show8}
                          onMouseEnter={()=>setShow8(!show8)}
                          onMouseLeave={()=>setShow8(false)}
                      >
                          {speciality.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown> 
                      <NavDropdown title="Tech" id="navbarScrollingDropdown" show={show9}
                          onMouseEnter={()=>setShow9(!show9)}
                          onMouseLeave={()=>setShow9(false)}
                      >
                          {tech.map(item=>{
                            return <NavDropdown.Item href="#action4">{item}</NavDropdown.Item>
                          })}
                      </NavDropdown> 
                      <Nav.Link href="#features">About</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
    </div>
  )
}
