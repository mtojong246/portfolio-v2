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
}

export const projects = [
    {
        id: 1,
        code: 'my-pa-box',
        name: 'myPAbox',
        description: '',
        screenshots: [],
        website: '',
        github: '',
        frontend: 'React(Redux)',
        backend: 'Firebase',
        styles: 'Tailwind',
        language: 'TypeScript',
    },
    {
        id: 2,
        code: 'quiz-me',
        name: 'QuizMe',
        description: 'A full stack web app inspired by Quizlet, which provides students a tool for creating and reviewing digital flashcards. Includes "Flashcard" and "Learn" modes.',
        screenshots: [],
        website: 'https://quiz-me-vxb5.vercel.app/',
        github: 'https://github.com/mtojong246/quiz-me',
        frontend: 'Next',
        backend: 'PostgreSQL',
        styles: 'Tailwind',
        language: 'TypeScript',
    },
    {
        id: 3,
        code: 'knife-purveyor',
        name: 'Knife Purveyor',
        description: 'An e-commerce website re-designed for a local knife shop located in Wake Forest, NC.',
        screenshots: [],
        website: 'https://knife-purveyor.netlify.app/',
        github: 'https://github.com/mtojong246/knife-purveyor',
        frontend: 'React(Redux)',
        backend: 'Firebase',
        styles: 'CSS',
        language: 'JavaScript',
    },
    {
        id: 4,
        code: 'tesla-clone',
        name: 'Tesla Clone',
        description: 'A landing page inspired by the tesla website.',
        screenshots: [],
        website: 'https://mt-tesla-clone.netlify.app/',
        github: 'https://github.com/mtojong246/tesla',
        frontend: 'React',
        backend: '',
        styles: 'SCSS',
        language: 'JavaScript',
    },
    {
        id: 5,
        code: 'pantry',
        name: 'Pantry',
        description: 'A full-stack website that generates recipes based on items in your pantry. Includes a customizable nutrition tracker, food log and grocery list.',
        screenshots: [],
        website: 'https://mtojong246.github.io/pantry-app/',
        github: 'https://github.com/mtojong246/pantry-app',
        frontend: 'React',
        backend: 'PostgreSQL',
        styles: 'SCSS',
        language: 'JavaScript',
    },
    {
        id: 6,
        code: 'primordial',
        name: 'Primordial',
        description: '',
        screenshots: [],
        website: 'https://primordial-game.netlify.app/',
        github: 'https://github.com/mtojong246/primordial',
        frontend: 'React',
        backend: '',
        styles: 'SCSS',
        language: 'JavaScript',
    }
]