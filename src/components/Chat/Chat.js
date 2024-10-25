// import React from "react";
// import "./Chat.css";

// function Chat() {
//   return (
//     <>
//       <div className="boxChat">
//         <div className="dizAi">
//           <h2>Diz aí!</h2>
//         </div>
//         <div className="caixaMensagens">
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/462332122_1521600445389333_5260011748844675626_n.jpg?ccb=11-4&oh=01_Q5AaIOAr7VXD7zZKMdn0pM0uwGpJkV9M5nt3a350zKHXklrv&oe=671A307A&_nc_sid=5e03e0&_nc_cat=108"
//                 alt=""
//               />
//               <p>Wesley Paredes</p>
//             </div>
//             <p>
//               Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou
//               demais!!!
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/310631978_624227612532015_8640003397218576997_n.jpg?ccb=11-4&oh=01_Q5AaIIQTSfQ5iO3nZD2h0eLk9YPuDQzBsG2hyO6xLMY-mu7c&oe=671A5DA2&_nc_sid=5e03e0&_nc_cat=111"
//                 alt=""
//               />
//               <p>Carlos Jansen</p>
//             </div>
//             <p>
//               Fala não! Sei nem como cheguei em casa... Só acordei na minha
//               minha cama kkkkkkkkk. Top!!
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/455827374_1045307063902346_782829551288981246_n.jpg?ccb=11-4&oh=01_Q5AaIPN1mz4ep5CaPr1D7kyfbjRgmt1IlS0BuTtcUgJ56EkF&oe=671A3B85&_nc_sid=5e03e0&_nc_cat=107"
//                 alt=""
//               />
//               <p>Gabriel Francisco</p>
//             </div>
//             <p>
//               Vcs viram que o Fogo de Terra tá com promoção de nas sextas
//               feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/425192712_3740245432876479_1746292174605629943_n.jpg?ccb=11-4&oh=01_Q5AaIPSZsVtttQ43ErfC_heVIFPetvFFYrJ3cqJp5GaAW16G&oe=671A4C98&_nc_sid=5e03e0&_nc_cat=106"
//                 alt=""
//               />
//               <p>Alexandre Alves</p>
//             </div>
//             <p>
//               Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento
//               do do Natal Gelado, lá no Tacaruna. Elas endoidaram kkkk. Tá massa
//               lá
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/462332122_1521600445389333_5260011748844675626_n.jpg?ccb=11-4&oh=01_Q5AaIOAr7VXD7zZKMdn0pM0uwGpJkV9M5nt3a350zKHXklrv&oe=671A307A&_nc_sid=5e03e0&_nc_cat=108"
//                 alt=""
//               />
//               <p>Wesley Paredes</p>
//             </div>
//             <p>
//               Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou
//               demais!!!
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/310631978_624227612532015_8640003397218576997_n.jpg?ccb=11-4&oh=01_Q5AaIIQTSfQ5iO3nZD2h0eLk9YPuDQzBsG2hyO6xLMY-mu7c&oe=671A5DA2&_nc_sid=5e03e0&_nc_cat=111"
//                 alt=""
//               />
//               <p>Carlos Jansen</p>
//             </div>
//             <p>
//               Fala não! Sei nem como cheguei em casa... Só acordei na minha
//               minha cama kkkkkkkkk. Top!!
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/455827374_1045307063902346_782829551288981246_n.jpg?ccb=11-4&oh=01_Q5AaIPN1mz4ep5CaPr1D7kyfbjRgmt1IlS0BuTtcUgJ56EkF&oe=671A3B85&_nc_sid=5e03e0&_nc_cat=107"
//                 alt=""
//               />
//               <p>Gabriel Francisco</p>
//             </div>
//             <p>
//               Vcs viram que o Fogo de Terra tá com promoção de nas sextas
//               feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!
//             </p>
//           </div>
//           <div className="mensagens">
//             <div className="perfil">
//               <img
//                 src="https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/425192712_3740245432876479_1746292174605629943_n.jpg?ccb=11-4&oh=01_Q5AaIPSZsVtttQ43ErfC_heVIFPetvFFYrJ3cqJp5GaAW16G&oe=671A4C98&_nc_sid=5e03e0&_nc_cat=106"
//                 alt=""
//               />
//               <p>Alexandre Alves</p>
//             </div>
//             <p>
//               Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento
//               do do Natal Gelado, lá no Tacaruna. Elas endoidaram kkkk. Tá massa
//               lá
//             </p>
//           </div>
//         </div>
//         <div>
//           <form className="chatFormInputText" action="#">
//             <textarea
//               className="chatInputText"
//               rows="4"
//               cols="50"
//               placeholder="Digite seu texto aqui..."
//             ></textarea>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Chat;

import React, { useState } from "react";
import "./Chat.css";
import fotoC from '../../images/1WhatsApp Image 2024-10-15 at 14.26.45.jpg';
import fotoW from '../../images/Wesley.jpg';
import fotoG from '../../images/Gabriel.jpg';
import fotoX from '../../images/Xande.jpeg';

