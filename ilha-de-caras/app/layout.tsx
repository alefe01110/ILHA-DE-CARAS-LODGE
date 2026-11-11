import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Ilha de Caras — Projeto criativo por Alefe Santos', description: 'Uma apresentação de design, narrativa visual e estratégia de conversão. Projeto de Alefe Santos para o processo seletivo da Ilha de Caras Lodge.', robots: { index: false, follow: false } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html> }
