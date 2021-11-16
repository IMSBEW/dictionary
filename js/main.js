const rusArr = [
    'лай',
    'мешок, сумка, чемодан',
    'стул',
    'одноклассник',
    'пальто',
    'повар',
    'страна',
    'стол',
    'трудный, тяжелый',
    'блюдо',
    'словарь',
    'старший',
    'наслаждаться',
    'глаза',
    'отлично',
    'дружелюбный',
    'очки',
    'щедрый',
    'длинные волосы',
    'сейчас счастливы',
    'ненавидеть',
    'правильное питание',
    'голодный',
    'боль',
    'добрый',
    'семейное положение',
    'замужняя, женатый',
    'родной',
    'газета',
    'ничего',
    'занятие, профессия',
    'художник',
    'кусочек / листок бумаги',
    'чтение',
    'игривый',
    'кошелек, портмоне',
    'грустный, печальный',
    'испуганный',
    'нежный, мягкий',
    'сильный',
    'наилучший',
    'удивленный',
    'близнецы',
    'зонтик',
    'понимание',
    'полезный',
    'бумажник',
    'ты пытался',
]

const engArr = [
    'bark',
    'bag',
    'chair',
    'classmate',
    'coat',
    'cook',
    'country',
    'desk/table',
    'difficult',
    'dishes',
    'dictionary',
    'elder',
    'enjoy',
    'eyes',
    'fine',
    'friendly',
    'glasses',
    'generous',
    'long hair',
    'happy now',
    'hate',
    'healthy food',
    'hungry',
    'hurt',
    'kind',
    'marital status',
    'married',
    'native',
    'newspaper',
    'nothing',
    'occupation',
    'painter',
    'piece of paper',
    'reading',
    'playful',
    'purse',
    'sad',
    'scared',
    'soft',
    'strong',
    'sunny',
    'surprised',
    'twins',
    'umbrella',
    'understanding',
    'useful',
    'wallet',
    'you treid',
]

const dictionary = {}
let arr = []
let arr2 = []

rusArr.forEach((key, i) => dictionary[key] = engArr[i])

const button = document.querySelectorAll('button')
const inputRus = document.querySelector('#rus')
const inputEng = document.querySelector('#eng')


button[1].addEventListener('click', () => {
    const wordRus = Object.entries(dictionary)[Math.floor(Math.random() * Object.entries(dictionary).length)]
    inputRus.value = wordRus[0]
    arr2.push(wordRus[1])
    inputEng.value = ''

    inputEng.style.backgroundColor = '#fff'
})



button[0].addEventListener('click', () => {
    arr.push(inputEng.value)
    if (arr[0] === arr2[0]) {
        let delWord = `${inputRus.value}`
        delete dictionary[delWord]
        arr = []
        arr2 = []
        inputEng.style.backgroundColor = 'green'
        console.log(dictionary)

    } else {
        inputEng.value = arr2[0]
        arr = []
        arr2 = []
        inputEng.style.backgroundColor = 'red'
    }
})