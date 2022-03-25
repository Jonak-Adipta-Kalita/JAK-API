import type { NextApiRequest, NextApiResponse } from "next";
import { MughalEmpire } from "../../typings";

/**
 * @swagger
 * /api/mughalEmpire:
 *   get:
 *     description: Get the Data about The Mughal Empire
 *     summary: Get The Mughal Empire Data
 *     responses:
 *       200:
 *          description: The Mughal Empire Data
 */
export default (
    req: NextApiRequest,
    res: NextApiResponse<MughalEmpire | { error: string }>
) => {
    if (!(req.method === "GET")) {
        res.setHeader("Allow", ["GET"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }

    res.status(200).json({
        description:
            "The Mughal Empire, Mogul or Moghul Empire, was an early-modern empire in South Asia. For some two centuries, the empire stretched from the outer fringes of the Indus basin in the west, northern ,in the northwest, and  Kashmir in the north,  the highlands of present-day Assam and Bangladesh in the east, and the uplands of the Deccan plateau in south India.  The Mughal empire is conventionally said to have been founded in 1526 by Babur, a warrior chieftain from what today is Uzbekistan, who employed aid from the neighboring Safavid and Ottoman empires, to defeat the Sultan of Delhi, Ibrahim Lodhi, in the First Battle of Panipat, and to sweep down the plains of Upper India.",
        kings: [
            {
                id: 0,
                name: "Zahir-ud-din Muhammad Babur",
                givenName: "Babur",
                image: "/images/mughalEmpire/Babur/image.jpg",
                description:
                    "Babur, the founder of the Mughal Empire, and his warriors visiting a Hindu temple in the Indian subcontinent. The Mughal Empire was founded by Babur, a Central Asian ruler who was descended from the Turco-Mongol conqueror Timur (the founder of the Timurid Empire) on his father's side, and from Genghis Khan on his mother's side. Ousted from his ancestral domains in Central Asia, Babur turned to India to satisfy his ambitions. He established himself in Kabul and then pushed steadily southward into India from Afghanistan through the Khyber Pass. Babur's forces occupied much of northern India after his victory at Panipat in 1526. The preoccupation with wars and military campaigns, however, did not allow the new emperor to consolidate the gains he had made in India.",
                reigned: "1526-1530",
                wives: [
                    {
                        id: 0,
                        name: "Aisha Sultan Begum",
                        image: "images/mughalEmpire/Babur/Wives/aisha-sultan-begum.jpg",
                        born: "1499",
                        died: "1503",
                        description:
                            "Aisha Sultan Begum, was Queen consort of Ferghana Valley and Samarkand as the first wife of Emperor Babur, the founder of the Mughal Empire and the first Mughal emperor. Aisha was a first cousin of her husband and was a Timurid princess by birth. She was the daughter of Babur's paternal uncle, Sultan Ahmed Mirza, the King of Samarkand and Bukhara. Aisha Sultan Begum was born a Timurid princess and was the third daughter of Sultan Ahmed Mirza (the King of Samarkand and Bukhara) and his wife Qutaq Begum. She was probably named 'Aisha' after Prophet Muhammad's wife, ‘Ā’ishah bint Abī Bakr. Her father, Sultan Ahmed Mirza, was the eldest son and successor of Abu Sa'id Mirza, the Emperor of the Timurid Empire. Aisha's paternal uncles included Umar Sheikh Mirza, the ruler of Ferghana Valley, who later became her father-in-law as well. His children, Babur (her future husband), and his elder sister, Khanzada Begum, were thus, Aisha's first cousins.",
                    },
                    {
                        id: 1,
                        name: "Maham Begum",
                        image: "images/mughalEmpire/Babur/Wives/maham-begum.jpg",
                        born: "21 April 1526",
                        died: "26 December 1530",
                        description:
                            'Maham Begum, or Mahim Begum was Empress of Mughal Empire from 20 April 1526 to 26 December 1530 as the third wife and chief consort of Babur, the founder of the Mughal Empire and the first Mughal emperor. She was the first recipient of the imperial title Padshah Begum, a formal designation of being the first lady of the Mughal court. Maham Begum is also frequently mentioned in the Humayun-nama by her adoptive daughter Gulbadan Begum, who refers to her as "lady" and "my Lady" (aka and akam). She was the mother of Babur\'s eldest surviving son and eventual successor, Humayun. Babur married her in 1506 at Herat, when on the death of Sultan Husayn Mirza, he paid a condolence visit to Herat capital of Khosran. She was mentioned as "the one who was to Babur" what Aisha was to Muhammad. She played an active role in the political affairs of Babur as well as in the royal household. She had the qualities of extreme intelligence and good looks. She accompanied her husband to Badakhshan and Transoxiana and stood by him through thick and thin. She was the chief lady of the royal household. Upon the birth of the couple\'s first child, Humayun. Another four children were born to her and unfortunately all died in infancy. They were Barbul, Mihr Jahan, Aisan Daulat and Faruq. As Babur\'s chief consort, she had well defined rights over other inmates of his harem. She herself took her own guardianship of, two Dildar Begum\'s children, Hindal Mirza and Gulbadan Begum in 1519 and 1525 respectively and Babur\'s affirmation of it, though she already possessed five children. A devoted mother, Maham spent all her spare time to educate the prince in values dear to her. She would narrate to him stories connected with her ancestor Shaikh Ahmad Jam and other renowned holy personages of his time.',
                    },
                    {
                        id: 2,
                        name: "Masuma Sultan Begum",
                        image: null,
                        born: null,
                        died: "1509",
                        description:
                            "Masuma Sultan Begum, was the Queen consort of Ferghana Valley and Samarkand as the fourth wife of Emperor Babur, the founder of the Mughal Empire and the first Mughal emperor. Masuma was a first cousin of her husband and was a Timurid princess by birth. She was the fifth and youngest daughter of Babur's paternal uncle, Sultan Ahmed Mirza, the King of Samarkand and Bukhara. Following Babur's loss of Samarkand and Andijan, Habiba Sultan Begum, Masuma'a mother, brought Masuma to Herat. One day when Babur was visiting an elder relative on his expedition to Khosran, Masuma came there with her mother. Masuma fell in love with him. As Babur tells it, \"At once I felt a rising in her great inclination towards me.\" Babur asked her hand in marriage. After an exchange of private messages, Babur's elder relative and Payanda Sultan Begum (wife of Sultan Husayn Mirza Bayqara) settled with Habiba Sultan Begum that the latter should bring her daughter to Kabul for Babur. Babur then moved to Kabul where he married her in 1507.",
                    },
                ],
            },
            {
                id: 1,
                name: "Nasir-ud-Din Muḥammad",
                givenName: "Humayun",
                image: "/images/mughalEmpire/Humayun/image.jpg",
                description:
                    "Humayun was the second emperor of the Mughal Empire, who ruled over territory in what is now Afghanistan, Pakistan, Northern India, and Bangladesh from 1530-1540 and again from 1555-1556. Like his father, Babur, he lost his kingdom early but regained it with the aid of the Safavid dynasty of Persia, with additional territory. At the time of his death in 1556, the Mughal Empire spanned almost one million square kilometres. In December 1530, Humayun succeeded his father to the throne of Delhi as ruler of the Mughal territories in the Indian subcontinent. Humayun was an inexperienced ruler when he came to power, at the age of 22. His half-brother Kamran Mirza inherited Kabul and Kandahar, the northernmost parts of their father's empire. Kamran was to become a bitter rival of Humayun.",
                reigned: "1530-1556",
                wives: [
                    {
                        id: 0,
                        name: "Mah Chuchak Begum",
                        image: "images/mughalEmpire/Humayun/Wives/mah-chuchak-begum.jpg",
                        born: null,
                        died: "28 March 1564",
                        description:
                            'meaning "Moon flower", was a wife of the second Mughal emperor Humayun. She was an ambitious lady who threw out the Naib Subadar and ruled Kabul on her own, once leading her army in person and defeating Munim Khan at Jalalabad. She was one of the Mughal ladies who gave a lot of trouble to Akbar during the initial portion of his reign. Her son was Mirza Muhammad Hakim. In 1554, Humayun nominated this boy, then three years old, as the governor of Kabul under the charge of Munim Khan. In 1566, Akbar confirmed the appointment. Munim Khan came to the court in 1561 and his son Ghani took his place. Mah Chuchak was politically ambitious. She was advised by Fazli Beg and his son Abdulfath, who hated Ghani Khan, to close the doors of Kabul, when Ghani Khan was once temporarily absent at Faliz. Ghani Khan, not finding adherents to oppose her, went to India. Mah Chuchak Begum then appointed Fazli Beg as Vakil and Abdulfath as Naib (regent), but being dissatisfied with them, she killed them both, at the advice of Shah Wali, one of her nobles. When Akbar heard of this, he sent Munim Khan with an army against Mah Chuchak. Mah Chuchak met him and defeated Munim khan at Jalalabad. Mah Chuchak ruled Kabul with the help of three advisers, two of whom were killed earlier. Now, even the third one was killed. In their place came Haidar Qasim Kohbur, whom Mah Chuchak Begum had made Vakil. Munim fled to the Ghak\'hars, and ashamed and hesitating he joined Akbar, who appointed him Commander at the fort of Agra. Around this time a certain Shah Abul Maali, who belonged to the family of the great Sayyids of Termez, who had escaped from the prison at Lahore, arrived at Kabul and approached Mah Chuchak Begum for refuge. The Begum welcomed him, was generous to him and gave her daughter Bakht-un-Nissa Begum in marriage with him.',
                    },
                    {
                        id: 1,
                        name: "Bega Begum",
                        image: null,
                        born: "1511",
                        died: "17 January 1582",
                        description:
                            "Bega Bugum, was Empress consort of the Mughal Empire from 26 December 1530 to 17 May 1540 and 22 February 1555 to 27 January 1556 as the first wife and chief consort of the second Mughal emperor Humayun Bega was also known as Haji Begum after she performed the Hajj pilgrimage. Bega Begum began the tradition of commissioning monuments in the Mughal Empire, when she had her husband's mausoleum commissioned in the late 16th century, Humayun's Tomb at Delhi. This first colossal monumental mausoleum in Islamic India can be considered an early masterpiece that was to decisively influence the design of the later Taj Mahal, the high point of Mughal architecture. Bega Begum was a Persian from Khurasan and was the daughter of Humayun's maternal uncle (taghai), Yadgar Beg, who was the brother of Sultan Ali Mirza, father of Kamran Mirza's wife Gulrukh Begum. She was a wise, well educated woman and had profound knowledge of medicine and treatment also. Bega married her first cousin, Prince Nasir ud-din (later known as 'Humayun' upon his accession) in 1527. The marriage took place while Humayun was in Badakshan during his second term as Viceroy of the province (1527-1529). In November of 1528, she gave birth to Humayun's first child and son, Shahzada Al-aman Mirza. The imperial couple were tremendously congratulated by the Emperor Babur on the birth of an heir, although the connotation of his name, 'Al-aman', he thought ominous. The prince died in his infancy.",
                    },
                    {
                        id: 2,
                        name: "Hamida Banu Begum",
                        image: "images/mughalEmpire/Humayun/Wives/hamida-banu-begum.jpg",
                        born: "1527",
                        died: "29 August 1604",
                        description:
                            "Hamida Banu Begum, was a wife of the second Mughal emperor Humayun and the mother of his successor, the third Mughal emperor Akbar. She is also known by the title Maryam Makani, which was given to her by her son, Akbar. She met Humayun, as a fourteen-year-old girl and frequenting Mirza Hindal's household, at a banquet given by his mother, Dildar Begum (Babur's wife and Humayun's step-mother) in Alwar. Humayun was in exile after his exodus from Delhi, due to the armies of Sher Shah Suri, who had ambitions of restoring Afghan rule in Delhi. When negotiations for Humayun's marriage with Hamida Banu Begum were going on, both Hamida and Hindal bitterly opposed the marriage proposal, possibly because they were involved with each other. It seems probable that Hamida was in love with Hindal, though there is only circumstantial evidence for it. In her book the Humayun-nama, Hindal's sister and Hamida's close friend, Gulbadan Begum, pointed out that Hamida was frequently seen in her brother's palace during those days, and even in the palace of their mother, Dildar Begum. Initially, Hamida refused to meet the emperor; eventually after forty days of pursuit and at the insistence of Dildar Begum, she agreed to marry him. She refers to her initial reluctance in the Humayunama, \"I shall marry someone; but he shall be a man whose collar my hand can touch, and not one whose skirt it does not reach\". The marriage took place on a day chosen by the Emperor, an avid astrologer himself, employing his astrolabe, at mid-day on a Monday in September, 1541 at Patr (known as Paat, Dadu District of Sindh). Thus, she became his junior wife, after Bega Begum (later known as Haji Begum, after Hajj), who was his first wife and chief consort. The marriage became \"politically beneficial\" to Humayun, as he got help from the rival Shia groups during times of war.",
                    },
                ],
            },
            {
                id: 2,
                name: "Abu'l-Fath Jalal-ud-din Muhammad",
                givenName: "Akbar",
                image: "/images/mughalEmpire/Akbar/image.jpg",
                description:
                    "Akbar, was born Jalal-ud-din Muhammad in the Rajput Umarkot Fort, to Humayun and his wife Hamida Banu Begum, a Persian princess. Akbar succeeded to the throne under a regent, Bairam Khan, who helped consolidate the Mughal Empire in India. Through warfare and diplomacy, Akbar was able to extend the empire in all directions and controlled almost the entire Indian subcontinent north of the Godavari River.[citation needed] He created a new ruling elite loyal to him, implemented a modern administration, and encouraged cultural developments. He increased trade with European trading companies. India developed a strong and stable economy, leading to commercial expansion and economic development.[citation needed] Akbar allowed freedom of religion at his court, and attempted to resolve socio-political and cultural differences in his empire by establishing a new religion, Din-i-Ilahi, with strong characteristics of a ruler cult. He left his son an internally stable state, which was in the midst of its golden age, but before long signs of political weakness would emerge.",
                reigned: "1556-1560",
                wives: [
                    {
                        id: 0,
                        name: "Marium Uz Zamani",
                        image: "images/mughalEmpire/Akbar/Wives/marium-uz-zamani.jpg",
                        born: "1 October 1542",
                        died: "19 May 1623",
                        description:
                            "was a wife of the third Mughal emperor, Akbar. In subsequent centuries, she has been referred to with several other names, including Hira Kunwari, Harkha Bai and Jodha Bai. Born a Hindu Rajput princess in 1542, Mariam-uz-Zamani was offered in marriage to Akbar by her father, Raja Bharmal of Amber. The wedding, held in Sambhar, was a political one and served as a sign of submission of her father to the Mughals. Her marriage to Akbar led to a gradual shift in the latter's religious and social policies. She is widely regarded in modern Indian historiography as exemplifying both Akbar's and the Mughals' tolerance of religious differences and their inclusive policies within an expanding multi-ethnic and multi-denominational empire. She was the mother of Akbar's eldest-surviving son and eventual successor, Jahangir. Mariam-uz-Zamani's marriage was the result of a conflict between her father and Akbar's brother-in-law, Sharif-ud-din Mirza, the Hakim of Mewat. Bharmal, facing harassment at Sharif-ud-din's hands, approached Akbar to request his intervention. The emperor agreed to mediate on the condition of Bharmal's personal submission, as well as the suggestion that Mariam-uz-Zamani be given to Akbar in marriage. The marriage, thus, a political one, took place on 6 February 1562, while Akbar was on his way back to Agra from Ajmer (after offering prayers to the tomb of Moinuddin Chishti) at the imperial military camp in Sambhar, Rajasthan, instead of the bride's natal home in Ajmer (which was only 80 miles away). This was a sign that the marriage was not of equals and indicated Bharmal's family's inferior social status. The marriage with the Amber princess provided the service of her family throughout the reign, and offered a proof manifest to all the world that Akbar had decided to be the Badshah or Shahenshah of his whole people i.e. Hindus as well as Muslims. Akbar took many Rajput princesses in marriage as the rajas had much to gain from the link to imperial family. He made such marriages respectable for the Rajputs. Akbar did not convert any of his Hindu wives to Islam and permitted them to perform their rituals in the palace, and even participated occasionally. However, the Rajput wives (including Mariam-uz-Zamani) did not play any political role in the Mughal court. In 1569, Akbar heard the news that his first Hindu wife was expecting a child, and that he might hope for the first of the three sons that had previously been promised to him by Sheikh Salim Chisti, a reputed holy man who lived at Sikri. The expectant empress was sent to Sheikh's humble dwelling Sikri during the latter period of her pregnancy. On 31 August 1569, the boy was born and received the name Salim, in acknowledgement of his father's faith in the efficacy of the holy man's prayer. Though she remained a Hindu, the new mother was subsequently honoured with the title Mariam-uz-Zamani (\"Mary of the Age\").",
                    },
                    {
                        id: 1,
                        name: "Ruqaiya Sultan Begum",
                        image: "images/mughalEmpire/Akbar/Wives/ruqaiya-sultan-begum.jpg",
                        born: "1542",
                        died: "19 January 1626",
                        description:
                            "Ruqaiya Sultan Begum, was empress consort of the Mughal Empire from 1557 to 1605, being the first wife and chief consort of the third Mughal emperor, Akbar. She was also the longest serving Mughal empress, having a tenure of almost fifty years. Ruqaiya was a first cousin of her husband, and was a Mughal princess by birth. Her father, Hindal Mirza, was the youngest brother of Akbar's father, Humayun. She was betrothed to Akbar at the age of nine and married him at 14, but remained childless throughout her marriage. In later life, Ruqaiya raised (virtually adopted) Akbar's favourite grandson, Khurram (the future emperor Shah Jahan). As Akbar's chief consort, Ruqaiya wielded considerable influence over him and played a crucial role in negotiating a settlement between her husband and her stepson, Jahangir, when the father-son's relationship had turned sour in the early 1600s, eventually helping to pave the way for Jahangir's accession to the Mughal throne. She died just a year before her foster-son, Shah Jahan, acceded to the throne after a fratricidal struggle. On 20 November 1551, Hindal Mirza died fighting valorously for Humayun in a battle against their half-brother, Kamran Mirza's forces. Humayun was overwhelmed with grief upon the death of his youngest brother, who had expiated for his former disobedience by his blood, but his amirs consoled him by saying that his brother was blessed in having thus fallen a martyr in the service of the Emperor. Out of affection to the memory of his brother, Humayun betrothed Hindal's nine-year-old daughter, Ruqaiya, to his son Akbar. Their betrothal took place in Kabul, Afghanistan, shortly after Akbar's first appointment as a viceroy in the province of Ghazni. On their engagement, Humayun conferred on the imperial couple, all the wealth, army and adherents of Hindal, and Ghazni, which was one of Hindal's jagir, was given to Akbar, who was appointed as its viceroy and was also given the command of his uncle's army. During the period of political uncertainty following Humayun's death in 1556, Ruqaiya and the other female members of the imperial family were staying in Kabul. In 1557, Ruqaiya came to India and joined Akbar in Punjab, shortly after Sikandar Shah was defeated and had submitted to the Mughals. She was accompanied by her mother-in-law Hamida Banu Begum, her aunt Gulbadan Begum, and many other female members of the imperial family. Ruqaiya's marriage with Akbar was solemnized near Jalandhar, Punjab, when both of them were 14 years-old. About the same time, her 18-year-old first-cousin, Salima Sultan Begum, married Akbar's considerably older regent, Bairam Khan. After resting for about four months in Punjab, the imperial family set out for Delhi. The Mughals were at last ready to settle down in India.",
                    },
                    {
                        id: 2,
                        name: "Salima Sultan Begum",
                        image: null,
                        born: "23 February 1539",
                        died: "2 January 1613",
                        description:
                            "Salima Sultan Begum, was the fourth wife of the Mughal Emperor Akbar, and the granddaughter of Babur. Salima was the daughter of Akbar's paternal aunt, Gulrukh Begum, and her husband, the Viceroy of Kannauj, Nuruddin Muhammad Mirza. She was initially betrothed to Akbar's regent, Bairam Khan, by her maternal uncle, Humayun. The bride was probably a reward for the surpassing services done by Bairam for Humayun. The couple, who had a considerable age difference of approximately forty years, were married in 1557 after Akbar had succeeded Humayun as the third Mughal emperor. However, this brief union, which did not produce any children, lasted for only three years since Bairam Khan was assassinated by a band of Afghans in 1561. After his death, Salima was subsequently married to her first-cousin, Akbar. Salima was a senior-ranking wife of Akbar and had much influence over her husband and his son, Jahangir. She wielded major political influence in the Mughal court during her husband's reign as well as during his successor's (Jahangir) reign. Her name, however, appears in the histories as a reader, poet, who wrote under the pseudonym of Makhfi (\"Hidden One\") and as pleading with Akbar for Jahangir's forgiveness. She stands out in the early Mughal history and was known as the \"Khadija of the era\" (Khadija-uz-Zamani) for her wisdom.",
                    },
                ],
            },
            {
                id: 3,
                name: "Nur-ud-din Muhammad Salim",
                givenName: "Jahangir",
                image: "/images/mughalEmpire/Jahangir/image.jpg",
                description:
                    "Prince Salim, later Jahangir, was born on 31 August 1569, in Fatehpur Sikri, to Akbar and one of his wives, Mariam-uz-Zamani, daughter of Raja Bharmal of Amber (Aamer). Akbar's previous children had died in infancy and he had sought the help of holy men to produce a son. Salim was named for one such man, Shaikh Salim, though Akbar always called him Shekhu Baba. Prince Salim succeeded to the throne on Thursday, 3 November 1605, eight days after his father's death. Salim ascended to the throne with the title of Nur-ud-din Muhammad Jahangir Badshah Ghazi, and thus began his 22-year reign at the age of 36. Jahangir, soon after, had to fend off his own son, Prince Khusrau Mirza, when the latter attempted to claim the throne based on Akbar's will to become his next heir. Khusrau Mirza was defeated in 1606 and confined in the fort of Agra. As punishment, Khusrau Mirza was handed over to his younger brother and was partially blinded and killed. Jahangir considered his third son, Prince Khurram, his favourite. In 1622, Khurram murdered his blind older brother, Khusrau Mirza, in order to smooth his own path to the throne. In 1622, Jahangir sent his son, Prince Khurram, to fight against the combined forces of Ahmednagar, Bijapur and Golconda. After his victory, Khurram turned against his father and made a bid for power. As with the insurrection of his eldest son, Khusrau Mirza, Jahangir was able to defeat the challenge from within his family and retain power.",
                reigned: "1605-1627",
                wives: [],
            },
            {
                id: 4,
                name: "Shahab-ud-din Muhammad Khurram",
                givenName: "Shah Jahan",
                image: "/images/mughalEmpire/Shah-Jahan/image.jpg",
                description:
                    "Shahab-ud-din Muhammad Khurram was born on 5 January 1592 in Lahore, in modern-day Pakistan, and was the third son of Prince Salim. His mother was a Rajput princess from Marwar called Princess Jagat Gosaini (Bilqis Makani). The name \"Khurram\" (joyous) was chosen for the young prince by his grandfather, Emperor Akbar, with whom the young prince shared a close relationship. Just prior to Khurram's birth, a soothsayer had reportedly predicted to the childless Empress Ruqaiya Sultan Begum, Akbar's first wife and chief consort, that the still unborn child was destined for imperial greatness. So, when Khurram was born in 1592 and was only six days old, Akbar ordered that the prince be taken away from his mother and handed over to Ruqaiya so that he could grow up under her care, so that Akbar could fulfill his wife's wish to raise a Mughal emperor. Ruqaiya assumed the primary responsibility for Khurram's upbringing and he grew up under her care. The two shared a close relationship. Jahangir noted in his memoirs that Ruqaiya had loved his son, Khurram, \"a thousand times more than if he had been her own.\" Khurram remained with her until he turned almost 14. After Akbar's death in 1605, the young prince was allowed to return to his father's household, and thus, be closer to his biological mother.",
                reigned: "1628-1658",
                wives: [],
            },
            {
                id: 5,
                name: "Muḥī al-Dīn Muḥammad",
                givenName: "Aurangzeb",
                image: "/images/mughalEmpire/Aurangzeb/image.jpg",
                description:
                    "Aurangzeb was born on 3 November 1618, in Dahod, Gujarat. He was the third son and sixth child of Shah Jahan and Mumtaz Mahal. In June 1626, after an unsuccessful rebellion by his father, Aurangzeb and his brother Dara Shukoh were kept as hostages under their grandparents' (Nur Jahan and Jahangir) Lahore court. On 26 February 1628, Shah Jahan was officially declared the Mughal Emperor, and Aurangzeb returned to live with his parents at Agra Fort, where Aurangzeb received his formal education in Arabic and Persian. His daily allowance was fixed at Rs. 500, which he spent on religious education and the study of history. On 28 May 1633, Aurangzeb escaped death when a powerful war elephant stampeded through the Mughal Imperial encampment. He rode against the elephant and struck its trunk with a lance, and successfully defended himself from being crushed. Aurangzeb's valour was appreciated by his father who conferred him the title of Bahadur (Brave) and had him weighed in gold and presented gifts worth Rs. 200,000. This event was celebrated in Persian and Urdu verses, and Aurangzeb said: \"If the (elephant) fight had ended fatally for me, it would not have been a matter of shame. Death drops the curtain even on Emperors; it is no dishonor. The shame lay in what my brothers did!\"",
                reigned: "1658-1707",
                wives: [],
            },
        ],
    });
};
