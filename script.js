var lastest_edition = "1";

var lang = "en";

var languages = {
    "en": "English",
    "de": "Deutsch",
    "fr": "Français",
    "es": "Español"
};

var l10n = {
    "en": {
        "draftEdition": "Draft edition",
        "draftNotice": "This edition of the guide is a work in progress.<br> Please\
            create <a href='https://github.com/fireproof-storage/fireproof-guide/pulls'>a \
            pull request</a> or <a href='https://github.com/fireproof-storage/fireproof-guide/issues'>\
            report an issue</a> for any corrections or suggestions you may have.",
        "edition": "Edition",
        "editionNotice": "This is an outdated edition of the guide. Please use\
            the <a href='%s'>latest edition</a> for more up-to-date\
            information.",
        "footer": "A comprehensive guide to <a href='https://fireproof.storage/'>Fireproof</a> by\
            <a href='https://twitter.com/jchris'>J. Chris Anderson</a> and the Fireproof community.\
            <br>Join us on <a href='https://discord.gg/mv3CmqjQhd'>Discord</a> for discussions and support.",
        "home": "Home",
        "nextPage": "Next Page",
        "prevPage": "Previous Page",
        "search": "Search",
        "title": "Fireproof <span>The Definitive Guide</span>",
    },
    "de": {
        "draftEdition": "Entwurf",
        "draftNotice": "Diese Ausgabe der Anleitung ist noch in Arbeit.<br> Bitte\
            erstellen Sie <a href='https://github.com/fireproof-storage/fireproof-guide/pulls'>einen \
            Pull Request</a> oder <a href='https://github.com/fireproof-storage/fireproof-guide/issues'>\
            melden Sie ein Problem</a> für Korrekturen oder Vorschläge.",
        "edition": "Ausgabe",
        "editionNotice": "Dies ist eine veraltete Ausgabe der Anleitung. Bitte nutzen\
            Sie die <a href='%s'>aktuelle Ausgabe</a> für aktuellere\
            Informationen.",
        "footer": "Eine umfassende Anleitung zu <a href='https://fireproof.storage/'>Fireproof</a> von\
            <a href='https://twitter.com/jchris'>J. Chris Anderson</a> und der Fireproof-Community.\
            <br>Besuchen Sie uns auf <a href='https://discord.gg/mv3CmqjQhd'>Discord</a> für Diskussionen und Support.",
        "home": "Startseite",
        "nextPage": "Nächste Seite",
        "prevPage": "Vorherige Seite",
        "search": "Suchen",
        "title": "Fireproof <span>Die Definitive Anleitung</span>",
    },
    "fr": {
        "draftEdition": "Version préliminaire",
        "draftNotice": "Cette édition du guide est en cours d'élaboration.<br> Veuillez\
            créer <a href='https://github.com/fireproof-storage/fireproof-guide/pulls'>une \
            pull request</a> ou <a href='https://github.com/fireproof-storage/fireproof-guide/issues'>\
            signaler un problème</a> pour toute correction ou suggestion.",
        "edition": "Édition",
        "editionNotice": "Ceci est une édition obsolète du guide. Veuillez utiliser\
            la <a href='%s'>dernière édition</a> pour des informations\
            plus à jour.",
        "footer": "Un guide complet de <a href='https://fireproof.storage/'>Fireproof</a> par\
            <a href='https://twitter.com/jchris'>J. Chris Anderson</a> et la communauté Fireproof.\
            <br>Rejoignez-nous sur <a href='https://discord.gg/mv3CmqjQhd'>Discord</a> pour les discussions et le support.",
        "home": "Accueil",
        "nextPage": "Page suivante",
        "prevPage": "Page précédente",
        "search": "Rechercher",
        "title": "Fireproof <span>Le Guide Définitif</span>",
    },
    "es": {
        "draftEdition": "Borrador",
        "draftNotice": "Esta edición de la guía está en desarrollo.<br> Por favor\
            crea <a href='https://github.com/fireproof-storage/fireproof-guide/pulls'>un \
            pull request</a> o <a href='https://github.com/fireproof-storage/fireproof-guide/issues'>\
            reporta un problema</a> para cualquier corrección o sugerencia que tengas.",
        "edition": "Edición",
        "editionNotice": "Esta edición puede no estar actualizada. Visita la\
            <a href='%s'>edición actualizada</a> para obtener más información.",
        "footer": "Una guía completa de <a href='https://fireproof.storage/'>Fireproof</a> por\
            <a href='https://twitter.com/jchris'>J. Chris Anderson</a> y la comunidad Fireproof.\
            <br>Únete a nosotros en <a href='https://discord.gg/mv3CmqjQhd'>Discord</a> para discusiones y soporte.",
        "home": "Inicio",
        "nextPage": "Página siguiente",
        "prevPage": "Página anterior",
        "search": "Buscar",
        "title": "Fireproof <span>La Guía Definitiva</span>",
    }
};

