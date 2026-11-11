'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Maximize2, Plus, X } from 'lucide-react';

export default function StoryProject() {
  const [available, setAvailable] = useState(true);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const image = new Image();
    image.onload = () => setAvailable(true);
    image.src = '/story.jpg';
    return () => { image.onload = null; };
  }, []);
  function open() {
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
  }
  function close() {
    dialog.current?.close();
    document.body.style.overflow = '';
  }
  useEffect(() => () => { document.body.style.overflow = ''; }, []);
  return <section className="section materials light" id="story">
    <div className="eyebrow section-label"><span>10</span><span>PROJETO 02 / STORY</span></div>
    <div className="materials-layout">
      <div data-reveal>
        <span className="eyebrow">CAMPANHA VERTICAL · 9:16</span>
        <h2 className="display">O próximo troféu<br/><em>pode ser seu.</em></h2>
        <p>Uma nova peça, a mesma promessa de aventura. O formato vertical concentra a mensagem em um único encontro: o pescador, o tucunaré e a possibilidade de viver essa experiência.</p>
        <p>O azul do cenário e o verde vibrante dão identidade à composição. A fotografia ocupa a maior parte da peça, enquanto o título no topo apresenta a promessa e a chamada orienta o próximo passo.</p>
        <div className="story-reading">
          <div><span>01 / PROMESSA</span><strong>O público no centro da próxima conquista.</strong></div>
          <div><span>02 / EXPERIÊNCIA</span><strong>O tucunaré e o pescador tornam a aventura concreta.</strong></div>
          <div><span>03 / AÇÃO</span><strong>Conhecer os pacotes e reservar.</strong></div>
        </div>
        <p className="caption">1080 × 1920 px · Story estático<br/>Análise visual da peça apresentada. Não se trata de um vídeo.</p>
      </div>
      <div data-reveal className="story-art-column">
        {available ? <button className="story-art" onClick={open} aria-label="Ampliar Story original">
          <img src="/story.jpg" alt="Story Ilha de Caras Lodge: O próximo troféu pode ser seu. Pescador segurando um tucunaré no Lago de Balbina, com chamada para conhecer os pacotes e reservar." width={1080} height={1920} loading="lazy"/>
          <span className="story-expand"><Maximize2 size={18}/> AMPLIAR ARTE</span>
        </button> : <div className="story-placeholder">
          <span className="eyebrow">FORMATO VERTICAL / 9:16</span>
          <div><Plus size={40} strokeWidth={1}/><h3>O próximo<br/>troféu.</h3><p>Arte recebida como referência.<br/>Arquivo original aguardando integração.</p></div>
          <span className="eyebrow">1080 × 1920 PX</span>
        </div>}
        <div className="story-art-caption eyebrow"><span>PROJETO 02 / STORY</span><ArrowUpRight size={15}/></div>
      </div>
    </div>
    <dialog ref={dialog} className="lightbox story-dialog" onCancel={close} onClick={e => { if(e.target === e.currentTarget) close(); }}>
      <div className="lightbox-toolbar"><span className="eyebrow">STORY ORIGINAL / 1080 × 1920 PX</span><button onClick={close} aria-label="Fechar Story"><X/></button></div>
      {available && <div className="story-dialog-image"><img src="/story.jpg" alt="Story original completo da Ilha de Caras Lodge" width={1080} height={1920}/></div>}
      <p>Role para observar os detalhes. Pressione Esc para fechar.</p>
    </dialog>
  </section>;
}
