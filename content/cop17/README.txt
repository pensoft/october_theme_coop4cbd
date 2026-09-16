COP17 section bodies
====================

Each file here is the HTML body of one Pensoft.Jumbotron record used by
pages/cop17.htm. Paste a file's contents into the record's Description field
using the rich editor's code view (< >).

  file                  jumbotron slug          page wrapper
  --------------------  ----------------------  -----------------------
  hero.htm              cop17-hero              .cop17_hero
  initiatives.htm       cop17-initiatives       .cop17_initiatives
  statement.htm         cop17-statement         .cop17_statement
  programme.htm         cop17-programme         .cop17_programme
  dark-band.htm         cop17-dark-band         .cop17_dark
  resources.htm         cop17-resources         .cop17_resources
  team.htm              cop17-team              .cop17_team
  eu-projects.htm       cop17-eu-projects       .cop17_eu_projects
  quick-links.htm       cop17-quick-links       .cop17_quick_links_bar
  newsletter.htm        cop17-newsletter        .cop17_newsletter

On each record set only Text (any label) and the Description body. Leave
Image, Button name and Action button empty - the layout does not use them.
In the page, every component is set to template3 with no background, so the
band colour comes from the page wrapper's CSS.

Image paths are absolute because the rich editor stores plain HTML and does
not run Twig - the |theme filter is not available there.
