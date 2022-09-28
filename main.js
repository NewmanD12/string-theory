console.log('Challenge 1:')
function xify(str1){
    res = ''
    for(let x of str1){
        res += 'x'
    }
    return res
}

console.log(xify('hello'))
console.log(xify('hi there'))



console.log('\n')
console.log('Challenge 2:')
function yellingChars(str1){
    res = ''
    for(let x of str1){
        res += x
        res += '!'
    }
    return res
}

console.log(yellingChars('goodness'))
console.log(yellingChars('oh hello'))




console.log('\n')
console.log('Challenge 3:')
function indexedChars(str1){
    res = ''
    for(let i = 0; i < str1.length; i++){
        res += i
        res += str1[i]
    }
    return res
}

console.log(indexedChars('hello'))
console.log(indexedChars('bye'))



console.log('\n')
console.log('Challenge 4:')
function exclaim(phrase){
    res = ''
    for(let x of phrase){
        if(x === '?' || x === '.'){
            res += '!'
        } else {
            res += x
        }
    }
    return res
}

console.log(exclaim('What are you doing? Are you a fool?'))
console.log(exclaim('This is fine.'))




console.log('\n')
console.log('Challenge 5:')
function truncate(phrase){
    count = 0
    res = ''
    while(count < 15){
        res += phrase[count]
        count ++;
    }
    res += '...'
    return res
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'))
console.log(truncate("Well, that's just, like, your opinion man."))



console.log('\n')
console.log('Challenge 6:')
function ciEmailify(str_name){
    first_name = true
    f_name = ''
    l_name = ''
    for(let x of str_name){
        if (x === ' '){
            first_name = false
        }   else{
            if(first_name == true){
                f_name += x
            }   else{
                l_name += x
            }
        }
    }
    return `${f_name}.${l_name}@codeimmersives.com`
}

console.log(ciEmailify('colin jaffe'))
console.log(ciEmailify('anthony derosa'))


console.log('\n')
console.log('Challenge 7:')
function reverse(str1){
    res = ''
    count = str1.length -1
    while(count > 0){
        res += str1[count]
        count --
    }
    return res
}

console.log(reverse('colin'))
console.log(reverse('mesuara'))



console.log('\n')
console.log('Challenge 8:')
function onlyVowels(str1){
    vowels = ['a', 'e', 'i', 'o', 'u']
    res = ''
    for(let x of str1){
        if(vowels.includes(x.toLowerCase())){
            res += x
        }
    }
    return res
}

console.log(onlyVowels('Colin Jaffe'))
console.log(onlyVowels('quickly'))
console.log(onlyVowels('Anthony DeRosa'))



console.log('\n')
console.log('Stretch goal 1:')
function crazyCase(str1){
    res = ''
    lowercase = true
    for(let x of str1){
        if(lowercase){
            res += x.toLowerCase()
            lowercase = false
        }   else{
            res += x.toUpperCase()
            lowercase = true
        }
    }
    return res
}

console.log(crazyCase('hello'))
console.log(crazyCase('multiple words here'))
console.log(crazyCase('YELLING'))

console.log('\n')
console.log('Stretch goal 2:')
function titleCase(phrase){
    res = ''
    uppercase = true
    for(let x of phrase){
        if (x === ' '){
            res += x
            uppercase = true
        }   else{
            if(uppercase){
                res += x.toUpperCase()
                uppercase = false
            }   else{
                res += x.toLowerCase()
            }
        }
    }
    return res
}

console.log(titleCase('return of the king'))
console.log(titleCase('cOde iMMerSives'))

console.log('\n')
console.log('Stretch goal 3:')
function camelCase(str1){
    space = false
    res = ''
    for (let x of str1){
        if(x === ' '){
            space = true
        } else {
            if(space){
                res += x.toUpperCase()
                space = false
            }   else {
                res += x.toLowerCase()
            }
        }   
    }
    return res
}

console.log(camelCase('oh Hello'))
console.log(camelCase('well yeah of course'))
console.log(camelCase('Boy howdy'))


console.log('\n')
console.log('Stretch goal 4:')
function crazyCase2ReturnOfCrazyCase(str1){
    res = ''
    lowercase = true
    for(let x of str1){
        if(x === ' '){
            res += x
        }   else {
            if(lowercase){
                res += x.toLowerCase()
                lowercase = false
            }   else{
                res += x.toUpperCase()
                lowercase = true
            }
        }
    }
    return res
}

console.log(crazyCase2ReturnOfCrazyCase('multiple words here'))
console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'))