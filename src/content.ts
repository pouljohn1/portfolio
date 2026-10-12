export type Locale = "en" | "pl"

export const content = {
  en: {
    meta: {
      home: "Portfolio of Paweł Janeczek — frontend developer and maker of web and iPhone apps.",
      domalert: "DomAlert — property deals, price comparisons, saved searches and alerts.",
      lighter: "Lighter support and privacy policy.",
      family: "Familijna Gra support and privacy policy.",
      familyGame: "Familijna Gra — a Polish quiz for iPhone. Guess popular answers, play online or against a bot, and win points for your family.",
    },
    controls: {
      language: "Language",
      appearance: "Appearance",
      light: "Light",
      dark: "Dark",
      back: "Back to portfolio",
    },
    home: {
      greeting: "Hey, I'm Pawel",
      introduction:
        "I build web and mobile apps, from DomAlert to iPhone apps like Familijna Gra and Lighter. I work on frontend at Inter Cars and bring over a decade of experience across iOS, Android, web and backend development.",
      projects: "Projects",
      work: "Experience",
      connect: "Connect",
      domalert: "Finding and getting notified about best deals on the apartments market.",
      poliswar: "A vibe coded strategic multiplayer game for fun.",
      lighter: "iPhone app with realistic lighter simulation, themes, gestures and sounds.",
      family: "A Polish quiz for iPhone. Guess popular answers and compete online or against a bot.",
      experience: [
        {
          organization: "Inter Cars S.A.", role: "Software Engineer", period: "Feb 2026 – present",
          description: "Frontend development for Inter Cars.", href: "https://intercars.eu",
        },
        {
          organization: "Homebrew Hackers Club", role: "CTO", period: "Aug 2025 – Jan 2026",
          description: "Technology leadership for Hacklab, a learning platform.", href: "https://hacklab.so",
        },
        {
          organization: "Qbit.", role: "Full Stack Developer", period: "Oct 2018 – Jun 2024",
          description: "Sole developer across iOS, Android, React web interfaces and Django backend services.", href: null,
        },
        {
          organization: "Polidea", role: "Staff Software Engineer", period: "Sep 2017 – Oct 2018",
          description: "Led an Android team and frontend projects, including hiring and mentoring developers.", href: null,
        },
        {
          organization: "Polidea", role: "Senior Software Engineer", period: "Sep 2014 – Sep 2015",
          description: "Led iOS and Android projects and mentored developers on architecture and code quality.", href: null,
        },
        {
          organization: "Polidea", role: "Software Engineer", period: "Jun 2012 – Sep 2014",
          description: "Built iOS apps in Objective-C and integrated backend services through REST APIs.", href: null,
        },
        {
          organization: "Asseco Business Solutions SA", role: "iOS/Android Programmer", period: "Dec 2011 – Jun 2012",
          description: "Developed in-house iOS and Android applications with Objective-C and Java.", href: null,
        },
      ],
    },
    domalert: {
      title: "DomAlert",
      eyebrow: "Property discovery",
      introduction:
        "DomAlert brings property listings into one place and highlights offers priced below similar homes nearby. It helps people spot opportunities, follow price changes and hear about matching listings as they appear.",
      visit: "Visit domalert.pl",
      socialTitle: "Follow DomAlert",
      showcaseTitle: "Inside DomAlert",
      showcase: [
        ["Spot a deal", "An offer is shown alongside its price per square metre and how it compares with similar properties nearby."],
        ["See the full picture", "The property view brings together the listing, its location, price history and comparable offers."],
        ["Compare opportunities", "Nearby listings can be scanned side by side, with the difference from the local average visible at a glance."],
      ],
      exampleLabel: "Example from DomAlert",
      cheaperLabel: "cheaper than nearby offers",
      dealsLabel: "2 deals",
      lowerLabel: "cheaper",
      offerImageAlt: "Illustrated property on a map from DomAlert",
      appImageAlt: "DomAlert property view with listing details, map and price history",
      nearbyImageAlt: "Illustration of a nearby property",
      featuresTitle: "What you can do",
      features: [
        ["Find listings in one place", "Browse new offers collected from popular Polish property portals."],
        ["Explore locations", "Search selected areas for properties that match your criteria."],
        ["Spot lower prices", "Compare an asking price per square metre with similar nearby properties."],
        ["Follow price history", "See how the price of a listing has changed over time."],
        ["Save what matters", "Keep useful filters and listings close at hand."],
        ["Get alerts", "Choose email, SMS or web push updates about new offers and changes, immediately or in a daily summary."],
      ],
    },
    lighter: {
      title: "Lighter Support",
      aboutTitle: "About the App",
      about:
        "Lighter is a premium, realistic virtual simulator for iPhone built with SwiftUI and CoreMotion. Experience the art of fire with authentic physics-based flame movement, a variety of elegant themes, and intuitive gesture controls that make it feel like a real lighter in your hand.",
      featuresTitle: "Key Features",
      features: [
        ["Interactive Flame Physics", "The flame reacts to your device's tilt and movement in real-time."],
        ["Lighter Collection", "Choose from premium themes including Classic Silver, Gold Plated, Magma Style, and Antique Brass."],
        ["Authentic Experience", "High-quality sound effects and realistic flint wheel mechanical animations."],
        ["Flashlight Integration", "The device flashlight synchronizes with the flame state for an immersive effect."],
        ["Intuitive Gestures", "Swipe to open the lid, strike the flint wheel to ignite, and tap or close to extinguish."],
        ["Works Offline", "Enjoy the full experience without any internet connection."],
      ],
      contactTitle: "Contact Support",
      contact: "Having issues with the app or have suggestions for new themes? I'd love to hear from you.",
      email: "Email",
      privacyTitle: "Privacy Policy",
      privacyBeforeLink:
        "Lighter uses Firebase Analytics to understand aggregate feature usage and Firebase Crashlytics to diagnose crashes and recoverable errors. Firebase may process device, app, usage, and diagnostic information as described in ",
      privacyLink: "Google's privacy documentation",
      privacyAfterLink: ".",
      privacyLimits:
        "Lighter does not send imported images, creator names, theme names, or CloudKit record identifiers to these services. It does not use advertising identifiers or cross-app tracking.",
      requirementsTitle: "Requirements",
      requirements: ["iOS 16.0 or later", "iPhone (Real device required for motion-sensing physics)"],
    },
    familyGame: {
      title: "Familijna Gra",
      eyebrow: "Polish quiz · Made for iPhone",
      headline: "What would you answer?",
      introduction: "What do people take to the beach? What goes on a pizza? Guess popular answers, reveal the board and win points for your family in a colourful game-show quiz.",
      download: "Download on the",
      availability: "Free · iOS 17 or later · Available in the Polish App Store",
      highlights: ["In Polish", "No ads", "No in-app purchases"],
      heroAlt: "Familijna Gra promotional image with the host and a board asking what people take to the beach",
      howTitle: "One board. Plenty of ideas.",
      howSubtitle: "Five rounds. Every answer counts.",
      steps: [
        ["Guess an answer", "Type your idea. A correct answer reveals a place on the board and adds points to the round’s bank."],
        ["Watch the stakes", "After three mistakes, your opponent gets one chance to steal the whole bank. A single answer can turn the round around."],
        ["Win for your family", "Collect points across five rounds. The higher total wins, with an extra round to settle a tie."],
      ],
      galleryTitle: "Take a look inside",
      galleryDescription: "Play against another player through Game Center, or choose local play and face a bot right away — including offline.",
      screenshots: [
        { image: "answer", title: "Reveal the answers", description: "Every correct guess brings you closer to a full board.", alt: "Game image showing a correct pizza topping answer and the points earned" },
        { image: "steal", title: "Turn the round around", description: "Your opponent’s mistake could be your chance to take the points.", alt: "Game image showing one remaining chance to steal a round" },
        { image: "play", title: "Online or against a bot", description: "Find an opponent, or start a local match whenever you like.", alt: "Game image presenting local play against a bot and online multiplayer" },
      ],
      gameLanguage: "The game and all questions are in Polish. Online play requires internet and Game Center sign-in.",
      linksTitle: "Support and privacy",
      support: "Get support",
      privacy: "Privacy policy",
    },
    family: {
      title: "Familijna Gra",
      subtitle: "Support and privacy policy for the iPhone app.",
      contactTitle: "Contact",
      contactBeforeEmail: "If you have a problem with the game or a question about your data, email ",
      privacyTitle: "Privacy Policy",
      updated: "Last updated: September 28, 2026",
      ownerTitle: "Who is responsible for the app",
      ownerBeforeEmail: "Familijna Gra is operated by Paweł Janeczek. For privacy questions, contact me at ",
      gameDataTitle: "Data needed for the game",
      gameDataOne:
        "Your family name is stored locally on your device. If you use iCloud, the app saves your profile in CloudKit and reserves the name in a public database so another family cannot choose it. The name may be visible to other players. Apple's Game Center is used to sign in a player, find an opponent, and exchange data during a match.",
      gameDataTwo:
        "Completed match results are kept in a local queue when syncing is unavailable. Match details are saved to the player's private CloudKit database. In online matches, the host also saves a public summary with family names, date, and score. This summary does not include entered answers or Game Center or iCloud account identifiers. Entered answers are shared with the opponent during a match but are not saved in CloudKit match history.",
      analyticsTitle: "Analytics and diagnostics",
      analytics:
        "We use Firebase Analytics to understand screen usage and game actions, and Firebase Crashlytics to diagnose crashes and errors. These services may process an installation identifier, device, operating system and app information, usage events, and diagnostic data. We do not send entered answers, family names, or player identifiers to Firebase. We do not use advertising identifiers or data for cross-app tracking.",
      googleBeforeLink: "Read more about Firebase data processing in ",
      googleLink: "Google's documentation",
      storageTitle: "Storage and your choices",
      storageBeforeEmail:
        "We keep profile and result data to run the game and show match history. You can remove local data by uninstalling the app; data stored in CloudKit may remain after uninstalling. To ask about your data, correct it, or request its deletion, email ",
      storageAfterEmail:
        ". Apple also manages Game Center and iCloud account data and services through your account settings.",
      changesTitle: "Changes to this policy",
      changes:
        "If the app or its data processing changes, we will update this page and the date above.",
    },
  },
  pl: {
    meta: {
      home: "Portfolio Pawła Janeczka — frontend developera i twórcy aplikacji internetowych oraz na iPhone'a.",
      domalert: "DomAlert — okazje na rynku nieruchomości, porównania cen, zapisane filtry i powiadomienia.",
      lighter: "Wsparcie i polityka prywatności aplikacji Lighter.",
      family: "Wsparcie i polityka prywatności aplikacji Familijna Gra.",
      familyGame: "Familijna Gra — quiz po polsku na iPhone’a. Zgaduj popularne odpowiedzi, graj online lub z botem i zdobywaj punkty dla swojej rodziny.",
    },
    controls: {
      language: "Język",
      appearance: "Wygląd",
      light: "Jasny",
      dark: "Ciemny",
      back: "Wróć do portfolio",
    },
    home: {
      greeting: "Cześć, jestem Paweł",
      introduction:
        "Tworzę aplikacje internetowe i mobilne — od DomAlert po Familijną Grę i Lighter na iPhone’a. Na co dzień rozwijam frontend w Inter Cars. Mam ponad dekadę doświadczenia w iOS, Androidzie, aplikacjach webowych i backendzie.",
      projects: "Projekty",
      work: "Doświadczenie",
      connect: "Kontakt",
      domalert: "Wyszukiwanie najlepszych ofert mieszkań i powiadomienia o nowych okazjach.",
      poliswar: "Strategiczna gra wieloosobowa stworzona dla zabawy.",
      lighter: "Aplikacja na iPhone'a z realistyczną symulacją zapalniczki, motywami, gestami i dźwiękami.",
      family: "Quiz po polsku na iPhone’a. Zgaduj popularne odpowiedzi i rywalizuj online lub z botem.",
      experience: [
        {
          organization: "Inter Cars S.A.", role: "Software Engineer", period: "luty 2026 – obecnie",
          description: "Rozwój frontendu w Inter Cars.", href: "https://intercars.eu",
        },
        {
          organization: "Homebrew Hackers Club", role: "CTO", period: "sierpień 2025 – styczeń 2026",
          description: "Odpowiadałem za obszar technologiczny Hacklab, platformy edukacyjnej.", href: "https://hacklab.so",
        },
        {
          organization: "Qbit.", role: "Full Stack Developer", period: "październik 2018 – czerwiec 2024",
          description: "Samodzielnie rozwijałem aplikacje na iOS i Androida, interfejsy webowe w React oraz backend w Django.", href: null,
        },
        {
          organization: "Polidea", role: "Staff Software Engineer", period: "wrzesień 2017 – październik 2018",
          description: "Prowadziłem zespół Android i projekty frontendowe, uczestniczyłem w rekrutacji i mentoringu.", href: null,
        },
        {
          organization: "Polidea", role: "Senior Software Engineer", period: "wrzesień 2014 – wrzesień 2015",
          description: "Prowadziłem projekty iOS i Android oraz wspierałem programistów w architekturze i jakości kodu.", href: null,
        },
        {
          organization: "Polidea", role: "Software Engineer", period: "czerwiec 2012 – wrzesień 2014",
          description: "Tworzyłem aplikacje iOS w Objective-C i integrowałem je z usługami backendowymi przez REST API.", href: null,
        },
        {
          organization: "Asseco Business Solutions SA", role: "Programista iOS/Android", period: "grudzień 2011 – czerwiec 2012",
          description: "Rozwijałem wewnętrzne aplikacje iOS i Android w Objective-C i Javie.", href: null,
        },
      ],
    },
    domalert: {
      title: "DomAlert",
      eyebrow: "Wyszukiwanie nieruchomości",
      introduction:
        "DomAlert zbiera ogłoszenia w jednym miejscu i wyróżnia oferty tańsze od podobnych nieruchomości w okolicy. Pomaga znaleźć okazję, śledzić zmiany cen i dowiedzieć się o nowych ofertach pasujących do wybranych kryteriów.",
      visit: "Otwórz domalert.pl",
      socialTitle: "Śledź DomAlert",
      showcaseTitle: "DomAlert w praktyce",
      showcase: [
        ["Wypatrz okazję", "Przy ofercie widać cenę za metr kwadratowy i porównanie z podobnymi nieruchomościami w okolicy."],
        ["Zobacz pełny obraz", "Widok nieruchomości łączy ogłoszenie, lokalizację, historię ceny i porównywalne oferty."],
        ["Porównaj oferty", "Oferty z okolicy można przejrzeć obok siebie, od razu widząc różnicę względem lokalnej średniej."],
      ],
      exampleLabel: "Przykład z DomAlert",
      cheaperLabel: "taniej niż w okolicy",
      dealsLabel: "2 okazje",
      lowerLabel: "taniej",
      offerImageAlt: "Ilustracja nieruchomości na mapie z DomAlert",
      appImageAlt: "Widok oferty w DomAlert ze szczegółami, mapą i historią ceny",
      nearbyImageAlt: "Ilustracja nieruchomości z okolicy",
      featuresTitle: "Co potrafi",
      features: [
        ["Ogłoszenia w jednym miejscu", "Przeglądaj nowe oferty zbierane z popularnych polskich portali nieruchomości."],
        ["Wyszukiwanie lokalizacji", "Szukaj w wybranych miejscach nieruchomości pasujących do Twoich kryteriów."],
        ["Okazje cenowe", "Porównuj cenę za metr kwadratowy z podobnymi ofertami w okolicy."],
        ["Historia ceny", "Sprawdź, jak zmieniała się cena konkretnego ogłoszenia."],
        ["Zapisane filtry i oferty", "Zachowaj interesujące wyszukiwania i ogłoszenia, żeby szybko do nich wrócić."],
        ["Powiadomienia", "Wybierz alerty e-mail, SMS lub web push o nowych ofertach i zmianach — od razu albo w codziennym podsumowaniu."],
      ],
    },
    lighter: {
      title: "Wsparcie Lighter",
      aboutTitle: "O aplikacji",
      about:
        "Lighter to realistyczna wirtualna zapalniczka na iPhone'a zbudowana w SwiftUI i CoreMotion. Płomień reaguje na ruch urządzenia, a aplikacja oferuje różne motywy i sterowanie gestami.",
      featuresTitle: "Najważniejsze funkcje",
      features: [
        ["Ruch płomienia", "Płomień reaguje na przechylenie i ruch urządzenia w czasie rzeczywistym."],
        ["Kolekcja zapalniczek", "Wybieraj spośród motywów, takich jak Classic Silver, Gold Plated, Magma Style i Antique Brass."],
        ["Dźwięk i animacje", "Efekty dźwiękowe i animacje krzesiwa zwiększają realizm."],
        ["Integracja z latarką", "Latarka urządzenia synchronizuje się ze stanem płomienia."],
        ["Sterowanie gestami", "Przesuń, by otworzyć pokrywkę, zakręć krzesiwem, a potem dotknij lub zamknij, by zgasić płomień."],
        ["Działa offline", "Korzystaj z zapalniczki bez połączenia z internetem."],
      ],
      contactTitle: "Kontakt z pomocą",
      contact: "Masz problem z aplikacją lub pomysł na nowy motyw? Napisz do mnie.",
      email: "E-mail",
      privacyTitle: "Polityka prywatności",
      privacyBeforeLink:
        "Lighter korzysta z Firebase Analytics, aby poznawać zbiorcze dane o użyciu funkcji, oraz z Firebase Crashlytics, aby diagnozować awarie i błędy możliwe do obsłużenia. Firebase może przetwarzać dane o urządzeniu, aplikacji, korzystaniu z niej oraz dane diagnostyczne, zgodnie z ",
      privacyLink: "dokumentacją Google dotyczącą prywatności",
      privacyAfterLink: ".",
      privacyLimits:
        "Lighter nie wysyła do tych usług importowanych obrazów, nazw twórców, nazw motywów ani identyfikatorów rekordów CloudKit. Nie korzysta z identyfikatorów reklamowych ani ze śledzenia między aplikacjami.",
      requirementsTitle: "Wymagania",
      requirements: ["iOS 16.0 lub nowszy", "iPhone (do działania fizyki opartej na ruchu potrzebne jest prawdziwe urządzenie)"],
    },
    familyGame: {
      title: "Familijna Gra",
      eyebrow: "Quiz po polsku · Na iPhone’a",
      headline: "A Ty co wpiszesz?",
      introduction: "Co najczęściej zabierasz na plażę? Jaki składnik kładziesz na pizzę? Zgaduj popularne odpowiedzi, odkrywaj tablicę i zdobywaj punkty dla swojej rodziny w kolorowym quizie w klimacie teleturnieju.",
      download: "Pobierz w",
      availability: "Za darmo · iOS 17 lub nowszy · Polski App Store",
      highlights: ["Po polsku", "Bez reklam", "Bez zakupów w aplikacji"],
      heroAlt: "Grafika Familijnej Gry z prowadzącym i tablicą odpowiedzi na pytanie o rzeczy zabierane na plażę",
      howTitle: "Jedna tablica. Mnóstwo skojarzeń.",
      howSubtitle: "Pięć rund. Każda odpowiedź się liczy.",
      steps: [
        ["Zgaduj odpowiedzi", "Wpisz swój pomysł. Trafienie odsłania miejsce na tablicy i dodaje punkty do banku rundy."],
        ["Pilnuj szans", "Po trzech pomyłkach rywal ma jedną próbę przejęcia całego banku. Jedna odpowiedź może odwrócić losy rundy."],
        ["Wygraj dla swojej rodziny", "Zbieraj punkty przez pięć rund. Wygrywa wyższy wynik, a przy remisie rozstrzyga dogrywka."],
      ],
      galleryTitle: "Zajrzyj do gry",
      galleryDescription: "Zmierz się z innym graczem przez Game Center albo wybierz „Graj lokalnie” i od razu zagraj z botem — również bez internetu.",
      screenshots: [
        { image: "answer", title: "Odkrywaj odpowiedzi", description: "Każde trafienie przybliża Cię do odkrycia całej tablicy.", alt: "Grafika z gry z poprawną odpowiedzią na pytanie o składnik pizzy i zdobytymi punktami" },
        { image: "steal", title: "Przejmij rundę", description: "Pomyłka rywala może być Twoją szansą na zdobycie punktów.", alt: "Grafika z gry z ostatnią szansą na przejęcie punktów w rundzie" },
        { image: "play", title: "Online lub z botem", description: "Znajdź rywala albo rozpocznij lokalny mecz, kiedy chcesz.", alt: "Grafika przedstawiająca grę lokalną z botem i pojedynek online" },
      ],
      gameLanguage: "Cała gra i pytania są po polsku. Rozgrywka online wymaga internetu i zalogowania do Game Center.",
      linksTitle: "Pomoc i prywatność",
      support: "Pomoc i kontakt",
      privacy: "Polityka prywatności",
    },
    family: {
      title: "Familijna Gra",
      subtitle: "Wsparcie i polityka prywatności aplikacji na iPhone'a.",
      contactTitle: "Kontakt",
      contactBeforeEmail: "Jeśli masz problem z grą lub pytanie dotyczące danych, napisz na ",
      privacyTitle: "Polityka prywatności",
      updated: "Ostatnia aktualizacja: 28 września 2026 r.",
      ownerTitle: "Kto odpowiada za aplikację",
      ownerBeforeEmail:
        "Za aplikację Familijna Gra odpowiada Paweł Janeczek. W sprawach prywatności skontaktujesz się ze mną pod adresem ",
      gameDataTitle: "Dane potrzebne do gry",
      gameDataOne:
        "Podana nazwa rodziny jest zapisywana lokalnie na urządzeniu. Jeśli korzystasz z iCloud, aplikacja zapisuje profil w CloudKit i rezerwuje nazwę w publicznej bazie, aby nie mogła jej wybrać inna rodzina. Nazwa może być widoczna innym graczom. Game Center firmy Apple służy do logowania gracza, wyszukiwania przeciwnika i przesyłania danych trwającego meczu.",
      gameDataTwo:
        "Wyniki zakończonych meczów zapisujemy w lokalnej kolejce, gdy synchronizacja jest niedostępna. Szczegół meczu trafia do prywatnej bazy CloudKit danego gracza. W meczu online host zapisuje także publiczne podsumowanie zawierające nazwy rodzin, datę i wynik. Nie zawiera ono wpisywanych odpowiedzi ani identyfikatorów kont Game Center lub iCloud. Wpisywane odpowiedzi są przekazywane rywalowi podczas meczu, lecz nie zapisujemy ich w historii CloudKit.",
      analyticsTitle: "Analityka i diagnostyka",
      analytics:
        "Korzystamy z Firebase Analytics, aby rozumieć użycie ekranów i działania gry, oraz z Firebase Crashlytics, aby diagnozować awarie i błędy. Usługi te mogą przetwarzać identyfikator instalacji, informacje o urządzeniu, systemie i aplikacji, zdarzenia użycia oraz dane diagnostyczne. Do Firebase nie wysyłamy wpisywanych odpowiedzi, nazw rodzin ani identyfikatorów graczy. Nie używamy identyfikatora reklamowego ani danych do śledzenia między aplikacjami.",
      googleBeforeLink: "Więcej o przetwarzaniu danych przez Firebase znajdziesz w ",
      googleLink: "dokumentacji Google",
      storageTitle: "Przechowywanie i Twoje wybory",
      storageBeforeEmail:
        "Dane profilu i wyników przechowujemy na potrzeby działania gry i historii meczów. Dane lokalne możesz usunąć, odinstalowując aplikację; dane zapisane w CloudKit mogą pozostać po odinstalowaniu. Jeśli chcesz uzyskać informacje o swoich danych, poprawić je lub poprosić o ich usunięcie, napisz na ",
      storageAfterEmail:
        ". Dane kont i usługi Game Center oraz iCloud są zarządzane także przez Apple w ustawieniach Twojego konta.",
      changesTitle: "Zmiany polityki",
      changes:
        "Gdy zmieni się sposób działania aplikacji lub przetwarzania danych, zaktualizujemy tę stronę i datę powyżej.",
    },
  },
} as const
