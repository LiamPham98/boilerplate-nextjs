import Analytics from '@/assets/svgs/analytics.svg';
import Clerk from '@/assets/svgs/clerk.svg';
import Commitlint from '@/assets/svgs/commitlint.svg';
import Eslint from '@/assets/svgs/eslint.svg';
import Form from '@/assets/svgs/form.svg';
import Husky from '@/assets/svgs/husky.svg';
import Lucide from '@/assets/svgs/lucide.svg';
import Next from '@/assets/svgs/next.svg';
import Prettier from '@/assets/svgs/prettier.svg';
import Radix from '@/assets/svgs/radix.svg';
import Storybook from '@/assets/svgs/storybook.svg';
import Tailwind from '@/assets/svgs/tailwind.svg';
import Typescript from '@/assets/svgs/typescript.svg';
import Valorant from '@/assets/svgs/valorant.svg';
import Zod from '@/assets/svgs/zod.svg';
import { Button } from '@/components/ui/Button';

import { Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const libs = [
    {
      icon: Next,
      title: 'NextJs',
      description: 'Next.js is a React framework that enables server-side rendering and generating static websites for React based web applications.',
    },
    {
      icon: Tailwind,
      title: 'TailwindCSS',
      description: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs without ever leaving your HTML.',
    },
    {
      icon: Typescript,
      title: 'TypeScript',
      description: 'TypeScript is a superset of JavaScript that adds static types to the language, making it easier to catch errors early.',
    },
    {
      icon:
        Eslint,
      title: 'ESLint',
      description: 'ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.',
    },
    {
      icon: Prettier,
      title: 'Prettier',
      description: 'Prettier is an opinionated code formatter that ensures consistency in your codebase.',
    },
    {
      icon: Analytics,
      title: 'Bundle analyzer plugin',
      description: 'Visualize the size of webpack output files with an interactive zoomable treemap.',
    },
    {
      icon: Storybook,
      title: 'Storybook',
      description: 'Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular.',
    },
    {
      icon: Radix,
      title: 'Radix UI',
      description: 'Radix UI is a collection of low-level UI components and hooks for building high-quality design systems and web apps.',
    },
    {
      icon: Valorant,
      title: 'CVA',
      description: 'CVA is a collection of low-level UI components and hooks for building high-quality design systems and web apps.',
    },
    {
      icon: Form,
      title: 'React Hook Form',
      description: 'React Hook Form is a performant, flexible, and extensible forms library for React that reduces the amount of code you need to write.',
    },
    {
      icon: Lucide,
      title: 'Lucide Icon',
      description: 'Lucide is a simply beautiful open-source icon set that is designed to be used in web projects.',
    },
    {
      icon: Clerk,
      title: 'clerk',
      description: 'Clerk is a developer-first authentication and user management service that provides a secure and seamless login experience for your users.',
    },
    {
      icon: Commitlint,
      title: 'commitlint',
      description: 'commitlint is a tool to lint your commit messages to ensure they follow a conventional pattern.',
    },
    {
      icon: Zod,
      title: 'Zod',
      description: 'Zod is a TypeScript-first schema declaration and validation library that is designed to be easy to use and performant.',
    },
    {
      icon: Husky,
      title: 'Husky',
      description: 'Husky is a tool that makes it easy to use git hooks as part of your development workflow.',
    },
  ];

  return (
    <main>
      <header className="mx-auto flex w-full max-w-screen-desktop items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <Image src="/avatar.png" alt="avatar" width={64} height={64} className="size-16 rounded-full" />
          <a href="https://github.com/LiamPham98" target="_blank" rel="noreferrer noopener">
            <h1 className="flex items-center gap-2 text-2xl font-bold">
              I'm.Liam
            </h1>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/LiamPham98/boilerplate-nextjs" target="_blank" rel="noreferrer noopener">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-5 cursor-pointer opacity-50 hover:opacity-100"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/trungpham98/" target="_blank" rel="noreferrer noopener">
            <Linkedin size={20} className="cursor-pointer opacity-50 hover:opacity-100" />
          </a>
          <a href="https://demo-boilerplate-nextjs.vercel.app/" target="_blank" rel="noreferrer noopener">
            <Button variant="default" size="sm">
              Demo
            </Button>
          </a>
        </div>
      </header>
      <div className="flex flex-col justify-center px-3 py-16 tablet:px-10 tablet:py-60">
        <h1 className="text-center text-6xl font-bold">
          Welcome to
          {' '}
          <span className="bg-gradient-to-r from-violet-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">NextJs Boilerplate</span>
        </h1>
        <p className="mx-auto mt-5 max-w-screen-laptop text-center text-xl text-muted-foreground">
          Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience rapid UI development, and an extensive suite of tools for a smooth and enjoyable development process.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 tablet:flex-row">
          <a href="https://github.com/LiamPham98/boilerplate-nextjs" target="_blank" rel="noreferrer noopener">
            <Button variant="default" size="lg">
              Get Started
            </Button>
          </a>
          <a href="https://github.com/LiamPham98/boilerplate-nextjs" target="_blank" rel="noreferrer noopener">
            <Button variant="outline" size="lg">
              Star on GitHub (~0,01k)
            </Button>
          </a>
        </div>
      </div>
      <div className="mx-auto mb-20 grid max-w-screen-desktop grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
        {libs.map(({ title, description, icon: Icon }) => (
          <div key={title} className="flex flex-col items-center justify-start gap-4 px-4 py-6">
            <div className="rounded-full bg-black p-4">
              <Icon className="size-12 invert" />
            </div>
            <h2 className="text-xl font-bold ">{title}</h2>
            <p className="text-center font-light text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
