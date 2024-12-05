import Chola from '../assets/Chola.svg';
import Maratha from '../assets/MarathaClan.svg';
import Vijaya from '../assets/VijayaClan.svg';
import Raj from '../assets/image 2.svg';

function Clan() {
  const clans = [
    { src: Chola, alt: 'Chola' },
    { src: Maratha, alt: 'Maratha' },
    { src: Vijaya, alt: 'Vijaya' },
    { src: Raj, alt: 'Rajputana' }
  ];

  return (
    <>
      <div id="clans" className="text-center text-5xl text-blue-50 mb-[5vh] heading section-gap">
        CLANS
      </div>
      <div className="clans flex justify-evenly px-[5vw]">
        {clans.map((clan, index) => (
          <div style={{border:"2px solid rgba(0,0,0,1)", boxShadow: "2px 3px 10px black"}} key={index} className="rounded-full h-[12rem] w-[12rem]">
            <img src={clan.src} alt={clan.alt} className="rounded-full w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Clan;
