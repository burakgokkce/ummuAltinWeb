# Kişisel Web Sitesi Dokümantasyonu (Burak – 22 / Bilgisayar Müh. 4. Sınıf / iOS Dev / AI meraklısı)

## 1) Amaç
Benim için **fotoğraflı, animasyonlu, shadow’lu, estetik** bir kişisel web sitesi yapılacak.
Hedef: Kendimi kısa ve net anlatan, projelerimi gösteren, sosyal linklerimi öne çıkaran, modern ve premium görünen bir site.

## 2) Genel Stil ve Hissiyat
- Modern + minimal ama “premium”
- Yumuşak geçişler, hover animasyonları, kartlarda gölge
- Arka planda hafif gradient / glow efektleri
- Sayfa akarken yumuşak “reveal” animasyonları (scroll ile)
- Aşırı karışık değil: boşluk (spacing) bol, tipografi güçlü

## 3) Teknoloji ve Kurulum (Cursor’ın uygulaması gereken)
- Framework: **Next.js (App Router)**
- Dil: **TypeScript**
- Stil: **TailwindCSS**
- Animasyon: **Framer Motion**
- İkon: **lucide-react**
- Deploy: **Vercel**
- SEO: metadata, OpenGraph, sitemap, robots
- Performans: Image optimization (next/image), lazy loading

### Proje Yapısı (öneri)
- `app/`
  - `layout.tsx`
  - `page.tsx`
  - `globals.css`
- `components/`
  - `Navbar.tsx`
  - `Hero.tsx`
  - `About.tsx`
  - `Skills.tsx`
  - `Projects.tsx`
  - `AIPlayground.tsx`
  - `Socials.tsx`
  - `Contact.tsx`
  - `Footer.tsx`
- `data/`
  - `projects.ts`
  - `socials.ts`
- `public/`
  - `me.jpg` (benim foto)
  - `og.png`

## 4) Renk Paleti ve Tipografi
Cursor bunları “varsayılan” alıp, güzel görünecek şekilde uygulasın:
- Arka plan: koyu (siyah / very dark navy)
- Kartlar: koyu gri ton + blur
- Vurgu rengi: mor-mavi neon hissi (gradient)
- Metin: beyaz ve gri tonları
- Başlık fontu: modern sans (varsayılan Next fontu veya Inter)

## 5) Sayfa Bölümleri (Tek Sayfa - Smooth Scroll)
Navbar sabit (sticky) olmalı ve menü smooth scroll yapmalı.

### 5.1 Navbar
- Sol: Logo / İsim (örn. “Burak”)
- Sağ: Menü: Ana Sayfa, Hakkımda, Yetenekler, Projeler, AI, İletişim
- Sağda küçük CTA butonu: “İletişime Geç”
- Scroll’da navbar arka planı blur + shadow olsun.

### 5.2 Hero (İlk Ekran - En Etkileyici Kısım)
- Sol: Büyük başlık:
  - “22 yaşında, Bilgisayar Müh. 4. sınıf”
  - “iOS Developer”
  - “Yeni yeni AI araçlarını keşfediyorum”
- Alt metin: Sosyal, üretken, hızlı öğrenen ve ürün odaklı olduğumu anlatan 2-3 satır.
- Butonlar:
  - “Projelerime Bak”
  - “CV İndir” (şimdilik placeholder link)
- Sağ: Benim fotoğrafım (circular/rounded), etrafında soft glow
- Arka plan: gradient blob + hafif noise (çok abartma)

Animasyonlar:
- Hero yazıları sırayla fade + slide
- Foto hafif parallax / hover tilt efekti
- CTA butonlarında hover glow

### 5.3 Hakkımda
- Kısa hikaye: (Benim ağzımdan, samimi ama profesyonel)
  - “iOS geliştirme odağım var”
  - “AI araçlarını keşfediyorum”
  - “Sosyalim, ekip işini seviyorum, üretmeyi seviyorum”
- 3 tane mini kart:
  - “iOS & SwiftUI”
  - “Ürün Geliştirme”
  - “AI ile Üretkenlik”
Kartlarda hover’da yukarı kalkma + shadow artışı.

