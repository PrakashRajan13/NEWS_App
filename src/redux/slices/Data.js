import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState={
    data:[ 
        {
        id:1,
        Title:"As Nayanthara-Vignesh Shivan announce birth of twin sons, TN govt to seek explanation about surrogacy",
        img_url:"https://images.indianexpress.com/2022/10/nayanthara-1200.jpg",
        content:"Tamil film industry’s power couple Nayanthara and Vignesh Shivan on Sunday announced that they have become parents to twin boys. Amid the good wishes flowing in, the couple’s announcement is snowballing into a controversy. While the duo has not made an official statement, reports say that the babies were conceived through surrogacy. Questions are being raised over whether procedures stipulated by the Indian surrogacy laws were followed by the couple. Nayanthara and Vignesh got married four months ago.",
        date:"10-10-2022",
        catagery:"cinema",
        author:"Balhaar"
        },
        {
            id:2,
            Title:"Rahul Gandhi is walking, but is he covering the needed distance?",
            img_url:"https://images.indianexpress.com/2022/10/rahul.jpg",
            content:"The Congress’s entire organisational machinery and communication apparatus is working overtime to make Rahul Gandhi’s Bharat Jodo Yatra a success. After all, the cross-country march is the party’s biggest national-level mass mobilisation in decades and is an ambitious exercise to rebrand Rahul ahead of the high-stake duel with Narendra Modi for the 2024 Lok Sabha challenge.",
            date:"11-10-2022",
            catagery:"politics",
            author:"Devansh"
        },
        {
            id:3,
            Title:"The slow weight-transfer problem in Shubman Gill’s batting technique",
            img_url:"https://images.indianexpress.com/2022/10/Untitled-design-21-1.jpg",
            content:"Shubman Gill has just one problem with his batting: the slow weight transfer onto the front foot. Twice this ODI series, he has paid for that mistake off Kagiso Rabada. In the past, in Indian conditions again, Kyle Jamieson (twice), James Anderson and Mohammed Shami (in the IPL) have penalised Shubman Gill for the same error, cleaning up the sticks.",
            date:"12-10-2022",
            catagery:"sports",
            author:"Daksh"
        },
        {
            id:4,
            Title:"EXCLUSIVE | Follow Prescribed Standards for Drug Testing, Govt Tells States After WHO Medical Product Alert",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/09/chemist-shop-medicine-drug-pharmacy-16655773423x2.png?impolicy=website&width=510&height=356",
            content:"Triggered by the World Health Organization’s (WHO) alert linking made-in-India cough syrups to the deaths of children in Gambia, the government has directed all drug regulators to ensure prescribed standards to test the quality of drugs are followed, News18 has learnt. According to WHO, laboratory analysis of the syrups manufactured by Sonipat-based Maiden Pharmaceuticals confirmed “unacceptable” amounts of diethylene glycol and ethylene glycol, which can be toxic and lead to acute kidney injury. In a letter to drug regulators of state and Union Territories, the Drug Controller General of India (DCGI) has endorsed the letter written by the Indian Pharmacopoeia Commission (IPC), to test drugs using the prescribed standards to maintain the quality of drugs. IPC is an autonomous institution under the Ministry of Health and Family Welfare, which is responsible to set standards for medicines in the country.",
            date:"13-10-2022",
            catagery:"india",
            author:"Ayush"
        },
        {
            id:5,
            Title:"Samsung Galaxy Watch 5 review: Premium smartwatch packed with features",
            img_url:"https://images.indianexpress.com/2022/10/Galaxy-Watch-5-featured.jpg",
            content:"I have been a fan of Google’s WearOS and Samsung’s TizenOS for a few years now. So when I upgraded to the older Galaxy Watch 4, I was excited. But I soon realised one thing, the smartwatch has limited battery life. Fast forward a few months, and Samsung launched the Galaxy Watch 5, which sports the same design as the Watch 4. But is the Galaxy Watch 5 a worthy upgrade to consider? And is this a good enough watch for those looking to get a WearOS device on their hands? Here’s my review of the Galaxy Watch 5 for the 44mm LTE version.",
            date:"14-10-2022",
            catagery:"technology",
            author:"Dakshesh"
        },
        {
            id:6,
            Title:"Mulayam in name, ‘fauladi’ in spirit, he oversaw the transformation of India’s heartland politics",
            img_url:"https://images.indianexpress.com/2022/10/WhatsApp-Image-2022-10-10-at-10.20.38-AM-1.jpeg",
            content:"FROM THE time he made the transition from the wrestling arena to the floor of the Uttar Pradesh Assembly in 1967 on the ticket of the Samyukta Socialist Party (SSP), Mulayam Singh Yadav never looked back. He was among the crop of first-timers who won that year in the state from communities falling under the category of Other Backward Classes (OBCs), including Kalyan Singh. If 44 seats were won by the SSP, which brought together the farming communities of the state, 98 were won by the BJP’s precursor Bharatiya Jana Sangh.",
            date:"15-10-2022",
            catagery:"politics",
            author:"Falan"
        },
        {
            id:7,
            Title:"Uddhav faction moves Delhi HC, seeks quashing of EC order freezing Shiv Sena name, poll symbol",
            img_url:"https://images.indianexpress.com/2022/10/UDDHAV-1-2-1-1.jpeg",
            content:"The Uddhav Thackeray-led Shiv Sena faction Monday approached the Delhi High Court seeking to quash the Election Commission of India’s (ECI) order for freezing the party name and election symbol.",
            date:"16-10-2022",
            catagery:"politics",
            author:"Frado"
        },
        {
            id:8,
            Title:"Capital Chokehold | Delhi's Dream of Clean Air Hinges on Punjab's Largest Biogas Plant. Can AAP Govt Deliver?",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/stubble-burning-16655518803x2.jpg?impolicy=website&width=510&height=356",
            content:"As winter approaches, Delhi is bracing itself for plummeting air quality, made worse by stubble burning in neighbouring states. Besides being a health and environmental hazard, the issue is also a political one with the Aam Aadmi Party in power in both Delhi and Punjab. In this series, News18 studies the situation on ground, explores solutions with experts and attempts to answer if Delhiites will breathe easy this season.Spread over nearly 20 acres of land, one of Asia’s largest Compressed Biogas (CBG) plants which recently started operations in Bhutal Kalan village of Sangrur is gearing up for its first big test this winter. The project commissioned by the Punjab government in April this year is part of its strategy to curb stubble burning by converting the mammoth volume of paddy straw into renewable energy",
            date:"17-10-2022",
            catagery:"politics",
            author:"Girik"
        },
        {
            id:9,
            Title:"Kerala 'Human Sacrifice': Accused Ate Victims' Flesh, Were Told Eating Cooked Body Parts Help 'Preserve Youth' | Horrific Details",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/collage-maker-12-oct-2022-11.08-am-16655534333x2.jpg?impolicy=website&width=510&height=356",
            content:"More shocking details have come to the fore of what is being called a case of ‘human sacrifice‘ from Kerala, in which two women were allegedly killed and their body parts were chopped as part of black magic in Elanthoor village of Pathanamthitta district.Three people, including a couple, were arrested in this connection with the matter. The arrested persons were identified as Bhagaval Singh, a local massage therapist, his wife Laila, both natives of Pathanamthitta; and Rasheed alias Muhammand Shafi, said to be the mastermind of in the case.The three accused were remanded to judicial custody till October 26 by the Ernakulam District Sessions court on Wednesday. News18 accessed the remand report copy of the case that was submitted before the court that mentioned it to be a case of 'human sacrifice done in the name of superstition and black magic'.The two deceased, identified as Padma and Roslyn, who had earned their daily bread selling lottery tickets on the streets, were allegedly sacrificed by the accused to settle the financial issues of the couple and bring prosperity in their life, police said.",
            date:"19-10-2022",
            catagery:"politics",
            author:"Hredhaan"
        },
        {
            id:10,
            Title:"Weather Updates: Flood-like Situation in Arunachal, Tourists Stranded in Sikkim; IMD Asks People to Avoid 'Cyclone' Rumours",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-2022-10-12t144018.316-16655662103x2.jpg?impolicy=website&width=510&height=356",
            content:"Weather Updates: Eleven people were killed in rain-related incidents in Uttar Pradesh where over 900 villages in 17 districts were affected by floods following heavy rainfall, officials said on Monday. According to a report by the relief commissioner’s office, the lives of around 8.43 lakh people have been impacted due to the floods. In Jhansi, seven people were killed in lightning strikes on Monday afternoon, officials said. In other parts of the country too, rains wreaked havoc. News18 gives you latest weather updates: ☁ The Regional Meteorological Centre, Bhubaneswar, Wednesday, said the IMD has not issued any kind of forecast for cyclone so far and advised people of Odisha to stay away from rumours regarding a possible cyclonic storm in the coastal state. The India Meteorological Department has not made any forecast on the cyclone or even given any indication in this regard. Please keep away from the rumour, the IMD’s regional centre here tweeted. It is not scientific to make a forecast on any weather condition seven days before its occurrence, the weather agency said. We are working 24 hours a day to provide accurate weather-related information. So please stay away from rumours, it said.",
            date:"19-10-2022",
            catagery:"politics",
            author:"Jason"
        },
        {
            id:11,
            Title:"Apple to roll out 5G software update in December",
            img_url:"https://images.indianexpress.com/2022/10/Apple_iPhone14_NEW5.jpg",
            content:"Tuesday’s episode of Kaun Banega Crorepati was a mixed bag of emotions for Amitabh Bachchan’s fans. His son, actor Abhishek Bachchan, and wife Jaya Bachchan came to surprise the superstar on his 80th birthday. During the episode, Abhishek made his father emotional by showing old pictures of the actor with his family.",
            date:"21-10-20222",
            catagery:"technology",
            author:"Ishaan"
        },
        {
            id:12,
            Title:"Meta wants you to work in virtual reality. Here’s what that’s like",
            img_url:"https://images.indianexpress.com/2022/10/Meta-Quest-Pro.jpg",
            content:"Meta Platforms Inc. has made it clear that it wants to infiltrate the business world with virtual reality technology. So I tested the premise on Tuesday morning, joining the company’s Connect developer conference via an Oculus Quest 2 virtual reality headset. The conference was hosted in the company’s Horizon Worlds app, which the company said will soon be stuffed with basic corporate productivity offerings from Microsoft, Adobe, Accenture and Zoom. Digital avatars that look like cartoon versions of us, except legless (more on that later), will have access to PDFs, Word documents, breakout rooms and whiteboard meetings. It’s going to be an adjustment, and take more than a few familiar tools to win me over.",
            date:"22-10-2022",
            catagery:"technology",
            author:"Jatin"
        },
        {
            id:13,
            Title:"Brain Soup, Lungs Taken Out, Beheadings: Kerala Horror One of India's Many 'Black Magic' Murders; How Law Deals With Them",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/black-magic-16655601543x2.jpg?impolicy=website&width=510&height=356",
            content:"Increasingly gruesome details of the ‘black magic’ murders in Kerala emerged on Wednesday, where two women were killed and buried by a couple in a ritualistic ‘sacrifice’ in Pathanamthitta district. The case has shed spotlight on similar incidents in India, where murders carried out in the name of superstition, or ‘black magic’ rituals are not uncommon. In October this year itself, two men were arrested for allegedly killing a six-year-old boy, in what they claimed was a “sacrifice for prosperity”, at the construction site of the CRPF headquarters in South Delhi’s Lodhi Colony. And in May, a man allegedly beheaded his 60-year-old maternal uncle over black magic suspicion and walked around two kilometers with his severed head and axe in hands in Sidhi district of Madhya Pradesh before being nabbed by the police. Black magic crimes and other superstitious offences violate the fundamental rights guaranteed by Indian Constitution Articles 14, 15, and 21. These acts also violate several international treaties, including the “Universal Declaration of Human Rights,' International Covenant on Civil and Political Rights,' and “Convention on the Elimination of All Forms of Discrimination Against Women,' to which India is a signatory.'",
            date:"23-10-2022",
            catagery:"latestnews",
            author:"Karan"
        },
        {
            id:14,
            Title:"Bigg Boss 16: Shalin Bhanot Gets Jealous As Tina Datta Tells Gautam Vig 'I Care For You'; Watch Video",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/ad.kjasd_-16655575213x2.jpg?impolicy=website&width=510&height=356",
            content:"The equations in the Bigg Boss house keep changing with each passing day. BB 16 fans have been observing the bond between Sumbul Touqeer Khan and Shalin Bhanot lately. It seems romance is brewing between Tina Datta and the Captain of the house Gautma Vig now, as evident from the latest clip ft the two. In a video posted on Bigg Boss’ official Twitter handle, we see Tina Datta and Gautam Vig teaming up to tease Shalin about their ‘unconditional love.’ In the short video, Gautam is seen having a one-on-one conversation with Shalin and telling him about his liking for Tina. Later on, we see, Gautam and Tina seated close to each other on the dining table, when they team up to tease Shalin. Gautam says, “Tina understands everything even without saying. 'Tina too smilingly says she has unconditional love for Gautam. Next, the camera zooms on furious Shalin’s face.'",
            date:"24-10-2022",
            catagery:"latestnews",
            author:"Ebrahim"
        },
        {
            id:15,
            Title:"SC to Hear Plea Raising Issue of Lumpy Skin Disease in Cattle on Oct 31",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/09/lumpy-skin-disease-16630464883x2.jpg?impolicy=website&width=510&height=356",
            content:"The Supreme Court on Wednesday said it will hear on October 31 a petition raising the issue pertaining to the lumpy skin disease in cattle. The matter was mentioned for urgent listing before a bench headed by Chief Justice U U Lalit. The counsel who mentioned the matter told the bench that the disease has spread among cattle and over 67,000 cows have died till date due to this. The bench, also comprising justices Ajay Rastogi and S R Bhat, said the matter would be listed for hearing on October 31. Lumpy skin disease is a contagious viral infection that affects cattle and causes fever, nodules on the skin, and can also lead to death. The disease gets spread by mosquitoes, flies, lice, and wasps by direct contact among the cattle, and through contaminated food and water. The Centre had last month said more than 67,000 animals have died since the outbreak of the lumpy skin disease in July.",
            date:"25-10-2022",
            catagery:"latestnews",
            author:"Ekhlaq"
        },
        {
            id:16,
            Title:"BJP Confident Karnataka Quota Card to 'Caste' Spell on SCs, STs Legal, Other Communities Have 'Reservations'",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/09/bommai-16633052583x2.png?impolicy=website&width=510&height=356",
            content:"The Basavaraj Bommai-led BJP government’s timing to announce its decision to enhance the reservations for Scheduled Castes (SCs) and Scheduled Tribes (STs) is being seen as having been taken hurriedly with a focus on the Karnataka elections due next year. The circumstances under which the chief minister took the decision are quite interesting. The political expediency arose from the fact that Congress’s Rahul Gandhi at the party’s Bharat Jodo Yatra spoke about implementing the Justice Nagamohan Das Commission report on widening reservations for the Scheduled Castes and Scheduled Tribes. The very next day, Karnataka’s leader of the opposition and former chief minister Siddaramaiah had to leave the yatra to attend the all-party meeting called to decide on increasing reservations. Shortly afterwards, the Bommai cabinet accepted the recommendations of the Justice Das-led commission, which had been set up by the Congress-Janata Dal (Secular) coalition when it was in power in 2018-19. The panel submitted its report in July 2020 which recommended increasing reservations for SC and STs.",
            date:"16-10-2022",
            catagery:"politics",
            author:"Gafur"
        },
        {
            id:17,
            Title:"Reach Flood-Affected Areas, Intensify Relief Work: UP CM Yogi Adityanath Directs Ministers",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-2022-10-09t143838.042-16653066133x2.jpg?impolicy=website&width=510&height=356",
            content:"In a high-level meeting on Wednesday, Uttar Pradesh Chief Minister Yogi Adityanath reviewed the situation arising due to excessive rainfall in the state in the last few days. The Chief Minister directed the group of ministers to immediately visit the Divisional Headquarters / districts under their charge and extend their cooperation in relief and rescue work. The CM has given instructions to expedite the relief and rehabilitation work in all districts affected by heavy rains and to keep the District Control Room functional 24/7 under the leadership of the ADM or Joint Magistrate level officers. CM Adityanath said that due to excessive rains in the last few days, adverse effects have been seen on life, livestock and agriculture. Loss of life and wealth has been reported in many districts. The state government is committed to making necessary arrangements for the safety and maintenance of all the affected people",
            date:"29-10-2022",
            catagery:"politics",
            author:"Ijaz"
        },
        {
            id:18,
            Title:"Amitabh's 'Gandhis' Connect to Jaya's SP Career: On Big B's 80th Birthday, Bachchans' Tryst With Politics",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-2022-10-11t110313.508-16654667903x2.jpg?impolicy=website&width=510&height=356",
            content:"Now 80 and going stronger than ever, spooling in celluloid miles’ with the roles rolling in and directors still lining up to sign him on, it’s Amitabh Bachchan’s birthday today. From Ramesh Sippy who directed him in the 1975 cult film Sholay to Ayan Mukerji who helmed his latest Brahmastra 47 years later, Bachchan is the man for all seasons and all kinds of films. However, the actor and his family have had a life and legacy beyond cinema - especially in politics.",
            date:"30-10-2022",
            catagery:"politics",
            author:"Qadir"
        },
        {
            id:19,
            Title:"Untold stories of political Bachchan from 80s when he joined and quit politics",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/ab_1-sixteen_nine.png?VersionId=oFCfKFJgX8v5VXu9srWXpTL4TStXOWE5&size=690:388",
            content:"On a chilly day in December 1982, journalist BB Nagpal was asked by his editor to try to meet Amitabh Bachchan and find out why he was enjoying Delhis winter instead of being in Bombay (now Mumbai). Bachchan had reportedly recovered from the life-threatening injury suffered during the shooting of the movie Coolie. But he was staying put in Delhi. This meant the shooting of films worth Rs hundreds of crores was pending and the makers were anxious. Nagpal, who had been working for the United News of India (UNI) since 1969, first found out where Amitabh was living. It was a farmhouse in South Delhi's Mehrauli. In those days, there weren't too many farmhouses in the national capital. The area was a complete jungle. After much effort, Nagpal got Bachchans phone number.",
            date:"01-10-2022",
            catagery:"politics",
            author:"Umraah"
        },
        {
            id:20,
            Title:"PM Modi, Amit Shah know nothing about JP movement: Nitish Kumar",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/nitish_kumar_1200x768_0.jpeg?VersionId=6efk3RmnX.s3E9h0pFr3oyFGfipzjx1k&size=690:388",
            content:"Bihar Chief Minister Nitish Kumar on Tuesday trained his guns on Union Home Minister Amit Shah over his visit to Sitab Diara on Jayaprakash Narayans 120th birth anniversary. The minister doesnt have the age or experience to comment on the socialist icon's legacy, Kumar said, reported news agency PTI. Sitab Diara is the birthplace of Jayaprakash Narayan. The chief minister who was once an ally in the states NDA government slammed Shah and Prime Minister Narendra Modi, questioning their experience in politics. 'He (Narendra Modi) came into prominence only in 2002. I have been involved with politics since 1974,' Kumar said in an apparent response to Shah's allegation that Nitish Kumar betrayed JP by 'sitting in the lap of the Congress'.",
            date:"02-10-2022",
            catagery:"politics",
            author:"Faaiz"
        },
        {
            id:22,
            Title:"5G vs 4G: Should you buy a 4G phone in 2022?",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/indias_navic-sixteen_nine.png?VersionId=88yKDLiVEeLCwilImy3PFmWJIpwgjfPV&size=690:388",
            content:"5G is the talk of the town right now. Two of three major telecom operators - Airtel and Jio, have already announced their 5G services for India, and by the end of October, 5G connectivity will be available to use in a bunch of tier-1 and tier-II cities. At least thats what I am hoping for. Because I am an Airtel user who lives in New Delhi, and while my city is on the list of initial cities to get 5G service, the service itself isnt available in my area. So, you might be living in a tier-1 or a tier-2 city, and your telecom operator also must have rolled out 5G services, but you also need to ask yourself a question - is 5G available to use in your area? For instance, youve bought yourself an expensive flagship phone, just to experience the superfast 5G speeds, only to know that 5G services arent available to use in your area. And say, your area is supposed to get 5G support in a year or two, what do you then? Did you buy this expensive phone to experience 5G one year down the line?!",
            date:"03-10-2022",
            catagery:"technology",
            author:"Sirak"
        },
        {
            id:23,
            Title:"Samsung Galaxy Z Flip 3 is available for an effective price of Rs 54,999 during Flipkart Diwali sale",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/samsung_galaxy_z_flip-sixteen_nine.jpg?VersionId=WTlpscx16MFGmb6P7lVhN2vUH6JHUfVL&size=690:388",
            content:"Flipkart is offering a massive discount on smartphones across brands during its ongoing Big Diwali sale. One of the best discounts offers are available during the sale is on the Samsung Galaxy Z Flip 3. Amazon is also hosting its Diwali sale right now and offering a massive discount on the Galaxy Z Fold 3. Lets check out both deals. First, starting with the Galaxy Z Flip 3. During the Flipkart sale, the Galaxy Z Flip 3 is available at a discounted price of Rs 59,999. In addition, the platform is also offering Rs 5000 cashback, which brings down the effective price to Rs 54,999. Now, if you want to buy the foldable phone this is surely the best time. The Galaxy Z Flip 3 was launched last year and offers a range of top-end features including -- Qualcomm Snapdragon 888 processor, a 6.7-inch foldable dynamic AMOLED screen, a 120Hz refresh rate, an Android 11 operating system, 12-megapixel dual-camera set-up on the rear, 10-megapixel front camera, a 3300mAh battery with 15W fast charging support, and more. The flip phone also comes with IPX8 rated for water protection, a 10W fast wireless charger, a side-mounted fingerprint scanner, Bluetooth 5.1 for wireless connectivity, accelerometer, stereo speakers tuned by AKG, and a few other features.",
            date:"04-10-2022",
            catagery:"technology",
            author:"Prathu"
        },
        {
            id:24,
            Title:"Mark Zuckerberg launches new Meta Quest Pro VR headset: all details",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/meta_quest_pro_vr-sixteen_nine.jpg?VersionId=5iclmkKKdP5Y1mECcBZSs2OH8h.bInng&size=690:388",
            content:"At the Meta Connect last night, the Mark Zuckerberg-headed company launched a new VR headset dubbed Meta Quest Pro. The VR headset offers features like high-res sensors for robust mixed reality experiences, LCD displays, sleek design, plus eye tracking and Natural Facial Expressions that will help your avatar reflect you more naturally in VR. Over the last few years, we have seen Meta investing a lot in VR and AR experiences and the company believes that Metaverse is the future. Meta Quest Pro has been launched at $1,499.99, which roughly translates to slightly over Rs 1.2 lakh. The device comes bundled with the headset, Meta Quest Touch Pro controllers, stylus tips, partial light blockers, and a charging dock. As for availability, the Meta Quest Pro will be available for purchase on October 25. For now, the VR headset will be available in select countries (which doesn't include India) and select retail platforms, including -- Best Buy in the USandCanada, Argos and Currys in the UK, and FNAC and Boulanger in France. Interested buyers will also be able to pre-order the device from Amazonin the US, UK,Canada, and France. Meta Que",
            date:"05-10-2022",
            catagery:"technology",
            author:"Rujul"
        },
        {
            id:25,
            Title:"Shahid Afridi slams Pakistan captain's approach: Babar must come out of this average mindset",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/babar-sixteen_nine.jpg?VersionId=w04K32ILdkQ2Ud1ofhCTe6E0kEzHFH.7&size=690:388",
            content:"Former Pakistan skipper Shahid Afridi has slammed Babar Azam for his approach, saying he has to come out of his average mindset. Afridi wants the Pakistan captain to think big when it comes to setting targets for his opponents. The 42-year-old's comments came in response to Azam's statement before Pakistan's match against Bangladesh in the ongoing tri-series in Christchurch. Azam had said that he was thinking of setting a target of 160 runs for Bangladesh to chase. To this, the former all-rounder said Azam should get out of this average mindset, while questioning his big intent. 'Babar must come out of this average mindset and think big. If scoring 160 runs for the target against Bangladesh was his big intent, then what is he going to do against stronger teams,' said Afridi.",
            date:"06-10-2022",
            catagery:"sports",
            author:"Praruj"
        },
        {
            id:26,
            Title:"Olympic medalist Sushil Kumar to face trial for murder in Sagar Dhankar case",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/sushilkumarwrestler-sixteen_nine.jpg?VersionId=1H468SArDxWTfUoAdqpSeaEh3qC6haub&size=690:388",
            content:"A Delhi court framed charges of murder, attempt to murder, rioting, unlawful assembly and other sections including criminal conspiracy against Olympian Sushil Kumar & 17 others in junior wrestler Sagar Dhankar's murder case. The Delhi court has also framed charges against two absconding accused. Sushil Kumar hatched a conspiracy that led to a brawl at the Chhatrasal Stadium and allegedly the death of a former junior national wrestling champion, the Delhi Police said in its charge sheet in the murder case. Kumar wanted to 'establish supremacy' among younger wrestlers, the police further said. Kumar and his associates allegedly assaulted 23-year-old wrestler Sagar Dhankar, his friend Sonu and three others at the stadium on the intervening night of May 4 and 5 over a property dispute. Later, Sagar succumbed to his injuries.",
            date:"12-10-2022",
            catagery:"sports",
            author:"Nitin"
        },
        {
            id:27,
            Title:"UEFA Champions League: Real Madrid's Antonio Rudiger provides update after suffering horror head injury",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/ap22284763132189-sixteen_nine.jpg?VersionId=tumiLgigtN3CaH2VlJ5kny9r0JRGVOxX&size=690:388",
            content:"Real Madrid defender Antonio Rudiger took to social media to confirm that he is fine after suffering a horrific head injury in Warsaw, Poland. The German defender equalized in the 95th minute against Shakhtar Donetsk but picked up a head injury while doing so. Rudiger was left with a gruesome gash and blood streaming from his face after colliding with Shakhtar goalkeeper Anatolii Trubin. The defender latched onto Toni Kroos' cross in the dying minutes of the game, to help the visitors claim a 1-1 draw. Following the incident, Real Madrid doctors rushed to Rudiger's aid and stitched up the wound. After the match, Rudiger took to social media to update his fans about the injury and said what doesn't kill you makes you stronger. 'What doesn't kill you makes you stronger. I am okay - thanks for all your messages,' Rudiger posted on Twitter.",
            date:"13-10-2022",
            catagery:"sports",
            author:"Adri"
        },
        {
            id:28,
            Title:"Shardul Thakur upset over delay in kit bag arrival in Mumbai airport, Harbhajan Singh responds",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/shardulthakur-sixteen_nine.jpg?VersionId=ary2qMKR3MVZEVJP.ecC_QM6GQyCQJwU&size=690:388",
            content:"Shardul Thakur was left upset at the Mumbai airport on Wednesday morning as the India all-rounder took to social media to report a delay in the arrival of his kit bags to the airlines. Shardul said it was not the first time his kit bags failed to arrive on time as he sought help from officials at the Mumbai airport to sort out the issue. Shardul Thakur arrived in Mumbai on Wednesday morning from New Delhi after the completion of the 3rd ODI between India and South Africa. Shardul was part of India's playing XI in the series finale against the Proteas at the Arun Jaitley Stadium on Tuesday. 'Can you send someone to help me at the luggage belt ? Not the first time that my kit bags havent arrived and no staff present at the location either !! (sic),' Shardul said, seeking help from the airlines. The all-rounder also mentioned the terminal at which he arrived on Wednesday morning.",
            date:"13-10-2022",
            catagery:"sports",
            author:"Archana"
        },
        {
            id:29,
            Title:"Former pacer Tanvir Ahmed slams Pakistan after defeat to New Zealand – Will never support these Parchi players",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/rtsb539t-sixteen_nine.jpg?VersionId=UsXNlInBYbIyXKMIwN_5mPvyFmEy9cTd&size=690:388",
            content:"Former Pakistan fast bowler Tanvir Ahmed lashed out at the national cricket team after the nine-wicket defeat to New Zealand on Tuesday, October 11 in the ongoing tri-nation series. After opting to bat first, the Men in Green got themselves up to 130 for the loss of seven wickets. Skipper Babar Azam, Iftikhar Ahmed and Asif Ali scored in the 20s, but couldnt make their starts count. Thereafter, the Black Caps chased the target down with 23 balls to spare. Tanvir, who played five Tests, two ODIs and one T20I, said that the current bunch of Pakistan cricketers don't work hard.",
            date:"14-10-2022",
            catagery:"sports",
            author:"Anusha"
        },
        {
            id:31,
            Title:"Ajith Kumar wraps Thunivu's Bangkok schedule: Report",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/ak61-sixteen_nine.jpeg?VersionId=3pDllDSbwP4YOuiA7HthgPg3x6euyKqa&size=690:388",
            content:"Ajith Kumar is working on Thunivu, one of the most talked about films of his career. The biggie has created a fair deal OF buzz among fans as it is set to be his first release after the well-received Valimai. Here is some big news for those looking forward to the flick. Ajith Kumar has reportedly wrapped up its Bangkok schedule. Thunivu is an action thriller, directed by H Vinoth. Ajith Kumar and the Thunivu team had some time ago jetted off to Bangkok for the film's latest schedule. It has now been wrapped up. Reports suggest that the team shot some intense sequences during this leg of the shoot. They are apparently quite happy with the final output.",
            date:"13-10-2022",
            catagery:"cinema",
            author:"Pallavi"
        },
        {
            id:32,
            Title:"Megastar Chiranjeevi's GodFather to release in Tamil on October 14",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/godfather_1_0-sixteen_nine.jpg?VersionId=gzdeU2QuFVH_nkmwmmc8KMXf.eV5nL0t&size=690:388",
            content:"Chiranjeevi's GodFather opened in theatres on October 5 much to the delight of fans. The film received positive reviews, which helped it stay strong at the box office. The biggie is now set to be released in Tamil. The Tamil dubbed version will be available in cinemas in Tamil Nadu from October 14. GodFather is a political thriller, directed by Mohan Raja. The Ram Charan-backed film is a remake of Mohanlal's Lucifer. Chiranjeevi, who suffered a setback when Acharya tanked at the box office earlier this year, is back with GodFather. The film opened in Telugu and Hindi on October 5 and received favourable reviews from fans. GodFather's Tamil-dubbed version is now set to arrive in theatres on October 14. This will be Megastar's second movie since Sye Raa Narasimha Reddy (2019) to get a wide release in Tamil.",
            date:"12-12-2022",
            catagery:"cinema",
            author:"Paniz"
        },
        {
            id:33,
            Title:"Simbu's Vendhu Thanindhathu Kaadu to stream on Amazon Prime Video from Oct 13",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/simbuvtk-sixteen_nine.jpg?VersionId=hnGr3WOO6ezaSxDFuCR93JyGbAjXqCUM&size=690:388",
            content:"Simbu recently gave proof of his star power when Vendhu Thanindhathu Kaadu opened to a good response at the box office and went on to emerge as a success. The film is now set to premiere on Amazon Prime Video. The film will come to OTT nearly a month after it was released in theatres on September 15. Vendhu Thanindhathu Kaadu is a crime drama, written and directed by Gautham Vasudev Menon. Vendhu Thanindhathu Kaadu, which emerged as a commercial success last month, will be available on Amazon Prime Video from October 13. Based on what we have seen in the past, the film will be out on the platform around midnight. It will,of course, be available with subtitles to help it reach a wider audience. Vendhu Thanindhathu Kaadu is a gangster origin story that revolves around the journey of a don named Muthuveeran . It stars Siddhi Idnani as the female lead and marks her Tamil debut. The cast includes Raadhika Sarathkumar, Neeraj Madhav, and Siddique, among others. It is produced by Ishari K Ganesh",
            date:"13-10-2022",
            catagery:"cinema",
            author:"Odell"
        },
        {
            id:34,
            Title:"Ponniyin Selvan box office collection Day 12: Mani Ratnam's film eyes Rs 450 crore worldwide",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/ponniyin_selvan_box_office_day_12-sixteen_nine.jpg?VersionId=3Jim2dJd0qUO0ZQAs3Vy7Mpe.bkQAMtE&size=690:388",
            content:"Director Mani Ratnam's Ponniyin Selvan: Part 1 is raking in the moolah ever since it hit the theatres on September 30. The film is now heading towards the Rs 450-crore mark at the box office. Trade experts reveal that the historical fiction film will surpass the mark by the end of this week. While the Tamil version is performing exceptionally well in the Indian and international circuit, Ponniyin Selvan isn't putting up great numbers in other languages. Ponniyin Selvan: Part 1 is wreaking havoc at the box office. In less than two weeks, the film has surpassed the Rs 400-crore mark worldwide and is still going strong. According to trade reports, Ponniyin Selvan is a clear winner at the box office. The filmmakers are said to have recovered their investments in the first part. For the uninitiated, both parts of Ponniyin Selvan were shot in a single stretch and sold to multiple platforms as a single film. The film is now eyeing Rs 450 crore worldwide.",
            date:"13-12-2022",
            catagery:"cinema",
            author:"Janani"
        },
        {
            id:35,
            Title:"Will Kantara give a tough fight to Doctor G and Code Name Tiranga at the box office?",
            img_url:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/kantara_box_office-sixteen_nine.jpg?VersionId=vGB7zb_7FYGMqiI60jXOZZsjbWv6yqCA&size=690:388",
            content:"Director Rishab Shetty's film Kantara has taken over the box office and how! The Kannada film was released in cinema halls on September 30, 2022. And it has done exceedingly well at the ticket windows. In just 2 weeks, the Kannada movie minted Rs 60 crore at the box office. And with its multiple dubbed versions releasing soon, the film is likely to have an edge over other movies. According to a Box Office India report, the film will lead the race despite the release of two Bollywood movies, Doctor G and Code Name Tiranga, this week. As per the BOI report, Kantara has earned Rs 1.30 crore in the Hindi circuit ever since it was released in the Kannada language. On the other hand, Yash's KGF 2 minted Rs 1.50 crore and Kantara is likely to cross that number soon. The majority of business in the Hindi circuit has come from Maharashtra. And it is the place where the dubbed Hindi version of the film might perform well.",
            date:"13-11-2022",
            catagery:"cinema",
            author:"Kamal"
        },
        {
            id:36,
            Title:"J-K: Rafale, Chinook Take Part in Air Show to Celebrate Diamond Jubilee at Udhampur Air Force Station",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-37-16655750003x2.jpg?impolicy=website&width=510&height=356",
            content:"The skies over Udhampur roared on Wednesday as fighter jets and combat helicopters of the IAF captivated the audience with their maneuvers during an air show to mark the diamond jubilee celebrations at the headquarters of Air Officer Commanding (AOC) Jammu, Kashmir and Ladakh. As part of the event, a fly-past began with skydiving by a team of Akashganga from AN32 followed by air maneuvers and different formations by Jaguar, MIG29, Su-30 and Rafale aircraft, officials said. Combat helicopters like Apache, Mi-17 Slithering and Chinook also exhibited adrenaline-pumping maneuvers in the first-of-its-kind air show at the Udhampur Air Force Station. Air Officer Commanding-in-Chief, Western Air Command, Air Marshal Sreekumar Prabhakaran lauded the role of headquarters AOC Jammu, Kashmir and Ladakh for dominating the Himalayas over the past 60 years.",
            date:"11-11-2022",
            catagery:"india",
            author:"Cairo"
        },
        {
            id:37,
            Title:"Two Stolen Idols Traced to US Museum, TN Idol Wing Stakes Claim",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-2022-10-12t151724.199-16655680873x2.jpg?impolicy=website&width=510&height=356",
            content:"The Tamil Nadu Idol Wing CID has traced two idols stolen from the State to a museum in the US and submitted documents seeking their return to the country, police said on Wednesday. The two antique idols of Yoganarasimha and Ganesha belonging to Sri Venugopala Swamy temple, Alathur, Thiruvarur district, were traced to the Nelson-Atkins Museums, Kansas City, Missouri, USA. They were stolen from the temple about 50 years ago and replaced with fake images, the Idol Wing claimed. “Based on the findings of our investigation, we have submitted papers proving our ownership of the idols to the government for onward transmission to the USA for repatriation of the same to Tamil Nadu, 'Idol Wing DGP K Jayanth Murali said. The Idol Wing hopes to retrieve the idols and restore them to the Venugopala Swamy temple under the UNESCO treaty soon. Murali and Idol Wing IGP R Dhinakaran thanked heritage enthusiast Vijay Kumar for initial inputs and appreciated ADSP Balamurugan, DSP Chandrasekaran and his team for taking expeditious steps in preparing the documents for retrieving the stolen idols. On February 28, 2017, S Nagarajan, Inspector, Hindu Religious and Charitable Endowments (HR & CE) department, Mannargudi, preferred a complaint with the Vikrapandiyam police in Thiruvarur district, claiming the metal idols of Vishnu, Sridevi and Bhudevi belonging to Sri Venugopala Swamy temple, Alathur, kept in the temple’s safe custody were stolen.'",
            date:"03-02-2022",
            catagery:"india",
            author:"Aadi"
        },
        {
            id:38,
            Title:"Muslim Man Donates Land for Hanuman Temple in UP's Shahjahanpur",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/05/hanuman-lord-16533932033x2.jpg?impolicy=website&width=510&height=356",
            content:"AMuslim man has donated a portion of his land to the district administration so that a temple which is blocking the expansion of a national highway could be shifted there, an official said on Wednesday. The project to widen the Delhi-Lucknow NH-24 was not able to make a headway in Kachiyani Kera village because of the temple. Realising this, Babu Ali gave one ‘bigha’ (0.65 hectare) land situated close to the project to the administration so that the temple could be shifted there, Additional District Magistrate (administration) Ramsevak Dwivedi told PTI. Tilhar Deputy District Magistrate Rashi Krishna said legal procedures to transfer the land to the administration had been completed. She lauded Ali for setting an example of Hindu-Muslim unity by upholding the 'Ganga Jamuni tehzeeb'",
            date:"14-09-2022",
            catagery:"india",
            author:"Akshay"
        },
        {
            id:39,
            Title:"IRCTC Announces 4 Jyotirlingas Darshan Yatra Package With EMI Options",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-5-44-1-1-2-1-1-1-1-1-1-1-16655673763x2.png?impolicy=website&width=510&height=356",
            content:"It is the season of festivals and this time of the year calls for the long-awaited yearly vacations with your family. Indian Railway Catering And Tourism Corporation (IRCTC) recently announced a special, budget-friendly package for pilgrims, which will take them on a tour of four Jyotirlingas. The ‘4 Jyotirlinga Darshan Yatra’ will begin on October 15. The best part about the tour is that it only costs Rs 15,150 and one can also avail EMIs starting from just Rs 536. This 7 nights and 8 days Yatra will start on October 15 and will end on October 22. The destinations covered on this tour include – Omkareshwar, Mahakaleshwar, Somnath, Nageshwar Jyotirlinga, Bet Dwarka and Shivrajpur Beach.",
            date:"16-08-2022",
            catagery:"india",
            author:"Aryan"
        },
        {
            id:40,
            Title:"CNN-News18 Indian of the Year 2022 Awards to be Announced Across Five Categories Today",
            img_url:"https://images.news18.com/ibnlive/uploads/2022/10/indian-of-the-year-16655733613x2.png?impolicy=website&width=510&height=356",
            content:"The CNN-News18 Indian of the Year awards for 2022 are set to be announced across five categories – Entertainment, Sports, Social Change, Start Ups and Climate Warrior – in a star-studded ceremony on Wednesday evening. The awards, first instituted in 2006, honour Indians whose contribution to the country has strengthened the foundation of our society and has helped build Brand India in the process. Having seen 11 editions since its inception, the CNN-News18 Indian of the Year has cemented its position as one of the biggest awards in the domain of news television and an institution of impeccable credibility.",
            date:"19-02-2022",
            catagery:"india",
            author:"Vimal"
        }
      ],

      bookmark:[],
      
      userdata:{
        request:"candidate_login",
        email:"",
        password:""
      },

      registerdata:{
        request:"create_candidate",
        name:"",
        email:"",
        password:"",
        aadhar:"",
        address:"",
        phone:"",
        city:"",
        area:"",
        pin:""
      },

      islog:false,

      register:false,

      search:""
}


