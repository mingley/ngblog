import { Article } from './article';

export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'first article',
        content: 'content here',
        description: 'this is the description of the first article',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'second article',
        content: '2nd content here',
        description: 'this is the description of the second article',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png'
    }
];
