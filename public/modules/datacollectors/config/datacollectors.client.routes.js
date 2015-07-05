'use strict';

//Setting up route
angular.module('datacollectors').config(['$stateProvider',
	function($stateProvider) {
		// Datacollectors state routing
		$stateProvider.
		state('document-upload', {
			url: '/document-upload',
				templateUrl: 'modules/datacollectors/views/document-upload.client.view.html'
		}).
			state('sfupdate', {
				url: '/sfupdate',
				templateUrl: 'modules/datacollectors/views/salesforce-update.client.view.html'
			}).
            state('internal-demand', {
                url: '/internal-demand',
                templateUrl: 'modules/datacollectors/views/internal-dc-demand.client.view.html'
            }).
            state('update-playcard', {
                url: '/update-playcard',
                templateUrl: 'modules/datacollectors/views/update-playcard.client.view.html'
            }).
            state('view-playcard', {
                url: '/view-playcard',
                templateUrl: 'modules/datacollectors/views/view-playcard.client.view.html'
            }).
            state('dashboard', {
                url: '/dashboard',
                templateUrl: 'modules/datacollectors/views/dashboard.client.view.html'
            }).
			state('dataexplorer', {
				url: '/dataexplorer',
				templateUrl: 'modules/datacollectors/views/dataexplorer.client.view.html'
			});
			//.
			//state('charts', {
			//	url: '/charts',
			//	templateUrl: 'modules/datacollectors/views/charts.client.view.html'
			//}).
		//state('createDatacollector', {
		//	url: '/datacollectors/create',
		//	templateUrl: 'modules/datacollectors/views/create-datacollector.client.view.html'
		//}).
		//state('viewDatacollector', {
		//	url: '/datacollectors/:datacollectorId',
		//	templateUrl: 'modules/datacollectors/views/view-datacollector.client.view.html'
		//}).
		//state('editDatacollector', {
		//	url: '/datacollectors/:datacollectorId/edit',
		//	templateUrl: 'modules/datacollectors/views/edit-datacollector.client.view.html'
		//}
		//);
	}
]);
