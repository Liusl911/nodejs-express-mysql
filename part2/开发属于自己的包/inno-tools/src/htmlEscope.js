// html 转义
function htmlEscope(htmlStr){
    return htmlStr.replace(/<|>|"|&/g, (match) => {
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 还原 html
function htmlunEscope(str){
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    htmlEscope,
    htmlunEscope
}