var scripts = [
    "http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js",
    "https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/jquery-ui.min.js",
    "script/all/jquery.sausage.js",
    "http://www.google-analytics.com/ga.js"
];

for(i = 0; i < scripts.length; i++) {
    document.write("<script src='" + scripts[i] + "'></script>");
}

var condcoms = [
    "<!--[if lte IE 8]><link rel='stylesheet' href='../style/all/lte/ie8.css'><![endif]-->",
    "<!--[if lt IE 8]><link rel='stylesheet' href='../style/all/lt/ie8.css'><![endif]-->"
];

for(i = 0; i < condcoms.length; i++) {
    document.write(condcoms[i]);
}

var urls = [
    [".*/editions/([0-9]+)/([a-z]{2})/([a-z]+).html", "build_edition"],
    [".*/draft/([a-z]+).html", "build_draft"],
    [".*/index.html", "build_index"]
];

function check_flag() {
    if ($("body").hasClass("complete")) {
        throw "Document processing is already complete.";
    }
}

function raise_flag() {
    $("body").addClass("complete");
}

function get_header() {
    return '\
      <div class="page_header">\
        <h1 class="logo">\
          <a href="#" title="home">'+l10n[lang].title+'</a>\
        </h1>\
        <div class="search_box">\
          <form class="search" action="http://www.google.com/search">\
            <input type="hidden" name="as_sitesearch" value="guide.fireproof.storage">\
            <input type="text" name="as_q" value="" class="search_field">\
            <input type="submit" value="'+l10n[lang].search+'" class="search_btn" />\
          </form>\
        </div>\
      </div>\
    ';
}

function get_footer() {
    return '\
      <div class="footer">\
        <div class="container"><p>'
          +l10n[lang].footer+
        '</p></div>\
      </div>\
    ';
}

function template() {
    var contents = $("body").contents();
    if ($(".home").length) {
        $("body").html('\
          <div class="container">\
            ' + get_header() + '\
            <div class="body">\
            </div>\
          </div>\
          ' + get_footer() + '\
        ');
    } else {
        $("body").html('\
          <div class="container">\
            ' + get_header() + '\
            <div class="notice"></div>\
            <div class="inner wrap">\
              <div class="sidebar">\
              </div>\
              <div class="content body">\
              </div>\
              <div class="content_footer">\
              </div>\
            </div>\
          </div>\
          ' + get_footer() + '\
        ');
    }
    $("div.body").html(contents);
    $("div.buy").html(
        '<iframe id="buy" scrolling="no"></iframe>'
    );
    $("#buy").load(function() {
        $("iframe").contents().find("a").attr("target", "_blank");
    });
    $("#buy").attr("src", "buy.html");
}

function link_logo(url) {
    $(".logo a").attr("href", url);
}

function add_notice(text) {
    $(".notice").append(text);
}

function add_notice_draft() {
    add_notice('<p class="inner info_bubble">'+l10n[lang].draftNotice+'</p>');
}

function add_notice_edition(edition) {
    href = document.location.href.replace(
        "/editions/" + edition + "/", "/editions/" + lastest_edition + "/"
    );
    notice = l10n[lang].editionNotice.replace("%s",href);
    if (edition != lastest_edition) {
        add_notice('<p class="inner info_bubble">'+l10n[lang].editionNotice+'</p>');
    }
}

function add_prev_link() {
    prev_url = $("link/[rel='prev']").attr("href");
    if (prev_url) {
        // .sidebar, .content_footer
        $(".sidebar").append(
            "<h3><a href='" + prev_url + "'>"+l10n[lang].prevPage+"</a></h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3 class='disabled'>"+l10n[lang].prevPage+"</h3>"
        );
    }
}

