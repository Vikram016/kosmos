// Helper: Add scroll event listener only once
let projectsScrollListenerAdded = false;

// Modal logic for chapter cards
const modal = document.getElementById('chapterModal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.chapter-card').forEach(card => {
card.addEventListener('click', function() {
const chapter = card.getAttribute('data-chapter');

// Always ensure modalText has scrollbars and max-height
      modalText.style.overflow = 'auto';
      modalText.style.maxHeight = '90vh';
      modal.style.display = 'flex';
      // Always scroll modal to top when opened
      setTimeout(function() {
        var modalTextDiv = document.getElementById('modalText');
        if (modalTextDiv) {
          modalTextDiv.scrollTop = 0;
        }
        // Also scroll any scrollable child div to top
        var scrollContent = modalTextDiv ? modalTextDiv.querySelector('.scroll-content') : null;
        if (scrollContent) {
          scrollContent.scrollTop = 0;
        }
      }, 0);
      // Remove the hash from the URL without reloading whenever modal is opened
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }       

// Techno systems
if (chapter === 'technosystems'){
modalText.innerHTML = `
       <div style="position:relative;padding:0;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:600px;overflow:hidden;">
          <style>
            #modalText > div::-webkit-scrollbar {
              width: 10px;
              height: 10px;
              background: #fff;
            }
            #modalText > div::-webkit-scrollbar-thumb {
              background: #fff;
              border-radius: 10px;
              border: 2px solid #222;
            }
            #modalText > div::-webkit-scrollbar-track {
              background: #222;
              border-radius: 10px;
            }
            #modalText > div {
              scrollbar-width: thin;
              scrollbar-color: #fff #222;
            }	    
            
            .nav-links
	    {
               position: sticky;
               top: 0;
               background: #fff;
               padding: 10px 0 0 0;
               border-bottom: 1px solid #ddd;
               margin-bottom: 20px;
               z-index: 1000;
               display: flex;
               flex-direction: column;
               align-items: left;
            }
	    
            #topics-toggle
	    {
              margin-bottom: 10px;
              font-family: 'Poppins', sans-serif;
              font-weight: 600;
              letter-spacing: 0.5px;
              padding: 10px 30px;
              font-size: 1.1em;
              background: #000;
              color: #fff;
              border: none;
              border-radius: 25px;
              cursor: pointer;
              transition: background 0.2s, color 0.2s;
            }
	    
            #topics-toggle:hover 
	    {
               background: #222;
               color: #fff;
            }
	    
            #topics-links 
	    {
               display: none;
               flex-direction: column;
               align-items: left;
               gap: 1px;
               margin-bottom: 10px;
            }
	    
            #topics-links a 
	    {
               color: #000;
               text-decoration: none;
               font-size: 1em;
               margin: 0;
               padding: 6px 0;
               transition: color 0.2s;
            }
	    
            #topics-links a:hover
	    {
               color: #0066cc;
            }

            .scroll-content
	    {	    
               max-height: 500px;
               overflow-y: auto;
               padding: 0 2em 1em 2em;
            }

            .section
	    {
               margin-bottom: 30px;
            }	    

	    .back-to-top
	    {
               position: fixed;
               bottom: 20px;
               right: 20px;
               background: #000;
               color: #fff;
               padding: 10px;
               border-radius: 50%;
               cursor: pointer;
               display: none;
               z-index: 1000;
            }

	    h2
	    {
               font-family: 'Poppins', sans-serif;
               color: #000;
               text-align: center;
               margin-top: 20px;
               margin-bottom: 10px;
               color: rgba(128,128,128,1);
            }

            .section p 
	    {
               font-family: 'Roboto', sans-serif;
               color: rgba(128,128,128,1);
	       line-height: 1.6;
            }

	    ul
	    {
               font-family: 'Roboto', sans-serif;
               color: rgba(128,128,128,1);               
   	       line-height: 1.6;
            }

            span
	    {
              color: rgba(128,128,128,1);
	      font-weight: bold;
            }

          </style>

          <div class="nav-links">
            <button id="topics-toggle">Techno systems - Show topics</button>
            <div id="topics-links">
              <a href="#principles">&nbsp;&nbsp; 01. Our progressive product design principles</a>
              <a href="#faradn">&nbsp;&nbsp; 02. Faradn self-sustaining electricity generator</a>
              <a href="#dunebuk">&nbsp;&nbsp; 03. Dune Buk wearable computer</a>
	      <a href="#alefa">&nbsp;&nbsp; 04. Alef-A airship-type kosmos ship</a>
              <a href="#aleff">&nbsp;&nbsp; 05. Alef-F kosmos ferry</a>
              <a href="#bothships">&nbsp;&nbsp; 06. About both Alef-A and Alef-F kosmos ships</a>
              <a href="#stillsuit">&nbsp;&nbsp; 07. A kosmos suit called Stillsuit</a>
              <a href="#biology">&nbsp;&nbsp; 08. Biology researches</a>
	      <a href="#moggy">&nbsp;&nbsp; 09. Moggy robot cat</a>
	      <a href="#mehfil">&nbsp;&nbsp; 10. Mehfil tent</a>
              <a href="#serf">&nbsp;&nbsp; 11. Serf satellite for Earth orbit debris cleaning</a>
	      <a href="#othermach">&nbsp;&nbsp; 12. Other machines</a>
	      <a href="#habitat">&nbsp;&nbsp; 13. Habitat construction on other worlds</a>
            </div>

          </div>
         
         <div class="scroll-content">
                
         <div id="principles" class="section">
         <h2> 01. Our progressive product design principles</h2> 

           <p><span>&gt;&gt;</span>
             Liberty, Equality, Fraternity, Humanism, Simplicity, Beauty, Gentleness, Realness, Intelligent, Robust, 
	     Seeming from the Dune stories, Human safety as much as possible, Respect for Nature including reversing Climate Change on Earth. 
           </p>

           <p><span>&gt;&gt;</span> 
             We won't do a technology just because there are a hundred other companies doing it 
             or it has been done for a hundred years or just because it has been proposed by some celebrated scientist but 
             the idea is not sensible.
           </p>

           <p><span>&gt;&gt;</span> 
             Readiness to explore sensible methods that are from old times or are unusual. In some things, the past is the future. And we won't wait for 
	     "peer review" for one year before using an idea and we will not discard an idea just because it contradicts the 492nd Law of Thermodynamics. 
	     If an idea is sensible as understood by natural intelligence, we use it. What works, works. What is natural, must become the system.
           </p>

           <p><span>&gt;&gt;</span> 
	     Our electrical machines support the idea that most electrical devices can run on DC current and should run on DC current and that too lower voltage DC and 
	     there are few machines which require high DC current and still fewer devices that operate with AC. Example, a step-up transformer produces AC 
	     which must be converted to DC i.e. "rectified".
           </p>

           <p><span>&gt;&gt;</span> 
             Employ the concept of Circular Economy which also relates to :
           </p>
                                  
           <p style='margin-left:2em;margin-bottom:10px;'><span>(a).</span> Simplified technology.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(b).</span> 
             Decentralization and ease of production and usage which includes electricity generation.
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(c).</span> 
             As much as possible, use of structural materials 
             and fuels that are available cheaply and available in many place or can be produced anywhere so that the manufacturers 
             can produce our products cheaply and make them available to the masses cheaply. Examples, water, air, wood, biocoal 
             and electricity that is produced by a simple, compact, self-sustaining generator.
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(d).</span> 
             Bio-mimicry and Engineered Biology wherever applicable.
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(e).</span> 
             Low-tech when applicable.
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(f).</span> 
             Local empowerment.
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(g).</span> 
             Technology that is well-crafted yet cheaply produced.
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(h).</span> 
             Technologies selected will be simple, reliable and help return humanity anywhere to easier advancement 
             or be resilient when situation becomes bad because of natural or other events like unusually big solar storm, 
             comet or asteroid strike, a pointless global war etc.
           </p>

           <p><span>&gt;&gt;</span> 
	     Take humanity to become a Post-scarcity Civilization by largely doing manufacturing using bacterial biology and 
	     this done within Circular Economy.
	   </p>

           <p><span>&gt;&gt;</span> 
             Our technologies will align around our draft for a democratic, pan-human and Nature-respecting social system for the kosmos, 
	     presented in the "Our social system - Iskra" chapter on this website.
           </p>

           <p><span>&gt;&gt;</span> 
             As examples of the above points :
           </p>

	   <p style='margin-left:2em;margin-bottom:10px;'><span>(a).</span> 
	     Gentleness : Renaming of the planet Mars to "Red One" as the former is the Roman god of war while the latter is a gentle name.
	   </p>

	   <p style='margin-left:2em;margin-bottom:10px;'><span>(b).</span> 
	     Non-sensible ideas from celebrated scientists which we won't use : Dyson Sphere aka Dyson Swarm.
	   </p>  

	   <p style='margin-left:2em;margin-bottom:10px;'><span>(c).</span> 
	     Human safety : Not following the silliness of nuclear fission or fusion as the means to generate electricity or propel kosmos ships.
	   </p>

	   <p style='margin-left:2em;margin-bottom:10px;'><span>(d).</span> 
	     Simplicity : Not using semiconductor material. So no transistors and no VLSI stuff.
	   </p>

	   <p style='margin-left:2em;margin-bottom:10px;'><span>(e).</span> 
	     Realness : The wearable computer in the following wonderful sci-fi short film on YouTube called 
	     "ICE - A Thousand Suns / Episode 1" and is at this link [ https://www.youtube.com/watch?v=RXaVgAxtYFI ].
	   </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(f).</span> 
	     Humanism : Not using the Capitalist and profiteering word "Payload" to describe what simply can be called "Cargo".
	   </p>

           </div>

           <div id="faradn" class="section">
           <h2> 02. Faradn self-sustaining electricity generator</h2>

           <p>
             Presently, electricity generation is by the wrong kinds of generators which are huge, centralized, complicated, 
	     unsafe, polluting and needless like nuclear, hydropower dams, huge on-sea wind turbines etc along with 
	     their complicated and huge system controls, power controls and power delivery mechanisms and all these stretched hundreds of kilometers 
	     or even millions of kilometers like the idiotic concept Dyson Sphere aka Dyson Swarm.
           </p>

           <p>
             There's also an unspoken nefarious element in the promotion of Space-based Solar Power ( SBSP ) 
             where huge photovoltaic panels will sit in Earth orbit and convert the abundant sunlight there to electricity, 
             then convert the electricity to high-power microwaves and send down the microwaves to certain large-focus spots on Earth 
             where on those spots on the ground the microwaves are converted back to electricity by rectennas 
             to be supplied to the grid. The nefarious element here is the potential of this system to be used to zap 
             humans and other things on the ground and in the air using the high-power microwaves by moving these power 
             satellites over targets.
           </p>

           <p>
	     And then once through any of these centralized electricity production systems and delivery systems the electricity comes to a building, 
	     it is distributed within the building by a complicated and fire-hazard within-wall wiring system and ultimately is 
	     to be collected by the users from wall sockets. There, either the larger electricity-needing machines use cables 
	     that are plugged into the sockets to directly use the electricity, or there is a charger which uses cable to plug into 
	     the socket and the charger reduces the electricity strength to be used as output to portable machines like cell phones 
	     which use cable or socket to connect to the charger and then store this electricity into internal rechargeable batteries 
	     which presently is the lithium-ion battery which has been one of humanity's most idiotic inventions.
           </p>

           <p>
             All in all a very complicated, dangerous, polluting, socially disharmonious and needless system.
           </p>

           <p>
             Actual advancement in electricity generation is to make generators simple, compact, 
             self-sustaining, safe, decentralized and cheap, where the generator sits within the small and large machines 
             needing electricity or just outside them. Making generators compact will also enable 
             redundancy, easy replacement and easy placement in any place which needs electricity 
             instead of centralized single points of failure. Within-machine compact generators also contribute 
             to democracy where the individual user freely owns the electricity generation mechanism and its 
             produced electricity.
           </p>

           <p>
             Our Faradn generator system will be such a generator which will power all our non-micro-sized products 
             by sitting within them or just outside them. It will produce 24 volts DC which is enough for most purposes, 
             neither too low a current nor dangerously high. Once started, this generator will continuously produce current 
	     of 24 volts DC for at least a month... this is the self-sustained part. After a month the generator 
	     can be easily refurbished at any small repair shop in any Earthen neighborhood or in a kosmos ship or on another world.
           </p>

           <p>
             We are presently ideating on this generator's simple idea : Two simple bellows filled with normal air, automatically squeezed and 
	     then refilled with air in alternating pulses like a human heart, releasing two pressurized air flows which turn small, lightweight turbines which
	     are connected to small dynamos which in turn produce low current. This low current will be amplified, smoothened and outputted as 24 volts DC. 
	     This will be done in a closed loop to enable a self-sustaining electricity generation system.
           </p>

           <p>
             For high voltage requirements we can create larger versions of this generator or use other amplifying systems like a motor-generator or 
	     this generator can power a Van de Graff Generator.
           </p>

           <p>
             Please check the "Thanks" topic in the "Our company info" chapter on this website to see where we derive most of our ideas for the generator.
           </p>

           <p>
             The name of this system, Faradn, refers to two things : an acknowledgement to Michael
             Faraday and a nod to the Dune story which has the character Farad'n.
           </p>

           <p>
             Bio-batteries based on plant materials can be used to provide the starting electricity in many situations, 
	     like the Faradn generator production workshop in a kosmos ship. Using bio-material battery allows safety, eco-friendliness, social harmony, 
	     sustainability, local material production and decentralization in terms of its electrolyte materials, electrodes, packaging, carryability, use and manufacture.
           </p>

           </div>

           <div id="dunebuk" class="section">           
           <h2> 03. Dune Buk wearable computer</h2>

           <p>
             Dune Buk will be a general-purpose kosmos-operable wearable computer whose main body will be about
             three feet long and worn on the back of the upper arm using two straps - one around the
             upper arm and another over the shoulder, and thus can be used with any kind of clothing (
             kosmos suits, office dress, social clothing etc ) and will be aesthetic enough for the stylish person.
           </p>

           <p>
             Since we are going away radically from traditional electronic computing, this "away" will include new data formats in all aspects of our wearable computer. 
	     Our new data formats used for sensors, computation, storage, wireless transmission and display will neither be based on 
	     the traditional binary format ( "bits" made of 0 and 1 ) nor the also old but not usually used ternary format ( "trits" made of -1, 0, 1 ). 
	     We will form data formats that are for our system and simple.
	   </p>

           <p>
             The Dune Buk's processor will be called Meow and will use sound for the computations. "Meow" usually
             is the sweetest of sounds. Some of the processor's design will derive from our previous
             processor+OS project, Kosmos, which was an open source project that remains documented
             on the OpenCores website on this page [ opencores.org/projects/taar ]. The Meow processor
             will have two computation parts which both use sound - a digital part for regular
             computations and an analog part for more complex computations like image recognition.
           </p>

           <p>
             This computer will use novel methods for data storage in form of faster visuals-based
             temporary memory and fast micromechanical switches for slower permanent memory.
           </p>

           <p>
             We are discussing a simple and universal way of sensing the electromagnetic spectrum using
             sound. The electromagnetic spectrum includes light in all its variations.
           </p>

           <p>
             The display will be a projected display system showing GUI on a screen pullable to the front
             of the user, parallel to the standing surface. Screen input will be performed using a special
             pen for regular input as well as on-screen virtual keyboard for extended typing. The display system 
             will also use sound.
           </p>

           <p>
             File system will be non-hierarchical and categories-recording.
           </p>

           <p>
             There will be a note-taking application which can record drawing, handwriting, typed writing,
             voice and video.
           </p>

           <p>
	     There will be no separate still picture format like JPEG. Videos can be recorded with a minimum duration of one second and 
	     on the Dune Buk they will be viewed as continuous frame vids or they will be viewed frame by frame. And the one second duration vids 
	     will be printable on paper as hologram so that the entire one second vid is viewed on paper documents.
           </p>

           <p>
             Frema is our own in-design wireless internet system for the kosmos and Earth which will be used
             by our Dune Buk wearable computer. The system will be based on peer-to-peer architecture which among other
             things will remove the need for base stations. The below factors apply :
	   </p>

	   <ul>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
	     For signalling the system will use radio-frequency or light or magnetic pulses or infrasound as per situation.
	   </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
             Communication types will be live voice, video, text, forms and other data, and all these different kinds of data will be 
             played in the same type of window. Text will be displayed like paper book pages.
           </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
	     The played data can be locally stored or can come from another Dune Buk comp and in case of the latter, if there are multiple participants in a chat 
	     the data will be forwarded to all the participants' comps in a peer-to-peer forwarding way.
           </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
             For long-distance communication in the kosmos and horizontally on some world the Dune Buk wearable computer will connect from the ground to 
	     low-orbiting or hovering Alef-A crafts which enable relay of communcations.
           </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
	     Specifically about kosmik communication the signaling system and the communication protocol will factor-in 
	     the delay-included conditions of long-distance communication in the kosmos which can range from milliseconds to many hours to lot more.
	   </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
	     The wearable will be connectable to the current internet using bridge computers.
	   </li>

	   </ul>

           <p>
             The use of 24 volts DC and sound in the Dune Buk computer is for these reasons :
           </p>

           <ul>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
             24 volts DC is higher voltage than in most current semiconductor-based electronics space systems as such higher voltage will be less affected 
	     by kosmik radiation.
           </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
             The computations and the other systems use sound also because sound is lot lot less affected by kosmik radiation and temperature than 
	     semiconductor electronics, unless the radiation is so high that the sound producing elements, the sound transmitting channels, 
	     the sound computation chambers, sound receiving elements and other sound elements are physically deformed by the radiation. 
	     But of course, such high radiation will kill our wearable computer's wearer first despite every humanly possible protection, 
	     and the only use of such a computer then is recording such an event.
           </li>

           <li style="margin-left:1em; margin-bottom:10px;">
             <span> >> </span> 
             Sound is also easier and cheaper to produce, receive and use in computation and storage than light ( optical computing and storage ).
           </li>

	   </ul>

           <p>
             There will be an associated home cinema system with a wall screen and multi-channel speakers.
           </p>

           <p>
             On Earth this wearable computer will be used by our customers in parallel with their mobile
             phones and desktops, and in the kosmos will be the sole computers that our customers will carry
             on their person and which separately can control other machines like our vehicles.
           </p>

           <p>
             A further development will be enabling disabled people to use the wearable.
           </p>

           </div>

           <div id="alefa" class="section">           
           <h2> 04. Alef-A airship-type kosmos ship</h2>

           <p>
             We use the airship type of craft to ascend to orbital kosmos from any atmosphere-having world 
             or non-atmosphere world because especially in an atmosphere world this craft has the advantage of operating 
	     on the balloon principle i.e. when the airship's gas bags are filled with a lifting gas or combination of lifting gases 
	     which are lighter than the surrounding air, the whole structure of the airship automatically lifts into the air without any or much fuel expenditure 
             until it reaches to a height where the airship's lifting gas or gases find equilibrium 
             with the lesser atmospheric air at that height. From that atmospheric height for lift of the airship into the kosmik void  
             there will be other upwards push / propulsion methods required.
           </p>

           <p>
             The airship type of kosmos ship is much better than the Tall Rocket because :
	   </p>

           <ul>

           <li style="margin-left:1em; margin-bottom:10px;"><span> >> </span> 
             The Tall Rocket requires lot of fuel just to lift itself one centimeter off the launch pad whereas the airship-type kosmos ship's lift when in 
	     an atmosphere world happens largely automatically through its lift gases.
	   </li>

           <li style="margin-left:1em; margin-bottom:10px;"><span> >> </span> 
             Much less push-into-orbit fuel in the airship-type kosmos ship makes the airship-type kosmos ship much more safer in terms of explosion than 
	     the Tall Rocket whose majority of mass is the very explosive fuel. Therefore an airship-type kosmos ship can lift to the kosmos from any neighborhood's 
	     bus stand or ground, and land similarly, unlike the Tall Rocket which is always launched from isolated places like near sea or remote mountain 
	     or isolated forest or remote flat land.
	   </li>

           <li style="margin-left:1em; margin-bottom:10px;"><span> >> </span> 
             The airship-type kosmos ship can easily be made horizontally larger instead of the vertically huge of the Tall Rocket. 
	     This horizontal largening will make the craft aesthetically pleasing as well as not requiring a huge infrastructure to hold it before launch and 
	     will keep it from toppling when it is sitting on some world... all unlike the Tall Rocket including with the fashionable legs or bottom fins which 
	     every rocket company is building.
	   </li>

           <li style="margin-left:1em; margin-bottom:10px;"><span> >> </span> 
             Talk of how many "stages to orbit" does not apply here because the airship-type kosmos ship will be a single, undivided machine unlike the 
	     at least two stages of the Tall Rocket. The "stages to orbit" is a terminology from the POV of Tall Rocket technology.
	   </li>

           </ul>

           <p>
             Our airship-type kosmos ship is the Alef-A which will be shaped like an upside-down teacup without the handle,
             and its lift gases will be colder helium gas and heated helium gas. An airship or a balloon which uses this lift-gas combination of 
	     a colder gas and a heated gas is called a Roziere Balloon.
           </p>

           <p>
	     The Alef-A's horizontal travel or lift into higher atmosphere and then into the kosmik void will be assisted by rotors, 
	     coal combustion and water steam jets. Of course the gas lift and rotors are usable only if that world has air / atmosphere. The coal propulsion and 
	     steam jets can be used to ascend or descend on any world even without atmosphere.
           </p>

           <p>
             When ascending or descending these fuels are non-recoverable i.e. once they combust or are expelled they cannot be recovered to their 
             original form and be reused.
           </p>
	   
           <p>
             And then once this craft is in the kosmik void it will be given brief pushes by coal combustion for high-speed direction-giving but will be propelled largely 
	     by water steam jets where through an arrangement most of the steam is recovered to water, re-turned to steam and jetted again to enable 
	     longer-distance continuous-thrust travel, thus the water steam here is a largely recoverable fuel.
           </p>

           <p>
             Coal combustion will also be used for effects like braking and positioning near destinations and then for descent on some world.
           </p>

	   <p>  
             The Alef-A will also allow for short-distance kosmos travel like from Earth to Moon's surface.
           </p>

           </div>

           <div id="aleff" class="section">
           <h2> 05. Alef-F kosmos ferry</h2>

           <p>
             The Alef-F will be a kosmos-bound ferry large enough to carry five Alef-A crafts, a hundred
             humans, ten Moggy robot cats ( described in a below topic ), facilities for those in-ferry kosmonauts and 
	     a hundred tons of other cargo and the craft will be primarily propelled by water steam
             jets but will include coal propulsion for momentary high-thrust-requiring situations.
	   </p>

           <p>
	     The facilities will include proper water-using baths and toilets. The ferry will also have sufficient growing facilities for food crop, 
             fuel crop ( for the coal via biocoal ), other crops, a clinic, mini mills for tailoring, woodwork, 
             metalwork, bio-engineering, electricals and computers, research facility, mineral processing, 
             water storage, telescopes and a small swimming pool that is time-segregated for men and women. 
             All this for largely self-sustained long-term living and far travel.
           </p>

           <p>
             This ferry will be able to travel from the Inner Solar System to the Outer Solar System and station around various worlds and 
             kosmik objects to enable from-orbit observations and allow descent-ascent using the Alef-A crafts. 
             The cargo can be anything including mining equipment and habitation-building material. 
	     The construction material will be carried to orbit by the Alef-A crafts.
	   </p>

	   <p>
	     The Alef-F ferry craft is better than not only the current and proposed kosmos stations around Earth and the Moon, 
	     but also better than any deep-kosmos travel crafts proposed by others which will be needlessly complicated, unsafe, 
	     will carry less people and will have very less facilities and will be propelled either chemically or nuclear or plasma. 
	     Our Alef-F ferry can also be called a colony ship.
           </p>

           <p> 
             This ferry craft will be constructed in Earth orbit and in other world orbits and will always remain in the kosmik void, 
	     never to descend on any world.
           </p>

           </div>

           <div id="bothships" class="section">
           <h2> 06. About both Alef-A and Alef-F kosmos ships</h2>
           
           <p>The name "Alef" is a joined word with the below meaning :</p>

           <ul>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The "lef" comes from the slogan 
             "Liberty, Equality, Fraternity" which is a slogan in multiple progressive thought streams 
             including the Preamble ( short introduction ) to the Indian Constitution. </li>

             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The "A" stands for 
             Alif ( "The first" ), meaning these kosmos ships are just the first types of kosmos ships from our organization. Further will be more types. 
	     </li>
           </ul>
           
           <p>
             Both the Alef-A and the Alef-F will be primarily propelled in the kosmos by water steam jets and this is advantageous because :
	   </p>
           
           <ul>

             <li style="margin-left:1em; margin-bottom:10px;">
	       <span>&gt;&gt;</span> Steam is made from water which is found in many places in the Solar System and beyond.
	     </li>

             <li style="margin-left:1em; margin-bottom:10px;">
	       <span>&gt;&gt;</span> Water in itself is safe to handle by humans.
	     </li>

             <li style="margin-left:1em; margin-bottom:10px;">
	       <span>&gt;&gt;</span> Water doesn't explode normally unlike rocket fuel like liquid hydrogen.
	     </li>

             <li style="margin-left:1em; margin-bottom:10px;">
	       <span>&gt;&gt;</span> Water doesn't need to be stored at cryogenic conditions unlike with some current popular kosmos ship fuels 
	       like liquid hydrogen and liquid methane. Water can be just kept a warm liquid using electrical heating.
	     </li>

             <li style="margin-left:1em; margin-bottom:10px;">
	       <span>&gt;&gt;</span> When in the kosmik void, most of the jetted steam is recoverable to liquid water which can be 
	       fed back to the propulsion system to allow for continuous thrust, faster travel and longer travel.
	     </li>

             <li style="margin-left:1em; margin-bottom:10px;">
	       <span>&gt;&gt;</span> Our steam-based propulsion uses a simple heating mechanism to turn water to steam 
	       instead of having other complex and unsafe propulsion mechanisms like plasma or nuclear power.
	     </li>

           </ul>

           <p>
             Facilities on both ships will include proper water-using baths and toilets, with the toilets having disinfectant-having water jet for hygenic and satisfying 
             cleaning after defecation. No yucky toilet paper.
           </p>

           <p>
             It may be possible to form these two kosmik ships to have artificial gravity generation
             using spin by spinning sections of the craft. This enabling will allow humans to live 
             in healthy Earth-like gravity for most of their kosmos journeys and also configure 
             lower or higher gravity to prepare the human travellers for the gravity of other 
             worlds like the Moon or Red One.
           </p>

           <p>
             We will also research in time on anti-gravity vehicles which will affect every aspect of movement of individual humans and vehicles 
	     including a more natural means to fly from worlds ( like Earth ) to the kosmik void and descend on worlds. This is if possible at all. 
	     Such crafts can be very large and of any shape and able to carry maybe hundreds of people at a time, like some of the lander ships in the Dune story.
           </p>

           </div>

           <div id="stillsuit" class="section">           
           <h2> 07. A kosmos suit called Stillsuit</h2>

           <p>
             The full design of this kosmos suit is still in consideration but it will be a hardsuit to allow easy 
             movement of the wearer and better safety, and it will have an exoskeleton. 
	     The suit will use bio-mimicry and biological elements to also allow for self-repair.
           </p>

           <p>
             The suit system will include the helmet, shoes, breathing tanks ( oxygen-nitrogen mixture ),
             water system ( including drinking straws and water recovery from urine ) and temperature 
             control. There will be provision for collecting defecation and rendering it non-toxic and
             non-smelly. The defecation system will include cleaning using disinfectant-having water.
           </p>

           <p>
             The helmet will include a simple, mechanical system to scratch the face, the eyelids and dab
             the face of sweat and tears.
           </p>

           <p>
             The electrical system in the suit will be for some control and will include a mic and speakers.
             For detailed control, the electrical system will be connected to an external Dune Buk
             wearable computer worn on the back-of-the-upper arm of the suit and this computer will
             show the status of the suit visually and also using sound channeled into the suit using the speakers. 
             This computer is described in an above topic.
           </p>

           <p>
             The suit will be paired with separate rubberized guards to be worn on the knees and elbows
             in the manner of cyclists and skaters.
           </p>
	   
	   <p>
             The exoskeleton subsystem will be assisted by electricity though largely will depend on human movement.
             This mechanism will allow for :
           </p>

	   <ul>

           <li style="margin-left:1em; margin-bottom:10px;">
	     <span> >> </span> 
             Lifting heavy-weight and bulky materials which normally a human cannot lift.
	   </li>
           
           <li style="margin-left:1em; margin-bottom:10px;">
	     <span> >> </span> 
             Digging the ground.
           </li>
           
           <li style="margin-left:1em; margin-bottom:10px;">
	     <span> >> </span> 
             Climbing.
           </li>
           
           <li style="margin-left:1em; margin-bottom:10px;">
	     <span> >> </span>
             When a person is partly incapacitated because of injury of limbs, back, neck etc and the
             exoskeleton will help the person not only in movement just after injury but also in healing.
           </li>

	   </ul>

           <p>
             The name of this kosmos suit - Stillsuit - derives from the suit the Fremen people wear in the Dune stories when they go out into the desert.
           </p>

           </div>

           <div id="biology" class="section">           
           <h2> 08. Biology researches</h2>
           
           <p>
             <span> >> </span> The ideal plants to derive biocoal for the coal needed to propel the Alef kosmos ships. 
	     These plants should be growable in the kosmos.
           </p>

           <p>
             <span> >> </span> Strengthened and fire-proof wood for structures in the kosmos ships, kosmos suits, 
             kosmos habitations, the Dune Buk wearable computer and so on. Such wood is preferable to metal in many cases. 
	     The trees for the wood should be growable in the kosmos.
           </p>

           <p>
             <span> >> </span> Transparent wood to replace glass in some applications. The trees for the wood should 
             be growable in the kosmos.
           </p>

           <p> 
             <span> >> </span> Structures of the kosmos ships, kosmos suits and kosmos habitations to be bio-mimicking and also made of biological elements 
	     for radiation shielding, self-repair and a sense of more naturality. For example, there is interest in the fungus Cladosporium Sphaerospermum 
	     which was first identified around the Chernobyl reactor's remains and converts the area's radiation into energy for itself, 
	     a process called radiosynthesis which is comparable to plants converting light to energy through photosynthesis. This fungus eats the radiation.
           </p>

           <p>
             <span> >> </span> Engineered bacteria can be used to do mining and will remove the need for a lot of mechano-chemical 
             mineral extraction and processing factories and their attendant pollution and human physical labor.
	   </p>
	   
	   <p>
             <span> >> </span> Engineered bacteria can be used to perhaps even construct useful matter from other existent
             matter like asteroid rock. This is the concept of bio-transmutation and will remove the need for a lot of mechano-chemical 
             mineral processing and production factories and their attendant ore scarcity, pollution and human physical labor. 
	     Other examples of use :
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(a).</span> 
	     To get the helium gas which our Alef-A airships require as their lift gas.
           </p>
           
           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(b).</span> 
	     To get the nitrogen gas for adding to oxygen in the correct mixture so that humans can breath their Earth-normal air mixture of nitrogen-oxygen.
           </p>
           
           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(c).</span> 
	     To obtain nutrients for plants.
           </p>
            
           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(d).</span> 
	     To extract water or even construct water.
           </p>

           <p> 
             <span> >> </span> 
	     The previously described phenomenon of radiosynthesis has an interesting application for the kosmos which uses the idea 
             similar to the Astrophage bio-organism in Andy Weir's sci-fi book of 2021 called Project Hail Mary. This application is propulsion of 
	     kosmos ships :
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             This will make use of self-replicating bacteria which absorb / eat the different radiations in the kosmos, store those radiation energies internally 
	     like an electrical capacitor and can be made to release / discharge those energies in a single burst at extremely high energy levels just like 
	     a high-voltage electrical capacitor discharge, and this high energy discharge by these bio-organisms can propel kosmos ships 
	     at very very high speeds, maybe greater than Nuclear Pulse Propulsion.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
	     This bio-propulsion can be used in association with our regular steam propulsion where the bacteria give initial extremely high speed pushes to 
	     the kosmos ships and then are not used and then the steam engines with their recoverable water mechanism are turned on to give 
	     continuous propulsion so that higher speeds are reached.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Before water collection points in the kosmos, the bacteria propulsion on the front of the kosmos ship is turned on to brake the ship and 
	     use its steam propulsion to do precise adjustments. Maybe our coal propulsion can be used here or it may not need to be used. Water is collected and 
	     the propulsion process repeated. At the destination, again the combination of bacteria braking and steam-based positioning is used and 
	     maybe to descend on a world the bacteria propulsion can be used in addition to the coal and steam propulsion.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     This system may allow us lot faster and shorter-duration travel within the Solar System and to the stars in a sustainable way using 
	     bacteria-stored energy.
           </p>

           <p>
             <span> >> </span> 
	     Engineered-for-kosmos food production.
           </p>

           <p>
             <span> >> </span> 
	     Plant-based materials like leather and for clothing, packaging etc.
           </p>
                      
           <p>
             <span> >> </span> 
	     Artificial Intelligence system using a combination of human brain cells and our Dune Buk
             wearable computer. This will allow autonomous, compact-sized intelligent computation to be
             carried out within machines or without the complete need of humans like in places where humans cannot 
             go or are too far away. The only artificial intelligence system we will trust is the one we will design.
           </p>

           <p>
             <span> >> </span> 
	     Bio-engineered production of not only plant-based foods but also 
             nutritious originally animal products like sheep milk, chicken egg and honey.
           </p>

           <p>
             <span> >> </span> 
	     Bio-engineered animal products growing also leads to another interesting thing : 
             synthetic wombs for growing human organs and cat organs and entire living humans and this is important not
             only for solving diseases like blindness and kidney failure but also for populating the kosmos with
             humans and also protecting the desirable Earthen lifeforms in case of global devastations.
           </p>

           <p>
             <span> >> </span> 
	     Creating within humans the abilities for self-repair, kosmos-tolerance and enhanced strength. To get these abilities may require biological elements 
	     acting with non-bio nanomachines within the body. It should be possible to thus increase continuous human life span to 2000 years at least.
           </p>

           <p>
             <span> >> </span> However, in enabling biology-based super-enhancement and synthetic wombs for humans, 
             care will be taken that such acquired abilities do not transform humans from their human form into something else 
             i.e. the extreme imagined forms of Transhumanism. So, for example a cat should recognize an enhanced human as a human, 
             a human with gentleness, wisdom, sensitiveness and empathy who a cat can trust... certainly not the robotic 
             massively-muscled enhanced beings of some Hollywood films who do not seem "human".
           </p>

	   </div>        

           <div id="moggy" class="section">
           <h2> 09. Moggy robot cat</h2>

	     <p>
	       We will neither build robot dogs nor humanoid robots. The former because we don't want association with dogs, and no humanoid robots 
	       because of three simple reasons :
	     </p>

	     <p style="margin-left:1em; margin-bottom:10px";> 
	       <span>(a). </span> This will be needless idolatry which is also related to the question : How can one interact by talk and gestures with a humanoid thing
	       knowing fully that it is a machine. Though if human forms have to be recreated then build statues of great lovers like Romeo-Juliet and Laila-Majnu.
	     </p>

	     <p style="margin-left:1em; margin-bottom:10px";> 
	       <span>(b). </span> Via presence of humanoid robots the real humans will internalize another type of feudalism by turning into slave owners 
	       where the humanoid robot will be the slave who is programmed to behave in a servile way.
	     </p>

	     <p style="margin-left:1em; margin-bottom:10px";> 
	       <span>(c). </span> Humans will disconnect from other real humans when instead there should be empathy and fraternity for other real humans.
	     </p>

	     <p>
               So we will design the Moggy robot cat which will be a large cat-like robot which can travel on the surface of ground, on the surface of water and 
	       in the air of any world having atmosphere or no atmosphere as the case may be, including Earth, and able to carry either a single kosmonaut or 
	       80 kgs load. Its walk and other movements will be as graceful, silent, quick and strong as a cat and this will involve replicating the muscles and 
	       bone structure of cats.
	     </p>

	     <p>
               This robot will walk using four legs, fly using rotors and go on the surface of water using a flotation mechanism.
	     </p>

	     <p>
               The non-human load of 80 kgs will be carried in a container on its back. The container's cover will double up as a seat so that 
	       instead of a load inside the container, a kosmonaut wearing our Stillsuit kosmos suit can ride on this robot like people ride horses, donkeys and camels. 
	       The kosmonaut rider will also fly when seated on this seat. There will be a handle and straps to secure the rider.
	     </p>

	     <p>
	       This robot will be able to dig slope-wise into the soil or ice or rock of Earth and other worlds like Earthen animals dig, and this robot will remove the 
	       dug material to the outside by carrying it in the container on the back. The Moggy will use its paws to do the digging, helped by the paws able to 
	       hold metal tools or biology to do the digging.
	     </p>

	     <p>
	       Attached to the Moggy will be an inflatable transparent enclosure to protect the human rider from rain, dust, wind, sun and small kosmik rocks.
	     </p>

	     <p>
	       There can be one Mehfil tent strappable onto Moggy robot cat for use by the kosmonauts who will ride or fly on their own Moggys, 
	       and the tent-carrying Moggys will follow the other Moggys. The Mehfil type tent is described below in the next topic.
	     </p>

             <p>
               This robot will have intelligence through our bio-computing mechanism as described in the "Biology researches" topic above.
             </p>

	     <p>
               This robot will be water-proof for activity within ice and water and it will be able to swim and climb up like fishing cats, jaguars and tigers. 
	       It will have heater mechanism to melt ice. Useful for this robot's excursions on some ice world like Europa to dig through the ice to 
	       reach the supposed water sea under the ice.
	     </p>

	     <p>
	       There can be a group of such cat robots doing the digging and swimming, and this will be useful for creating underground habitations for humans on 
	       the Moon or other world.
	     </p>

	     <p>
	       For communication with top-side or outside the soil hole, ice hole, tunnels and from within water sea this robot will use infrasound or magnetic pulses, 
	       and the control on top-side will be done from a Dune Buk wearable computer.
	     </p>

	     <p>
	       The robot cat will also act as guard against dogs, snakes and other dangers including by entering large tunnels to act as scout before the humans enter.
	     </p>

	     <p>
	       This robot cat as a human transport mechanism for single humans is for the initial exploration of other worlds. When more humans begin to live, 
	       say on the Moon, our Ra surface vehicle will be used to transport 20 humans at once in the vehicle's kosmos-use version. This vehicle is
	       described in the "City redesign on Earth" topic in the "Our social system - Iskra" chapter. In its kosmos-use version it will be built on a world like 
	       the Moon and will never leave that world.
	     </p>

	     <p>
	       There will be a baby version of this robot cat to enter small tunnels.
	     </p>

             <p>
               To not frighten the real biological cats, the Moggy robot cat will not have the face of a real cat.
             </p>

	     <p>
	       "Moggy" is the British name for the common city cat... a typical cat without "pedigree". A democratic name. By nature, any cat is a cat is a cat and 
	       normally only the largest cats don't intermingle most times.
	     </p>

	   </div>	   

           <div id="mehfil" class="section">           
           <h2> 10. Mehfil tent</h2>

           <p>
	     Mehfil tent will be an armored, inflatable, multi-layer tent which will have breathable air and heated atmosphere inside the inner-most layer where will be 
	     space for four kosmonauts plus some more space for equipment. When the Mehfil tent is fully inflated it will become shaped like an igloo and 
	     there will be an airlock inside the entrance tunnel.
           </p>

           <p>
	     One Mehfil tent will be carried by one Moggy robot cat.
           </p>

           <p>
	     This tent will have bio-based radiation shielding as well as light-weight electromagnetic shielding.
           </p>

           <p>
	     This tent will have a foldable heated-water toilet and wash basin.
           </p>

           <p>
	     Our Moggy robot cats will set up the Mehfil tents and if necessary these robots will dig the local ground to create a hole where this tent can be placed 
	     so that there is protection from the environment. The Moggy robot cats will then act as guards outside these tents.
           </p>

           <p>
	     In the Urdu language, Mehfil means "a social gathering". A mehfil can be for anything, especially for discussing the nicer things and 
	     below are three song examples from older Hindi cinema or related to older Hindi cinema, depicting three different moods in a mehfil... 
	     the first song being fun and flirty, the second being softer, the third being passionate :
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(a).</span> 
	     Song is called "Parda hai parda" translatable as "That veil, look at that veil" and the link is 
	     [ https://www.youtube.com/watch?v=WCBkUNedgrk ].
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(b).</span> 
	     Song is called "Naghma-o-shayr ki saughaat kisay paysh karoon" translatable as "Whom do I present this gift of love poetry" and the link is
	     [ https://www.youtube.com/watch?v=4FYlNks47SU ].
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'>
	     <span>(c).</span> 
	     Song is called "Ramta jogi" translatable from Panjabi language as "The wandering mystic" and refers to Ranjha, the lover of Heer in 
	     the great Panjabi love story Heer-Ranjha and the song link is [ https://www.youtube.com/watch?v=qudezKP6_T8 ]. The famous story of Heer-Ranjha is 
	     about the Panjabi girl Heer who becomes in love with the young man Ranjha from another Panjabi clan and their local society conspires to separate them 
	     and in the middle of the story Ranjha becomes a wandering mystic and the story ends in tragedy. This story is also relevant to our company 
	     as we are spreading only love, gentleness and harmony among humanity and call for the end of needless conflicts, hates and anti-human traditions.
           </p>

	   </div>

           <div id="serf" class="section">           
           <h2> 11. Serf satellite for Earth orbit debris cleaning</h2>

           <p>
             There are an estimated 100 million human-made pieces of various sizes in Earth orbit, made
             of metal and other material, which are debris from parts of non-functioning satellites and
             parts from other discarded kosmik vehicles. These pieces size from tiny to large and travel
             around Earth at very high speeds ( 20,000+ kmph ).
           </p>

           <p>
             As human-carrying kosmos ships rise into Earth orbit at various altitudes they have chance of getting hit by these high-speed pieces
             and getting destroyed along with their human cargo or getting very damaged in context of
             current kosmosship-building methods. The two current kosmos stations in Earth orbit also can
             get this risk. This debris was unfortunately ignored in the previous decades but now is
             awareness about not only the simple needlessness of it but also that the debris will soon
             make human travel through Earth orbit very dangerous or even impossible.
           </p>

           <p>
             This debris resulted from thoughtlessness where exists the so-called United Nations
             Organization which should have been the manager of all satellites on behalf of a collective
             and peaceful humanity and the provider to all humanity of the services of the satellites. Thus
             satellites around Earth orbit would have been very few and been in-orbit-repairable or
             retrievable-to-Earth and all their services would have been provided to every human
             individual for free, without taxes, which all is ideal and very easily achieved but the UN was
             and is just UN-involved in any peace-bringing and life-simplifying efforts. Therefore the
             UN-involved allowed :
           </p>
	   
	   <ul>

             <li style="margin-left:1em; margin-bottom:10px;">
                <span>(a).</span> A race of national governments to individually have their own Earth observation satellites in Earth
               orbit for purposes of Earth natural resource observation, pollution observation, climate
               observation, habitation observation, infrastructure observation and of course spying.
	     </li>

	     <li style="margin-left:1em; margin-bottom:10px;">	          
               <span>(b).</span> Commerce where commercial satellites were sent by profiteering corporations to provide
               phone communication, internet communication and TV relaying to people around the world
               but largely for fees.
	     </li>

     	     <li style="margin-left:1em; margin-bottom:10px;">	          
               <span>(c).</span> Not making compulsory on the nations the duty to recover their own defunct satellites and rocket stages floating 
	       through Earth orbits.
	     </li>

           </ul>

           <p>
             The result was these debris fields and we of Kosmos Society are joining the effort
             of various individuals and groups in the world coming up with ideas to increasingly lessen
             this debris until it is no longer there.
           </p>

           <p>
             We are currently designing an autonomous satellite called Serf which will carry a large
             robust detachable net. The satellite will reach a particular Earth orbit and achieve the same
             speed as the debris in that orbit and then the net which has electrically stiffening branches,
             will use that to envelop some of the debris and the satellite will disengage from that debris
             section and make journey towards the Sun to as close as safely possible near the Sun,
             where the detachable net is detached and simultaneously given push so that the net with its
             debris goes into the Sun. The Sun is the best garbage burner we have.
           </p>

           <p>
             The Serf satellite will return to the Earth orbit debris fields, extract another net from its inbuilt net store and do its
             work again and again. And there will be a swarm of Serf satellites to do the job better.
           </p>
	   
	   <p>
	     The satellite will also have a laser to cut up large debris pieces into smaller ones which can be 
	     then taken into the net.
	   </p>  

           <p>
             The Serf satellite will be propelled by water steam jets using the same water-recovery
             propulsion system as in the Alef kosmos ships which means the Serf can do its job for a long
             time before being called to a safe Earth orbit and be water-refilled and refurbished.
           </p>

           <p>
             For the swarm of Serf satellites to begin work in the first instance, the swarm is released into
             safe Earth orbit by an Alef-A craft.
           </p>           

	   <p>
	     This satellite will have intelligence from our bio-computing mechanism as described in the "Biology researches" topic above.
	   </p>

           <p>
             The Serf satellite is called so in honor of the oppressed serfs of Earth, in history and present,
             who toil in dangerous or demanding occupations, doing things the controlling feudals will
             never do themselves and many times the products and services that are made by the serfs,
             are not of useful usage but are made only to increase the clink of the coin in the bank
             accounts of the feudals but the serfs will never hear these coins clink in their own pockets.
            The serf toils to survive in an artificially created wrong situation.
           </p>

           </div>

           <div id="othermach" class="section">
           <h2> 12. Other machines</h2>

             <p>
               <span> >> </span> Machines for water like pumps; portable extractors of water from ice, open water, soil and air; water purifiers; 
	       electrolysis machines.
             </p>

             <p>
               <span> >> </span> 3D Printers.
             </p>

             <p>
               <span> >> </span> Interactive 3D display and sound system using lightweight beads levitated by sound. But do humans really need this ?
             </p>

	     <p>
               <span> >> </span> Other machines.
             </p>

           </div>

	   <div id="habitat" class="section">
           <h2> 13. Habitat construction on other worlds</h2>

           <p>
             The below ideas are for worlds which have soil with rock. For ice worlds it is best to not build permanent habitations 
	     on their surface and instead first observe them from orbit for a long duration and when needed descend on them carefully 
	     using the Alef-A crafts and only if needed use the Moggy robot cat vehicles to carefully travel their surface. And once the ice world 
	     is decided to be safe, the below ideas can be adapted to it.
	   </p>

           <p>
             <span>(a).</span> Building most of the habitation underground for protection against kosmik radiation, 
	     low temperature, high temperature, low pressure, no pressure, high pressure and kosmik dust / small rocks.
	   </p>

	   <p>
             <span>(b).</span> To dig into the soil ( of Moon, Phobos etc ) the Moggy robot cats will be used.
	   </p>

	   <p>
	     <span>(c).</span> From the outside there will be an unpressurized tunnel leading into the main underground habitation. 
             The tunnel is topped with local soil and rocks, radiosynthetic fungi and electro-magnetic shielding... 
	     all to protect it against radiation, temperature, pressure and kosmik dust / rocks. The tunnel's outer door 
	     is also fixed with the same materials. A portion of the door will have a strengthened transparent wood window 
	     which transmits outside natural light to inside the tunnel. Attached to the inner side of this window, will be a movable flap 
	     used to close the inner side of the window. This flap will be also made of the aforesaid materials.
           </p>

	   <p>
	     <span>(d).</span> The tunnel will be big enough to hold three Moggy robot cats, where these machines not only will be used 
	     by the kosmonauts to ride out across that world or fly across it, but also guard the habitation.
           </p>

	   <p>
	     <span>(e).</span> There will be a staircase from inside the tunnel to an enclosed but unpressurized watch tower located on top of the construction. 
	     The watch tower will have 360 degree view via hardened windows and also a dome window which will also be hardened. The windows will have 
	     Rajasthani-style "jaali" window covering aka "jali" on the outside to reduce possible high sunlight as well as dust and also to give aesthetic look. 
	     A picture example of jaali is given below. The entry to the staircase from inside the tunnel will have a door as well as a door at the entry to the watch tower, 
	     and both doors will be made of the materials given in point (c) above. There will be Dune Buk computers doing video and audio recording in 
	     the watch tower as well as use of other sensors.
           </p>

           <p>
             <span>(f).</span> On the inside of the tunnel on one side will be an airlock system large enough to hold eight people 
	     wearing our Stillsuit kosmos suits to use to transfer from the unpressurized outside tunnel into the pressurized actual inside of the habitation.
           </p>

           <p>
             <span>(g).</span> Beyond the inner side of the airlock will be space to easily hold two more Moggy robot cats in addition to having 
	     enough space for Stillsuit'ed kosmonauts to easily pass. From here will be the more interiors.
           </p>

           <p>
             <span>(h).</span> The internal walls will be made of strengthened wood. Wood is lighter than a metal like steel and also growable in the form of trees.
           </p>

           <p>
             <span>(i).</span> Use of bio-mimicry and biology in the structures for self-healing.
           </p>

           <p>
             <span>(j).</span> The entire interiors will be made to spin at Earth gravity level for healthy living. Easily done because a large part of the 
	     internal structure will be made of light but strengthened wood and the living quarters and working quarters will be a network of our Mehfil inflatable tents.
           </p>

           <p>
             <span>(k).</span> All this construction has to be quake-proof and fire-proof.
           </p>

           <p>
             <span>(l).</span> All this construction has to be aesthetic. No need to discard aesthetics just because we are in the kosmos. 	     
	     Form and function, both are important. The architecture should be harmonious, gentle, impose no oppressiveness, must inspire thinking 
	     and must be a delight to the senses. The architecture must be a mix of the most beautiful and environment-sensitive architectures on Earth : 
	     Andalusian, Rajasthani, Mughal, African, Russian and West Asian.
           </p>

           <p>
             From these architectures, the features chosen for passive and active environment control, depending on the kosmik world, 
	     must include types like jaali, malqaf, qanat, salsabil, aromatic wetted mat curtains for entrances and balconies 
	     ( like the Indian "khass" / "khus" grass mats ), fountains and small gardens which have trees growable on the inside. 
	     There can be trees on the outside of the habitations... these trees genetically modified for the soil situation of that particular world 
	     as well as every tree having a supporting enclosure if needed.
           </p>

           <p>
	     Below are photo examples of some of these features :
           </p>

           <p>
             <span> &gt;&gt; </span>
	     Example of a "jaali" window feature from a 19th century house in Gwalior city in India :
	   </p>

	   <p>
	     https://en.wikipedia.org/wiki/Jali#/media/File:P_306--Winter_India.jpg
           </p>

           <p>
               The webpage for this picture is [ https://en.wikipedia.org/wiki/Jali ].
           </p>

           <p>
             <span> &gt;&gt; </span>
	     Example of a "salsabil" feature from Red Fort in Delhi, to do water-based cooling of a room via the water flowing down a shallow 
	     corrugated surface and getting evaporated :
	   </p>

           <p>
	     https://upload.wikimedia.org/wikipedia/commons/b/b6/Lal_Qila_%28Red_Fort%29_123.jpg
           </p>

           <p>
             The webpage for this picture is [ https://en.wikipedia.org/wiki/Salsabil_%28fountain%29 ].
           </p>

	   <p>
             <span>(m).</span> To protect the habitats against big rocks which may penerate even the hardened underground habitats, 
	     stationed in orbit will be the bigger versions of the Serf satellite. In case the incoming kosmik rocks have to be taken away 
	     from that habitation world, the nearest disposal place can be the Sun, Jupiter, Neptune etc depending on which of these
	     places is near to the habitation world.
           </p>

           <p>
	     Imagine coming upon such an architectured city on Deimos, one of the two moons of Red One, or such a city on some rocky world beyond Pluto, 
	     or in a deep crater on Mercury where the crater's bottom is shielded from the Sun... 
	     of course in all three cases the city's features made relevant to the environment of those kosmik places. Our first built example 
	     of such a city will be the Mirkeen-01 city on the Moon whose details you will find in the "Mirkeen-01..." topic in the "Our social system - Iskra" chapter 
	     on this website.
           </p>

	   <p>
             An extension of habitat construction is terraforming other worlds like Red One so that they begin to resemble Earth. For example, 
	     because Red One doesn't have a natural magnetosphere to protect it from most of the Sun's radiation and kosmik radiation, 
	     we can create a magnetosphere by installing large electromagnetic field generators around Red One to prevent most radiation from 
	     reaching the atmosphere of Red One and its surface. These field generators will be powered by our Faradn electricity generators.
             Having multiple generators will be useful in terms of redundancy and multi-level 
             coverage.
           </p>

           </div>

         </div>
     `;
modal.style.display = 'flex';
// Attach Topics toggle event after DOM update
      setTimeout(function() {
        var toggleBtn = document.getElementById('topics-toggle');
        var linksDiv = document.getElementById('topics-links');
        if (toggleBtn && linksDiv) {
          toggleBtn.addEventListener('click', function() {
            if (linksDiv.style.display === 'none' || linksDiv.style.display === '') {
              linksDiv.style.display = 'flex';
              toggleBtn.innerHTML = 'Techno systems - Hide topics';
            } else {
              linksDiv.style.display = 'none';
              toggleBtn.innerHTML = 'Techno systems - Show topics';
            }
          });
          // Add event listeners to links to close topics box on click
          var navLinks = linksDiv.querySelectorAll('a');
          navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
              linksDiv.style.display = 'none';
              toggleBtn.innerHTML = 'Techno systems - Show topics';
              // Prevent default anchor behavior
              e.preventDefault();
              // Get the target section
              var targetId = link.getAttribute('href').replace('#', '');
              var targetElem = document.getElementById(targetId);
              // Remove the hash from the URL without reloading
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
              // Scroll to the section after closing Topics box
              if (targetElem) {
                setTimeout(function() {
                  targetElem.scrollIntoView({behavior: 'smooth'});
                }, 200);
              }
            });
          });
        }
      }, 0);
      // End of modalText.innerHTML assignment
      modal.style.display = 'flex';
      setTimeout(function() {
var closeBtn = document.getElementById('modalCloseBtn');
if (closeBtn) {
closeBtn.onclick = function() {
modal.style.display = 'none';
};
}
}, 0);

