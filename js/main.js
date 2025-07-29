// Modal logic for chapter cards
const modal = document.getElementById('chapterModal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

// 04. Manifesto for the kosmos
document.querySelectorAll('.chapter-card').forEach(card => {
card.addEventListener('click', function() {
const chapter = card.getAttribute('data-chapter');
if (chapter === 'manifesto') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;font-family:Roboto,sans-serif;">
         <!-- Only left-side close button remains; right-side removed -->
         <style>
           /* Chrome, Edge, Safari */
           #modalText > div::-webkit-scrollbar {
             width: 10px;
             height: 10px;
             background: #222;
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }

            h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }
             
         </style>
         <h2> Our manifesto for the kosmos</h2>
         <div>

         <p>
         -----
         </p>

         <p>
         Table of contents :
         </p>

         <p>
         01. Introduction to this chapter.
         </p>
         
         <p>
         02. The universe and human nations on Earth.
         </p>

         <p>
         03. Natural equality in accessing space and living in space.
         </p>

         <p>
         04. Social organization in space travel and space living.
         </p>

         <p>
         05. Tea and Space.
         </p>
         
          <p>
          06. Appearance and personality of the space travellers.
         </p>

          <p>
          07. Effects of greatly increased human life.
         </p>

          <p>
          08. Family system in space.
         </p>

          <p>
          09. Sports and recreation in space.
         </p>

          <p>
          10. Human language in space.
         </p>

          <p>
          11. Education in space.
         </p>

          <p>
          12. Basis of satellite design.
         </p>

          <p>
          13. Mining in space.
         </p>

          <p>
          14. Project Mirkeen-01.
         </p>

         <p>
         15. Meetings or sightings of aliens.
         </p>
         
         <p>
         16. City design and city reconfiguration on Earth.
         </p>

        <p>
        -----
        </p>

        <h2> Introduction to this chapter</h2>
        
           <p> 
           We present a draft of a progressive pan-humanist manifesto for the kosmos 
           i.e. for all humans going and living in the universe / space and hopefully this manifesto 
           finding adoption on Earth. We want through this manifesto draft a harmonious unity of
           humankind in space, removed of all the artificial unpleasantnesses and tragedies that
           humans do or endure presently on Earth.
           </p>

           <p>
           This manifesto describes a social system for simple, harmonious and Nature-ordained organization of humans in 
           space so that groups in space operate harmoniously within themselves and with other 
           individuals or groups in space who are fellow humans from anywhere on Earth and fellow humans
           from beyond when humans settle on other worlds and in free space, starting 12 years from now ( by 2037 ) 
           when humans have at least started living on the Moon and then in few more years, 
           living in the Asteroid Belt which sits in the space between Red One and Jupiter 
           and then beyond the Asteroid Belt.
           </P>

           <p>
           This draft is not a full preparation but still substantial and we will further 
           it by discussions in progressive forums and join it with others’ drafts for this purpose. 
           Some points below are “To be done”.
           </p>

           <h2>The universe and human nations on Earth</h2>
           
           <p>
           The universe has existed forever, much before some human scientists and academics foolishly
           affixed an age to it on the basis of misguided mathematics i.e. the Big Bang Theory and now
           there are two Big Bang theories. Space has existed before human nations existed on Earth,
           in fact before Earth itself existed. The concept of Earthen Nations / Nation States
           does not exist in Nature / Kosmos / Universe / Space and comes on Earth
           from as recent as the French Revolution of the late 1700s which led to France becoming a
           Republic which was meant to become citizen-governed with natural human freedoms as
           against France previously being a typical kingdom governed by a supreme oppressive feudal lord.
           We must look at this further to understand the non-kosmos non-natural basis of human nations.
           </P>

           <p>
           [ To be done ]
           </p>

           <h2>Natural equality in accessing space and living in space</h2>
           
           <P>The current human-transport space industry is feudal where aspiring space travelers 
           have to fit either of three categories :</P> 
           
          <P style="margin-left:1em; margin-bottom:10px";> <span>(a).</span> Be associated with the 
          government. </p>
          
          <P style="margin-left:1em; margin-bottom:10px";> <span>(b).</span> Have huge monies to pay 
          for a seat to space… at least 20 million dollars. </P>
          
          <P style="margin-left:1em; margin-bottom:10px";> <span>(c).</span> Be a regular person 
          picked by the very few sponsored-trip space programs in a lottery 
           system and this does not come true for almost all. </p>

           <p>Other people simply don’t have a chance and this is unfair as it is only human social 
           constructs which are doing this preventing and not the universe through some celestial messaging 
           where the universe allows into it only the moneyed and the other unfairly privileged and this 
           celestial messaging being witnessed by the first two humans in space, 
           Yuri Gagarin and Gherman Titov and then every human traveler afterwards. The kosmos knows 
           neither money nor rank.
           </p>
                       
           <p>
           But the upcoming commercial space industry promoted by certain groups on Earth pushes feudalism 
           and commerce to space, for example the strange art of affixing pointless commercial projection 
           slogans to space like “The trillion dollar space economy” where part of that trillion will come 
           from charging huge monies to take people to space and these huge monies will go into the 
           pockets of a very few and maintain an unfair system where these very rich few will not 
           enable cheap or free space travel just so that these huge monies continue. A cycle of 
           unfairness.</p> 

           <P>The simple answer is to enable a cheaper, simpler and safer space industry which also 
           propagates true liberty, equality and progressive pan-human fraternity. We of Kosmos 
           Society will do this enabling. On Earth and in Space, manufacturers and deployers of 
           Kosmos Society’s simplified and cheaper space systems and other systems should collect 
           minimal fees or no fees for : </P>
           
           <P style="margin-left:1em; margin-bottom:10px";><span>(a).</span> Providing and 
           repairing the personal systems like our Dune Buk wearable computer. </p>
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> Transporting people. </p>
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> Selflessly providing food,
            communication, health support and rescue in space.</p> 
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(d).</span> Transporting 
           any habitation equipment in space not makeable via ISRU ( In-situ 
           Resource Utilization ). </p>
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(e).</span> Transporting 
           research equipment.</p> 
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(f).</span> Transporting any large
           reasonable leisure equipment.</p> 
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(g).</span> Transporting 
           mining equipment and mined produce in space. </p>
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(h).</span> Providing habitation 
           in space.</p> 

           <h2>Social organization in space travel and space living</h2>

           <p>The primary reasons for the exploration in space will include : </p>
           <p style="margin-left:1em; margin-bottom:10px";><span>(a).</span> Tourism. </p>
           <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> Finding new resources. </p>
           <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> Science which includes looking 
           for life and finding new homes for humans.</p> 
           
           <p>All this of course will require the effort of work groups, including for escorting tourists, and 
           this must be done it in a thoughtful, gentle and kind way where all work participants are 
           equal in effort and benefit, with no feudal boss lording over them and unjustly grabbing most 
           of the benefits of the work that had the effort of all. The purpose of the group must also be 
           achieved harmoniously. The universe is for all to benefit from, including just the simple act of 
           seeing the sights, and to acknowledge that every human is a speck in the universe, one no 
           more privileged than another in that infinite and timeless vastness. Feudalism is bad enough 
           on Earth to be carried over into space. </p>

           <p>So the organization of work groups in space should be democratic and that is easily done by 
           organizing them as Workers Cooperatives. The idea of Workers Cooperative has association 
           with the older ideas of liberty, equality and fraternity, and enables true democracy via participatory 
           democracy where every human present in the organzation participates in the continuance 
           of that organization equally and benefits from it equal to other members. A Workers Cooperative has ten 
           general outcomes :
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(a).</span> It is all the workers who directly own and manage an organization and equally divide 
           amongst themselves any money income.
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(b).</span> There is no feudal boss and no subordinate… all the workers are equal co-workers in 
           respect, right to participate in the organization’s decisions, voluntary idea giving and 
           cross-team idea giving. Any worker can call a discussion circle for a complaint, issue raising 
           or idea suggestion, and the other workers must listen and participate.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> <span>(c).</span> All involved in the organization are “co-workers” 
           and not “workers” or "employees".
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> 
          <span>(d).</span> There will be a natural tendency to not have a “boss cabin”.</p>

           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(e).</span> Worker loyalty towards the organization is high because the worker is given due respect 
           as an individual human with feelings, personality, concerns and potential.
            </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(f).</span> Every worker has to be accepting of internal critique but will have the right to defend 
           themselves. 
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(g).</span> Efficiency and production variety of the organization is greatly increased because of the 
           diversity of useful ideas, skills and experiences from the various volunteering workers.
           </p>

           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(h).</span> The collective human society composed of Workers Cooperatives, whether on Earth or 
           in space, becomes an actually developed, gentle, evolved, harmonious and prosperous 
           society. As smile-bringing as the city of Istanbul with cats everywhere.</p>

           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(i).</span> The existence of a Workers Cooperative doesn’t depend on if the economic system 
           works with money system or money has been abolished. The Workers Cooperative concept 
           is efficient in both situations. 
           </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(j).</span> The need for a workers union now becomes not necessary because the 
           company is no longer divided into bosses and workers where the workers have to agitate 
           for their rights. With the Workers Cooperative concept all the workers equally own the company 
           and there no longer are the bosses of the past. If any worker i.e. co-owner of the company has issues, 
           he or she can directly call a discussion circle.
           </p>
           
           <p> Other than Workers Cooperatives in space, there must be decentralization / 
           self-governance, gentleness, a non-corporate environment, a non-militarist environment and 
           a pan-human outlook. This also means no hierarchy and no traditional aerospace titles like 
           “Captain” and “Commander”. It also means giving every member the same salary and other 
           needs. The environment in the group should be relaxing and focused towards the purpose of 
           the group’s setting-up and not for hierarchy-induced disharmony and “making a career”. This 
           also means no separate “high class” living arrangement for some boss and no lower 
           “economy class” arrangements for others. All people will be given equally comfortable living 
           arrangements. 
           </p>

           <p>This will be as true for the spaceships as for habitations on some world.</P>

           <p>So, all work participants on one spaceship or an independent group on one planetary 
           research station or an independent group on one mining station etc are collectively called a 
           Workers Cooperative. Work will be distributed as per skill, interest and requirement. The first 
           two things are not written in stone that they can’t be acquired as time progresses. The tasks 
           can be water management, food, communication, engines, waste management, caring for 
           the tourists, understanding possible Moon landing sites, understanding an asteroid etc. 
           There will be one or more members for each task as per requirement and total group size. 
           There has to be one person who has to be the interface between the internal Workers 
           Cooperative members and also the interface of that Workers Cooperative to the outside and 
           that person will be the Coordinator.
           </p>
           
           <p>
           The Coordinator is a time-bound position decided by democratic discussion and consensus 
           within that cooperative and in accordance with Natural laws. All the workers including the Coordinator 
           can be of any naturally reasonable responsible age, whether 13 or 30 or 90... anyone as long as they make sense 
           and are willing and able to put physical or intellectual effort including being a good leader. And this responsibility of 
           “Coordinator” can rotate between the cooperative’s members as per requirement or 
           consensus. So a Workers Cooperative is democratic, enables harmony and enables more 
           focus on the group’s purpose. 
           </p>

           <p> Further, a tourist in space a few hundred thousand kilometers from Earth ( the Moon ) or a 
           few hundred million kilometers from Earth ( the Asteroid Belt ) will naturally feel deprived 
           from Earthen settings including the social aspect and the simple fact of feeling the Sun’s 
           heat on the open face and this deprivation will depress a person for a moment or more, 
           despite that tourist’s purpose of tourism. But if every person in the space efforts, including 
           the tourist, participates in the tasks by being part of the space Workers Cooperatives it will 
           keep him or her engaged and away from depression, enable fraternity and contribute to one 
           more hand in the tasks. </p>

           <p> So, humans in space will be a collection of Workers Cooperatives collaborating with each 
           other on a common and equal human level regardless of their origin nation and social station 
           on Earth and they will agree on the same ideal natural laws for humans and help each other. 
           Thus harmony in space and also harmony contributed on Earth when these people return to 
           Earth carrying their gentle experiences in the space Workers Cooperatives. </P>

           <h2 >Tea and Space</h2>

           <p> Intoxicating substances like alcohol should not be used in the inherently risks-filled 
           environment of space, including the social mistakes people will make by such consumption 
           and lead to disaster in space. Celebrations can be done with rounds of tea and biscuits. Tea 
           has been such a great multi-purpose discovery… the drink of philosophers, revolutionaries, 
           inventors, discussers, intellectual and physical laborers, lovers of taste and refinement, 
           providing energy and relief in heat, cold and rain, in the heat of the deserts and the cold of the 
           same deserts at night, in the cold of snows and the heights of the high mountains, the 
           adda tea houses of Calcutta city with the Calcuttans doing rounds of tea and discussing the 
           world… all the while the tea providing health benefits.</p>

           <p> Tea is one of the good inventions of China which got added with three additions from other 
           lands : milk in tea from Mongolia, sugar in tea from Britain and Egypt-origin biscuits. And tea 
           comes in various varieties whether in tea leaf, additional addings for taste, health and 
           experience like lemongrass, ginger and tapioca pearls, and preferences like the water-based 
           Sulaimani chai or the milk-based Assam tea or the ice tea. </p>

           <p> In space, other than the non-intoxicating, energizing and health-bringing nature of tea 
           usage, regular tea’ing also will hydrate the skin which may become dry in spaceships and 
           spacesuits and will also create solidarity because of group drinking. Tea is also a good 
           laxative including when starting the day. Further, tea leaves are a good natural fertilizer for 
           plants.
           </p>

           <p> And maybe tea grown in space may become a new variety or multiple varieties in 
           accordance with conditions in different space locations. </p>
         
           <h2>Appearance and personality of the space travellers</h2>
           
           <p> [ To be done ] </p>

           <h2> Effects of greatly increased human life</h2>
           
           <p> [ To be done ] </p>
           
           <h2> Family system in space</h2>
           
           <p> [ To be done ] </p>

           <h2>Sports and recreation in space</h2>

           <p> These should be rational, gentle, health-building, natural, humanist and contribute to 
           harmony and collaborativeness in the risks-filled environment of Space. A system better and 
           very unlike the sports and recreation systems in a lot of the Earthen world now. We consider 
           badminton, swimming, walking, floor exercises, pull-ups and light gymming ( the last three 
           only for men ) to not only be the ideal sports for Earth but also among the best ones for 
           Space though with considerations of low-gravity places like the Moon and no-gravity places 
           like the Alef-F ferry when its spin system has been turned off. </p>

           <p> Other recreations can be poetry, painting, pottery, music, writing stories and long discussions 
           over tea. </p>

           <p> And to explain these selections as being good we can look at what is bad since that 
           information is easily analyzed. </p>
           
           <p>[ To be done ] </p>
           
           <h2>Human language in space</h2>

           <p> English is the most appropriate language and will be the base language in our Frema 
           internet system but provision must be there for use of other languages but with the 
           understanding that such communications must be open and translatable and pronounceable 
           by other language speakers. </p>

           <h2>Education in space</h2> 

           <p>The purposes of education are : </p> 

          <P> <span> >> </span> To liberate oneself from any wrong, oppressive and unscientific traditional cultural 
           impositions and thus to know one’s reasonable rights as a human. </p>

           <p> <span> >> </span> To understand that as a human we must collaborate with others in local society and in 
           humanity in general and that the good of society and humanity is our good. And good acts 
           must be done not to earn points so that heaven’s door opens for us but to be genuine in 
           empathy for others. That we must be gentle, sensitive, empathetic and selfless instead of 
           sneaky, amoral and selfish.</p> 

           <p> <span> >> </span> To begin to understand the timeless and infinite universe and acknowledge our very 
           humble individual place in the grandness of the universe, thus our approach to the universe 
           must be with gentleness, sensitiveness, receptiveness and humbleness. A single medium-sized star like the Sun 
           is uncountably more powerful than any mere human who is a billionaire with ten college degrees, 40 years of experience 
           in the corporate world and very proud of his culture. The Kosmos / Universe / Space does not care for these arrogant human 
           affiliations.
           </p>

           <p> The above learnings should be our approach to space and the resulting bettering of 
           the individual and the bettering of humanity.</p>

           <p> Decades of in-person human presence in space has been in a very limited way, with most of 
           it in Low Earth Orbit and a little on the Moon. Cosmonauts have reported their in-person 
           understandings of space like they seeing flashes in their eyes even when they close their 
           eyes. Other experiences like smelling burnt smell when they are in the airlock. These 
           experiences were not proposed by academics who usually pretend to be experts of the 
           Universe despite never having stepped into the Universe even once.
           </p>

           <p>
           The Big Bang Theory confidently declares the birth of the Kosmos / Universe / Space to be 13.8 billion years ago but this is a 
           theory mainly forwarded by academia, proposed solely on the basis of mathematical equations on paper and origining 98 years ago. 
           This way these maths-as-a-religion academics are no different from astrologers.
           </p>
           
           <p>
           These academics went about lectures and conferences chanting “Big Bang Theory” for almost a hundred years 
           when until recently someone proposed a second Big Bang which "created Dark Matter". Dark Matter is 
           again another nonsensical maths-basis idea which has been around for many decades but 
           has never been observed in Nature, let alone measured. These academics don’t know how big the 
           universe is, they have never stepped into the universe, yet they confidently declare its 
           birthday to the microsecond, LOL.
           </p>
           
           <p> So to understand space / universe we must reject the current dominance of mathematics in 
           astronomy and be humble, gentle, sensitive, receptive and natural to the knowledge of 
           space / universe by actually going into space and narrating our every experience to the rest 
           of humanity. </p>
           
           <p> We must also accept the very simple idea that space / universe is timeless and infinite and 
           we don’t know what all kinds of objects are in space and what kinds of life types are in 
           Space and that these life types may not evolve from the same ecosystem conditions as on Earth. </p>

           <p> We must look at the natural, observant and non-arrogant responses of the first two human travellers to space - Yuri 
           Gagarin and Gherman Titov.</p> 

           <p> Among the statements of Cosmonaut Yuri are : </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> <span>(a).</span> “Orbiting Earth in the spaceship, I saw how beautiful our planet is. People, let us 
           preserve and increase this beauty, not destroy it!” </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> <span>(b).</span> “Rays were blazing through the atmosphere of the earth, the horizon became bright 
           orange, gradually passing into all the colors of the rainbow : from light blue to dark blue, to 
           violet and then to black. What an indescribable gamut of colors ! Just like the paintings of the 
           artist Nicholas Roerich.” </p>
           
           <p style="margin-left:1em; margin-bottom:10px";> <span>(c).</span> “The main force in man — is the power of the spirit.”. Here “Man” of course means 
           Human.</p> 
           
           <p> The most famous statement of Cosmonaut Gherman was when he visited USA in 1962 and 
           was asked by reporters how his space flight affected his understanding of life. He said 
           "Sometimes people are saying that God is out there. I was looking around attentively all day 
           but I didn't find anybody there. I saw neither angels nor God". </p>

           <p> These two people were humble and natural in their approach to space and to life. Certainly 
           not the arrogance of maths-driven academics and astrologers, nor the unthinking ordinary 
           people who accept their arrogant pronouncements without questioning because they think 
           even simple questions will make them seem foolish. However, it is the simple, “foolish” 
           questions which have benefited humanity throughout its history in its bettered social systems 
           and better technology and the presence of Human in space. </p>
           
           <p> Knowledge is bettered when it is shared freely with all, without being taxed and without demands that the 
           receiver must only be of certain artificial social classes including having two college degrees 
           compulsorily. There are some societies which have more college degree graduates presently 
           than the entire human populations of some other societies. However, the former societies 
           generally are not considered among the contributors of science and technology nor of better 
           human systems despite these societies considering a college degree as being the mark of 
           knowledge. Indeed, these societies are mere users of machines and knowledges that other 
           societies and individual people of natural thinking created over thousands of years without 
           consideration of college degrees or other kinds of artificial social separations.
           </p>
           
           <p>
           Michael Faraday is the person whose experiments in electro-magnetism and electro-chemistry have 
           led to our modern world using electrical machinery whether the lamp, the motor car, 
           the washing machine or the cell phone. And he studied only till middle school 
           in terms of the modern assembly-line degree-based education system. 
           He was not at all a college graduate, let alone one with three post-graduate diplomas 
           including from a "management" course and subsequent years of experience in the corporate world. 
           This means many from those societies which place great multi-generational emphasis on college degrees, 
           will disrespect anyone not achieving degrees, so they must stop using electrical machinery 
           because this field was forwarded by the “unschooled” Michael Faraday. 
           Stopping thus will be a principled stand. But will they ?
           </p>
           
           <p>
           [ To be done ]
           </p>
           
           <p>
           In the modern world, other than paper literature, there have been four big examples of untaxed 
           and for-all education and collaboration systems : one the internet itself, second the Open Source Computing movement, 
           third the Wikipedia and fourth the Khan Academy. These examples should be continued in the exploration and settlement of 
           space.
           </p>
           
           <p>
           Since we speak for Workers Cooperatives as the organizational method for humans 
           in space, each of the people involved in the cooperatives should be participants in 
           live-narrating their experiences in space as also later recording their experiences and 
           adding these experiences to the Frema internet blog that is produced by each Worker 
           Cooperative, and these blogs being accessible by every human in Space and on Earth. The 
           blogs will have text, voice, still pictures and videos because someone’s experience will 
           become non-limited in explanation by presenting it in different formats. And these blogs will 
           have a response system for the readers and viewers though of course the reception of these 
           informations by the readers and their responses by the readers may take small delays to 
           very large delays because of the in-space location of the blog producers and their duties 
           and other activities. The one-way communication time itself may be from about a second ( 
           the Moon ) to 13 minutes ( Red One ) to many many hours, and these delays just within the 
           Solar System.
           </p>         

           <p>
           [ To be done ]
           </p>
           
           <h2>Basis of satellite design</h2>
           
           <p> There should be no design of needless nano-satellites and larger satellites that are currently 
           built by every second engineering college and launched into Earth orbit by misguided launch 
           organizations and cumulatively make Earth orbit dangerous for humans to travel in - an 
           unnecessary situation brought about by profit-mindedness, competition in education, 
           unscientific thinking and avoidable ultranational posturing.
           </p>
           
           <p>
           On the contrary, satellites around Earth or other worlds or in open space should be few and larger trackable systems which 
           can be repaired in orbit or in place or retrieved for recycling. Secondly, all new satellites 
           should be managed by a collective human committee. We of Kosmos Society will keep this 
           as a necessary element when designing our Frema space-capable internet system. We will 
           also design systems that contribute to clearing up the current space debris around Earth. 
           Please read the section about Serf satellite in the “Techno projects” chapter on this website.
           </p>
           
           <h2>Mining in space</h2>
           
           <p> Space belongs to no single human nation state and certainly to no feudal corporation. 
           Space belongs to all humankind in a collective sense and no nation state can endanger other humans by placing weapons of 
           mass destruction in open space or around space bodies nor can a nation state exclusively 
           claim space objects for taking resources ( say even from a star like the Sun ). Similar is the 
           agreement undertaken at UNOOSA ( United Nations Office for Outer Space Affairs ) 
           which is a department of the UN. Though the UN has failed to prevent invasions, needless conflicts, genocides and subversions 
           since its inception in 1945 and has served only as a decoration, very much not uniting nations despite its name, 
           its UNOOSA department at least makes sense.</p> 
           
           <p> In space no one should be a Scrooge McDuck i.e. not greedily see space as yet another 
           natural resource to do selfish profiteering from, to the exclusion of other humans and to the 
           exploitation of the workers working for that corporation in the dangers of space and to the 
           consequent spoiling of Nature, but instead seeing space resources as the means to bring easy material 
           collective enrichment of every human on Earth and beyond Earth on an equal basis, where all humans are 
           collectively prosperous. It then also follows the necessity that national governments on Earth 
           will participate in such a democratic pan-humanist effort.</p>                

           <h2>Project Mirkeen-01</h2>

           <p> Project Mirkeen-01 will be our effort in building a humanity-uniting progressive research base 
           on the Moon ( Earth's moon ), having the name “Mirkeen-01” and to be built beginning in 2036. </p>

           <p> Presently, Artemis Accords and ILRS ( International Lunar Research Station ) are two 
           projects for the near-future construction of bases and other infrastructure on the Moon and 
           includes the space vehicles needed to carry humans and luggage between Earth and the 
           Moon towards the construction of the bases and during their operation. Artemis Accords is 
           led by the USA government and the ILRS is led by the governments of China and Russia, 
           and these three governments have needlessly extended to the Moon their disharmony-filled 
           Earthen bloc politics when instead they should have proposed a pan-human, collective Moon 
           Base effort. So we of Kosmos Society propose a third way… sometimes there is a third way 
           as nicely put in the slogan of the World Social Forum - "Another world is possible". We call 
           this third way as “Project Mirkeen-01".</p>

           <p> “Mirkeen” is a combination of “Mir” and “Keen”. “Mir” means Peace in the Russian language 
           and also World. “Keen” is the main city in the Dune story. Our project involves building a 
           separate base on the Moon called Mirkeen-01, separate to Artemis Accords and ILRS, in the 
           following way : </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(a). </span>Bring together private citizens 
           from Earth who believe in natural human beliefs including pan-human fraternity and 
           want to settle on the Moon whether semi-permanently or with regular visits to Earth. 
           The participating citizens of Earth can be from The Global South, from pan-humanist private organizations 
           from anywhere and any other pan-humanist individual citizens of humanity.</p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> With all this brought-together “snapshot of humanity” 
           we begin to build the Mirkeen-01 base on the Moon starting 2036, using our to-Moon transport means
           ( our-designed Alef-A airship-spaceships manufactured by partner governments ) and our 
           other technologies and the technologies of other partner pan-humanist organizations with 
           common protocols. The construction workers will base themselves in the Alef-As until the 
           base is built. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> We will site the Mirkeen-01 base underground 
           in a place which will be in line-of-sight with Earth but not far from the Moon's Far Side. 
           These criteria are for safety from space rocks and radiation, to be in constant communication with Earth 
           and to sally out to the Far Side at will to learn deep-space operations as well as to obtain water from the possible water ice 
           there and possibly from Moon soil. There will be at least one communications relay satellite in the Moon's orbit above Far 
           Side to connect to a few relay satellites above Earth with these relay satellites being 
           operated by our partner organizations.</p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(d).</span> The Mirkeen-01 base will be designed to be partly self-sufficient food-wise, 
           in water, in production of clothing, computers, ground vehicles etc but be extendible for meeting with 
           future self-sufficiency situations. The electricity will be decentralized and will use our safe, 
           self-sustaining, modular and easily repairable Faradn generators. </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(e).</span> The construction materials for the Mirkeen-01 base, ground vehicles etc 
           will be partly materials carried from Earth in our Alef-A airship-spaceships and partly local materials as 
           per application ( ISRU - In Situ Resource Utilization ). The ground vehicles will be our Ra-K 
           vehicles.</p>

           <p style="margin-left:1em; margin-bottom:10px";> <span>(f).</span> The social organization system of the Mirkeen-01 base will be the points from the rest of 
           our proposed “Manifesto for the kosmos". </p>

           <p style="margin-left:1em; margin-bottom:10px";><span>(g).</span> The Mirkeen-01 base will be the first very advanced society 
           which won’t have money, tax and feudalism. The true wealth of a society is not in the money, mansions and luxury 
           motorcars held by a few privileged. The true wealth is the potential and the positive ideas and works of the citizens 
           and these can exist without money. In fact the potential of a society is eroded by the presence of money because 
           so many people have potential but when they get socially excluded through the various aspects of money 
           they don’t get the opportunity to realize their potential and their society does not get to benefit. 
           This realization extends to all of humanity. </p>
           
           <p style="margin-left:1em; margin-bottom:10px";><span>(h).</span> For the time being the Mirkeen-01 base can engage in commercial activities 
           to sustain itself other than getting support from Kosmos Society and its partners on Earth. This 
           commerce will be in accordance with our manifesto for the kosmos. The commerce 
           can be about Moon-available minerals needed on Earth ( iron, silicon etc ) or on others’ 
           space stations around Earth; the commerce can be about those produced materials and 
           services which benefit from the low-gravity and vacuum conditions on the Moon; the 
           commerce can be tourism on the Moon; etc.</p> 

           <p style="margin-left:1em; margin-bottom:10px";><span>(i).</span> The Mirkeen-01 base can 
           also have guests from the Artemis Accords base and the ILRS base. All human-spirited gentle people 
           will be welcomed with tea and biscuits. </p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(j).</span> The Mirkeen-01 base will serve 
            as a store for desirable biological material and technological recipes so that if Earth is threatened 
            by natural events ( asteroids, comets, big solar flares, pandemics, super volcanoes etc ) 
            or unfortunately done human-made events ( global war etc ), advanced human life and other desirable lifeforms 
            on Earth ( like plants, cats, fish, birds, deer etc ) can recover and thrive. This arrangement 
            will supplement the Svalbard Global Seed Vault.
             </p>

             <p style="margin-left:1em; margin-bottom:10px";><span>(k).</span> The Mirkeen-01 base will also serve 
             as an example to replicate its techno systems and social system on other worlds like Red One 
             and Red One's moons and the Asteroid Belt. Each new such base will be named Mirkeen but with 
             increasing numbers like 02, 05, 20 and going into hexadecimal numbers like 0A, 4C and FA.
             </p>

<h2> Meetings or sightings of aliens</h2>
           
           <p>It is not known what kinds of alien life we will encounter, whether on Red One or on Europa 
           or beyond the Solar System, whether in the form of bacteria or as plants or as more 
           intelligent animals or something else. It is not known if they have been communicating with 
           us or with any other lifeforms in the infinite universe. Some humans say we must actively 
           find them, some say it is dangerous to try communicating with other lifeforms because they 
           may seek us out to wipe us out. But advancement is of course seeking them and we must be open 
           to the types of life we may find and the different ecological situations on their worlds,
           not limiting our understanding of space lifes to the ecological situations on Earth.
           </p>

           <p>
           Actually humans don't even know so much of life forms on Earth including in the seas. 
           For example, the jaguar cats of the Amazon forests hunt crocodiles for food but this was rarely
           recorded on camera, perhaps never, until 2013 when photographer Kedar Hippalgaonkar along with his wife 
           Parul, recorded a jaguar locally named Mick Jaguar hunting a croc in a river in Brazil's 
           Pantanal wetlands. Kedar's photos went viral on the internet. And only recently has it been researched 
           how octopuses collaborate with certain types of fishes to hunt other fishes. So, as we seek lifes beyond Earth 
           we must not have preconceived notions and set academic dictations on where we will find these lifes and how they will be.
           </p>
           
           <p>
           And if we seek them we must of course ideally have collective human prosperity, collective 
           harmony, gentleness, sensitiveness, empathy and intelligent consensus as that will present 
           our best unified side to any other intelligent lifeforms and that will come by agreeing on 
           sensible manifestos like our manifesto for the kosmos.
           </p>
           
           <p>There is a wonderful story written and posted on LinkedIn by Don Michael Feeney called 
           “The Interplanetary Civilian : A Novella of Mars and Memory”. This story speaks of the 
           building of the first human settlements in space in terms of technologies and social systems 
           including pan-human development, decentralized governance, the first human baby born in 
           space, an artificial intelligence included with empathy and learning from unprogrammed space events,
           and a very different kind of alien encounter. This story prepares us to look for intelligent lifeforms by being open-minded as 
           to their type and their reaction to us and our reaction to them. This is the link to the story [  <a href=" https://www.linkedin.com/pulse/interplanetary-civilian-novella-mars-memory-don-michael-feeney-676nf " target="_blank" style="color:#0000FF;">https://www.linkedin.com/pulse/interplanetary-civilian-novella-mars-memory-don-michael-fee
           ney-676nf </a> ].
           </p>
          
           <p>
           While looking for alien life or encountering them by chance, we must acknowledge the 
           general idea that ultimately we and every kind of life origined within dying stars and maybe 
           within the dust around stars and maybe the gas clouds in free space, so in a sense 
           pan-universe fraternity.
           </p>
          
           <p>
           It is said that space-origined lifes were carried through space in various forms like spores, 
           viruses, eggs etc and seeded various worlds including ours to various levels and then 
           evolutionary steps took over in many of those worlds depending on the conditions of those 
           worlds. This idea is called Panspermia. For example, it is said that the octopus and squid in 
           Earth’s seas are not from Earth but from space, their eggs carried within ice rocks and then 
           released on Earth when the ice rocks fell into the seas here. This is a good read about this 
           topic [ <a href=" https://blog.padi.com/facts-about-octopuses-that-prove-theyre-aliens/ target="_blank" style="color:#0000FF;"> https://blog.padi.com/facts-about-octopuses-that-prove-theyre-aliens/"</a> ]. 
           </p>           
          
           <p> And who knows, we may find that cats are indeed aliens as goes the internet legend, LOL.</p>
        
           <h2> City design and city reconfiguration on Earth</h2>
           
           <p>The space experiences including the Mirkeen-01 base and our Space machines will provide 
           derivations for city design for Earth and its transportation. This effort will consist of designing 
           large and small cities which are aesthetic; clean; scientifically-built; citizen-managed through participatory democracy 
           ( which is true democracy ) by using the concept of Workers Cooperatives; humanist; largely food-wise self-sufficient;
           largely employment-wise self-sufficient; gentle. These new cities will take the pressure off current chaotic cities and 
           also bring reasonable city culture to rural people because generally great ideas, discussions and developments happen in the cities. 
           The public transportation system in these new cities will be built around our Ra-E buses, bicycle lanes and footpaths. 
           The only personal vehicles allowed will be pedal-only bicycles. The gentleness in these cities will also come from 
           creating a safe and comfy environment for cats to prosper. </p>

           <p>
           First here we will speak of intra-city and inter-city public transportation in detail.
           </p>
          
           <p>
           We will make a derivation of our Ra-K vehicle for Earthen public transportation in the form of 
           a 15-passenger bus called Ra-E which can be used for full capacity mass public transport or 
           as a taxi for people going for special occasions. The Earthen Ra-E will normally use 
           hovercraft mode on the current roads and other paths and switch to wheelcraft mode and 
           aircraft mode when needed… for example, travel on mountain roads is dangerous in 
           hovercraft mode so wheels are needed. Traveling between cities can be done by using the 
           aircraft mode. These Ra-E vehicles will be capable of being the sole means of mass public 
           transport in cities and other habitations on Earth, replacing most current personal vehicles 
           except for the pedal bicycle.
           </p>

           <p>
           Presently, the few billion motorized personal vehicles on Earth are greatly the cause of all 
           kinds of needless pollution, noise, mishaps, crimes, Climate Change, social inequality, 
           disharmony and unsightliness. Many governments have tried to resolve this problem within 
           their countries or cities by taking half-steps like “Odd, even formula” ( allow on road the 
           vehicles with odd numbered number plates one day and even numbered the next day ) and 
           building more flyovers and metro lines. But these governments have not considered the very 
           simple fact that road traffic problems exist because of what causes the traffic - vehicles… in 
           particular personal vehicles.
           </p>

           <p>
           About road mishaps, in India every year there are about 400,000 mishaps out of which 
           about 150,000 people die and countless are maimed. These mishaps are mostly caused by 
           presence of personal motor vehicles. In USA there are at least 40,000 people dying in these mishaps. 
           In many other countries too, similar situation. This is genocide every year, caused by the personal vehicles industry.
           </p>

           <p>
           About Climate Change, there are regular COP summits of world leaders to supposedly discuss 
           Climate Change but these are mainly wine and dine events with vague promises of reduction of Climate Change 
           instead of discussion about immediate beginning of reversal of Climate Change. 
           The activist Greta Thunberg noted about the COP26 conference in Glasgow in 2021 
           that it was a failure and a "Greenwash" and that many of the participating leaders 
           profit from the destruction of Earth's ecosystem. The simple realization is that the biggest culprit 
           which caused Climate Change is the personal motor vehicles industry but the COP conferences don't address this.
           </p>

           <p>
           Building flyovers in cities has only made the unthinking public to purchase even more personal vehicles 
           to the extent that many families have at least two vehicles for no other reason than to display their 
           middle class new-pseudo-rich wealth with the result being that in some cities there are now at least 
           five million personal motor vehicles. Putting metro lines has also not caused the public to 
           stop using their personal vehicles and take personal responsibility to contribute to create serenity, cleanliness, 
           much reduced pollution and remove social inequality in their cities.
           </p>
           
           <p>
           Additionally, the metro lines have only led to narrowed roads leading to funnel effect on the roads 
           and thus chaos and of course contributing to more pollution because of the production of cement, iron and other materials 
           needed in the construction of the metro infrastructure, added with the petro fuel pollution because of the 
           vehicles involved in the construction of the metro infrastructure. Thousands of personal vehicles 
           continue to be purchased every day in the cities with metro lines. Flyovers and metro lines 
           are problems which add to the existing problem caused by personal vehicles.
           </p>

           <p>
           City corporations installing expensive “artificial intelligence” systems to control traffic lights will also never solve the problem 
           because the AI traffic lights will not make the millions of traffic-causing personal vehicles vanish. These AI traffic control systems 
           will only help the profiteering corporations who have convinced the city corporations 
           to purchase their useless systems.
           </p>

           <p>               
           Further problems are the disharmony and unsightliness caused by personal vehicles parked 
           on roads in residential areas and public areas. Residents have to engage in quarrels with 
           personal vehicle owners who park their vehicles in front of someone’s house gate or these 
           vehicles creating obstruction on the roads and the vehicles parked on footpaths thus 
           blocking citizens from using the footpaths, leading to potential mishaps for the citizens 
           having to walk on the road and getting hit by vehicles coming from front or back. Personal 
           vehicles also clog public areas whether by being parked haphazardly in front of shops or 
           other public establishments or in squares or just clogging the roads whether they are parked 
           or running.
           </p>
           
           <p>
           In many societies the citizens using personal vehicles use the horn needlessly as if the vehicles 
           in front will take off like aeroplanes on hearing the horn from behind.
           </p>

           <p>
           A great problem is many people, especially misguided males, purchasing big and noisy personal vehicles including 
           both cars and motorcycles. There are some motorcycles which make very loud and 
           heart-piercing thumping sounds as they pass by people, terrorizing those people and possibly causing 
           health problems to those people. The motorcycle has been one of humanity's most idiotic inventions, 
           like the lithium-ion battery and of course money. The motorcycle is a danger to the riders and to those it passes by. 
           It is easy to understand that such loud-thump motorcycle owners want to intimidate those they pass by, 
           especially with the modern fashion of such riders adopting an aggressive look. 
           This situation is unacceptable in any society which desires serenity and harmony.
           </p>

           <p>
           In many cases these riders want to appear "tough and manly" because in their real life 
           they will be wage slaves in some feudal corporation, not daring to talk back to their oppressive bosses 
           much less willing to help their co-worker in the next workstation who is being oppressed 
           by the company management. In other cases such motorcycle riders are socially powerful 
           in the local context and their big and loud motorcycle, sometimes ridden with dark glasses, 
           is meant to instill artificial respect in the masses being passed by. Some other men who ride 
           these loud-thumpers are decent people but just caught up by the propaganda surrounding such vehicles.
           </p>

           <p>
           Then there is the unfortunate situation of misguided youth filling into big cars 
           like the SUVs and driving out in convoys with the youth hanging out of the windows and 
           shouting and making themselves a nuisance. Many times these convoys create danger of 
           mishaps for themselves and for the others on the road. These youth should realize 
           that they are being anti-social and so cringey.
           </p>

           <p>
           Then is the modern fashion of the new-pseudo-rich middle class in some societies 
           going on long motorcycle trips including to serene and pristine nature spots and 
           creating disharmony and pollution there. Sometimes there is an entire gang of such 
           motorcycle trippers. An unfortunate effect is some women riding these heavy long-trip motorcycles 
           where in their misguided understanding they have achieved gender emancipation by riding 
           these heavy motorcycles on long trips because only men used to do this earlier. 
           However, not only should men not ride these cringey and dangerous heavy motorcycles 
           but when these women return from their heavy-motorcycle riding trips they return to societies 
           which remain unchanged for them as women. Additionally, these women lose their feminineness by riding 
           these heavy motorcycles.
           </p>

           <p>
           There is also the sad situation of the middle class and the rich enclosing themselves 
           in air-conditioned cars and daily going to their feudal workplaces, ignoring the homeless and 
           the hungry people so clearly sitting on the footpaths, under bridges and in abandoned bus stops, 
           having to live in the open under the elements, the pollution and the chaos. The car people 
           never think of parking their cars to get out and give a hundred dollars so that that homeless person 
           can eat good food at least for the next two days. And when a child of five, living in poverty, 
           comes up to these car-enclosed people to sell pens or flowers, the car people may have extra money 
           which they can freely give to the seller child to help him but most times the car people roll up their 
           window and cruelly abandon that child.
           </p>

           <p>
           Also is needless the obscene display of newly acquired wealth by celebs in form of 
           expensive personal motorcycles and sports cars. The contradiction of a celeb in Bombay cruising 
           in a four crore rupees flashy orange open-top sports car, wearing huge and expensive dark glasses, 
           passing by five-year-old boys and girls struggling to earn 50 rupees a day by selling 
           flowers, pens and washing the windscreen of the same four crore rupees sports car, 
           and its newly-rich celeb owner waving away those boys and girls in irritation. Also, this expensive 
           car is just a personal road vehicle, not a spaceship which can take 100 people to Pluto, 
           and it is not a survivable vehicle for its celeb owner in case it gets into a road mishap, 
           so there should be no allure and aspiration attached to it, especially if it 
           separates human from human through class system and doesn't provide safety to its owner 
           and other riders in case of mishap and becomes a very expensive piece of twisted metal 
           and expensive flames.
           </p>

           <p>
           Another sad modern phenomenon is of delivery boys and delivery girls for e-shops where 
           these delivery people are forced by poverty to ride two-wheelers to deliver the packages 
           through sun, rain, cold, pollution and dangerous traffic many times a day, many times without helmet, 
           many times without protective clothing against the weather and not at all protective clothing 
           for two-wheelers, many times they earn a pittance, some times deliver to rude or arrogant customers, 
           some times fall prey to armed robbery, some times have to break their legs because of jumping a building storey 
           to escape a customer's attacking dog, some times beg the customers for five-star ratings because 
           these e-shops provide the meagre incentive based on those ratings. While this whole system has to be changed, 
           it must be noted that the billion-dollar "unicorn" e-shop startup companies do not even consider providing 
           safer and covered company four-wheelers to their own delivery people who are the ones to bring 
           income to the company, and the poor delivery people have to resort to using the dangerous personal two-wheelers.
           </p>

           <p>
           Also must be noted that in the cities especially in the recent 20 years the thousands of students and the millions of workers 
           get transported daily to and from their schools, colleges and offices by personal vehicles, whether self-driven or 
           driven by parents or colleagues. This adds to millions of personal vehicles on the roads at least 
           twice a day and the times these vehicles clog the roads are known as "peak traffic hours". This situation happens 
           because the public transporation system is very inadequate in numbers and and frequency. There is no rational reason 
           the students and workers should not take public transport, yet they take personal vehicles but not only because of 
           inadequate public transport system but also because of the misguided idea that a person owning at least one 
           personal vehicle is someone respectworthy who is superior to the poor person having to pedal a 
           bicycle or even walk long distances.
           </p>

           <p>
           All these experiences caused by personal vehicles directly and indirectly, 
           render the society full of chaos, apathy, cruelty, crime, mishaps, injustice, inequality, mishealth, disharmony, 
           competition, pollution, dirtiness, unsightliness and the society's unproductiveness and non-progress for decades... 
           in other words, dystopia.
           </p>
          
           <p> But these are artificial and avoidable problems so they can be solved, at least starting with 
           acknowledging that part of these problems exist because of the existence of personal vehicles 
           and will be solved with the simple act of abolishing personal vehicles with the exception of the simple pedal bicycle. 
           Sometimes the problems are social so the solutions must be social but also must be supplemented with 
           technological solutions.
           </p>
           
           <p>
           The act of abolishing personal vehicles is social and our organization 
           will provide the technological solution to supplement this social act. So the few billion personal vehicles 
           across Earth that are abolished must be replaced with a few hundred thousand public mass transport vehicles 
           which are not only cheaper to build, not only provide a universal solution, not only are aesthetic but also are 
           electric in an eco-friendly way to enable a sustainable and social-equality-bringing public transportation mechanism 
           all over Earth.
           </p>
           
           <p>
           Our solution is our Ra-E bus which is a hybrid vehicle of hovercraft-wheelcraft-aircraft type, 
           deriving from our designed-for-space Ra-K vehicle, and each Ra-E will carry 15 passengers and a few hundred thousand 
           of our Ra-E buses combined all over Earth will resolve all those above listed transportation-related direct problems 
           and indirect problems.
           </p>

           <p>
           In regular intra-city travel the Ra-E buses will use hovercraft mode to travel 
           on the current roads but switching to wheelcraft mode on hilly roads. For inter-city travel 
           the Ra-E buses will turn on aircraft mode and follow the current highways or 
           travel above open land. All this travel of the Ra-E buses will be guided by 
           control centers and vehicle-to-vehicle communications ( v2v ) between the Ra-Es.
           </p>

           <p> Another advantage of Ra-E buses will be preventing the need to build a large number of 
           bridges across rivers in cities because with just the presence of a small ramp on the 
           riverside these public-carrying Ra-E craft in hovercraft mode can smoothly transit from land 
           to river and the reverse, not needing most bridges which mainly carry wheeled vehicles. A 
           further advantage in using hovercraft mode is enabling smooth public transport in 
           badly-designed cities which face yearly flooding. And when needed these Ra-E vehicles can 
           turn aircraft mode on and travel short distances by air within cities but not so much that they 
           become an eyesore, noisy nuisances and privacy destroyers by traveling over houses and other
           places.
           </p>

           <p>
           The Ra-E bus platform can also be made into other kinds of vehicles like ambulance, public 
           security vehicle, garbage collection vehicle, packages delivery vehicle, etc. Better, bigger 
           and universal-use versions of the "Spinner" flying police cars in the beautiful 1982 film Blade Runner 
           where these cars fly through future Los Angeles city of 2019. These cars can do VTOL and drive on the ground too. 
           We must of course negate the dystopia of that future Los Angeles with its tall buildings, 
           synthetically-grown biologically-enhanced slave humans, industrial towers sending huge fires into the night sky, 
           congested markets and perpetual rain probably because of pollution-induced localized Climate Change. Below are links to 
           screenshots from Blade Runner with the Spinner flying cars :
           </p>

           <p>
           <a href="https://scpr.brightspotcdn.com/dims4/default/adf950e/2147483647/strip/true/crop/730x489+0+0/resize/1760x1178!/format/webp/quality/90/?url=http%3A%2F%2Fscpr-brightspot.s3.us-west-2.amazonaws.com%2Flegacy%2Fi%2F65fa0fe81e1bee7f3ed280338d8ce9f2%2F5dc09412c92b3500089d2e61-eight.jpg" target="_blank" style="color:#0000FF;">Photo 1</a> from 
           <a href="https://laist.com/news/entertainment/blade-runners-2019-los-angeles-then-now-future-past" target="_blank" style="color:#0000FF;">this article</a>.
           </p>

           <p>
           <a href="https://ichef.bbci.co.uk/news/800/cpsprodpb/12E7E/production/_109483477_c1045498-a109-42a8-b6fd-6ccb2e959d37.png.webp" target="_blank" style="color:#0000FF;">Photo 2</a> from 
           <a href="https://www.bbc.com/news/technology-50247479" target="_blank" style="color:#0000FF;">this article</a>.
           </p>

           <p>
           <a href="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/blade-runner-spinner-pic-1.jpg?q=50&fit=crop&w=825&dpr=1.5" target="_blank" style="color:#0000FF;">Photo 3</a> from 
           <a href="https://screenrant.com/blade-runner-movie-mistakes-goofs/" target="_blank" style="color:#0000FF;">this article</a>.
           </p>

           <p>
           One memorable line in that so-nice film is in the end, said by the dying villain-hero 
           Roy Batty - "Memories lost in time, like tears in rain".
           </p>
           
           <p>
           We of Kosmos Society will help build better Earthen cities than that dystopian Los Angeles of 2019 
           and the self-sufficiency of these cities, filled with people of scientific temper, 
           will prevent tens of thousands of needless out-of-city daily travellers, or even a few hundred thousand. 
           It will then be very few people travelling beyond their cities on a daily basis 
           and these few people will be easily able to travel in our Ra-E buses in aircraft mode. 
           This lesser daily out-of-city travel will also contribute to serene Earthen societies.
           </p>
           
           <p>[ To be done ] </p> 
                      
         </div>
       </div>
     `;
modal.style.display = 'flex';

// 07. Why you can contact us
} else if (chapter === 'whycontactus') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }

           h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

         </style>
         
         <h2>Why you can contact us - Table of contents</h2>
         <div style="color:#FFFFc5;font-size:1.1em;">
           
           <p><span>&gt;&gt;</span> 
           If you want to invest funds in us.
           </p>
           
           <p><span>&gt;&gt;</span> 
           If you are a government space department wanting to look at our prototypes 
           and purchase license for our products.
           </p>

           <p><span>&gt;&gt;</span> 
           If you are an organization which wants to collaborate with us.
           </p>
           
           <p><span>&gt;&gt;</span> 
           If you are a journalist.
           </p>
           
           <p><span>&gt;&gt;</span> 
           If you want to become our co-worker.
           </p>
           
           <h2>Info below in detail</h2>
           
           <h2>Info for investors</h2> 
           
           <p>
           You can be a government or private investor, investing money in us 
           so that we will be able to produce our prototypes and license them out 
           to governments. Your return on investment will be share from our license fee 
           we ask from the manufacturer governments. Once you invest in us for the first time 
           your return on investment will be from the deals with the many governments on Earth. 
           The industry of space travel is a permanent one, involving sciences and products 
           of different kinds, and you will make profit with us as there are more than 100 countries 
           whose governments can be approached to license our designs to them 
           and this situation will exist as long as the system of money remains.
           </p>

           <p>
           Your return on investment will also be the satisfaction of helping enable 
           an evolved space industry and the evolved collective human society 
           which no reasonable person can disagree with.
           </p>
           
           <p>
           But we are not yet ready for licensing out as we are just starting out as a formal company 
           and still designing most of our our products in detail. Presently we are engaging 
           with a manufacturer to have our Faradn self-sustaining compact electricity generator prototyped. 
           Once this generator is developed as a prototype we will present it on our YouTube channel 
           and also to the press and we will approach you or you can approach us.
           </p>

           <h2>Info for government space departments</h2>

           <p>
           We are just starting out formally but in the coming five to six years we will be able to 
           license out to you the package of an entire human space program with all its associated systems 
           at a reasonably cheap license fee. We will provide you the means to create a cheap and simple human space program 
           so that potentially every citizen of yours can go to space and live in space 
           and you can charge them minimal fees or ideally no fees. You can in five to six year 
           contact us to watch the demonstrations of our prototypes.
           </p>
           
           <p>
           Our license fee includes product designs, engineering details, training, permanent on-site and telecom help 
           by our company co-workers and continued development by us to improve our products. 
           </p>
           
           <p>
           Because space technology involves sciences of all kinds, our systems will also help 
           evolve your Earthen nation to become a highly advanced society not only technologically 
           but socially a cleaner, harmonious, serene, equal, just and collectively prosperous society 
           which contributes to collective human evolution.
           </p>
           
           <p>
           Presently we are still designing most of our our products in detail. We are engaging 
           with a manufacturer to have our Faradn self-sustaining compact electricity 
           generator prototyped.
           </p>

           <h2>Info for organizational collaborators</h2>
           
           <p>
           Collaborate with us, whether for technological collaboration or to become our equipment supplier. 
           Have a read of our other pages and inform us how you can help us or what you can supply to us.
           </p>
           
           <h2>Info for journalists</h2>

           <p>
           Contact us if you are a journalist curious about our simplified and radical approach to take 
           potentially any human to space, through space and enable their safe and fulfilling life in space, 
           all this in a cheap and democratic way. And also our systems contributing to evolution 
           of human societies on Earth including reversal of Climate Change.
           </p>
           
           <h2>You as our co-worker</h2> 

           <p style="margin-bottom:10px;"> The industry of space travel and space living involves science of 
           every reasonable kind - from computing to biology to materials to chemistry to many other things, 
           except for sciences with no real basis in a simplified, non-trend-following, democracy-oriented 
           and truly humanity-contributing organization, for examples teams for HR, accounting and 
           "Corporate Social Responsibility". When you join us your collaboration with us will be on the basis of 
           natural social equality and natural intelligence. We look for people ideally with the following attributes :
           </p> 

           <p style="margin-bottom:10px;"> <span> >> </span> You can be a school 10th class fail but if you have ideas, knowledge, willingness to work 
           and maybe experience in tinkering and other areas then most welcome. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> You do innovative and simplifying thinking even if going against traditions, industry 
           standards and fashions. </p> 

          <p style="margin-bottom:10px;"> <span> >> </span> You are simple, gentle 
          and not given to spouting corporate buzzwords. </p>

          <p style="margin-bottom:10px;"> <span> >> </span> You have no love for money and 
          feudalism. </p>

          <p style="margin-bottom:10px;"> <span> >> </span> You desire a largely secular 
           borderless unification of humanity on Earth and in Space. </p>

          <p style="margin-bottom:10px;"> <span> >> </span> You consider the cat as the 
          most perfect animal in the universe, ha ha. </p>

          <p style="margin-bottom:10px;"> <span> >> </span> You consider tea as one of the
           main human gifts giveable to alien cultures, ha ha. </p>

          <p style="margin-bottom:10px;"> We are not a typical profiteering and feudalist corporate organization which works on 
           fashionable and senseless technologies and uses senseless corporate lingo in every 
           sentence ( “verticals”, “market fit”, “cost to company”, “we are letting you go”, “due diligence”, 
           "revenue guidance", "state of the art" etc ). We are a techno-social organization set up to evolve humanity in multiple senses 
           through the far far future and that includes our co-workers being allowed to attain their fullest potential and this in a democratic way. 
           “Liberty, Equality, Fraternity” is after all one of our credos. So our company-internal organization of people 
           employs the democratic concept of Workers Cooperative which is described in the “Manifesto for the kosmos" chapter on this website 
           in the section "Social organization in space travel and space living". Please read that and return to 
           this point.
           </p>

           <p>
           Additionally in our company :
           </p>

           <p style="margin-bottom:10px;"> <span> >> </span> For the sake of current company formation rules the company equity is divided in three 
           parts : one part for the founders ( as at the time of formal registration of the company ), the 
           second part for the investors, and the third part for any new co-workers where the founders 
           will dilute their equity equally to spread equity equally among all the workers. </p>
          
          <p style="margin-bottom:10px;"> <span> >> </span> Salary will be an equal amount for all that is comfortable for all our workers in all our 
           regions but the salary will be based on an Indian number since we will be HQed in India. </p>

          <p style="margin-bottom:10px;"> <span> >> </span> The organization is arranged as a set of work groups which will be for the various 
           research groups and maintenance groups. </p>
           
           <p style="margin-bottom:10px;"> <span> >> </span> The industry of space travel and space living is a permanent one 
           so with us you will be in permanent employment. You will have a comfortable 
           salary as long as the system of money remains. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> The organization will be headed by a General Coordinator ( GC ) who for some years to 
           come will be Sameer who is described on this website in the "Our founders" chapter. The General Coordinator 
           will be approachable to every worker, will be the interface within the organization and externally, 
           and every worker if necessary can arrange to call a discussion circle with a notification sent 
           to the GC. Further, each of our branches in other countries or regions ( those not India ) will 
           have a Regional Coordinator. </p>

          <p style="margin-bottom:10px;"> <span> >> </span> Please note that we are just starting out 
          so it will be some time before you start getting salary and we all get salaries so please be patient 
          and look at the big picture and the long term.
          </p>
         
         </div>
         
       </div>
     `;
modal.style.display = 'flex';

// 01. Our Iskra Plan
} else if (chapter === 'iskra') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
           #modalText > div::-webkit-scrollbar {
             width: 10px;
             height: 10px;
             background: #222;
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }

            h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

         </style>
         <div style="color:##FFFFc5;font-size:1.1em;font-family:Roboto,sans-serif;">
          
           <h2>The disappointed million people desiring space travel</h2>
           
           <p>Now in 2025 there must be at least one million people in the world desiring to go to space 
           right now for the below reasons :</p>
           
           <ul style='margin-bottom:1em;'>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Tourism i.e. 
             just the simple natural act of experiencing the kosmos.</li>

             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Mining moons, 
             asteroids and other space bodies.</li>

             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Research including to 
             find life and to try to terraform other worlds to set up new homes for humans.</li>

           </ul>
           
           <p>But in the context of the current space industry most people 
           will never be able to go to space because the space industry imposes technological restrictions 
           and anti-democratic social restrictions which we list below.</p>
           
           <h2>Technological restrictions of the current space industry</h2>
           
           <p>The current means of going to space is the Tall Rocket 
           which is an inefficient, expensive, complicated and unsafe system in the following ways :</p>
           
           <ul>
             <li style="margin-left:1em; margin-bottom:10px;"> 
             <span>(a).</span> Inefficient because the rocket has to expend a lot of non-recoverable chemical fuel to
             rise even one centimeter off the launch pad and then to keep rising through the atmosphere.
             And once in orbital space it has to keep pushing out the non-recoverable fuel to give it the
             push and the direction towards the destination and then for any course corrections and then
             for braking once it is very near the destination. This requires lot of fuel and thus very large
             fuel tanks and these tanks increase the weight of the rocket and that creates a wrong cycle
             which in the end leaves very less mass of the rocket for the cargo, say to carry even one
             human. This disadvantage remains even when the rocket makers “stage” the rocket i.e.
             divide it in at least two separate parts where the part which goes to space ( the spaceship )
             will have its own fuel and engine and this part is pushed through most of the atmosphere by
             a booster rocket and in the upper atmosphere the parts separate and the booster falls or
             does powered descent towards the ground both so that some mass is lessened and the
             spaceship fires its own engines to go further out into space. For even slightly farther
             distances like the Moon, a very small cargo like a single human becomes a very small
             carryable part of the original massive rocket. Some may think “Why not make the rocket
             huge to be able to carry more humans ?” but the huge rocket will also need a massive
             launch and recovery tower and other infrastructure and that simply feels neither clean nor
             practical. An orbital spaceship should be able to launch and descend in most places without
             any special infrastructure.
             </li>

             <li style="margin-left:1em; margin-bottom:10px;"> 
             <span>(b).</span> Inefficient also because even before the rocket leaves the launch pad, it is associated
             with massive infrastructure, even just to hold the massive rocket steady till it is ready to
             launch. And that requires the efforts of a very large number of people who may have been
             doing other works if the spacecraft system was an efficient system… even by themselves
             going to space. Attached with this inefficiency is high expensiveness of the rocket and its
             infrastructure, including the material required to form the rocket and including the fuel
             because every time the rocket launches and travels in space, its fuel is fully expended and
             thus another launch of the rocket requires new fuel, and the fuel usually is at least two forms
             coming together later and this means more expenditure of money or more obtainment of the
             fuels. Finally, if many more people have to go to space and if their means is the tall rocket
             then the above inefficiency and expensiveness will add up a lot. These negative factors
             remain even in the modern trend of reusable tall rockets having legs to descend on and
             made ready to take flight again.
             </li>

             <li style="margin-left:1em; margin-bottom:10px;"> 
             <span>(c).</span> Complicatedness : The American phrase “As complicated as rocket science” would not
             have existed if people, to go to space, were not using tall rockets which inherently are very
             complicated to make in terms of fuel tanks, their plumbing, their electrical and other control
             systems, the engine system, their staged structure, their landing system like legs and their
             difficultyness to make them safe for humans. Associated complicatedness is also in the
             launch infrastructure.
             </li>

             <li style="margin-left:1em; margin-bottom:10px;"> 
             <span>(d).</span> Non-safety : Other than the above point about complicateness, there is the direct fact of
             non-safety starting from when the tall rocket starts to launch. Most of the mass of the rocket
             is fuel and thus the rocket can explode spectacularly when launching or after launching or
             then on in space. Within an atmosphere if the rising rocket stops the fuel supply to the
             engine for even one second, even because of error, it will crash to the ground and destroy
             the humans within it and also a large area where it crashes. That is why rocket launch
             stations are set up in isolated places, whether near the sea or in deserted lands or in remote
             forests or in remote mountains. And especially when a lot more rockets have to be built to
             take a lot more humans to space, the inefficiency and complicatedness will contribute to
             making them even more unsafe for humans. Another non-safety situation about the tall
             rocket is that since it is vertically very large it can easily topple during quakes in the ground it
             is standing on using its legs. This say on the Moon. What is the point of the space industry
             saying “Travel in space is risky” when the most immediate risk is on Earthen rocket launch
             stations ?
             </li>
           </ul>
           
           <p>Thus the Tall Rocket is an obsolete method of travel to space.</p>

           <p>
           There is another type of launch system which is the Space-plane and this is under design by 
           some organizations. This system has the spaceship formed like a regular aeroplane and takes off 
           from the ground from a runway like a regular aeroplane usually using jet engines but when it 
           reaches higher atmosphere it fires another set of engines which are a multiple of small rocket 
           engines which push the space-plane to orbit and then farther into not-distant space. A variation 
           has a single type of engines which operate both as the takeoff engines and then the space-taking 
           engines. However, the space-plane has the following disadvantages : </p>
           
           <ul>
             <li style="margin-left:1em; margin-bottom:10px;">
              <span>(a).</span> The space-plane requires a dedicated airport / spaceport system including a lengthy
               runway and this adds greatly to complicatedness, expensiveness and inconvenience.
               </li>
             
              <li style="margin-left:1em; margin-bottom:10px;">
             <span>(b).</span> A space-plane airport / spaceport on Earth is
              one thing but what about places without spaceports, which is any other world except for Earth. 
              For example, if we are using a space-plane to go to the Moon where there is no spaceport and 
              runway, how will this infrastructure be built so that the space-plane is able to land for the 
              first time ? If we build a separate lander craft for such situations, carried as cargo on the
               space-plane, the entire system will become complicated just to travel nearer distances in space 
               like to the Moon. This leads to inefficient economics, expensiveness and compromise on human 
               safety.</li>
            
             <li style="margin-left:1em; margin-bottom:10px;">
             <span>(c).</span> The space-plane airport / spaceport / 
             runway is as easily affected by natural calamities and other situations like regular aeroplane 
             airports are prone to. This is inconvenient to say the least.</li>
             </ul>
           
             <p>So the Space-plane is also not the solution.</p>
                     
             <h2>Social restrictions of the current space industry</h2>
           
             <p>Aspiring space travellers either have to be very rich 
             to pay for a single ticket ( at least 20 millions dollars ) to launch on the rockets 
             or in-development space-planes of the world’s very few humans-to-space programs of 
             government space agencies and private space agencies; or the aspiring travelers must
              be associated with these governments or allied governments to travel for free by 
              being military pilots, professional scientists etc; or the aspiring space travellers 
              must win seat lottery in some private space-trip arrangement program associated with 
              those governments or private space agencies and this lottery will be won by only one 
              person per year in the entire world. Most ordinary space travel aspirers have no 
              chance. But it is not Nature / Universe denying most people access to the cosmos, 
              it is anti-democratic systems among humans doing so.</p>

             <p>Also, the very workers who build these current human 
             launch systems are excluded from going to space on the space systems they built with 
             their sweat, sleepless nights and risk of serious injury or death !!! All they are 
             allowed to do is clap in the control rooms whose screens show the launches of those 
             space systems taking to space the rich and the other privileged. A ridiculous and 
             undemocratic situation just like two other situations in the “Democratic World” :</p>
           
             <ul>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The poor daily-wage 
             construction laborers who build mansions, penthouses and two-bedroom flats for the rich and 
             the middle class, never get to live in them and will be chased away from the gate if they 
             happen to visit later and they instead have to live in slums.</li>

             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The few billion 
             ordinary fans of sports stars, 
             who make these sports stars millionaires and adored for years, will never get 
             replied for their long passionate loyalty with a million dollars in their bank accounts each 
             and neither will these sports stars speak up about issues their ordinary fans face in their 
             daily lives or even if the loyal fans die in stampede in the stadiums or outside the stadiums 
             where these sports stars descend royally to play or get felicitated, nor will these cherished 
             sports stars speak about global issues like Climate Change, techno-feudalism and the traditional 
             feudalism in the cities and the villages which includes the wrongs against farmers, white-collar
             workers, students, daily-wagers and women.</li>
           </ul>
           
           <h2>The techno-social restrictions coming together</h2>
           
           <p style='margin-bottom:1em;'>So all this hurry-burry and artificial glamor of 
           the current space industry is pointless in the end for the at least million other 
           desirers of space travel who will never leave Earth and the very rich owners of most 
           current space agencies will keep profiting from this hurry-burry and from the 
           complicated, expensive and unsafe current launch systems yet the ordinary desirers 
           and humanity in general are encouraged to glorify this industry and its feudal owners. 
           These are fake heroes.</p>
           
           <h2> Our solution : The Iskra Plan</h2>
           
           <p style='margin-bottom:1em;'>In the Russian language "Iskra" means Spark, especially one
           which ignites positive change. In the context of our organization our Iskra Plan is our spark for all humans 
           to light the flame to explore the entire universe to the max extent possible and settle 
           in space in a way that is simple, gentle, safe, pan-humanist in a progressive way 
           and respectful of Nature and Nature’s laws. Space travel must become as common as bus travel, 
           and space living as common as hotel stay, and these should flow into evolving human 
           society on Earth too. Potentially every human should be able to access space, 
           live in space and attain their potential in space, whenever he or she desires, 
           with a minimal usage fee or no fee at all, in the now and in the far far future. 
           This is the simple law of Nature.
           </p>
           
           <p style='margin-bottom:1em;'>Towards this, we of Kosmos Society will build all 
           the systems, whether the spaceships or the computers or self-sustaining compact electricity generators 
           or the spacesuits or the habitation systems or the social system for space and every other 
           necessary thing, and all this in a simplified and straightforward manner, 
           without caring for obsolete and needless "industry standards", unthoughtful academic postulations, 
           cringey technological fashions, anti-democratic and anti-Nature social constructs. 
           What works, works. What is sensible, is sensible. What can be simplified, must be simplified. 
           What is natural, has to be the system.
           </p>
           
           <p style='margin-bottom:1em;'>Starting 2035 our-designed spaceships will be able to 
           carry some humans and goods safely to the Moon and in subsequent years our-designed spaceships 
           will be able to travel throughout the Inner Solar System and Outer Solar System, 
           carrying large number of humans and goods and our other technologies will enable living in those regions.
           “Inner Solar System” means to safely near the Sun in one direction and the Asteroid Belt in the other 
           direction, and “Outer Solar System” means beyond the Asteroid Belt to Pluto and beyond. This will 
           be just the start.</p>
                       
           <p style='margin-bottom:1em;'>Most of our systems will be usable on Earth either directly 
           or in derivation, and all our systems will be simplified, manufacturable cheaply, operable
           cheaply and repairable cheaply, and the manufacturers will be national governments who will
           purchase from us the designs and engineering details of our systems for a reasonably cheap 
           license fee and they will be able to set up factories in their own countries to produce our 
           systems.
           </p>
           
           <p>
           Once these systems are built by the governments they should charge the masses minimal fees 
           or no fees at all for personal ownership of some of these systems ( say our wearable computer ) 
           or when being passengers ( say on our spaceships ) or when living in space habitats. 
           For example, an individual’s trip to the Moon should have a max seat price of 100 dollars 
           or ideally free.</p>
                       
           <p style='margin-bottom:1em;'>To start our journey to space, by 2031 two people will go to Low Earth Orbit in 
           our Alef-A airship-spaceship, orbit Earth and return gently through the atmosphere 
           by powered craft re-entry to the launch place.</p>
           
         </div>
       </div>
     `;
modal.style.display = 'flex';
setTimeout(function() {
var closeBtn = document.getElementById('modalCloseBtn');
if (closeBtn) {
closeBtn.onclick = function() {
modal.style.display = 'none';
};
}
}, 0);

// 02. Product design principles
} else if (chapter === 'principles') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
           #modalText > div::-webkit-scrollbar {
             width: 10px;
             height: 10px;
             background: #222;
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }
              h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

         </style>
         <h2>Our progressive product design principles</h2>
         <div>
           <p><span>&gt;&gt;</span> Liberty, Equality, Fraternity, Humanism, Simplicity, Human safety as much as possible, 
           Respect for Nature including reversing Climate Change on Earth.
           </p>
           
           <p><span>&gt;&gt;</span> Readiness to explore sensible methods that are from old times or are unusual.
           </p>
           
           <p><span>&gt;&gt;</span> We won’t do a technology just because there are a hundred other companies doing it 
           or it has been done for a hundred years or just because it has been proposed by some celebrated scientist but 
           the idea is not sensible, for example the concept called Dyson Sphere aka Dyson Swarm.
           </p>

           <p><span>&gt;&gt;</span> A naturality, beauty, gentleness, simplification and intelligence in technologies and science as against trendy but dystopian 
           and needlessly complicated things. Be Dune’sy rather than metaverse’y. This includes naming 
           or renaming of space objects like “Red One” instead of “Mars” as the latter is the Roman 
           god of war while the former is a gentle name. Another example is not following the 
           silliness of nuclear fusion as the means to generate electricity.
           </p>

           <p><span>&gt;&gt;</span> Employ the concept of Circular Economy which also relates 
           to :
           </p>
                                  
           <p style='margin-left:2em;margin-bottom:10px;'><span>(a).</span> Much simplified technology.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(b).</span> Decentralization and ease of production and 
           usage which includes electricity generation.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(c).</span> As much as possible, use of structural materials 
           and fuels that are available cheaply and available in many place or can be produced anywhere so that the manufacturers 
           can produce our products cheaply and make them available to the masses cheaply. Examples, water, air, wood, biocoal 
           and electricity that is produced by a simple, compact, self-sustaining generator.
           </p>

            <p style='margin-left:2em;margin-bottom:10px;'><span>(d).</span> Bio-mimicry and Engineered Biology wherever applicable.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(e).</span> Low-tech when applicable.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(f).</span> Local empowerment.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(g).</span> Technology that is well-crafted
            yet affordable by the masses.</p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(h).</span> Technologies selected are simple, reliable and help
            return humanity anywhere to easier advancement or be resilient when situation becomes bad 
            because of natural or other events like unusually big solar storm, comet or asteroid strike, 
            a pointless global war etc.</p>

           <p><span>&gt;&gt;</span> Our technologies will align around our draft for a democratic, pan-human 
           and Nature-respecting manifesto for space, presented in the “Manifesto for the kosmos” chapter 
           on this website.
           </p>
           
         </div>
       </div>
     `;
modal.style.display = 'flex';

// 05. Our founders
} else if (chapter === 'founders') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
           #modalText > div::-webkit-scrollbar {
             width: 10px;
             height: 10px;
             background: #222;
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }
             

            h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

          .profile-image {
           width: 100%;
           max-width: 200px;
           height: auto;
           border-radius: 10px;
           display: block;
           margin: 0 auto 20px;
           
       }
           

       .name {
           font-size: 18px;
           color: #000;
           font-weight: bold;
           text-align: center;
       }

         @media (max-width: 768px) {
           .profile-image {
               max-width: 150px;
           }
           
           .name {
               font-size: 16px;
                color: #000;
           }
       }
               
       @media (max-width: 480px) {
           .profile-image {
               max-width: 120px;
           }
           
           .name {
               font-size: 14px;
               color: #000;
           }
       }

       /* Alternative button styles */
       .minimal-tag {
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

       .minimal-tag:hover {
           background: #0077b5;
           color: white;
       }
           
         </style>
                  
           <h2>Our founding team</h2>
          
            <div>
            <img src="assets/Sameer .jpeg" 
            alt="Mohammed Sameer" 
            class="profile-image">
            </div>

            <p class=name> Mohammed Sameer - General Coordinator</p>

            <p style="margin-bottom:4px;">
           Sameer is originally from computing background but he considers himself a 
           general researcher with interests ranging from generation of electricity to organization of 
           society, like those "polymaths" of old like Hasan Ibn al-Haytham, Leonardo da Vinci and 
           Jagadish Chandra Bose. And perhaps "Polymath" is not a proper word and must have a good replacement.
           </p>
           
            <a href="https://linkedin.com/in/sameer-kosmos-society" target="_blank" rel="noopener noreferrer" class="minimal-tag">
               <svg class="linkedin-icon" width="16" height="16" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
               </svg>
               Connect on LinkedIn
           </a>
           
           <div>
           <img src="assets/Gajendran photo.jpeg" 
            alt="Gajendran Chandran" 
            class="profile-image">
            </div>

           <p class=name> Prof. Dr. Gajendran Chandran - Chief Advisor </p>
           
           <p style="margin-bottom:4px;"> 
            Dr. Gajendran is a veteran aerospace scientist but his interests are many -
           from philosophy to nano tech to power generation and other fields in a nuanced and 
           humanist way. He has been an advisor to Sameer for years and brings a practised, practical 
           and also system-level thinking to the organization not only about technology but the human 
           condition too.</p>
            
           <!-- Minimal Style Tag -->
           <a href="https://in.linkedin.com/in/prof-dr-gajendran-chandran-79866320" target="_blank" rel="noopener noreferrer" class="minimal-tag">
               <svg class="linkedin-icon" width="16" height="16" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
               </svg>
               Connect on LinkedIn
           </a>
            
           
           <div>
           <img src="assets/Siddharth photo.jpeg" 
            alt="Dr. Siddharth Dabhade" 
            class="profile-image">
            </div>

           <p class=name> Prof. Dr. Siddharth Dabhade - Advisor </p>
           
           <p style="margin-bottom:4px;"> 
           
           Dr. Siddharth has been a patient supporter of the organization for more than 
           two years. He joined our more little group when we didn’t have this organization and our sole 
           project was the Kosmos microprocessor+OS. Presently, he has been an advisor in a 
           system-level way.</p>

            <!-- Minimal Style Tag -->
          <a href="https://in.linkedin.com/in/siddharth-dabhade-a6392025" target="_blank" rel="noopener noreferrer" class="minimal-tag">
           <svg class="linkedin-icon" width="16" height="16" viewBox="0 0 24 24">
               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
           </svg>
           Connect on LinkedIn
          </a>
          

          <p style="margin-bottom:10px;"> <span> Afzal - Advisor </span>
           Afzal is a practical person but also philosophical. He has been a patient 
           supporter of the organization from the time it was thought up in early 2023. He contributes 
           presently to our electricity generator project, our spaceship projects and the 
           hovercraft-wheelcraft-aircraft project. </p>

           <div>
           <img src="assets/Mahmoud photo (1).png" 
            alt="Mahmoud Hosny " 
            class="profile-image">
           </div>

           <p class=name> Mahmoud Hosny - Regional Coordinator, Africa and West Asia </p>
           
           <p style="margin-bottom:4px;"> 
           Mahmoud is based in Cairo and will manage liaison to the administrations and 
           the masses in the vast regions that are Africa and West Asia. He is a straight-talking person 
           and patient including the time it took for the organization to come to this level.  </p>
            
           <div>
           <img src="assets/Athiq photo.jpeg" 
            alt="Syed Athiq Jeelani " 
            class="profile-image">
           </div>
           <p class=name> Syed Athiq Jeelani - Advisor </p>

           <p style="margin-bottom:4px;"> 

           Athiq dabbles in various fields like power adapter design, ready-to-cook foods 
           and management of a school. Athiq is inquisitive, patient and provides a practical side to 
           things. He is our electrical expert.

           <!-- Minimal Style Tag -->
           <a href="https://in.linkedin.com/in/saj-iot" target="_blank" rel="noopener noreferrer" class="minimal-tag">
           <svg class="linkedin-icon" width="16" height="16" viewBox="0 0 24 24">
               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
           </svg>
           Connect on LinkedIn
           </a>
           </p> 

         <h2>Our name and logo</h2>
         
          <p>
          We call ourselves as Kosmos Society because we want to be the vanguard techno-social organization 
          taking human society into the kosmos... the universe... so that humans become gentle, observant 
          and aware travelers and settlers of the universe, melding into the universe naturally 
          and becoming the "Kosmos Society", respecting and adopting Nature's laws, 
          including those reasonable laws and understandings which were part of human society for millennia, 
          preached by the older philosophers and social reformers and those from true modern philosophers 
          and those ideas from us.
          </p>

          <p>
          Our logo has the cat because cats are gentle, observant, careful, empathetic, social, 
          loving, sensitive, clean, beautiful, extremely intelligent, wise, loyal, sweet natured, 
          graceful, robust, independent, proud, consider themselves equal to humans 
          and create good vibes wherever they go. These qualities we desire in all 
          of the human society going into the kosmos and on Earth.
         </p>

         </div>
                           
       </div>
     `;
modal.style.display = 'flex';

// 06. Credits
} else if (chapter === 'credits') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }

           h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

         </style>
         <h2>Credits</h2>
         <div>

         <p>
         We credit the following people who are not part of our organization but have helped us either in person 
         or by their ideas and works we found on the internet :
         </p>
       
           <p><span>&gt;&gt;</span> Vikram for the logo, the website design and for provoking the thought in Sameer to have this Credits page.</p>
           
           <p><span>&gt;&gt;</span> Apoorva JR for presenting to us an Instagram page in 2023 which contained reports on eco-friendly ways 
           of generating electricity and which led to our discovery of the “sand battery” which we use in our design of the Faradn generator. 
           Apoorva’s LInkedIn page [ <a href="https://www.linkedin.com/in/apoorvajr" target="_blank" style="color:#0000FF;">https://www.linkedin.com/in/apoorvajr</a> ].
           Sadly we forgot the Insta page's name but we are thankful to that page's maintainer. 
           That Insta page spoke of the company Polar Night Energy which applied the sand battery in a real life setting and we are thankful to this company.
           </p>
                       
           <p><span>&gt;&gt;</span> Robert Murray-Smith on YouTube for the idea about using a simple electro-mechanical vibrator for amplification of electricity, made using an electro-magnetic relay. This vid called “1026 The easiest inverter you will ever make” is on this page [ <a href="https://www.youtube.com/watch?v=L-vC9SvU2Lo" target="_blank" style="color:#0000FF;">https://www.youtube.com/watch?v=L-vC9SvU2Lo</a> ]. This we use in our design of the Faradn generator.</p>
           
           <p><span>&gt;&gt;</span> The YouTube channel “The Action Lab” for the idea about using heat to run a self-sustained piston engine. 
           This vid called “This engine runs on sound waves” is on this page [ <a href="https://www.youtube.com/watch?v=xCnxsoXtlmY" target="_blank" style="color:#0000FF;">https://www.youtube.com/watch?v=xCnxsoXtlmY</a> ].
           </p>

           <p><span>&gt;&gt;</span> The YouTube channel "Mech Marvels" for the idea about using mutually repelling magnets 
           to form a self-sustained sustained motor. This vid called "Magnets - the key to endless power ?" 
           is on this page [ <a href="https://www.youtube.com/shorts/yTHXh-5uxRM" target="_blank" style="color:#0000FF;">https://www.youtube.com/shorts/yTHXh-5uxRM</a> ].
           </p>

           <p><span>&gt;&gt;</span> The above two mechanisms we have considered for use in our Faradn electricity generator. 
           We will use one of them and to select we must experiment on them and we are presently engaging 
           with a manufacturer to experiment on them in the road to develop our generator's prototype.
           </p>

           <p><span>&gt;&gt;</span> Farzad Zangeneh-Nejad and Romain Fleury at the Federal Institute of Technology (
             EPFL ) in Lausanne, Switzerland, for the idea of using sound to do analog computing.</p>
            
           <p><span>&gt;&gt;</span> Planetary Science Division of NASA for the idea of creating an artificial magnetosphere
            for Red One.</p>

           <p><span>&gt;&gt;</span> Coke Studio Bangla Season One for presenting the song “Shob Lokey Koy” which also inspired us for our manifesto for the kosmos. 
           This song is in the Bengali and Hindi languages and is a celebration of two past South Asian humanitarian mystics, 
           Lalon Fakir and Kabir Das, and calls for unity of humans because they all are the waters from the
           same well except for some differences in the vessels which then contain the waters. 
           The song is available on YouTube on this page [ <a href="https://www.youtube.com/watch?v=L-arhlgPiy8" target="_blank" style="color:#0000FF;">https://www.youtube.com/watch?v=L-arhlgPiy8</a> ].
           </p>
            
           <p><span>&gt;&gt;</span> Rabindranath Tagore for his essay that speaks against Nationalism. The essay can be
            read here [ <a href="https://mast.queensu.ca/~murty/Tagore-Nationalism-1915.pdf" target="_blank" style="color:#0000FF;">https://mast.queensu.ca/~murty/Tagore-Nationalism-1915.pdf</a> ].</p>

           <p><span>&gt;&gt;</span> Background picture for the website is from the DeviantArt website’s DreamUp AI picture generation facility.</p>
           
           <p><span>&gt;&gt;</span> In general all the good thinkers of the past and present whose thoughts and works we use in our projects.</p>
         </div>
         
       </div>
     `;
modal.style.display = 'flex';

//03. Techno projects
} else if (chapter === 'projects'){
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
           #modalText > div::-webkit-scrollbar {
             width: 10px;
             height: 10px;
             background: #222;
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }

           h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p {
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

             li{
             font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
             }

         </style>

         <h2>Our techno projects</h2>
         
         <div>
         
         <p>
         -----
         </p>
         
         <p>
         Table of contents :
         </p>

         <p>
         01. Faradn electricity generator.
         </p>

         <p>
         02. The Alef-A airship-spaceship.
         </p>

         <p>
         03. The Alef-F space ferry.
         </p>

         <p>
         04. About both Alef-A and Alef-F spaceships.
         </p>

         <p>
         05. Ra-K hovercraft-wheelcraft-aircraft.
         </p>

         <p>
         06. A spacesuit called Stillsuit.
         </p>

         <p>
         07. Dune Buk wearable computer.
         </p>

         <p>
         08. Exoskeleton.
         </p>

         <p>
         09. Biology researches.
         </p>
         
         <p>
         10. Machines for water.
         </p>

         <p>
         11. Habitat construction on other worlds.
         </p>
                   
         <p>
         12. Serf autonomous satellite for Earth orbit debris cleaning.
         </p>

         <p>
         13. Terraforming.
         </p>

         <p>
         14. Anti-gravity.
         </p>

         <p>
         -----
         </p>
                   
           <h2>Faradn electricity generator</h2>
           
           <p>
           Advancement in electricity generation is not to make the generators huge, 
           centralized, complicated, unsafe, polluting and needless like nuclear, hydropower dams,
           huge on-sea wind turbines, huge under-sea wave machines etc along with their complicated 
           and huge system controls, power controls and power delivery mechanisms and 
           all these stretched hundreds of kilometers or even millions of kilometers like 
           the idiotic concept Dyson Swarm. There’s even an unspoken nefarious element here like 
           promotion of Space-based Solar Power where huge photovoltaic panels will sit in Earth orbit and 
           convert the abundant sunlight there to electricity, convert the electricity to 
           high-power microwaves and send down the microwaves to certain large-focus spots on Earth 
           where on those spots on the ground the microwaves are converted back to electricity by rectennas 
           to be supplied to the grid. The nefarious element here is the potential of this system to be used to zap 
           humans and other things using the high-power microwaves by moving these power 
           satellites over targets.
           </p>          

           <p>
           Advancement then in electricity generation is to make generators simple, compact, 
           self-sustaining, safe and decentralized, where the generator sits within the small and large machines 
           needing electricity or just outside them. Making generators compact will also enable 
           redundancy, easy replacement and easy placement in any place which needs electricity 
           instead of centralized single points of failure. This also contributes to democracy 
           where the individual user freely owns the electricity generation mechanism and its 
           produced electricity.
           </p>
           
           <p>
           Faradn generator system will be such a generator which is very non-nuclear and will 
           power all our non-micro-sized products by sitting within them or just outside them. 
           It will produce 24 volts DC which is enough for most purposes, neither too low a current 
           nor dangerously high. Once started, this generator will be designed to continuously 
           produce current for at least a month... this is the self-sustained part.
           </p>
           
           <p>For high voltage requirements we can externally connect this self-sustained generator to further amplifying systems 
           like a motor-generator. Within the Faradn generator itself there are two very simple approaches we are considering in generating 
           the initial low-voltage current before we amplify that current, clean it and provide it as the 24 volts DC output. 
           The two approaches are :
           </p>
           
           <p>
           (a). A thermo-mechanical piston mechanism which includes a "sand battery".
           </p>

           <p>
           (b). A simple magnet-repulsion motor mechanism with at least two magnet sets.
           </p>

           <p>
           Please check the “Credits” chapter to see where we derive most of our ideas for the 
           generator.
           </p>
           
           <p>
           The name of this system, Faradn, refers to two things : an acknowledgement to Michael
           Faraday and a nod to the Dune story which has the character Farad’n.
           </p>                    
           
           <p>
           There can be a rechargeable battery included within this system or outside this 
           system to provide short-duration backup and enable generator switchover when one 
           generator fails But this battery will have to be safe, eco-friendly and socially harmonious 
           in terms of its electricity storage materials, electrodes and packaging. Very much not 
           the lithium-ion battery which has been one of humanity's most idiotic inventions 
           alongisde the motorcycle and of course money.
           </p>
           
           <h2>The Alef-A airship-spaceship</h2>
           
           <p>
           We use the airship type of craft to ascend to orbital space from any atmosphere-having world 
           because it has the advantage of operating on the balloon principle i.e. when the airship's gas bags 
           are filled with a lifting gas or combination of lifting gases which are lighter than the surrounding air, 
           the whole structure of the airship automatically lifts into the air without any or much fuel expenditure 
           until it reaches to a height where the airship's lifting gas or gases find equilibrium 
           with the lesser atmospheric air at that height. From that atmospheric height for lift of the airship into space 
           there will be other upwards push / propulsion methods required. The airship is much better than the Tall Rocket 
           because the Tall Rocket requires lot of fuel just to lift itself one centimeter off the launch pad 
           as we explained in our first chapter. Secondly, much less push-into-orbit fuel 
           makes the airship type of spaceship much more safer in terms of explosion. Thirldy, 
           the airship-spaceship can easily be made horizontally larger instead of the vertically huge of the Tall Rocket.
           </p>

           <p>
           Our airship-spaceship is the Alef-A which will be shaped like an upside-down teacup without the handle,
           and its lift gases will be helium gas and hot air. An airship type or a balloon which uses this combination of a lift gas with heated air 
           is called a Roziere Balloon. The Alef-A's horizontal travel or lift into higher
           atmosphere and then into space will be assisted by electric rotors, coal combustion and
           water steam jets. Of course the gas lift and electric rotors are usable only if that world has air
           / atmosphere. The coal propulsion and steam jets can be used on any world and when in atmosphere these fuels
           are non-recoverable i.e. once they combust or are expelled they cannot be recovered to their
           original form and be reused. And then once this craft is in space it will be propelled largely by
           water steam jets where through an arrangement most of the steam is recovered to water and
           reused to be jetted again to enable longer-distance continuous-thrust travel, thus the water
           steam here is a largely recoverable fuel. Coal combustion will also be used for 
           effects like braking and positioning near destinations and then for descent on some world.
           The Alef-A will allow for ascent / descent on a world and short-distance space travel like from Earth to Moon’s surface.
           </p>

           <h2>The Alef-F space ferry</h2>
           
           <p>
           The Alef-F will be a space-bound ferry large enough to carry five Alef-A crafts and a hundred
           humans and a hundred tons of other cargo and will be primarily propelled by water steam
           jets but will include coal propulsion for momentary high-thrust-requiring situations. It will have 
           proper water-using baths and toilets with the toilets having disinfectant-having water spray for hygienic and satisfying 
           cleaning after defecation. The ferry will also have sufficient growing facilities for food crop, 
           fuel crop ( for the coal via biocoal ), other crops, a clinic, mini mills for textile, woodwork, 
           metalwork, bio-engineering, electricals and computers, then tailoring, research facility, mineral processing, 
           water storage, a small swimming pool that is time-segregated for men and women… 
           all this for largely self-sustained long-term living and far travel. And telescopes. This ferry will be able to 
           travel from the Inner Solar System to the Outer Solar System and station around various worlds and 
           space objects to enable from-orbit observations and allow descent-ascent using the Alef-A crafts. 
           The cargo can be anything including mining equipment and habitation-building material. 
           Thus this ferry craft is much better than the current and proposed space stations around Earth and the Moon. 
           It can also be called a colony ship.
           </p>

           <p> 
           This ferry craft will be constructed in Earth orbit and in other world orbits and will always
           remain in space, never to descend on any world. The construction material will be carried to
           orbit by the Alef-A crafts.
           </p>

           <h2>About both Alef-A and Alef-F spaceships</h2>
           
           <p>The name “Alef” is a joined word with the below meaning :</p>
          
           <ul>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The “lef” comes from the slogan 
             “Liberty, Equality, Fraternity” which is a slogan in multiple progressive thought streams 
             including the Preamble ( introduction ) to the Indian Constitution. </li>

             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The “A” stands for 
             Alif ( “The first” ), meaning these spaceships are just the first types of spaceships from 
             our organization Further will be more types. </li>
           </ul>
           
           <p>Both the Alef-A and the Alef-F will be primarily propelled in space by water steam 
           jets and this is advantageous because :</p>
           
           <ul>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Steam is made 
             from water which is found in many places in the Solar System and beyond.</li>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Water in itself is safe to handle by humans.</li>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Water doesn’t explode normally unlike rocket fuel like 
             liquid hydrogen.</li>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Water doesn’t need 
             to be stored at cryogenic conditions unlike with some current popular spacecraft fuels like 
             liquid hydrogen and liquid methane Water can be just kept a warm liquid using electrical heating.</li>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> When in space, most of the
              jetted steam is recoverable to liquid water which can be fed back to the propulsion system to 
              allow for continuous thrust, faster travel and longer travel.</li>
             <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Our steam-based 
             propulsion uses a simple heating mechanism to turn water to steam instead of having other 
             complex and unsafe propulsion mechanisms like plasma or nuclear power.</li>
           </ul>
           
           <p>
            It may be possible to form these two spaceships to have artificial gravity generation
            using spin by spinning sections of the craft This enabling will allow humans to live 
            in healthy Earth-like gravity for most of their space journeys and also configure 
            lower or higher gravity to prepare the human travellers for the gravity of other 
            worlds like the Moon or Red One.
            </p>
           
             <h2> Ra-K hovercraft-wheelcraft-aircraft </h2>
           
           <p> 
           The name of this vehicle comes from the name Ra who was the supreme ancient Egyptian
           god who had the head of a cat and the body of a man - a hybrid. Other than the dedication to
           cats the name is also because this Ra-K vehicle is a hybrid vehicle as below. And the “K” is
           because it will carry humans in kosmos / environments in contrast to our other Ra hybrid
           machines which are described in further sections. 
           </p>
           
           <p>
           Ra-K will be universal on-world vehicles to carry humans and small cargo on large space
           bodies, whether air-having or airless. They will carry three spacesuited humans in a
           medium-sized pressurized cabin and behind the cabin will be an airlock to the outside. On
           top of the vehicle will be a closable cargo box which can hold 500 kilograms. There will be a
           telescoping cargo lifting arm on the front of the vehicle which will load things into the top
           cargo box.
           </p>

           <p>For propulsion this craft will use a combination of :</p>
           
           <ul>
             <li style="margin-bottom:10px;"><span>(a).</span> Hovercraft principle.</li>
             
             <li style="margin-bottom:10px;"><span>(b).</span> Independently-controllable extendible and robust wheels.</li>

             <li style="margin-bottom:10px;"><span>(c).</span> Electric lift rotors placed on out-folding arms.</li>
             
             <li style="margin-bottom:10px;"><span>(d).</span> Coal combustion.</li>
           </ul>

           <p>
           Hovercraft mode will be used on air-having / atmosphere-having worlds ( like Red One and
           maybe Titan ) where there is air to lift the vehicle but dependent on the situation on the
           ground like having safe desert beneath the vehicle or a lake so the vehicle can hover and
           when coming upon mountainous or uncertain ground it can switch to wheelcraft mode to
           travel carefully inch by inch or can deploy the rotors to start flying.
           </p>

           <p>
           When in aircraft mode, lift is done by six sets of two contra-rotating electric rotors where the
           arms having the rotors are normally folded up above the craft and will unfold when flying
           mode is activated and the rotors will lift the craft vertically and descend it vertically.
           Horizontal movement is done by two pusher propellers. There may be foldable wings
           attached to the rotor arms to provide glide facility and extra lift.
           </p>
            
           <p>
           Just wheelcraft mode will be used on airless / non-atmosphere worlds like the Moon
           because there will be no air to make the vehicle hover or fly.
           </p>
           
           <p>
           The main cabin will be pressurized with Earth-type breathing gas mixture ( oxygen and
           nitrogen ) and able to take three people. The cabin will have racks for food, medicine, small
           tools, instruments and research objects.
           </p>
           
           <p>
           This craft can be put in semi-autonomous mode so that a Ra-K carrying people is in front
           and there is a train of non-peopled Ra-Ks behind carrying cargo in the top cargo box, and
           each behind Ra-K connected to the forward Ra-K using signals-carrying fiber optic cables.
           The behind Ra-Ks will use hovercraft mode or wheelcraft mode or aircraft mode based on
           the directions sent from the first people-carrying Ra-K.
           </p>
           
           <p>
           The coal combustion propulsion mode will be used in aircraft mode in emergencies like
           safely landing the craft when the rotors fail or getting the vehicle away from some
           emergency in a certain location.
           </p>
           
           <h2>A spacesuit called Stillsuit</h2>
           
           <p>
           The design of this spacesuit is still in consideration but it will be a hardsuit to allow easy
           movement of the wearer and better safety and it can also fly. The suit will use bio-mimicry
           and biological elements to also allow for self-repair.
           </p>
           
           <p>
           The suit system will include the helmet, shoes, breathing tanks ( oxygen-nitrogen mixture ),
           water system ( including drinking straws and water recovery from urine ) and temperature
           control. There will be provision for collecting defecation and rendering it non-toxic and
           non-smelly.
           </p>
           
           <p>
           The helmet will include a simple, mechanical system to scratch the face, the eyelids and dab
           the face of sweat and tears.
           </p>
           
           <p>
           The electrical system in the suit will be for some control and will include a mic and speakers.
           For detailed control, the electrical system will be connected to an external Dune Buk
           wearable computer worn on the back-of-the-upper arm of the suit and this computer will
           show the status of the suit visually and using sound. This computer is described in the next
           below section.
           </p>

           <p>
           The suit will be paired with separate rubberized guards to be worn on the knees and elbows
           in the manner of cyclists and skaters.
           </p>

           <p>
           On the back of the suit will be a jet pack with wings to use for short-distance flying to
           descend and ascend and hop on smaller and larger air-having and airless space bodies and
           fly in open space depending on the situation. Of course the wings cannot be used on airless
           bodies and in open space. The fuel design of this jet pack we are still considering. It will also
           have parachute for extra safety on air-having bodies. Maybe for even more safety and also
           efficiency, during descent and ascent, each jet pack can team up with the jet packs of
           adjacent wearers using an electrically-stiffened rope mechanism. This will be like mountain
           climbers on Earth being connected by a single rope.
           </p>

           <p>
           The name of this spacesuit, Stillsuit, derives from the suit the Fremen people wear in the
           Dune stories when they go out into the desert.
           </p>
           
           <h2>Dune Buk wearable computer</h2>
           
           <p>
           Dune Buk will be a general-purpose space-operable wearable computer which will be about
           three feet long and worn on the back of the upper arm using two straps - one around the
           upper arm and another over the shoulder, and thus can be used with any kind of clothing (
           spacesuits, office dress etc ) and will be aesthetic enough for the stylish person.
           </p>
          
           <p>
           The processor will be called Meow and will use sound for the computations. “Meow” usually
           is the sweetest of sounds. Some of the processor’s design will derive from our previous
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
           Our proposed simple and universal way of sensing the electromagnetic spectrum using
           sound.
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
           voice, video and pictures.
           </p>
           
           <p>
           Frema is our own in-design wireless internet system for Space and Earth which will be used
           by our Dune Buk wearable computer. Frema will use radio-frequency for normal
           communication. The system will be based on peer-to-peer architecture which among other
           things will require very few transmission relay towers. The system will also do signaling
           using light or magnetic pulse / field or infrasound as per situation. The signaling system and
           the communication protocol will factor-in the delay-included conditions of long-distance
           communication in space. Further, the wearable will be directly able to connect from the
           ground to low orbiting communication satellites to enable live voice, video, text and other
           data communication. There will be a messaging system where different kinds of data will be
           played in the same type of window. The data can be text, still pic, vid, just voice, forms and
           other data. Text will be displayed like paper book pages. The played data can be locally
           stored or can come from another Dune Buk comp and in case of the latter, if there are
           multiple participants in a chat the data will be forwarded to all the participants' comps in a
           peer-to-peer forwarding way. The wearable will be connectable to the current internet using
           bridge computers.
           </p>

           <p>
           The computer will operate on 24 volts DC as this higher voltage than in most current semiconductor-based electronics space systems, 
           will be less affected by space radiation. Additionally, the computations and the other systems use sound also because sound 
           is lot lot less affected by space radiation and temperature than semiconductor electronics, unless the radiation is so high 
           that the sound producing elements, the sound transmitting channels, the sound computation chambers, sound receiving elements 
           and other sound elements are physically deformed by the radiation. But of course, such high radiation will kill our wearable computer's 
           wearer first despite every humanly possible protection, and the only use of such a system is recording such an event. Sound is also easier and 
           cheaper to produce, receive and use in computation and storage than light ( optical computing and storage ).
           </p>
           
           <p>
           There will be an associated home cinema system with a wall screen and multi-channel
           speakers.
           </p>

           <p>
           On Earth this wearable computer will be used by our customers in parallel with their mobile
           phones and desktops, and in space will be the sole computers that our customers will carry
           on their person and which separately can control other machines like our vehicles.
           </p>

           <p>
           A further development will be enabling disabled people to use the wearable.
           </p>

           <h2>The Dune Buk wearable is related to two other machines</h2>
                       
           <p>
           <span>(a).</span> Ra-D, a heater-equipped drone small enough to fit on top of the Dune Buk wearable
           computer. This drone will be powered electrically and have the ability to fly, to wheel along
           the ground and swim. In flight mode it can be launched from the hand and return to the
           hand. This drone when flying will be used for vlogging, searching, communications relay,
           emergencies and as a forward scout when people travel in ground vehicles on unknown
           territory. Similar cases for its wheeling mode and swimming mode. This drone will be usable
           on air-having worlds like Earth, in airless low-gravity places like the Moon, on water worlds
           etc.
           </p>
           
           <p>
           <span>(b).</span> Iceworm, a heater-equipped ice borer and drone carrier that will carry a swarm of
           weight-attached Ra-D drones down into the ice-covered water sea of some ice moon or ice
           planet by melting / “boring” through the ice. The name Iceworm derives from the Sandworm
           animal in the Dune stories but here for ice.
           </p>   
                    
           <h2>Exoskeleton</h2>

           <p>
           Exoskeletons may be assisted by electricity though largely will depend on human movement.
           This mechanism will allow for :
           </p>

           <p>
           <span> >> </span> Lifting heavy-weight and bulky materials which normally a human cannot lift.
           </p>

           <p>
           <span> >> </span> Lifting heavy-weight and bulky materials which normally a human cannot lift.
           </p>
           
           <p>
           <span> >> </span> Digging the ground.
           </p>
           
           <p>
           <span> >> </span> Reaching small heights.
           </p>
           
           <p>
           <span> >> </span> When a person is incapacitated because of injury of limbs, back, neck etc and the
           exoskeleton will help the person not only in movement just after injury but also in healing.
           </p>
           
           <p>
           Exoskeletons may not allow smooth movements but this mechanism is anyway not for
           normal usages.
           </p>
           
           <h2>Biology researches like</h2>
           
           <p>
           <span> >> </span> The ideal plants to derive biocoal for the coal needed to propel the Alef spaceships and
           the Ra vehicles. These plants should be growable in space.
           </p>
           
           <p>
           <span> >> </span> Strengthened and fire-proof wood for structures in the spaceships, spacesuits and
           habitations. Such wood is preferable to metal in many cases. The trees for the wood should
           be growable in space.
           </p>

           <p>
           <span> >> </span> Transparent wood to replace glass in some applications. The trees for the wood should 
           be growable in space.
           </p>

           <p> 
           <span> >> </span> Structures of spaceships, spacesuits and habitations to be bio-mimicking and also made of biological elements for radiation shielding, self-repair and a sense of more naturality. For
           example, there is interest in the fungus Cladosporium sphaerospermum which was first
           identified in the Chernobyl reactor's remains and converts the area’s radiation into energy for
           itself, a process called radiosynthesis which is comparable to plants converting light to
           energy through photosynthesis. This fungus eats the radiation.
           </p>

           <p>
           <span> >> </span> Engineered bacteria can be used to do mining and perhaps even construct useful matter from other existent
           matter like asteroid rock. This is the concept of bio-transmutation and will remove the need for a lot of mechano-chemical 
           mineral processing factories and their attendant pollution and human physical labor. Examples of use :
           </p>

           <p style='margin-left:2em;margin-bottom:10px;'><span>(a).</span> To get the helium gas which our Alef-A airships require 
           as their main lift gas.
           </p>
           
           <p style='margin-left:2em;margin-bottom:10px;'><span>(b).</span> To get the nitrogen gas for adding to oxygen 
           in the correct mixture so that humans can breath their Earth-normal air mixture of nitrogen-oxygen.
           </p>
           
           <p style='margin-left:2em;margin-bottom:10px;'><span>(c).</span> To obtain nutrients for plants.
           </p>
            
           <p style='margin-left:2em;margin-bottom:10px;'><span>(d).</span> To extract water or even construct water.
           </p>
            
           <p> 
           <span> >> </span> The previously described phenomenon of radiosynthesis has an interesting application for space which uses the idea 
           similar to the Astrophage bio-organism in Andy Weir's sci-fi book of 2021 called Project Hail Mary. This application is spaceship propulsion. 
           The use of self-replicating bacteria which absorb / eat the different radiations in space, store those radiation energies internally 
           like an electrical capacitor and can be made to release / discharge those energies in a single burst at extremely 
           high energy levels just like a high-voltage electrical capacitor discharge, and this high energy discharge by these 
           bio-organisms can propel spaceships at very very high speeds. This mechanism can be used in association with our regular steam propulsion 
           where the bacteria give initial extremely high speed pushes to spaceships and then are not used and then the steam engines with their recoverable water mechanism, 
           are turned on to give continuous propulsion so that higher speeds are reached. Before water collection points in space, 
           the bacteria propulsion on the front of the spaceship is turned on to brake the spaceship 
           and use its steam propulsion to do precise orientation. Maybe our coal propulsion can be used here or 
           it may not need to be used. Water is collected and the propulsion process repeated. 
           At the destination, again the combination of bacteria braking and steam-based positioning is used 
           and maybe to descend on a world the bacteria propulsion can be used in addition to the coal and steam propulsion. 
           This system may allow us lot faster and shorter-duration travel to the stars in a sustainable way using 
           bacteria-constructed matter, than is possible with current propulsion methods or proposed methods like even anti-matter.
           </p>

           <p>
           <span> >> </span> Engineered-for-space food production.
           </p>

           <p>
           <span> >> </span> Plant-based materials like leather and for clothing, packaging etc.
           </p>
                      
           <p>
           <span> >> </span> Intelligent computation using a combination of human brain cells and our Dune Buk
           wearable computer. This will allow autonomous, compact-sized intelligent computation to be
           carried out even without the complete need of humans like in places where humans cannot
           go or are too far away.
           </p>

           <p>
           <span> >> </span> Bio-engineered production of not only plant-based foods but also 
           nutritious originally animal products like sheep milk, chicken egg and honey.
           </p>
           
           <p>
           <span> >> </span> Bio-engineered animal products growing also leads to another interesting thing : 
           synthetic wombs for growing human organs and cat organs and entire living humans and this is important not
           only for solving diseases like blindness and kidney failure but also for populating space with
           humans and also protecting the desirable Earthen lifeforms in case of global devastations.
           </p>

           <p>
           <span> >> </span> The idea that instead of making great effort in building electro-mechanical limbed robots 
           and even bio-mimicking robots which have bio-inspired muscles, to do work in space and on space objects 
           where the environment is dangerous for current regular humans, better is to use natural biology 
           in form of biologically enhanced biological humans to go to those places and also have good clothing against 
           those environmental conditions. This involves creating within humans the abilities for self-repair, 
           space-tolerance and enhanced strength. To get these abilities may require biological elements 
           acting with non-bio nanomachines within the body. It should be possible to thus increase continuous human life span 
           to 2000 years at least.
           </p>

           <p>
           <span> >> </span> However, in enabling biology-based super-enhancement and synthetic wombs for humans, 
           care will be taken that such acquired abilities do not transform humans from their human form into something else 
           i.e. the extreme imagined forms of Transhumanism. So, for example a cat should recognize an enhanced human as a human, 
           a human with gentleness, wisdom, sensitiveness and empathy who a cat can trust... certainly not the robotic 
           massively-muscled enhanced beings of some Hollywood films who do not seem "human".
           </p>

           <h2> One derivation of these researches is eradicating hunger on Earth. Hunger is a two part
             problem
             </h2>
           
             <p>
              <span>(a).</span> A technological problem via use of traditional methods of growing food in open farms
               which are inefficient, centralized, polluting, climate-vulnerable and pest-vulnerable.
              </p>
          
             <p>
             <span>(b).</span> A social problem largely via tax on food, within-family feudalist unequal distribution of food, 
             private profiteering by merchants and geopolitical interferences in the food industry. So many people go hungry or 
             die of hunger despite abundance of food. There are additional culture-dependent wastages of food.
             </p>
             
             <p>
             The simple solution for hunger is not only social enlightenment but also a technological 
             combination of bio-engineered plant-based foods and the nutritious originally animal products 
             like given above, and these productions done in decentralized, neighborhood-level indoor farms.
             </p>

           <h2> Machines for water which include</h2>
           
           <p>
           <span> >> </span> Portable extractors of water from ice, open water, soil and air.
           </p>

           <p>
           <span> >> </span> Water purifiers.
           </p>

           <p>
           <span> >> </span> Electrolysis machines.
           </p>

           <h2>Habitat construction on other worlds</h2>

           <p>
           <span>(a).</span> Building most of the habitation underground for protection against space radiation, low
           temperature, high temperature and space dust / small rocks. The topside will be accessed
           by a pressurized tunnel which is topped with local soil including radiation-stopping volcanic
           soil, and connected to the outside by an airlock.
           </p>

           <p>
           <span>(b).</span> Some of the wall of the airlock can be strengthened transparent wood window which transmits
           outside natural light to a mirror on the far inner side which then transmits that light to the
           inner section of the habitation.
           </p>

           <p>
           <span>(c).</span> Compartmentizing the tunnel’s walls like ship hulls so that a breach in one compartment,
           maybe because of space pebbles crashing into it, can be easily sealed off and can also be
           self-sealing.
           </p>

           <p>
           <span>(d).</span> The internal walls will be made of strengthened wood. Wood is lighter than a metal like
           steel and also growable in the form of its trees.
           </p>

           <p>
           <span>(e).</span> Use of bio-mimicry and biology in the structures for purposes described in previous
           sections.
           </p>

           <p>
           <span>(f).</span> Living quarters can be made to spin at Earth gravity level for healthy living.
           </p>

           <p>
           <span>(g).</span> The ground vehicles will be parked outside the tunnel in protected sheds.
           </p>

           <p>
           <span>(h).</span> All this construction has to be quake-proof.
           </p>

           <p>
           <span>(i).</span> All this construction has to be aesthetic. No need to discard aesthetics just because we
           are in space. Form and function, both are important.
           </p>         
           
           <h2>Serf autonomous satellite for Earth orbit debris cleaning</h2>  
           
           <p>
           There are an estimated 100 million human-made pieces of various sizes in Earth orbit, made
           of metal and other material, which are debris from parts of non-functioning satellites and
           parts from other discarded space vehicles. These pieces size from tiny to large and travel
           around Earth at very high speeds ( 20,000+ kmph ). As human-carrying spaceships rise into
           Earth orbit at various altitudes they have chance of getting hit by these high-speed pieces
           and getting destroyed along with their human cargo or getting very damaged in context of
           current spaceship-building methods. The two current space stations in Earth orbit also can
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

           <p>
           <span>(a).</span> A race of governments to individually have their own Earth observation satellites in Earth
           orbit for purposes of Earth natural resource observation, pollution observation, climate
           observation, habitation observation, infrastructure observation and of course spying.
           </p>

           <p>
           <span>(b).</span> Commerce where commercial satellites were sent by profiteering corporations to provide
           phone communication, internet communication and TV relaying to people around the world
           but largely for fees.
           </p>

           <p>
           Therefore the result was these debris fields and we of Kosmos Society are joining the effort
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
           debris goes into the Sun. The Sun is the best garbage burner we have. The Serf satellite will
           return to the Earth orbit debris fields, extract another net from its inbuilt net store and do its
           work again and again. And there will be a swarm of Serf satellites to do the job better.
           </p>

           <p>
           The Serf satellite will be propelled by water steam jets in the same water-recovery
           propulsion system as in the Alef spaceships which means the Serf can do its job for a long
           time before being called to a safe Earth orbit and be water-refilled and refurbished.
           </p>

           <p>
           For the swarm of Serf satellites to begin work in the first instance, the swarm is released into
           safe Earth orbit by an Alef-A craft.
           </p>

           <p>
           This is the current thinking of us about this cleaner satellite but there may be additions later
           to the satellite.
           </p>

           <p>
           The Serf satellite is called so in honor of the oppressed serfs of Earth, in history and present,
           who toil in dangerous or demanding occupations, doing things the controlling feudals will
           never do themselves and many times the products and services that are made by the serfs,
           are not of useful usage but are made only to increase the clink of the coin in the bank
           accounts of the feudals but the serfs will never hear these coins clink in their own pockets.
           The serf toils to survive in an artificially created wrong situation.
           </p>
           
           <h2>Terraforming</h2>

           <p>
           Explore how to terraform other worlds like Red One. For example, because Red One doesn’t
           have a natural magnetosphere to protect it from most of the Sun’s radiation and cosmic
           radiation, we can create a magnetosphere by installing large electromagnetic field
           generators around Red One to prevent most radiation from reaching the atmosphere of Red
           One and its surface. These field generators will be powered by our Faradn generators.
           Having multiple generators will be useful in terms of redundancy and multi-level 
           coverage.
           </p>

           <h2>Anti-gravity</h2>

           <p>
           A more natural means to fly from worlds ( like Earth ) to space and descend on worlds via “anti-gravity” 
           mechanism aka Gravity Manipulation and this is if possible at all. Such a craft can be very large and of any shape 
           and able to carry maybe hundreds of people at a time, like the lander ships 
           in the Dune story.
           </p>

         </div>
       </div>
     `;
modal.style.display = 'flex';

//08. Contact info
}  else if (chapter === 'contactinfo') {
modalText.innerHTML = `
       <div style="position:relative;padding:2em 2em 1em 2em;background:#fff;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
         <style>
           /* Chrome, Edge, Safari */
           #modalText > div::-webkit-scrollbar {
             width: 10px;
             height: 10px;
             background: #222;
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
           /* Firefox */
           #modalText > div {
             scrollbar-width: thin;
             scrollbar-color: #fff #222;
           }
             
            .contact-card {
           max-width: 600px;
           margin: 0 auto;
           background: rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(10px);
           border-radius: 20px;
           padding: 40px;
           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
           border: 1px solid rgba(255, 255, 255, 0.2);
       }

       .contact-card h1 {
           text-align: center;
           color: #000;
           font-family: 'Poppins', sans-serif;
           font-size: 2.5rem;
           font-weight: 700;
           margin-bottom: 30px;
           text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
       }

       .contact-item {
           margin-bottom: 25px;
           padding: 15px 0;
           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
       }

       .contact-item:last-of-type {
           border-bottom: none;
       }

       .contact-label {
           font-weight: 600;
           color: #000;
           margin-bottom: 8px;
           font-size: 1.1rem;
           font-family: 'Poppins', sans-serif;
           display: flex;
           align-items: center;
           flex-wrap: wrap;
       }
       
       .contact-value {
           color: #000;
           font-size: 1.05rem;
           font-family: 'Roboto', sans-serif;
           word-break: break-word;
           padding-left: 30px;
       }
       
       .contact-value a {
           color: #0000FF;
           text-decoration: none;
           transition: all 0.3s ease;
           display: inline-block;
           word-break: break-all;
       }
       
       .contact-value a:hover {
           color: #000;
           text-decoration: none;
           transform: translateY(-1px);
       }
       
       .tea-invitation {
           margin-top: 30px;
           padding: 25px;
           background: linear-gradient(135deg, #22221dff, #764ba2);
           color: white;
           border-radius: 15px;
           text-align: center;
           font-size: 1.1rem;
           font-weight: 500;
           box-shadow: 0 8px 20px rgba(103, 126, 234, 0.3);
           display: flex;
           align-items: center;
           justify-content: center;
           flex-wrap: wrap;
           gap: 10px;
       }
       
       .icon {
           display: inline-flex;
           align-items: center;
           justify-content: center;
           width: 20px;
           height: 20px;
           margin-right: 10px;
           font-size: 1.2rem;
           flex-shrink: 0;
           line-height: 1;
       }

       /* Tablet styles */
       @media (max-width: 768px) {
           body {
               padding: 15px;
           }

           .contact-card {
               padding: 30px 25px;
           }

           .contact-card h1 {
               font-size: 2.2rem;
               margin-bottom: 25px;
           }

           .contact-label {
               font-size: 1.05rem;
           }

           .contact-value {
               font-size: 1rem;
               padding-left: 25px;
           }

           .tea-invitation {
               font-size: 1.05rem;
               padding: 20px;
           }
       }

       /* Mobile landscape */
       @media (max-width: 600px) {
           body {
               padding: 10px;
           }
           
           .contact-card {
               padding: 25px 20px;
               border-radius: 15px;
           }

           .contact-card h1 {
               font-size: 2rem;
               margin-bottom: 20px;
           }

           .contact-label {
               font-size: 1rem;
           }

           .contact-value {
               font-size: 0.95rem;
               padding-left: 20px;
           }

           .tea-invitation {
               font-size: 1rem;
               padding: 18px;
               margin-top: 25px;
           }
       }
           
       /* Mobile portrait */
       @media (max-width: 450px) {
           body {
               padding: 10px 5px;
           }
               
           .contact-card {
               padding: 20px 15px;
               border-radius: 12px;
           }

           .contact-card h1 {
               font-size: 1.8rem;
               margin-bottom: 18px;
           }

           .contact-item {
               margin-bottom: 20px;
               padding: 12px 0;
           }

           .contact-label {
               font-size: 0.95rem;
               margin-bottom: 6px;
           }

           .contact-value {
               font-size: 0.9rem;
               padding-left: 15px;
               line-height: 1.5;
           }

           .tea-invitation {
               font-size: 0.95rem;
               padding: 15px;
               margin-top: 20px;
               border-radius: 12px;
           }

           .icon {
               width: 18px;
               height: 18px;
               margin-right: 8px;
               font-size: 1.1rem;
           }
       }

       /* Very small screens */
       @media (max-width: 320px) {
           .contact-card {
               padding: 15px 10px;
           }

           .contact-card h1 {
               font-size: 1.6rem;
           }

           .contact-label {
               font-size: 0.9rem;
           }

           .contact-value {
               font-size: 0.85rem;
               padding-left: 10px;
           }

           .tea-invitation {
               font-size: 0.9rem;
               padding: 12px;
           }

           .icon {
               width: 16px;
               height: 16px;
               margin-right: 6px;
               font-size: 1rem;
           }
       }

       /* Large screens */
       @media (min-width: 1200px) {
           .contact-card {
               max-width: 700px;
               padding: 50px;
           }

           .contact-card h1 {
               font-size: 2.8rem;
           }

           .contact-label {
               font-size: 1.2rem;
           }

           .contact-value {
               font-size: 1.1rem;
           }

           .tea-invitation {
               font-size: 1.2rem;
               padding: 30px;
           }
       }

         h2 {
           font-family: 'Poppins', sans-serif;
           color: #000;
           text-align: center;
           margin-bottom: 10px;
           }

           p{
           font-family: 'Roboto', sans-serif;
           color: #000;
           font-size: 1.1em;
           }

           span {
             color:#000;
             font-weight: bold;
             }

         </style>
         <h2>Contact info</h2>
         <div>
          <div class="contact-card">
                       
       <div class="contact-item">
           <div class="contact-label">
               <span class="icon">📺</span>YouTube
           </div>
           <div class="contact-value">
               <a href="https://youtube.com/@KosmosSociety" target="_blank">youtube.com/@KosmosSociety</a>
           </div>
       </div>
       
       <div class="contact-item">
           <div class="contact-label">
               <span class="icon">📧</span>Email
           </div>
           <div class="contact-value">
               <a href="mailto:hello@kosmossociety.space">hello@kosmossociety.space</a>
           </div>
       </div>
       
       <div class="contact-item">
           <div class="contact-label">
               <span class="icon">💼</span>LinkedIn ( Sameer )
           </div>
           <div class="contact-value">
               <a href="https://linkedin.com/in/sameer-kosmos-society" target="_blank">linkedin.com/in/sameer-kosmos-society</a>
           </div>
       </div>
       
       <div class="contact-item">
           <div class="contact-label">
               <span class="icon">📍</span>Address
           </div>
           <div class="contact-value">
               Bengaluru city aka Bangalore, India
           </div>
       </div>
       
       <div class="tea-invitation">
           <span class="icon">🍵</span>
           Talk to us in person over tea
       </div>
   </div>
         
       </div>
     `;
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