function add_next_link() {
    next_url = $("link/[rel='next']").attr("href");
    if (next_url) {
        // .sidebar, .content_footer
        $(".sidebar").append(
            "<h3><a href='" + next_url + "'>"+l10n[lang].nextPage+"</a></h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3 class='disabled'>"+l10n[lang].nextPage+"</h3>"
        );
    }
}

function add_toc() {
    var old_depth = 0;
    var html = "";
    $("*/[id!='']").each(function(index) {
        var id = $(this).attr("id");
        var name = $(this)[0].nodeName;
        var text = $(this).text();
        if (name.length != 2 || name.slice(0, 1) != "H") {
            return;
        }
        var new_depth = name.slice(1,2);
        if (new_depth > old_depth) {
            html += "<ul>";
        } else if (new_depth < old_depth) {
            html += "</li></ul></li>";
        } else {
            html += "</li>";
        }
        html += "<li><a href='#" + id + "'>" + text + "</a>";
        old_depth = new_depth;
    });
    html += "</li></ul>";
    $(".sidebar").append("<h3>"+l10n[lang].home+"</h3>");
    $(".sidebar").append(html);
}

function build() {
    for(i = 0; i < urls.length; i++) {
        var matches = document.location.href.match(urls[i][0])
        if (matches) {
            window[urls[i][1]](matches);
            break;
        }
    }
}

function build_edition(matches) {
    var edition = matches[1];
    var language = languages[matches[2]];
    var page = matches[3];
    var edition_text = l10n[lang].edition + " " + edition + " (" + language + ")";
    link_logo("../../../index.html");
    add_notice_edition(edition);
    $(".sidebar").append("<h3><a href='../../../index.html'>"+l10n[lang].home+"</a></h3>");
    if (page == "index") {
        $(".sidebar").append(
            "<h3>" + edition_text + "</h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3><a href='index.html'>" + edition_text + "</a></h3>"
        );
    }
    add_prev_link();
    add_next_link();
    add_toc();
}

function build_draft(matches) {
    var page = matches[1];
    link_logo("../index.html");
    add_notice_draft();
    $(".sidebar").append("<h3><a href='../index.html'>"+l10n[lang].home+"</a></h3>");
    if (page == "index") {
        $(".sidebar").append(
            "<h3>"+l10n[lang].draftEdition+"</h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3><a href='index.html'>"+l10n[lang].draftEdition+"</a></h3>"
        );
    }
    add_prev_link();
    add_next_link();
    add_toc();
}

function build_index(matches) {
    link_logo("index.html");
}

function autolink() {
    $("*/[id!='']").wrap(function() {
        return "<a class='anchor' href='#" + $(this).attr("id") + "' />";
    });
}

function chop() {
    var $content = $(".content");
    var $sections = $("<div/>");
    var $as = $content.find("a.anchor");
    var j = -1;
    $as.each(function(i, el) {
        $sections.append("<section/>"); 
    });
    $content.children().each(function(i, el) {
        var $el = $(el);
        var $section;
        if ($el.hasClass("anchor")) {
            j++;
        }
        $section = $sections.find("section").eq(j) || $sections;
        $section.append($(el).clone());
    });
    $content.html($sections);
}

function sausage() {
    if ($("section").length < 1) {
        return;
    }
    $(window).sausage({
        page: "section",
        content: function(i, $page) {
            return "<span class='sausage-span'>"
                + $page.find(".anchor").first().text()
                + "</span>";
        }
    });
}

function get_lang() {
    var matches = document.location.href.match(urls[0][0]);
    if (matches && matches.length > 2) {
        lang = matches[2];
    } else {
        lang = "en";
    }
}

function track() {
    _gat._getTracker("UA-17867702-1")._trackPageview();
}

function access(evt){
    if (evt.shiftKey || evt.altKey || evt.ctrlKey || evt.metaKey) return;
    prevNext=document.getElementsByTagName("link");
    if(evt.keyCode==37){location=prevNext[1].href}
    if(evt.keyCode==39){location=prevNext[2].href}
}

document.onready = function() {
    document.documentElement.addEventListener("keydown", access, true)
    try {
        check_flag();
        raise_flag();
        get_lang();
        template();
        build();
        autolink();
        if ($(".stage.home").length < 1) {
          chop();
          sausage();
        }
        track();
    } catch (error) {
        // uh oh
    }
}
