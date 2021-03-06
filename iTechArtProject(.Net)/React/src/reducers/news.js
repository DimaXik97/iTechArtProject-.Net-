/*const initState=[
    {
        title: "Новость №1",
        img: "/img/default_img.png",
        text: "Lorem Ipsum - это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации \"Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст..\" Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам \"lorem ipsum\" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты)."
    },
    {
        title: "Новость №2",
        img: "/img/default_img.png",
        text: "Активные увольнения, средняя зарплата, далекая от идеала, затянувшаяся уборочная и посылки белорусов из-за рубежа — все это стало самыми главными новостями за среду, 26 июля. Теперь их можно не только смотреть в социальных сетях в рамках проекта «Короткая лента», но и слушать в аудиоверсии на удобных мобильных платформах."
    },
    {
        title: "Новость №3",
        img: null,
        text: "Инцидент произошел в пятницу утром на железнодорожной станции Французский Вокзал. Пригородный поезд, вышедший со станции Сант-Винсенс-де Кальдерс (провинция Таррагона) врезался носом в оградительную платформу. По предварительной версии, машинист не успел затормозить. В железнодорожной компании Renfe пока не комментируют причины происшествия."
    },
    {
        title: "Новость №4",
        img: "/img/default_img.png",
        text: "Сотрудники ФСБ задержали семерых подозреваемых в подготовке терактов в Санкт-Петербурге, сообщает спецслужба. Ространснадзор планирует усилить меры безопасности в метро Операция по задержанию прошла в пятницу. Все семеро подозреваемых — выходцы из Центральной Азии. По данным ФСБ, они планировали атаки на железнодорожном транспорте и в местах массового скопления людей."
    },
    {
        title: "Новость №5",
        img: null,
        text: "Вашингтону предписали оставить в России 455 сотрудников посольства и консульств — столько же российских дипломатов находятся в США. \"В случае новых односторонних действий американских властей по сокращению численности наших дипломатов в США за этим последует зеркальный ответ\", — подчеркнули в ведомстве."
    },
    {
        title: "Новость №6",
        img: "/img/default_img.png",
        text: "Утром во вторник на шоссе столкнулись четыре машины. Одна из них – Mercedes — впоследствии загорелась, пострадали четыре человека. По предварительным данным, аварию спровоцировал водитель Mercedes, устроив \"шашки\" на дороге; после ДТП он убежал. При этом в СМИ сообщалось, что речь идет о сыне бывшего гендиректора МГТС Михаила Смирнова."
    }
]*/
const news = (state = [], action) => {
    switch(action.type){
        case "ADD_NEWS":{
            return [...state,...action.news]
        }
        case "CLEAR_NEWS":{
            return []
        }
    }
    return state;
}

export default news;