### 5.4 Yetenekler (Skills)
- Kategori bazlı grid:
  - iOS: Swift, SwiftUI, StoreKit, Firebase/Supabase (varsa)
  - Web: Next.js, TS (temel)
  - AI Tools: (ChatGPT, Cursor, otomasyonlar, prompt vb.)
- Her bir skill badge/etiket şeklinde, hover’da renk değişsin.

### 5.5 Projeler (En Önemli Bölümlerden)
- Proje kartları: görsel + açıklama + etiketler + linkler
- Proje sayısı: şimdilik 4-6 adet demo içerik koy (ben sonra değiştiririm)
- Kart içinde:
  - Proje adı
  - 1 cümle açıklama
  - Tech stack etiketleri
  - Butonlar: “Detay” / “GitHub” / “Live” (placeholder)
- Kartlar responsive: masaüstü 3 kolon, tablet 2, mobil 1

### 5.6 AI Playground (Benim yeni keşfettiğim AI kısmı)
- Bu bölüm “vibe” olarak havalı olsun:
  - “Son zamanlarda denediğim AI araçları”
  - “Prompt denemeleri”
  - “Otomasyon fikirleri”
- İçerik formatı:
  - Sol: kısa metin
  - Sağ: “terminal/panel” görünümlü kartlar (kod gibi gözüksün)
- Amaç: “Ben AI’ı öğreniyorum ve kullanıyorum” mesajı.

### 5.7 Sosyal & Topluluk
- Sosyal olduğumu hissettiren bölüm:
  - Instagram, LinkedIn, GitHub, X, Email
- İkonlu büyük butonlar
- Hover’da glow ve micro animation

### 5.8 İletişim
- Basit form:
  - Ad Soyad, Email, Mesaj
- Form backend şimdilik yok:
  - “mailto:” ile çalışabilir veya dummy submit + toast
- Yan tarafta “Hızlı İletişim” kartı:
  - Email
  - Lokasyon: Türkiye
  - “Genelde hızlı dönüş yaparım” gibi kısa not

### 5.9 Footer
- Mini logo/isim
- Copyright
- Sosyal ikonlar

## 6) Animasyon / UI Detayları (Zorunlu)
- Scroll reveal (Framer Motion)
- Kart hover:
  - translateY(-4px)
  - shadow artışı
  - border glow
- Buton hover: glow + küçük scale
- Arka plan: hafif hareket eden gradient blob (çok hafif)
- Sayfa geçişleri akıcı

## 7) Responsive Kuralları
- Mobilde hero: foto üstte, yazılar altta
- Menü mobilde hamburger olsun
- Tüm grid’ler mobil uyumlu
- Görseller optimize (next/image)

## 8) SEO ve Meta
- Title: “Burak | iOS Developer”
- Description: “Bilgisayar Müh. 4. sınıf, iOS Developer, AI araçlarını keşfeden, sosyal ve üretken.”
- OpenGraph image: `public/og.png` (placeholder)
- Sitemap + robots

## 9) İçerik Placeholder’ları (Ben sonra düzenleyeceğim)
Cursor şunları placeholder koysun:
- Foto: `/public/me.jpg`
- CV: `/public/cv.pdf` (şimdilik yoksa butonu kapatma, placeholder bırak)
- Proje listesi: `data/projects.ts` içinde

### Örnek Proje İçerikleri (dummy)
- “iOS Fitness Tracker” (SwiftUI, HealthKit)
- “AI PDF Summarizer” (Next.js, AI)
- “Task & Habit App” (SwiftUI, Firebase)
- “Portfolio v1” (Next.js, Tailwind)

## 10) Teslim Kriterleri
- Proje çalışır şekilde ayağa kalkmalı (`npm run dev`)
- UI premium ve temiz olmalı
- Animasyonlar kasmadan akmalı
- Lighthouse performansı makul olmalı
- Kod düzenli, component’ler ayrılmış olmalı

## 11) Cursor’a Talimat (Net)
- Bu dokümana birebir uy.
- Önce iskeleti kur (Next + Tailwind + Framer).
- Sonra componentleri tek tek üret.
- Sonra animasyon ve micro-interactionları ekle.
- En son SEO + deployment ayarlarını yap.
- Kod içinde açıklayıcı yorumlar ekle.