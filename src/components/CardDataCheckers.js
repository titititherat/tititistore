import { IoIosCheckmarkCircle } from "react-icons/io";
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
import FAMILY from '../assets/family.png';
import MAX from '../assets/MAX.png';
import TOTALACESSO from '../assets/TOTALACESSO.png';
import FERRAMENTAS from '../assets/FERRAMENTAS.png';
import CLARO from '../assets/claro.png';




const CardDataCheckers = [
 
  {
    image: CLARO,
    title: '[DETECT]CLARO CPF',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Detect (so testa o cadastro) de CPF, api robusta testando apenas cpf. A ferramenta e liberada em 1IP',
    cpmFree: '500 CPM sem proxy',
    cpmPago: '500 CPM sem proxy',
    price1: 'R$89 - 7 Dias',
    price2: 'R$139 - 14 Dias',
    price3: 'R$199 - 30 Dias',
  },
 
  {
    image: MAX,
    title: 'HBO/MAX',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Lives apenas contas pra criar perfil.Checker selenium, necessario logins claro já testado. Bem vindo de volta ou conta ja criada vai pra custom.',
    cpmFree: '5 CPM sem proxy',
    cpmPago: '5 CPM sem proxy',
    price1: 'R$59 - 5 Dias',
    price2: 'R$129 - 14 Dias',
    price3: 'R$229 - Vitalicio',
  },

  {
    image: FAMILY,
    title: 'MY FAMILY CINEMA',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Checker via emulador de android (memu) Puxando planos',
    cpmFree: '2 CPM sem proxy',
    cpmPago: '2 CPM sem proxy',
    price1: 'R$69 - 5 Dias',
    price2: 'R$129 - 14 Dias',
    price3: 'R$199 - Vitalicio',
  },
  {
    image: TOTALACESSO,
    title: 'TOTAL ACESSO',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Checker em selenium, Lives retornando o pedido, login sem pedido vai pra custom. Rodando sem proxy, então talvez seja necessario trocar o ip em algum momento, por hora nos testes nao foi necessario.',
    cpmFree: '5 CPM sem proxy',
    cpmPago: '5 CPM sem proxy',
    price1: 'R$99 - 5 Dias',
    price2: 'R$139 - 14 Dias',
    price3: 'R$229 - Vitalicio',
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
    price1: 'R$99 - 7 Dias',
    price2: 'R$149 - 14 Dias',
    price3: 'R$239 - Vitalicio',
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
  {
    image: FERRAMENTAS,
    title: 'SEPARADOR DE LOGS',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Roda varios arquivos de uma vez | Pode escolher site ou todos .br | Separa CPF:SENHA e EMAIL:SENHA pelo site de sua escolha',
    cpmFree: 'Nao usa proxy',
    cpmPago: 'Nao usa proxy',
    price1: 'R$59 - 7 Dias',
    price2: 'R$99 - 30 Dias',
    price3: 'R$169 - Vitalicio',
    link: 'https://www.youtube.com/watch?v=5ms9QIBzjj0&feature=youtu.be',
  },
    
  ];
  
  export default CardDataCheckers;