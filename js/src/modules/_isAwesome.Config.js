(function($, _, window, document, undefined) {

  if(!window._isAwesome) {
    window._isAwesome = {};
  }

  window._isAwesome.Config = (function() {

    var apiUrl = 'https://api.spotify.com/v1/artists?ids=',
        artistsIds = [
          /**
           * The ones that I love (I know, I'm getting old)
           */
          '36QJpDe2go2KgaRleHCDTp', // Led Zeppelin id
          '711MCceyCBcFnzjGY4Q7Un', // ACDC id
          '22bE4uQ6baNwSHPVcDxLCe', // Rolling Stones id

          /**
           * The ones that are only for this application purposes
           */
          '2RdwBSPQiwcmiDo9kixcl8', // Pharrel Williams id ('cause he's funny)
          '4dpARuHxo51G3z768sgnrY', // Adele ('cause it rhymes with Pharrel)
          '4ZDoy7AWNgQVmX7T0u0B1j', // No te va gustar ('cause they are from my country)
          '0yNSzH5nZmHzeE2xn6Xshb'
        ],

        templates = {
          itemList: '#item-list-tpl',
          item: '#item-tpl'
        };

    return {
      
      getSearchURL: function() {
        return apiUrl + artistsIds.join(',');
      },

      getTemplates: function() {
        return templates;
      }
    }

  })();

})(jQuery, _, window, document);