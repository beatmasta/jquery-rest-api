jquery-rest-api
===============

jQuery simple REST API class

```javascript

var api = new $.APIClient({ url: 'http://my-rest-server.com' });

api.post('bringMeDonuts', {
    limit: 20
}).done(cb).fail(function(xhr, err) {
    console.log('Error on request', err);
});

// performs request to http://my-rest-server.com/bringMeDonuts with POST body limit=20

```