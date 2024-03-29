import { IoIosCheckmarkCircle } from "react-icons/io";
import AZUL from '../assets/AZUL.png';
import NETSHOES from '../assets/NETSHOES.png';
import WAY from '../assets/WAY.png';
import PREMIERE from '../assets/PREMIERE.png';
import ZAP from '../assets/ZAP.png';
import TUFOS from '../assets/TUFOS.png';
import NORD from '../assets/NORD.png';
import PROTON from '../assets/PROTON.png';
import MULLAD from '../assets/MULLAD.png';
import ML from '../assets/ML.png';
import AIRBNB from '../assets/AIRBNB.png';



const CardDataCheckers = [
  {
    image: WAY,
    title: 'SANTADER WAY',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Apenas logando, checker via emulador',
    cpmFree: '3 CPM Sem Proxies',
    cpmPago: '3 CPM Sem Proxies',
    price1: 'R$79 - 5 Dias',
    price2: 'R$159 - 14 Dias',
    price3: 'R$259 - Vitalicio',
    link: 'https://youtu.be/c6e30muHpwI',
  },

  {
    image: PREMIERE,
    title: 'PREMIERE + Telecine via Claro',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Checker abre navegador pra rodar e precisa passar logins já testados na claro. Lives apenas as que derem pra ativar, demais ja vinculadas ou sem plano vai pra bad',
    cpmFree: '4 CPM Sem Proxies',
    cpmPago: '4 CPM Sem Proxies',
    price1: 'R$99 - 3 Dias',
    price2: 'R$179 - 14 Dias',
    price3: 'R$359 - Vitalicio',
    link: 'https://www.youtube.com/watch?v=YxnnO-Zsk9E',
  },
  {
    image: AIRBNB,
    title: 'AIRBNB COOKIES',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'O checker roda db de cookies. Retornando se tem ou não viagens',
    cpmFree: '4 CPM Sem Proxies',
    cpmPago: '4 CPM Sem Proxies',
    price1: 'R$69 - 3 Dias',
    price2: 'R$149 - 14 Dias',
    price3: 'R$229 - Vitalicio',
  },
  {
    image: ML,
    title: 'MP/ML COOKIES',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'O checker roda db de cookies. Retornando se tem ou não movimentação, caso dejesa adicionar mais alguma puxada só entrar em contato',
    cpmFree: '4 CPM Sem Proxies',
    cpmPago: '4 CPM Sem Proxies',
    price1: 'R$79 - 3 Dias',
    price2: 'R$159 - 14 Dias',
    price3: 'R$259 - Vitalicio',
  },
  {
    image: ZAP,
    title: '[DETECT] Numero Whatsapp',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Testa os numeros de telefone se tem whatsapp',
    cpmFree: '5 CPM Sem Proxies',
    cpmPago: '5 CPM Sem Proxies',
    price1: 'R$99 - 7 Dias',
    price2: 'R$149 - 14 Dias',
    price3: 'R$259 - 30 Dias',
    link: 'https://www.youtube.com/watch?v=1oGedU4zvUY',
  },
  {
    image: TUFOS,
    title: '[DETECT] TUFOS',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Testa se o email tem cadastro',
    cpmFree: '59 CPM Sem Proxies',
    cpmPago: '150 CPM Sem Proxies',
    price1: 'R$99 - 7 Dias',
    price2: 'R$149 - 14 Dias',
    price3: 'R$259 - Vitalicio',
  },

  {
    image: NORD,
    title: 'Trocador de IP NORDVPN',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Troca o IP automaticamente de tempos em tempos, escolhido por você o tempo.',
    cpmFree: '-',
    cpmPago: '-',
    price1: 'R$59 - 7 Dias',
    price2: 'R$99 - 14 Dias',
    price3: 'R$159 - 30 Dias',
  },
   
  {
    image: PROTON,
    title: 'Trocador de IP ProtonVPN',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Troca o IP automaticamente de tempos em tempos na opção randomica escolhido por você o tempo. Por não ter suporte de comando, controla seu mouse pra fazer a troca',
    cpmFree: '-',
    cpmPago: '-',
    price1: 'R$59 - 7 Dias',
    price2: 'R$99 - 14 Dias',
    price3: 'R$159 - 30 Dias',
    link: 'https://www.youtube.com/watch?v=5ms9QIBzjj0&feature=youtu.be',
  },
  {
    image: MULLAD,
    title: 'Trocador de IP MULLADVPN',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Troca o IP automaticamente de tempos em tempos, escolhido por você o tempo.',
    cpmFree: '-',
    cpmPago: '-',
    price1: 'R$59 - 7 Dias',
    price2: 'R$99 - 14 Dias',
    price3: 'R$159 - 30 Dias',
  },
   
    
  ];
  
  export default CardDataCheckers;