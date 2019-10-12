/**
 * GET operations.
 * @namespace
 * @see lnn.get.guard
 */
lnn.get = {}

/**
 * Perform GET /guard and update endpoint accordingly,
 * see {@link endpoint_t#guard}.
 *
 * @param {endpoint_t} endpoint     endpoint in use, stores answer
 * @param {callback} success        optional, called on success
 * @param {callback} error          optional, called on error
 * @example
 * // Note: lnn.open perform these steps for you whenever needed.
 * endpoint = lnn.endpoint('localhost', 4990)
 * lnn.get.guard(endpoint, function (endpoint)
 * {
 *     console.log('Guard identity:', endpoint.guard.router.identity)
 * })
 * // (can also have error callback: function (endpoint, xhttp_status) { })
 */
lnn.get.guard = function(endpoint, success, error)
{
    fetch(endpoint.urls.guard, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.guard = data
                if (success !== undefined)
                    success(endpoint)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Perform GET /consensus and update endpoint accordingly,
 * see {@link endpoint_t#consensus}.
 *
 * <pre>
 * Note: provided for testing purposes and currently have no use.
 * </pre>
 *
 * Usage and parameters are similar to {@link lnn.get.guard}, stores the
 * consensus as parsed from the proxy-server answer.
 *
 * @param {endpoint_t} endpoint     endpoint in use, stores answer
 * @param {callback} success        optional, called on success
 * @param {callback} error          optional, called on error
 *
 * @see lnn.get.guard
 */
lnn.get.consensus = function(endpoint, success, error)
{
    fetch(endpoint.urls.consensus, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.consensus = data
                if (success !== undefined)
                    success(endpoint)
                })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Perform GET /descriptors 
 */
lnn.get.descriptors = function(endpoint, success, error){
    fetch(endpoint.urls.descriptors, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.descriptors = data
            
                if(success !== undefined) success(endpoint)    
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

lnn.get.consensus_raw = function(endpoint, success, error,flavor = 'microdesc')
{
    fetch(endpoint.urls.consensus+ "-raw/" + flavor, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.text().then(data => {
                endpoint.consensus_raw =  data
                if (success !== undefined)
                    success(endpoint)
                })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Perform GET /descriptors 
 */
lnn.get.descriptors_raw = function(endpoint, success, error,flavor = 'microdesc'){
    fetch(endpoint.urls.descriptors+ "-raw/" + flavor, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.text().then(data => {
                endpoint.descriptors_raw = data
            
                if(success !== undefined) success(endpoint)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

lnn.get.signing_keys = function(endpoint, success, error){
    fetch(endpoint.urls.signing_keys, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.signing_keys = data
            
                if(success !== undefined) success(endpoint)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

