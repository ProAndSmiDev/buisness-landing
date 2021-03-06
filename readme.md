### Краткая инструкция по работе

#### 1. Работаем только на созданной от мастера ветке:
    f-name-date-task

    ex. f-andsmi-02.11.2020-added-header
    ex. h-andsmi-02.11.2020-fix-reg-btn
    
    f - feature (то, что новое, добавляется на сайт)
    h - hotfix (то, что правится, устранение багов на сайте)
    
#### 2. Тестируем только на ветке dev
#### 3. После успешных тестов на деве через пулл реквесты заливаем в мастер, прямых заливаний не делать

#### 4. Кодстайл:
    1. Все размеры мы делаем в em, делать надо через миксин em().
    2. Все цвета мы задаем строго в hsl формате
    3. JS мы пишем исключительно в ES2015+
    4. Разметку мы пишем строго по BEM
    5. Блокам и компонентам стили задаются отдельно, а не через наследование
    6. При верстке очень важно ознакомиться с хелперами, в будущем они помогут накинуть стили
    7. Пример разметки в мопсе которой стоит придерживаться, обращаем внимание на классы:
    .block (это наш блок)
        .__element.__element--mode (это наш элемент с модификатором)
    8. Не стоит использовать сокращенные свойства где это не нужно, например:
    margin: 0 15px - когда можно задать отступы справа и слева отдельно
    background: #f00; - когда можно задать background-color отдельно и т.д.
    
#### 5. SVG:
    В папку assets/svg кидаем только свг-иконки с английскими названиями, например icon-close. Сборщик генерирует спрайт и по названию файла создается айдишник, чтобы можно было к нему обратиться. Файл sprite.svg появляется в папке docs/img, полный путь до спрайта "/img/sprite.svg".