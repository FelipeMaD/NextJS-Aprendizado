
const showDiv = () =>{
  return(
    <div className={'flex flex-col align-middle'}>
        <h1>Eita mundo bom</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, tempore mollitia ea temporibus ab quos nesciunt eius fuga in consequatur deleniti vel voluptates, molestiae doloribus inventore molestias explicabo ut ipsum.</p>
    </div>
  )
}

export default function Home() {

 let ativo = true;

  return (
    <div>
        { ativo? 
          showDiv()
         : (
          <p>Mierda</p>
        )}
    </div>
  );
}

