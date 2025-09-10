import topoStyles from '../styles/Topo.module.css'
import { GrDocumentTest } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import { FaCalendarTimes } from "react-icons/fa";
import { MdViewTimeline } from "react-icons/md";



export default function Topo(){

    return (
        <div className={topoStyles.contStyle}>
            <div className={topoStyles.itemTrail1}>
                <div className={topoStyles.card}>
                    <p><strong>Titulo</strong></p>
                    <button>Botão</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, </p>
                    
                </div>
                <div className={topoStyles.iconeBox}><GrDocumentTest color='white'className={topoStyles.icones}/></div>

            </div>
            <div className={topoStyles.itemTrail2}>
                <div className={topoStyles.card}>
                    <p><strong>Titulo</strong></p>
                    <button>Botão</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, </p>
                    
                </div>
                <div className={topoStyles.iconeBox}><FaCity color='white' className={topoStyles.icones}/></div>
            </div>
            <div className={topoStyles.itemTrail3}>
                <div className={topoStyles.card}>
                    <p><strong>Titulo</strong></p>
                    <button>Botão</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, </p>
                    
                </div>
                <div className={topoStyles.iconeBox}><FaCalendarTimes color='white' className={topoStyles.icones}/></div>
            </div>
            <div className={topoStyles.itemTrail4}>
                <div className={topoStyles.card}>
                    <p><strong>Titulo</strong></p>
                    <button>Botão</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, </p>
                    
                </div>
                <div className={topoStyles.iconeBox}><MdViewTimeline color='white' className={topoStyles.icones}/></div>
            </div>
        </div>
    )
}