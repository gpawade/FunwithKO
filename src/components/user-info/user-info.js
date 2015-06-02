define(['knockout', 'text!./user-info.html'], function(ko, templateMarkup) {

  function UserInfo(params) {
    //this.message = ko.observable('Hello from the user-info component!');

    this.firstName = ko.observable('');
    this.lastName = ko.observable('');
    this. city = ko.observable('');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  UserInfo.prototype.dispose = function() { };
  
  return { viewModel: UserInfo, template: templateMarkup };

});
