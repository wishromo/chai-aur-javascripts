const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);// givs keys and object all of it
    console.log(`${key} shortcut is for ${myObject[key]}`)
    }
