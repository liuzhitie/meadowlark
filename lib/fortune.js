const fortuneCookies = [
    'Conquer your fears or they will conquer you.',
    'Rivers need springs.',
    'Do not fear what you do not know.',
    'You will have a pleasant surprise.',
    'Whenever possible, keep it simple.',

    '征服你的恐惧,否则他们会征服你.',
    '河流需要泉水.',
    '不要害怕你不知道的事.',
    '你会有一个惊喜.',
    '只要可能,就尽量简单.',
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
}
