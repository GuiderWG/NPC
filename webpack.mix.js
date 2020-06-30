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

// Файлы проекта
mix.js('resources/js/app.js', 'public/js/bundle.js')
  .sass('resources/sass/app.scss', 'public/css/bundle.css');

// Сборка html
require('mix-html-builder');
mix.html({
    htmlRoot: 'resources/views/*.html',
    output: '/',
    partialRoot: 'resources/views/partials',
    layoutRoot: 'resources/views/layouts',
    minify: {
        removeComments: false
    }
});

// Кастомные файлы вне проекта берём из временной папки (обновляется по npm run main)
mix.copy('public/tmp/main_tmp.js', 'public/js/main.js')
  .copy('public/tmp/main_tmp.css', 'public/css/main.css');
// Если надо синхронизировать целые папки
//mix.copyDirectory(fromDir, toDir);

// На продакшне есть оптимизация и минификация
if (mix.inProduction()) {
    mix.options({
        // Удаляем все CSS комментарии (production)
        cssNano: {
            discardComments: {
                removeAll: true,
            }
        },
        // Удаляем все JS комментарии (production)
        terser: {
            extractComments: false,
            terserOptions: {
                output: {
                    comments: false,
                },
            },
        },
    });
}
// Разработка требует горячую замену модулей
else {
    // Актуально только при --watch или --hot
    if (Mix.isWatching()) {
        mix.browserSync({
            proxy: '127.0.0.1:8080'
        });

        mix.webpackConfig({
            plugins: [
                // (compiler) => {
                //     const LiveReloadPlugin = require('webpack-livereload-plugin');
                //     return new LiveReloadPlugin();
                // }
            ]
        });
    }
}