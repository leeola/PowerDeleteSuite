javascript:(function () {var str = '<script id="pd-script" src="https://rawgit.com/j0be/PowerDeleteSuite/master/powerdeletesuite.js" />'; if ($('#pd-script').length === 0) {$('head').append(str); } else {$('#pd-script').replaceWith(str); }})();