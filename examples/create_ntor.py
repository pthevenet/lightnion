import lighttor as ltor
import argparse

if __name__ == '__main__':

    parser = argparse.ArgumentParser()
    parser.add_argument('addr', nargs='?', default='127.0.0.1')
    parser.add_argument('port', nargs='?', type=int, default=9050)
    sys_argv = parser.parse_args()

    link = ltor.link.initiate(address=sys_argv.addr, port=sys_argv.port)
    print('Link v{} established – {}'.format(link.version, link.io))

    endpoint = ltor.create.fast(link)
    print('Fast circuit {} created – Key hash: {}'.format(
            endpoint.circuit.id, endpoint.circuit.material.key_hash.hex()))

    print('\nRetrieve cryptographic material through fast circuit...')
    endpoint, authority = ltor.descriptors.download_authority(endpoint)
    endpoint, consensus = ltor.consensus.download(endpoint,
        flavor='unflavored')
    print(' - Success!')

    for router in consensus['routers']:
        if router['digest'] == authority['digest']:
            break

    print('Perform "ntor" handshake with {}:'.format(router['nickname']))
    endpoint = ltor.create.ntor(link,
        router['identity'], authority['ntor-onion-key'])
    print(' - Success! (circuit_id: {}, key_hash: {})'.format(
        endpoint.circuit.id, endpoint.circuit.material.key_hash.hex()))

    print('Attempt to use the "ntor" circuit...')
    endpoint, authority = ltor.descriptors.download_authority(endpoint)
    if router['digest'] == authority['digest']:
        print(' - Success!')
