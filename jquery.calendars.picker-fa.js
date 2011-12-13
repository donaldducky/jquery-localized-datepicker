/* http://keith-wood.name/calendars.html
   Farsi/Persian localisation for calendars datepicker for jQuery.
   Javad Mowlanezhad -- jmowla@gmail.com. */
(function($) {
	$.calendars.picker.regional['fa'] = {
		renderer: $.calendars.picker.defaultRenderer,
		prevText: '&#x3c;قبلي', prevStatus: 'نمايش ماه قبل',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
		nextText: 'بعدي&#x3e;', nextStatus: 'نمايش ماه بعد',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
		currentText: 'امروز', currentStatus: 'نمايش ماه جاري',
		todayText: 'امروز', todayStatus: 'نمايش ماه جاري',
		clearText: 'حذف تاريخ', clearStatus: 'پاک کردن تاريخ جاري',
		closeText: 'بستن', closeStatus: 'بستن بدون اعمال تغييرات',
		yearStatus: 'نمايش سال متفاوت', monthStatus: 'نمايش ماه متفاوت',
		weekText: 'هف', weekStatus: 'هفتهِ سال',
		dayStatus: 'انتخاب D, M d', defaultStatus: 'انتخاب تاريخ',
		isRTL: true,
    translateNumberFunction: function(num){
      var string_value = num.toString();
      var mapping = {
        0: '۰',
        1: '۱',
        2: '۲',
        3: '۳',
        4: '۴',
        5: '۵',
        6: '۶',
        7: '۷',
        8: '۸',
        9: '۹',
      };

      for (x in mapping) {
        string_value = string_value.replace(new RegExp(x, 'g'), mapping[x]);
      }

      return string_value;
    }
	};
	$.calendars.picker.setDefaults($.calendars.picker.regional['fa']);
})(jQuery);
