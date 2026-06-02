/**
 * Impulsy.ai - Clínica Rafaela Coelho
 * Configuração de Hidratação Dinâmica e Design System
 */

const siteConfig = {
    brand: {
        name: "Clínica Rafaela Coelho",
        professional: "Rafaela Coelho",
        tagline: "Beleza e protocolos exclusivos | Estética de Resultados 💎",
        taglineSecondary: "Garanta o seu #momentoRC ↓",
        monogram: "RC",
        logoSubText: "BELEZA & ESTÉTICA",
        instagram: "clinicarafaelacoelho"
    },
    contact: {
        phone: "+55 85 9605-0605",
        whatsapp: "558596050605",
        whatsappLink: "https://wa.me/message/3WNUECODMQ4DG1",
        instagram: "https://instagram.com/clinicarafaelacoelho",
        address: "Rua Conselheiro Vieira da Silva, 621",
        addressComplement: "Parquelândia, Fortaleza - CE",
        cep: "60450-305",
        mapsLink: "https://maps.google.com/?q=Rua+Conselheiro+Vieira+da+Silva%2C+621+-+Parquel%C3%A2ndia%2C+Fortaleza+-+CE%2C+60450-305"
    },
    hours: {
        weekdays: "Terça a Sexta: 09h às 18h",
        saturday: "Sábado: 09h às 18h",
        closed: "Segunda e Domingo: Fechado"
    },
    theme: {
        palette: {
            primary: "#3C2A21",      // Marrom Café elegante
            onPrimary: "#FCFAF7",
            secondary: "#b4aca3",    // Identidade visual #b4aca3
            onSecondary: "#3C2A21",
            accent: "#C5A059",       // Dourado fosco premium
            background: "#FCFAF7",   // Off-white limpo
            surface: "#b4aca3",      // Identidade visual #b4aca3
            text: "#3C2A21"          // Texto principal (Marrom)
        },
        paletteDark: {
            primary: "#FCFAF7",      // Off-white para textos
            onPrimary: "#1C1310",
            secondary: "#3C2A21",    // Café médio para superfícies
            onSecondary: "#FCFAF7",
            accent: "#E6C17A",       // Dourado brilhante suave
            background: "#1C1310",   // Marrom Café Profundo
            surface: "#2B1E19",      // Surface escura terrosa
            text: "#FCFAF7"          // Texto principal
        },
        fonts: {
            headline: "'Playfair Display', serif",
            body: "'Outfit', sans-serif"
        }
    },
    hero: {
        title: "Sua beleza é um <span class='font-serif italic font-normal text-[#C5A059]'>projeto personalizado</span>.",
        description: "Estética de resultados, cabelo de revista, extensão de cílios marcante e unhas impecáveis. Descubra a fusão perfeita de sofisticação e bem-estar no seu #momentoRC.",
        ctaMain: "Agendar Meu #momentoRC",
        ctaSecondary: "Conhecer Procedimentos",
        badge: "💎 Estética de Resultados & Cuidado Exclusivo"
    },
    sections: {
        philosophy: {
            title: "Onde o cuidado encontra a sofisticação.",
            text: "Na Clínica Rafaela Coelho, cada procedimento é uma obra de arte pensada especificamente para você. Unimos a excelência técnica de nossa equipe a um ambiente acolhedor e tons neutros para proporcionar um momento de puro relaxamento e bem-estar. Aqui, sua essência é realçada com elegância e naturalidade."
        }
    }
};

// Exportar para compatibilidade de build se necessário
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
