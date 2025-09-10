import Topo from "@/components/Topo";
import Timeline from "@/components/Timeline";

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
    <div className="content-div">
        {/* { ativo? 
          showDiv()
         : (
          <p>Mierda</p>
        )}

        <div>
          <h1>Titulo</h1>
          <div>
            <div className='flex justify-between items-center bg'>
              <p>Texto 12</p>
              <p>Texto 2</p>
            </div>
            <div className="flex justify-evenly h-20">
              <p className='txt-4xl'>ola</p>
              <p>tudo</p>
              <p>bom</p>
            </div>
            
            <p>Descricao - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Itaque provident minima suscipit voluptas ipsa laudantium sed, sequi ratione consequatur, 
              qui ullam blanditiis tenetur iure incidunt officia? Numquam aliquid assumenda culpa?
            </p>
          </div>
        </div> */}
        {/* <Topo/> */}

        <Timeline />
    </div>
  );
}

