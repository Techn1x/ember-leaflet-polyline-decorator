/*jshint node:true*/
module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject('Leaflet.PolylineDecorator', 'bbecquet/Leaflet.PolylineDecorator#^leaflet-0.7.2');
  }
};