// Social system
}  else if (chapter === 'socialsystem') {
modalText.innerHTML = `
       <div style="position:relative;padding:0;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:600px;overflow:hidden;">
          <style>
            #modalText > div::-webkit-scrollbar
 	   {
               width: 10px;
               height: 10px;
               background: #fff;
            }
	    
            #modalText > div::-webkit-scrollbar-thumb {
               background: #fff;
               border-radius: 10px;
               border: 2px solid #222;
            }
	    
            #modalText > div::-webkit-scrollbar-track
	    {
               background: #222;
               border-radius: 10px;
            }
	    
            #modalText > div
	    {
               scrollbar-width: thin;
               scrollbar-color: #fff #222;
            }	    
            
            .nav-links
	    {
               position: sticky;
               top: 0;
               background: #fff;
               padding: 10px 0 0 0;
               border-bottom: 1px solid #ddd;
               margin-bottom: 20px;
               z-index: 1000;
               display: flex;
               flex-direction: column;
               align-items: left;
            }
	    
            #topics-toggle
	    {
               margin-bottom: 10px;
              font-family: 'Poppins', sans-serif;
              font-weight: 600;
              letter-spacing: 0.5px;
              padding: 10px 30px;
              font-size: 1.1em;
              background: #000;
              color: #fff;
              border: none;
              border-radius: 25px;
              cursor: pointer;
              transition: background 0.2s, color 0.2s;
            }
	    
            #topics-toggle:hover
	    {
               background: #222;
               color: #fff;
            }
	    
            #topics-links
	    {
               display: none;
               flex-direction: column;
               align-items: left;
               gap: 1px;
               margin-bottom: 10px;
            }
	    
            #topics-links a
	    {
               color: #000;
               text-decoration: none;
               font-size: 1em;
               margin: 0;
               padding: 6px 0;
               transition: color 0.2s;
            }
	    
            #topics-links a:hover
	    {
               color: #0066cc;
            }
	    
            .scroll-content
	    {
               max-height: 500px;
               overflow-y: auto;
               padding: 0 2em 1em 2em;
            }
	    
            .section
	    {
               margin-bottom: 30px;
            }            
            
            .back-to-top
	    {
               position: fixed;
               bottom: 20px;
               right: 20px;
               background: #000;
               color: #fff;
               padding: 10px;
               border-radius: 50%;
               cursor: pointer;
               display: none;
               z-index: 1000;
            }

	    .viddisp
	   {
              font-size: 18px;
              color: #000;
              font-weight: bold;
              text-align: center;
              margin-top: 20px;
              margin-bottom: 10px;
	      color: rgba(128,128,128,1);
           }
	    
	    h2
	    {
               font-family: 'Poppins', sans-serif;
               color: #000;
               text-align: center;
               margin-top: 20px;
               margin-bottom: 10px;
               color: rgba(128,128,128,1);
            }

            .section p 
	    {
               font-family: 'Roboto', sans-serif;
               color: rgba(128,128,128,1);
	       line-height: 1.6;
            }

	    ul
	    {
               font-family: 'Roboto', sans-serif;
               color: rgba(128,128,128,1);               
   	       line-height: 1.6;
            }

            span
	    {
              color: rgba(128,128,128,1);
	      font-weight: bold;
            }	    

         </style>

         <div class="nav-links">
            <button id="topics-toggle">Iskra social system - Show topics</button>
            <div id="topics-links">
              <a href="#intro">&nbsp;&nbsp; 01. Introduction to this chapter </a>
              <a href="#nations">&nbsp;&nbsp; 02. Kosmos and the human nations on Earth </a>
              <a href="#equality">&nbsp;&nbsp; 03. Natural equality to be a kosmonaut </a>
              <a href="#organization">&nbsp;&nbsp; 04. Social organization of kosmonauts </a>
              <a href="#tea">&nbsp;&nbsp; 05. Tea and Kosmos</a>
              <a href="#language">&nbsp;&nbsp; 06. Personality of the kosmonauts </a>
              <a href="#sports">&nbsp;&nbsp; 07. Sports and recreation in the kosmos </a>
              <a href="#education">&nbsp;&nbsp; 08. Education in the kosmos </a>
              <a href="#satellite">&nbsp;&nbsp; 09. Basis of satellite design </a>
              <a href="#mirkeen">&nbsp;&nbsp; 10. Mirkeen-01 city on the Moon</a>
              <a href="#aliens">&nbsp;&nbsp; 11. Meetings or sightings of aliens </a>
	      <a href="#city">&nbsp;&nbsp; 12. City redesign on Earth</a>
              <a href="#finalnotes">&nbsp;&nbsp; 13. Final notes on free market, money and profit</a>
            </div>

         </div>

         <div class="scroll-content">         
                  
         <div id="intro" class="section">
           <h2> 01. Introduction to this chapter</h2>

           <p> 
             We present the draft of a social system for all humans in the kosmos, including on Earth. This social system is simple, progressive, rational, gentle, 
	     collaborative, pan-humanist, harmonious and Nature-ordained. This draft social system seeks to remove all the artificial and needless unpleasantnesses, 
	     tragedies and anti-natural beliefs that humans do or endure presently on Earth.
           </p>

           <p>
	     The name of our social system is Iskra, a Russian word which means a spark which ignites positive change and one change at individual human level 
	     through our system will be that every kosmonaut will have an enlightened spirit including by selflessly sharing water, food, help, kosmik resources 
	     and knowledge with every other human in an equal manner without demanding taxes like money, college degrees, race, belief in certain divinities, 
	     Earthen passport and other human-made social positions.
           </p>

           <p>
             It will be at least nine years from now ( by 2033 ) when humans start living on the Moon and 
             then will start spreading to rest of the Solar System like a base on Mercury and then to the Asteroid Belt 
	     which sits in the space between Red One and Jupiter and then beyond to the edges of the Solar System and then to the stars.
	   </p>

           <p>
	     Our Iskra social system will guide humans from those starting years from 2033 to the far far future which is unknown now but what is known 
             is that a unified human utopia spread throughout the kosmos, with humans having become superior biologically, intellectually, 
             technologically and socially, will always mean that humans must live within the laws and ways of Nature, with the realization that Nature is supreme.
           </p>

           <p>
             This draft social system is substantial and we will further it by discussions in progressive forums like World Social Forum and 
             join it with others' drafts for this purpose. Some points below are "To be done".
           </p>

           </div>

           <div id="nations" class="section">
           <h2>02. Kosmos and the human nations on Earth</h2>
           
           <p>
             The Kosmos / Universe has existed forever, much before some modern human scientists and academics foolishly
             affixed an age to it on the basis of needless mathematics i.e. the Big Bang Theory and now
             there are two Big Bang theories. Kosmos has existed before human nations existed on Earth,
             before Earth itself existed.
	   </p>

           <p>
	     The concept of Earthen Nations / Nation States does not exist in Nature / Kosmos / Universe and comes on Earth
             from as recent as the French Revolution of the late 1700s which led to France becoming a Republic 
	     which was meant to become citizen-governed with natural human freedoms as against 
	     France previously being a typical kingdom governed by a supreme oppressive feudal lord.
             We must look at this further to understand the non-kosmos non-natural basis of human nations.
           </p>

           <p>
             The famous slogan "Liberty, Equality, Fraternity" which our organization uses, 
             it is used in other progressive thought streams. Newly independent India in the late 1940s presents 
	     a wonderful such example. The Indian Constitution's main archictect was the great liberator, BR Ambedkar, 
	     and he produced a wonderfully progressive system for India and this included "Liberty, Equality, Fraternity" 
	     being placed in the preamble ( introduction ) to this constitution.
           </p>

           <p>
	     This constitution was mainly drafted during the late 1940s and before adoption at country level its content was discussed within the early parliament 
	     building by both the progressives like Ambedkar, Hasrat Mohani and Brajeshwar Prasad and also by the anti-human type leaders who had been allowed into 
	     this gathering by the non-thinking among the Indian masses, mainly the middle class.
           </p>

           <p>
             The middle class called itself educated so the middle classees should have been the first to speak against the feudals, the profiteers, the usury peepz and 
	     the peddlers of superstition so prevalent in their society... the middle classees should have spoken for their own socio-economic emancipation 
	     ( the middle classees themselves lived in multi-generational poverty ) and they should have spoken for the emancipation of those poorer than themselves
	     and they should have spoken for erasing class structure... and all these speakings and erasings would have made every Indian citizen equal 
	     in some aspects of society.
           </p>

           <p>
             But sadly this middle class was largely content with being apathetic wage slaves and ritualists in a religious sense and thus they didn't ever bother 
	     to reject the feudalism, oppression, irrationalism and superstition in their society but they instead ardently participated in those including by 
	     just standing by in a crowd and staring in a zombie manner at a road mishap victim who was blooded and struggling to live and trembling and could have
	     been saved by being taken to safety in a vehicle but this staring crowd just watched the victim suffering so openly on that public road... and he died.
           </p>

           <p>
	     What leaders then would have these apathetic people selected ? Certainly not philosophers like Bhagat Singh, Ambedkar and Shaukat Usmani. 
           </p>

           <p>
	     So this early discussion in Delhi about the formation of the constitution had a mixed set of people : the progressives, the apathetics and the cruel.
	   </p>

           <p>
	     If the progressives like Ambedkar were to have prevailed they would have concluded the Parliament where they sat to discuss, 
	     this Parliament system itself is an illusion of democracy, as is the Party System including Multi-party System with its five-yearly elections and its resulting 
	     chaotic drama resulting in a needlessly complicated structure of pompously named bureucrats who are there for power, for wealth, for demagoguery, 
             for continuance of feudalism, capitalism, profiteering and priesthood and not for democracy, evolution and utopia for the masses.
           </p>

           <p>
             In rejecting the Parliament system the natural alternative which the discussers would have applied would have been Socialism with its true implemention 
	     including decentralized governance directly done by the masses ( aka Participatory Democracy aka Direct Democracy ) from neighborhood level to 
	     country level. When the masses directly govern themselves through people's congresses and people's committees there is simply no need of parties, 
	     traditional parliaments, elections and the complicated and pompous bureaucracy. A simple system, a simple life for all.
	   </p>

           <p>
	     Any person who wants welfare of the masses, wants a rational way to about things and wants gentleness, serenity and harmony for himself or herself, 
	     and for the rest of society and humanity, this person would have agreed to the above idea even if he or she was initially in favor of Party system and
	     Election system.
           </p>

           <p>
	     Please check the "Thanks" topic in the "Our company info" chapter from the homepage to watch a vid of Ambedkar saying some of the above 
	     in a video interview with a BBC reporter in 1953.
           </p>

	   <p>
	     Among the progressives who discussed in India's in-development constitution discussion gathering in the parliament building, 
	     there were Hasrat Mohani and Brajeshwar Prasad who wanted India to be a progressive, humanist, Socialist society.
	   </p>

	   <p>
             Hasrat proposed to name India as UISR - Union of Indian Socialistic Republics, which derived from the name USSR, the first modern Socialist society.
	   </p>

	   <p>
	     Brajeshwar proposed the word "Socialist" to be included into the preamble of the constitution to describe what the newly independent India 
	     must be. He also said that "Liberty" and "Equality" do not go together unless that society becomes a class-less society. 
	     He also said that India, and by extension other countries, should not use "Sovereign" to describe themselves 
	     because that word implies war and imperialism and these are of course against pan-human fraternity, the third idea word in "Liberty, Equality, Fraternity".
	   </p>

	   <p>  
	     Newly independent India was a place of great promise.
           </p>

           <p>
             But this slogan of "Liberty, Equality, Fraternity" was produced much earlier in the struggle of the French masses in the late 1700s 
             against the feudal dominance of the French kings and queens where the kings considered themselves
             appointed to eternal kinghood by God, by the God of Jesus Christ they claimed, but this is contradiction as Jesus / Isa was one of the 
             greatest rebels, liberators and social reformers of history whose idea of God was not the oppressor which these kings of France were.
	   </p>

	   <p>
             And these kings were supported by priests, and priests were also a class opposed by Jesus.
	   </p>

           <p>
             And the kings were also supported by merchants who did usury and profited in every form off the misery of fellow citizens. 
	     Such merchants also had been rebelled against by Jesus.
	   </p>

           <p>
             And these three types of mutually-back-scratching self-appointed socially superior people in royal France lived grandly by walking 
             on the backs of the ordinary French people. And these oppressed ordinary people were told to be grateful for being oppressed 
             for millenia.
           </p>

           <p>        
             The ordinary French citizen lived in multi-generational slum life in the cities
             and in multi-generational serfdom in the villages and these poor citizens were taxed
             all their life, for all their succeeding generations, despite their so visible poverty
             while the ruling royalty used those taxes to daily wine, dine and wear velvet and jewelry
             whose typical single necklace cost more money than the money collectively owned by a serf family 
             maybe in fifty generations.
           </p>

           <p>
	     The royalty and its associated lower feudals, profiteering merchants and the greedy priests lived in well-defended mansions 
	     surrounded by vast, clean gardens and slept on soft, luxurious beds while the ordinary citizens lived in dirty urban slums and 
	     rural hovels whose floors were of mud and they slept on grass beds with possibly logs to support the neck and there were rats and 
	     other pests running about these "houses".
           </p>
             
           <p>
             And there was the ever present danger of raids by bandits who often were fellow citizens driven by poverty to loot.
           </p>
           
           <p>
             The ordinary people also had to enlist in the wars the kings waged and all these wars brought were more land for the kings to exploit, 
	     more gold and jewels for the kings' treasury and more death, maiming and famine for the ordinary French. 
             During the war and after the war the king ate the most luxuriously prepared dinners and the ordinary French endured 
             famines with usually not even the basic bread.
           </p>

           <p>
             System-promoted language in Royal France and remainder of Medieval Europe also took on the class oppression 
             attitude of the system. The word "Villain" now is taken to be someone inherently bad, somebody evil, but the word's
             origin is a classist slur used by the rich against the "low-born" of the poor "villa" houses.
           </p>

           <p>
	     As is usual with priests, the French priests declared that to be poor automatically meant the person is bad and he or she was condemned by God 
	     to remain poor because of their inherent "badness" and that the French king was massively rich to easily afford multiple diamond necklaces because 
	     God ordained the king to be rich because the king was without blame. This promoted belief was ridiculously contradictory to the realizations and 
             teachings of Isa / Christ but his ideas had been hijacked by priests who did oppression in his name.
           </p>
            
           <p>
             So it became that these anti-Nature and anti-human social inequalities and oppressions in Royal France were discussed by the intellectuals and 
             the other passionate of France and they discussed the overturning of their inherited social situation.
	   </p>

           <p>	   
	     Also, some of the bandits were seen as heroes by the poor because the bandits were seen as the resistance against the the oppressive royalty system 
             and the bandits looted the rich including the priests. All these were sparks which lit the light for the French Revolution.
           </p>

           <p>
             One of the final sparks is said to be in the late 1700s when the frivolous and luxury-living queen, Marie Antoinette, 
             was told by her courtiers that the ordinary citizens were facing famine and that they didn't have the money and 
             the simple access to basic bread and the queen declared carelessly "Then let them eat brioches". Brioche is a French bread 
             which is more expensive than the ordinary bread because it has butter and eggs, which were items out of reach of the French masses 
             who did not have even the simple bread and were long suffering the famines created by the French feudalism and its needless wars.
	   </p>

           <p>
             The queen's uncaring remark of "Then let them eat brioches" was a rallying cry for the revolutionaries to finally remove 
             the millennia-old royalty of France... the monarchy... and replace it with the people's republic where ended the feudalism of 
             the king and his associated elements like the profiteering merchants and the priests.
	   </p>

           <p>
    	     The French revolutionaries gave humanity the clear and simple humanist slogan "Liberty, Equality, Fraternity". 
	     Monarchy was replaced with Anarchy i.e. A-narchy, the Nature-given freewill of humans to not be ruled by monarchy, feudals, oppressors.
           </p>

           <p>
             This revolutionary French stream continued to flow in the next century and in 1871 the French progressive pan-humanist 
             Eugene Pottier wrote the song "The Internationale" which called for all wretched and hungry humans of Earth to rise 
             and rebuild Earth with a clean slate where will be replaced the oppression of the heavy rule of the monarchs and the profiteers and 
             the fake promises of the priests of divine salvation of the peasants. All these to be cast aside by the peasants emancipating themselves and 
             establishing throughout Earth a society of equals, collective welfare and true productivity, and the human race 
             becoming one harmonious people on whom the sun of freedom will at last shine.
	   </p>

	   <p>
	     This song "The Internationale" later was adopted by various progressive pan-humanists across the world 
             and in the context of our company based in India, this song was first translated into 
             the Indian context by the poet Kazi Nazrul Islam in his native Bengali language, 
             including in context of encouraging the Indian freedom fighters to continue rebelling 
             against the then British colonial rule.
           </p>
           
           <p>
             But the humanist concept of Republic from revolutionary France became distorted 
             in the next two centuries and the pan-humanist evocative song "The Internationale" sadly was 
             made forgotten so now in 2025 the ideas of "Natural liberty, equality and fraternity among all humans"
             has largely and sadly been replaced with "Unnatural class divisions and border divisions among humans 
             who are divided into kingdom-like nations and the hatreds between nations enforced by needless, forever wars".
           </p>

           <p>
             The great Indian philosopher Rabindranath Tagore spoke against this hate-bringing divison of humanity into nations 
             in his 1917 essay "Nationalism in India". He says that from childhood he had been taught that the idolatry of Nation 
             is supreme than reverence for god and humanity but he outgrew that teaching and was 
             convinced that his countrypeople and humanity in general will get the evolved society of their dreams by rejecting 
             the education which teaches that a country is greater than the ideals of humanity.
           </p>

           <p>
             To extend Tagore's idea, there is difference between patriotism and nationalism. 
             Patriotism means inherent love and empathy for the oppressed, the innocent and the sensible of one's own society and 
             wanting one's society to become gentle, empathetic, just, rights-filled, having all reasonable freedoms and evolved 
             and having fraternity with all of humanity.
	   </p>

           <p>
	     However, Nationalism is the opposite, narrow and contradictory concept which ignores the oppressed, the innocent and 
	     the sensible in one's own society and in fact participates in maintaining hate based on class and community and 
	     contempt for the oppressed, the innocent and the sensible in one's own society but having a strange, irrational hate for unknown people 
	     outside one's borders who have done them no harm.
           </p>

           <p>
             Often, nationalism is most present among the middle class. The middle class person 
             often employed in feudal organizations as a monthly wager... a wage slave, on his daily trip to and from his office, 
             passes by the same homeless and hungry people on the footpath, but will never stop to take a blanket, 
             clothes and food to them, will never even give 20 dollars to them, never will fill with tears after hearing 
             that some of those homeless died of hunger that morning, will never have anger and disappointment and a "What ???" 
             when hearing that that homeless person lay hungry for three days, in full view of the busy road, 
             and another middle class person brought luxurious food for five dogs on that same road 20 feet away from the hungry person, 
             and then that hungry human died of hunger.
           </p>

           <p>
             But this same apathetic, monthly-wage middle class person is the first to scream war against a progressive society 
             5000 kilometers away where there are no homeless and hungry humans and no tax and no wage slaves because every human there is closer 
             to having all the natural freedoms due to humans not depending for survival on measly wage from rich exploitative feudals who rather wish
             that they did not have to give even that measly wage called demonically as "Cost To Company - CTC" where the worker is two things : just a statistic on 
             the company accountant's spread sheet and second a name in the manager's memory who will extract every work from the workers in a manner 
	     similar to squeezing the last drop of oil out of an oil seed.
           </p>

           <p>
	     And in that other faraway progressive society who our middle classee wishes to cause genocide, the citizens there don't have to struggle to take 
	     ungiving permissions of family elders just to love a person of the opposite gender or to invent, write, paint and observe the kosmos and won't be told 
	     by parents to either enslave themselves to earn money to be called of worth or go die silently somewhere far.
           </p>

           <p>	   
             But our unthinking middle class person will call that humanist society a "rogue nation" which must be changed even by genocide so that 
	     "Democracy" can be brought there and Free Market can be brought there and the anti-worker teachings of B-schools can be brought there, LOL. 
	     But our typical middle classee is not thoughtful, educated and awake to know all this realization.
           </p>

           <p>
             Rabindranath Tagore further says in that 1917 essay that societies try to unite their citizens into one idea 
             but he says that unless their internal oppressive contradictions and oppressive social customs are addressed and resolved, 
             the societies will not unite and humanity in general will not unite. Tagore spoke of this in 1917 yet now in 2025, 
             more than a century after his essay, most societies on Earth continue go counter to Tagore's 
             appeal to reason and to pan-human liberty, equality and fraternity.
           </p>

           <p>
             However, as per natural laws no human from one modern nation is automatically superior in the 
             grandness of Kosmos than a human from another modern nation. A socially-advantaged 
             human from one modern "superpower wealthy nation" will be burned up in the Sun as easily as a 
             money-poor human from another modern "superpower wealthy nation"... to believe otherwise is 
             pointless arrogance.
           </p>

           <p>	   
	     Some thoughtful kosmos travellers who have gone to Earth orbit have spoken of seeing the Earth 
	     as a singular delicate blue world in the dark of the kosmik void, with no natural boundaries dividing Earthen nations, 
	     though to us adding here : with the exception of Australia and other island nations bounded by the seas but that is besides the point.
           </p>

           <p>
	     It is then unwise to be fanatic nationalists in the kosmos when just the Sun can fit in itself a million Earths and the Sun being 
             just a medium-sized star, and in reality the Sun instantly burning up those million Earths and 
             all the nations within them and with them all of the eight billion people of Earth. 
             A human is a tiny humble speck in the infinite kosmos.
           </p>

           <p>
             Secondly, the human technological advancements of now and the social advancements 
             have come from developments from people of various parts and cultures of Earth, whether 
             those people acting individually or by group efforts and these people taking inspiration from 
             elsewhere or even being helped by others.
           </p>

           <p>
	     Even the French Revolution previously mentioned did not derive all its ideas in isolation but derived some from philosophers from previous 
             centuries and millenia from everywhere. For example, the Greeks of 2500 years ago thought up 
	     the semi-democratic idea of Demokratia where many non-slave male citizens directly participated in 
	     the governance of their cities rather than kings and lower feudals doing it. And these Greeks themselves 
	     took some of their science ideas from Egypt.
           </p>

           <p>
             Also, humans have mixed throughout history and this point becomes apparent
             when we speak of those Demokratia Greeks sharing their era with another great liberator, Buddha, in South 
             Asia / India, and Buddha's ideas being preached later. The South Asian / Indian great emperor Ashoka
             lived more than two centuries after Buddha. He was great not because he was an emperor
             but because he used his position to advance the teachings of Buddha throughout South Asia / India and beyond.
           </p>

           <p>	   
             Ashoka's ancestry may have had cross-cultural connections because his grandfather the king Chandragupta Maurya
             married a girl from Iran called Helena whose father was the Greek empire's Greek governor of West Asia,
             Seleukus Nikator. Helena's mother was Irani. Helena was aged 15-17 and Chandragupta was 40 and 
             it is said that both liked each other at first sight even though theirs was a political marriage 
             proposed by Helena's father. It is possible that Helena's son by Chandragupta was 
             Bindusara whose son was Ashoka so Ashoka may have had Greek and Irani genes in addition to South Asian genetics.
           </p>

           <p>
             To bring back the concept of trans-border progressive social influences, in India
             of the late 1700s, in the era of the French Revolution, the kingdom of Mysore in the region
             of Deccan India was administered by Tipu Sultan who was an internationalist inspired by the French Revolution and 
             corresponded with the leader of revolutionary France, Napoleon Bonaparte. Tipu is said to have 
             established a Jacobin Club in his stronghold city of Srirangapatna, for the benefit of Indians 
             to discuss social enlightenment and replicate the ideas of revolutionary France including 
             in fighting against the British colonial rule.
           </p>

           <p>
             And relevant to our organization being in the kosmos industry and the above sections speaking of trans-border progressive influences, 
             modern rocketry derives its advancement to Tipu Sultan's work in rocketry, though his security situation forced him to look at this science 
             only for military purposes despite him being a thoughtful person and an internationalist. And before him the Mongols advanced rocketry 
             and the origin of rocket science goes back to the ancient Chinese.
           </p>

           <p>
             About technology influences again, today we all humans use electrical machines every second and it was a Britisher
             by name Michael Faraday living in the 1800s who enabled our modern use of electrical machines by devising the mechanisms and 
             understandings of electro-magnetism and electro-chemistry.
	   </p>

	   <p>
	     Going about 2000 years earlier than Faraday, the Greeks used an entirely mechanical machine to determine astronomical positions and 
	     events like eclipses years in advance. This machine is now called Antikythera Mechanism because the only surviving sample of this machine was found 
	     under the waters off the Greek island of Antikythera in 1901.  This mechanical machine is considered the earliest analog computer and 
	     used the lunar calendar from Ancient Egypt possibly dating back hundreds of years previous to the devising of this machine.
       </p>         

       <p>
         Jumping back to the modern age, in India between the 1850s and 1930s lived the general researcher Jagadish Chandra Bose... 
	 a man interested in many sciences including humane social conduct. He was the first to investigate microwave radio-frequency and made great discoveries
         in botany and among his researches living now is our modern telecom including the everywhere-present
         cell phone. He treated other humans in an equal manner, whether they be of "lower caste" or of other religions, and he was against the patent system
         so in today's terms he can be called part of the earlier Open Source Knowledge movement
         that benefits all of Earth.
       </p>

       <p>
         So it will be irrational, immoral and ungrateful for a group from Earth to claim national or 
         cultural exclusive superiority on Earth and act in an nationalist way while not acknowledging 
	 the shared history of humanity and not acknowledging their benefiting from 
         social philosophies and technologies that may have had origins elsewhere on Earth.
       </p>

       <p>
         It is then natural, rational, automatic and moral to expect that the kosmos be a place of a united humanity 
	 instead of carrying the needless artificial hates and divides on Earth.
       </p>

       <p>
	 This also leads to the point of mining in the kosmos. The timelessly existent and borderless kosmos and kosmik objects 
	 should not be divided up by humans by way of selective ownerships by Earthen national governments and private corporations and 
	 and these entities should not introduce militarization to defend those selective ownerships against other humans. We should not allow the tragedies 
         on Earth based on nationalism and profiteering to be carried over into the kosmos. The kosmos should be the peaceful exploration medium, 
	 mining place and settlement place of a collective humanity under a truly democratic framework. 
	 National boundaries are artificial but human fraternity is natural.
       </p>

            <p>
	     Such is also the agreement undertaken at UNOOSA ( United Nations Office for Outer Space Affairs ) which is a department of the UN. 
	     Though the UN has failed to prevent invasions, needless conflicts, genocides and subversions since its inception in 1945 and 
	     has served only as a decoration, very much not uniting nations despite its name, its UNOOSA department at least makes sense.
           </p>

           </div>

           <div id="equality" class="section">
           <h2> 03. Natural equality to be a kosmonaut </h2>

           <p>
             The current human-transport kosmos industry / space industry is feudal where aspiring kosmonauts 
             have to fit the below irrational categories to qualify for travel to the kosmos :
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (a). </span> 
               There are very few humans-to-the-kosmos programs because the design complicatedness and 
               the expensiveness of the prevalent Tall Rockets and in-design Space-planes makes these crafts manufactured by 
               only a very few government organizations or private organizations who are okay with complicatedness and 
               have lots of money. These organizations have created an anti-democratic monopoly. Add to this the blatant ignoring 
	       of the non-safety of the Tall Rockets... essentially huge vertical bombs. These government and private organizations know 
	       the explosiveness of their Tall Rockets hence they launch them from isolated places but the few travellers on these Tall Rockets 
	       know the danger yet they go, instead of demanding safer alternatives.
            </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (b). </span>
               And from those who decide to board the Tall Rockets, either aspiring kosmonauts have to be very rich to pay 
	       for a single ticket - at least 50 million dollars now.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (c). </span>
               Or if an aspiring kosmonaut doesn't have the huge money he or she must be associated with governments... 
	       the governments either being those whose country has the very few human-launching kosmos crafts or the governments being allied with the first type 
               of governments. These types of kosmonauts are mostly military pilots but sometimes professional scientists, teachers etc.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (d). </span>
               Or the aspiring kosmonaut must win seat lottery in some private lottery-based kosmos-trip arrangement program connected with those governments or
	       private humans-to-the-kosmos agencies which have the launch hardware. But this lottery will be won by only one person per year in the entire world.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (e). </span>
               The aspiring kosmonauts have to generally have college degrees if they are not rich. This is irrational and against Nature.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (f). </span>
               People who want to work in the kosmos industry also must have college degrees. This too is irrational and against Nature.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (g). </span>
               If an aspiring kosmonaut is a woman then she is excluded if she doesn't meet with the irrational low body-weight, "she should be fit" 
	       requirement for woman kosmonauts. Women naturally tend towards being chubby, voluptuous and they look better that way 
	       but there is a background and also overt system especially in the West to exclude such women from the kosmos industry as well as make them 
	       non-persons via language, cinema and mainstream media. This excluding is due to the West having influential position for male homosexuals 
	       ( including among priests ), the "fitness and wellness" profiteering industry and misogyny among women who all have their own interests in 
	       keeping women thin or muscular.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (h). </span> 
               The very workers who build these current human launch systems are excluded from going to the kosmos on the launch systems they built 
	       with their sweat, sleepless nights and risk of serious injury or death. The max they are allowed to do is clap in the control rooms 
	       whose screens show the launches of those kosmos systems taking to the kosmos the rich and the other privileged. This is like the building construction
	       workers who build mansions for the rich but are not allowed to live in them and will be sent away from the gate if they desire to visit the mansion later. 
	       A ridiculous situation.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (i). </span> 
             The to-kosmos launch organizations may demand that the candidate kosmonaut be of at least "Adult age 18". This is an irrational demand. Age 18 is 
	     portrayed by every feudal society as a magical age turning a human from a "non-sensible teenager" into a "sensible adult" whereupon this new adult 
	     can be trusted to think good of the nation by voting in elections and can be trusted to think good of the world and can be trusted to drive vehicles 
	     without causing a single mishap, rule breaking or crime.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     And this irrational age demand of above 18 also has the situation that until a person becomes 18 age he or she must have "guardians" in form of 
	     "family elders", essentially older persons in the family who are income-bringing and supposedly wise enough to guide the younger person's life 
	     to perfection.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 	     
	     And the turning of the younger person to 18 age will supposedly bring that person maturity, sense of freedom, freedom and purpose to life but this is a lie.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Most age-18 people and age-40 people will never be free from the diktats, feudalism and daily cruelty of their family elders and the village elders. 
	     They will never have the right to choose the opposite gender person they like, the right to pursue the occupations they like, the right to help other humans, 
	     the right to take as much reasonable amount of food they like, the right to take food to their hungry neighbors, the right to give 20 dollars to a blind person
	     begging on their road, the right to say that they don't want to engage in their family's multi-generation life-long wage slavery under feudals, 
	     the right to not have their intestines removed by a gang of dogs on the chaos-filled road outside their house gate or the intestines removed in a mindless
	     socio-economic quarrel, the right not to die of mindless overwork just to earn ten just-surviving dollars, and the right to instead want their society and 
	     humanity to evolve from dog-eat-dog situation to utopia.
	   </p>

      <p style="margin-left:1em; margin-bottom:10px";> 
	     The "age 18 is adulthood" theme is largely found in feudal societies 
	     with toppings of democracy. In these societies especially women if they are below age 18, say "17 years, 11 months, 29 days, 23 hours, 59 seconds",
	     they are denied their nature-given freedom in every reasonable thing including their natural right to be with a man by choice or to even 
	     step out of their neighborhood... but even when they cross "adult age 18" and are say 30-years-old their family will still deny them their 
	     nature-given rights and freedoms, and in some societies the "adult" woman will be murdered by her own family, sometimes with the assistance of 
	     many of her village people with whom she may have spokenly nicely before. 
	     Example of such barbarism [ https://www.bbc.com/news/world-south-asia-13294863 ].
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
	     Such societies also participate in the yearly genocide of youth who suicide because of the exam system in the so-called Education System. 
	     So many youths are internally tortured every second because they are forced to write exams and be in schooling courses where they do not wish to and 
	     they have great talents in other things and they do not wish to enslave themselves in life-long wage slavery like their parents did and they just want to 
	     enjoy life. However, their idiotic and money-worshiping parents force them to suicide. The suiciding students will be below "adult age 18" and above, 
	     and they suicide nonetheless, with no freedom from these impositions by becoming "age 18 adult".
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
	      However, if below-age-18 citizens engage from morning to night in religious ritualism, in competing against friends in school exams, 
	      in not caring for other humans, in being thugs going about in mobs, in taking advise from astrologers on how to get 100 marks out of 100 in exams, 
	      in doing stunts on scooters on busy roads, in feeding dogs in their neighborhood where the dogs then create noise, chaos, spread disgustingness and 
	      tear apart humans and cats right on the roads where they the dogs are fed... and so on with other stupid stuff... these below-age-18 citizens will be 
	      adored, will be the apple of their parents' eyes.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     But in reasonable things, most age-18-and-above citizens in the so-called Democracies of now don't have true rights within their families, 
	     let alone in wider society, so this "Adult age 18" thing is unnatural and nonsense.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";>  
	     However, Nature has no such hard "adult age" separation where a person aged "17 years, 11 months, 29 days, 23 hours, 59 seconds" is immature, 
	     does not have a sense of freedom, can be easily misled and cannot be trusted to know good of himself or herself, of their neighborhood, nation and 
	     humanity, but when the clock moves forward just one second and the person turns 18, suddenly this person supposedly experiences an explosion 
	     of genius and finally attains a sense of freedom, cannot be misled and can be trusted to know good of himself or herself, of the neighborhood, nation and 
	     humanity and therefore becomes called "Adult" and will supposedly be given all freedoms by society. All nonsense.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     A 60-year-old person who has been "adult" for 43 years can be very easily immature, can be easily misled, can be violent, cruel, apathetic, competitive, 
	     create chaos, cause genocide, be a voluntary slave until death and look disgusting. If every 80-year-old was automatically a genius just because he or she 
	     was 80 of age, the world would not have seen feudalism, wars, oppressions, superstitions, competition, crimes, suicides, cruelty, apathy, 
	     Climate Change and disharmony. All of Earth would have been utopia 300,000 years ago when Homo Sapiens supposedly began.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     This "Adult age 18" concept is an unnatural, nonsense invention by the feudals ruling Western countries... the age 18 chosen randomly to define 
	     "Voting age" to give the masses of these societies a celebratory moment within the multi-generation illusion that they live in democracy because 
	     they can vote in elections, own personal cars and purchase houses but in truth their ideas and voices don't matter to the parties they have 
	     voted to power and they continue to live in wage slavery and other slavery that their previous ten generations at least had lived in their feudal setup and 
	     their house can become owned by some bank and they thrown out from where they lived for 30 years.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     It's not like an 18-age voter and his 60-age voter father in London can together drive their personal car to the gate of the mansion of 
	     the politician they voted for, who is also a feudal running a needless software services empire, and this son and father will be welcomed in 
	     the feudal-politician's mansion with tea and biscuits just because the 18-age son has newly become a voter, and they will be allowed 
	     to sit in the feudal-politician's garden and describe their good ideas for their society and humanity and they will be listened by 
	     this election-winning feudal-politician and he will arrange for them to become made advisors to the nation by sitting in the House of Commons and 
	     this feudal-politician will get them made advisors in the United Nations General Assembly. This of course won't happen despite 
	     the "Magical adult age 18" of the son and father.
	   </p>  

           <p style="margin-left:1em; margin-bottom:10px";>
            Therefore this "Magic adult age 18" is a nonsense idea.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     Another example for us to adopt naturality regarding age is of the Mughal emperor of India, Akbar. Five hundred years ago the Mughal prince 
	     Jalaaluddeen Muhammad, who later became called Akbar ( "The Great One" ), became emperor of India at age 13 and he became a good administrator 
	     in time because he was a sensible person inherently despite being from a feudal family, very unlike most other feudals in history. He did progressive things
	     at younger ages that most other feudals never had the idea of doing at their 80 of age.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     For example at age 20 he married a Hindu Rajput princess now popularly called Jodha Bai. And Jodha Bai after becoming Akbar's wife, 
	     was renamed as "Mariyam uz Zamaani" which meant "Mary of Our Times"... Mary / Mariyam being the mother of Isa / Jesus. 
	     Akbar, through this marriage alliance, brought some harmony to the constant wars situation within then India by creating family bond between 
	     the Muslim-dominated empire of Akbar and the Hindu Rajput kingdoms dominating much of the north of India. And also through the name 
	     "Mariyam uz Zamaani" a nod to the non-tribalist teachings of Isa / Jesus to bridge India more culturally to the rest of the known world. 
	     How many feudals in the world who were 80 of age could think of such an alliance ?
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     Another of Akbar's brilliances was his creation of a new constitution for his Indian empire. This constitution is now called 
	     "Deen e Elaahi" and then was called "Tauheed e Elaahi"... meaning "The One-ness of God" or perhaps "The One-ness of the Divine". This system 
	     was a syncretic system which brought together the beliefs of Islam, Hinduism, Christianity, Zoroastrianism and others.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     This new syncretic system called "Tauheed e Elaahi" was presented as the state system for his empire to bring together as humans all his subjects 
	     who were of various religions. The theology of this syncretic system was amplified by him gathering in his library the texts from various parts of the world 
	     and in various languages... from Kashmiri in the north of India to Greek from Greece thousands of kilometers away in Europa.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The Wikipedia page for this syncretic system [ en.wikipedia.org/wiki/Din-i_Ilahi ] has this sentence : "In a letter to King Philip II of Spain, 
	     Akbar laments that so many people do not investigate their religious arguments, stating that most people will instead blindly "follow the religion 
	     in which [ they ] were born and educated, thus excluding [ themselves ] from the possibility of ascertaining the truth, which is the noblest aim 
	     of the human intellect."".
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Though this syncretic system died with the death of Akbar, he created this syncretic system as his country's constitution and 
	     his contribution to humanity in general, at the age of 40 in year 1582 what many other feudals in history... indeed most humans in history... 
	     could not do at age 80.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     And like we wrote in the second topic in this chapter, 1800 years before Akbar was the Indian king Chandragupta Maurya who at age 40 married 
	     the 15-year-old Greek-Irani girl Helena. Chandragupta didn't consider Helena as immature and incapable including in being his queen of 
	     an important kingdom on Earth. He married her, and her progeny with Chandragupta was the great Buddhist king Ashoka. It is not as if the greatness 
	     of Ashoka came about because he was the progeny of a grandmother who had married at the modern "Magic adult age 18" or 38.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             Ageism is nonsense, whether a person is not given his or her human rights because of younger age or older age.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     So about age, in the context of this being about removal of feudalism from kosmos travel, it is not as if Kosmos / Nature will throw back to Earth 
	     any human who is below "Magic adult age 18" and has reached Low Earth Orbit to try to reach the Moon. Nature does not have this irrational 
	     age discrimination and age feudalism. The kosmos will easily kill any 80-age kosmonaut who has gone close to the Sun as easily as a 15-age kosmonaut.
	   </p>

           <p>
             Thus presently most humans are excluded from going to the kosmos even if they are intelligent, gentle, physically able and respect Nature... 
             even if experiencing the kosmos must be the easy right of every human.
	   </p>

           <p> 
	     But it is not Nature denying most people access to the kosmos... it is anti-democratic systems among humans doing so. The kosmos does not 
	     create celestial messaging where the kosmos displays an "Only allow them" list in Earth's night sky every night... 
	     the alphabets in the list formed by formations of stars... where the list shows names of  only the moneyed and the other unfairly privileged 
	     who can experience the kosmos. In truth the kosmos knows neither money nor rank nor college degree nor age nor any other such nonsense.
	   </p>

           <p>
	     And for those very very few people on Earth who are able to become kosmonauts, they go by sitting in very unsafe and unreliable systems 
	     which can explode any time and kill them and many other humans around. All this is just needless.
           </p>

           <p>
             And the upcoming commercial space industry / kosmos industry promoted by certain groups on Earth pushes feudalism and commerce to the kosmos, 
	     for example the strange art of some MBA affixing pointless commercial projection slogans like "The trillion dollar space economy". 
	     A few things to comment on this :
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (a). </span> 
             How do these projection-making MBAs know how much money can be made even from two big rocks in the Asteroid Belt which is 
             hundreds of millions of kilometers away from Earth, let alone knowing money wealth from the kosmos ?
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (b). </span> 
             Part of that trillion of the wannabe space billionaires will come from charging huge tax ransoms 
             to take people to the kosmos and keep them alive in the kosmos and provide them with communication and food and healthcare and rescue 
             and collaboration and other things... things that should be available to every human without he or she 
             being taxed.
	   </p>  

           <p style="margin-left:1em; margin-bottom:10px";> 
	     How can there be tax on oxygen, water and food in Nature's kosmos ? Surely these billionaires 
             are not Nature to have produced them and surely when these billionaires on Earth see rain falling from the sky and it feeding the rivers
             and the seas and seeding plants and feeding the birds and the other animals, the billionaires don't find Nature's message in the sky 
             demanding that they pay Nature a big tax and only then it will send rain to their gardens and to the farms 
             from where they get their luxury food. Does the Sun send its life-giving light and heat to them by demanding tax ? If the space billionaires 
             don't get taxed by Nature how can they tax us ?
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (c). </span> 
             About taxing telecommunication in the kosmos, imagine a scene where you and your friend are talking across a table 
             and someone comes and demands that both of you pay him tax so that you can speak to each other else you cannot. 
	         This demand cannot be called anything but ransom. The wannabe space billionaires want to impose this ransom on you 
	         by taxing you for use of light and radio-frequency to communicate in the kosmos and these two things are productions of Nature 
	         which our billionaires will not tax themselves to use or give tax to Nature so why should they expect that other humans 
	         must be taxed for communication ?
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (d). </span> 
             As for taxing the machines for telecom in the kosmos, if every society makes its own telecom machines which are common in design and 
             can be made for cheap and are provided to every citizen for cheap then we don't need the monopoly of the wannabe space billionaires.
           </p>            

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (e). </span> 
             About taxing healthcare in the kosmos, surely when the billionaires demand tax from you to make them save your life 
             or treat your injuries a million kilometers from Earth, even as you lie there helpless and in pain, 
             and if you don't give them that tax they will let you die or allow your wounds to become septic and you lose your leg, 
             can their taxing be called anything but murder ?
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (f). </span> 
             Similarly other taxed things in the kosmos.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (g). </span> 
             And when these wannabe space billionaires and trillionaires and pentalillionaires make their wealth off you, 
             will they ever respect you as a person and invite you for tea and dinner at their mansions on the Moon because 
             their vast money and material wealth had a bit of your contribution ? Or will they have you thrown on the Moon soil 
             outside their Moon mansion if you should approach 100 feet from the gate ?
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (h). </span> 
             These wannabe space billionaires and trillionaires maintain an unfair system where does not have cheap 
             or tax-free kosmos travel and kosmos living just so that these huge monies continue into the non-Nature-origin electronic signals 
             in the data stores of their banks. A cycle of unfairness but which must not be allowed to take root now in the 
             beginning years of the kosmos exploration industry.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span> (i). </span> 
             Tax is not from Nature. Does a tree demand tax from a bird which wants to eat that tree's fruits ? Does the sky demand tax from a garden 
	     so that the sky can send rain to the garden ? Do the words of a book demand tax from a reader so that the words become imprinted into the mind 
	     of the reader and provide him or her with knowledge, enjoyment and imagination ?
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             Therefore in context of the kosmos industry, the kosmos too doesn't demand tax from a prospective kosmonaut... neither in form of huge money 
	     for a ticket to the Moon or in form of other demands like compulsory college degrees, "adult age 18", belief in certain divinities, 
	     the billionaires' idea of "physical fitness" for women to become kosmonauts, or for kosmonauts to belong to only certain Earthen countries 
	     who their governments like, and so on. The kosmos belongs to all humans as long as they respect Nature and Nature's laws and are not cruel, 
	     apathetic, competitive and exploitative with others.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             The concept of tax is a feudalist idea which existed during the times of kings and colonizers ( like the British colonials in India ) who had officials called 
	     Collectors to collect tax even from  a peasant who earned 100 dollars per year after hard labor in the open, while the feudal earned 100,000 dollars 
	     every month just sitting comfy in his mansion, and only misery was the sole free thing in the life of the peasant while the feudal earned his 100,000 dollars
	     every month by profiting off the misery of the peasant including by doing usury to the peasant who in turn burdened every month by usury and 
	     by the artificial unobtainability of the necessities of life, much less desire for the finer things of life, hanged himself or herself from a tree in the village or 
	     jumped into the village lake.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     Isa spoke against this 2025 years ago, so now in 2025 AD any person who claims to believe in Democracy should not demand tax and those who do 
	     must reflect. Let us not take tax and other forms of feudalism to the kosmos and bring disharmony there. Can the tax-loving person convince the 
	     mighty Sun to allow tax system in the Solar System ?
           </p>

           <p>
             For us, Kosmos Society, the simple answer is to enable a cheaper, simpler and safer kosmos industry which also propagates true progressive pan-human 
             liberty, equality and fraternity, and we will do this by designing kosmos machinery which are simplified, reliable, aesthetic and universal in usage 
             and can be built for cheap, operated for cheap and repaired for cheap. And these systems will be built and deployed by Earthen governments to benefit 
             their citizens and all citizens of humanity, on Earth and in the kosmos, and these governments should not collect tax for :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(a).</span> Providing and repairing the personal systems like our Dune Buk wearable computer.
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(b).</span> Transporting people in our designed kosmos ships and our on-world personal transport vehicles, the Moggys.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(c).</span> Selflessly providing food, communication, health support and rescue in the kosmos.
           </p> 

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(d).</span> Transporting any habitation equipment in the kosmos not makeable via ISRU ( In-situ Resource Utilization ).
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(e).</span> Transporting research equipment and conducting research.
           </p> 

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(f).</span> Transporting any large reasonable leisure equipment.
           </p> 

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(g).</span> Transporting mining equipment and mined produce in the kosmos.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(h).</span> Providing habitation in the kosmos.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(i).</span> Providing education in the kosmos. Please read of this topic more in the below topic of that name.
           </p>

	   <p>
	     Many of you will ask, how will the governments earn money if they send their citizens to the kosmos by not placing tax on their citizens. 
	     This question is addressed in the next topic in the second last point there.
	   </p>

          </div>

           <div id="organization" class="section">
           <h2> 04. Social organization of kosmonauts</h2>

           <p>
             The primary reasons for the exploration in the kosmos include :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(a).</span> Experiencing the kosmos. </p>
           <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> Finding new resources. </p>
           <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> Science which includes looking 
           for life and finding new homes for humans.</p> 
           
           <p>
             All this of course will require the effort of work groups, including for escorting tourists, 
             and this must be done it in a thoughtful, gentle and kind way where all work participants are 
             equal in respect, effort and benefit, with no feudal boss lording over them and unjustly grabbing most 
             of the benefits of the work that had the effort of all. The purpose of the group must also be 
             achieved harmoniously. The kosmos is for all to benefit from, including just the simple act of 
             seeing the sights, and to acknowledge that every human is a speck in the kosmos, one no 
             more privileged than another in that infinite and timeless vastness. Feudalism is bad enough 
             on Earth to be carried over into the kosmos.
           </p>

           <p>
	     And when thinking of how "work" should be without feudalism, we realize that the worker is a human with rights as an individual 
	     who must be given time and ease in doing any reasonable thing he or she wishes during the day, and also that a human is a social animal 
	     who makes up the components of society. Therefore not only a human has individual rights but also has a duty towards society and wider humanity.
           </p>

           <p>
	     When a human lives in a liberating system where every reasonable material need, every reasonable occasional indulgence and every intellectual thing, 
	     comes to a human without the compulsion to earn money to just survive day to day and month to month and still never be able to achieve 
	     his or her reasonable wishes and reasonable material needs, this liberating system will take that human towards his or her potential and 
	     play great part in taking his or her society and wider humanity towards utopia. This can simply be called part of Socialism.
           </p>

           <p>
	     When discussing such liberated life for a kosmonaut including for his or her "work" we realize that a kosmonaut's day hours can be broadly divided 
	     as below. Here "day" doesn't mean only the sunlight hours but the entire duration of a "day" on a specific world 
	     ( like 24 hours on Earth ) or a locally decided day in the open kosmos ( can be 13 hours ) :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(a).</span> Good sleep of about six to seven hours as per location situation. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> Food and getting ready for work. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> Work in a work group as per need or as decided by a roster. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(d).</span> Food. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(e).</span> Maybe a sleep of two hours in the middle of working hours. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(f).</span> Resumption of work until end of work day. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(g).</span> Having tea in between whenever needed. </p>
	   
           <p style="margin-left:1em; margin-bottom:10px";><span>(h).</span> End of work day. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(i).</span> Tea, Me Time ( like shopping ), discussion, ideation and experimenting time. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(j).</span> Dinner including by own cooking. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(k).</span> Internet / music listening time, Me Time. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(l).</span> Sleep. </p>

           <p>
             Now to the topic of work groups. The organization of work groups in the kosmos should be democratic and that is easily done by 
             organizing them as Workers Cooperatives. The idea of Workers Cooperative has association 
             with the older ideas of liberty, equality and fraternity, and enables true democracy where every human present 
	     in the organzation participates in the continuance of that organization equally and benefits from it equal 
    	     to other members and has the same human rights as the others.
           </p>          

           <p>
             A Workers Cooperative has nineteen general outcomes for the kosmos and in general for anywhere among human presence :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(a).</span> It is all the workers who directly own and manage an organization and equally divide 
             amongst themselves any money income and other material benefits.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(b).</span> There is no exploitative feudal boss and no subordinate... all the workers are equal co-workers in 
             respect, right to participate in the organization's decisions, voluntary idea giving and 
             cross-team idea giving. Any worker can call a discussion circle for a complaint, issue raising 
             or idea suggestion, and the other workers must listen and participate.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(c).</span> All involved in the organization are "co-workers" and "co-owners" and not "workers" or "employees". 
	     Consequently there will be the required atmosphere of collaboration within the organization and not competition.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(d).</span> There will be a natural tendency in a Workers Cooperative to not have a boss cabin.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(e).</span> Every worker is given respect and rights as a human individual who is not subordinate to his or her family. 
	     The Family system is a feudal system which creates islands of selfishness and apathy, islands of micro feudalism, promotes competition and 
	     promotes multi-generation slavery. Human society will never achieve utopia until Family system exists.
	   </p>  

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The system of Family wasn't present in early humanity because then humans lived in natural, communal bliss. 
	     All the members of a settlement collectively owning and managing public-use things like farms, water sources, means of production and housing. 
	     The young ones were raised as common responsibility by all the members. A younger member was put into social responsibility and 
	     given full reasonable freedom when naturally becoming sensible ( not some supposedly magical voting-age 18 ).
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     There was no tax of any sort including money and no one person controlling things useful to everyone ( a feudal / landlord / king ) and 
	     there was no person instilling superstitious fear into the others so that he can control them this way ( by becoming priest ). No king wanting more power
	     for power's sake by reorganizing the rest of the community into warriors and making them die or get injured for him by fighting
	     needlessly with other humans. Early humans lived in blissful Socialist arrangement... happy, innocent, empathetic, natural, without cunning.
	   </p>  

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Then someone started landlordism, priesthood, family, kingship, tax, money, treasury, war and social structure only became bad. 
	     We have addressed most of those things previously.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 	     
	     But in a Workers Cooperative all these wrong things will be made obsolete and the worker will be given respect and respects as a human individual 
	     who is not subordinate to his or her family.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(f).</span> In a Workers Cooperative the worker loyalty towards the organization is high because the worker is given due respect 
             as an individual human with feelings, personality, concerns and potential.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(g).</span> Every worker has to be accepting of internal critique but will have the right to defend themselves. 
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(h).</span> Efficiency and production variety of the organization is greatly increased because of the 
             diversity of useful ideas, skills and experiences from the various volunteering workers.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(i).</span> The collective human society composed of Workers Cooperatives, whether on Earth or 
             in the kosmos, becomes an actually developed, gentle, evolved, harmonious and prosperous society. 
	     As smile-bringing as the city of Istanbul with cats everywhere.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(j).</span> The existence of a Workers Cooperative doesn't depend on if the economic system 
             works with money system or money has been rightly abolished. The Workers Cooperative concept is efficient in both situations. 
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(k).</span> The need for a workers union now becomes not necessary because the 
             company is no longer divided into bosses and workers where the workers have to form a collective and 
	     agitate for their rights. With the Workers Cooperative concept all the workers equally own the company 
             and there no longer are the bosses of the past. If any worker i.e. co-owner of the company has issues, 
             he or she can directly call a discussion circle.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(l).</span> The progressive, gentle, empathy-based and observant thinking enabled by 
             the Workers Cooperative will make company leaders and other workers accept workers who don't have college degrees 
             and other forms of needless and irrational class discriminations and taxes.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(m).</span> This system leads to thinking about decentralization / self-governance, gentleness, collectivism, a non-corporate environment, 
	     a non-militarist environment and a pan-human outlook. This also means in the kosmos context, no hierarchy and no traditional 
             aerospace titles like "Captain" and "Commander". The environment in the group will be relaxing and 
             focused towards the purpose of the group's setting-up and for pan-humanism and not for hierarchy-induced disharmony and "making a career". 
             This also means no separate "high class" living arrangement for some boss and no lower 
             "economy class" arrangements for others. All people will be given equally comfortable living 
             arrangements.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(n).</span> So, all work participants on one kosmos ship or an independent group on one planetary 
             research station or an independent group on one mining station etc are collectively called a 
             Workers Cooperative. Work will be distributed as per skill, interest, requirement and in rotation. 
             The first two things are not written in stone that they can't be acquired as time progresses. The tasks 
             will be rotated to prevent a worker from being slotted into a relatively unpleasant task for a long time, 
	     thus preventing conscious or unconscious establishment of class system. The tasks within a Workers Cooperative can be 
	     water management, food, communication, engines, waste management, caring for 
             the tourists, understanding possible Moon landing sites, understanding an asteroid etc. 
             There will be one or more members for each task as per requirement and total group size.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(o).</span> There has to be one person who has to be the interface between the internal Workers 
             Cooperative members and also the interface of that Workers Cooperative to the outside and 
             that person will be the Coordinator. The Coordinator is a time-bound position decided by democratic discussion and consensus 
             within that cooperative and in accordance with Natural laws. All the workers including the Coordinator 
             can be of any naturally reasonable responsible age, whether 13 or 30 or 90... anyone as long as they make sense 
             and are willing and able to put physical or intellectual effort including being a good leader. And this responsibility of 
             "Coordinator" can rotate between the cooperative's members as per requirement or consensus.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(p).</span> Further, a tourist in the kosmos a few hundred thousand kilometers from Earth ( the Moon ) or a 
             few hundred million kilometers from Earth ( the Asteroid Belt ) will naturally feel deprived from Earthen settings 
	     including the social aspect and the simple personal fact of feeling the Sun's heat on the open face and 
	     this deprivation will depress a person for a moment or more, despite that tourist's purpose of tourism. 
	     But if every person in the kosmik efforts, including the tourist, participates in the tasks by being part of the kosmik Workers Cooperatives 
	     it will keep him or her engaged and away from depression, enable fraternity and contribute to two more hands in the tasks.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(q).</span> So, humans in the kosmos will be a collection of Workers Cooperatives collaborating with each 
             other on a common and equal human level regardless of their origin nation and social station 
             on Earth and they will agree on the same ideal natural laws for humans and help each other. 
             Thus harmony in the kosmos and also harmony contributed on Earth when these people return to 
             Earth carrying their gentle experiences in the kosmik Workers Cooperatives.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(r).</span> Though humans in the kosmos will be arranged as a large set of Workers Cooperatives 
	     who cooperate with each other and with individual humans without a thought of receiving 
	     tax for their voluntary help, the Workers Cooperatives will also hold allegiance to their Earthen nation, 
	     and to the space department of their national government they will send back 
	     all the unprocessed raw material from the kosmos and any kosmos-produced products too, which they produced 
	     by their labor, and these materials these space departments will trade with the space departments of other countries 
	     and the trade will be done in some agreed Earthen currency. However, none of this trade 
	     need affect the comfortable presence in the kosmos of the citizens of those nations. 
	     And this trading will exist until the natural idea of a borderless Earth is not adopted. Borderless Earth in a Borderless Kosmos.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(s).</span> In the kosmos therefore, every kosmonaut in every Workers Cooperative will be given due respect as a human individual 
	     who has equality in everything and will be allowed to attain his or her full potential, unless a kosmonaut chooses to become cruel, apathetic, 
	     superstitious, non-gentle, competitive, tribalist and a danger to the Workers Cooperative and consequently to all humans in the kosmos.
	   </p>

           </div>

           <div id="tea" class="section">
           <h2> 05. Tea and Kosmos</h2>

           <p>
             Intoxicating substances like alcohol should not be used in the inherently risks-filled 
             environment of the kosmos, including the social mistakes people will make by such consumption 
             and lead to disaster there. Celebrations can be done with rounds of tea and biscuits. Tea 
             has been such a great multi-purpose discovery... the drink of philosophers, revolutionaries, 
             inventors, discussers, intellectual and physical laborers, lovers of taste and refinement, 
             providing energy and relief in heat, cold and rain, in the heat of the deserts and the cold of the 
             same deserts at night, in the cold of snows and the heights of the high mountains, the 
             adda tea houses of Calcutta city with the Calcuttans doing rounds of tea and discussing the 
             world... all the while the tea providing health benefits.
           </p>

           <p>
             Tea is one of the good inventions of China which got added with three additions from other 
             lands : milk in tea from Mongolia, sugar in tea from Britain and Egypt-origin biscuits. And tea 
             comes in various varieties whether in tea leaf, additional addings for taste, health and 
             experience like lemongrass, ginger and tapioca pearls, and preferences like the water-based 
             Sulaimani chai or the milk-based Assam tea or the ice tea.
           </p>

           <p>
             In the kosmos, other than the non-intoxicating, energizing and health-bringing nature of tea 
             usage, regular tea'ing also will hydrate the skin which may become dry in the kosmos ships and 
             the kosmos suits and will also create solidarity because of group drinking. Tea is also a good 
             laxative including when starting the day. Further, tea leaves are a good natural fertilizer for 
             plants.
           </p>

           <p>
             And maybe tea grown in the kosmos may become a new variety or multiple varieties in accordance with conditions in different kosmik locations.
           </p>
	   
	   <p>
	     Related to alcohol is cigarettes and the obvious danger of cigarette smoking in the kosmik habitations is poisoning 
	     of the habitation air, eye irritation, unpleasant smell and the danger of fire. Cigarettes are smoked because 
	     the people think it is cool and also that a cigarette is substitute for company and also it becomes a habit. 
	     However, smokers must look at "Throw the smoke stick, hold a tea glass".
	   </p>

           </div>

           <div id="language" class="section">         
           <h2> 06. Personality of the kosmonauts</h2>

          <p>
	    This topic is about language, appearance and personality of the kosmonauts and is necessary for safe, collaborative and harmonious presence of humans 
	    in the kosmos but also applies to Earthen settings.
	  </p>

           <p>
             English is the most appropriate common language in the kosmos and will be the base language in our 
	     Frema internet system but provision must be there for use of other languages but with the understanding that 
	     such communications must be open and translatable and pronounceable by other language speakers.
           </p>

           <p>
	     To be understood is that man is male and woman is female and there are naturally different personalities and duties of the two.
	   </p>
	   
	   <p>
	     Men have to be gentlemen who are gentle, honest, genuine, trusting and trustworthy, are well groomed and well dressed, genuine in speech, 
	     speak their mind but with decency, support the correct ( like ceding place in a queue for an elderly person ) and not support the incorrect vocally 
	     ( like telling a queue breaker ), do no anti-social behavior ( like urinating in public places ) and are collaborative instead of competitive.
           </p>

           <p>
	     Men should not dress in the sloppy t-shirt and shorts as their outer dress. Men's legs should not be seen in shorts in the public unless 
	     there is a health reason and then too in long shorts extending below the knee. T-shirts are to be only used as under-shirts. 
	     Social wear for men should normally be pants and full sleeve shirts with no garish design. Jackets as per situation, season and not seeming 
	     "Manager in MNC" type. Ties are a no... the tie being an idiotic invention whose only function is adding color to the dress. 
	     There are good neckwear in form of scarves and cravats which are to be worn if the man can carry them.
           </p>

           <p>
	     Men should shave their face at least once every two days, though leaving a neat mustache if mustache suits the man, and a beard if suiting the man. 
	     Beard suits very few men.
           </p>

           <p>
             The only ethnic wear for men which looks good is the cloak, head dress and face cover of men from the Imohag people of the Sahara desert, 
	     aka the Tuareg people... this dress probably being the inspiration for the desert dress of the Fremen people in the Dune stories. 
	     "Imohag" means "Free men" in the Tamasheq language of the Imohag people... same as "Fremen" in Dune and maybe the Fremen people having 
	     "blue within blue" eyes from intake of "spice" comes from two things :
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(a).</span> Blue eyes found within the Imohag people who live within a desert setting like the Fremen.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(b).</span> The Imohag men's desert dress which we speak of, which leaves blue coloring on their face from the face cover's indigo dye 
	     rubbing on the skin. The face cover / veil part of this dress is worn only by the Imohag men, not women whose face remains unveiled.
	   </p>

	   <p>
	     Below are some photo examples of this men's dress :
           </p>

           <p>
	     https://ibiene.com/wp-content/uploads/2022/05/img_0674-1024x683.jpg
           </p>
	   
           <p>
	     https://ibiene.com/wp-content/uploads/2022/05/b296f9c116ddf9d6efd13b3f9eef4968.jpg
           </p>
	   
           <p>
	     https://www.alamy.com/stock-photo-close-up-of-a-tuareg-man-morocco-29006757.html
           </p>
	   
           <p>
	     https://www.facebook.com/100063535277856/posts/tuareg-desert-man-his-blue-eyes-sparkle-like-the-stars-in-a-clear-night-sky/1344335357694294/
           </p>

           <p>
	     https://www.terres-touareg.com/wp-content/uploads/2024/04/Sans-titre-6-3.jpg
           </p>
	   
           <p>
	     https://sharjahevents.ae/en/event/tinariwen-live-in-sharjah/
           </p>

           <p>
	     About women's dress and presentation, women should not appear fake or unfeminine or remind of obsolete or oppressive 
	     cultural elements. Recommendations include not using or doing the following items :
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
             <span> >> </span> Eyelash curler.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Face botox.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Lip filling.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Face makeup.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Heel shoes.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Aggressive attitude and foul words in order to pretend to be "one of the boys" or 
	     to display a wrong understanding of women's emancipation.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Gymming. More on this in the next topic.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Power suit and a "professional", impersonal, apathetic manner.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Too much jewelry and garish jewelry.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Piercings though okay for nose and ears.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
	     <span> >> </span> Long nails including given shape by filing.
           </p>

           <p> [ To be done ] </p>

           </div>           

           <div id="sports" class="section">
           <h2> 07. Sports and recreation in the kosmos</h2>

           <p>
             These should be rational, gentle, health-building, natural, humanist and contribute to 
             harmony and collaborativeness in the risks-filled environment of the kosmos. No competition 
	     should be present including in sports and certainly no sports which involve more than two 
	     people playing with each other. A system better and very unlike the sports and recreation systems 
	     in a lot of the Earthen world now.
           </p>

           <p>
	     For two millenia at least, some sports have been presented as "Manly" but are anything but manly. Examples are boxing, wrestling and 
	     the gladiator sports of the Roman empire of 2000 years ago. The gladiator sports continued until the gentleness, rationality and empathy of Isa 
	     removed this barbarity from Rome, but unfortunately the Roman interpretation of Isa's teachings replaced gladiator games with priests and 
	     profiteers but this is another story whose similar nature in France we discussed in the second topic in this chapter.
           </p>

           <p>
	     The gladiator sports present to us examples of multiple elements of nonsense. Men fighting deliberately starved lions, elephants etc... for what ??? 
	     To either obtain freedom from slavery or die in bloody, painful tragic fashion. These men should not have been slaves in the first place. 
	     But that was out of question in Rome because Rome was a feudal imperial system which existed only to perpetuate power and money wealth 
	     for the emperor, his progeny and their subordinate feudals and merchants... and expand by conquest to get more power to him and the other peepz.
           </p>

           <p>
	     The primary reason for conducting the gladiator games was to give the citizens a grand spectacle so that they forget that they are multi-generation slaves 
	     of the feudals including the Roman emperor ( the caesar / kaisar ). A necessary element of the gladiator games was their bloodiness and pain imposed 
	     on the unwilling participants in the arena. The thousands of unthinking audience members had their bloodlust called upon and they cheered 
	     the absolutely stupid scenes of pain, maiming and death of the slave gladiators and the starved and slaved beasts the gladiators fought, 
	     and they cheered the idea of slavery of human by human. Idea was that these audience members waited eagerly for the gladiator games and 
	     spent their passions there instead of gathering for discussions about how to overthrow the feudals and material poverty they had been imposed upon 
	     for generations. The feudals thus tamed their slave citizens.
           </p>

           <p>
             Also through the gladiator games, the emperor made the non-rebelling citizens become used to and enjoy blood, maiming, pain, death and senseless killing 
	     of human and non-human. This was useful for the emperor to prepare these unthinking masses to fill his military as ready soldiers for no other reason than 
	     more glory, land and wealth for himself... from Rome to England, Afrika, West Asia and beyond.
           </p>

           <p>
	     What did the ordinary Roman subject citizen soldier get from killing an Ethiopean or Englander or Arab ? Either getting his hand cut off in the war or 
	     death and glory in title. Did his material situation improve ? No. Did the emperor give one of his many mansions to the ordinary citizen soldier ? No. 
	     Did the soldier citizen become freed from slavery to the feudals ? No. A senseless thing this.
           </p>

           <p>
	     The gladiator games also had benefits for the emperor's subordinate feudals and profiteers. They supplied the clothes and the weapons 
	     to the gladiators... they supplied foodstuffs and alcohol in the arena... they owned the slaves who gave the foodstuffs and alcohol in the arena... 
	     they got contracts for the game including publicity... they got some of the surviving gladiators as their slaves... many other things. These feudals 
	     profited from killings, slavery, alcohol, competition and stupidity.
           </p>

           <p>
	     Finally, the surviving gladiators who may still remain slaves, but owned by others now, despite promises of liberation from this kind of slavery, 
	     they were lionized, glorified, heroized and made examples of supposed manlines... something every eight-year-old ordinary boy and every 60-year-old 
	     ordinary "man" should celebrate, venerate and look forward to becoming. The word "lionized" about the surviving gladiators is ironical considering that 
	     real lions would have been maimed and killed by the gladiators. What for ???
           </p>

           <p>
	     This stupidity was 2000 years ago but it still continues in the so-called Democratic Societies... for example the baseball matches and the boxing matches. 
	     Four hundred audience members around the boxing ring... who have paid the ticket to be there, whose amount will be a substantial amount from 
	     their monthly wage slavery salary... they sit in the boxing arena waiting eagerly for the barbarity called boxing to start, wear t-shirts and carry banners 
	     of their artificially-made-favorite boxer... and cheer with mindless bloodlust for the two humans in the boxing ring beating each other to blooding, 
	     exhaustion, injury, collapse, fainting and possible death.
           </p>

           <p>
             The boxer may carry permanent serious health degradation like with Muhammad Ali who developed Parkinson's. Contradiction of this boxer
	     carrying the name Muhammad, one of humankind's great philosophers and reformers who would have found boxing to be obscene, 
	     to have all the reasons for existence as the barbaric Roman gladiator games 800 years before him and who would have been saddened for what became 
	     of the boxer carrying his name.
           </p>

           <p>
             Another largely barbaric sport is hunting. What is the point of hunting cats, whales, elephants, deer, zebra, rhinos, giraffes, dodos, ostriches etc 
	     except to demonstrate cowardliness, feudal power, profiteering and non-appreciation of beauty and intelligence by shooting at them with arrows or guns or
	     harpoons at 20 meters distance ? Anyone who wants to kill a cat is being stupid and thus should stop. Any society which celebrates such killing 
	     including by fixing a cat's head to the most prominent wall of his house or the hunter holding the killed cat in a photo, 
	     such society is in need of enlightenment. But permissible is removal of wolf, hyena and all other dogs and also snakes, crocodiles, sharks and orcas 
	     as these animals are dangerous pests.
           </p>

           <p>
	     Also in the modern world, most sports stars will become uncaring feudals with regards to their very fans who made them famous and wealthy. 
	     Ordinary sports-mad citizens spend years being loyal to professional sports people... to sports stars... instead of being loyal to their fellow citizens and 
	     to humanity. In return, the sports stars will neither give a million dollars from their millions more, to their most ardent and loyal fans, 
	     nor will these sports stars speak up on social issues and global issues faced by their fans, humanity and ecology.
           </p>

           <p>
	     Even when the fans become victims of stampede when waiting for their cherished sports stars and die in the stampede or get injured,
	     the sports heroes will not care one bit and maybe days later post a tweet with bland words of fake sadness. Nothing more. And the same sports stars 
	     may in coming days release tweets hating other people on Earth who have done them no harm.
           </p>

           <p>
	     So why are these sports stars cherished by the masses if all they are are fake heroes ?
           </p>

           <p>
	     Also, some or many of these sports stars, who once had medals and glory in magazines of paper and internet, TV, stadiums and government programs, 
	     they become forgotten by the very society they represented and played. They live in poverty and suffering, trying to make a marginalized living 
	     in their feudal societies by selling snacks from outside their house or collecting garbage in a cycle rickshaw or doing other such things and 
	     some die in neglect in some rented room where they live alone with their last breaths and tears remembering their once fame, 
	     and they perhaps in those last moments thinking that they would have been happy, remembered and alive if they had instead contributed 
	     in progressive social activism.
           </p>

           <p>
	     There are other sports stars who were good people in general and could have used their charisma for good things but sadly wasted those opportunities. 
	     For example, the handsome chap Ayrton Senna who was a famous car racer. He could have become a model for good products and 
	     acted in humanist serials and films instead of wasting his time going round and round the racing tracks and ultimately dying there in a crash.
           </p>

           <p>
	     Therefore we of Kosmos Society wish to calm down and evolve humanity from this barbarity, competition and pointlessness in most sports, 
	     so we consider badminton, swimming, walking, floor exercises, pull-ups and light gymming ( the last three only for men ) to not only be the ideal sports 
	     for Earth but also among the best ones for elsewhere in the kosmos though with considerations for low-gravity places like the Moon and no-gravity places 
             like the Alef-F ferry when its spin system has been turned off.
           </p>

           <p>
	     When women start gymming and doing regular running for "fitness", there is an unfeminine hardness that comes into them, both physically and 
	     in their psyche. Hard body, foul mouth, athletic running manner and a callous attitude are totally undesirable in women.
           </p>

           <p>
             About the good sports, other than badminton, swimming and brisk walking as recreations for all, others can be poetry, painting, pottery, music, 
	     writing stories and long discussions over tea.
           </p>

           <p>
	     And there is nothing more manly for a man than to be a philosopher, to be a gentleman, to be passionate about learning about Nature, to be a humanist... 
	     on Earth and beyond Earth.
           </p>

           </div>

           <div id="education" class="section">
           <h2> 08. Education in the kosmos</h2> 

           <p>The purposes of education are :</p> 

           <p> <span> >> </span> 
	     To liberate oneself from any wrong, oppressive and unscientific traditional cultural impositions and thus to know one's reasonable rights as a human.
           </p>

           <p> <span> >> </span> 
	     Simple intellectual curiosity... the idea that "Let's follow this good thought and good chain of thought and see what comes of it for myself and 
	     for others, with we giving no regard to money income and fake pride".
           </p>

           <p> <span> >> </span> 
             To understand that as a human we must collaborate with others in local society and 
             in humanity in general and that the good of society and humanity is our good. And good acts 
             must be done not to earn points so that heaven's door opens for us but to be genuine in 
             empathy for others. That we must be gentle, sensitive, empathetic and selfless instead of 
             sneaky, amoral and selfish.
           </p> 

           <p> <span> >> </span> 
	     To begin to understand the timeless and infinite kosmos and acknowledge our very 
             humble individual place in the grandness of the kosmos, thus our approach to the kosmos
             must be with gentleness, sensitiveness, receptiveness and humbleness. A single medium-sized star like the Sun 
             is uncountably more powerful than any mere human who is a billionaire with ten college degrees, 40 years of experience 
             in the corporate world and very proud of his culture. The Kosmos does not care for these arrogant human affiliations.
           </p>

           <p>
             The above learnings should be our approach to the kosmos and the resulting bettering of the individual and the bettering of humanity.
           </p>

           <p>
             Decades of in-person human presence in the kosmos has been in a very limited way, with most of 
             it in Low Earth Orbit and a little on the Moon. Kosmonauts have reported their in-person 
             understandings of the kosmos like they seeing flashes in their eyes even when they close their 
             eyes. Other experiences like smelling burnt smell when they are in the airlock. These 
             experiences were not proposed by academics who usually pretend to be experts of the 
             kosmos despite never having stepped into the kosmos even once.
           </p>

           <p>
             The Big Bang Theory confidently declares the birth of the Kosmos / Universe to be 13.8 billion years ago but this is a 
             theory mainly forwarded by academia, proposed solely on the basis of mathematical equations on paper and origining 98 years ago. 
             This way these maths-as-a-religion academics are no different from astrologers.
           </p>

           <p>
             These academics went about lectures and conferences chanting "Big Bang Theory" for almost a hundred years 
             when until recently someone proposed a second Big Bang which "created Dark Matter". Dark Matter is 
             another nonsensical maths-basis idea which has been around for many decades but 
             has never been observed in Nature, let alone measured. These academics don't know how big the 
             kosmos is, they have never stepped into the kosmos, yet they confidently declare its birthday to the microsecond, LOL.
           </p>

           <p>
             So to understand the kosmos we must reject the current dominance of mathematics in astronomy and 
	     expel the professional mathematicians and instead be humble, gentle, sensitive, receptive and natural to the knowledge of 
             the kosmos by actually going into the kosmos and narrating our every experience to the rest of humanity.
           </p>

           <p>
             We must also accept the very simple idea that the kosmos is timeless and infinite and 
             we don't know what all kinds of objects are in the kosmos and what kinds of life types are in 
             the kosmos and that these life types may not evolve from the same ecosystem conditions as on Earth.
           </p>

           <p>
             We must look at the natural, observant and non-arrogant responses of the first two human travellers to the kosmos - Yuri Gagarin and Gherman Titov.
           </p> 

           <p> Among the statements of Kosmonaut Yuri are : </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(a).</span> Orbiting Earth in the spaceship, I saw how beautiful our planet is. People, let us preserve and increase this beauty, not destroy it!
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(b).</span> Rays were blazing through the atmosphere of the earth, the horizon became bright 
             orange, gradually passing into all the colors of the rainbow : from light blue to dark blue, to 
             violet and then to black. What an indescribable gamut of colors ! Just like the paintings of the 
             artist Nicholas Roerich.
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(c).</span> "The main force in man is the power of the spirit." Here "Man" of course means 
             Human.
           </p> 

           <p>
             The most famous statement of Kosmonaut Gherman was when he visited USA in 1962 and 
             was asked by reporters how his flight into the kosmos affected his understanding of life. He said 
             "Sometimes people are saying that God is out there. I was looking around attentively all day 
             but I didn't find anybody there. I saw neither angels nor God".
           </p>

           <p>
             These two people were humble and natural in their approach to the kosmos and to life. Certainly 
             not the arrogance of maths-driven academics and astrologers, nor the unthinking ordinary 
             people who accept their arrogant pronouncements without questioning because they think 
             even simple questions will make them seem foolish. However, it is the simple, "foolish" 
             questions which have benefited humanity throughout its history in its bettered social systems 
             and better technology and the presence of Human in Kosmos.
           </p>

           <p>
             Knowledge is bettered when it is shared freely with all, without being taxed in various forms 
             like the receiver must only be of certain artificial social classes including having two college degrees 
             compulsorily. There are some societies which have more college degree graduates presently 
             than the entire human populations of some other societies. However, the former societies 
             generally are not considered among the contributors of science and technology nor of better 
             human systems despite these societies considering a college degree as being the mark of 
             knowledge. Indeed, these societies are mere users of machines and knowledges that other 
             societies and individual people of natural thinking created over thousands of years without 
             consideration of college degrees or other kinds of artificial social separations.
           </p>          

           <p>
             The wrong system of college degrees was started by a Muslim African woman by name Fatima al-Fihri 
             in year 859 AD when she established the university in Qayrawan city in what is now Morocco. 
             This university was the first known university in the world and still operates. It started as a theology 
             place but later it added other sciences including astronomy and it became a famous general university.
           </p>

           <p>
	     However, Fatima as the founder decided to start the system of degrees which in her mind was to limit the student intake 
	     which was big because of the university's popularity and also probably because she thought degrees will 
	     give her passing students prestige and probably give her university more renown than the legendary libraries of 
	     Alexandria and Baghdad. But she didn't consider that instead of creating this needless competition 
	     for intake of students ( entrance exams ) and competition for "respectable" exits ( final exams ) 
	     she could simply have established more branches of her university across Africa and beyond and 
	     thus any number of students could have benefited from her original good intention.
           </p>

           <p>
             What college degree system Fatima started more than 1100 years ago in Africa has now led to multi-generation misery and 
             oppressions in most places across Earth now in 2025 for billions of people.
	   </p>

           <p>
	     This act of Fatima is the single wrong thing in the more than thousand year period of the Islamic Golden Age which 
	     was a period which not only created great philosophies and technologies but also forwarded past brilliant knowledges from the Greeks, 
	     the Egyptians, the West Asians, Buddha, Isa and the Chinese, and forwarded the good things by its contemporary Indians. 
	     This period of great creativity was the direct influence on the establishment of the Enlightenment period in Europe and its consequent 
	     Industrial Revolution whose benefits we use now. But that single act of Fatima of adding competition to education more than a thousand years ago 
	     has created such tragedies now.
           </p>
    
           <p>
             In the modern world if the college degree is one form of tax to get respect, to get the college degree itself 
             requires other taxes like money and high exams marks in the preceeding school years but how is this rational ? 
             Will knowledge not enter into a person's mind if he or she do not acquire these preceeding taxes and 
             the suceeding taxes ?
           </p>

           <p>
             We now have so many knowledges, technologies, amenities and progressive social systems 
             because of free knowledge distribution by thousands of brilliant people before us who in their time either did not 
             have the modern assembly-line degree-based education system of now or did not go to the formal universities of their time 
             and instead were self-taught engineers, doctors, philosophers, astronomers, naturalists etc, or they went to colleges 
             only because that was their social situation to obtain knowledge. Like Michael Faraday and Jagadish Chandra Bose. 
             We use their ideas and works now yet so many of us will hold them in contempt if they did time travel to now 
             and we met these undegreed people.
           </p>  

           <p>
             Michael Faraday is the person whose experiments in electro-magnetism and electro-chemistry have 
             led to our modern world using electrical machinery whether the lamp, the motor car, 
             the washing machine or the cell phone. And he studied only till middle school 
             in terms of the modern assembly-line degree-based education system. He was not at all a college graduate, 
             let alone one with three post-graduate diplomas including from a B-school and subsequent 20 years of "experience  
	     in senior manager positions in the corporate world".
	   </p>

           <p>
	     This means many from those societies which place great multi-generational emphasis on college degrees, 
	     and disrespect anyone not achieving degrees, they must stop using electrical machinery because this field was forwarded by 
	     the "unschooled" Michael Faraday. Stopping thus will be a principled stand. But will they ?
           </p>

           <p>
             Similar is the case of the Wright Brothers who built and flew the first aeroplanes more than a hundred years ago. 
	     They did not finish high school and were thus "unschooled" as per many present societies especially South Asia, and then were humble cycle shop owners. 
	     They were not PhDs who were fintech company entrepreneurs with their company being a "unicorn". 
	     Therefore, those people now arrogant about their three college degrees and decades-long corporate experience, 
	     with contempt for school dropouts, should not use aeroplanes. Simple. Let them create a magic carpet made from their college degrees and 
	     their many job experience letters and fly on this carpet.
           </p>

           <p>
             Jagadish Chandra Bose disagreed with the modern patents system and he and Michael Faraday would have agreed with the four big 
             examples of untaxed and for-all education and collaboration systems in modern times : one the internet itself, 
             second the Open Source Computing movement, third the Wikipedia and fourth the Khan Academy.
	   </p>

           <p>
	     Both Faraday and Bose and every naturally intelligent contributor in history would have wanted the four above examples to contribute to 
             the system of education on Earth and in the exploration and settlement of the kosmos, with the understanding that 
             there is much material in those learning mediums which is misinfo and disinfo.
           </p>

           <p>
             Next, since we speak for Workers Cooperatives as the organizational method for kosmonauts, 
	     each of the people involved in the cooperatives should be participants in 
             live-narrating their experiences in the kosmos as also later recording their experiences and 
             adding these experiences to the Frema internet blog that is produced by each Worker 
             Cooperative, and these blogs being accessible by every human in Kosmos and on Earth. The 
             blogs will have text, voice and videos because someone's experience will 
             become non-limited in explanation by presenting it in different formats.
           </p>

           <p>
	     And these blogs will have a response system for the readers and viewers though of course the reception of these 
             informations by the readers and their responses by the readers may take small delays to 
             very large delays because of the in-kosmos location of the blog producers and their duties 
             and other activities. The one-way communication time itself may be from about a second ( 
             the Moon ) to 13 minutes ( Red One ) to many many hours, and these delays just within the 
             Solar System.
           </p>

           <p>
	     Further explanations about education are in the below topic "City redesign on Earth".
           </p>

           </div>

           <div id="satellite" class="section">
           <h2> 09. Basis of satellite design</h2>
           
           <p>
             There should be no construction of needless nano-satellites and larger satellites that are currently 
             built by every second engineering college and launched into Earth orbit by misguided launch 
             organizations and cumulatively make Earth orbit dangerous for humans to travel in - an 
             unnecessary situation brought about by profit-mindedness, competition in education, 
             unscientific thinking and avoidable nationalist posturing.
           </p>

           <p>
             On the contrary, satellites around Earth or other worlds or in the kosmik void should be few and larger trackable systems which 
             can be repaired in orbit or in place or retrieved for recycling. Secondly, all new satellites 
             should be managed by a collective human committee. We of Kosmos Society will keep this 
             as a necessary element when designing our Frema kosmos-capable internet system. We will 
             also design systems that contribute to clearing up the current satellite and rocket debris around Earth. 
             Please read the topic about Serf satellite in the "Our techno systems" chapter on this website.
           </p>

           </div>

           <div id="mirkeen" class="section">
           <h2> 10. Mirkeen-01 city on the Moon</h2>

           <p>
             Project Mirkeen will be our effort in building a humanity-uniting progressive research city 
             on the Moon ( Earth's moon ), having the name "Mirkeen-01" and to be built beginning in 2032.
           </p>

           <p>
             Presently, Artemis Accords and ILRS ( International Lunar Research Station ) are two projects for 
	     the near-future construction of bases and other infrastructure on the Moon and 
             includes the kosmik vehicles needed to carry humans and luggage between Earth and the 
             Moon towards the construction of the bases and during their operation.
           </p>

           <p>
             Artemis Accords is led by the USA government and the ILRS is led by the governments of China and Russia, 
             and these three governments have needlessly extended to the Moon their disharmony-filled Earthen bloc politics 
	     when instead they should have proposed a pan-human, collective Moon Base effort.
           </p>

           <p>
	     So we of Kosmos Society propose a third way... sometimes there is a third way as nicely put in the slogan of the World Social Forum - 
	     "Another world is possible". Our third way is the Moon city "Mirkeen-01" which we will build and it will be separate to Artemis Accords and 
	     ILRS.
           </p>

           <p>
             The name "Mirkeen" is a combination of "Mir" and "Keen". "Mir" means Peace in the Russian language 
             and also World. "Keen" is the main city in the Dune story. This Moon city will be built in the following way :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(a). </span>Bring together private citizens from Earth who believe in natural human beliefs 
             including pan-human fraternity and want to settle on the Moon whether semi-permanently or 
             with regular visits to Earth. The participating citizens of Earth can be from The Global South, 
             from pan-humanist private organizations from anywhere and any other pan-humanist individual citizens of humanity.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(b).</span> With all this brought-together "snapshot of humanity" we begin to build the Mirkeen-01 city on the Moon 
             starting 2032, using our to-Moon transport means ( our-designed Alef-A airship-type kosmos ships manufactured by partner governments ) and 
             our other technologies and the technologies of other partner pan-humanist organizations with common protocols. 
	     The construction workers will base themselves in the Alef-As until the base is built.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(c).</span> We will site the Mirkeen-01 city underground in a place which will be in line-of-sight with Earth but not far from 
             the Moon's Far Side. These criteria are for safety from kosmik rocks and radiation, to be in constant communication with Earth 
             and to sally out to the Far Side at will to learn deep-kosmos operations as well as to obtain water from the possible water ice 
             there and possibly from Moon soil. There will be at least one communications relay satellite in the Moon's orbit above Far Side to 
	     connect to a few relay satellites above Earth with these relay satellites being operated by our partner organizations.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
             <span>(d).</span> The construction materials for the Mirkeen-01 city, ground vehicles etc 
             will be partly materials carried from Earth in our Alef-A airship-type kosmos ships and partly local materials as 
             per application ( ISRU - In Situ Resource Utilization ). The machines to dig the ground will be our Moggy robot cats 
	     and the Moggys will also be our on-Moon vehicles.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";>
             <span>(e).</span> The excavation of the ground will keep in mind further underground extensions of the city.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(f).</span> The Mirkeen-01 city will be designed to be partly self-sufficient food-wise, 
             in water, in production of clothing, computers, the Moggy robot cats for ground transport etc 
	     but be extendible for meeting with future self-sufficiency situations. The electricity will be decentralized and will use our safe, 
             self-sustaining, modular and easily repairable Faradn generators.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(g).</span> The social organization system of the Mirkeen-01 city will be the points in this chapter.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(h).</span> The Mirkeen-01 city will be the first very advanced human society which won't have feudalism and 
             tax in any form including money. The true meaning of "prosperous society" is not in the money, mansions and luxury motorcars 
             hoarded by a few privileged. The true meaning of "prosperous society" is the situation where the potential and the positive ideas and works of 
	     every citizen is encouraged and the society collectively develops because of the contribution of each encouraged citizen.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             And this situation can exist without the few priviledged hoarding money and others kinds of tax. In fact the potential of a society is corroded by 
	     the presence of money and other hoarded taxes because so many people have potential but when they get socially excluded through 
	     their inability to pay various kinds of tax, they don't get the opportunity to realize their potential and their society does not get to benefit. 
             This realization extends to all of humanity.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(i).</span> For the time being the Mirkeen-01 city can engage in commercial activities 
             to sustain itself other than getting support from Kosmos Society and its partners on Earth. 
	     This commerce will be in accordance with our social system for the kosmos. The commerce can be about 
	     Moon-available minerals needed on Earth ( iron, silicon etc ) or needed on others' kosmik stations around Earth; 
	     the commerce can be about those produced materials and services which benefit from the low-gravity and vacuum conditions on the Moon.
           </p> 

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(j).</span> The Mirkeen-01 city will host guests from any place on Earth as well as from the Artemis Accords base and the ILRS base, 
             as long as the guests are human-spirited gentle people and will be welcomed with tea and biscuits.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(k).</span> The Mirkeen-01 city will serve as a store for desirable biological material and technological recipes 
             so that if Earth is threatened by natural events ( asteroids, comets, big solar flares, pandemics, super volcanoes etc ) 
             or unfortunately done human-made events ( global war etc ), advanced human life and other desirable lifeforms 
             on Earth ( like plants, cats, fish, whales, birds, deer etc ) can recover and thrive. This arrangement 
             will supplement the Svalbard Global Seed Vault.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(l).</span> The Mirkeen-01 city will also serve as an example to replicate its techno systems and 
             social system on other worlds like Red One and Red One's moons and the Asteroid Belt. Each new such base 
             will be named Mirkeen but with increasing numbers like 03, 05, 20 and going into hexadecimal numbers like 
             0A, 4C and FA.
           </p>

	   <p>
	     Example story set on the Mirkeen-01 Moon city :
	   </p>

	   <p>
	     It is year 2035. You have a whim to go to the Moon, to its pan-human city Mirkeen-01. This young city is built in architecture 
	     which is a mix of Andalusian, Rajasthani and other fine architectures. Particularly in this city you wish to experience the tea house 
	     called Chai Guevara which is famed as the gathering place for easy-going philosophers who replicate the "adda" culture of the tea houses 
	     of Calcutta city in present India.
	   </p>

	   <p>
             You wish to sit in Chai Guevara and discuss for hours over tea and eats. And listen to the singers in the tea house singing 
             in the new kosmik human language Kora which is a mix of English, Urdu, Russian, Tamasheq and Spanish. The songs are written by 
	     such young poets as Faiza, Alexey, Carlos and Siddhartha, and the singing accompanied by the music instruments kora, sarangi, cymbals and 
	     conga drums.
	   </p>

	   <p>
	      You wish to enjoy in Mirkeen-01 city for two months and at no point in your journeys to and fro the Moon, and your two month stay in Mirkeen-01, 
	      you wish to pay a single dollar because true democracy has arrived through our techno-social systems.
	   </p>

	   <p>
	      So all you do to get started on this journey and stay is, use your Dune Buk wearable computer designed by us, 
	      to register your name in the next trip of our Alef-A airship-type kosmos crafts ( also designed by us ) which are due 
	      to go to the Moon city Mirkeen-01. Your flight is due in four days.
	   </p>

	   <p>
	      The wait is done and your Alef-A craft lands in your neighborhood park at 10:00 AM and you board the craft and off it takes you on a day-long journey to 
	      Mirkeen-01 city on the Moon.
	   </p>

	   <p>
	      Your Alef-A descends on the Moon and lands 100 feet outside Mirkeen-01 city. You are already clothed in our-designed Stillsuit kosmos suit and 
	      you walk the 100 feet to the entrance of this new Mirkeen-01 city on the Moon and you feel content and serene that you wanting to do this journey and 
	      experience this Moon city, has been so easy, comfy and safe.
	   </p>

           </div>

           <div id="aliens" class="section">
           <h2> 11. Meetings or sightings of aliens</h2>
           
           <p>
             It is not known what kinds of alien life we will encounter, whether on Red One or on Europa 
             or beyond the Solar System, whether in the form of bacteria or as plants or as more 
             intelligent animals or something else. It is not known if they have been communicating with 
             us or with any other lifeforms in the infinite kosmos. Some humans say we must actively 
             find them, some say it is dangerous to try communicating with other lifeforms because they 
             may seek us out to wipe us out. But advancement is of course seeking them and we must be open 
             to the types of life we may find and the different ecological situations on their worlds,
             not limiting our understanding of kosmik lifes to the ecological situations on Earth.
           </p>

           <p>
             Actually humans don't even know so much of life forms on Earth including in the seas. 
             For example, the jaguar cats of the Amazon forests hunt crocodiles for food but this was rarely
             recorded on camera, perhaps never, until 2013 when photographer Kedar Hippalgaonkar along with his wife 
             Parul, recorded a jaguar locally named Mick Jaguar hunting a croc in a river in Brazil's 
             Pantanal wetlands. Kedar's photos went viral on the internet. So, as we seek lifes beyond Earth 
             we must not have preconceived notions and set academic dictations on where we will find these lifes and how they behave.
           </p>
           
           <p>
             And if we seek them we must of course ideally have collective human prosperity, collective 
             harmony, gentleness, sensitiveness, empathy and intelligent consensus as that will present 
             our best unified side to any other intelligent lifeforms and that will come by agreeing on 
              sensible manifestos for humanity like ours.
           </p>
           
           <p>
             There is a wonderful story written and posted on LinkedIn by Don Michael Feeney called 
             "The Interplanetary Civilian : A Novella of Mars and Memory". This story speaks of the 
             building of the first human settlements in the kosmos in terms of technologies and social systems 
             including pan-human development, decentralized governance, the first human baby born in 
             the kosmos, an artificial intelligence included with empathy and learning from unprogrammed kosmik events,
             and a very different kind of alien encounter. This story prepares us to look for intelligent lifeforms by being open-minded as 
             to their type and their reaction to us and our reaction to them. This is the link to the story 
	     [  https://www.linkedin.com/pulse/interplanetary-civilian-novella-mars-memory-don-michael-feeney-676nf ].
           </p>

           <p>
             While looking for alien life or encountering them by chance, we must acknowledge the 
             general idea that ultimately we and every kind of life origined maybe within dying stars and 
             within the dust around stars and maybe the gas clouds in the kosmik void, we must develop 
             pan-kosmos fraternity though subject to those lifes having or not having gentleness.
           </p>
          
           <p>
             It is said that kosmos-origined lifes were carried through the kosmos in various forms like spores, 
             viruses, eggs etc and seeded various worlds including ours to various levels and then 
             evolutionary steps took over in many of those worlds depending on the conditions of those 
             worlds. This idea is called Panspermia. For example, it is said that the octopus and squid in 
             Earth's seas are not from Earth but from the kosmos, their eggs carried within ice rocks and then 
             released on Earth when the ice rocks fell into the seas here. This is a good read about this 
             topic [ https://blog.padi.com/facts-about-octopuses-that-prove-theyre-aliens/ ]. 
           </p>           
          
           <p>
             And who knows, we may find that cats are indeed aliens as goes the internet legend, LOL.
           </p>

           </div>

	   <div id="city" class="section">
           <h2> 12. City redesign on Earth</h2>

           <p>
             This effort will consist of designing small cities on Earth which will hold resident populations of max 30,000 plus a few thousand guests. 
	     These cities will combine aesthetic form with function and will be scientifically-built, horizontally spread, citizen-managed through the citizens 
	     directly participating using the natural and progressive concept of Workers Cooperatives ( described in the "Social organization of kosmonauts" 
	     topic above ), humanist, easy to maintain, not create pollution, largely food-wise self-sufficient, largely employment-wise self-sufficient, gentle, 
	     collaborative, humanist, inherent with fraternity, inherent with Circular Economy and construction features which calm the citizens, 
	     delight their senses and inspire.
           </p>

           <p>
	     These new cities will take the pressure off current chaotic and soul-less cities, infuse humanity into those humans who live in current cities and also bring 
	     reasonable city culture to rural people because ideally great ideas, discussions and developments happen in the cities and rural areas in many parts 
	     of the world are rife with feudalism, non-safety and pollution.
           </p>

           <p>
             The ideas for these cities mingle with our ideas for human exploration of the kosmos and from human exploration of the kosmos.
	   </p>

           <p>
             In this effort we reject most current notions of how cities are designed because these notions have created places which are unscientific, unplanned, 
	     ugly, harmful, vertically spread, without soul, competitive, cruel, noisy, apathetic, mishaps-full, polluting, hot, classist, chaotic and 
	     where there is the contradiction of the few rich having mansions with parking space for ten private luxury cars and these rich have multiple 
	     such mansions but the same city will have tens of thousands of poor homeless people not having a single house...
	   </p>

	   <p>   
	     ...and the cities have installations of needless and ugly features like flyovers, metro lines, skyscrapers, feudal office towers made of glass and concrete...
	   </p>

	   <p>
	     ...where the unthinking middle class voluntary slaves in feudal organizations love to feed ten dogs with lavish food on a road on whose narrow footpaths
	     there are five homeless and hungry humans who are looking on with sadness and rage at the middle class zombies feeding dogs instead of giving 
	     the food to them, the homeless humans, who have not eaten for two days... and those ten dogs once full with food, proceed to attack the humans 
	     passing by... a scene of avoidable stupidity...
	   </p>

	   <p>
	     ...cities where most neighborhoods are crammed with small housing plots where the residents number in the tens of thousands in the most ugly, 
	     noisy, chaotic, dangerous situations... the neighborhood not having wide roads, trees, parks, benches along roads, no local community halls, 
	     no self-management of neighborhoods by citizens and no serenity... the neighborhoods filled with tens of thousands of people but most not bothering 
	     about the hunger situation of their next door neighbors or even if a neighbor is suiciding or being murdered or facing daily oppression... 
	     neighborhoods where a crime is happening on the road in front of someone's balcony which is ten feet away from the road 
	     but the resident on the balcony is ordered by his "family elder" to "come inside, none of our business" inside of rushing down to help the victim...
	   </p>

	   <p>
	     ...but the VIP areas being with quietness, secure, tree-lined, with the housing plots large and having gardens... these areas having few housing plots...
	   </p>

	   <p>
	     ...where in the wider city there are no fountains, no trees, no flowers, no other aesthetic constructions, no tea houses, no wide footpaths on 
	     the main roads, no channels for flood water, no thought given to fire safety, to earthquakes, to gentleness and harmony and to make the citizens reflect 
	     and to feel inspired and refreshed...
	   </p>

	   <p>
             ...where the market places are chaotic, fast moving, filled with urgency and competition, have filth and garish lighting which adds to the urgency and 
	     increased heart-beat...
	   </p>

	   <p>
	     ...where in the cities is the tragi-comedy of the IT-industry-enabled newly rich middle class purchasing flats in quieter gated communities for 
	     100,000 dollars but when these neo-rich leave their gated community and enter the real city, all they encounter is the rotten-ness of their city 
	     which didn't vanish just because the neo-rich could purchase a flat costing 100,000 dollars...
	   </p>

	   <p>
	     ...cities where there is no thought given to having clear star-lit sky in the night where the citizens can sit on a comfy bench with safety, serenity, 
	     with a gentle breeze around, wearing a jacket for warmth, with gentle and loyal human friends and cats for company, 
	     a gentle stillness around and looking up at the sky and wondering about the kosmos and experience one-ness with it...
	   </p>

	   <p>
	     ...cities with no thought given to preventing the citizens from being zombies who rat-race and dog-eat-dog for a lifetime and push their children 
	     into these dystopias.
	   </p>

           <p>
	    New York, Singapore, Los Angeles, Dubai, Shanghai, Bombay, Karachi, Bangalore, Dhaka, Tokyo, London, Paris, West Berlin... primary examples of 
	    copy-paste cities without soul, gentleness, collaborativeness, beauty, serenity, inspiringness... without liberty, equality, fraternity... 
	    without enlightened people as a rule rather than exception.
           </p>

	   <p>
	     By definition a city is meant to be serene, safe, enlightened, humanist, collaborative, harmonious, beautiful, everything available easily, 
	     a place of science and observation of Nature and contributive to humanity... opposite of what a village is. But the above mentioned cities are 
	     no better than villages... they are just over-grown villages. Of course, these cities will inspire enlightened people in one sense, to imagine how 
	     cities should not be, how humans should not be. This is the sole good thing about these cities.
	   </p>

           <p>
             The cities redesigned by us, Kosmos Society, will have beauty in every sense coming from eleven things :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(a).</span> 
	     From removing feudalism and profiteering in employment, in city maintenance, in availing amenities and every aspect of human life and conduct.  
	     These removals will result in removal of competition, class, cruelty, apathy, chaos and will enable harmonious engagement of humans with humans. 
	     This in turn means adopting the Workers Cooperative and Collectivist work model in all aspects of life. This means that there will be no class system 
	     in these cities.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(b).</span> 
	     From realizing that the attitude of people in a society can be known from their attitude to cats and dogs. Cats are animals of perfection... 
	     perfection in form, grace, attitude and thinking. They are gentle, sensitive, beautiful in looks, clean, extremely intelligent, loyal, 
	     empathetic, observant, thoughtful, graceful in movement, independent and produce good vibes for any place they are comfortable in.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
	     Dogs are the opposite... aggressive, noisy having the most irritating and headache-bringing sound, bring chaos, are mob-oriented, are ugly, 
	     are mindless killers, violently compete with other dogs, have disgusting habits and carry harmful microbes.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
             There are old descriptions : "Wise cat" and "Dog-eat-dog society". It is clear then... do we want a human society to adore cats and thus have gentleness,
	     intelligence, sensitiveness, empathy, beauty, loyalty and contribution to humanity or do we want a society to adore dogs and thus have chaos, noise, 
	     competition, apathy, cruelty, filth, violence, disgustingness and mindlessness ?
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>   	   
	     Therefore we must create a safe and comfy environment for real cats to prosper and consequently no place for dogs. The comfy environment for cats 
	     includes having in cities, regularly sited gardens with semi-large not-deep pools of fresh water with fish in them which can be taken by cats for food 
	     by them freely wandering into the gardens.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
             <span>(c).</span>
	     The architecture of buildings, infrastructure and features must be a mix of the most beautiful and environment-sensitive architectures on Earth : 
	     Andalusian, Rajasthani, Mughal, African, Russian and West Asian.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     For passive and active environment control, the features must include windcatchers, qanats, salsabils, aromatic wetted mat curtains for entrances and 
	     balconies ( like the Indian "qass" / "khus" grass mats ), fountains and gardens which have at least one tree.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     The city should have comfy soft benches everywhere outside and should have tea houses. No building must be taller than two storeys and 
	     every building must be safe for human and cat. Every public building and personal house must have comfy housing for cats 
	     whose entrances are shaded from sun, dust, sand and rain, and have human-removable protective grill, have soft beds, are cool in summer, 
	     warm in the cold, have drinking water and have a place for food for the cats.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Every house area must be at least 50 feet wide x 60 feet long, the house building set away from the road side front. In a row there should be a maximum of
	     four houses. The width of the roads must be broad and have regularly placed trees on the road sides to offer shade and Nature to the residents as also
	     places for the cats to climb. This arrangement brings harmony among residents, both within the individuals and between the neighbors. 
	     Also will be safer during earthquakes.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     To extend the harmony argument we take the example of the most non-harmonious region of Earth, South Asia. Houses here except of those of the rich 
	     and powerful, are set in chaotic neighborhoods where houses are cheek by jowl. Width of roads is narrow so houses are so near in all directions. 
	     This brings mob rule to these neighborhoods where neighbors are quick to gossip and socially boycott say a girl who likes a man or a man who doesn't 
	     do the culturally-enforced wage slavery or is a college dropout and so on... but the same neighbors will never contribute a lakh rupees each to that girl or 
	     the man in case they get cancer and need money for treatment in this most money-oriented of cultures.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>     
	     The cancered girl or man may die, not because the cancer treatment is technologically absent in this society but because they don't have money 
	     to pay the profiteering medical system. The neighbors may at most come to the dead person's house and stand for a few minutes in 
	     pretend sorrow and leave for their houses to read up for exams or leave for their feudal work place. These people will be instantly ready to hold grudges for
	     neighbors for irrational causes or even socially boycott the neighbors, but will not step in to help neighbors in need.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>     
	     In South Asian cities of populations of a million at least, a neighbor may suicide in his room in social isolation or a family may honor-kill their 
	     family member or a neighbor may be starving for lack of money, but the very next door neighbors on all four sides are not saddened, 
	     much less stop these tragedies. This apathy and cruelty comes from the mob rule in congested neighborhoods where there are thousands of citizens and 
	     the roads full of passing personal vehicles, and dogs and crows making noise and chaos and presence of other noises but no empathy and human-ness in
	     these neighborhods. Social disconnection in neighborhoods of thousands, amplified to the city level with populations of a million, amplified to societies of 
	     a billion.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Therefore, harmony comes from eradicating mobs including by making neighborhoods serene. Humans will rediscover natural liberty, eqality, fraternity.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     There should be a hotel in every neighborhood and indoor farms which also double as provision stores. Also in every neighborhood should be small 
	     activity buildings which normally will be sports places for badminton, swimming and light gymming ( the last for men only ), but will double up as 
	     assembly places for the neighborhood's people's congresses, drama presentations etc.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     All residential houses will not be personally owned by the residents but will be assigned to the citizens as per need and situation. No citizen will have 
	     more than one house assigned because why will a human need more than one house and certainly no mansion especially when other humans are 
	     without a single house and live on the footpaths, bus stops, under bridges, in pipes on road sides etc.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             Also, every citizen when attaining the age of 13 will be assigned their own house so that the micro feudalism and the micro social distancing 
	     brought by the family system is prevented. Such a citizen must now maintain their house by themselves. This freedom is further enhanced 
	     when family system itself is abolished on Earth and humanity goes back to the non-selfish Socialist thinking of early humans.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>
	     <span>(d).</span>
	     No class system in these new cities also means no traditional slavery like domestic servants and multi-generational sanitation workers. 
	     Which in turn mean every house must be maintained by its residents including every house's compound area having its own resident-maintained 
	     sanitation system which is made secure against entry by snakes, centipedes and rats.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     All other buildings will be maintained to their full extent by the people's committees for that neighborhood.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     South Asia in particular will benefit from this self-cleaning and self-maintenance idea because in this region the culture enforces another 
	     multi-generation caste system among many where the middle class in particular has a cruel attitude with regards to area cleanliness : 
	     the middle class won't clean the defecation and the urine they themselves created in their bodies but instead assign this work to 
	     a "low class people" aka "kamzaat log" aka "kamjaat log" who have done this dangerous work for a hundred generations and die in the drains of 
	     the middle class neighborhoods because of being suffocated by methane gas, by lack of oxygen, by drowning in sewage and by getting bitten by snakes 
	     and scorpians.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The middle class of this region who act super-pious all the year by doing daily prayers multiple times, do regular festivals, do regular pilgrimages, 
	     call themselves educated with multiple college degrees and do what they think is "white collar prestigious work"... these people don't see 
	     the immorality and cruelty of not cleaning their own drains but imposing this work on multi-generational money-deprived "kamzaat log" 
	     who die in the dozens in the drains yearly. This is genocide by death and genocide on the living going on for a hundred generations.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     About domestic servants, again in South Asia, in most cases dogs and snakes are more respected than them. In so many middle class and upper class 
	     gated communities the domestic servants who clean and cook in the flats of the middle and upper class people, they are forced by the gated community
	     diktats to not use the regular lifts which the owners of the flats use. The domestic servants must use either the service lifts or even staircases. 
	     These owners of the flats eat the food cooked by the domestic servants, sit on the sofas cleaned by the domestic servants, but in the public situation 
	     of the lifts the middle class and upper class owners of the flats do not like standing beside their own domestic servants, do not like being seen 
	     standing beside the domestic servants. And largely, the common areas in the gated communities are absent of the domestic servants.
	   </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
	     And when the middle class family goes to a restaurant, they generally may not include their domestic servant in the outing and if they do 
	     then the servant will not be included in the dining and will be made to sit on another table some way away but near enough 
	     so that the family can call the servant for some work quickly.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Similar is the behavior towards delivery people who bring food and other parcels. Instead of the flat owners getting down to come to the gate of the 
	     gated community, the flat owners expect delivery to their door including by the delivery person having to use the stairs 20 storeys up 
	     even if the lifts are not working because of power cut.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The middle class of India especially acts most entitled just because they have a few thousand rupees more salary than the domestic servants, 
	     delivery people, mall security staff etc because of the IT / fintech / edtech / Quantum Computing etc needless kinds of industries. 
	     The middle class will take their pampered "doggos" ( dogs ) in the lifts but not allow their domestic servants, delivery people and other poorer people 
	     into their lifts. Their doggos may attack the others standing in the lift but in most cases the middle class are not bothered... 
	     not aware that they are being zombies.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The middle class itself is a slave class for the rich yet the middle class neither liberate themselves and liberate the remainder of their society nor 
	     they empathize with those poorer than them but instead impose cruelty upon the poorer like sanitation workers. Most of the middle class people are 
	     just enforcers of the feudals... of the millenia-long feudal system, despite the middle class claiming to be educated people. 
	     Therefore in the classless cities we of Kosmos Society will design, the former middle class peepz of South Asia will learn to become human.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(e).</span>
             Gentleness in our cities will also be from abolishing all personal vehicles. The concept of personal vehicles ( bicycles, cars and motorized two-wheelers ) 
	     has only led to needless mishaps, pollution, crimes ( including road rage, wheelies and other anti-social behavior ), noise, chaos, unsightliness, 
	     needless voluntary separation of human from human, class conflict, apathy, continuance of cultural misogyny, defeminization of women, hot cities, 
	     feudalism, profiteering and Climate Change.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     When we know the many harms of personal vehicles there is no point retaining them. The feudalist and profiteer Henry Ford is most responsible for 
	     bringing these harms to us by being the first to mass-produce personal vehicles. When he had his own hungry, oppressed and 
	     protesting factory workers shot ( "Ford Hunger March of 1932" ) just so that he can retain his wealth, profits, mansions and anti-human social privileges, 
	     do you think he will care if most of you who are middle class or poorer, you get smashed by another personal vehicle or your city's temperature 
	     increases to 40 celsius ?
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Therefore to replace personal vehicles with a nice transport mechanism for people on city roads we present a new kind of vehicle - 
	     our Ra hybrid vehicle described in below sections in this topic.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(f).</span> 
	     Gentleness in cities also from rethinking inter-city public transport by using our Alef-A airship-type kosmos ships which can land and take-off from 
	     within neighborhoods and other small public areas, removing the need for airports, train stations and bus stations. Our Alef-A crafts will also be able to 
	     do inter-continent travel.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(g).</span> 
	     Gentleness in cities also from removing the current notion of cities being chaotic, non-self-sufficient, impersonal and competion-based which all makes 
	     tens of thousands of people to needlessly do out-of-city travel daily by various means including trains and so many of these people die needlessly 
	     because of this and those who don't die, they endure daily chaos till death.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     But through Kosmos Society's redesign of cities which will be largely self-sufficient and will be filled with people of 
	     scientific temper, what will be made obsolete will be those tens of thousands of out-of-city travellers. Not only will this make cities gentle but 
	     there will be very few people travelling beyond their cities on a daily basis and these few people will use our Ra vehicles and our Alef-A airship-type 
	     kosmos ships. This lesser daily out-of-city travel will also contribute to serene Earthen societies.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(h).</span> 
	     About food habits, meat eating should be left to the cats and the birds. The humans should eat the necessary plants from the indoor farms along with 
	     chicken egg, sheep milk and honey. For the last three foods there should be farms which are kind to the relevant animals yet beneficial for humans 
	     and this in a way where animal diseases don't spread in the city.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(i).</span> 
	     The security for human, cat, chicken and sheep should be combination of citizens on security duty as per their name in the roster, added with 
	     our Moggy robot cats who replicate the reflexes of cats.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(j).</span> 
	     Gentleness in cities also from removing public prayer houses. Belief in God is a personal aspect in the believers and the public veneration 
	     of God especially in public places has only led to avoidable conflict, oppression, imposition, noise, superstition and disharmony. If anyone chooses to 
	     believe in God and make prayer, he or she must do this in the personal space of their houses and that too in a silent manner and without imposing 
	     his or her personal belief on any other human.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(k).</span> 
	     A new education system we are still considering but it won't have competition i.e. no exams thus no marks and no degrees. In the present 
	     so-called Education System in many societies, two students on the same bench will claim to be great friends of each other but in truth 
	     they will compete against each other all the year for marks in exams.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 	     
	     This competition in some societies leads regularly to the suicide of a student yet his bench-mate, supposedly his great friend, will not get outraged 
	     over his friend's suicide, will not march on the roads to call for the end of exam-competition and instead will continue to do 
	     mindless memorization-based so-called learning so that he gets as high exam marks as possible, not only for him to feel happy in this stupid way 
	     but also to provide his non-sensible parents with fake pride which they can tom-tom to neighbors, relatives and work colleagues. It is such parents 
	     of his bench-mate suicided "friend" who caused the suicide by imposing competition on their own child when he wanted to simply pursue his interests and 
	     talents.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Other than such mindless, cruel parents taking their children to the steps of suicide just for the sake of fake pride, it is also that such parents are selfish 
	     who never cared for their child as a human but only saw their child as a money investment by putting some money into him for about sixteen years, 
	     within their feudalist, money-based society, and then their child has to earn wage-slavery money for the next 35 to 40 years to sustain his selfish parents, 
	     forgetting all his interests, passions, talents and potential to contribute to humanity.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The child is culturally expected to fall at the feet of his selfish parents every morning to "seek their blessing" before he leaves for 
	     his wage-slavery workplace... the undignified, anti-human social position brought to him, not by his choice but by his parents' idiocy.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 	     
	     The money investment into him by his selfish parents, in form of "education" fees, personal vehicle purchase, outside-of-school coaching classes, 
	     internet data plan purchase, exam preparation books and so on, this investment by parents is the same as putting some money in an interest-based bank
	     and getting interest every month from that bank's ATM machine. So what if their child suicides ?
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>      
	     And it may happen that these parents will directly murder their child who rejects this anti-human exams-based education system or doesn't want to 
	     do wage-slavery "job" thus he is called "jobless" and good-for-nothing. He will be murdered by his parents because the parents feel that their money and
	     fake-pride investment in their child has been "wasted" by their child so he is no longer of use to them, so why waste more money on him for food and all 
	     so best is to murder him once and for all and save money.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             There is also the fact that a few of such exam-based, other-competitions-based societies will socio-economic boycott a family not seen as money-having and 
	     not seen getting through the actually horizontal ladder of "career" life which starts with the child getting "good marks" in schooling, then jobs, 
	     then marriage, then children, they getting into schooling and cycle repeating.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";>  
	     A family not doing this culturally-recommended life path may be socio-economically boycotted ( in India called "Hukkaa-Paani bandh" meaning, 
	     stopping of tobacco and water ) and some parents who are selfish and don't wish the boycott on themselves ( husband, wife, their parents and 
	     their earning children ) and don't want to anymore support their school-dropout child or "jobless" child or low-exam-marks-scoring child, 
	     these parents will instead murder that "offending" child.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     The Indian city of Kota is notorious for student suicides. Similar is situation in Pakistan, South Korea, China and Japan.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     And if the child succumbs to pressure by the parents and society and voluntarily takes up wage slavery which will be life-long, 
	     then he doing wage slavery is not directly his fault but the fault of his ancestors who in their youth instead of rejecting their given social situation and 
	     joining progressive movements and ending the feudalism they lived with and therefore ending tax system including money, 
	     they instead joined some college to engage in competition with their class mates so that they top the exams and earn a college degree 
	     whose only purpose in so-called Democratic Societies is to produce another slave to fit in the machine of rule by feudals. 
	     When they produced children and pushed the same system onto their children they condemned their children into life-long competition and slavery.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     In these competitions-filled societies many parents sacrifice their own children at the trio altars of Mammon, Fake Pride and Selfish Fear.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Societies based on daily competition from cradle to grave do not have collaboration, thus no harmony, thus no inclination to explore for 
	     intellectual curiosity and social use, thus no techno-social contribution to humanity.
	   </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
	     Do we want this anti-human situation to corrupt the remainder of humanity for the next five years and the next five hundred years ? 
	     Do we want dystopia or utopia ? If the second then let us abolish competition in education and in everything else, and this solution is furthered when 
	     family system itself is abolished on Earth.
           </p>

	   <p>
	     Now about our Ra hybrid vehicle ( mix of hovercraft and wheelcraft ) for public transportation within a city. The Ra vehicle will be a combination of
	     hovercraft and wheelcraft and will be powered by electricity and water and will be enclosed and carry 20 passengers in comfort plus a driver. 
	     The electricity will come from our Faradn self-sustaining generator. In normal times the Ra vehicle will use hovercraft mode but on hilly roads the vehicle will
	     use its wheels for safety. Hovercraft mode is also helpful when a city's non-hilly roads are flooded as then wheels generally become useless but
	     hovercraft mode becomes a more natural means.
	   </p>

	   <p>
	     Hovercraft mode will be also useful when a road leads to a river or a lake and the road continues on the other side, so on the river water or lake water 
	     the hovercraft mode is used, and it will be better in this case to construct ramps that lead from the road to the water and then another ramp from 
	     the water to back to the road. This way most bridges across rivers need not be constructed.
	   </p>

	   <p>
	     The number of wheels in the Ra will be six and these wheels will not be passive wheels but will be individually able to bring out blades which will dig into 
	     the ground under each wheel, and this in effect makes these wheels like tank tracks. This is useful in emergency braking and in reversing.
	   </p>

	   <p>
	     The Ra vehicle can be used as a bus for regular commutes or as a taxi for special occasions. In bus mode there will be no people standing and 
	     those sitting will have comfortable seats. Provision will be there for comfortable entry, seating and exit of disabled people, 
	     example for those in wheelchairs the seats in the Ra can be folded and the wheelchair person sit in his or her wheelchair in that seat position.
	   </p>

	   <p>
	     Our Ra hybrid public transport vehicle will use clean fuels ( water and self-sustaining electricity generator ); will be built using sustainable structural
	     elements; will remove chaos, noise and mishaps from the roads; will bring beauty to public transport; will make the citizens engage humanly with 
	     other citizens and will enable removal of most crimes and disharmony. Result is clean and serene cities. A few hundred thousand of our Ra 
	     hovercraft-wheelcraft vehicles on Earth are lot lot better than the few billion personal vehicles which clog our cities now and create those many problems 
	     we described above.
	   </p>

	   <p>
	     The name of our hovercraft-wheelcraft vehicle, Ra, comes from ancient Egyptian mythology where Ra was their supreme god and had many forms 
	     including a cat which slays snakes. This god-being was a hybrid. Having our vehicle's name as Ra is not only another of our dedications to cats
	     but also because our vehicle is a hybrid of hovercraft and wheelcraft.
	   </p>

	   <p>
             The Ra vehicle and the Alef-A airship craft are our solutions for reversal of Climate Change in the transportation sector. Climate Change cannot be reversed
	     by stupid things like "Carbon Credits", lithium batteries, nuclear reactors and huge wind farms. The regular Climate Change discussion conference called 
	     COP Conferences are a waste of time and are optics and a wine-and-dine gathering. The activist Greta Thunberg said of the 2021 COP conference 
	     conducted in Glasgow city that "It is a greenwash" and that many of the attending national government leaders actually benefit from 
	     the profiteering companies which cause human misery and the pollutions which caused Climate Change.
	   </p>

	   <p>
             The solutions we of Kosmos Society present about transportation and other things will lead to the immediate beginning of drastic reversal of 
	     Climate Change and of course eradication of human misery.
	   </p>

	   <p>
	     Next, there is a sad fact of hunger in various places on Earth, including in cities of a million people at least, and this is a three part problem :
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
	     <span> (a). </span>
	     A technological problem via use of traditional methods of growing food in open farms which are inefficient, centralized, polluting, climate-vulnerable, 
	     pest-vulnerable and continue feudalism, poverty, profiteering and separation of human from human. Also connected is non-availibility of water in 
	     many places because farmers have either exhausted ground water due to over-use or there has been drought.
           </p>

	   <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(b).</span>
	     A social problem via growing fully useless crops or crops which should be meagrely consumed. These crops are nutritionally poor or cause indigestion and 
	     reduce the quality of life and cause cultural non-progress and non-contribution to humanity yet these crops are grown and take up a lot of expenditure 
	     of water, fertilizers, labor etc which instead could have been used for useful food. This contradiction of uselessness yet growing is because these crops hold 
	     cultural significance. Examples are rice, needless excessive use of chilli, onion, turmeric and vegetables as the main food.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
             <span>(c).</span> 
	     A social problem largely via tax on food, within-family feudalist unequal distribution of food, abandonment by family, social apathy, classism, 
	     cultural wastages of food, private profiteering by merchants and geopolitical interferences in food distribution. So many people go hungry or 
	     die of hunger despite abundance of food elsewhere and wastages of food.
	   </p>

	  <p>
	    The simple solution for hunger is not only social enlightenment but also a technological combination of bio-engineered plant-based foods and 
	    the nutritious originally animal products like given in the "Biology researches" topic in the "Our techno systems" chapter. These techno-social 
	    food productions must be done in decentralized, neighborhood-level indoor farms which have localized water generation as much as possible 
	    as well as take water from scientifically built canals and the workers do collaborative and collectivist farming. 
	    There is no need for anyone to die of hunger now in 2025 AD.
          </p>

	  <p>
	    Commentary must be made about the idiocy of eating more than a bit of chilli, whether green or red or others. 
	    There seems to be an idiotic thought in many people's minds that they must eat chillis just to show off 
	    to others that they can eat chilli, whether this is in Mexico or some Indian village. 
	    All that results in these chilli eaters is gas, running to the toilet, heat, an anti-calm angry state of mind,  
	    long-term degradation of health, social misconduct ( gas released in public settings ) and cultural wrongs and anti-progress. 
	    So, use only a bit of chilli in food for four people or five... like a very small cut of green chilli.
	  </p>

	  <p>
	    In some cultures like India, green chilli also has become part of the cultural presence of superstition... 
	    people creating a small garland of green chillis along with lemons and stringing them onto house doors  
	    and vehicles. "To bring luck, prosperity and continued life" they say. But this hasn't stopped their vehicles 
	    from being in mishaps and killing or seriously injuring the occupants and others around. 
	    Hasn't stopped the people from remaining middle-class-poor wage-slaves for generations. 
	    Hasn't created true knowledge, enlightenment and gentleness. Funny thing is that the green chilli 
	    used in this Indian superstition is not even from India but was brought by the Portuguese colonizers and 
	    settlers centuries ago and very possible that the Portuguese themselves didn't indulge in this superstition.
	  </p>

	  <p>
	    An example of the uselessness of this superstition came in June of 2025. The RCB cricket team 
	    has its base in Bangalore city in South India and most middle class people in this city are sports mad, 
	    especially cricket mad, instead of being intellectual, empathetic, gentle and productive. 
	    They wanted their fave RCB team to win in a soon-coming match and did the usual superstitious stuffs 
	    like the below-linked person stringing lemon and chilli garlands on his personal vehicle and 
	    attaching a placard in the local Kannada language declaring "This time the cup is ours" :
	    [ https://www.hindustantimes.com/trending/bengaluru-fan-wraps-car-in-nimbu-mirchi-to-ward-off-nazar-ahead-of-rcb-s-final-ipl-clash-with-pbks-101748953522418.html ].
	  </p>

	  <p>
	    Yes, the magic happened and this fan's fave RCB team won the cup and when his darling victorious RCB team came to Bangalore 
	    to get felicitated and admired there were a few hundred thousand cricket fans gathered at two points to receive them. 
	    The RCB team came into Bangalore like maharajas in luxury buses whose windows were made such that the team members could see the outside 
	    but the cheering fans lining the roads could not see the inside.
	  </p>

	  <p>
	    Stampede happened at the two venues and eleven of these fans were killed and 56 injured, some with broken legs and some fainted. 
	    So, were the "for luck and prosperity" lemon-and-chilli garlands on that cricket fan's personal vehicle responsible for this tragedy ? 
	    If so this practice must be discontinued.
	  </p>

	  <p>
	    And look at the wastage of food materials like lemon and green chilli in these superstitions and this wastage going down the agricultural process 
	    to the point of their seeds or stems being planted... all those natural resources and labor wasted by superstitions.
	  </p>

	  <p>
	    Cooking oil is another aspect deciding personal and societal growth or non-growth. Best oil to use is olive oil and perhaps argan oil 
	    though both not excessively.
	  </p>

      <p>[ To be done ] </p>

      </div>

	   <div id="finalnotes" class="section">
           <h2> 13. Final notes on free market, money and profit</h2>

	   <p>
	     This topic is started today, Christmas, the birthday of Isa ( Jesus / Yesu ), in the December of 2025 and the subjects of this topic are what 
	     Isa thought against, spoke against and acted against two thousand twenty five years ago, yet we are having to write this topic because 
	     those three evil things in the topic still prevail two thousand twenty five years later.
	   </p>

	   <p>
	     "Free market" by its very name defines immorality, apathy, cruelty and the worship of Mammon i.e. money and wealth. "Anything goes, 
	     even stupidity, genocide and destruction of our ecosystem, as long as profit comes" describes this irrational concept in simple words. 
	     Please watch the Che Guevara speech vid linked in the "Thanks" topic in the "Our company info" chapter. This speech is from 1964, 
	     done in the UN General Assembly where he includes this subject.
	   </p>
   
           <p>[ To be done ] </p>

           </div>

       </div>

       </div>
     `;
modal.style.display = 'flex';
// Attach Topics toggle event after DOM update
      setTimeout(function() {
        var toggleBtn = document.getElementById('topics-toggle');
        var linksDiv = document.getElementById('topics-links');
        if (toggleBtn && linksDiv) {
          toggleBtn.addEventListener('click', function() {
            if (linksDiv.style.display === 'none' || linksDiv.style.display === '') {
              linksDiv.style.display = 'flex';
              toggleBtn.innerHTML = 'Iskra social system - Hide topics';
            } else {
              linksDiv.style.display = 'none';
              toggleBtn.innerHTML = 'Iskra social system - Show topics';
            }
          });
          // Add event listeners to links to close topics box on click
          var navLinks = linksDiv.querySelectorAll('a');
          navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
              linksDiv.style.display = 'none';
              toggleBtn.innerHTML = 'Iskra social system - Show topics';
              // Prevent default anchor behavior
              e.preventDefault();
              // Get the target section
              var targetId = link.getAttribute('href').replace('#', '');
              var targetElem = document.getElementById(targetId);
              // Remove the hash from the URL without reloading
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
              // Scroll to the section after closing Topics box
              if (targetElem) {
                setTimeout(function() {
                  targetElem.scrollIntoView({behavior: 'smooth'});
                }, 200);
              }
            });
          });
        }
      }, 0);
      // End of modalText.innerHTML assignment
      modal.style.display = 'flex';


}  else if (chapter === 'company') {
modalText.innerHTML = `
       <div style="position:relative;padding:0;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:600px;overflow:hidden;">
          <style>
            #modalText > div::-webkit-scrollbar
 	   {
               width: 10px;
               height: 10px;
               background: #fff;
            }
	    
            #modalText > div::-webkit-scrollbar-thumb {
               background: #fff;
               border-radius: 10px;
               border: 2px solid #222;
            }
	    
            #modalText > div::-webkit-scrollbar-track
	    {
               background: #222;
               border-radius: 10px;
            }
	    
            #modalText > div
	    {
               scrollbar-width: thin;
               scrollbar-color: #fff #222;
            }	    
            
            .nav-links
	    {
               position: sticky;
               top: 0;
               background: #fff;
               padding: 10px 0 0 0;
               border-bottom: 1px solid #ddd;
               margin-bottom: 20px;
               z-index: 1000;
               display: flex;
               flex-direction: column;
               align-items: left;
            }
	    
            #topics-toggle
	    {
               margin-bottom: 10px;
              font-family: 'Poppins', sans-serif;
              font-weight: 600;
              letter-spacing: 0.5px;
              padding: 10px 30px;
              font-size: 1.1em;
              background: #000;
              color: #fff;
              border: none;
              border-radius: 25px;
              cursor: pointer;
              transition: background 0.2s, color 0.2s;
            }
	    
            #topics-toggle:hover
	    {
               background: #222;
               color: #fff;
            }
	    
            #topics-links
	    {
               display: none;
               flex-direction: column;
               align-items: left;
               gap: 1px;
               margin-bottom: 10px;
            }
	    
            #topics-links a
	    {
               color: #000;
               text-decoration: none;
               font-size: 1em;
               margin: 0;
               padding: 6px 0;
               transition: color 0.2s;
            }
	    
            #topics-links a:hover
	    {
               color: #0066cc;
            }
	    
            .scroll-content
	    {
               max-height: 500px;
               overflow-y: auto;
               padding: 0 2em 1em 2em;
            }
	    
            .section
	    {
               margin-bottom: 30px;
            }            
            
            .back-to-top
	    {
               position: fixed;
               bottom: 20px;
               right: 20px;
               background: #000;
               color: #fff;
               padding: 10px;
               border-radius: 50%;
               cursor: pointer;
               display: none;
               z-index: 1000;
            }

	    h2
	    {
               font-family: 'Poppins', sans-serif;
               color: #000;
               text-align: center;
               margin-top: 20px;
               margin-bottom: 10px;
               color: rgba(128,128,128,1);
            }

            .section p 
	    {
               font-family: 'Roboto', sans-serif;
               color: rgba(128,128,128,1);
	       line-height: 1.6;
            }

	    ul
	    {
               font-family: 'Roboto', sans-serif;
               color: rgba(128,128,128,1);               
   	       line-height: 1.6;
            }

            span
	    {
              color: rgba(128,128,128,1);
	      font-weight: bold;
            }
	    
          .profile-image
	   {
              width: 100%;
              max-width: 200px;
              height: auto;
              border-radius: 10px;
              display: block;
              margin: 0 auto 20px;
           }          

       .name 
	{
           font-size: 18px;
           color: #000;
           font-weight: bold;
           text-align: center;
           margin-top: 20px;
           margin-bottom: 10px;
	   color: rgba(128,128,128,1);
        }

       @media (max-width: 768px) 
       {
           .profile-image 
	   {
               max-width: 150px;
           }
           
           .name 
	   {
               font-size: 16px;
               color: rgba(128,128,128,1);
           }
       }
               
       @media (max-width: 480px) 
       {
           .profile-image 
	   {
               max-width: 120px;
           }
           
           .name 
	   {
               font-size: 14px;
               color: rgba(128,128,128,1);
           }
       }

       /* Alternative button styles */
       .minimal-tag 
       {
           display: inline-flex;
           align-items: center;
           gap: 8px;
           padding: 8px 16px;
           background: white;
           color: #0077b5;
           text-decoration: none;
           border-radius: 50px;
           font-weight: 500;
           font-size: 14px;
           border: 2px solid #0077b5;
           transition: all 0.3s ease;
           margin: 10px 10px;
       }

       .minimal-tag:hover 
       {
           background: #0077b5;
           color: white;
       }	    

         </style>

         <div class="nav-links">
            <button id="topics-toggle">Company info - Show topics</button>
            <div id="topics-links">
	      <a href="#founders">&nbsp;&nbsp; 01. Our founders </a>
	      <a href="#thanks">&nbsp;&nbsp; 02. Thanks </a>
	      <a href="#joinus">&nbsp;&nbsp; 03. You can join us if... </a>
	      <a href="#weoffer">&nbsp;&nbsp; 04. We offer you as a worker what no other company offers </a>
	      <a href="#bmodel">&nbsp;&nbsp; 05. Our simple business model </a>
       	      <a href="#demo">&nbsp;&nbsp; 06. First demo of our Alef-A kosmos ship </a>
              <a href="#news">&nbsp;&nbsp; 07. News </a>
	      <a href="#contact">&nbsp;&nbsp; 08. Contact info </a>
            </div>

         </div>

         <div class="scroll-content">
                  
         <div id="founders" class="section">
           <h2> 01. Our founders </h2>       

       <p class=name> Mohammed Sameer - General Coordinator</p>
       
       <div>
         <img src="assets/Sameer photo.jpeg" 
         alt="Mohammed Sameer" 
         class="profile-image">
       </div>

       <p style="margin-bottom:4px;">
         Sameer started with computer science but he now is a general researcher with interests ranging from 
         generation of electricity to organization of society, like those general researchers of old like Hasan Ibn al-Haytham, Leonardo da Vinci and 
         Jagadish Chandra Bose.
       </p>    

       <p class=name> Prof. Dr. Gajendran Chandran - Chief Advisor </p>
       
       <div>
         <img src="assets/Gajendran photo.jpeg" 
         alt="Gajendran Chandran" 
          class="profile-image">
       </div>
           
       <p style="margin-bottom:4px;"> 
         Dr. Gajendran is a veteran aerospace scientist but his interests are many -
         from philosophy to nano tech to power generation and other fields in a nuanced and 
         humanist way. He has been an advisor to Sameer for years and brings a practised, practical 
         and also system-level thinking to the organization not only about technology but the human 
        aspect too.
       </p>

       <p class=name> Prof. Dr. Siddharth Dabhade - Advisor </p>
       
       <div>
         <img src="assets/Siddharth photo.jpeg" 
          alt="Dr. Siddharth Dabhade" 
          class="profile-image">
       </div>
           
         <p style="margin-bottom:4px;"> 
           Dr. Siddharth has been a patient supporter of the organization for more than 
           two years. He joined our more little group when we didn't have this organization and our sole 
           project was the Kosmos microprocessor+OS which remains documented on the OpenCores website 
	   at this page [ opencores.org/projects/taar ]. Presently, he has been an advisor in a system-level way.
         </p>

         <p class=name> Syed - Advisor </p>

         <div>
           <img src="assets/Syed photo.jpeg" 
            alt="Syed" 
            class="profile-image">
         </div>

	 <p style="margin-bottom:4px;"> 
           Syed is a practical person but also philosophical. He has been a patient 
           supporter of the organization from the time it was thought up in early 2023 but also his discussions 
	   with Sameer about kosmik travel going back to 2007. He contributes presently to our electricity generator project, 
	   our kosmos ship projects, our robot cat project and our hovercraft-wheelcraft project.
         </p>

         <p class=name> Mahmoud Hosny - Regional Coordinator, Africa </p>

	 <div>
           <img src="assets/Mahmoud photo.png" 
             alt="Mahmoud Hosny " 
             class="profile-image">
         </div>

           <p style="margin-bottom:4px;"> 
             Mahmoud is based in Cairo and will manage liaison to the administrations and 
             the masses in the vast region that is Africa. He is a straight-talking person 
             and patient including the time it took for the organization to come to this level.
           </p>         

         <p class=name> Syed Athiq Jeelani - Advisor </p>
	 
	 <div>
           <img src="assets/Athiq photo.jpeg" 
              alt="Syed Athiq Jeelani " 
              class="profile-image">
         </div>

           <p style="margin-bottom:4px;"> 
             Athiq dabbles in various fields like power adapter design, ready-to-cook foods 
             and management of a school. Athiq is inquisitive, patient and provides a practical side to 
             things. He is our electrical expert.
           </p> 

           </div>

           <div id="thanks" class="section">
           <h2>02. Thanks</h2>

           <p>
             We thank the following people who are not part of our organization but have helped us either in person 
             or by their ideas and works we found on paper or on the internet. From our income we will contribute money and other help to these people 
	     or their descendents or their movements :
           </p>

           <p><span>&gt;&gt;</span> 
             Vikram for the logo, for the website design, for provoking the thought in us to have this Thanks topic and for reminding about water powered turbine 
	     in a discussion which hours later led to the idea of turbines powered by compressed air. Thanks to him also for provoking the idea for 
	     the topic against free market, money and profit which is in the "Our social system - Iskra" chapter.
           </p>

           <p><span>&gt;&gt;</span> 
             Apoorva JR for presenting to us an Instagram page in 2023 which contained reports on eco-friendly ways 
             of generating electricity and which led to our discovery of the "sand battery". 
             Apoorva's LInkedIn page [ https://www.linkedin.com/in/apoorvajr ]. Sadly we forgot the Insta page's name but we are thankful to that page's 
	     maintainer and also to Instagram. That Insta page spoke of the company Polar Night Energy which applied the sand battery in a real life setting 
	     despite there being no prior industry use of this method and we are thankful to this company.
           </p>

           <p><span>&gt;&gt;</span> 
             YouTube and Wikipedia in general.
	   </p>  

           <p><span>&gt;&gt;</span> 
             Robert Murray-Smith on YouTube for the idea about using a simple electro-mechanical vibrator for amplification of electricity, 
	     made using an electro-magnetic relay. This vid called "1026 The easiest inverter you will ever make" is on this page 
	     [ https://www.youtube.com/watch?v=L-vC9SvU2Lo ]. This we use in our design of the Faradn generator.
           </p>

           <p><span>&gt;&gt;</span> 
             https://en.wikipedia.org/wiki/Bellows
           </p>

           <p><span>&gt;&gt;</span> 
             Farzad Zangeneh-Nejad and Romain Fleury at the Federal Institute of Technology (
             EPFL ) in Lausanne, Switzerland, for the idea of using sound to do analog computing.
           </p>

           <p><span>&gt;&gt;</span> 
             RMIT University, Australia, for the idea that sound can be used to make electrolysis better and make use of cheaper electrode material. 
	     The article saying this is here [ https://www.power-eng.com/hydrogen/sound-waves-boost-green-hydrogen-production/# ] so 
	     we also thank the website [ power-eng.com ].
           </p>

           <p><span>&gt;&gt;</span>
             Planetary Science Division of NASA for the idea of creating an artificial magnetosphere for Red One.
           </p>

           <p><span>&gt;&gt;</span>
             Coke Studio Bangla Season One for presenting the song "Shob Lokey Koy" which is among our inspirations for our social system for the kosmos. 
             This song is in the Bengali and Hindi languages and is a celebration of two past South Asian humanitarian mystics, 
             Lalon Fakir and Kabir Das, and calls for unity of humans because they all are the waters from the
             same well except for some differences in the vessels which then contain the waters. 
             The song is available on YouTube on this page [ https://www.youtube.com/watch?v=L-arhlgPiy8 ].
           </p>

           <p><span>&gt;&gt;</span>
             The website [ constitutionofindia.net ] for the info about the discussions during the early years 
             of the design of the Indian constitution, in particular the proposals by Socialists Hasrat Mohani 
             and Brajeshwar Prasad. The proposals can be read here [ https://www.constitutionofindia.net/debates/17-oct-1949/ ].
           </p>
           
           <p><span>&gt;&gt;</span>
             Ashok on the "Nationalizer" account on [ medium.com ] for his essay about the Indian Socialist Brajeshwar Prasad 
             who spoke in favour of Socialism during the design years of the Indian constitution. The essay can be read here 
             [ https://nationalizer.medium.com/socialist-and-secular-but-not-sovereign-brajeshwar-prasad-s-amendment-to-preamble-1bb8a1e8142e ] 
	     so we also thank the website [ medium.com ].
           </p>
         
           <p><span>&gt;&gt;</span>
             Rabindranath Tagore for his essay that speaks against Nationalism. 
	     The essay can be read here [ https://mast.queensu.ca/~murty/Tagore-Nationalism-1915.pdf ] so we also thank Queen's University of Canada.
           </p>

           <p><span>&gt;&gt;</span> 
	     BR Ambedkar among other things, for saying in a 1953 BBC vid interview that the so-called Democratic Process of five-yearly elections participated 
	     by multiple political parties and producing a stream of pompously titled bureaucrats, is not actual democracy and will never produce a society 
	     which brings proper food and other reasonable material needs to the masses and will never change society from feudalism to true democracy 
	     but that change can be brought by Socialism. This rejection of the fake-democratic process of elections and stuff has been stated later by 
	     other philosphers too. BBC has carried this interview on this page [ https://www.youtube.com/watch?v=WS7P9TKDZ2k ] so we thank BBC for this rare 
	     vid.
           </p>

           <p><span>&gt;&gt;</span> 
             Che Guevara for his 1964 speech in the United Nations General Assembly, from which we take our mention of Mammon, and the YouTube channel of 
	     United Nations which carries this speech on this page [ https://www.youtube.com/watch?v=bufHojkoGtw ].
           </p>

           <p><span>&gt;&gt;</span> 
	     The media agency "The Atlantic" for this article about Yuri Gagarin's flight around Earth [ https://www.theatlantic.com/technology/archive/2011/04/yuri-gagarins-first-speech-about-his-flight-into-space/237134/ ].
           </p>

           <p><span>&gt;&gt;</span> 
             The website "Go Physics" for this collection of Yuri Gagarin's quotes [ https://thegophysics.com/yuri-gagarin-quotes/ ]
           </p>

           <p><span>&gt;&gt;</span>
             Background picture for the website is from the DeviantArt website's DreamUp AI picture generation facility.
           </p>

           <p><span>&gt;&gt;</span> 
             In general all the good thinkers of the past and present whose thoughts and works we use in our projects.
           </p>
         
           </div>

           <div id="joinus" class="section">
           <h2> 03.  You can join us if... </h2>

	   <p><span>&gt;&gt;</span> 
	     If you believe in natural intelligence, ability, dignity and experience as a human. Doesn't matter if you are a fail in school 10th class.
	   </p>

	   <p><span>&gt;&gt;</span> 
	     If your knowledge is actually useful to the industry of travelling and living in the kosmos in a democratic and non-profit way. 
	     So this discounts work types like HR, CSR and MBA-requiring positions.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you respect the natural laws including the ones we present in the "Our techno systems" chapter and "Our social system - Iskra" chapter.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you do innovative and simplifying thinking even if going against traditions, industry standards and fashions.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you have no love for feudalism and consider money as a temporary necessity for the now but which must be eventually abolished.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you desire a largely secular borderless unification of humanity on Earth and in Kosmos.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you ideally consider the cat as the most perfect animal in the kosmos, ha ha.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you consider tea as one of the main human gifts giveable to alien cultures, ha ha.	
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     If you are well-presented in clothing, grooming and talking manner. Not fake but real. 
	     Not aggressive but gentle and genuine.
	   </p>

           </div>

           <div id="weoffer" class="section">
           <h2> 04. We offer you as a worker what no other company offers </h2>

	   <p><p><span>&gt;&gt;</span> 
	     You will be at the front of progressive evolution of humanity, both social and technological.
	   </p>

           <p><p><span>&gt;&gt;</span> 
	     We won't demand from you "high education percentiles", college degrees and "20 years of experience in the corporate world". 
	     If you can work on our projects using natural intelligence and perhaps experience in the subject, 
	     or if you can help us maintain our company in other ways like security work, you join us. But this depends on your acceptance of our 
	     democratic and natural ways.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     Our company is structured as a Workers Cooperative where you will be an equal co-owner of the company and 
	     not an oppressed subordinate to some feudal boss. Please read the "Social organization of kosmonauts" topic in the "Our social system - Iskra" chapter and 
	     return to this point. That topic describes the Workers Cooperative concept.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     You will have the same equal salary as everyone else in the company and this salary 
	     will be comfortable but not an obscene amount which is waved in the face of poor people. 
	     We want you to have decency, empathy and pan-human fraternity.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     For any company formation rules about equity, our company's equity will be divided into three parts : 
	     one for the founders, the second for the investors and the third for new co-workers where the founders will dilute 
	     their equity equally so that all new and old workers have equal equity.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     For the money required to maintain the company, all workers will put an equal share from their salary into the company maintenance money pool.
	   </p>

	   <p><p><span>&gt;&gt;</span> 
	     The kosmos industry is a permanent one so with us you will be in permanent employment. We don't do fashionable and nonsense tech like 
	     quantum computing, edtech, fintech, humanoid robots and Tall Rockets with legs. We don't know what is market cap and we don't want to be 
	     a unicorn company. We are simple people and are designing real and useful technologies and social systems.
	   </p>

           </div>

           <div id="bmodel" class="section">
           <h2> 05. Our simple business model </h2>

           <p>
	     We are a non-profit design organization and our direct clients will be the space departments of national governments who will purchase the designs of 
	     our products for a reasonably cheap license fee ( one million dollars ) and build our systems in their societies as many as possible and make them available 
	     to their citizens without tax.
           </p>

	   <p>
	     Our presently in-design systems will enable a cheap, simple, safer and democratic manned space program for potentially every Earthen society by which 
	     any of your society's citizens can become kosmonauts who can travel to the Moon by 2033 and travel throughout the Solar System by 2035. 
	     And they will bring back experiences and materials from there to your societies in a pan-human, democratic way so that your societies are 
	     intellectually enriched, materially enriched and contribute to humanity within the bounds of respect for Nature and a pan-human 
	     "Liberty, Equality, Fraternity, Evolution".
	   </p>

	   <p>
	     Our one million dollar license fee is a very small fraction of what a single rich individual pays now for a single ticket to visit and stay, not on the Moon even 
	     which is 380,000 kilometers away, but just the International Space Station which is orbiting only 400 kilometers above our heads. 
	     The single person tickets presently cost at least 50 million dollars... and ours is one million dollars for an entire space program.
           </p>

           <p>
	     Also in today's terms, one million dollars is less than the license fee for a company to acquire the design of 
	     a commercial microprocessor for use in cell phones.
           </p>

           <p>
	     So, for just a million dollars our client national space departments acquire the design of our techno systems for an entire space program by which 
	     their citizens can travel and settle the entire Solar System and this in a harmonious way.
           </p>

           <p>
	     We choose not to be feudal "space trillionaires" but to be humanists working towards the unified human kosmik utopia. Our license fee of one million dollars 
	     is only for maintaining our company, us individually in a reasonable way, for further research, for contributing to good causes and 
	     for helping those whose ideas we have used as said in the "Thanks" topic above.
	   </p>

           <p>
	     About how our client governments will recoup our one million dollar license fee, it is given in the "Our social system - Iskra" chapter, 
	     topic "Social organization of kosmonauts", section (r).
	   </p>

           </div>

           <div id="demo" class="section">
           <h2> 06. First demo of our Alef-A kosmos ship </h2>

           <p>
	     The first manned flight of our Alef-A airship-type kosmos ship will be in 2030 and will take three people to Low Earth Orbit.
	   </p>

           </div>

           <div id="news" class="section">
           <h2> 07. News </h2>

          <p><span>YouTube :</span> 
	    https://youtube.com/@KosmosSociety
	  </p>

           </div>

           <div id="contact" class="section">
           <h2> 08. Contact info </h2>

	   <p><span> Phone :</span> 
	     Coming soon.
	  </p>

	  <p><span>Email :</span> 
	    [ hello@kosmossociety.space ] and [ kosmos.society.2033@gmail.com ]
	  </p>
	  
          <p><span>Physical address :</span> 
	    Presently most of us are based in Bangalore city, India, but we will base our HQ in Calcutta city ( now called Kolkata ) 
	    which is in the east side of India. This move because Calcutta is the only true city in India though it can be lot more improved.
	  </p>

	  <p><span>Talk to us in person over tea.</span> 
	  </p>	  

       </div>

       </div>
     `;
modal.style.display = 'flex';
// Attach Topics toggle event after DOM update
      setTimeout(function() {
        var toggleBtn = document.getElementById('topics-toggle');
        var linksDiv = document.getElementById('topics-links');
        if (toggleBtn && linksDiv) {
          toggleBtn.addEventListener('click', function() {
            if (linksDiv.style.display === 'none' || linksDiv.style.display === '') {
              linksDiv.style.display = 'flex';
              toggleBtn.innerHTML = 'Company info - Hide topics';
            } else {
              linksDiv.style.display = 'none';
              toggleBtn.innerHTML = 'Company info - Show topics';
            }
          });
          // Add event listeners to links to close topics box on click
          var navLinks = linksDiv.querySelectorAll('a');
          navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
              linksDiv.style.display = 'none';
              toggleBtn.innerHTML = 'Company info - Show topics';
              // Prevent default anchor behavior
              e.preventDefault();
              // Get the target section
              var targetId = link.getAttribute('href').replace('#', '');
              var targetElem = document.getElementById(targetId);
              // Remove the hash from the URL without reloading
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
              // Scroll to the section after closing Topics box
              if (targetElem) {
                setTimeout(function() {
                  targetElem.scrollIntoView({behavior: 'smooth'});
                }, 200);
              }
            });
          });
        }
      }, 0);
      // End of modalText.innerHTML assignment
      modal.style.display = 'flex';
       
}

});
});

closeModal.onclick = function() {
modal.style.display = 'none';
}

window.onclick = function(event) {
if (event.target === modal) {
modal.style.display = 'none';
}
}

