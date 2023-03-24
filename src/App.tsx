import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';

import styles from './App.module.css';

import './global.css'

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jardelbudke.png',
      name: 'Jardel Dal Castell Budke',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-23 20:10:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Salve!' },
      { type: 'paragraph', content: 'Tudo beleza galera!?' },
      { type: 'link', content: 'diego3g.com/rocketseat' },
    ],
    publishedAt: new Date('2022-05-22 20:30:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
