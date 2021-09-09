# 網站連結
https://shannonhung.github.io/TWISC/




# 文件說明
- `_include` directory: Small component 
  - masthead.html : 網站header標題及logo
  - sidebar.html : 是左邊畫面，可能是profile，可能是doc
- `_variable.scss` : 
  - `$x-large: 1480px !default;` 可以設定整個頁面的最大寬度
  - `$right-sidebar-width-narrow` 可以調整sidebar寬度
  - `$sans-serif` 改字體樣式
- `_sass\minimal-mistakes\_navigation.scss` 可以調整nav相關屬性
    - `.nav__list` havor之類的控制
    - 
# 教學
## Source 
- make sure you have already read [cloudcannon](https://cloudcannon.com/community/learn/jekyll-tutorial/) before starting. 
## Install and getting started with Jekyll 
```
# Once you have done that you are ready to install the Jekyll gem. Go to your command line interface and run

$ gem install jekyll bundler

$ jekyll -v

$ jekyll new learn-jekyll

$ bundle exec jekyll serve
```
## Basic Jekyll structure
- `_posts`: where your blog posts 
- `_site`: Those file which have already build can be viewable website. ready for deployment. 
  - `assets`: CSS, JS, images files can put here

There are some other files worth mentioning too:
- `-config.yml`:  where you manage the configuration for your project, like global variables, “collections”, or default names/paths. This where a lot of customization is done.
- `Gemfile/Gemfile.lock`: how you manage any extensions to Jekyll.
### Command
- `bundle exec jekyll serve`: exe in local, and you will see your website at `http://127.0.0.1:4000/`
- `jekyll build` - when deploying your site to production, you’ll just want to build its files.
- `jekyll help` - run this if you need general command-line help, or jekyll help <command name> for more specific help.
## Liquid
### What is Liquid?
Liquid is a templating language used in Jekyll to process your site’s pages. You can add logic or using content from elsewhere. This doesn’t require any setup - we can just start using it.
### Liquid basics 
Before use Liquid in your pages, you need to add "front matter" notation at the top of your page. 
```
-—-
-—-
<!DOCTYPE html>
```
There are two type of tags:
1.`{{content}}` : for ouput content into a page. 
2. `{%if confition == ture%}` : for logic code, and logic code must also have an end statement.` {%end if%}`, `{%endfor%}`
3. `{%assign newVariableName = content of my varaible%}`: You can set variables on pages. 
### Filters
A filter is something that you can use to change strings (text) or manipulate arrays (lists of items). To use a filter, separate the content you want to filter with a `|` sign and use a filter keyword. 

[Click here for more uses](https://cloudcannon.com/community/jekyll-cheat-sheet/#keyword:cheat%20sheet)
- All uppercase: 
`{{ "uppercase" | upcase }}` = UPPERCASE
- All lowercase:
`{{ "LOWERCASE" | downcase }}` = lowercase
- Length of a string:
`{{ "How long am I?" | size }}` = 14
- Add two pieces of text together (with argument)
`{{ "Copyright " | append: "My Blog" }}` = Copyright My Blog
- Simple date formatting - international format:
`{{ "2021-01-01T00:00:00Z" | date_to_long_string }}` = 01 January 2021
### Conditions and Loops
- If
```
{% assign title = "home" %}
{% if title == "home" %}
  <h1>This is the homepage</h1>
{% elsif title == "about" %}
  <h1>This is the about page</h1>
{% else %}
  <h1>Welcome!</h1>
{% endif %}
```
- Loops: `for <varaible> in <list of item>`
```
{% assign products = "Kiwi,Tui,Kea,Karariki,Weka" | split: "," %}
<ul>
  {% for item in products %}
    <li>{{ item }}</li>
  {% endfor %}
</ul>
```
## Introduction to Jekyll front matter & YAML
- front matter is `---`
- we can write some simple YAML variable, use `key:value` notation with a colon(`:`). 
- title: key word will appear in the HTML head tag, no quotation marks are necessary for your value or text. 

> title example
```
---
# the title that will appear in the HTML head tag
title: Home
---
```
Then we can use the Home word in page. ` {{page.title}}`
```
… rest of head
{% if page.title %}
  <title>CawCannon | {{ page.title }}</title>
{% else %}
  <title>CawCannon</title>
{% endif %}
  <link rel="stylesheet" href="css/style.css">
</head>
```
### Data structures
#### Arrays
```
# vertical
birds_vertical:
  - Tui
  - Kea
  - Pukeko
  - Piwakawaka
  - Kereru
  - Weka
# inline
birds_inline: [Kiwi, Tui, Kea, Karakiri, Weka]
```
- how to display in pages
```
<!-- Display on page -->
{% for bird in page.birds_vertical %}
  {{ bird }}
{% endfor %}
```
#### Objects
We can extend arrays by “nesting” more key-value pairs to create “objects”. 
```
---
# three objects
birds:
  - name: Tui
    description: Striking songbird
    image: /images/tui.jpg
    image_alt: Striking songbird in a tree.
  - name: Kea
    description: Alpine parrot
    image: /images/kea.jpg
    image_alt: Parrot sitting in an alpine tree.
  - name: Kaka
    description: Loud, social forest parrot
    image: /images/kaka.jpg
    image_alt: Kaka parrot in a thick forest.
---
<div class="image-grid">
{% for bird in page.birds %}
  <div class="item">
    <img src="{{ bird.image }}" alt="{{ bird.image_alt }}">
    <p>Bird name: {{ bird.name }}</p>
    <p>Description: {{ bird.description }}</p>
  </div>
{% endfor %}
</div>
```
#### Multiline text in YAML/front matter
You might run into is writing text that spans multiple line. 
- use {{multiline_text | markdownify}}, otherwise, text will automatically be folded and you won’t see multiline output.
## Layout 
A pages such as head, footer and navigation.  If your site contains more than a few pages, that’s a lot of content to copy and paste - and any changes need to be made across all pages. So Jekyll gives us an easy solution to this problem-layouts.  Read more on layouts on [Jekyll’s official site](https://jekyllrb.com/docs/layouts/).

- Layouts live in the `_layouts` directory.
- The convention is to have a base template called default.html and have other layouts inherit from this as needed.

### Usage
- We can create file in `_layout`, default is `default.html`
- you can put the header, footer part (which is always repeating) in layout. Customize your own layout. 
- Use `{{content}}` text in layout. Next time, if you can set the layout key in front matter, and value is _layout which you created. The page content (below front matter part) will be filled in {{content}} in layout.

### inheritance
A layout can also be referenced within another layout. In our current layout is used in default.html, which means it will appear in all pages using it. 

Let’s create another layout called `page.html` with the hero section from default removed and pasted into it, then add front matter with layout itself pointing to default:
> layout/page.html
```
---
layout: default
---
<div class="hero">
<h1 class="hero__header dark-orange">{{ site.title }}</h1>
</div>
{{ content }}
```

> use by page
```
---
layout: page
Title: Home
---
this is my diary
```
## Includes
-  Jekyll includes allow you to break down your pages into smaller “components” like navigation, section titles, and footers.
-  The `include` tag allows you to include the content from another file stored in the `_includes` folder: 

[more detail](https://jekyllrb.com/docs/includes/)

1. for example, we create our own footer component in `_include/footer.html`
> footer.html
```
<footer class="site-footer h-card">
....
</footer>
```
1. then we can use include tage to include `_include/footer.html` in `_layout/default.html` 
> default.html
```
<body>
    <main>
    {%content%}
    </main>
    {%include footer.html%}
</body>
```
### Add some versatility - pass parameters to includes
If you want to put some variable in include compoenent, you might set `{{include.variableName}}` in include component. 

1. for example, we create our own footer component in `_include/footer.html`
> footer.html
```
<footer class="site-footer h-card">
    {{include.variableName}}
</footer>
```
1. then we can use include tag to include `_include/footer.html` in `_layout/default.html` 
> default.html
```
<body>
    <main>
    {%content%}
    </main>
    {%include footer.html variableName = "I am footer"%}
</body>
```
## Collection
- similar with post, but the date is unimportant. 

1. First, let's got to _config.yml file. This file sotres our "global" variables (accessible from any page), and we intend to make our collections global too. Add this to the `_config.yml`.

> _config.yml
```
collections:
  birds:
```
2.  Create a folder at the root of the project that matches this variable name, with an underscore -` _birds`. We can now add collection documents to this folder.

3. We need a page to show all the collection. So we create gallery.html in the root of the directory, with the following front matter.
> gallery.html
```
---
layout: default
title: Gallery
---
```

4. Get into gallery.html file. Now all we need to do is loop through our collection, which has been made a global “site” variable in our `_config.yml` file. To begin, add the following content below the front matter in gallery.html: 
> gallery.html
```
{% for bird in site.birds %}
  <span>{{ bird.title }}</span>
{% endfor %}
```
- remember to restart `bundle exec jekyll serve`
### Collections as pages
- if you set below and click the link, you will see 404 not found page. 
- Because you haven't set the collection items as independent pages yet. To do this, we will need to do three small things:
> gallery.html
```
{% for bird in site.birds %}
    <a class="preview-title" href="{{ bird.url }}">{{ bird.title }}</a>
{% endfor %}
```
1. Add a flag to our collection object in `_config.yml`. Now when Jekyll builds the site, it will create (output) pages for each item, but only basic HTML content. 
> _config.yml
```
collections:
  birds:
    output: true
```
2. Let’s create another layout - item.html - that will be used for showing each item:
> layout/item.html
```
---
layout: default
---
<div class="article-container">
    <h1 class="item-header">{{ page.title }}</h1>
        <img class="article-image" src="{{ page.image }}" alt="{{ page.image_alt }}">
        <div class="item-footer">
            <div class="item-footer__status">
                <div class="item-footer__left">
                    <p class="item-footer__bold">Conservation status:</p>
                    <p>{{ page.status }}</p>
                </div>
                <div class="item-footer__right">
                    <p class="item-footer__bold">New Zealand status:</p>
                    <p>{{ page.nz_status }}</p>
                </div>
            </div>
            <div class="item-footer__location">
                <p class="item-footer__bold">Found in:</p>
                <p>{{ page.distribution }}</p>
            </div>
        </div>
    {{ content }}
</div>
```
3. Change the layout that each collection item should use
```
<!-- Add item link here later -->
<a href="{{ bird.url }}">
```
## Jekyll Data files
Sometimes you also need supplemental data to use on pages, but not as its own page, much like from a database or API. Jekyll allows you to create data files and access them globally, just like collections.

This way you can maintain your own mini-databases, but with very little setup needs. A number of file formats are supported, including JSON, YAML, CSV (comma-separated values), and TSV (tab-separated values).

1. First, add `_data` folder in root directory. 
2. Now you can add yml, json or csv file in the folder, such as locations.yml or staff.yml
3. Now that we have our data files, we can simply access `locations.yml` through `site.data.locations`. No need for any more setup in `_config.yml`, unlike collections.

### Use case  
1. We can use it in js file.
```
<script>
  let markers = {{ site.data.locations | jsonify }};
  google.maps.event.addDomListener(window, 'load', initializeMap);
</script>
```
2. We can use it in md file 
```
<div class="contact">
    <h2 class="contact__heading">Report a sighting</h2>
    <p>If you think you've spotted an endangered species, please contact one of our friendly staff to let them know.</p>
</div>
<div class="staff">
    {% for person in site.data.staff %}
    <div class="staff-member">
        <img class="staff-member__image" src="{{ person.image }}" alt="Image of {{ person.name }}">
        <div>
            <p class="staff-member__name">{{ person.name }}</p>
            <p>Contact options: </p>
            <ul class="staff-member__contacts">
                <li><a class="option" href="#">Email</a></li>
                <li><a class="option" href="#">Facebook</a></li>
                <li><a class="option" href="#">Twitter</a></li>
            </ul>
        </div>
    </div>
    {% endfor %}
</div>
```
## Permalinks
They allow you to structure the directories of your source code different from the directories in your output.
[more info click here](https://jekyllrb.com/docs/permalinks/)
### Front Matter
you want the output url to be `/about/`. In front matter of the page you would set:
```
---
permalink: /about/
---
```

### Global
Jekyll lets you set the permalink structure globally in your `_config.yml`.You can use placeholders to your desired output. For example:
```
permalink: /:categories/:year/:month/:day/:title:output_ext
```

## Bootstrap
[GitHub source](https://github.com/twbs/bootstrap-sass)
1. install `bower install bootstrap-sass` command. This installs Bootstrap and Jquery in the bower_components folder.

2. In your _config.yml add: 
```
sass:
  # loading path from site root
  # default to _sass
  sass_dir: bower_components/bootstrap-sass/assets/stylesheets

  # style : nested (default), compact, compressed, expanded
  #         :nested, :compact, :compressed, :expanded also works
  # see http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style
  # on a typical twitter bootstrap stats are :
  # nested 138,7kB, compact 129,1kB, expanded 135,9 kB, compressed 122,4 kB
  style: compressed
```

### Javascript
If you want to use javascript, in your` _includes/footer.html` add :
```
<script src="{{ site.baseurl }}/bower_components/jquery/dist/jquery.min.js"></script>
<script src="{{ site.baseurl }}/bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
```

