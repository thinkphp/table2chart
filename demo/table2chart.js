/*
---
description: Generating charts from accessible data tables. Using this MooTools plugin you can take a simple, valid and accessible data table and it gets automatically converted to a pie chart. Simply add the script to the end of the body and it'll convert all tables with a class called 'toChart'. You can define the size and the colour.

authors:
  - Adrian Statescu (http://thinkphp.ro)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - table2chart
...
*/

var Table2Chart = new Class({
    /* implements options */
    Implements: Options,
    /* options */
    options: {
        triggerClass: 'toChart',
        chartClass: 'fromTable',
        styleChart: 'table2chart.css', 
        hiddenClass: 'hidden',
        chartColor: '339933',
        chartSize: '450x150',
        sizeCheck: /\s?size([^\s]+)/,
        colorCheck: /\s?color([^\s]+)/
    },
    /* constructor of class - initialize */
    initialize: function(options) {
         this.setOptions(options);
         this.addStyle();
         var tables = $$('table');
         for(var i=0;tables[i];i++) {
             var t = tables[i];
             var c = tables[i].className;
             var data = [];
             var labels = [];
             if(c.indexOf(this.options.triggerClass) !== -1) {
                var size = this.options.sizeCheck.exec(c);
                    size = size ? size[1] : this.options.chartSize;
                var color = this.options.colorCheck.exec(c);
                    color = color ? color[1] : this.options.chartColor;
                var chartsrc = 'http://chart.apis.google.com/chart?cht=p3&chco=' + color + '&chs=' + size + '&chd=t:';
                var tds = t.getElementsByTagName('tbody')[0].getElementsByTagName('td');
                    for(var j=0;tds[j];j+=2) {
                        labels.push(tds[j].innerHTML +  '(' + tds[j+1].innerHTML + ')');
                        data.push(tds[j+1].innerHTML);
                    } 
                    chartsrc += data.join(",") + '&chl=' + labels.join("|");  
                var alt = t.get('summary');   
                    t.addClass(this.options.hiddenClass);
                    new Element('img',{src: chartsrc, alt: alt, 'class': this.options.chartClass}).inject(t,'before');
             }    
         }//end for
    },
    addStyle: function() {
      var head = $$('head')[0];
      var style = document.createElement('link');
          style.setAttribute('rel','stylesheet');
          style.setAttribute('type','text/css');
          style.setAttribute('href',this.options.styleChart);
          document.getElementsByTagName('head')[0].insertBefore(style,head.firstChild);
    }
});