

const COLLECTION = 'users'

module.exports = function(injectedstore) {
    
    function getAll() {
        // return injectedstore.getAll(COLLECTION)
    }

    function get(id) {
        // return injectedstore.get(COLLECTION ,id)
    }

    return {
        getAll,
        get
    }

}