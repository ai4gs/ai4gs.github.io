import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import AdityaVashistha from '../photos/Aditya Vashistha.jpeg';
import AlhamAjiFikri from '../photos/Alham Aji Fikri.jpg';
import AnanyaAgrawal from '../photos/Ananya Agrawal.jpg';
// import AnimeshMukherjee from '../photos/Animesh Mukherjee.jpg';
import AseemSrivastava from '../photos/Aseem Srivastava.jpg';
import BasharAlhafni from '../photos/Bashar Alhafni.png';
import BoulbabaBenAmor from '../photos/Boulbaba Ben Amor.png';
import ChirantanChatterjee from '../photos/Chirantan Chatterjee.jpg';
import DanishPruthi from '../photos/Danish Pruthi.jpg';
import ElizabethChurchill from '../photos/Elizabeth Churchill.jpg';
import FajriKoto from '../photos/Fajri Koto.png';
import GayatriBhat from '../photos/Gayatri Bhat.jpg';
import HowardLakougna from '../photos/Howard Lakougna.jpeg';
import MukundChoudhary from '../photos/Mukund Choudhary.jpg';
import IshtiaqueAhmed from '../photos/Ishtiaque Ahmed.jpg';
// import JackiONeill from '../photos/Jacki O Neill.jpg';
import JoyojeetPal from '../photos/Joyojeet Pal.jpg';
import KalikaBali from '../photos/Kalika Bali.jpg';
import KentaroToyama from '../photos/Kentaro Toyama.jpg';
import LucianaBenotti from '../photos/Luciana Benotti.jpeg';
import LuizChiruzzo from '../photos/Luiz Chiruzzo.jpg';
import MadhurJindal from '../photos/Madhur Jindal.jpg';
import MelissaDensmore from '../photos/Melissa Densmore.jpg';
import MonojitChoudhury from '../photos/Monojit Choudhury.jpg';
import MunmunDeChoudhury from '../photos/Munmun De Choudhury.png';
import WessamEzzeddine from '../photos/Wessam Ezzeddine.jpg'
import PrashantKodali from '../photos/Prashant Kodali.jpg';
import RidaQadri from '../photos/Rida Qadri.jpg';
import SougataSaha from '../photos/Sougata Saha.jpeg';
import SourabrataMukherjee from '../photos/Sourabrata Mukherjee.jpg';
import SunayanaSitaram from '../photos/Sunayana Sitaram.png';
import SunipaDev from '../photos/Sunipa Dev.jpg';
import TalalRahwan from '../photos/Talal Rahwan.jpg';
import VukosiMarivate from '../photos/Vukosi Marivate.jpg';
import WiebkeDenecke from '../photos/Wiebke Denecke.jpg';
import YasirZaki from '../photos/Yasir Zaki.png';
import Yosephine from '../photos/Yosephine.jpg';
import AnilBDeolalikar from '../photos/‪Anil B. Deolalikar.png';
import JuliaKreutzer from '../photos/Julia Kreutzer.jpg';
import GbengaOgedegbe from '../photos/Gbenga Ogedegbe.jpg';
import ThamarSolorio from '../photos/Thamar Solorio.jpg';
import LyantonietteChua from '../photos/Lyantoniette Chua.jpg';
import ChetanArora from '../photos/Chetan Arora.jpg';
import SandeepSukumaran from '../photos/Sandeep Sukumaran.png';
import HariprasadKodamana from '../photos/Hariprasad Kodamana.jpg';
import SalmanKhan from '../photos/Salman Khan.jpeg';
import TatapongBeyala from '../photos/Tatapong Beyala.jpeg';
import AlhamFikriAji from '../photos/Alham Aji Fikri.jpg';
import ParagSingla from '../photos/Parag Singla.jpg';
import SalsabilaZahirahPranida from '../photos/Salsabila Zahirah Pranida.png';
import MuhammadDehanAlKautsar from '../photos/Muhammad Dehan Al Kautsar.jpeg';
import AmrKeleg from '../photos/Amr Keleg.jpg';

