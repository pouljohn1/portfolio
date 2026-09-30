export type Locale = "en" | "pl"

export const content = {
  en: {
    meta: {
      home: "Portfolio of Paweł Janeczek — frontend developer and maker of web and iPhone apps.",
      lighter: "Lighter support and privacy policy.",
      family: "Familijna Gra support and privacy policy.",
    },
    controls: {
      language: "Language",
      appearance: "Appearance",
      system: "System",
      light: "Light",
      dark: "Dark",
      back: "Back to portfolio",
    },
    home: {
      greeting: "Hey, I'm Pawel",
      introduction:
        "I build stuff for the web. Currently working on frontend at Inter Cars and building side projects like Domalert and Poliswar. Been coding for over a decade and love turning ideas into real products.",
      projects: "Projects",
      work: "Work",
      connect: "Connect",
      previous: "prev",
      domalert: "Finding and getting notified about best deals on the apartments market.",
      poliswar: "A vibe coded strategic multiplayer game for fun.",
      lighter: "iPhone app with realistic lighter simulation, themes, gestures and sounds.",
      family: "A Polish family quiz game for iPhone. Support and privacy policy.",
      intercars: "Frontend development for Europe's leading auto parts distributor.",
      hacklab: "Learning platform that helps people to gain new experiences.",
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
      lighter: "Wsparcie i polityka prywatności aplikacji Lighter.",
      family: "Wsparcie i polityka prywatności aplikacji Familijna Gra.",
    },
    controls: {
      language: "Język",
      appearance: "Wygląd",
      system: "System",
      light: "Jasny",
      dark: "Ciemny",
      back: "Wróć do portfolio",
    },
    home: {
      greeting: "Cześć, jestem Paweł",
      introduction:
        "Tworzę rzeczy w internecie. Obecnie pracuję nad frontendem w Inter Cars, a po godzinach rozwijam projekty takie jak Domalert i Poliswar. Programuję od ponad dekady i lubię zamieniać pomysły w działające produkty.",
      projects: "Projekty",
      work: "Praca",
      connect: "Kontakt",
      previous: "wcześniej",
      domalert: "Wyszukiwanie najlepszych ofert mieszkań i powiadomienia o nowych okazjach.",
      poliswar: "Strategiczna gra wieloosobowa stworzona dla zabawy.",
      lighter: "Aplikacja na iPhone'a z realistyczną symulacją zapalniczki, motywami, gestami i dźwiękami.",
      family: "Polska gra quizowa dla rodzin na iPhone'a. Wsparcie i polityka prywatności.",
      intercars: "Frontend dla czołowego europejskiego dystrybutora części samochodowych.",
      hacklab: "Platforma edukacyjna, która pomaga zdobywać nowe doświadczenia.",
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
