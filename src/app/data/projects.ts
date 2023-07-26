export interface Project {
    id: number;
    code: string;
    name: string;
    description: string;
    screenshots: string[];
    website: string;
    github: string;
    frontend: string;
    backend?: string;
    styles: string;
    language: string;
    delay: number;
}

export const projects = [
    {
        id: 1,
        code: 'my-pa-box',
        name: 'myPAbox',
        description: '',
        screenshots: [
            '/myPabox/pa_main.png',
        ],
        website: '',
        github: '',
        frontend: 'React(Redux)',
        backend: 'Firebase',
        styles: 'Tailwind',
        language: 'TypeScript',
        delay: 100,
    },
    {
        id: 2,
        code: 'quiz-me',
        name: 'QuizMe',
        description: 'A full stack web app inspired by Quizlet, which provides students a tool for creating and reviewing digital flashcards. Includes "Flashcard" and "Learn" modes.',
        screenshots: [
            '/quiz-me/quiz_me_front.png',
            '/quiz-me/quiz_me_login.png',
            '/quiz-me/quiz_me_main.png',
            '/quiz-me/quiz_me_create.png',
            '/quiz-me/quiz_me_flashcards.png',
            '/quiz-me/quiz_me_learn.png',
            '/quiz-me/quiz_me_library.png',
        ],
        website: 'https://quiz-me-mtojong246.vercel.app/',
        github: 'https://github.com/mtojong246/quiz-me',
        frontend: 'Next',
        backend: 'PostgreSQL',
        styles: 'Tailwind',
        language: 'TypeScript',
        delay: 200,
    },
    {
        id: 3,
        code: 'knife-purveyor',
        name: 'Knife Purveyor',
        description: 'An e-commerce website re-designed for a local knife shop located in Wake Forest, NC.',
        screenshots: [
            '/knife_purveyor/knife_main.png',
            '/knife_purveyor/knife_shop.png',
            '/knife_purveyor/knife_individual.png',
            '/knife_purveyor/knife_cart.png',
            '/knife_purveyor/knife_contact.png',
        ],
        website: 'https://knife-purveyor.netlify.app/',
        github: 'https://github.com/mtojong246/knife-purveyor',
        frontend: 'React(Redux)',
        backend: 'Firebase',
        styles: 'CSS',
        language: 'JavaScript',
        delay: 300,
    },
    {
        id: 4,
        code: 'tesla-clone',
        name: 'Tesla Clone',
        description: 'A landing page inspired by the tesla website.',
        screenshots: [
            '/tesla/tesla_model_3.png',
            '/tesla/tesla_sidebar.png',
            '/tesla/tesla_model_x.png',
            '/tesla/tesla_model_y.png',
            '/tesla/tesla_solar.png',
        ],
        website: 'https://mt-tesla-clone.netlify.app/',
        github: 'https://github.com/mtojong246/tesla',
        frontend: 'React',
        backend: '',
        styles: 'SCSS',
        language: 'JavaScript',
        delay: 400,
    },
    {
        id: 5,
        code: 'pantry',
        name: 'Pantry',
        description: 'A full-stack website that generates recipes based on items in your pantry. Includes a customizable nutrition tracker, food log and grocery list.',
        screenshots: [
            '/pantry/pantry_title.png',
            '/pantry/pantry_pantry.png',
            '/pantry/pantry_recipes.png',
            '/pantry/pantry_ingredients.png',
            '/pantry/pantry_nutrition.png',
            '/pantry/pantry_log.png',
            '/pantry/pantry_grocery.png',
        ],
        website: 'https://mtojong246.github.io/pantry-app/',
        github: 'https://github.com/mtojong246/pantry-app',
        frontend: 'React',
        backend: 'PostgreSQL',
        styles: 'SCSS',
        language: 'JavaScript',
        delay: 500
    },
    {
        id: 6,
        code: 'primordial',
        name: 'Primordial',
        description: '',
        screenshots: [
            '/primordial/primordial_title.png',
            '/primordial/primordial_start.png',
            '/primordial/primordial_gameplay.png',
            '/primordial/primordial_encyclopedia.png',
        ],
        website: 'https://primordial-game.netlify.app/',
        github: 'https://github.com/mtojong246/primordial',
        frontend: 'React',
        backend: '',
        styles: 'SCSS',
        language: 'JavaScript',
        delay: 600
    }
]