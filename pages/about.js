import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Lenisのスムーススクロール設定
    const lenis = new Lenis({
      duration: 1, // スクロール速度を早くする
      smooth: true,  // スムーススクロールの有効化
      direction: 'vertical',  // 垂直スクロール
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Head>
        <title>シンプルなヘッダー</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main style={{ height: '200vh', paddingTop: '80px' }}>
        <div style={{ height:'calc(100vh - 80px)',backgroundColor:'#ccc' }}>
        {/* <Image src="/rin.png" alt="Sample Image" width={500} height={500} objectFit="contain" /> */}
            <div className="text-animation">
            <span className="char">a</span>
            <span className="char">b</span>
            <span className="char">o</span>
            <span className="char">u</span>
            <span className="char">t</span>
            </div>
        </div>
      </main>
      <footer style={{ padding: '30px' }}>
        <div>© 2024 KuROE_U1</div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.5/bundled/lenis.js"></script>
      
      <style jsx>{`
        .text-animation {
          display: flex;
          gap: 2px;
        }

        .char {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: title-animation 0.8s cubic-bezier(0, 0.7, 0.3, 1) both;
        }

        .char:nth-child(1) { animation-delay: 0.25s; }
        .char:nth-child(2) { animation-delay: 0.3s; }
        .char:nth-child(3) { animation-delay: 0.35s; }
        .char:nth-child(4) { animation-delay: 0.4s; }
        .char:nth-child(5) { animation-delay: 0.45s; }

        @keyframes title-animation {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
