# Robocom Docs

Документация Robocom на базе [Quartz](https://quartz.jzhao.xyz/) + GitHub Pages.

## Как устроено

- Весь контент — markdown-файлы в папке `content/`
- Редактируешь в Obsidian (открой папку `content/` как vault)
- Пушишь в `main` → GitHub Actions автоматически публикует

## Первичная настройка (один раз)

### 1. Форкни Quartz

```bash
git clone https://github.com/jackyzha0/quartz.git robocom-docs
cd robocom-docs
npm install
```

### 2. Скопируй файлы из этого репозитория

- Замени `quartz.config.ts`
- Скопируй папку `content/` в корень Quartz[]()
- Скопируй `.github/workflows/deploy.yml`

### 3. Настрой GitHub Pages

В настройках репозитория → **Pages** → Source: **GitHub Actions**

### 4. Подключи поддомен

В настройках Pages укажи кастомный домен: `docs.robocom.io`

У DNS-провайдера добавь запись:
```
CNAME  docs  твой-юзернейм.github.io
```

Создай файл `content/CNAME` с содержимым:
```
docs.robocom.io
```

## Рабочий процесс

```bash
# Написал статью в Obsidian, затем:
git add .
git commit -m "добавил статью про триггеры"
git push
# Через ~1 минуту изменения на сайте
```

## Локальный просмотр

```bash
npx quartz build --serve
# Открой http://localhost:8080
```

## Структура контента

```
content/
├── index.md                    # Главная
├── getting-started/            # Онбординг новых пользователей
├── agents/                     # Работа с агентами
├── nodes/                      # Триггеры, действия, условия
├── integrations/               # Интеграции с сервисами
└── troubleshooting/            # Ошибки и FAQ
```
