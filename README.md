<!DOCTYPE html><html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BLVCKLINE Sipariş Formu</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #000;
      color: #fff;
      padding: 20px;
    }
    h1 {
      color: #0ff;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
    }
    input, select, textarea, button {
      padding: 10px;
      border: none;
      border-radius: 4px;
    }
    input, select, textarea {
      background-color: #222;
      color: #fff;
    }
    button {
      background-color: #0ff;
      color: #000;
      font-weight: bold;
      cursor: pointer;
    }
    .whatsapp-link {
      margin-top: 20px;
      display: inline-block;
      background-color: #25d366;
      color: #000;
      padding: 12px 18px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 4px;
    }
    .lang-switch {
      margin-bottom: 20px;
    }
    .lang-switch button {
      margin-right: 10px;
      background-color: #444;
      color: #fff;
    }
  </style>
</head>
<body>
  <div class="lang-switch">
    <button onclick="setLang('tr')">Türkçe</button>
    <button onclick="setLang('en')">English</button>
  </div>  <h1 id="form-title">Sipariş Formu</h1>
  <form action="https://formspree.io/f/myzwlydd" method="POST">
    <label id="name-label">İsim Soyisim:
      <input type="text" name="isim" required>
    </label><label id="email-label">Email:
  <input type="email" name="email" required>
</label>

<label id="color-label">Tişört Rengi:
  <select name="renk">
    <option value="siyah">Siyah</option>
    <option value="beyaz">Beyaz</option>
    <option value="gri">Gri</option>
  </select>
</label>

<label id="size-label">Beden:
  <select name="beden">
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="L">L</option>
    <option value="XL">XL</option>
    <option value="XXL">XXL</option>
  </select>
</label>

<label id="print-label">Hayal Ettiğin Baskı:
  <textarea name="baski" rows="4" placeholder="Samuray, retro, felsefi vs..."></textarea>
</label>

<label id="phone-label">Telefon (isteğe bağlı):
  <input type="text" name="telefon">
</label>

<button type="submit" id="submit-btn">Siparişi Gönder</button>

  </form><a class="whatsapp-link" href="https://wa.me/905399132540?text=Merhaba%20BLVCKLINE,%20ti%C5%9F%C3%B6rt%20sipari%C5%9Fi%20vermek%20istiyorum!" target="_blank">WhatsApp'tan Devam Et</a>

  <script>
    const translations = {
      tr: {
        'form-title': 'Sipariş Formu',
        'name-label': 'İsim Soyisim:',
        'email-label': 'Email:',
        'color-label': 'Tişört Rengi:',
        'size-label': 'Beden:',
        'print-label': 'Hayal Ettiğin Baskı:',
        'phone-label': 'Telefon (isteğe bağlı):',
        'submit-btn': 'Siparişi Gönder'
      },
      en: {
        'form-title': 'Order Form',
        'name-label': 'Full Name:',
        'email-label': 'Email:',
        'color-label': 'T-Shirt Color:',
        'size-label': 'Size:',
        'print-label': 'Custom Design Idea:',
        'phone-label': 'Phone (optional):',
        'submit-btn': 'Submit Order'
      }
    };

    function setLang(lang) {
      const t = translations[lang];
      for (const key in t) {
        document.getElementById(key).innerText = t[key];
      }
    }
  </script></body>
</html>
