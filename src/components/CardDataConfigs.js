import { IoIosCheckmarkCircle } from "react-icons/io";
import Claro from '../assets/claro.png';
import OI from '../assets/oi.png';
import DGO from '../assets/dgo.png';
import HBO from '../assets/hbo.png';
import PLAYPLUS from '../assets/playplus.png';
import INSTA from '../assets/insta.png';
import CRUNCHYROLL from '../assets/crunchyroll.png';
import SANTA from '../assets/santa.png';
import OUTLOOK from '../assets/outlook.png';
import FAMILY from '../assets/family.png';
import DISNEY from '../assets/DISNEY.png';
import VIVO from '../assets/VIVO.png';
import AMERICANAS from '../assets/AMERICANAS.png';
import UFC from '../assets/UFC.png';
import ZE from '../assets/ZE.png';
import SKY from '../assets/SKY.png';
import UNIVER from '../assets/UNIVER.png';
import TUFOS from '../assets/TUFOS.png';
import TIMNETFLIX from '../assets/TIMNETFLIX.png';
import NETFLIX from '../assets/NETFLIX.png';
import TERRA from '../assets/TERRA.png';
import GLOBO from '../assets/GLOBO.png';
import PORTOSEGURO from '../assets/PORTOSEGURO.png';
import PORTOPLUS from '../assets/PORTOPLUS.png';
import BLUETICKET from '../assets/BLUETICKET.png';
import BRADESCO from '../assets/BRADESCO.png';
import MAGALU from '../assets/MAGALU.png';
import XP from '../assets/XP.png';
import AMAZON from '../assets/AMAZON.png';
import SMILES from '../assets/SMILES.png';
import PETZ from '../assets/PETZ.png';
import BOL from '../assets/BOL.png';
import IG from '../assets/IG.png';
import SPOTIFY from '../assets/SPOTIFY.png';




