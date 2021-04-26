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
    reduce: function (array = [], callback = () => {}, acc) {
      let collection = array.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for(let i = 0; i<collection.length; i++) {
      acc = callback(acc, collection[i], collection)
      }
      return acc
    },
    find: function (collection, predicate) {
      console.log('collection =',collection, '    ', 'predicate =', predicate)
    },

  filter: function () { },
  // size: function () { },
  // first: function () { },
  // last: function () { },
  // compact: function () { },
  // sortBy: function () { },
  // flatten: function () { },
  // uniq: function () { },
  // keys: function () { },
  // values: function () { },
  // functions: function () { },
  }
}) ()

fi.libraryMethod()
