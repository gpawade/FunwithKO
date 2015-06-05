define(['knockout', 'ko-validation', 'text!./user-info.html'], function(ko, koval, templateMarkup) {

  function UserInfo(params) {
    //this.message = ko.observable('Hello from the user-info component!');

    this.firstName = ko.observable('').extend({
                     required: true,
                     minLength: 3,
                     pattern: {
                          message: 'Hey this doesnt match my pattern',
                          params: '^[A-Z0-9].$'
                     }
                 });
    this.lastName = ko.observable().extend({
        required : { params: true, message:"Field Required"}
    });
    this. city = ko.observable('');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  UserInfo.prototype.dispose = function() { };
  
  return { viewModel: UserInfo, template: templateMarkup };

});
