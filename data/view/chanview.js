 'use strict';

/**
 * Channel List views
 *
 *
 */

define('../view/chanview',
[
	'marionette',
	'text!../tpl/chantable.html',
	'text!../tpl/chanrow.html',
], 

function(Mn, tplTable, tplRow) {


	const RowView = Mn.View.extend({
		tagName: 'tr',
		template: _.template( tplRow )
	});

	const TableBody = Mn.CollectionView.extend({
		tagName: 'tbody',
		childView: RowView,
		
		initialize: function(options) {
		  this.listenTo(this.collection, "sync", this.render);
		},
		
	});

	const TableView = Mn.View.extend({
		tagName: 'table',
		className: 'table table-hover',
		template: _.template( tplTable ),
		
		regions: {
			body: {
				el: 'tbody',
				replaceElement: true
			}
		},
		
		onRender() {
			this.showChildView('body', new TableBody({
				collection: this.collection,
			}));
		}
	});
	
	return TableView;
	
});
