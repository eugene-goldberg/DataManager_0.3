'use strict';

angular.module('datacollectors').controller('DcUpdateController',
    ['$scope', '$http', '$stateParams', '$location',
        'Authentication', 'Datacollectors', 'FileUploader','$rootScope','$state',
        function($scope, $http, $stateParams, $location, Authentication,
                 Datacollectors, FileUploader,$rootScope,$state) {

            console.log('This is dcUpdateController');

            function initDcList(){
                $http.get('/mongodata/?collectionName=DC_Facilities&subject=datacenter-listing').success(function(response) {
                    console.log('found ' + response.length + ' records for datacenter-listing');
                    response.forEach(function(record){
                        $scope.dcNames.push({name: record.DataCenterName, country: record.Country, siteCode: record.DCSiteID,sku: record.SKU});
                    });
                });
            }

            initDcList();

            $scope.buList = [
                {
                    name: 'GIS'
                },
                {
                    name: 'GBS'
                },
                {
                    name: 'EBG'
                }
            ];

            $scope.tenancyTypes = [
                {
                    name: 'Multi'
                },
                {
                    name: 'Single'
                },
                {
                    name: 'Cloud'
                },
                {
                    name: 'NPS'
                }
            ];

            $scope.contractTypes = [
                {
                    name: "Leased"
                },
                {
                    name: "Owned"
                },
                {
                    name: "CoLo"
                }

            ];

            $scope.workspaces =
                [
                    { id: 1, name: "dc" ,active:true  },
                    { id: 2, name: 'dc-2' ,active:false  }
                ];

            $scope.dcNames = [];

            $scope.dcRegions = [
                {
                    name: "Americas"
                },
                {
                    name: "EMEA"
                },
                {
                    name: "APAC"
                },
                {
                    name: "Nordics"
                },
                {
                    name: "UK & I"
                }
            ];

            $scope.overallStrategies = [
                {
                    name: "Close"
                },
                {
                    name: "Move"
                },
                {
                    name: "Maintain"
                },
                {
                    name:   "Grow"
                }

            ];

            $scope.datacenterTypes = [
                {
                    name: "CoLo"
                },
                {
                    name: "Leased"
                },
                {
                    name: "NPS"
                },
                {
                    name:   "Owned"
                },
                {
                    name:   "Partner"
                }

            ];

            $scope.strategicNatures = [
                {
                    name: "GIS-Multi"
                },
                {
                    name: "GIS-Single"
                },
                {
                    name: "GIS-Cloud"
                },
                {
                    name:   "NPS"
                }
            ];

            $scope.certifications = [
                {
                    name: "ITAR"
                },
                {
                    name: "SSAE 16"
                },
                {
                    name: "ISAE 3402"
                },
                {
                    name:   "ISO2000"
                },
                {
                    name:   "ISO27001"
                }
            ];

            $scope.networkNodeTypes = [
                {
                    name: "Gain"
                },
                {
                    name:   "Super-Gain"
                }
            ];

            $scope.selectedDcName=[{}];

            function getPlaycardsData(dcName) {
                $http({
                    method: 'GET',
                    url: '/playcards_data/?dcName=' + dcName
                }).success(function(data){
                    if(data !== undefined){
                        if(data[0] !== undefined){
                                $scope.dcName = data[0].DataCenterName;
                                $scope.dcTier = data[0].DcTier;
                                $scope.dcSku = data[0].DcTier;
                                $scope.leaseEnds = data[0].LeaseEnds;
                                $scope.kwLeasedUtilized =    data[0].KwLeasedUtilized;
                                $scope.annualCost = data[0].AnnualCost;
                                $scope.$kWL =   data[0].KWL;
                                $scope.cscSecurityLead = data[0].CscSecurityLead;
                                $scope.dcManager =  data[0].DcManager;
                                //$scope.dcSecurityLead = data[0].CscSecurityLead;
                                $scope.dcRegionalManager =   data[0].DcRegionalHead;
                                $scope.buildDate =  data[0].BuildDate;
                                $scope.vendor = data[0].Vendor;
                                $scope.valueOfUtilization = data[0].ValueOfUtilization;
                                $scope.dcAddress =  data[0].DatacenterAddress;

                                $scope.dcProvider = data[0].DcProvider;
                                $scope.dcProviderContact =    data[0].DcProviderContact;
                                $scope.annualDirectLeaseCost =  data[0].AnnualDirectLeaseCost;

                                if(data[0].ConsolidationStrategy !== undefined){
                                    $scope.consolidationStrategy =  data[0].ConsolidationStrategy;
                                }

                            if(data[0].KeyAccounts !== undefined){
                                    $scope.keyAccounts = data[0].KeyAccounts;
                            }

                                $scope.totalSpace =  data[0].SqFtTotal;
                                $scope.sqFtRaised = data[0].SqFtRaised;
                                $scope.pctUtilization = data[0].PctUtilization;

                                $scope.selectedCertifications = data[0].Certifications;

                                //selectedCerts.forEach(function(cert){
                                //    $scope.certifications.forEach(function(c){
                                //        if(c.name === cert){
                                //            c.ticked = true;
                                //        }
                                //    })
                                //});

                            var selectedContracts = data[0].ContractTypes.split(',');
                            if(selectedContracts.length > 0){
                                selectedContracts.forEach(function(contract){
                                    $scope.contractTypes.forEach(function(c){
                                        if(c.name === contract){
                                            c.ticked = true;
                                        }
                                    })
                                });
                            }

                            var selectedTenancies = data[0].TenancyTypes.split(',');
                            if(selectedTenancies.length > 0){
                                selectedTenancies.forEach(function(tenancy){
                                    $scope.tenancyTypes.forEach(function(c){
                                        if(c.name === tenancy){
                                            c.ticked = true;
                                        }
                                    })
                                });
                            }

                            var selectedNetworkNodes = data[0].NetworkNodeTypes.split(',');
                            if(selectedNetworkNodes.length > 0){
                                selectedNetworkNodes.forEach(function(node){
                                    $scope.networkNodeTypes.forEach(function(c){
                                        if(c.name === node){
                                            c.ticked = true;
                                        }
                                    })
                                });
                            }

                            var strategicNatures = data[0].StrategicNaturesOfDc.split(',');
                            if(strategicNatures.length > 0){
                                strategicNatures.forEach(function(nature){
                                    $scope.strategicNatures.forEach(function(c){
                                        if(c.name === nature){
                                            c.ticked = true;
                                        }
                                    })
                                });
                            }

                            var dcTypes = data[0].DataCenterTypes.split(',');
                            if(dcTypes.length > 0){
                                dcTypes.forEach(function(dctype){
                                    $scope.datacenterTypes.forEach(function(c){
                                        if(c.name === dctype){
                                            c.ticked = true;
                                        }
                                    })
                                });
                            }

                            $scope.dcRegions.forEach(function(region){
                                if(region.name === data[0].Region){
                                    region.ticked = true;
                                }
                            });

                            var overallStrategies = data[0].OverallStrategies.split(',');
                            if(overallStrategies.length > 0){
                                overallStrategies.forEach(function(strategy){
                                    $scope.overallStrategies.forEach(function(c){
                                        if(c.name === strategy){
                                            c.ticked = true;
                                        }
                                    })
                                });
                            }

                        }
                    }

                }).error(function(){
                    alert('error');
                });


            }

            $scope.$watch(function(scope) {return  $scope.selectedDcName },
                function(newValue, oldValue) {
                    if(newValue[0]){
                        console.log('new value:  ' + newValue[0].name);
                    }

                    if(newValue[0]){
                        $scope.$parent.selectedName = newValue[0].name;

                        //var result = $scope.dcNames.filter(function( obj ) {
                        //    $scope.dcCountry=newValue[0].country;
                        //    $scope.dcSiteCode = newValue[0].siteCode;
                        //    $scope.dcSku = newValue[0].sku;
                        //    return obj.DataCenterName == newValue[0];
                        //
                        //});

                        getPlaycardsData(newValue[0].name);
                    }

                }
            );

            $scope.postUpdate = function(){
                console.log('playcard update  ');
                var postData = {
                    DataCenterName: $scope.selectedDcName,
                    StrategicNaturesOfDc: $scope.selectedStrategicNatures,
                    AnnualDirectLeaseCost: $scope.annualDirectLeaseCost,
                    DataCenterTypes: $scope.selectedDatacenterTypes,
                    TenancyTypes: $scope.selectedTenancyTypes,
                    NetworkNodeTypes: $scope.selectedNetworkNodeTypes,
                    KeyAccounts: $scope.keyAccounts,
                    SqFtTotal: $scope.totalSpace,
                    SqFtRaised: $scope.sqFtRaised,
                    PctUtilization: $scope.pctUtilization,
                    DcTier: $scope.dcSku,
                    ContractTypes: $scope.selectedContractTypes,
                    LeaseEnds: $scope.leaseEnds,
                    KwLeasedUtilized: $scope.kwLeasedUtilized,
                    AnnualCost: $scope.annualCost,
                    $kWL: $scope.$kWL,
                    Certifications: $scope.selectedCertifications,
                    DcManager:  $scope.dcManager,
                    DcRegeonalHead: $scope.dcRegionalManager,
                    CscSecurityLead:    $scope.cscSecurityLead,
                    ConsolidationStrategy:  $scope.consolidationStrategy,
                    OverallStrategies:    $scope.selectedOverallStrategies,
                    Region: $scope.selectedDcRegion,
                    BuildDate:  $scope.buildDate,
                    Vendor: $scope.vendor,
                    ValueOfUtilization: $scope.valueOfUtilization,
                    DatacenterAddress:  $scope.dcAddress,
                    DcProvider: $scope.dcProvider,
                    DcProviderContact:  $scope.dcProviderContact
                };
                var json = angular.toJson(postData);
                $http.post('/playcard_update', json)
                    .success(function(data, status, headers, config) {
                    $state.go('view-playcard');
                }).
                    error(function(data, status, headers, config) {
                        alert('Error while updating Playcard data');
                    });
            };

            var setAllInactive = function() {
                angular.forEach($scope.workspaces, function(workspace) {
                    workspace.active = false;
                });
            };

            $scope.activeWorkspaceSheetName = function(){
                $scope.workspaces.forEach(function(workspace) {
                    if(workspace.active){
                        return workspace.name;
                    }
                });
            };

            var addNewWorkspace = function() {
                var id = $scope.workspaces.length + 1;
                $scope.workspaces.push({
                    id: id,
                    name:  "dc-" + id,
                    active: true
                });
            };

            $scope.workspaces =
                [
                    { id: 1, name: "dc" ,active:true  },
                    { id: 2, name: 'dc-2' ,active:false  }
                ];

            $scope.addWorkspace = function () {
                setAllInactive();
                addNewWorkspace();
            };

            $scope.removeWorkspace = function() {
                angular.forEach($scope.workspaces, function(workspace) {
                    if(workspace.active){
                        var index = $scope.workspaces.indexOf(workspace);
                        console.log('Active Workspace id: ' + index);
                        $scope.workspaces.splice(index,1);
                    }
                });
            };
        }
    ]);

