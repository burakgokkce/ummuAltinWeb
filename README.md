# Kişisel Web Sitesi - Ümmi Altın

Modern, animasyonlu ve premium görünümlü kişisel portfolio web sitesi.

## Teknolojiler

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (Animasyonlar)
- **lucide-react** (İkonlar)

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Görseller

Aşağıdaki görselleri `public/` klasörüne eklemeniz gerekiyor:

- `me.jpg` - Profil fotoğrafınız (önerilen boyut: 800x800px)
- `og.png` - OpenGraph görseli (önerilen boyut: 1200x630px)

## Yapılandırma

### Sosyal Medya Linkleri

`data/socials.ts` dosyasındaki linkleri güncelleyin.

### Projeler

`data/projects.ts` dosyasındaki proje bilgilerini güncelleyin.

### SEO

`app/layout.tsx` dosyasındaki metadata bilgilerini güncelleyin.
`app/sitemap.ts` ve `app/robots.ts` dosyalarındaki domain'i güncelleyin.

## Deploy

Vercel'e deploy etmek için:

```bash
npm run build
```

Sonra Vercel dashboard'dan projeyi bağlayın veya Vercel CLI kullanın:

```bash
npm i -g vercel
vercel
```

## Özellikler

- ✅ Responsive tasarım
- ✅ Smooth scroll navigasyon
- ✅ Framer Motion animasyonları
- ✅ SEO optimizasyonu
- ✅ Modern UI/UX
- ✅ Glass morphism efektleri
- ✅ Gradient ve glow efektleri