export default function People() {
  const [selectedView, setSelectedView] = useState('organizers');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const coChairs = [
    { name: 'Monojit Choudhury', institution: 'MBZUAI', photoUrl: MonojitChoudhury, profile: 'https://mbzuai.ac.ae/study/faculty/monojit-choudhury/' },
    { name: 'Sunayana Sitaram', institution: 'Microsoft Research India', photoUrl: SunayanaSitaram, profile: 'https://www.microsoft.com/en-us/research/people/susitara/' }
  ].sort((a, b) => a.name.localeCompare(b.name));

  // Social Event Chair single person
  const socialEventChair = {
    name: 'Hariprasad Kodamana',
    institution: 'IIT Delhi Abu Dhabi',
    photoUrl: HariprasadKodamana,
    profile: 'https://web.iitd.ac.in/~kodamana/HariprasadKodamana.html'
  };

  const executiveMembers = [
    { name: 'Aditya Vashistha', institution: 'Cornell University', photoUrl: AdityaVashistha, profile: 'https://www.adityavashistha.com/' },
    { name: 'Elizabeth Churchill', institution: 'MBZUAI', photoUrl: ElizabethChurchill, profile: 'https://elizabethchurchill.com/' },
    { name: 'Fajri Koto', institution: 'MBZUAI', photoUrl: FajriKoto, profile: 'https://mbzuai.ac.ae/study/faculty/fajri-koto/' },
    { name: 'Sunipa Dev', institution: 'Google', photoUrl: SunipaDev, profile: 'https://sunipa.github.io/' }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const organizingMembers = [
    { name: 'Aseem Srivastava', photoUrl: AseemSrivastava, profile: 'https://as3eem.github.io/' },
    { name: 'Amr Keleg', photoUrl: AmrKeleg, profile: 'https://amr-keleg.github.io/' },
    { name: 'Ananya Agrawal', photoUrl: AnanyaAgrawal, profile: 'https://in.linkedin.com/in/ananya-agrawal-6b9803222' },
    { name: 'Gayatri Bhat', photoUrl: GayatriBhat, profile: 'https://in.linkedin.com/in/gayatri-bhat-2a1a94193' },
    { name: 'Madhur Jindal', photoUrl: MadhurJindal, profile: 'https://in.linkedin.com/in/madhur-jindal' },
    { name: 'Mukund Choudhary', institution: 'MBZUAI', photoUrl: MukundChoudhary, profile: 'https://mukundc2k.github.io/' },
    { name: 'Muhammad Dehan Al Kautsar', photoUrl: MuhammadDehanAlKautsar, profile: 'https://www.linkedin.com/in/dehanalkautsar/' },
    { name: 'Prashant Kodali', photoUrl: PrashantKodali, profile: 'https://in.linkedin.com/in/prashant-kodali' },
    { name: 'Salsabila Zahirah Pranida', photoUrl: SalsabilaZahirahPranida, profile: 'https://irasalsabila.github.io/' },
    { name: 'Sougata Saha', photoUrl: SougataSaha, profile: 'https://sougata-ub.github.io/' },
    { name: 'Sourabrata Mukherjee', photoUrl: SourabrataMukherjee, profile: 'https://souro.github.io/' }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const participants = [
  //{ name: 'Alham Aji Fikri', institution: 'MBZUAI', photoUrl: AlhamAjiFikri, profile: 'https://afaji.github.io/' },
  { name: 'Anil B. Deolalikar', institution: 'UC Riverside', photoUrl: AnilBDeolalikar, profile: 'https://profiles.ucr.edu/app/home/profile/anild' },
  //{ name: 'Animesh Mukherjee', institution: 'IIT Kgp', photoUrl: AnimeshMukherjee, profile: 'https://cse.iitkgp.ac.in/~animeshm/' },
  { name: 'Bashar Alhafni', institution: 'MBZUAI', photoUrl: BasharAlhafni, profile: 'https://www.basharalhafni.com/' },
  { name: 'Boulbaba Ben Amor', institution: 'Inception/Microsoft AI4SG', photoUrl: BoulbabaBenAmor, profile: 'https://sites.google.com/view/boulbaba-ben-amor' },
  // { name: 'Chirantan Chatterjee', institution: 'MBZUAI / Sussex Abu Dhabi', photoUrl: ChirantanChatterjee, profile: 'https://sites.google.com/view/chirantanonline/home' },
  { name: 'Danish Pruthi', institution: 'IISc', photoUrl: DanishPruthi, profile: 'https://danishpruthi.com/' },
  // { name: 'Olugbenga G. Ogedegbe', institution: 'NYU', photoUrl: GbengaOgedegbe, profile: 'https://nyulangone.org/doctors/1538227699/olugbenga-g-ogedegbe' },
  { name: 'Howard Lakougna', institution: 'Gates Foundation', photoUrl: HowardLakougna, profile: 'https://www.linkedin.com/in/howard-lakougna-5125b378' },
  { name: 'Ishtiaque Ahmed', institution: 'Uo Toronto', photoUrl: IshtiaqueAhmed, profile: 'https://www.ishtiaque.net/' },
  // { name: 'Jacki O Neill', institution: 'Microsoft', photoUrl: JackiONeill, profile: 'https://www.microsoft.com/en-us/research/people/jaoneil/' },
  { name: 'Joyojeet Pal', institution: 'UMich', photoUrl: JoyojeetPal, profile: 'https://www.si.umich.edu/people/joyojeet-pal' },
  { name: 'Julia Kreutzer', institution: 'Cohere', photoUrl: JuliaKreutzer, profile: 'https://juliakreutzer.github.io/' },
  { name: 'Kalika Bali', institution: 'Microsoft Research India', photoUrl: KalikaBali, profile: 'https://www.microsoft.com/en-us/research/people/kalikab/' },
  { name: 'Kentaro Toyama', institution: 'University of Michigan', photoUrl: KentaroToyama, profile: 'https://www.kentarotoyama.org/profile/default.htm' },
  { name: 'Luciana Benotti', institution: 'Universidad Nacional de Córdoba', photoUrl: LucianaBenotti, profile: 'https://benotti.github.io/' },
  { name: 'Luis Chiruzzo', institution: 'Universidad de la República, Uruguay', photoUrl: LuizChiruzzo, profile: 'https://www.fing.edu.uy/es/node/40865' },
  { name: 'Melissa Densmore', institution: 'UCT, South Africa', photoUrl: MelissaDensmore, profile: 'https://www.melissadensmore.com/' },
  { name: 'Munmun De Choudhury', institution: 'Georgia Tech', photoUrl: MunmunDeChoudhury, profile: 'http://www.munmund.net/' },
  { name: 'Wessam Ezzeddine', institution: 'AI Safety UAE', photoUrl: WessamEzzeddine, profile: 'https://ae.linkedin.com/in/wes-ezzeddine' },
  // { name: 'Rida Qadri', institution: 'Google', photoUrl: RidaQadri, profile: 'https://ridaqadri.net/' },
  { name: 'Talal Rahwan', institution: 'NYU Abu Dhabi', photoUrl: TalalRahwan, profile: 'https://www.trahwan.com/' },
  { name: 'Thamar Solorio', institution: 'MBZUAI', photoUrl: ThamarSolorio, profile: 'https://mbzuai.ac.ae/study/faculty/thamar-solorio/' },
  { name: 'Vukosi Marivate', institution: 'Uo Pretoria', photoUrl: VukosiMarivate, profile: 'https://www.vima.co.za/' },
  { name: 'Wiebke Denecke', institution: 'MIT', photoUrl: WiebkeDenecke, profile: 'https://lit.mit.edu/denecke/' },
  { name: 'Yasir Zaki', institution: 'NYU Abu Dhabi', photoUrl: YasirZaki, profile: 'https://ae.linkedin.com/in/yasir-zaki-7716a17' },
  { name: 'Yosephine', institution: 'AI Singapore', photoUrl: Yosephine, profile: 'https://blogs.ntu.edu.sg/multi-net-lab/yosephine-susanto/' },
  { name: 'Lyantoniette Chua', institution: 'AI Safety Asia', photoUrl: LyantonietteChua, profile: 'https://www.linkedin.com/in/lyantoniettechua/' },
  { name: 'Chetan Arora', institution: 'IIT Delhi', photoUrl: ChetanArora, profile: 'https://www.cse.iitd.ac.in/~chetan/' },
  { name: 'Sandeep Sukumaran', institution: 'IIT Delhi', photoUrl: SandeepSukumaran, profile: 'https://web.iitd.ac.in/~san81/' },
  { name: 'Salman Khan', institution: 'MBZUAI', photoUrl: SalmanKhan, profile: 'https://salman-h-khan.github.io/' },
  { name: 'Tatapong Beyala', institution: 'GURL BOSS PRODUCTION', photoUrl: TatapongBeyala, profile: 'https://www.linkedin.com/in/tatapong-beyala-31a55a201/?originalSubdomain=cm' },
  { name: 'Alham Fikri Aji', institution: 'MBZUAI', photoUrl: AlhamFikriAji, profile: 'https://mbzuai.ac.ae/study/faculty/alham-fikri-aji/' },
  { name: 'Parag Singla', institution: 'IIT Delhi', photoUrl: ParagSingla, profile: 'https://www.cse.iitd.ac.in/~parags/' }  
].sort((a, b) => a.name.localeCompare(b.name));
  
  const renderSocialEventChair = () => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Social Event Chair</h3>
      <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
        <div className="text-center">
          <img
            src={socialEventChair.photoUrl}
            alt={`Photo of ${socialEventChair.name}`}
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-900">
            <a href={socialEventChair.profile} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">
              {socialEventChair.name}
            </a>
          </h3>
          <p className="text-indigo-600 font-medium">{socialEventChair.institution}</p>
        </div>
      </div>
    </div>
  );

  const renderOrganizers = () => (
    <div>
      {/* Co-Chairs */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Co-Chairs</h3>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {coChairs.map((person, index) => (
            <div key={index} className="text-center">
              <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">
                <a href={person.profile} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">
                  {person.name}
                </a>
              </h3>
              <p className="text-indigo-600 font-medium">{person.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Event Chair */}
      {renderSocialEventChair()}

      {/* Executive Members */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Executive Members</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {executiveMembers.map((person, index) => (
            <div key={index} className="text-center">
              <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">
                <a href={person.profile} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">
                  {person.name}
                </a>
              </h3>
              <p className="text-indigo-600">{person.institution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizing Members */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Organizing Members</h3>
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {organizingMembers.map((person, index) => (
            <div key={index} className="text-center">
              <img
                src={person.photoUrl}
                alt={`Photo of ${person.name}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-base font-bold text-gray-900">
                <a href={person.profile} target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">
                  {person.name}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderParticipants = () => (
    <div>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
        Meet the participants of AI4GS - researchers, students, and practitioners from across the Global South.
      </p>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6 max-w-6xl mx-auto">
        {participants.map((person, index) => (
          <div key={index} className="text-center">
            <img
              src={person.photoUrl}
              alt={`Photo of ${person.name}`}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-sm font-bold text-gray-900">
              <a href={person.profile} target="_blank" rel="noopener noreferrer" className="hover:underline text-green-600">
                {person.name}
              </a>
            </h3>
            {person.institution && (
              <p className="text-green-600 text-xs mt-1">{person.institution}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">People</h2>

        {/* Dropdown Menu */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg flex items-center gap-3 min-w-[200px] justify-between"
            >
              <span>{selectedView === 'organizers' ? 'Organizers' : 'Participants'}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10">
                <button
                  onClick={() => {
                    setSelectedView('organizers');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-indigo-50 transition-colors ${
                    selectedView === 'organizers' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Organizers
                </button>
                <button
                  onClick={() => {
                    setSelectedView('participants');
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-indigo-50 transition-colors ${
                    selectedView === 'participants' ? 'bg-indigo-50 text-indigo-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Participants
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-12">
          {selectedView === 'organizers' && renderOrganizers()}
          {selectedView === 'participants' && renderParticipants()}
        </div>
      </div>
    </div>
  );
}