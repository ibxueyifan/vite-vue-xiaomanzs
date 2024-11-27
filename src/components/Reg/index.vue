<template>
    <div class=''>
        <h1>Reg</h1>
    </div>
</template>

<script setup lang='ts'>


// console.log(imgs)


// 只有一个小写字母  精准匹配
let reg1 = /^[a-z]$/
let str1 = 'aa';
let res1 = reg1.test(str1);
console.log('res1', res1)

// 只有6个小写字母  精准匹配
let reg = /^[a-z]{6}$/
let str = 'aaabbb';
let res = reg.test(str);
console.log('res', res)

// 只有1个数字  精准匹配
let reg2 = /^[0-9]$/
let str2 = '12';
let res2 = reg2.test(str2);
console.log('res2', res2)



// [abcd] 包含[]中的任意一个字符

// ^ 以...开头  $ 以...结尾

// [^abc] 除了abc以外的任意一个字符

// abc*   *号代表0个或多个

let reg3 = /abc*/
let str3 = 'aaab';
let res3 = reg3.test(str3);
console.log('res3', res3)

// abc+  +号代表1个或多个

// abc?  ?号代表0个或1个

// {n} 代表n个  {n,m} 代表n到m个  {n,} 代表至少n个 大于等于n次

// () 分组 (abc){2}  abc连续出现2次

// 分组捕获
let date = '2024-11-26';
let res4 = date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$2/$3/$1')
console.log('res4', res4) //11/26/2024

// 预定义
// \d 数字 = [0-9]  \D 非数字 = [^0-9]  \w 数字字母下划线 = [0-9a-zA-Z_]  \W 非数字字母下划线 = [^0-9a-zA-Z_] 
// \s 空白字符 = [\t\n\x0B\f\r]  \S 非空白字符 = [^\t\n\x0B\f\r]
// . 任意字符 = [^\r\n]
// [xyz] 包含中括号中的任意一个字符


let reg5 = /^\d{4}-\d{1,2}-\d{1,2}/;
let str5 = '2024-11-26asd';
let res5 = reg5.test(str5);
//  \d{4}-\d{1,2}-\d{1,2}/      asd2024-11-26 true 2024-11-26 true
//  /^\d{4}-\d{1,2}-\d{1,2}/    asd2024-11-26 false 2024-11-26asdsa true
console.log('res5', res5)




// exec 返回一个数组 第一项是匹配到的字符串 第二项是分组捕获到的字符串
/**
 *   [
 *    0: "2024-11-26"  // 匹配到的字符串
 *    index: 0  // 匹配到的字符串的开始位置
 *    input: "2024-11-26asd" // 原始字符串
 *  ]
 * 
 */
let reg6 = /^\d{4}-\d{1,2}-\d{1,2}/;
let str6 = '2024-11-26asd';
let res6 = reg6.exec(str6);
console.log('res6', res6)



// g 全局匹配  不然只能匹配到第一个 i 忽略大小写  m 多行匹配
let str7 = '2024-11-26 to 2099-11-28';
let reg7 = /\d{4}-\d{1,2}-\d{1,2}/g
let res7 = reg7.exec(str7);
let res8 = reg7.exec(str7);
console.log('res7', (res7 as RegExpExecArray)[0]) //2024-11-26
console.log('res8', (res8 as RegExpExecArray)[0]) //2099-11-28

let res9 = str7.match(reg7);
console.log('res9', res9) //["2024-11-26", "2099-11-28"]

// 返回一个迭代器  [...res10] 返回一个数组 里面是两个下面的这个东西
/**
 *   [
 *    0: "2024-11-26"  // 匹配到的字符串
 *    index: 0  // 匹配到的字符串的开始位置
 *    input: "2024-11-26asd" // 原始字符串
 *  ]
 * 
 */
 let res10 = str7.matchAll(reg7);
 console.log('res10', [...res10])



 let str8 = 'asd123daa456';
 let reg8 = /\d/g;
 let res11 = str8.match(reg8);
 console.log('res11', res11) //["1", "2", "3", "4", "5", "6"]


</script>

<style scoped lang='scss'></style>