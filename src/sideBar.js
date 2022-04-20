import React,{useEffect, useRef, useState} from 'react'
import './App.css'
import search_icon from './images/search_icon.png';
import axios from 'axios';

export default function SideBar() 
{
  const [item,setItem]=useState([]);
  const [find,setFind]=useState([]);
  const [isPanelOpen, setStates]= useState(true);
  const checkbox1=useRef(null);
  const checkbox2=useRef(null);
  const [search,setSearch]=useState([]);

  const fetchData=async()=>{
    let jsonData=await axios.get("https://www.storenvy.com/search/products.json?page=1&per_page=20&category=mens-accessories&t=5500938");
    setItem(jsonData.data.products);

}
  useEffect(()=>{
    fetchData();
  },[])
async function editorpick()
{
  let jsonData=await axios.get("https://www.storenvy.com/search/products.json?page=1&per_page=20&order=newest&editors_picks=true&category=mens-accessories&t=5501141");
  setItem(jsonData.data.products);
}
async function onsale()
{
  let jsonData=await axios.get("https://www.storenvy.com/search/products.json?page=1&per_page=20&order=popular&on_sale=true&category=mens-accessories&t=5501150");
  setItem(jsonData.data.products);
}

async function Disp()
{
  let jsonData=await axios.get("https://storenvy.com/search/products.json?page=1&per_page=20&category=mens-accessories&editors_picks=true&order=popular&on_sale=true&t=5501178");
  setItem(jsonData.data.products);
}

function cb(){

  if ((checkbox1.current.checked) &&(checkbox2.current.checked))
  {
    Disp();
  }
  else if (checkbox1.current.checked)
  {
    editorpick();
  }
  else if (checkbox2.current.checked)
  {
      onsale();
  }
  else
  {
    fetchData();
  }
}

function sug(txt){
  setFind(txt);
  let arr;
  if(txt){
    arr=item.filter(data => data.name.toUpperCase().indexOf(txt.toUpperCase()) > -1);
  }
  setSearch(arr);
  console.log(txt,arr);
}

function sugHand(txt){
  setFind(txt);
  setSearch([]);
}

  return (
    <div className='side'>
      <div onClick={() =>setStates(!isPanelOpen)}>
        <button type="button" className="toggle">Hide Filters</button>
      </div>
      { isPanelOpen ?
    
        <section className='side-a'>
          <article>
            <h4>Search</h4>
            <input className='side-b' type="text" placeholder='Search' value={find} onChange={(e) =>sug(e.target.value) } onBlur={()=>
              { setTimeout(()=>{
                setSearch([])
              },1000)}
              }
              />
              {
              search && search.map(data=>{
                return(
                  <div className='sample'>
                    <div className='autocomplete' onClick={()=>sugHand(data.name)} >{data.name}</div>
                  </div>
                  
                )
              })
            }
          </article>
            
          <article >
            <h4>Show Only</h4>
            <label className='checkbox-a'>
            <input type="checkbox" onClick={cb} ref={checkbox1} /> Editor's Picks</label>
            
            <label className='checkbox-b'>
            <input type="checkbox" onClick={cb} ref={checkbox2} /> On Sale</label>
            
          </article>
          <article>
            <h4>Categories</h4>
            <p class="center">Women's</p>
            <p class="center">Men's</p>
            <p class="center">Jewellery</p>
            <p class="center">Art</p>
            <p class="center">Home</p>
            <p class="center">Kids</p>
            <p class="center">Music</p>
            <p class="center">Health</p>
            <p class="center">Speciality</p>
            <p class="center">Tech</p>
          </article>
        </section>
        :
        <></>
      }

        <section className='data'>
            
            {
            find.length? 
          
            item.filter((data)=> data.name.toUpperCase().indexOf(find.toUpperCase())>-1).map((i)=>
            {
            return(




              <section className='info'>
              <img className='images' src={i.photo.url} />
              <div>
              <p class="name">{i.name}</p>
              <div class="main">
                <div class="price">
                <p>{i.price}</p>
                </div>
              
              <div class="storename">
              <p>{i.store.name}</p>
              </div>
              </div>
              </div>
            </section>
            );
            }
            ) :
              
              item.map((info)=>{
                return(
                  <section className='info'>
                    <img className='images' src={info.photo.url} />
                    <div>
                    <p class="name">{info.name}</p>
                    <div class="main">
                      <div class="price">
                      <p>{info.price}</p>
                      </div>
                    
                    <div class="storename">
                    <p>{info.store.name}</p>
                    </div>
                    </div>
                    </div>
                  </section>
                )
              })
            }
        </section>
        
    </div>
  )
}
