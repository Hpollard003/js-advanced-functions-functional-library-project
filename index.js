const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function (collection, callback) {
      const collector = collection instanceof Array ? collection.slice() : Object.values(collection)
      for (let i = 0; i < collector.length; i++)
        callback(collector[i])
      return collection
    },
    map: function (collection, callback) {
      const collector = collection instanceof Array ? collection.slice() : Object.values(collection)
      const newArr = []
      for (let i = 0; i < collector.length; i++) {
        newArr.push(callback(collector[i]))
      };
      return newArr
    },
    reduce: function (array = [], callback = () => { }, acc) {
      let collection = array.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },
    find: function (collection, predicate) {
      // console.log(collection)
      const collector = collection instanceof Array ? collection : Object.values(collection)
      // console.log(collector)
      for (let i = 0; i < collector.length; i++) {
        const finder = predicate(collector[i])
        if (finder) {
          return (collector[i])
        }
      }
      // return(find)
    },
    filter: function (collection, predicate) {
      const array = []
      const collector = collection instanceof Array ? collection : Object.values(collection)
      collector.forEach(x => {
        const finder = predicate(x)
        if (finder) {
          array.push(x)
        }
      })

      // array.push(thing)
      return (array)
    },
    size: function (collection) {
      const collector = collection instanceof Array ? collection : Object.values(collection)
      return collector.length
    },
    first: function (collection, n) {
      let pos = 0
      const collector = collection instanceof Array ? collection : Object.values(collection)
      if (n > 0) {
        return collector.splice(pos, n)
      } else {
        return collector[0]
      }
    },
    last: function (array, n) {
      return array[n]


     },
    // compact: function () { },
    // sortBy: function () { },
    // flatten: function () { },
    // uniq: function () { },
    // keys: function () { },
    // values: function () { },
    // functions: function () { },
  }
})()

fi.libraryMethod()
