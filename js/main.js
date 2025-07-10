// Modal logic for chapter cards
const modal = document.getElementById('chapterModal');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');

const introText = `The disappointed 100,000 people desiring space travel : <br><br>
Now in 2025 there must be at least 100,000 people in the world desiring to go to space right <br>
now for the below reasons : <br>
&gt;&gt; Tourism i.e. just the simple natural act of experiencing the cosmos. <br>
&gt;&gt; Mining moons, asteroids and other space bodies. <br>
&gt;&gt; Research including to find life and to try to terraform other worlds to set up new homes <br>
for humans. <br>
But in the context of the current space industry most people will never be able to go to space <br>
because the space industry imposes technological restrictions and anti-democratic social <br>
restrictions which we list below : <br>
<b>Technological restrictions of the current space industry :</b> <br>
The current means of going to space is the Tall Rocket which is an inefficient, expensive, <br>
complicated and unsafe system in the following ways : <br>
(a). Inefficient because the rocket has to expend a lot of non-recoverable chemical fuel to <br>
rise even one centimeter off the launch pad and then to keep rising through the atmosphere. <br>
And once in orbital space it has to keep pushing out the non-recoverable fuel to give it the <br>
push and the direction towards the destination and then for any course corrections and then <br>
for braking once it is very near the destination. This requires lot of fuel and thus very large <br>
fuel tanks and these tanks increase the weight of the rocket and that creates a wrong cycle <br>
which in the end leaves very less mass of the rocket for the cargo, say to carry even one <br>
human. This disadvantage remains even when the rocket makers “stage” the rocket i.e. <br>
divide it in at least two separate parts where the part which goes to space ( the spaceship ) <br>
will have its own fuel and engine and this part is pushed through most of the atmosphere by <br>
a booster rocket and in the upper atmosphere the parts separate and the booster falls or <br>
does powered descent towards the ground both so that some mass is lessened and the <br>
spaceship fires its own engines to go further out into space. For even slightly farther <br>
distances like the Moon, a very small cargo like a single human becomes a very small <br>
carryable part of the original massive rocket. Some may think “Why not make the rocket <br>
huge to be able to carry more humans ?” but the huge rocket will also need a massive <br>
launch and recovery tower and other infrastructure and that simply feels neither clean nor <br>
practical. An orbital spaceship should be able to launch and descend in most places without <br>
any special infrastructure. <br>
(b). Inefficient also because even before the rocket leaves the launch pad, it is associated <br>
with massive infrastructure, even just to hold the massive rocket steady till it is ready to <br>
launch. And that requires the efforts of a very large number of people who may have been <br>
doing other works if the spacecraft system was an efficient system… even by themselves <br>
going to space. Attached with this inefficiency is high expensiveness of the rocket and its <br>
infrastructure, including the material required to form the rocket and including the fuel <br>
because every time the rocket launches and travels in space, its fuel is fully expended and <br>
thus another launch of the rocket requires new fuel, and the fuel usually is at least two forms <br>
coming together later and this means more expenditure of money or more obtainment of the <br>
fuels. Finally, if many more people have to go to space and if their means is the tall rocket <br>
then the above inefficiency and expensiveness will add up a lot. These negative factors <br>
remain even in the modern trend of reusable tall rockets having legs to descend on and <br>
made ready to take flight again. <br>
(c). Complicatedness : The American phrase “As complicated as rocket science” would not <br>
have existed if people, to go to space, were not using tall rockets which inherently are very <br>
complicated to make in terms of fuel tanks, their plumbing, their electrical and other control <br>
systems, the engine system, their staged structure, their landing system like legs and their <br>
difficultyness to make them safe for humans. Associated complicatedness is also in the <br>
launch infrastructure. <br>
(d). Non-safety : Other than the above point about complicateness, there is the direct fact of <br>
non-safety starting from when the tall rocket starts to launch. Most of the mass of the rocket <br>
is fuel and thus the rocket can explode spectacularly when launching or after launching or <br>
then on in space. Within an atmosphere if the rising rocket stops the fuel supply to the <br>
engine for even one second, even because of error, it will crash to the ground and destroy <br>
the humans within it and also a large area where it crashes. That is why rocket launch <br>
stations are set up in isolated places, whether near the sea or in deserted lands or in remote <br>
forests or in remote mountains. And especially when a lot more rockets have to be built to <br>
take a lot more humans to space, the inefficiency and complicatedness will contribute to <br>
making them even more unsafe for humans. Another non-safety situation about the tall <br>
rocket is that since it is vertically very large it can easily topple during quakes in the ground it <br>
is standing on using its legs. This say on the Moon. What is the point of the space industry <br>
saying “Travel in space is risky” when the most immediate risk is on Earthen rocket launch <br>
stations ? <br>
Thus the Tall Rocket is an obsolete method of travel to space. There is another type of <br>
launch system which is the Space-plane and this is under design by some organizations. <br>
This system has the spaceship formed like a regular aeroplane and takes off from the <br>
ground from a runway like a regular aeroplane usually using jet engines but when it reaches <br>
higher atmosphere it fires another set of engines which are a multiple of small rocket <br>
engines which push the space-plane to orbit and then farther into not-distant space. A <br>
variation has a single type of engines which operate both as the takeoff engines and then <br>
the space-taking engines. However, the space-plane has the following disadvantages : <br>
(a). The space-plane requires a dedicated airport / spaceport system including a lengthy <br>
runway and this adds greatly to complicatedness, expensiveness and inconvenience. <br>
(b). A space-plane airport / spaceport on Earth is one thing but what about places without <br>
spaceports, which is any other world except for Earth. For example, if we are using a <br>
space-plane to go to the Moon where there is no spaceport and runway, how will this <br>
infrastructure be built so that the space-plane is able to land for the first time ? If we build a <br>
separate lander craft for such situations, carried as cargo on the space-plane, the entire <br>
system will become complicated just to travel nearer distances in space like to the Moon. <br>
This leads to inefficient economics, expensiveness and compromise on human safety. <br>
(c). The space-plane airport / spaceport / runway is as easily affected by natural calamities <br>
and other situations like regular aeroplane airports are prone to. This is inconvenient to say <br>
the least. <br>
So the space-plane is also not the solution. <br>
Therefore the Tall Rocket and the Space-plane are not good enough to take humans farther <br>
than the Moon in a shorter time, like weeks. <br>
<b>Social restrictions of the current space industry :</b> <br>
Aspiring space travellers either have to be very rich to pay for a single ticket ( at least 20 <br>
millions dollars ) to launch on the rockets or in-development space-planes of the world’s very <br>
few humans-to-space programs of government space agencies and private space agencies; <br>
or the aspiring travelers must be associated with these governments or allied governments <br>
to travel for free by being military pilots, professional scientists etc; or the aspiring space <br>
travellers must win seat lottery in some private space-trip arrangement program associated <br>
with those governments or private space agencies and this lottery will be won by only one <br>
person per year in the entire world. Most ordinary space travel aspirers have no chance. But <br>
it is not Nature / Universe denying most people access to the cosmos, it is anti-democratic <br>
systems among humans doing so. <br>
Also, the very workers who build these current human launch systems are excluded from <br>
going to space on the space systems they built with their sweat, sleepless nights and risk of <br>
serious injury or death !!! All they are allowed to do is clap in the control rooms whose <br>
screens show the launches of those space systems taking to space the rich and the other <br>
privileged. A ridiculous and undemocratic situation just like two other situations in the <br>
“Democratic World” : <br>
&gt;&gt; The poor daily-wage construction laborers who build mansions, penthouses and <br>
two-bedroom flats for the rich and the middle class, never get to live in them and will be <br>
chased away from the gate if they happen to visit later and they instead have to live in <br>
slums. <br>
&gt;&gt; The few billion ordinary fans of sports stars, who make these sports stars millionaires and <br>
adored for years, will never get replied for their long passionate loyalty with a million dollars <br>
in their bank accounts each and neither will these sports stars speak up about issues their <br>
ordinary fans face in their daily lives or even if the loyal fans die in stampede in the stadiums <br>
or outside the stadiums where these sports stars descend royally to play or get felicitated, <br>
nor will the cherished sports stars speak about global issues like Climate Change, <br>
techno-feudalism and the traditional feudalism in the cities and the villages which includes <br>
the wrongs against farmers, white-collar workers, students, daily-wagers and women. <br>
<b>The techno-social restrictions coming together :</b> <br>
So all this hurry-burry and artificial glamor of the current space industry is pointless in the <br>
end for the at least 100,000 other desirers of space travel who will never leave Earth and the <br>
very rich owners of most current space agencies will keep profiting from this hurry-burry and <br>
from the complicated, expensive and unsafe current launch systems yet the ordinary <br>
desirers and humanity in general are encouraged to glorify this industry and its feudal <br>
owners. These are fake heroes. <br>
<b>Our solution : The Yuri Plan :</b> <br>
This plan is named after Yuri Gagarin, the Soviet cosmonaut who was the first human in <br>
space. There is an entire universe to explore and settle to the max extent possible by <br>
humans and we must do this in a way that is simple, gentle, safe, humanist and respectful of <br>
Nature and Nature’s laws. Space travel must become as common as bus travel, and space <br>
living as common as hotel stay, and these should flow into evolving human society on Earth <br>
too. Potentially every human should be able to access space, live in space and attain their <br>
potential in space, whenever he or she desires, with a minimal usage fee or no fee at all, in <br>
the now and in the far far future. <br>
Towards this, we of Kosmos Society will build all the systems, whether the spaceships or the <br>
computers or the electricity generators or the spacesuits or the habitation systems or the <br>
social system and every other necessary thing, and all this in a simplified and straightforward <br>
manner. <br>
Starting 2035 our-designed spaceships will be able to carry humans and goods safely <br>
throughout the Inner Solar System and Outer Solar System and our other technologies will <br>
enable living in those regions. “Inner Solar System” means to safely near the Sun in one <br>
direction and the Asteroid Belt in the other direction, and “Outer” means beyond the Asteroid <br>
Belt to Pluto and beyond. This will be just the start. <br>
Most of our systems will be usable on Earth either directly or in derivation, and all our <br>
systems will be simplified, manufacturable cheaply, operable cheaply and repairable cheaply, <br>
and the manufacturers will be national governments who will purchase from us the designs <br>
and engineering details of our systems for a reasonable license fee and they will be able to <br>
set up the factories in their own countries. Once these systems are built by the governments <br>
they should charge the masses minimal fees or no fees at all for personal ownership of <br>
some of these systems ( say our wearable computer ) or when being passengers ( say on <br>
our spaceships ) or when living in space habitats. For example, an individual’s trip to the <br>
Moon should have a max seat price of 100 dollars or ideally free. <br>
Our systems include : <br>
&gt;&gt; A compact, non-nuclear, simple and self-sustaining electricity generator called Faradn <br>
which will power all our smaller machines and not-smaller machines by being installed within <br>
them or just outside them. This is decentralized electricity generation instead of the current <br>
centralized methods. <br>
&gt;&gt; A reusable space-going airship called Alef-A which will be our ascent / descent system <br>
on worlds and it will also be the means to travel short distances in space like Earth to Moon. <br>
This airship will be lifted in atmosphere worlds by helium gas and hot air and will use three <br>
eco-friendly and sustainable propulsion methods : electric rotors, coal combustion, water <br>
steam jets. “World ascent / descent” can mean for an air-filled space object ( Earth, perhaps <br>
Titan etc ) or an airless space object ( Moon, large asteroids etc ). The cargo can be humans <br>
and goods. The Alef-A airship-spaceship will be shaped like an upturned teacup without the <br>
handle. The first full version will be able to carry 20 humans to the Moon. <br>
&gt;&gt; A large in-space long-distance ferry called Alef-F which will be large enough to carry five <br>
Alef-A crafts and a hundred humans and a hundred tons of other cargo and will be propelled <br>
primarily by water steam jets. This ferry will be able to travel throughout the Inner Solar <br>
System and the Outer Solar System and will always be in space, never to descend on any <br>
world. <br>
&gt;&gt; A hybrid vehicle called Ra-H which will be a combination of hovercraft, wheelcraft and <br>
aircraft, able to carry humans and small cargo and to be used on the surface and air of <br>
air-having space bodies such as Red One ( Mars ) and Titan, and the surface of larger <br>
airless space bodies such as the Moon and asteroids. In air propulsion mode it will use <br>
electric rotors and coal combustion depending on the situation and will allow for vertical <br>
takeoff and landing ( VTOL ). Each Ra-H will carry three non-suited people in a pressurized <br>
cabin. A single Ra-H will be carried down to those worlds by a Alef-A craft. <br>
&gt;&gt; A spacesuit called Stillsuit with short-distance flying ability. The suit will be a hard suit and <br>
will use bio-mimicry for self-sealing in case of punctures. The suit will have a water system to <br>
recycle water from sweat and urine, and facility to collect defecation and render it non-smelly <br>
and non-toxic. Also will be other conveniences like a simple mechanical system to scratch all <br>
of the face and dab it of sweat. <br>
&gt;&gt; A wearable computer called Dune Buk which will be operable in space conditions. It will <br>
be worn on the back of the upper arm and will use novel methods for computation, <br>
electromagnetic frequency reception, data storage and projected-display system where <br>
sound will play a major role. The file system will be non-hierarchical and <br>
categories-recording. The networking system is called Frema. This computer will be <br>
aesthetic for the stylish person and will be wearable on all kinds of clothing including factory <br>
clothes and the Stillsuit spacesuit. <br>
&gt;&gt; Space habitation construction. <br>
&gt;&gt; Engineered biology researches for food production, human body tolerance for space <br>
conditions, mining and other things. <br>
&gt;&gt; An autonomous satellite called Serf to clear Earth orbit from the satellite debris and other <br>
space debris which are currently polluting Earth orbit and may soon make human journey <br>
through Earth orbit very dangerous because of risk of these debris crashing into their <br>
spaceships. <br>
&gt;&gt; Our progressive pan-human constitution for space called “Same Water”. <br>
By 2031 two people will go to Low Earth Orbit in our Alef-A airship-spaceship, orbit Earth <br>
and return gently through the atmosphere by powered craft re-entry to the launch place. By <br>
2035 our spaceships will carry humans and goods from the Inner Solar System to the Outer <br>
Solar System.`;

