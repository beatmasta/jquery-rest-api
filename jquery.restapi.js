(function($) {

    var APIClient = function(opts) {

        var self = this;
        self.url = null;
        self.path = null;
        self.body = null;

        self.__init__ = function(opts) {
            self.url = opts.url;
        };

        self.get = function(path, params) {
            self.path = path + '?' + self.buildQueryString(params);
            self.body = '';
            return self._request();
        };

        self.post = function(path, params) {
            self.path = path;
            self.body = params;
            return self._request(true);
        };

        self.buildQueryString = function(params) {
            return decodeURIComponent($.param(params));
        };

        self._request = function(isPost) {
            var ajaxParams = {
                url: self.url + '/' + self.path,
                type: isPost ? 'POST' : 'GET',
                dataType: 'json'
            };
            if ( isPost ) {
                ajaxParams.data = self.body;
            }
            return $.ajax(ajaxParams);
        };

        self.__init__(opts);

    };

    $.APIClient = APIClient;

})(jQuery);