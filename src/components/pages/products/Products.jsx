import React,{useEffect,useState} from "react";

export default function Products() {

  const [myData, setmyData] = useState([])

useEffect(() => {
    const fetchapi = async() =>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    console.log(data)
    setmyData(data)
  }
   fetchapi()
},[])


const galleryitem = (cateitem) =>{
  const updatedata = (currItem) =>{
    return currItem.category !== cateitem
    
  }
  setmyData(galleryitem)
}

  return (
    <div>
      <h2>products pages .....</h2>

      <div className='cardbox'>
        {
          myData.map((val) =>(
            <div className="card">
              <img src={val.image} alt=""/>
            </div>
          ))
        }
      </div>
    
    </div>
  );
}