function Chat() {
  const [messages, setMessages] = useState([
    {
      user: "Wesley Paredes",
      text: "Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou demais!",
      img: {fotoW}
    },
    {
      user: "Carlos Jansen",
      text: "Fala não! Sei nem como cheguei em casa... Só acordei na minha cama kkkkkkkkk. Top!!",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/310631978_624227612532015_8640003397218576997_n.jpg?ccb=11-4&oh=01_Q5AaIIQTSfQ5iO3nZD2h0eLk9YPuDQzBsG2hyO6xLMY-mu7c&oe=671A5DA2&_nc_sid=5e03e0&_nc_cat=111"
    },
    {
      user: "Gabriel Francisco",
      text: "Vcs viram que o Fogo de Terra tá com promoção de nas sextas feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/455827374_1045307063902346_782829551288981246_n.jpg?ccb=11-4&oh=01_Q5AaIPN1mz4ep5CaPr1D7kyfbjRgmt1IlS0BuTtcUgJ56EkF&oe=671A3B85&_nc_sid=5e03e0&_nc_cat=107"
    },
    {
      user: "Alexandre Alves",
      text: "Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento do do Natal Gelado, lá no Tacaruna. Elas endoidaram kkkk. Tá massa lá",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/425192712_3740245432876479_1746292174605629943_n.jpg?ccb=11-4&oh=01_Q5AaIPSZsVtttQ43ErfC_heVIFPetvFFYrJ3cqJp5GaAW16G&oe=671A4C98&_nc_sid=5e03e0&_nc_cat=106"
    },
    {
      user: "Wesley Paredes",
      text: "Mano... Que noite foi aquela no Bar do Gera, ontem? Bombou demais!!!",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/462332122_1521600445389333_5260011748844675626_n.jpg?ccb=11-4&oh=01_Q5AaIOAr7VXD7zZKMdn0pM0uwGpJkV9M5nt3a350zKHXklrv&oe=671A307A&_nc_sid=5e03e0&_nc_cat=108"
    },
    {
      user: "Carlos Jansen",
      text: "Fala não! Sei nem como cheguei em casa... Só acordei na minha cama kkkkkkkkk. Top!!",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/310631978_624227612532015_8640003397218576997_n.jpg?ccb=11-4&oh=01_Q5AaIIQTSfQ5iO3nZD2h0eLk9YPuDQzBsG2hyO6xLMY-mu7c&oe=671A5DA2&_nc_sid=5e03e0&_nc_cat=111"
    },
    {
      user: "Gabriel Francisco",
      text: "Vcs viram que o Fogo de Terra tá com promoção de nas sextas feiras? 30 conto o rodízio pow... Tá valendo demais. Simbora!",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/455827374_1045307063902346_782829551288981246_n.jpg?ccb=11-4&oh=01_Q5AaIPN1mz4ep5CaPr1D7kyfbjRgmt1IlS0BuTtcUgJ56EkF&oe=671A3B85&_nc_sid=5e03e0&_nc_cat=107"
    },
    // {
    //   user: "",
    //   text: "",
    //   img: ""
    // },
    // {
    //   user: "",
    //   text: "",
    //   img: ""
    // },
    {
      user: "Alexandre Alves",
      text: "Ahhh, esse fds fiquei off. Peguei minhas filhas e fui lá no evento do do Natal Gelado, lá no Tacaruna. Elas endoidaram kkkk. Tá massa lá",
      img: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/425192712_3740245432876479_1746292174605629943_n.jpg?ccb=11-4&oh=01_Q5AaIPSZsVtttQ43ErfC_heVIFPetvFFYrJ3cqJp5GaAW16G&oe=671A4C98&_nc_sid=5e03e0&_nc_cat=106"
    },
    // Adicione outras mensagens aqui...
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    if (inputValue.trim()) {
      const newMessage = {
        user: "Você",
        text: inputValue,
        img: "https://i.pinimg.com/280x280_RS/39/82/58/3982584222ebfad41d818e9de2b80197.jpg" // URL da imagem do seu perfil https://via.placeholder.com/50
      };
      setMessages([...messages, newMessage]);
      setInputValue(""); // Limpa o input após enviar
    }
  };

  return (
    <>
      <div className="boxChat">
        <div className="dizAi">
          <h2>Diz aí!</h2>
        </div>
        <div className="caixaMensagens">
          {messages.map((msg, index) => (
            <div className="mensagens" key={index}>
              <div className="perfil">
                <img src={msg.img} alt="" />
                <p>{msg.user}</p>
              </div>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div>
          <form className="chatFormInputText" onSubmit={handleSubmit}>
            <textarea
              className="chatInputText"
              rows="4"
              cols="50"
              placeholder="Digite seu texto aqui..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado do input
            ></textarea>
            <button type="submit" className="sendButton">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;
