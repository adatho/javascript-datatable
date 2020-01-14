# Javascript Datatable
> Version 0.1.0

A simple datatable written in plain javascript.

## Usage
You need to setup your table like the following example (or see the index.html)

```
<table id="datatable" class="datatable">
      <thead>
        <tr>
          <td>Head Column 1</td>
          <td>Head Column 2</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Apple</td>
          <td>Green</td>
        </tr>
        <tr>
          <td>Grapes</td>
          <td>Green</td>
        </tr>
        <tr>
          <td>Orange</td>
          <td>Orange</td>
        </tr>
        <tr>
          <td>Banana</td>
          <td>Yellow</td>
        </tr>
        <tr>
          <td>Cherry</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
```

The `<thead></thead>` and `<tbody></tbody>` are required.

To enable the datatable add following code to your html file:

```
  <script src="./dist/datatable.js"></script>
    <script>
      window.onload = function() {
        const datatable = new Datatable("#datatable", "#search")
        datatable.enableFilter();
        datatable.enableSort();
      }
    </script>
```

## Included features
- filter the html table
- sort the table with a click on the headers

## Todo
- Documentation
- Sourcecode comments
- Table row details
- Maybe: ajax
- Maybe: dynamic table building (i mostly use this on SSR projects)

## Development
There is a _gulp_ setup i use to develop this project. It supports the following commands:

`gulp js` compiles the javascript files from /src/js to /dist

`gulp css` compiles the sass/scss files from /src/scss to /dist

`gulp watcher` enables a setup with file watchers for css and js and enables browsersync to get things a little bit easier

## License
Beerware
written by Thomas Adamek (_adatho_)

## Thank you!
Thanks to all the other projects that i can rely on to create the stuff i need do get my work done!
