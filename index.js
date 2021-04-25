const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const each = collection.forEach(x => {
        return alert('Im here')
      });
      // const length = collection.length
      console.log(each)
      //alert('Stop the presses')
      // return length 
    },

    map: function(collection, callback) {

    },

    reduce: function(collection, callback, acc) {

    },

    functions: function(collection, callback) {

    },


  }
})()

fi.libraryMethod()