document.querySelectorAll('.chapter-card').forEach(card => {
  card.addEventListener('click', function() {
    const chapter = card.getAttribute('data-chapter');
    if (chapter === 'introduction') {
      // Add heading and wrap each section in <p> for spacing
      modalText.innerHTML = `
        <h2>&gt;&gt; The disappointed 100,000 people desiring space travel</h2>
        <div style="margin-bottom:2em"></div>
        <p>Now in 2025 there must be at least 100,000 people in the world desiring to go to space right now for the below reasons :</p>
        <ul>
          <li>Tourism i.e. just the simple natural act of experiencing the cosmos.</li>
          <li>Mining moons, asteroids and other space bodies.</li>
          <li>Research including to find life and to try to terraform other worlds to set up new homes for humans.</li>
        </ul>
        <p>But in the context of the current space industry most people will never be able to go to space because the space industry imposes technological restrictions and anti-democratic social restrictions which we list below :</p>
        <h3>&gt;&gt; Technological restrictions of the current space industry</h3>
        <p>The current means of going to space is the Tall Rocket which is an inefficient, expensive, complicated and unsafe system in the following ways :</p>
        <p><b>(a) Inefficient</b> because the rocket has to expend a lot of non-recoverable chemical fuel to rise even one centimeter off the launch pad and then to keep rising through the atmosphere. And once in orbital space it has to keep pushing out the non-recoverable fuel to give it the push and the direction towards the destination and then for any course corrections and then for braking once it is very near the destination. This requires lot of fuel and thus very large fuel tanks and these tanks increase the weight of the rocket and that creates a wrong cycle which in the end leaves very less mass of the rocket for the cargo, say to carry even one human. This disadvantage remains even when the rocket makers “stage” the rocket i.e. divide it in at least two separate parts where the part which goes to space ( the spaceship ) will have its own fuel and engine and this part is pushed through most of the atmosphere by a booster rocket and in the upper atmosphere the parts separate and the booster falls or does powered descent towards the ground both so that some mass is lessened and the spaceship fires its own engines to go further out into space. For even slightly farther distances like the Moon, a very small cargo like a single human becomes a very small carryable part of the original massive rocket. Some may think “Why not make the rocket huge to be able to carry more humans ?” but the huge rocket will also need a massive launch and recovery tower and other infrastructure and that simply feels neither clean nor practical. An orbital spaceship should be able to launch and descend in most places without any special infrastructure.</p>
        <p><b>(b) Inefficient</b> also because even before the rocket leaves the launch pad, it is associated with massive infrastructure, even just to hold the massive rocket steady till it is ready to launch. And that requires the efforts of a very large number of people who may have been doing other works if the spacecraft system was an efficient system… even by themselves going to space. Attached with this inefficiency is high expensiveness of the rocket and its infrastructure, including the material required to form the rocket and including the fuel because every time the rocket launches and travels in space, its fuel is fully expended and thus another launch of the rocket requires new fuel, and the fuel usually is at least two forms coming together later and this means more expenditure of money or more obtainment of the fuels. Finally, if many more people have to go to space and if their means is the tall rocket then the above inefficiency and expensiveness will add up a lot. These negative factors remain even in the modern trend of reusable tall rockets having legs to descend on and made ready to take flight again.</p>
        <p><b>(c) Complicatedness:</b> The American phrase “As complicated as rocket science” would not have existed if people, to go to space, were not using tall rockets which inherently are very complicated to make in terms of fuel tanks, their plumbing, their electrical and other control systems, the engine system, their staged structure, their landing system like legs and their difficultyness to make them safe for humans. Associated complicatedness is also in the launch infrastructure.</p>
        <p><b>(d) Non-safety:</b> Other than the above point about complicateness, there is the direct fact of non-safety starting from when the tall rocket starts to launch. Most of the mass of the rocket is fuel and thus the rocket can explode spectacularly when launching or after launching or then on in space. Within an atmosphere if the rising rocket stops the fuel supply to the engine for even one second, even because of error, it will crash to the ground and destroy the humans within it and also a large area where it crashes. That is why rocket launch stations are set up in isolated places, whether near the sea or in deserted lands or in remote forests or in remote mountains. And especially when a lot more rockets have to be built to take a lot more humans to space, the inefficiency and complicatedness will contribute to making them even more unsafe for humans. Another non-safety situation about the tall rocket is that since it is vertically very large it can easily topple during quakes in the ground it is standing on using its legs. This say on the Moon. What is the point of the space industry saying “Travel in space is risky” when the most immediate risk is on Earthen rocket launch stations?</p>
        <p>Thus the Tall Rocket is an obsolete method of travel to space. There is another type of launch system which is the Space-plane and this is under design by some organizations. This system has the spaceship formed like a regular aeroplane and takes off from the ground from a runway like a regular aeroplane usually using jet engines but when it reaches higher atmosphere it fires another set of engines which are a multiple of small rocket engines which push the space-plane to orbit and then farther into not-distant space. A variation has a single type of engines which operate both as the takeoff engines and then the space-taking engines. However, the space-plane has the following disadvantages:</p>
        <ul>
          <li>The space-plane requires a dedicated airport / spaceport system including a lengthy runway and this adds greatly to complicatedness, expensiveness and inconvenience.</li>
          <li>A space-plane airport / spaceport on Earth is one thing but what about places without spaceports, which is any other world except for Earth. For example, if we are using a space-plane to go to the Moon where there is no spaceport and runway, how will this infrastructure be built so that the space-plane is able to land for the first time? If we build a separate lander craft for such situations, carried as cargo on the space-plane, the entire system will become complicated just to travel nearer distances in space like to the Moon. This leads to inefficient economics, expensiveness and compromise on human safety.</li>
          <li>The space-plane airport / spaceport / runway is as easily affected by natural calamities and other situations like regular aeroplane airports are prone to. This is inconvenient to say the least.</li>
        </ul>
        <p>So the space-plane is also not the solution. Therefore the Tall Rocket and the Space-plane are not good enough to take humans farther than the Moon in a shorter time, like weeks.</p>
        <h3>&gt;&gt; Social restrictions of the current space industry</h3>
        <p>Aspiring space travellers either have to be very rich to pay for a single ticket (at least 20 millions dollars) to launch on the rockets or in-development space-planes of the world’s very few humans-to-space programs of government space agencies and private space agencies; or the aspiring travelers must be associated with these governments or allied governments to travel for free by being military pilots, professional scientists etc; or the aspiring space travellers must win seat lottery in some private space-trip arrangement program associated with those governments or private space agencies and this lottery will be won by only one person per year in the entire world. Most ordinary space travel aspirers have no chance. But it is not Nature / Universe denying most people access to the cosmos, it is anti-democratic systems among humans doing so.</p>
        <p>Also, the very workers who build these current human launch systems are excluded from going to space on the space systems they built with their sweat, sleepless nights and risk of serious injury or death!!! All they are allowed to do is clap in the control rooms whose screens show the launches of those space systems taking to space the rich and the other privileged. A ridiculous and undemocratic situation just like two other situations in the “Democratic World” :</p>
        <ul>
          <li>The poor daily-wage construction laborers who build mansions, penthouses and two-bedroom flats for the rich and the middle class, never get to live in them and will be chased away from the gate if they happen to visit later and they instead have to live in slums.</li>
          <li>The few billion ordinary fans of sports stars, who make these sports stars millionaires and adored for years, will never get replied for their long passionate loyalty with a million dollars in their bank accounts each and neither will these sports stars speak up about issues their ordinary fans face in their daily lives or even if the loyal fans die in stampede in the stadiums or outside the stadiums where these sports stars descend royally to play or get felicitated, nor will the cherished sports stars speak about global issues like Climate Change, techno-feudalism and the traditional feudalism in the cities and the villages which includes the wrongs against farmers, white-collar workers, students, daily-wagers and women.</li>
        </ul>
        <h3>&gt;&gt; The techno-social restrictions coming together</h3>
        <p>So all this hurry-burry and artificial glamor of the current space industry is pointless in the end for the at least 100,000 other desirers of space travel who will never leave Earth and the very rich owners of most current space agencies will keep profiting from this hurry-burry and from the complicated, expensive and unsafe current launch systems yet the ordinary desirers and humanity in general are encouraged to glorify this industry and its feudal owners. These are fake heroes.</p>
        <h3>&gt;&gt; Our solution : The Yuri Plan</h3>
        <p>This plan is named after Yuri Gagarin, the Soviet cosmonaut who was the first human in space. There is an entire universe to explore and settle to the max extent possible by humans and we must do this in a way that is simple, gentle, safe, humanist and respectful of Nature and Nature’s laws. Space travel must become as common as bus travel, and space living as common as hotel stay, and these should flow into evolving human society on Earth too. Potentially every human should be able to access space, live in space and attain their potential in space, whenever he or she desires, with a minimal usage fee or no fee at all, in the now and in the far far future.</p>
        <p>Towards this, we of Kosmos Society will build all the systems, whether the spaceships or the computers or the electricity generators or the spacesuits or the habitation systems or the social system and every other necessary thing, and all this in a simplified and straightforward manner.</p>
        <p>Starting 2035 our-designed spaceships will be able to carry humans and goods safely throughout the Inner Solar System and Outer Solar System and our other technologies will enable living in those regions. “Inner Solar System” means to safely near the Sun in one direction and the Asteroid Belt in the other direction, and “Outer” means beyond the Asteroid Belt to Pluto and beyond. This will be just the start.</p>
        <p>Most of our systems will be usable on Earth either directly or in derivation, and all our systems will be simplified, manufacturable cheaply, operable cheaply and repairable cheaply, and the manufacturers will be national governments who will purchase from us the designs and engineering details of our systems for a reasonable license fee and they will be able to set up the factories in their own countries. Once these systems are built by the governments they should charge the masses minimal fees or no fees at all for personal ownership of some of these systems (say our wearable computer) or when being passengers (say on our spaceships) or when living in space habitats. For example, an individual’s trip to the Moon should have a max seat price of 100 dollars or ideally free.</p>
        <h3 style="text-align:center;color:#fff;">&gt;&gt; Our systems include</h3>
        <ul style="list-style-type:none;padding-left:0;">
          <li><b>&gt;&gt; Faradn</b> A compact, non-nuclear, simple and self-sustaining electricity generator which will power all our smaller and larger machines by being installed within them or just outside them This is decentralized electricity generation instead of the current centralized methods</li>
          <li><b>&gt;&gt; Alef-A</b> A reusable space-going airship which will be our ascent/descent system on worlds and also the means to travel short distances in space like Earth to Moon This airship will be lifted in atmosphere worlds by helium gas and hot air and will use three eco-friendly and sustainable propulsion methods: electric rotors, coal combustion, water steam jets "World ascent/descent" can mean for an air-filled space object (Earth, perhaps Titan etc) or an airless space object (Moon, large asteroids etc) The cargo can be humans and goods The Alef-A airship-spaceship will be shaped like an upturned teacup without the handle The first full version will be able to carry 20 humans to the Moon</li>
          <li><b>&gt;&gt; Alef-F</b> A large in-space long-distance ferry which will be large enough to carry five Alef-A crafts and a hundred humans and a hundred tons of other cargo and will be propelled primarily by water steam jets This ferry will be able to travel throughout the Inner Solar System and the Outer Solar System and will always be in space, never to descend on any world</li>
          <li><b>&gt;&gt; Ra-H</b> A hybrid vehicle which will be a combination of hovercraft, wheelcraft and aircraft, able to carry humans and small cargo and to be used on the surface and air of air-having space bodies such as Red One (Mars) and Titan, and the surface of larger airless space bodies such as the Moon and asteroids In air propulsion mode it will use electric rotors and coal combustion depending on the situation and will allow for vertical takeoff and landing (VTOL) Each Ra-H will carry three non-suited people in a pressurized cabin A single Ra-H will be carried down to those worlds by a Alef-A craft</li>
          <li><b>&gt;&gt; Stillsuit</b> A spacesuit with short-distance flying ability The suit will be a hard suit and will use bio-mimicry for self-sealing in case of punctures The suit will have a water system to recycle water from sweat and urine, and facility to collect defecation and render it non-smelly and non-toxic Also will be other conveniences like a simple mechanical system to scratch all of the face and dab it of sweat</li>
          <li><b>&gt;&gt; Dune Buk</b> A wearable computer which will be operable in space conditions It will be worn on the back of the upper arm and will use novel methods for computation, electromagnetic frequency reception, data storage and projected-display system where sound will play a major role The file system will be non-hierarchical and categories-recording The networking system is called Frema This computer will be aesthetic for the stylish person and will be wearable on all kinds of clothing including factory clothes and the Stillsuit spacesuit</li>
          <li><b>&gt;&gt; Space habitation construction</b></li>
          <li><b>&gt;&gt; Engineered biology researches</b> for food production, human body tolerance for space conditions, mining and other things</li>
          <li><b>&gt;&gt; Serf</b> An autonomous satellite to clear Earth orbit from the satellite debris and other space debris which are currently polluting Earth orbit and may soon make human journey through Earth orbit very dangerous because of risk of these debris crashing into their spaceships</li>
          <li><b>&gt;&gt; Same Water</b> Our progressive pan-human constitution for space</li>
        </ul>
        <p>By 2031 two people will go to Low Earth Orbit in our Alef-A airship-spaceship, orbit Earth and return gently through the atmosphere by powered craft re-entry to the launch place. By 2035 our spaceships will carry humans and goods from the Inner Solar System to the Outer Solar System.</p>
      `;
      modal.style.display = 'flex';
    } else {
      modalText.innerHTML = '<em>Content coming soon.</em>';
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
