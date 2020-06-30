const mix = require('laravel-mix');

Mix.manifest.refresh = () => void 0; // Отключаем mix-manifest.json для проектов Laravel, нам он не нужен

// Общие параметры проекта
mix.setPublicPath('public/') // Результирующая папка, относительно которой именовать модули
    .setResourceRoot('../') // URL'ы, относительно которых будут включаться внешние ресурсы ассетов
    .disableNotifications() // Без всплывающих сообщений о результатах сборки
    .options({
        purifyCss: false, // Отключаем удаление "неиспользуемых" стилей, т.к. определение этого в проекте затруднено
        autoprefixer: {
            enabled: true, // Включаем автопрефиксер на основе настроек из package.json
        }
    })
    .webpackConfig({
        devtool: false, // Картографирование не нужно в принципе
    });

// Кастомные файлы вне проекта не проходят минификацию на продакшне
mix.babel('resources/js/main.js', 'public/tmp/main_tmp.js')
    .sass('resources/sass/main.scss', 'public/tmp/main_tmp.css');
