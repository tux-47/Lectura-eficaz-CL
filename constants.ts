import { Case, Translations } from './types';

export const TOTAL_TIME = 480; // 8 minutes, adaptable per case logic if needed
export const TOTAL_LIVES = 3;

export const TRANSLATIONS: Record<'en' | 'es', Translations> = {
  en: {
      title: "Detective Archives",
      start_button: "Start Investigation",
      lives: "Lives",
      time: "Time",
      level: "Level",
      reading_strategy: "Reading Strategy",
      toggle_language: "Toggle Language 🇬🇧/🇪🇸",
      correct: "Correct!",
      incorrect: "Incorrect!",
      next_level: "Next Clue",
      case_closed_win: "Case Closed!",
      case_closed_lose: "END OF THE LINE...",
      win_message: "Congratulations, Detective! You've solved the case.",
      lose_message_time: "Time ran out. The trail went cold.",
      lose_message_lives: "Your badge feels heavy, a useless piece of tin. You took too many wrong turns.",
      play_again: "Next Case",
      correct_answer_was: "The correct information was:",
      all_cases_solved: "All Cases Solved",
      final_message: "Excellent work, Detective. You've closed all available cases. The city is safe, for now.",
      return_to_start: "Play Again",
      finish_investigation: "Finish Investigation",
      manual_title: "Operations Manual",
      accept_mission: "I Accept The Mission"
  },
  es: {
      title: "Archivos de Detective",
      start_button: "Iniciar Investigación",
      lives: "Vidas",
      time: "Tiempo",
      level: "Nivel",
      reading_strategy: "Estrategia de Lectura",
      toggle_language: "Cambiar Idioma 🇬🇧/🇪🇸",
      correct: "¡Correcto!",
      incorrect: "¡Incorrecto!",
      next_level: "Siguiente Pista",
      case_closed_win: "¡Caso Cerrado!",
      case_closed_lose: "FIN DEL CAMINO...",
      win_message: "¡Felicidades, Detective! Has resuelto el caso.",
      lose_message_time: "Se acabó el tiempo. La pista se enfrió.",
      lose_message_lives: "Tu placa se siente pesada, un inútil trozo de metal. Tomaste demasiados desvíos.",
      play_again: "Siguiente Caso",
      correct_answer_was: "La información correcta era:",
      all_cases_solved: "Todos los Casos Resueltos",
      final_message: "Excelente trabajo, Detective. Ha cerrado todos los casos disponibles. La ciudad está a salvo, por ahora.",
      return_to_start: "Jugar de Nuevo",
      finish_investigation: "Finalizar Investigación",
      manual_title: "Manual de Operaciones",
      accept_mission: "Acepto la Misión"
  }
};

