table2chart
=======================
This is a plugin MooTools that generates charts from accessible data tables. So, you can take a simple, valid and accessible data table
and it gets automatically converted to a pie chart. Simply add the script to the end of the body and it'll converts all the table
with a class called 'toChart'. 
You can define the size and the colour within the attribute class of the table (like: class="toChart size700x300 color29b34f").

![Screenshot](http://farm5.static.flickr.com/4093/4863355714_95a08a2074_z.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.
       
       #HTML
       <script type="text/javascript" src="mootools.js"></script>
       <script type="text/javascript" src="table2chart.js"></script>


In your HTML source: 
       <table class="toChart size700x300 color29b34f" summary="Browsers for this site, 29 May 2010">
         <thead><tr><th>Browser</th><th>Percent</th></tr></thead>
         <tbody>
           <tr><td>MSIE</td><td>20</td></tr>
           <tr><td>FireFox</td><td>100</td></tr>
           <tr><td>Camino</td><td>70</td></tr>
           <tr><td>Opera</td><td>90</td></tr>
           <tr><td>Safari</td><td>90</td></tr>
        </tbody>
      </table>


Add the script to the end of the body:

       #JS 
       <script type="text/javascript">
         new Table2Chart(); 
       </script>

OR  wait until dom is ready

      #JS 
      <script type="text/javascript">
      window.addEvent('domready',function(){
         new Table2Chart();   
      });  
      </script>


Dependencies

      MooTools Core 1.3