const CardDataConfigs = [
 
  {
    image: Claro,
    title: 'Claro [Logins]',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Não puxa planos, apenas logins acessando, testa tanto email quanto cpf',
    cpmFree: '200  CPM Proxy Premium',
    cpmPago: '200  CPM Proxy Premium',
    price1: 'R$99',
    price2: 'R$159',
  },

  {
      image: Claro,
      title: 'Claro [Planos]',
      icon: <IoIosCheckmarkCircle/>,
      desc: 'Puxando os Planos: Netflix Premiere Discovery+ HBO Combate Disney+ Claro vídeo e puxa o status ATIVO ou ATIVAR Também Puxa o plano de TV e INTERNET',
      cpmFree: '20 CPM Proxy Free',
      cpmPago: '500 CPM Proxy Premium',
      price1: 'R$189',
      price2: 'R$269',
      link: 'https://www.youtube.com/watch?v=1NVKDrI4Vbk',
    },
    {
      image: Claro,
      title: 'Claro [Faturas]',
      icon: <IoIosCheckmarkCircle/>,
      desc: 'Puxando Valor da Fatura | Nome | Celular | Datas Vencimento/Proxima Fatura',
      cpmFree: '150  CPM Proxy Premium',
      cpmPago: '150  CPM Proxy Premium',
      price1: 'R$139',
      price2: 'R$219',
    },
    {
      image: Claro,
      title: 'Claro [Movel]',
      icon: <IoIosCheckmarkCircle/>,
      desc: 'Puxando Planos de Celular - Controle ou Pre pago',
      cpmFree: '150  CPM Proxy Premium',
      cpmPago: '150  CPM Proxy Premium',
      price1: 'R$159',
      price2: 'R$249',
    },
    {
      image: DGO,
      title: 'Directv Go [Logins]',
      icon: <IoIosCheckmarkCircle/>,
      desc: 'Não puxa planos, apenas logins acessando',
      cpmFree: '10 CPM Proxy Free',
      cpmPago: '250 CPM Proxy Premium',
      price1: 'R$69',
      price2: 'R$109',
      link: 'https://www.youtube.com/watch?v=Ispmd7S4xAE',
  },
  {
    image: SPOTIFY,
    title: 'SPOTIFY LOGINS',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Logins acessando apenas',
    cpmFree: '100  CPM Proxy FREE',
    cpmPago: '100  CPM Proxy FREE',
    price1: 'R$159',
    price2: 'R$259',
  },
  {
    image: SPOTIFY,
    title: 'SPOTIFY PLANOS',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Puxando planos, planos free vao pra custom',
    cpmFree: '5 CPM sem proxy',
    cpmPago: '5 CPM sem proxy',
    price1: 'R$129',
    price2: 'R$229',
  },
  {
    image: DGO,
    title: 'Directv Go [Planos]',
    icon: <IoIosCheckmarkCircle/>,
    desc: 'Puxando Planos, config em selenium (abre o navegador)',
    cpmFree: '(Sem Proxy) 5CPM',
    cpmPago: '(Sem Proxy) 5CPM',
    price1: 'R$159',
    price2: 'R$239',
    link: 'https://www.youtube.com/watch?v=Ispmd7S4xAE',
},
{
  image: SKY,
  title: 'SKY [Logins]',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Não puxa planos, apenas logins acessando',
  cpmFree: '0 CPM Proxy Free',
  cpmPago: '500 CPM Proxy Premium',
  price1: 'R$179',
  price2: 'R$249',

},
{
  image: SKY,
  title: 'SKY [Planos]',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando Plano, Pacotes (Disney etc) e Tipo de Pagamento(Pos,Pre). Extrai Tbm db de CPF:SENHA',
  cpmFree: '0 CPM Proxy Free',
  cpmPago: '100 CPM Proxy Premium',
  price1: 'R$210',
  price2: 'R$339',
},
{
  image: INSTA,
  title: 'INTAGRAM [DETECT]',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Apenas testa se o login tem cadastro',
  cpmFree: '30 CPM Proxy Free',
  cpmPago: '170 CPM Proxy Premium',
  price1: 'R$129',
  price2: 'R$199',
},  
{
  image: INSTA,
  title: 'INTAGRAM SEGUIDORES',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando qtd. Seguidores e Seguindo e Link do perfil. Bloqueios e 2FA separados',
  cpmFree: '5 CPM Proxy Free',
  cpmPago: '150 CPM Proxy Residencial',
  price1: 'R$229',
  price2: 'R$359',
}, 
{
  image: OI,
  title: '[DETECT] OI FIBRA',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Live apenas CPF com plano FIbra Atual ou Legado/Antigo',
  cpmFree: '80 CPM Proxy Free',
  cpmPago: '500 CPM Proxy Premium',
  price1: 'R$149',
  price2: 'R$229',
},
{
  image: OI,
  title: 'OI PLAY',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando quantidade de pacotes adicionais na OIPLAY + se tem: OIPLAY PREMIERE TELECINE PARAMOUNT+ HBO',
  cpmFree: '15 CPM Proxy Free',
  cpmPago: '300 CPM Proxy Premium',
  price1: 'R$139',
  price2: 'R$219',
},
{
  image: PLAYPLUS,
  title: 'PLAYPLUS',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando logins com Planos',
  cpmFree: '300 CPM Proxy Free',
  cpmPago: '(Sem Proxy) 1000 CPM',
  price1: 'R$49',
  price2: 'R$89',
},   
{
  image: CRUNCHYROLL,
  title: 'CRUNCHYROLL',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando logins com Planos',
  cpmFree: '40 CPM Proxy Free',
  cpmPago: '200 CPM Proxy Premium',
  price1: 'R$49',
  price2: 'R$79',
},
{
  image: UNIVER,
  title: 'UNIVER VIDEO',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando logins com Planos, Puxa a data de vencimento do plano',
  cpmFree: '40 CPM Proxy Free',
  cpmPago: '150 CPM Proxy Premium',
  price1: 'R$99',
  price2: 'R$169',
},
{
  image: TUFOS,
  title: '[CAPTCHA] TUFOS',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Retorna apenas logins com assinatura ativa como hit, usa saldo de captcha pra rodar. Ideal passar primeiro no detect que está disponivel na pagina dos checkers',
  cpmFree: '5 CPM Sem Proxies',
  cpmPago: '5 CPM Sem Proxies',
  price1: 'R$99',
  price2: 'R$159',
},
{
  image: TIMNETFLIX,
  title: 'TIM NETFLIX',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando link pra ativar netflix. Já converte a senha pra senha de 4Dig',
  cpmFree: '50 CPM Proxy Free',
  cpmPago: '150 CPM Proxy Premium',
  price1: 'R$249',
  price2: 'R$359',
  link: 'https://youtu.be/70sBaotDoj8'
},
/* {
  image: NETFLIX,
  title: 'NETFLIX',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Recomendado proxy residencial de maior qualidade para evitar pular hits. Puxando Plano, Telas e Vencimento. Separa cada plano em um arquivo diferente pra facilitar as vendas',
  cpmFree: '200 CPM Proxy Premium',
  cpmPago: '400 CPM Proxy Residencial',
  price1: 'R$189',
  price2: 'R$249',
}, */
{
  image: SANTA,
  title: 'SANTANDER WEB',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testa apenas o login e senha, sem puxar infos. Maioria das lives também batem no santa way. config em selenium (abre o navegador)',
  cpmFree: '(Sem Proxy) 5 CPM',
  cpmPago: '(Sem Proxy) 5 CPM',
  price1: 'R$169',
  price2: 'R$219',
},

{
  image: OUTLOOK,
  title: 'HOTMAIL/OUTLOOK',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Roda todos emails microsoft, live, msn. Emails bloqueados, banidos e ativadade incomum etc vai pra custom o que acaba acontecendo dependendo do ip do proxy de pular alguma live',
  cpmFree: '200 CPM Proxy Residencial',
  cpmPago: '200 CPM Proxy Residencial',
  price1: 'R$199',
  price2: 'R$289',
  link: 'https://www.youtube.com/watch?v=YzECk4cpj84&feature=youtu.be'
},

{
  image: OUTLOOK,
  title: 'HOTMAIL/OUTLOOK',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Roda todos emails microsoft, live, msn. Emails bloqueados, banidos e ativadade incomum etc vai pra custom, o que acaba acontecendo dependendo do ip do proxy de pular alguma live. Puxa varias pulavras ao mesmo tempo',
  cpmFree: '200 CPM Proxy Residencial',
  cpmPago: '200 CPM Proxy Residencial',
  price1: 'R$259',
  price2: 'R$389',
  link: 'https://www.youtube.com/watch?v=YzECk4cpj84&feature=youtu.be'
},
{
  image: TERRA,
  title: 'TERRA EMAIL',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testando os logins e puxando palavra de sua escolha',
  cpmFree: '80 CPM Proxy FREE',
  cpmPago: '300 CPM Proxy Premium',
  price1: 'R$129',
  price2: 'R$209',
},

{
  image: IG,
  title: 'IG EMAIL',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testando os logins e puxando palavra de sua escolha',
  cpmFree: '300 CPM Proxy FREE',
  cpmPago: '300 CPM Proxy FREE',
  price1: 'R$189',
  price2: 'R$279',
},

{
  image: BOL,
  title: 'BOL EMAIL',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testando os logins e puxando palavra de sua escolha. quando o proxy queima pode pular live, mas muito pouca %',
  cpmFree: '30 CPM Proxy off com vpn rotativa',
  cpmPago: '30 CPM Proxy Residencial',
  price1: 'R$189',
  price2: 'R$279',
},

{
  image: PORTOPLUS,
  title: 'PORTOPLUS',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando pontos disponíveis, deverá ser passado apenas lives da portoseguro',
  cpmFree: '5 CPM Sem Proxies',
  cpmPago: '10 CPM Proxy Premium',
  price1: 'R$159',
  price2: 'R$259',
},
{
  image: PORTOSEGURO,
  title: 'PORTOSEGURO',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando apenas os logins',
  cpmFree: '40 CPM Proxy Free',
  cpmPago: '250 CPM Proxy Premium',
  price1: 'R$119',
  price2: 'R$199',
},
{
  image: SMILES,
  title: 'SMILES',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando quantidade de Smiles, Situação da conta e assinatura',
  cpmFree: '80 CPM Proxy Free',
  cpmPago: '350 CPM Proxy Premium',
  price1: 'R$229',
  price2: 'R$399',
},
{
  image: FAMILY,
  title: '[DETECT] MY FAMILY CINEMA',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando planos e dias restantes',
  cpmFree: '200 CPM Proxy Free',
  cpmPago: '200 CPM Proxy Free',
  price1: 'R$99',
  price2: 'R$139',
},



{
  image: PETZ,
  title: 'PETZ',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando status do ultimo pedido, sem pedidos vai pra custom',
  cpmFree: '60 CPM Proxy Free',
  cpmPago: '400 CPM Proxy Residencial',
  price1: 'R$149',
  price2: 'R$239',
}, 

{
  image: DISNEY,
  title: 'DISNEY+',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Puxando planos',
  cpmFree: '0 CPM Proxy Free',
  cpmPago: '1200 CPM Proxy Premium',
  price1: 'R$69',
  price2: 'R$119',
}, 
{
  image: VIVO,
  title: 'VIVO',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Não puxa nada, apenas testando login e senha. Testa email e cpf',
  cpmFree: '110 CPM Proxy Free',
  cpmPago: '600 CPM Proxy Premium',
  price1: 'R$69',
  price2: 'R$119',
},
{
  image: UFC,
  title: 'UFC PASS',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Sem planos vai pra custom, com plano hit',
  cpmFree: '60 CPM Proxy Free',
  cpmPago: '900 CPM Proxy Premium',
  price1: 'R$79',
  price2: 'R$129',
},

{
  image: ZE,
  title: 'ZÉ DELIVERY',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Sem planos vai pra custom, com plano hit',
  cpmFree: '50 CPM Proxy Free',
  cpmPago: '150 CPM Proxy Premium',
  price1: 'R$119',
  price2: 'R$179',
}, 

{
  image: MAGALU,
  title: 'MAGALU',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Veja o vídeo para entender. Config feita em site parceiro da magalu, 99% tem cadastro então funciona muito bem como detect, mas também metade dos logins também acessa. Claro que podendo variar de db pra db',
  cpmFree: '30 CPM Proxy Free',
  cpmPago: '100 CPM Proxy Premium',
  price1: 'R$99',
  price2: 'R$159',
  link: 'https://www.youtube.com/watch?v=JqvfXHlqwWc'
},

{
  image: AMAZON,
  title: '[DETECT] AMAZON',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testa apenas se o login tem cadastro',
  cpmFree: '30 CPM Proxy Free',
  cpmPago: '100 CPM Proxy Premium',
  price1: 'R$119',
  price2: 'R$179',
}, 
{
  image: BRADESCO,
  title: '[DETECT] BRADESCO',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testa apenas se o cpf tem cadastro',
  cpmFree: '10 CPM Proxy Free',
  cpmPago: '600 CPM Proxy Premium',
  price1: 'R$99',
  price2: 'R$149',
}, 
{
  image: BLUETICKET,
  title: 'BLUETICKET',
  icon: <IoIosCheckmarkCircle/>,
  desc: 'Testa apenas se o login tem cadastro',
  cpmFree: '150 CPM Proxy Free',
  cpmPago: '600 CPM Proxy Premium',
  price1: 'R$149',
  price2: 'R$229',
}, 
  
   
   
    
  ];
  
  export default CardDataConfigs;
