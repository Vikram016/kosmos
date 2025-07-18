// Modal logic for chapter cards
const modal = document.getElementById('chapterModal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');
   


// 04. Our draft constitution for Space
document.querySelectorAll('.chapter-card').forEach(card => {
  card.addEventListener('click', function() {
    const chapter = card.getAttribute('data-chapter');
    if (chapter === 'constitution') {
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;font-family:Roboto,sans-serif;">
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
            h2, h3 {
              font-family: Poppins,sans-serif;
            }
              p {
               font-family: Roboto,sans-serif;
              }

              span {
              color:#fff;
              font-weight: bold;
              }
              
          </style>
          <h2 style="color:#fff; margin-bottom:10px;text-align:center;"> Our draft constitution for Space :</h2>
          <div style="color:#FFFFc5;font-size:1.1em;">
            <p> 
            We present “Same Water”, a draft of a progressive pan-human 
            constitution for Space. 
            This draft is not a full preparation but still substantial and we will further it by discussions in 
            progressive forums and join it with others’ drafts for this purpose.</P> 

            <p> This social system is for simple, harmonious and Nature-ordained organization of humans in 
            Space so that groups in Space operate harmoniously within themselves and with other 
            individuals or groups in space; and individuals and groups as a whole in Space do their 
            sightseeing or research or mining or living and are able to contribute to the collective 
            learnings and continued experience of humanity in Space such that in 12 years from now ( 
            by 2037 ) humans have at least started living in the Asteroid Belt which sits in the space 
            between Red One and Jupiter.</P>  

            <p> The name “Same Water” is derived from a line in the wonderful Bengali and Hindi languages
            song called “Shob Lokey Koy” which appeared in the music series Coke Studio Bangla
            Season One. The song is a celebration of two past South Asian humanitarian mystics, Lalon
            Fakir and Kabir Das, and calls for unity of humans because they all are the waters from the
            same well except for some differences in the vessels which then contain the waters, and this
            is what we Kosmos Society want through our constitution draft - a harmonious unity of
            humankind in Space, removed of all the artificial unpleasantnesses and tragedies that
            humans do or endure presently on Earth. Below are some points from the Same Water draft.
            Some of these are “To be done” : </p>

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">The Universe and human nations on Earth : </h2>

            <p>
                The Universe / Space has existed forever, much before some human scientists foolishly
                affixed an age to it on the basis of misguided mathematics i.e. the Big Bang Theory and now
                there are two Big Bang theories. Space has existed before human nations existed on Earth,
                in fact before Earth itself existed. The concept of Earthen Nations / Nation States comes
                from as recent as the French Revolution of the late 1700s which led to France becoming a
                republic which was meant to become citizen-governed with natural human freedoms as
                against France previously being a kingdom governed by a supreme feudal lord.
                </P>

            <p>
                As per natural laws no human from one nation is automatically superior in the grandness of
                Universe / Space than a human from another nation. A socially-advantaged human from one
                “superpower wealthy nation” will be burned up in the Sun as easily as a money-poor human
                from another “superpower wealthy nation”... to believe otherwise is pointless arrogance.
                Some thoughtful Space travellers who have gone to Earth orbit have spoken of seeing the
                Earth as a singular delicate blue world with no natural boundaries dividing nations, though to
                us adding here : with the exception of Australia and other island nations bounded by the
                seas but that is besides the point. It is then unwise to be fanatic nationalists in Space when
                just the Sun can fit in itself a million Earths and the Sun being just a medium-sized star, and
                in reality the Sun instantly burning up those million Earths and all the nations within them. A
                human is a tiny speck in the infinite Universe.
               </P>

           <p> 
           It is then natural, rational, automatic and moral to expect that Space be a place of a united
          humanity instead of carrying the needless artificial hates and divides on Earth. The
          timelessly existent Space and Space objects should not be divided up by humans by way of
          selective ownerships by Earthly nations and not be introduced with militarization to defend
          those selective ownerships against other humans. We should not allow the nationalist
          bickerings and tragedies on Earth to be carried over into Space. Space should be the
          peaceful exploration medium, mining place and settlement place of a collective humanity
          under a truly democratic framework. National boundaries are artificial but human fraternity is
          natural. </p>

           <p> [ To be done ] </P>

           
            <P>However, as per natural laws no human from one nation is automatically superior in the 
            grandness of Universe / Space than a human from another nation. A socially-advantaged 
            human from one “superpower wealthy nation” will be burned up in the Sun as easily as a 
            money-poor human from another “superpower wealthy nation”... to believe otherwise is 
            pointless arrogance. Some thoughtful Space travellers who have gone to Earth orbit have 
            spoken of seeing the Earth as a singular delicate blue world with no natural boundaries 
            dividing nations, though to us adding here : with the exception of Australia and other island 
            nations bounded by the seas but that is besides the point. It is then unwise to be fanatic 
            nationalists in Space when just the Sun can fit in itself a million Earths and the Sun being 
            just a medium-sized star, and in reality the Sun instantly burning up those million Earths and 
            all the nations within them. A human is a tiny “zarra” / speck in the infinite Universe. </p>

           <P> Secondly, the human technological advancements of now and the social advancements 
            have come from developments from people of various parts and cultures of Earth, whether 
            those people acting individually or by group efforts and these people taking inspiration from 
            elsewhere or even being helped by others. Even the French Revolution previously 
            mentioned did not derive its idea in isolation but derived from philosophers from previous 
            centuries, millenia and even before from everywhere. For example, the Greeks of 2500 
            years ago thought up the semi-democratic idea of Demokratia where many non-slave male 
            citizens directly participated in the governance of their cities rather than kings and lower 
            feudals doing it. These Greeks shared their era with another liberator, Buddha, in South 
            Asia/India, and these Greeks themselves took some of their science ideas and social philosophies 
            from Egypt and West Asia. Also, humans have mixed throughout history. The South Asian/Indian 
            great emperor Ashoka lived more than two centuries after Buddha. He was great not 
            because he was an emperor but because he used his position to advance the teachings of 
            Buddha throughout South Asia/India and beyond. Ashoka’s ancestry had cross-cultural 
            connections because his grandfather the king Chandragupta Maurya married a girl from Iran 
            called Helena whose father was the Greek empire’s Greek governor of West Asia, Seleukus 
            Nikator. Helena’s mother was Irani. Helena was aged 15-17 and Chandragupta was 40 and 
            it is said that both liked each other at first sight even though theirs was a political marriage 
            proposed by Helena’s father. It is possible that Helena’s son by Chandragupta was 
            Bindusara whose son was Ashoka so Ashoka may have had Greek and Irani genes. </P>

            <p>So it will be irrational, immoral and ungrateful for a group from Earth to claim national or 
            cultural exclusive superiority on Earth and act in an ultranationalist way while not 
            acknowledging the shared history of humanity and not acknowledging they using 
            technologies and social philosophies that may have had origins elsewhere on Earth.</p>

            <P> It is then natural, rational, automatic and moral to expect that Space be a place of a united 
            humanity instead of carrying the needless artificial hates and divides on Earth. The 
            timelessly existent Space and Space objects should not be divided up by humans by way of 
            selective ownerships by Earthen nations and not be introduced with militarization to defend 
            those selective ownerships against other humans. We should not allow the nationalist 
            bickerings and tragedies on Earth to be carried over into Space. Space should be the 
            peaceful exploration medium, mining place and settlement place of a collective humanity 
            under a truly democratic framework. National boundaries are artificial but human fraternity is 
            natural.</p> 

            <h2 style= "color:#fff; margin-bottom:10px;">Natural equality in accessing Space and living in Space : </h2>
            
            <P>The current human-transport space industry is feudal where aspiring Space travelers 
            have to fit either of three categories :</P> 
            
           <P style="margin-left:1em; margin-bottom:10px";> <span>(a).</span> Be associated with the government. </p>
           
           <P style="margin-left:1em; margin-bottom:10px";> <span>(b).</span> Have huge monies to pay for a seat to Space… at least 20 million dollars. </P>
           
           <P style="margin-left:1em; margin-bottom:10px";> <span>(c).</span> Be a regular person picked by the very few sponsored-trip space programs in a lottery 
            system and this does not come true for almost all. </p>

            <p>Other people simply don’t have a chance and this is unfair as it is only human social 
            constructs which are doing this preventing and not the Universe through some celestial 
            messaging which was witnessed by the first two humans in Space, Yuri Gagarin and 
            Gherman Titov and then every human traveler afterwards. And the upcoming commercial 
            Space industry promoted by certain groups on Earth only adds to this feudalism by carrying 
            commerce to Space, for example the strange art of affixing pointless commercial projection 
            slogans to Space like “The trillion dollar space economy” where part of that trillion will come 
            from charging huge monies to take people to Space and these huge monies will go into the 
            pockets of a very few and maintain an unfair system where these very rich few will not 
            enable cheap or free Space travel just so that these huge monies continue. A cycle of 
            unfairness.</p> 

            <P>The simple answer is to enable a cheaper, simpler and safer Space industry which also 
            propagates true liberty, equality, fraternity and progressive pan-humanism. We of Kosmos 
            Society will do this enabling. On Earth and in Space, manufacturers and deployers of 
            Kosmos Society’s simplified and cheaper Space systems and other systems should collect 
            minimal fees or no fees for : </P>
            
            <P style="margin-left:1em; margin-bottom:10px";><span>(a).</span> Providing and repairing the personal systems ( like the Dune Buk wearable computer ). </p>
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> Transporting people </p>
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> Providing food, communication, health support and rescue in Space.</p> 
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(d).</span> Transporting any habitation equipment in Space not makeable via ISRU ( In-situ 
            Resource Utilization ). </p>
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(e).</span> Transporting research equipment.</p> 
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(f).</span> Transporting any large reasonable leisure equipment.</p> 
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(g).</span> Transporting mining equipment and mined produce in Space. </p>
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(h).</span> Providing habitation in Space.</p> 

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;"">Social organization in Space travel and Space living : </h2>

            <p>The primary reasons for the exploration in Space will include : </p>
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
            on Earth to be carried over into Space. </p>

            <p>So the organization of work groups in Space should be democratic and that is easily done by 
            organizing them as Workers Cooperatives. The idea of Workers Cooperative has association 
            with the older ideas of liberty, equality and fraternity. <br> A Workers Cooperative has seven 
            general outcomes :</p>

            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(a).</span> It is all the workers who directly own and manage an organization and equally divide 
            amongst themselves any money income. 
            </p>

            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(b).</span> There is no feudal boss and no subordinate… all the workers are equal co-workers in 
            respect, right to participate in the organization’s decisions, voluntary idea giving and 
            cross-team idea giving. Any worker can call a workers council for a complaint, issue raising 
            or idea suggestion, and the other workers must listen and participate. 
            </p>

            <p style="margin-left:1em; margin-bottom:10px";> 
           <span>(c).</span> There will be a natural tendency to not have a “boss cabin”.</p>

            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(d).</span> Worker loyalty towards the organization is high because the worker is given due respect 
            as an individual human with feelings, personality, concerns and potential.
             </p>

            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(e).</span> Every worker has to be accepting of internal critique but will have the right to defend 
            themselves. 
            </p>

            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(f).</span> Efficiency and production variety of the organization is greatly increased because of the 
            diversity of useful ideas, skills and experiences from the various volunteering workers.
            </p>
 
            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(g).</span> The collective human society composed of Workers Cooperatives, whether on Earth or 
            in Space, becomes an actually developed, gentle, evolved, harmonious and prosperous 
            society. As smile-bringing as the city of Istanbul with cats everywhere.</p>

            <p style="margin-left:1em; margin-bottom:10px";> 
            <span>(h).</span> The existence of a Workers Cooperative doesn’t depend on if the economic system 
            works with money system or money has been abolished. The Workers Cooperative concept 
            is efficient in both situations. 
            </p>

           
 
            <p> Other than Workers Cooperatives in Space, there must be decentralization / 
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
            that person will be the Coordinator. The Coordinator is a time-bound position decided by 
            democratic discussion and consensus within that cooperative and in accordance with 
            Natural laws. All the workers including the Coordinator can be of any reasonably responsible 
            age - 13 or 30 or 90… anyone as long as they make sense and are willing and able to put 
            physical or intellectual effort including being a good leader. And this responsibility of 
            “Coordinator” can rotate between the cooperative’s members as per requirement or 
            consensus. So a Workers Cooperative is democratic, enables harmony and enables more 
            focus on the group’s purpose. 
            </p>

            <p> Further, a tourist in Space a few hundred thousand kilometers from Earth ( the Moon ) or a 
            few hundred million kilometers from Earth ( the Asteroid Belt ) will naturally feel deprived 
            from Earthen settings including the social aspect and the simple fact of feeling the Sun’s 
            heat on the open face and this deprivation will depress a person for a moment or more, 
            despite that tourist’s purpose of tourism. But if every person in the Space efforts, including 
            the tourist, participates in the tasks by being part of the Space Workers Cooperatives it will 
            keep him or her engaged and away from depression, enable fraternity and contribute to one 
            more hand in the tasks. </p>

            <p> So, humans in Space will be a collection of Workers Cooperatives collaborating with each 
            other on a common and equal human level regardless of their origin nation and social station 
            on Earth and they will agree on the same ideal natural laws for humans and help each other. 
            Thus harmony in Space and also harmony contributed on Earth when these people return to 
            Earth carrying their gentle experiences in the Space Workers Cooperatives. </P>

            <h2 style= "color:#fff; margin-bottom:10px;" >Tea and Space : </h2>

            <p> Intoxicating substances like alcohol should not be used in the inherently risks-filled 
            environment of Space, including the social mistakes people will make by such consumption 
            and lead to disaster in Space. Celebrations can be done with rounds of tea and biscuits. Tea 
            has been such a great multi-purpose discovery… the drink of philosophers, revolutionaries, 
            inventors, discussers, intellectual and physical laborers, lovers of taste and refinement, 
            providing energy and relief in heat, cold and rain, in the heat of the deserts and the cold of the 
            same deserts at night, in the cold of snows and the heights of the high mountains, the 
            adda tea houses of Calcutta with the Calcuttans doing rounds of tea and discussing the 
            world… all the while the tea providing health benefits.</p>

            <p> Tea is one of the good inventions of China which got added with three additions from other 
            lands : milk in tea from Mongolia, sugar in tea from Britain and Egypt-origin biscuits. And tea 
            comes in various varieties whether in tea leaf, additional addings for taste, health and 
            experience like lemongrass, ginger and tapioca pearls, and preferences like the water-based 
            Sulaimani chai or the milk-based Assam tea or the ice tea. </p>

            <p> In Space, other than the non-intoxicating, energizing and health-bringing nature of tea 
            usage, regular tea’ing also will hydrate the skin which may become dry in spaceships and 
            spacesuits and will also create solidarity because of group drinking. Tea is also a good 
            laxative including when starting the day. Further, tea leaves are a good natural fertilizer for 
            plants. </p>

            <p> And maybe tea grown in Space may become a new variety or multiple varieties in 
            accordance with conditions in different Space locations. </p>
          
            <h2 style= "color:#fff; margin-bottom:10px;">Appearance and personality of the Space travellers : </h2>
            
            <p> [ To be done ] </p>

            <h2 style= "color:#fff; margin-bottom:10px;"> Effects of greatly increased human life : </h2>
            
            <p> [ To be done ] </p>
            
            <h2 style= "color:#fff; margin-bottom:10px;"> Family system in Space : </h2>
            
            <p> [ To be done ] </p>

            <h2 style= "color:#fff; margin-bottom:10px;">Sports and recreation in Space : </h2>

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
            
            <h2 style= "color:#fff; margin-bottom:10px;">Human language in Space : </h2>

            <p> English is the most appropriate language and will be the base language in our Frema 
            internet system but provision must be there for use of other languages but with the 
            understanding that such communications must be open and translatable and pronounceable 
            by other language speakers. </p>

            <h2 style= "color:#fff; margin-bottom:10px;">Education in Space :</h2> 

            <p>The purposes of education are these : </p> 

           <P> <span> >> </span> To liberate oneself from any wrong, oppressive and unscientific traditional cultural 
            impositions and thus to know one’s reasonable rights as a human. </p>

            <p> <span> >> </span> To understand that as a human we must collaborate with others in local society and in 
            humanity in general and that the good of society and humanity is our good. And good acts 
            must be done not to earn points so that heaven’s door opens for us but to be genuine in 
            empathy for others. That we must be gentle, sensitive, empathetic and selfless instead of 
            sneaky, amoral and selfish.</p> 

            <p> <span> >> </span> To begin to understand the timeless and infinite universe and acknowledge our very 
            humble individual place in the grandness of the universe, thus our approach to the universe 
            must be with gentleness, sensitiveness, receptiveness and humbleness. Even a 
            medium-sized star like the Sun is uncountably more powerful than any mere human who is a 
            billionaire with 15 college degrees, 40 years of experience in some corporate sector and 
            very proud of his culture. The Universe / Space does not care for these arrogant human 
            affiliations. </p>

            <p> This above should be our approach to learnings of Space and the resulting bettering of 
            humanity.</p>

            <p> Decades of in-person human presence in Space has been in a very limited way, with most of 
            it in Low Earth Orbit and a little on the Moon. Cosmonauts have reported their in-person 
            understandings of Space like they seeing flashes in their eyes even when they close their 
            eyes. Other experiences like smelling burnt smell when they are in the airlock. These 
            experiences were not proposed by academics who usually pretend to be experts of the 
            Universe despite never having stepped into the Universe even once. The Big Bang Theory 
            confidently declares the birth of the Universe / Space to be 13.8 billion years ago but this is a 
            theory by academia, proposed solely on the basis of mathematical equations on paper. This 
            way these maths-as-a-religion academics are no different than astrologers. These 
            academics went about lectures and conferences chanting “Big Bang Theory” until recently 
            when someone proposed a second Big Bang which created Dark Matter. Dark Matter is 
            again another nonsensical maths-basis idea which has been around for many decades but 
            has never been observed, let alone measured. These academics don’t know how big the 
            universe is, they have never stepped into the universe, yet they confidently declare its 
            birthday to the microsecond. </p>
            
            <p> So to understand Space / Universe we must reject the current dominance of mathematics in 
            astronomy and be humble, gentle, sensitive, receptive and natural to the knowledge of 
            Space / Universe by actually going into Space and narrating our every experience to the rest 
            of humanity. </p>
            
            <p> We must also accept the very simple idea that Space / Universe is timeless and infinite and 
            we don’t know what all kinds of objects are in Space and what kinds of life types are in 
            Space. </p>

            <p> We must look at the natural responses of the first two human travellers to Space - Yuri 
            Gagarin and Gherman Titov.</p> 

            <p> Among the statements of Cosmonaut Yuri are : </p>
            
            <p style="margin-left:1em; margin-bottom:10px";> <span>(a).</span> “Orbiting Earth in the spaceship, I saw how beautiful our planet is. People, let us 
            preserve and increase this beauty, not destroy it!” </p>
            
            <p style="margin-left:1em; margin-bottom:10px";> <span>(b).</span> “Rays were blazing through the atmosphere of the earth, the horizon became bright 
            orange, gradually passing into all the colors of the rainbow: from light blue to dark blue, to 
            violet and then to black. What an indescribable gamut of colors! Just like the paintings of the 
            artist Nicholas Roerich.” </p>
            
            <p style="margin-left:1em; margin-bottom:10px";> <span>(c).</span> “The main force in man — is the power of the spirit.”. Here “Man” of course means 
            Human.</p> 
            
            <p> The most famous statement of Cosmonaut Gherman was when he visited USA in 1962 and 
            was asked by reporters how his space flight affected his understanding of life. He said 
            "Sometimes people are saying that God is out there. I was looking around attentively all day 
            but I didn't find anybody there. I saw neither angels nor God". </p>

            <p> These two people were humble and natural in their approach to Space and to life. Certainly 
            not the arrogance of maths-driven academics and astrologers, nor the unthinking ordinary 
            people who accept their arrogant pronouncements without questioning because they think 
            even simple questions will make them seem foolish. However, it is the simple, “foolish” 
            questions which have benefited humanity throughout its history in its bettered social systems 
            and better technology and the presence of Human in Space. </p>
            
            <p> Knowledge is bettered when it is shared without being taxed and without demands that the 
            receiver must only be of certain artificial social classes including having five college degrees 
            compulsorily. There are some societies which have more college degree graduates presently 
            than the entire human populations of some other societies. However, the former societies 
            generally are not considered among the contributors of science and technology nor of better 
            human systems despite these societies considering a college degree as being the mark of 
            knowledge. Indeed, these societies are mere users of machines and knowledges that other 
            societies and individual people of natural thinking created over thousands of years without 
            consideration of college degrees or other kinds of artificial social separations. Michael 
            Faraday is the person whose experiments in electro-magnetics and electro-chemistry have 
            led to our modern world using electrical machinery whether the washing machine or the cell 
            phone. And he studied only till middle school in terms of the modern assembly-line 
            degree-based education system. He was not at all a college graduate, let alone one with 
            three post-graduate diplomas and subsequent 50 years of professional experience. This 
            means that those societies which place great multi-generational emphasis on college 
            degrees must stop using electrical machinery because this field was forwarded by the 
            “unschooled” Michael Faraday. Stopping thus will be a principled stand. But will they ? 
            </p>
            
            <p> So it follows that education in Space must be natural and democratic… democratic not only 
            in the source people but also the receiver people. In the modern world there have been four 
            big examples of untaxed and for-all education and collaboration systems : one the internet 
            itself, second the Open Source Computing movement, third the Wikipedia and fourth the 
            Khan Academy. These examples should be continued in the exploration and settlement of 
            Space. Since we speak for Workers Cooperatives as the organizational method for humans 
            in Space, each of the people involved in the cooperatives should be participants in 
            live-narrating their experiences in Space as also later recording their experiences and 
            adding these experiences to the Frema internet blog that is produced by each Worker 
            Cooperative, and these blogs being accessible by every human in Space and on Earth. The 
            blogs will have text, voice, still pictures and videos because someone’s experience will 
            become non-limited in explanation by presenting it in different formats. And these blogs will 
            have a response system for the readers and viewers though of course the reception of these 
            informations by the readers and their responses by the readers may take small delays to 
            very large delays because of the in-Space location of the blog producers and their duties 
            and other activities. The one-way communication time itself may be from about a second ( 
            the Moon ) to 13 minutes ( Red One ) to many many hours, and these delays just within the 
            Solar System. </p>
            
            <p> Then comes the continued education of younger humans in Space who have arrived from 
            Earth or those younger humans born in Space. The medium of education must be English 
            but also considered with regards to the birth language of that younger human. But a lot of 
            this aspect has to be developed not now but once Space settlement starts in full flow. </p>
            
            <h2 style= "color:#fff; margin-bottom:10px;">Basis of satellite design : </h2>
            
            <p> There should be no design of needless nano-satellites and larger satellites that are currently 
            built by every second engineering college and launched into Earth orbit by misguided launch 
            organizations and cumulatively make Earth orbit dangerous for humans to travel in - an 
            unnecessary situation brought about by profit-mindedness, competition in education, 
            unscientific thinking and avoidable ultranational posturing. On the contrary, satellites around 
            Earth or other worlds or in open Space should be few and larger trackable systems which 
            can be repaired in orbit or in place or retrieved for recycling. Secondly, all new satellites 
            should be managed by a collective human committee. We of Kosmos Society will keep this 
            as a necessary element when designing our Frema space-capable internet system. We will 
            also design systems that contribute to clearing up the current space debris around Earth. 
            Please read the section about Serf satellite in the “More on some of our techno projects” 
            chapter on this website. </p>
            
            <h2 style= "color:#fff; margin-bottom:10px;">Mining in Space : </h2>
            
            <p> Space belongs to no single human nation state. Space belongs to all humankind in a 
            collective sense and no nation state can endanger other humans by placing weapons of 
            mass destruction in open Space or around Space bodies nor can a nation state exclusively 
            claim Space objects for taking resources ( say even from a star like the Sun ). Similar is the 
            agreement undertaken at the UNOOSA ( United Nations Office for Outer Space Affairs ) 
            which is a department of the United Nations Organization ( the UN ). Though the UN has 
            failed to prevent invasions, needless conflicts, genocides and subversions since its inception 
            in 1945 and has served only as a decoration, very much not uniting nations despite its name, 
            its UNOOSA department at least makes sense.</p> 
            
            <p> In Space no one should be a Scrooge McDuck i.e. not greedily see Space as yet another 
            natural resource to do selfish profiteering from, to the exclusion of other humans and to the 
            spoiling of Nature, but instead seeing Space resources as the means to bring easy material 
            enrichment of every human on Earth and beyond on an equal basis, where all humans are 
            collectively prosperous. It then also follows the necessity that national governments on Earth 
            will participate in such a democratic pan-humanist effort.</p>                

            <h2 style= "color:#fff; margin-bottom:10px;">Project Mirkeen-1 : </h2>

            <p> Project Mirkeen-1 will be our effort in building a humanity-uniting progressive research base 
            on the Moon ( Earth's moon ), having the name “Mirkeen-1” and to be built beginning in 
            2036, or earlier if possible. </p>

            <p> Presently, Artemis Accords and ILRS ( International Lunar Research Station ) are two 
            projects for the near-future construction of bases and other infrastructure on the Moon and 
            includes the space vehicles needed to carry humans and luggage between Earth and the 
            Moon towards the construction of the bases and during their operation. Artemis Accords is 
            led by the USA government and the ILRS is led by the governments of China and Russia, 
            and these three governments have needlessly extended to the Moon their disharmony-filled 
            Earthen bloc politics when instead they should have proposed a pan-human, collective Moon 
            Base effort. So we of Kosmos Society propose a third way… sometimes there is a third way 
            as nicely put in the slogan of the World Social Forum - "Another world is possible". We call 
            this third way as “Project Mirkeen-1".</p>

            <p> “Mirkeen” is a combination of “Mir” and “Keen”. “Mir” means Peace in the Russian language 
            and also World. “Keen” is the main city in the Dune story. Our project involves building a 
            separate base on the Moon called Mirkeen-1, separate to Artemis Accords and ILRS, in the 
            following way : </p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(a). </span>Bring together private citizens from Earth who believe in natural human beliefs including 
            pan-human fraternity and want to settle on the Moon whether semi-permanently or with 
            regular visits to Earth. The participating citizens of Earth can be from The Global South, from 
            pan-humanist private organizations from anywhere and any other pan-humanist individual 
            citizens of humanity.</p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(b).</span> With all this brought-together “snapshot of humanity” we begin to build the Mirkeen-1 
            base on the Moon starting 2036 or earlier, using our to-Moon transport means ( 
            our-designed Alef-A airship-spaceships manufactured by partner governments ) and our 
            other technologies and the technologies of other partner pan-humanist organizations with 
            common protocols. The construction workers will base themselves in the Alef-As until the 
            base is built. </p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(c).</span> We will site the Mirkeen-1 base underground in a place which will be in line-of-sight with 
            Earth but not far from the Moon's Far Side. These criteria are for safety from space rocks 
            and radiation, to be in constant communication with Earth and to sally out to the Far Side at 
            will to learn deep-space operations as well as to obtain water from the possible water ice 
            there. There will be at least one communications relay satellite in the Moon's orbit above Far 
            Side to connect to a few relay satellites above Earth with these relay satellites being 
            operated by our partner organizations.</p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(d).</span> The Mirkeen-1 base will be designed to be partly self-sufficient food-wise, in water, in 
            production of clothing, computers, ground vehicles etc but be extendible for meeting with 
            future self-sufficiency situations. The electricity will be decentralized and will use our safe, 
            self-sustaining, modular and easily repairable Faradn generators instead of the very unwise 
            nuclear generators or solar photovoltaics proposed by many in the current Space industry. </p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(e).</span> The construction materials for the Mirkeen-1 base, ground vehicles etc will be partly 
            materials carried from Earth in our Alef-A airship-spaceships and partly local materials as 
            per application ( ISRU - In Situ Resource Utilization ). The ground vehicles will be our Ra-H 
            vehicles.</p>

            <p style="margin-left:1em; margin-bottom:10px";> <span>(f).</span> The social organization system of the Mirkeen-1 base will be the points from the rest of 
            our proposed “Same Water” constitution for space. </p>

            <p style="margin-left:1em; margin-bottom:10px";><span>(g).</span> The Mirkeen-1 base will be the first very advanced society which won’t have money, tax 
            and feudalism. The true wealth of a society is not in the money, mansions and luxury 
            motorcars held by a few privileged. The true wealth is the potential and the positive ideas 
            and works of the citizens and these can exist without money. In fact the potential of a society 
            is eroded by the presence of money because so many people have potential but when they 
            get socially excluded through the various aspects of money they don’t get the opportunity to 
            realize their potential and their society does not get to benefit. This realization extends to all 
            of humanity. </p>
            
            <p style="margin-left:1em; margin-bottom:10px";><span>(h).</span> For the time being the Mirkeen-1 base can engage in commercial activities to sustain 
            itself other than getting support from Kosmos Society and its partners on Earth. This 
            commerce will be in accordance with our Same Water constitution for Space. The commerce 
            can be about Moon-available minerals needed on Earth ( iron, silicon etc ) or on others’ 
            space stations around Earth; the commerce can be about those produced materials and 
            services which benefit from the low-gravity and vacuum conditions on the Moon; the 
            commerce can be tourism on the Moon; etc.</p> 

            <p style="margin-left:1em; margin-bottom:10px";><span>(i).</span> The Mirkeen-1 base can also have guests from the Artemis Accords base and the ILRS 
            base. All human-spirited people will be welcomed with tea and biscuits. </p>

             <p style="margin-left:1em; margin-bottom:10px";><span>(j).</span> The Mirkeen-1 base will serve as a store for desirable biological material and
              technological recipes so that if Earth is threatened by natural events ( asteroids, comets, big
              solar flares, pandemics, super volcanoes etc ) or unfortunately done human-made events (
              global war etc ), advanced human life and other desirable lifeforms on Earth ( like plants,
              cats, fish, birds, deer etc ) can recover and thrive. This arrangement will supplement the
              Svalbard Global Seed Vault.
              </p>

            <h2 style= "color:#fff; margin-bottom:10px;"> City design and city reconfiguration on Earth : </h2>
            
            <p>The Space experiences including the Mirkeen-1 base and our Space machines will provide 
            derivations for city design for Earth and its transportation. This effort will consist of designing 
            large and small cities which are aesthetic, scientifically-built, citizen-managed, humanist, 
            largely food-wise self-sufficient, largely employment-wise self-sufficient and gentle, built to 
            take the pressure off current chaotic cities and also bring reasonable city culture to rural 
            people. The public transportation system will be built around our Ra-B buses, bicycle lanes 
            and footpaths. The only personal vehicles allowed will be pedal-only bicycles. The 
            gentleness in these cities will also come from creating a safe and comfy environment for cats 
            to prosper. </p>
           
            <p> We will make a derivation of the Ra-H vehicle for Earthen public transportation in the form of 
            a 15-passenger bus called Ra-B which can be used for full capacity mass public transport or 
            as taxis for people going for special occasions. The Earthen Ra-B will normally use 
            hovercraft mode on the current roads and other paths and switch to wheelcraft mode and 
            aircraft mode when needed… for example, travel on mountain roads is dangerous in 
            hovercraft mode so wheels are needed. Traveling between cities can be done by using the 
            aircraft mode. These Ra-B vehicles will be capable of being the sole means of mass public 
            transport in cities and other habitations on Earth, replacing most current personal vehicles 
            except for the pedal bicycle. </p>

            <p> Presently, the few billion motorized personal vehicles on Earth are greatly the cause of all 
            kinds of needless pollution, noise, mishaps, crimes, Climate Change, social inequality, 
            disharmony and unsightliness. Many governments have tried to resolve this problem within 
            their countries or cities by taking half-steps like “Odd, even formula” ( allow on road the 
            vehicles with odd numbered number plates one day and even numbered the next day ) and 
            building more flyovers and metro lines. But these governments have not considered the very 
            simple fact that road traffic problems exist because of what causes the traffic - vehicles… in 
            particular personal vehicles. Building flyovers has only made the unthinking public to 
            purchase even more personal vehicles to the extent that many families have at least two 
            vehicles for no other reason than to display their middle class new-not-actually-rich wealth. 
            Putting metro lines has also not caused the public to sell their vehicles and put the sale 
            money into starting a business or touring other countries. Installing expensive “artificial 
            intelligence” systems to control traffic lights will also never solve the problem. 
            Further problems are the disharmony and unsightliness caused by personal vehicles parked 
            on roads in residential areas and public areas. Residents have to engage in quarrels with 
            personal vehicle owners who park their vehicles in front of someone’s house gate or these 
            vehicles creating obstruction on the roads and the vehicles parked on footpaths thus 
            blocking citizens from using the footpaths, leading to potential mishaps by the citizens 
            having to walk on the road and getting hit by vehicles coming from front or back. Personal 
            vehicles also clog public areas whether by being parked haphazardly in front of shops or 
            other public establishments or in squares or just clogging the roads whether they are parked 
            or running. In many societies the citizens using personal vehicles use the horn needlessly. 
            All these chaotic experiences create an actual headache for the others using the road, 
            create quarrels on the road, lead to antisocial behavior, other crimes and health problems 
            and thus the society is rendered full of chaos, crime, mishealth, disharmony, competition and 
            unproductiveness. </p>
           
            <p> And these are artificial problems so they can be solved. The problems collectively largely 
            exist because of the existence of personal vehicles and will be solved only with the simple 
            act of abolishing personal vehicles with the exception of the simple pedal bicycle. And these 
            personal vehicles must be replaced with public mass transport vehicles which are not only 
            cheaper to build, not only provide a universal solution, not only are aesthetic but also are 
            electric in an eco-friendly way to enable a sustainable public transportation mechanism all 
            over Earth. The solution is our Ra-B bus which is a hybrid vehicle of 
            hovercraft-wheelcraft-aircraft type and a few hundred thousand of our Ra-B buses combined 
            all over Earth will resolve all those listed transportation-related direct problems and indirect 
            problems.</p> 
           
            <p> Another advantage of Ra-B buses will be preventing the need to build a large number of 
            bridges across rivers in cities because with just the presence of a small ramp on the 
            riverside these public-carrying Ra-B craft in hovercraft mode can smoothly transit from land 
            to river and the reverse, not needing most bridges which mainly carry wheeled vehicles. A 
            further advantage in using hovercraft mode is enabling smooth public transport in 
            badly-designed cities which face yearly flooding. And when needed these Ra-B vehicles can 
            turn aircraft mode on and travel short distances by air. 
            The Ra-B bus platform can also be made into other kinds of vehicles like ambulance, public 
            security vehicle, garbage collection vehicle etc. </p>
            
            <p>[ To be done ] </p> 
           
            <h2 style= "color:#fff; margin-bottom:10px;"> Meetings or sightings of aliens : </h2>
            
            <p>It is not known what kinds of alien life we will encounter, whether on Red One or on Europa 
            or beyond the Solar System, whether in the form of bacteria or as plants or as more 
            intelligent animals or something else. It is not known if they have been communicating with 
            us or with any other lifeforms in the infinite universe. Some humans say we must actively 
            find them, some say it is dangerous to try communicating with other lifeforms because they 
            may seek us out to wipe us out. But advancement is of course seeking them. </p>
            
            <p>And if we seek them we must of course ideally have collective human prosperity, collective 
            harmony, gentleness, sensitiveness, empathy and intelligent consensus as that will present 
            our best unified side to any other intelligent lifeforms and that will come by agreeing on 
            sensible manifestos like our “Same Water” constitution for Space. </p>
            
            <p>There is a wonderful story written and posted on LinkedIn by Don Michael Feeney called 
            “The Interplanetary Civilian: A Novella of Mars and Memory”. This story speaks of the 
            building of the first human settlements in Space in terms of technologies and social systems 
            including pan-human development, decentralized governance, the first human baby born in 
            Space, an artificial intelligence included with empathy, and a very different kind of alien 
            encounter.</p> 
            <p>This is the link to the story [  <a href=" https://www.linkedin.com/pulse/interplanetary-civilian-novella-mars-memory-don-michael-feeney-676nf " target="_blank" style="color:#FFFF00;">https://www.linkedin.com/pulse/interplanetary-civilian-novella-mars-memory-don-michael-fee
            ney-676nf </a>
             ].  
            This story prepares us to look for intelligent lifeforms by being open-minded as 
            to their type and their reaction to us and our reaction to them. </p>
           
            <p> While looking for alien life or encountering them by chance, we must acknowledge the 
            general idea that ultimately we and every kind of life origined within dying stars and maybe 
            within the dust around stars and maybe the gas clouds in free Space, so in a sense 
            pan-universe fraternity. </p>
           
            <p> It is said that Space-origined lifes were carried through Space in various forms like spores, 
            viruses, eggs etc and seeded various worlds including ours to various levels and then 
            evolutionary steps took over in many of those worlds depending on the conditions of those 
            worlds. This idea is called Panspermia. For example, it is said that the octopus and squid in 
            Earth’s seas are not from Earth but from Space, their eggs carried within ice rocks and then 
            released on Earth when the ice rocks fell into the seas here. This is a good read about this 
            topic [ <a href=" https://blog.padi.com/facts-about-octopuses-that-prove-theyre-aliens/ target="_blank" style="color:#FFFF00;"> https://blog.padi.com/facts-about-octopuses-that-prove-theyre-aliens/</a> ]. 
            </p>
           
           
            <p> And who knows, we may find that cats are indeed aliens as goes the internet legend, LOL.</p>
          </div>
        </div>
      `;
      // 01. Introduction
      modal.style.display = 'flex';
    } else if (chapter === 'introduction') {
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
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
            color: #fff;
            margin-bottom:10px;
            }

            p {
            font-family: 'Roboto', sans-serif;
            }

            span {
              color:#fff;
              font-weight: bold;
              }

          </style>
          <h2 style="color:#fff; text-align:center;margin-top:20px;font-family:Poppins,sans-serif;">Bases Of Our Yuri Plan</h2>
          <div style="color:##FFFFc5;font-size:1.1em;font-family:Roboto,sans-serif;">
           
            <h2 style='margin-bottom:10px; color:white;'>The disappointed 100,000 people desiring space travel :</h2>
            
            <p style='margin-bottom:10px;'>Now in 2025 there must be at least 100,000 people in the world desiring to go to space right now for the below reasons :</p>
            
            <ul style='margin-bottom:1em;'>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Tourism i.e. just the simple natural act of experiencing the cosmos</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Mining moons, asteroids and other space bodies</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Research including to find life and to try to terraform other worlds to set up new homes for humans</li>
            </ul>
            
            <p style='margin-bottom:10px;'>But in the context of the current space industry most people will never be able to go to space because the space industry imposes technological restrictions and anti-democratic social restrictions which we list below.</p>
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;"">Technological restrictions of the current space industry:</h2>
            
            <p style='margin-bottom:10px;'>The current means of going to space is the Tall Rocket which is an inefficient, expensive, complicated and unsafe system in the following ways :</p>
            
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
              <span>(b).</span>Inefficient also because even before the rocket leaves the launch pad, it is associated
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
            
            <p style='margin-bottom:10px;'>Thus the Tall Rocket is an obsolete method of travel to space. 
            There is another type of launch system which is the Space-plane and this is under design by 
            some organizations. This system has the spaceship formed like a regular aeroplane and takes off 
            from the ground from a runway like a regular aeroplane usually using jet engines but when it 
            reaches higher atmosphere it fires another set of engines which are a multiple of small rocket 
            engines which push the space-plane to orbit and then farther into not-distant space. A variation 
            has a single type of engines which operate both as the takeoff engines and then the space-taking 
            engines. However, the space-plane has the following disadvantages: </p>
            
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
              </span>(c).</span> The space-plane airport / spaceport / 
              runway is as easily affected by natural calamities and other situations like regular aeroplane 
              airports are prone to. This is inconvenient to say the least.</li>
              </ul>
            
              <p style='margin-bottom:10px;'>So the space-plane is also not the solution.</p>
                      
              <h2 style="color:#fff; margin-bottom:10px;">Social restrictions of the current space industry :</h2>
            
              <p style='margin-bottom:10px;'>Aspiring space travellers either have to be very rich 
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

              <p style='margin-bottom:10px;'>Also, the very workers who build these current human 
              launch systems are excluded from going to space on the space systems they built with 
              their sweat, sleepless nights and risk of serious injury or death !!! All they are 
              allowed to do is clap in the control rooms whose screens show the launches of those 
              space systems taking to space the rich and the other privileged. A ridiculous and 
              undemocratic situation just like two other situations in the “Democratic World” :</p>
            
              <ul>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The poor daily-wage construction laborers who build mansions, penthouses and two-bedroom flats for the rich and the middle class, never get to live in them and will be chased away from the gate if they happen to visit later and they instead have to live in slums</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The few billion ordinary fans of sports stars, who make these sports stars millionaires and adored for years, will never get replied for their long passionate loyalty with a million dollars in their bank accounts each and neither will these sports stars speak up about issues their ordinary fans face in their daily lives or even if the loyal fans die in stampede in the stadiums or outside the stadiums where these sports stars descend royally to play or get felicitated, nor will the cherished sports stars speak about global issues like Climate Change, techno-feudalism and the traditional feudalism in the cities and the villages which includes the wrongs against farmers, white-collar workers, students, daily-wagers and women</li>
            </ul>
            
            <h2>The techno-social restrictions coming together: </h2>
            
            <p style='margin-bottom:1em;'>So all this hurry-burry and artificial glamor of the current space industry is pointless in the end for the at least 100,000 other desirers of space travel who will never leave Earth and the very rich owners of most current space agencies will keep profiting from this hurry-burry and from the complicated, expensive and unsafe current launch systems yet the ordinary desirers and humanity in general are encouraged to glorify this industry and its feudal owners. These are fake heroes.</p>
            
            <h2 style= "color:#fff; margin-bottom:10px;"> Our solution : The Yuri Plan : </h2>
            
            <p style='margin-bottom:1em;'>This plan is named after Yuri Gagarin, the Soviet cosmonaut who was the first human in space. There is an entire universe to explore and settle to the max extent possible by humans and we must do this in a way that is simple, gentle, safe, humanist and respectful of Nature and Nature’s laws. Space travel must become as common as bus travel, and space living as common as hotel stay, and these should flow into evolving human society on Earth too. Potentially every human should be able to access space, live in space and attain their potential in space, whenever he or she desires, with a minimal usage fee or no fee at all, in the now and in the far far future.</p>
            
            <p style='margin-bottom:1em;'>Towards this, we of Kosmos Society will build all the systems, whether the spaceships or the computers or the electricity generators or the spacesuits or the habitation systems or the social system and every other necessary thing, and all this in a simplified and straightforward manner.</p>
            
            <p style='margin-bottom:1em;'>Starting 2035 our-designed spaceships will be able to carry humans and goods safely throughout the Inner Solar System and Outer Solar System and our other technologies will enable living in those regions. “Inner Solar System” means to safely near the Sun in one direction and the Asteroid Belt in the other direction, and “Outer” means beyond the Asteroid Belt to Pluto and beyond. This will be just the start.</p>
            
                       
            <p style='margin-bottom:1em;'>Most of our systems will be usable on Earth either directly or in derivation, and all our systems will be simplified, manufacturable cheaply, operable cheaply and repairable cheaply, and the manufacturers will be national governments who will purchase from us the designs and engineering details of our systems for a reasonable license fee and they will be able to set up the factories in their own countries. Once these systems are built by the governments they should charge the masses minimal fees or no fees at all for personal ownership of some of these systems ( say our wearable computer ) or when being passengers ( say on our spaceships ) or when living in space habitats. For example, an individual’s trip to the Moon should have a max seat price of 100 dollars or ideally free.</p>
            
            <h2>Our systems include :</h2>
            
            <ul>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> A compact, non-nuclear, simple and self-sustaining electricity generator called Faradn which will power all our smaller machines and not-smaller machines by being installed within them or just outside them This is decentralized electricity generation instead of the current centralized methods</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> A reusable space-going airship called Alef-A which will be our ascent / descent system on worlds and it will also be the means to travel short distances in space like Earth to Moon This airship will be lifted in atmosphere worlds by helium gas and hot air and will use three eco-friendly and sustainable propulsion methods : electric rotors, coal combustion, water steam jets “World ascent / descent” can mean for an air-filled space object ( Earth, perhaps Titan etc ) or an airless space object ( Moon, large asteroids etc ) The cargo can be humans and goods The Alef-A airship-spaceship will be shaped like an upturned teacup without the handle The first full version will be able to carry 20 humans to the Moon</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> A large in-space long-distance ferry called Alef-F which will be large enough to carry five Alef-A crafts and a hundred humans and a hundred tons of other cargo and will be propelled primarily by water steam jets This ferry will be able to travel throughout the Inner Solar System and the Outer Solar System and will always be in space, never to descend on any world</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> A hybrid vehicle called Ra-H which will be a combination of hovercraft, wheelcraft and aircraft, able to carry humans and small cargo and to be used on the surface and air of air-having space bodies such as Red One ( Mars ) and Titan, and the surface of larger airless space bodies such as the Moon and asteroids In air propulsion mode it will use electric rotors and coal combustion depending on the situation and will allow for vertical takeoff and landing ( VTOL ) Each Ra-H will carry three non-suited people in a pressurized cabin A single Ra-H will be carried down to those worlds by a Alef-A craft</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> A spacesuit called Stillsuit with short-distance flying ability The suit will be a hard suit and will use bio-mimicry for self-sealing in case of punctures The suit will have a water system to recycle water from sweat and urine, and facility to collect defecation and render it non-smelly and non-toxic Also will be other conveniences like a simple mechanical system to scratch all of the face and dab it of sweat</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> A wearable computer called Dune Buk which will be operable in space conditions It will be worn on the back of the upper arm and will use novel methods for computation, electromagnetic frequency reception, data storage and projected-display system where sound will play a major role The file system will be non-hierarchical and categories-recording The networking system is called Frema This computer will be aesthetic for the stylish person and will be wearable on all kinds of clothing including factory clothes and the Stillsuit spacesuit</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Space habitation construction</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Engineered biology researches for food production, human body tolerance for space conditions, mining and other things</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> An autonomous satellite called Serf to clear Earth orbit from the satellite debris and other space debris which are currently polluting Earth orbit and may soon make human journey through Earth orbit very dangerous because of risk of these debris crashing into their spaceships</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Our progressive pan-human constitution for space called “Same Water”</li>
        <!-- close button logic moved out of template string -->
            </ul>
            <p style='margin-bottom:1em;'>By 2031 two people will go to Low Earth Orbit in our Alef-A airship-spaceship, orbit Earth and return gently through the atmosphere by powered craft re-entry to the launch place. By 2035 our spaceships will carry humans and goods from the Inner Solar System to the Outer Solar System.</p>
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
      // 02.Our product design principles
    } else if (chapter === 'principles') {
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
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
            color: #fff;
            }

            p{
            font-family: 'Roboto', sans-serif;
            }

            span {
              color:#fff;  
              font-weight: bold;
              }
          </style>
          <h2 style="color:#fff; margin-bottom:10px;text-align:center;">Our progressive product design principles</h2>
          <div style="color:##FFFFc5;font-size:1.1em;">
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Liberty, Equality, Fraternity, Humanism, Simplicity, Human safety as much as possible, Respect for Nature including reversing Climate Change on Earth</p>
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Readiness to explore sensible methods that are from old times or are unusual</p>
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> We won’t do a technology just because there are a hundred other companies doing it or it has been done for a hundred years or just because it has been proposed by some celebrated scientist but the idea is not sensible, for example the concept called Dyson Sphere aka Dyson Swarm</p>
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> A naturality, beauty, gentleness, simplification and intelligence in technologies and science as against trendy but dystopian and needlessly complicated things. Be Dune’sy rather than metaverse’y. This includes naming or renaming of space objects like “Red One” instead of “Mars” as the latter is the Roman god of war while the former is a gentle name. Another example is not following the silliness of nuclear fusion as the means to generate electricity</p>
            <p style="margin-bottom:10px;"> Employ the concept of Circular Economy which also relates to:</p>
           
            <p style='margin-left:2em;margin-bottom:10px;'><span>(a)</span> Much simplified technology</p>
            <p style='margin-left:2em;margin-bottom:10px;'><span>(b)</span> Decentralization and ease of production and usage which includes electricity generation</p>
            <p style='margin-left:2em;margin-bottom:10px;'><span>(c)</span> Using locally available methods and materials when possible for production and repair</p>
            <p style='margin-left:2em;margin-bottom:10px;'><span>(d)</span> Technology that is well-crafted yet affordable by the masses</p>
            <p style='margin-left:2em;margin-bottom:10px;'><span>(e)</span> Local empowerment</p>
            <p style='margin-left:2em;margin-bottom:10px;'><span>(f)</span> Technologies selected which help humanity anywhere return easier to advancement or be resilient when situation becomes bad because of natural or other events like unusually big solar storm, comet or asteroid strike, a pointless global war etc</p>
            
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Low-tech when applicable</p>
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Bio-mimicry and Engineered Biology wherever applicable</p>
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Our technologies will align around our draft for a democratic, pan-human and Nature-respecting constitution for space, presented in the “Same Water…” chapter on this website</p>
          </div>
        </div>
      `;
      modal.style.display = 'flex';
      // 05.join
    } else if (chapter === 'join') {
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
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
            color: #fff;
            }

            p {
            font-family: 'Roboto', sans-serif;
            }

            span {
              color:#fff;
              font-weight: bold;
              text-align: center;
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
            color: #fff;
            font-weight: bold;
            text-align: center;
        }

          @media (max-width: 768px) {
            .profile-image {
                max-width: 150px;
            }
            
            .name {
                font-size: 16px;
            }
        }
                
        @media (max-width: 480px) {
            .profile-image {
                max-width: 120px;
            }
            
            .name {
                font-size: 14px;
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
          <h2 style="color:#fff;text-align:center;margin-bottom:10px;">Join us :</h2>
          <div style="color:#FFFFc5;font-size:1.1em;">

            <p style="margin-bottom:10px;"> Join us in the journey to explore the universe and evolve humanity. We will be a 
            transnational non-profit design house who will engage with potential co-workers, investors, 
            other private organizations and national governments in these ways: </p>

            <p style="margin-bottom:10px;"> <span> >> </span> B2G and B2B collaborations. </p>

            <p style="margin-bottom:10px;"> <span> >> </span> Potential co-workers investing ideas and labor and joining our team on salary basis in 
            context of their democratic involvement as described below. </p>

            <p style="margin-bottom:10px;"> <span> >> </span> Combination of the above. </p>

            <h2 style="margin-bottom:10px; color:#fff;"> B2G and B2B collaborations:</h2> 
            
            <p style="margin-bottom:10px;"> <span> >> </span> B2G and B2B collaboration via government and private investors investing money and 
            other resources in us so that we will be able to produce our prototypes and license them out 
            to governments. The investors’ return on investment will be share from our license fee we 
            ask from the manufacturer governments. Once you invest in us for the first time your return 
            on investment will be from the deals with the many governments on Earth. The industry of 
            space travel is a permanent one, involving sciences and products of different kinds, and you 
            will make profit with us as there are more than 100 countries whose governments can be 
            approached to license our designs to them and this situation will exist as long as the system 
            of money remains. The return on investment will also be the satisfaction of enabling and 
            seeing an evolved space industry and the evolved collective human society which no 
            reasonable person can disagree with. </p>

            <p style="margin-bottom:10px;"> <span> >> </span> B2G and B2B collaboration for us to obtain the components in our designs. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> B2G collaboration via we licensing out our product designs, engineering details and 
            prototypes to manufacturer organizations of national governments. This license fee will be 
            for the package of an entire human space program with its associated systems at a 
            reasonably cheap license fee and this fee includes continued development by us. We will 
            provide these governments the means to create the cheapest and simplest human space 
            program so that every citizen of theirs can go to space and live in space either by being 
            charged a minimal fee or ideally no fees. </p>

            <h2>You as our co-worker :</h2> 

            <p style="margin-bottom:10px;"> This collaboration will be on the basis of natural social equality and natural intelligence. We 
            look for people ideally with the following attributes: </p> 

            <p style="margin-bottom:10px;"> <span> >> </span> You can be a school 10th class fail but if you have ideas, knowledge, willingness to work 
            and maybe experience in tinkering and other areas then most welcome. </p>

            <p style="margin-bottom:10px;"> <span> >> </span> You do innovative and simplifying thinking even if going against traditions, industry 
            standards and fashions. </p> 

           <p style="margin-bottom:10px;"> <span> >> </span> You are simple, gentle and not given to spouting corporate buzzwords. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> You have no love for money, feudalism and classist thinking. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> You desire a largely secular borderless unification of humanity on Earth and in Space. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> You consider the cat as the most perfect animal in the universe, heh heh. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> You consider tea as one of the main human gifts giveable to alien cultures, heh heh. </p>

           <p style="margin-bottom:10px;"> We are not a typical profiteering and feudalist corporate organization which works on 
            fashionable and senseless technologies and uses senseless corporate lingo in every 
            sentence ( “verticals”, “market fit”, “cost to company”, “we are letting you go”, “due diligence” 
            etc ). We are a techno-social organization set up to evolve humanity in multiple senses 
            through the far far future and that includes our co-workers ( “co-workers” and not “workers” ) 
            being allowed to attain their fullest potential and that in a democratic way. “Liberty, Equality, 
            Fraternity” is after all one of our credos. So our company-internal organization of people 
            employs the Workers Cooperative concept which is described in the “Same Water…” 
            chapter on this website. Please read that chapter and return to this point. Additionally in our 
            company : </p>

            <p style="margin-bottom:10px;"> <span> >> </span> For the sake of current company formation rules the company equity is divided in three 
            parts : one part for the founders ( as at the time of formal registration of the company ), the 
            second part for the investors, and the third part for any new co-workers where the founders 
            will dilute their equity equally to spread equity equally among all the workers. </p>

           <p style="margin-bottom:10px;">  <span> >> </span> There will be no “boss cabin”.  </p>

           <p style="margin-bottom:10px;"> <span> >> </span> Salary will be an equal amount for all that is comfortable for all our workers in all our 
            regions but the salary will be based on an Indian number since we will be HQed in India. </p>

           <p style="margin-bottom:10px;"> <span> >> </span> The organization is arranged as a set of work groups which will be for the various 
            research groups and maintenance groups. </p>

            <p style="margin-bottom:10px;"> <span> >> </span> The organization will be headed by a General Coordinator ( GC ) who for some years to 
            come will be Sameer who is described just below. The General Coordinator will be 
            approachable to every worker, will be the interface within the organization and externally, 
            and every worker if necessary can arrange to call a discussion circle with a notification sent 
            to the GC. Further, each of our branches in other countries or regions ( other than India ) will 
            have a Regional Coordinator. </p>

            <p style="margin-bottom:10px;"> The industry of space travel is a permanent one and involves science of every kind except 
            for sciences with no real basis in a simplified, non-trend-following and democracy-oriented 
            organization, so with us you will be in permanent employment. You will have a comfortable 
            salary as long as the system of money remains. </p>

           <p style="margin-bottom:10px;"> Please note that we are just starting out so it will be some time before you start getting 
            salary and we all get salaries so please be patient and look at the big picture and the long 
            term. </p>

            <h2 style="margin-bottom:10px; color:#fff;">Our founding team :</h2>
           
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
            Jagadish Chandra Bose. 
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

           
          </div>
        </div>
      `;
      modal.style.display = 'flex';
      // 06.credits
    } else if (chapter === 'credits') {
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
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
            color: #fff;
            }

            p{
            font-family: 'Roboto', sans-serif;
            }

            span {
              color:#fff;
              font-weight: bold;
              }

          </style>
          <h2 style="color:#fff;text-align:center;margin-bottom:10px;">Credits</h2>
          <div style="color:#FFFFc5;font-size:1.1em;">
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Vikram for the logo, the website design and the spark for Sameer to have this Credits page.</p>
            
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Apoorva JR for presenting to us an Instagram page ( forgot the page name ) in 2023 which contained reports on eco-friendly ways of generating electricity and which led to our discovery of the “sand battery” which we use in our design of the Faradn generator. Apoorva’s LInkedIn page [ <a href="https://www.linkedin.com/in/apoorvajr" target="_blank" style="color:#FFFF00;">https://www.linkedin.com/in/apoorvajr</a> ]. We also thank the owner of that Insta page and the company Polar Night Energy who thought of applying the sand battery in a real life setting and this news was listed on that Insta page.</p>
            
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Robert Murray-Smith on YouTube for the idea about using a simple electro-mechanical vibrator for amplification of electricity, made using an electro-magnetic relay. This vid called “1026 The easiest inverter you will ever make” is on this page [ <a href="https://www.youtube.com/watch?v=L-vC9SvU2Lo" target="_blank" style="color:#FFFF00;">https://www.youtube.com/watch?v=L-vC9SvU2Lo</a> ]. This we use in our design of the Faradn generator.</p>
            
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> The YouTube channel “The Action Lab” for the idea about using heat to run a piston engine. This vid called “This engine runs on sound waves” is on this page [ <a href="https://www.youtube.com/watch?v=xCnxsoXtlmY" target="_blank" style="color:#FFFF00;">https://www.youtube.com/watch?v=xCnxsoXtlmY</a> ]. This we use in our design of the Faradn generator.</p>

            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Coke Studio Bangla Season One for presenting the song “Shob Lokey Koy” which we use to name our constitution for space. The song is available on YouTube on this page [ <a href="https://www.youtube.com/watch?v=L-arhlgPiy8" target="_blank" style="color:#FFFF00;">https://www.youtube.com/watch?v=L-arhlgPiy8</a> ] and there are other songs there too.</p>

            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Background picture for the website is from the DeviantArt website’s DreamUp AI picture generation facility.</p>

            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Farzad Zangeneh-Nejad and Romain Fleury at the Federal Institute of Technology (
              EPFL) in Lausanne, Switzerland, for the idea of using sound to do analog computing.</p>
             
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Planetary Science Division of NASA for the idea of creating an artificial magnetosphere
             for Red One.</p>
             
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> Rabindranath Tagore for his essay that speaks against Nationalism. The essay can be
             read here [ <a href="https://mast.queensu.ca/~murty/Tagore-Nationalism-1915.pdf" target="_blank" style="color:#FFFF00;">https://mast.queensu.ca/~murty/Tagore-Nationalism-1915.pdf</a> ].</p>
            
            <p style='margin-bottom:10px;'><span>&gt;&gt;</span> In general all the good thinkers of the past and present whose thoughts and works we use in our projects.</p>
          </div>
          
        </div>
      `;
      modal.style.display = 'flex';
      //03.More on our techno projects
    } else if (chapter === 'projects'){
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
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
            color: #fff;
            }

            p{
            font-family: 'Roboto', sans-serif;
            }
            span {
              color:#fff;
              font-weight: bold;
              }
          </style>
          <div style="color:#FFFFc5;font-size:1.1em;">
            <h2 style="color:#fff; margin-bottom:10px;text-align:center;">Faradn electricity generator</h2>
            
            <p>Advancement in electricity generation is not to make the generators huge, 
            centralized, complicated, unsafe, polluting and needless like nuclear, hydropower dams,
             on-sea wind turbines etc along with their complicated and huge system controls, power 
             controls and power delivery mechanisms and all these stretched hundreds of kilometers 
             or even millions of kilometers like the idiotic concept Dyson Swarm There’s even an 
             unspoken nefarious element here like promotion of Space-based Solar Power where huge 
             photovoltaic panels will sit in Earth orbit and convert the abundant sunlight there 
             to electricity, convert the electricity to high-power microwaves and send down the 
             microwaves to certain large-focus spots on Earth where on those spots on the ground 
             the microwaves are converted back to electricity by rectennas to be supplied to the 
             grid The nefarious element here is the potential of this system to be used to zap 
             humans and other things using the high-power microwaves by moving these power 
             satellites over targets</p>
            
            <p>Advancement then in electricity generation is to make generators simple, compact, 
            safe and decentralized, where the generator sits within the small and large machines 
            needing electricity or just outside them Making generators compact will also enable 
            redundancy, easy replacement and easy placement in any place which needs electricity 
            instead of centralized single points of failure This also contributes to democracy 
            where the individual user freely owns the electricity generation mechanism and its 
            produced electricity</p>
            
            <p>Faradn generator system will be such a generator which is very non-nuclear and will 
            power all our non-micro-sized products by sitting within them or just outside them Once 
            this generator has been supplied with a “start heat” it will use thermo-mechanical 
            method to generate electricity and will include a “sand battery” to store heat to 
            enable a self-sustaining energy loop It will produce 24 volts DC which is neither 
            too low a current nor dangerously high and can be amplified by external systems 
            like a motor-generator for larger or high-voltage applications Most systems will 
            work with DC</p>
            
            <p>The name of this system, Faradn, refers to two things : an acknowledgement to Michael
             Faraday and a nod to the Dune story which has the character Farad’n</p>
            
            <p>Please check the “Credits” chapter to see where we derive some of our ideas for the 
            generator</p>
            
            <p>There can be a rechargeable battery included within this system or outside this 
            system to provide short-duration backup and enable generator switchover when one 
            generator fails But this battery will have to be eco-friendly and socially harmonious 
            in terms of its electricity storage materials, electrodes and packaging</p>
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">The Alef-A airship-spaceship :</h2>
            
            <p>
            The Alef-A airship-spaceship will be shaped like an upside-down teacup without the handle,
            and its lift gases will be helium gas and hot air, and its horizontal travel or lift into higher
            atmosphere and then into space will be assisted by electric rotors, coal combustion and
            water steam jets. Of course the gas lift and electric rotors are usable only if that world has air
            / atmosphere. The coal propulsion and steam jets can be used on any world and these fuels
            are non-recoverable i.e. once they combust or are expelled they cannot be recovered to their
            original form and be reused. And then once this craft is in space it will be propelled largely by
            water steam jets where through an arrangement most of the steam is recovered to water and
            reused to be jetted again to enable longer-distance continuous-thrust travel, thus the water
            steam here is a largely recoverable fuel. The Alef-A will allow for ascent / descent on a world
            and short-distance space travel like from Earth to Moon’s surface.
            </p>

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">The Alef-F space ferry :</h2>
            
            <p>
            The Alef-F will be a space-bound ferry large enough to carry five Alef-A crafts and a hundred
            humans and a hundred tons of other cargo and will be primarily propelled by water steam
            jets but will include coal propulsion for momentary high-thrust-requiring situations. It will have
            sufficient growing facilities for food crop, fuel crop ( for the coal via biocoal ), other crops, a
            clinic, mini mills for textile, metalwork, bio-engineering, electricals and computers, then
            tailoring, research facility, mineral processing, water storage, a small swimming pool that is
            time-segregated for men and women… all this for largely self-sustained long-term living and
            far travel. And telescopes. This ferry will be able to travel from the Inner Solar System to the
            Outer Solar System and station around various worlds and objects to enable from-orbit
            observations and allow descent-ascent using the Alef-A crafts. The cargo can be anything
            including mining equipment and habitation-building material. Thus this ferry craft is much
            better than the current and proposed space stations around Earth and the Moon. It can also
            be called a colony ship.
            </p>

            <p> 
            This ferry craft will be constructed in Earth orbit and in other world orbits and will always
            remain in space, never to descend on any world. The construction material will be carried to
            orbit by the Alef-A crafts.
            </p>

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">About both Alef-A and Alef-F spaceships :</h2>
            
            <p>The name “Alef” is a joined word with the below meaning :</p>
           
            <ul>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The “lef” comes from the slogan “Liberty, Equality, Fraternity” which is a slogan in multiple progressive thought streams including the Preamble ( introduction ) to the Indian Constitution </li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> The “A” stands for Alif ( “The first” ), meaning these spaceships are just the first types of spaceships from our organization Further will be more types </li>
            </ul>
            
            <p>Both the Alef-A and the Alef-F will be primarily propelled in space by water steam jets and this is advantageous because :</p>
            
            <ul>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Steam is made from water which is found in many places in the Solar System and beyond</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Water in itself is safe to handle by humans</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Water doesn’t explode normally unlike rocket fuel like liquid hydrogen</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Water doesn’t need to be stored at cryogenic conditions unlike with some current popular spacecraft fuels like liquid hydrogen and liquid methane Water can be just kept a warm liquid using electrical heating</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> When in space, most of the jetted steam is recoverable to liquid water which can be fed back to the propulsion system to allow for continuous thrust, faster travel and longer travel</li>
              <li style="margin-left:1em; margin-bottom:10px;"><span>&gt;&gt;</span> Our steam-based propulsion uses a simple heating mechanism to turn water to steam instead of having other complex and unsafe propulsion mechanisms like plasma or nuclear power</li>
            </ul>
            
            <p>
             It may be possible to form these two spaceships to have artificial gravity generation
             using spin by spinning sections of the craft This enabling will allow humans to live 
             in healthy Earth-like gravity for most of their space journeys and also configure 
             lower or higher gravity to prepare the human travellers for the gravity of other 
             worlds like the Moon or Red One.
             </p>
            
              <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;""> Ra-H hovercraft-wheelcraft-aircraft : </h2>
            
            <p> 
            The name of this vehicle comes from the name Ra who was the supreme ancient Egyptian
            god who had the head of a cat and the body of a man - a hybrid. Other than the dedication to
            cats the name is also because this Ra-H vehicle is a hybrid vehicle as below. And the “H” is
            because it will carry humans in space environments in contrast to our other Ra hybrid
            machines which are described in further sections. 
            </p>
            
            <p>
            Ra-H will be universal on-world vehicles to carry humans and small cargo on large space
            bodies, whether air-having or airless. They will carry three spacesuited humans in a
            medium-sized pressurized cabin and behind the cabin will be an airlock to the outside. On
            top of the vehicle will be a closable cargo box which can hold 500 kilograms. There will be a
            telescoping cargo lifting arm on the front of the vehicle which will load things into the top
            cargo box.
            </p>

            <span>For propulsion this craft will use a combination of :</span>
            
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
            This craft can be put in semi-autonomous mode so that a Ra-H carrying people is in front
            and there is a train of non-peopled Ra-Hs behind carrying cargo in the top cargo box, and
            each behind Ra-H connected to the forward Ra-H using signals-carrying fiber optic cables.
            The behind Ra-Hs will use hovercraft mode or wheelcraft mode or aircraft mode based on
            the directions sent from the first people-carrying Ra-H.
            </p>
            
            <p>
            The coal combustion propulsion mode will be used in aircraft mode in emergencies like
            safely landing the craft when the rotors fail or getting the vehicle away from some
            emergency in a certain location.
            </p>
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">A spacesuit called Stillsuit :</h2>
            
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
            the face of sweat.
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
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;"">Dune Buk wearable computer :</h2>
            
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
            pen for regular input as well as on-screen virtual keyboard for extended typing.
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

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">Also, the Dune Buk wearable is related to two other machines :</h2>
                        
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
                     
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">Exoskeleton :</h2>

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
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">Biology researches :</h2>
            
            <p><span> Like : </span></p>
            
            <p>
            <span> >> </span> The ideal plants to derive biocoal for the coal needed to propel the Alef spaceships and
            the Ra vehicles. These plants should be growable in space.
            </p>
            
            <p>
            <span> >> </span> Structures of spaceships, spacesuits and habitations to be bio-mimicking and also made of biological elements for radiation shielding,
            Strengthened and fire-proof wood for structures in the spaceships, spacesuits and
            habitations. Such wood is preferable to metal in many cases. The trees for the wood should
            be growable in space.
            </p>
            
            of biological elements for radiation shielding, self-repair and a sense of more naturality. For
            example, there is interest in the fungus Cladosporium sphaerospermum which was first
            identified in the Chernobyl reactor's remains and converts the area’s radiation into energy for
            itself, a process called radiosynthesis which is comparable to plants converting light to
            energy through photosynthesis. This fungus eats the radiation.
            </p>

            <p>
            <span> >> </span> Engineered-for-space food production.
            </p>
            
            <p>
            <span> >> </span> Engineered capability in the human body to tolerate some space conditions.
            </p>

            <p>
            <span> >> </span>  Increasing human life to 2000 years or more.
            </p>
            
            <p>
            <span> >> </span> Plant-based materials like leather and for clothing, packaging etc.
            </p>
            
            <p>
            <span> >> </span> Mining using bacteria.
            </p>
            
            <p>
            <span> >> </span> Intelligent computation using a combination of human brain cells and our Dune Buk
            wearable computer. This will allow autonomous, compact-sized intelligent computation to be
            carried out even without the complete need of humans like in places where humans cannot
            go or are too far away.
            </p>
            
            <p>
            <span> >> </span> Intelligent computation using a combination of human brain cells and our Dune Buk
            wearable computer. This will allow autonomous, compact-sized intelligent computation to be
            carried out even without the complete need of humans like in places where humans cannot
            go or are too far away.
            </p>
           
            <p>
            In enabling biology-based self-repair and space-tolerance in humans, care will be taken that
            such acquired abilities do not transform humans from their human form into something else
            i.e. the extreme imagined forms of Transhumanism. So, for example a cat should recognize
            such acquired abilities do not transform humans from their human form into something else
            i.e. the extreme imagined forms of Transhumanism. So, for example a cat should recognize
            a human as a human despite that human’s acquired abilities.
            </p>

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">One derivation of these researches is eradicating hunger on Earth. Hunger is a two part
              problem :
              </h2>
            
              <p>
               <span>(a).</span> A technological problem via use of traditional methods of growing food in open farms
                which are inefficient, centralized, polluting, climate-vulnerable and pest-vulnerable.
               </p>
           
              <p>
              <span>(b).</span> A social problem largely via private profiteering and geopolitical interferences in the food
              industry while so many people go hungry or die of hunger despite abundance of food. There
              can be additional culture-dependent wastages of food.
              </p>
              
              <p>
              The simple solution for hunger is not only social enlightenment but also a technological
              combination of bio-engineered and regular production of not only plant-based foods but also
              nutritious originally animal products like sheep milk, chicken egg and honey, and these
              productions be done in decentralized, neighborhood-level indoor farms which can include
              vertical farming. We of Kosmos Society will produce these solutions both for current cities
              and new cities, by ourselves or in collaboration.
              </p>

            <p>
            Bio-engineered animal food products relate to another interesting thing : synthetic wombs for
            growing human organs and cat organs and entire living humans and this is important not
            only for solving diseases like blindness and kidney failure but also for populating space with
            humans and also protecting the desirable Earthen lifeforms in case of global devastations.
            Please read more on this in the “Same Water…” chapter of this website.
            </p>

            <p>
            Engineered bacteria can perhaps be used to construct useful matter from other existent
            matter. For example to get the helium gas which our Alef-A airships require as their main lift
            gas, or to obtain nutrients for plants, or to construct water. The raw material matter can be
            asteroid rock etc. This will remove the need for a lot of mineral processing factories and their
            attendant pollution and human physical labor.
            </p>
             
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">Habitat construction on other worlds :</h2>

            <p>
            <span>(a).</span> Building most of the habitation underground for protection against space radiation, low
            temperature, high temperature and space dust / small rocks. The topside will be accessed
            by a pressurized tunnel which is topped with local soil including radiation-stopping volcanic
            soil, and connected to the outside by an airlock.
            </p>

            <p>
            <span>(b).</span> Some of the wall of the airlock can be unbreakable transparent glass which transmits
            outside natural light to a mirror on the far inner side which then transmits that light to the
            inner section of the habitation.
            </p>

            <p>
            <span>(c).</span> Compartmentizing the tunnel’s walls like ship hulls so that a breach in one compartment,
            maybe because of space pebbles crashing into it, can be easily sealed off and can also be
            self-sealing.
            </p>

            <p>
            <span>(d).</span> The internal walls will be made of strengthened wood. Wood is lighter than metal like
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

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;"">Machines for water :</h2>

            <p>
            <span>These include :</span>
            </p>

            <p>
            <span> >> </span> Portable extractors of water from ice, open water and air.
            </p>

            <p>
            <span> >> </span> Water purifiers.
            </p>

            <p>
            <span> >> </span> Electrolysis machines.
            </p>
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">Serf autonomous satellite for Earth orbit debris cleaning :</h2>  
            
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
            
            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">Terraforming :</h2>

            <p>
            Explore how to terraform other worlds like Red One. For example, because Red One doesn’t
            have a natural magnetosphere to protect it from most of the Sun’s radiation and cosmic
            radiation, we can create a magnetosphere by installing large electromagnetic field
            generators around Red One to prevent most radiation from reaching the atmosphere of Red
            One and its surface. These field generators will be powered by our Faradn generators.
            Having multiple generators will be useful in terms of redundancy and multi-level coverage.
            </p>

            <h2 style="color:#fff; margin-bottom:10px;"margin-bottom:10px;"margin-bottom:10px;" margin-bottom:10px;">To the stars :</h2>

            <p>
            <span>Journeys beyond our solar system means research on two things particularly :</span>
            </p>

            <p>
            <span>(a).</span> A more natural means to fly from worlds ( like Earth ) to space via “anti-gravity”
             mechanism aka Gravity Manipulation and this is if possible at all.
            </p>

            <p>
            <span>(b).</span> In-space propulsion mechanism faster than steam and coal propulsion but also simple,
             safe and the fuel easily acquired.
            </p>

            <p>
            Such a craft can possibly have any size and shape and will be able to carry maybe hundreds
             of people at a time.
            </p>

          </div>
        </div>
      `;
      modal.style.display = 'flex';
      //07.contact
    }  else if (chapter === 'contact') {
      modalText.innerHTML = `
        <div style="position:relative;padding:2em 2em 1em 2em;background:#222;border-radius:8px;max-width:600px;margin:40px auto;max-height:400px;overflow:auto;scrollbar-width:thin;scrollbar-color:#fff #222;">
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
            color: #fff;
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
            color: #fff;
            margin-bottom: 8px;
            font-size: 1.1rem;
            font-family: 'Poppins', sans-serif;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .contact-value {
            color: #ffffc5;
            font-size: 1.05rem;
            font-family: 'Roboto', sans-serif;
            word-break: break-word;
            padding-left: 30px;
        }
        
        .contact-value a {
            color: #ffffc5;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
            word-break: break-all;
        }
        
        .contact-value a:hover {
            color: #fff;
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
            color: #fff;
            }

          </style>
          <h2 style="color:#fff;text-align:center;margin-bottom:10px;">Contact Us</h2>
          <div style="color:#FFFFc5;font-size:1.1em;">
           <div class="contact-card">
        <h1>Kosmos Society</h1>
        
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
                <span class="icon">💼</span>LinkedIn (Sameer)
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
