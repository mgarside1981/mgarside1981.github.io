/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'ESFHODA92F',
  '64e67e1b5a3e0e3caa24dcdf4ad59945'
);

const search = instantsearch({
  indexName: 'people',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  })
);


search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#state',
    attribute: 'state',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#city',
    attribute: 'city',
  })
);

search.addWidget(
instantsearch.widgets.rangeSlider({
  container: '#followers',
  attribute: 'followers',
})
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          <img src="{{image}}" align="left" alt="{{name}}" />
                    <div class="hit-followers">
            <h2> <B> Followers: {{#helpers.highlight}}{ "attribute": "followers" }{{/helpers.highlight}} </B> </h2>
          </div>
		  <div class="hit-name">
           <B>{{#helpers.highlight}}{ "attribute": "firstname" }{{/helpers.highlight}} 
            {{#helpers.highlight}}{ "attribute": "lastname" }{{/helpers.highlight}} </B>
          </div>
		  <div class="hit-contact">
			{{#helpers.highlight}}{ "attribute": "address" }{{/helpers.highlight}} <BR>
			{{#helpers.highlight}}{ "attribute": "city" }{{/helpers.highlight}}, 
			{{#helpers.highlight}}{ "attribute": "state" }{{/helpers.highlight}} <BR>
			{{#helpers.highlight}}{ "attribute": "zip" }{{/helpers.highlight}} <BR>
			{{#helpers.highlight}}{ "attribute": "phone" }{{/helpers.highlight}} <BR>
			{{#helpers.highlight}}{ "attribute": "email" }{{/helpers.highlight}} <BR>
			{{#helpers.highlight}}{ "attribute": "web" }{{/helpers.highlight}} <BR>
		  </div>

        </div>
      `,
    },
  })
);


search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