export const Data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        bookmark:(state,action)=>{
            state.bookmark=[...state.bookmark,action.payload]
        },
        deletenews:(state,action)=>{
            state.bookmark=state.bookmark.filter((value,index)=>index!==action.payload);
            },
        setdata:(state,action)=>{
            state.userdata=action.payload
        },
        islog:(state,action)=>{
            state.islog=action.payload
        },
        logout:(state,action)=>{
            state.islog=false
        },
        register_logout:(state)=>{
            state.register=false
        },
        registering:(state,action)=>{
            state.registerdata=action.payload
        },
        search:(state,action)=>{
            state.search=action.payload
        },
        register_state:(state,action)=>{
            state.register=action.payload
        },
        bookmark_filter:(state)=>{
            const  detail = state.bookmark.filter((item, index, self) =>
            index === self.findIndex((value) => (
            value.id === item.id
            )))
            state.bookmark=detail
        },
    }
 
    })

    export const login=(req)=>async(dispatch)=>{
        if(req.email && req.password !== ""){
            const {data}= await axios.post('http://karka.academy/api/action.php',JSON.stringify(req))
            if(data.status==="success"){
                localStorage.setItem("login_status",true)
                dispatch(islog(true)) 
                dispatch(setdata(({...data.userdata,email:"",password:""})))    
        }
        }else{
           alert("Please Enter your account")
        }
    }
    export const register=(req)=>async(dispatch)=>{
       const {data}= await axios.post('http://karka.academy/api/action.php',JSON.stringify(req))
        if(data.status==="success"){
            dispatch(register_state(true))     
        }
    }

export const { bookmark,deletenews,setdata,islog,logout,registering,register_state,register_logout,search,bookmark_filter} = Data.actions

export default Data.reducer