import { MdOutlineKeyboardArrowLeft , MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function ArrowButton({ direction, onClick }) {
    const arrowSymbol = direction ;
  
    return (
      <button className={`arrow absolute top-0 bottom-0 ${direction === 'prev' ? "left-2" : "right-2"}`} onClick={onClick}>
        {arrowSymbol === 'next' ? <MdOutlineKeyboardArrowRight className="bg-white"/> : <MdOutlineKeyboardArrowLeft className="bg-white"/>}
      </button>
    );
  }
  