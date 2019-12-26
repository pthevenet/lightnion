/**
 * @module get
 * GET operations
 * @namespace
 * @see lnn.get.guard
 */

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
export function guard(endpoint, success, error) {
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
export function consensus(endpoint, success, error) {
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
export function descriptors(endpoint, success, error) {
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

export function consensus_raw(endpoint, success, error, flavor = 'microdesc') {
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
export function descriptors_raw(endpoint, success, error, flavor = 'microdesc') {
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

    var rq = new XMLHttpRequest()
    rq.onreadystatechange = function () {
        if (rq.readyState == 4 && rq.status == 200) {
            endpoint.descriptors_raw = rq.responseText

            if (success !== undefined) success(endpoint)
        }
        else if (rq.readyState == 4 && error !== undefined) {
            error(endpoint, rq.status)
        }
    }
}

export function signing_keys(endpoint, success, error) {
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