export const CASES: Case[] = [
  {
    title: { en: "The Midnight Heist", es: "El Robo de Medianoche" },
    imageUrl: "https://picsum.photos/800/600?grayscale&blur=2",
    levels: [
      {
        id: 1,
        strategy: { en: "Predicting", es: "Predicción" },
        evidence: {
          type: 'image_title',
          title: { en: "Case File: 001", es: "Expediente: 001" },
          content: 'Chaos at the National Bank',
          imageUrl: "https://picsum.photos/800/400?grayscale"
        },
        instruction: { en: "Look at the evidence and the title.", es: "Mira la evidencia y el título." },
        question: { en: "What do you think this report will be about?", es: "¿De qué crees que tratará este informe?" },
        options: [
          { en: "A robbery", es: "Un robo" },
          { en: "A party", es: "Una fiesta" },
          { en: "An election", es: "Una elección" }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 2,
        strategy: { en: "Skimming", es: "Lectura Rápida (Skimming)" },
        evidence: {
          type: 'text',
          title: { en: "Newspaper Clipping", es: "Recorte de Periódico" },
          content: [
            "The city awoke this morning to the shocking news of a daring heist at the historic National Bank, which occurred under the cover of darkness late last night. The brazen act has left officials and citizens in disbelief, as the institution was considered a fortress. Authorities from the metropolitan police department are now scrambling for any credible leads after the main vault, containing an undisclosed amount of assets, was discovered completely emptied by the morning staff.",
            "Initial reports from the crime scene suggest a highly sophisticated operation, executed with chilling precision. The bank's security systems, which were upgraded last year and considered state-of-the-art, were bypassed without triggering a single audible or silent alarm. Forensics teams are meticulously examining the vault for any trace evidence, but the perpetrators appear to have been exceptionally careful, leaving little behind for investigators to work with.",
            "A statement from Police Chief Miller confirmed that there are no suspects at this time, though he assured the public that every resource is being dedicated to the investigation. He mentioned the thief, or thieves, displayed an 'intimate knowledge' of the bank's layout and security protocols. This suggests the possibility of an inside job, a theory that is causing considerable unease among the bank's board of directors and high-profile clients.",
            "The economic impact of the heist is still being calculated, but experts fear it could be substantial. The National Bank holds assets for many of the city's most powerful corporations and individuals. The police have not released a statement on the value of the stolen assets, but sources inside the investigation hint that the figure is staggering. They are appealing to the public for any information regarding suspicious activity around the bank in the days leading up to the event."
          ]
        },
        instruction: { en: "Quickly read the first sentence of each paragraph.", es: "Lee rápidamente la primera oración de cada párrafo." },
        question: { en: "What is the general idea of the article?", es: "¿Cuál es la idea general del artículo?" },
        options: [
          { en: "A sophisticated robbery has occurred at the National Bank, and the police are investigating.", es: "Ocurrió un robo sofisticado en el Banco Nacional y la policía está investigando." },
          { en: "The bank is celebrating its anniversary with a large public event.", es: "El banco está celebrando su aniversario con un gran evento público." },
          { en: "Police Chief Miller is retiring after a long and successful career.", es: "El jefe de policía Miller se retira después de una larga y exitosa carrera." }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 3,
        strategy: { en: "Scanning", es: "Búsqueda de Datos (Scanning)" },
        evidence: {
          type: 'data_sheet',
          title: { en: "Suspect Profiles", es: "Perfiles de Sospechosos" },
          content: [
            { "ID": "Suspect #1", "Name": "Silas 'The Shadow' Blackwood", "Age": "42", "Height": "6'1\"", "Occupation": "Antiques Dealer", "Alibi": "At the opera" },
            { "ID": "Suspect #2", "Name": "Isabella 'The Ghost' Monet", "Age": "35", "Height": "5'7\"", "Occupation": "Art Forger", "Alibi": "Charity gala" },
            { "ID": "Suspect #3", "Name": "Leo 'The Lock' Vance", "Age": "51", "Height": "5'11\"", "Occupation": "Retired Safecracker", "Alibi": "Home with family" },
            { "ID": "Suspect #4", "Name": "Marcus 'The Mole' Thorne", "Age": "48", "Height": "5'9\"", "Occupation": "Bank Security Consultant", "Alibi": "Out of town" },
            { "ID": "Suspect #5", "Name": "Eve 'The Viper' Rostova", "Age": "39", "Height": "5'5\"", "Occupation": "Corporate Espionage", "Alibi": "Unknown" }
          ]
        },
        instruction: { en: "Quickly find the specific information requested.", es: "Encuentra rápidamente la información específica solicitada." },
        question: { en: "Find the height of Suspect #2.", es: "Encuentra la altura del Sospechoso #2." },
        options: [
          { en: "6'1\"", es: "6'1\"" },
          { en: "5'7\"", es: "5'7\"" },
          { en: "5'9\"", es: "5'9\"" }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 4,
        strategy: { en: "Contextual Guessing", es: "Adivinanza Contextual" },
        evidence: {
          type: 'sms',
          title: { en: "Intercepted Transmission", es: "Transmisión Interceptada" },
          content: "Transcript from informant call: 'Yeah, I saw him... or, I think I saw him. He moved like a shadow, in and out of the alley before you could blink. We had officers swarming the block, but the thief was just too elusive. It's like he vanished into thin air; nobody could get a positive ID or even track his direction.'"
        },
        instruction: { en: "Use the surrounding words to understand the highlighted word.", es: "Usa las palabras de alrededor para entender la palabra resaltada." },
        question: { en: "Based on the context, what does 'elusive' mean?", es: "Basado en el contexto, ¿qué significa 'elusive'?" },
        options: [
          { en: "Hard to find or catch", es: "Difícil de encontrar o atrapar" },
          { en: "Very fast", es: "Muy rápido" },
          { en: "Visibly angry", es: "Visiblemente enojado" }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 5,
        strategy: { en: "Intensive Reading", es: "Lectura Intensiva" },
        evidence: {
          type: 'legal_text',
          title: { en: "Vault Access Log - Excerpt", es: "Registro de Acceso a Bóveda - Extracto" },
          content: "As per section 4B of the security agreement, the Senior Vault Manager, currently Mr. Abernathy, is the sole party responsible for the vault's contents during closing hours. A review of the access log shows his digital signature was the last one recorded. He confirmed during his initial statement that the closing protocol, which he himself designed, was followed to the letter."
        },
        instruction: { en: "Analyze the sentence structure and grammar carefully.", es: "Analiza la estructura de la oración y la gramática cuidadosamente." },
        question: { en: "In the final sentence, who does the pronoun 'He' refer to?", es: "En la oración final, ¿a quién se refiere el pronombre 'He' (Él)?" },
        options: [
          { en: "A police officer", es: "Un oficial de policía" },
          { en: "The security agreement", es: "El acuerdo de seguridad" },
          { en: "Mr. Abernathy", es: "Sr. Abernathy" }
        ],
        correctAnswerIndex: 2
      },
      {
        id: 6,
        strategy: { en: "Inferring", es: "Inferencia" },
        evidence: {
          type: 'note',
          title: { en: "Note from the Thief", es: "Nota del Ladrón" },
          content: "The marble halls of this institution were built on the broken backs of the working man. For too long, you have hoarded wealth while the city starves. Consider this not a theft, but a redistribution. I have simply taken back what truly belongs to the people."
        },
        instruction: { en: "Read between the lines. What is the hidden meaning?", es: "Lee entre líneas. ¿Cuál es el significado oculto?" },
        question: { en: "What is the thief's likely motivation?", es: "¿Cuál es la motivación probable del ladrón?" },
        options: [
          { en: "A political or social grievance against the bank", es: "Una queja política o social contra el banco" },
          { en: "Simple greed for personal wealth", es: "Simple codicia por riqueza personal" },
          { en: "A personal vendetta against an employee", es: "Una venganza personal contra un empleado" }
        ],
        correctAnswerIndex: 0
      },
      {
        id: 7,
        strategy: { en: "Extensive Reading", es: "Lectura Extensiva" },
        evidence: {
          type: 'narrative',
          title: { en: "Bank Founder's Diary", es: "Diario del Fundador del Banco" },
          content: "The National Bank wasn't always a symbol of cold, hard wealth. It was founded a century ago by a group of immigrants, laborers and shopkeepers who pooled their meager savings to build a better future for their families. They envisioned a place of trust, a community cornerstone where anyone, regardless of their station, could find support. The first deposits weren't in gold bars, but in worn leather pouches filled with hope and sweat.\n\nI remember laying the first stone myself. The air was filled with languages from a dozen different countries, all united in a common purpose. We weren't building a vault; we were building a ladder for our children. For decades, it served that purpose. We gave loans for new businesses, mortgages for first homes, and scholarships for bright minds. The bank was the heart of the neighborhood, its pulse beating in time with the people it served.\n\nBut as the years passed, it grew. The small brick building was replaced by a marble behemoth, its columns reaching for the sky, perhaps forgetting the humble cobblestones it was built upon. The spirit of community, some say, was replaced by cold, hard profit. The friendly tellers who knew your name were replaced by impersonal forms and complex financial instruments. I sometimes walk past it at night, and I wonder if any of that original hope remains trapped inside that impenetrable vault."
        },
        instruction: { en: "Read for pleasure to understand the overall flow and feeling.", es: "Lee por placer para entender el flujo y sentimiento general." },
        question: { en: "What is the general feeling of this story?", es: "¿Cuál es el sentimiento general de esta historia?" },
        options: [
          { en: "Joyful and triumphant", es: "Alegre y triunfante" },
          { en: "Nostalgic and slightly sad", es: "Nostálgico y un poco triste" },
          { en: "Angry and aggressive", es: "Enojado y agresivo" }
        ],
        correctAnswerIndex: 1
      },
      {
        id: 8,
        strategy: { en: "Summarizing", es: "Resumen" },
        evidence: {
          type: 'summary',
          title: { en: "Final Report", es: "Reporte Final" },
          content: "All evidence has been collected. Review the case and file your conclusive report, Detective."
        },
        instruction: { en: "Review all the facts and choose the best synthesis of the case.", es: "Revisa todos los hechos y elige la mejor síntesis del caso." },
        question: { en: "Choose the best summary to close the case.", es: "Elige el mejor resumen para cerrar el caso." },
        options: [
          {
            en: "A sophisticated and elusive thief, likely motivated by a belief that the bank has wronged the public, bypassed advanced security at the National Bank. The investigation is focused on several high-profile suspects, but the perpetrator's skill and unclear identity makes the case difficult.",
            es: "Un ladrón sofisticado y escurridizo, probablemente motivado por la creencia de que el banco ha perjudicado al público, eludió la seguridad avanzada del Banco Nacional. La investigación se centra en varios sospechosos de alto perfil, pero la habilidad y la identidad poco clara del autor dificultan el caso."
          },
          {
            en: "Suspect #2, Isabella Monet, who is 5'7\", robbed the bank because she was angry at Mr. Abernathy. She left a note to confuse the police about her real motivation, which was to fund her art forgery operation.",
            es: "La sospechosa #2, Isabella Monet, que mide 5'7\", robó el banco porque estaba enojada con el Sr. Abernathy. Dejó una nota para confundir a la policía sobre su verdadera motivación, que era financiar su operación de falsificación de arte."
          },
          {
            en: "A simple robbery occurred at the National Bank, likely by a disgruntled former security guard. The note about 'the people' was a distraction, and the police should focus on employees with knowledge of the old security system.",
            es: "Ocurrió un robo simple en el Banco Nacional, probablemente por un ex guardia de seguridad descontento. La nota sobre 'la gente' fue una distracción, y la policía debería centrarse en los empleados con conocimiento del antiguo sistema de seguridad."
          }
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    title: { en: "The Crimson Canary Caper", es: "El Caso del Canario Carmesí" },
    imageUrl: "https://picsum.photos/800/600?grayscale",
    levels: [
      {
        id: 1,
        strategy: { en: "Predicting", es: "Predicción" },
        evidence: { 
          type: 'image_title', 
          title: { en: "Case File: 002", es: "Expediente: 002" }, 
          content: 'Silence at the Blue Note Club',
          imageUrl: "https://picsum.photos/800/400?grayscale&blur=2"
        },
        instruction: { en: "Look at the image of the empty stage.", es: "Mira la imagen del escenario vacío." },
        question: { en: "What do you think happened here?", es: "¿Qué crees que pasó aquí?" },
        options: [{ en: "A star performer has vanished", es: "Un artista estrella ha desaparecido" }, { en: "The club is preparing for a show", es: "El club se prepara para un espectáculo" }, { en: "The club has permanently closed", es: "El club ha cerrado permanentemente" }],
        correctAnswerIndex: 0
      },
      {
        id: 2,
        strategy: { en: "Skimming", es: "Lectura Rápida (Skimming)" },
        evidence: {
          type: 'text',
          title: { en: "Tabloid Front Page", es: "Portada de Tabloide" },
          content: [
            "The city's vibrant nightlife was struck a silent blow last night as star vocalist Lila 'The Canary' Dubois vanished from the renowned Blue Note Club mid-performance. Her disappearance coincided with the theft of her iconic ruby necklace, 'The Crimson Tear,' a piece rumored to be worth millions. The club was immediately placed on lockdown, but a thorough search of the premises revealed no trace of the beloved singer or her priceless jewel.",
            "Witnesses state that Dubois was in top form during her first set, enthralling the packed house with her signature soulful voice. She retired to her dressing room during a brief intermission, but never returned to the stage. Her manager, the notoriously shrewd Silas Croft, was the one to discover her empty dressing room, showing signs of a hasty departure but no overt struggle.",
            "Police are investigating several angles, including a kidnapping for ransom, but some sources close to the singer suggest a more complex story. Dubois had recently expressed her frustration with the pressures of fame and her restrictive contract with Mr. Croft. The disappearance is as mysterious as the singer herself, leaving fans and authorities to wonder if she was a victim or the architect of her own vanishing act."
          ]
        },
        instruction: { en: "Quickly read the first sentence of each paragraph.", es: "Lee rápidamente la primera oración de cada párrafo." },
        question: { en: "What is the main topic of this news story?", es: "¿Cuál es el tema principal de esta noticia?" },
        options: [{ en: "A famous singer and her necklace have disappeared from a nightclub.", es: "Una cantante famosa y su collar han desaparecido de un club nocturno." }, { en: "The Blue Note Club is showcasing a new ruby collection.", es: "El Blue Note Club está exhibiendo una nueva colección de rubíes." }, { en: "Lila Dubois is announcing her retirement from singing.", es: "Lila Dubois anuncia su retiro del canto." }],
        correctAnswerIndex: 0
      },
      {
        id: 3,
        strategy: { en: "Scanning", es: "Búsqueda de Datos (Scanning)" },
        evidence: {
          type: 'data_sheet',
          title: { en: "Club Performance Schedule", es: "Horario de Actuación del Club" },
          content: [
            { "Time": "19:00", "Act": "Doors Open", "Staff": "Security Team, Hostess" },
            { "Time": "20:00", "Act": "Opening Act: The Jazz Cats", "Staff": "Bartenders, Waitstaff" },
            { "Time": "21:00", "Act": "Main Act: Lila Dubois (Set 1)", "Staff": "Spotlight Operator" },
            { "Time": "21:45", "Act": "Intermission", "Staff": "Stagehand: Rico Velez" },
            { "Time": "22:00", "Act": "Main Act: Lila Dubois (Set 2)", "Staff": "Spotlight Operator" },
          ]
        },
        instruction: { en: "Find the requested detail in the schedule.", es: "Encuentra el detalle solicitado en el horario." },
        question: { en: "What is the name of the stagehand on duty during the intermission?", es: "¿Cuál es el nombre del tramoyista de turno durante el intermedio?" },
        options: [{ en: "The Jazz Cats", es: "The Jazz Cats" }, { en: "Silas Croft", es: "Silas Croft" }, { en: "Rico Velez", es: "Rico Velez" }],
        correctAnswerIndex: 2
      },
      {
        id: 4,
        strategy: { en: "Contextual Guessing", es: "Adivinanza Contextual" },
        evidence: {
          type: 'sms',
          title: { en: "Overheard Conversation", es: "Conversación Escuchada" },
          content: "A bartender told the police: 'Her manager, Mr. Croft, was incredibly avaricious. He was always talking about profit margins and ticket sales, never about Lila's artistry or well-being. He saw her as a product, not a person.'"
        },
        instruction: { en: "Use the surrounding words to guess the meaning.", es: "Usa las palabras de alrededor para adivinar el significado." },
        question: { en: "Based on the context, what does 'avaricious' mean?", es: "Basado en el contexto, ¿qué significa 'avaricious'?" },
        options: [{ en: "Extremely greedy for wealth", es: "Extremadamente codicioso de riqueza" }, { en: "Supportive and kind", es: "Comprensivo y amable" }, { en: "Musically talented", es: "Musicalmente talentoso" }],
        correctAnswerIndex: 0
      },
      {
        id: 5,
        strategy: { en: "Intensive Reading", es: "Lectura Intensiva" },
        evidence: {
          type: 'legal_text',
          title: { en: "Insurance Policy Excerpt", es: "Extracto de Póliza de Seguro" },
          content: "The insured item, a ruby necklace designated 'The Crimson Tear,' is under the exclusive care of the policyholder, Mr. Silas Croft. As the designated guardian of the item, he is solely responsible for its security at all times. He must report any loss or damage within 24 hours of the incident."
        },
        instruction: { en: "Analyze the sentence structure carefully.", es: "Analiza la estructura de la oración cuidadosamente." },
        question: { en: "In the second sentence, who does the pronoun 'he' refer to?", es: "En la segunda oración, ¿a quién se refiere el pronombre 'he' (él)?" },
        options: [{ en: "A police detective", es: "Un detective de policía" }, { en: "Mr. Silas Croft", es: "Sr. Silas Croft" }, { en: "An insurance agent", es: "Un agente de seguros" }],
        correctAnswerIndex: 1
      },
      {
        id: 6,
        strategy: { en: "Inferring", es: "Inferencia" },
        evidence: {
          type: 'note',
          title: { en: "Napkin from Dressing Room", es: "Servilleta del Camerino" },
          content: "Found in Lila's dressing room, a napkin with a lipstick print and a message: 'Some birds aren't meant to be caged. Their songs are for the world to hear, not for one man's profit.'"
        },
        instruction: { en: "What is the hidden meaning in this note?", es: "¿Cuál es el significado oculto en esta nota?" },
        question: { en: "What does the note imply about Lila's disappearance?", es: "¿Qué implica la nota sobre la desaparición de Lila?" },
        options: [{ en: "She was kidnapped by a rival singer.", es: "Fue secuestrada por un cantante rival." }, { en: "She left willingly to escape her manager's control.", es: "Se fue voluntariamente para escapar del control de su mánager." }, { en: "She lost the necklace and was afraid to tell her manager.", es: "Perdió el collar y tenía miedo de decírselo a su mánager." }],
        correctAnswerIndex: 1
      },
      {
        id: 7,
        strategy: { en: "Extensive Reading", es: "Lectura Extensiva" },
        evidence: {
          type: 'narrative',
          title: { en: "Fan Magazine Article", es: "Artículo de Revista de Fans" },
          content: "To her fans, Lila Dubois was more than a singer; she was an inspiration. Her story was one of passion and perseverance. She came from nothing, singing in smoky back-alley bars until a scout discovered her. Her voice was a gift, a pure and powerful instrument that could silence a room and move people to tears. She never forgot where she came from, often speaking about the freedom of music and the joy of sharing her gift. In interviews, she seemed to sparkle, a vibrant soul who lived for her art. But in recent months, a shadow seemed to fall over her. The sparkle in her eyes dimmed, replaced by a weariness that even the stage lights couldn't hide. She spoke less of joy and more of obligations, schedules, and contracts. It was a subtle shift, one only a true fan would notice, but it was there. The canary was still singing, but one had to wonder if she was still enjoying the song."
        },
        instruction: { en: "Read for the overall feeling of the story.", es: "Lee para captar el sentimiento general de la historia." },
        question: { en: "What is the general tone of this article?", es: "¿Cuál es el tono general de este artículo?" },
        options: [{ en: "Admiration mixed with recent concern", es: "Admiración mezclada con preocupación reciente" }, { en: "Purely critical and negative", es: "Puramente crítico y negativo" }, { en: "Excited and optimistic", es: "Emocionado y optimista" }],
        correctAnswerIndex: 0
      },
      {
        id: 8,
        strategy: { en: "Summarizing", es: "Resumen" },
        evidence: {
          type: 'summary',
          title: { en: "Closing Statement", es: "Declaración Final" },
          content: "All clues have been gathered. It's time to close the file on the Crimson Canary."
        },
        instruction: { en: "Choose the best summary of the case.", es: "Elige el mejor resumen del caso." },
        question: { en: "Which statement best summarizes the investigation?", es: "¿Qué declaración resume mejor la investigación?" },
        options: [
          { en: "Lila Dubois was likely kidnapped for her valuable necklace by a professional thief who knew the club's schedule.", es: "Lila Dubois fue probablemente secuestrada por su valioso collar por un ladrón profesional que conocía el horario del club." },
          { en: "Feeling trapped and exploited by her greedy manager, Lila Dubois likely staged her own disappearance to regain her freedom, leaving a cryptic note as a clue to her true intentions.", es: "Sintiéndose atrapada y explotada por su avaro mánager, Lila Dubois probablemente organizó su propia desaparición para recuperar su libertad, dejando una nota críptica como pista de sus verdaderas intenciones." },
          { en: "Stagehand Rico Velez, seeking to get rich quick, stole the necklace during the intermission and is now hiding the singer.", es: "El tramoyista Rico Velez, buscando enriquecerse rápidamente, robó el collar durante el intermedio y ahora esconde a la cantante." }
        ],
        correctAnswerIndex: 1
      }
    ]
  }
];