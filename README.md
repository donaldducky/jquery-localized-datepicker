jQuery Localized Datepicker
===========================
For more info, see my blog post here:
[http://pyjamacoder.com/2011/12/12/jquery-datepicker-fully-localized](http://pyjamacoder.com/2011/12/12/jquery-datepicker-fully-localized)

Modification to jQuery Calendars datepicker to:
1. convert numbers to localized numbers
2. populate a secondary field with the Gregorian value
3. minor change to 'disable' keyboard input for the text field

1) Converting localized numbers
-------------------------------
Using `/js/jquery.calendars/jquery.calendars.picker.js`, a `translateNumberFunction` option can be passed in the localization file as follows:

    // jquery.calendars.picker-fa.js
    (function($) {
      $.calendars.picker.regional['fa'] = {
      /* other options */
      ...
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

If no function is provided, no conversion will be done.

2) Populating a secondary field
-------------------------------
If the calendarspicker input has an attribute `data-gregorian-field`, the selector provided in that attribute will get the Gregorian date value inserted.

    <!-- the form element that brings up the date picker and shows the localized date -->
    <input class="calendarspicker" type="input" data-gregorian-field="due_date" />
    <!-- the actual value that gets passed along the form post to the backend -->
    <input name="due_date" type="hidden" />

This is so a 'normal' date can be easily processed in the backend from a form submission, instead of having to jump through hoops to convert between calendars and languages.

3) Disabling keyboard input
---------------------------
Another optional parameter, to disable keyboard input for the input field, is provided.

    $(function(){
      $('.calendarspicker').calendarsPicker({
        calendar: $.calendars.instance('persian', 'fa'),
        disableInput: true
      });
    });


Original code from:
===================
http://keith-wood.name/calendars.html

The initial commit is v 1.1.4 of the jQuery Calendars package.
