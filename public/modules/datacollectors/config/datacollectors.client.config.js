'use strict';

angular.module('datacollectors').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Data Management', 'datacollectors', 'dropdown', '/datacollectors(/create)?');
		Menus.addSubMenuItem('topbar', 'datacollectors', 'Upload Documents', 'document-upload',null,true,['admin','data','document-upload']);
		Menus.addSubMenuItem('topbar','datacollectors','Data Explorer','dataexplorer',null,true,['admin','data']);
		Menus.addSubMenuItem('topbar', 'datacollectors', 'Salesforce DC Demand', 'sfupdate',null,true,['sfupdate','admin']);
        Menus.addSubMenuItem('topbar', 'datacollectors', 'Internal DC Demand', 'internal-demand',null,true,['admin']);
        Menus.addSubMenuItem('topbar', 'datacollectors', 'Update Playcards Data', 'update-playcard',null,true,['pcupdate','admin']);
        Menus.addSubMenuItem('topbar', 'datacollectors', 'View Playcards', 'view-playcard',null,true,['admin','pcviewer']);
        Menus.addSubMenuItem('topbar', 'datacollectors', 'DC Demand Dashboard', 'dashboard',null,true,['admin','dashviewer']);
		Menus.addSubMenuItem('topbar', 'datacollectors', 'Request Access', 'request-access',null,true,['user']);
		Menus.addMenuItem('topbar','Admin','admin','dropdown','/admin',true,['admin']);
        Menus.addSubMenuItem('topbar', 'admin', 'Admin Tasks', 'admin');
		Menus.addMenuItem('topbar','New Functionality','new-functionality','dropdown','/new-functionality',true,['admin']);
        Menus.addSubMenuItem('topbar','new-functionality','Request New Functionality','request-new-functionality');

        Menus.addSubMenuItem('topbar','new-functionality','Review Requests for New Functionality','review-requests-for-new-functionality');
	}
]);
