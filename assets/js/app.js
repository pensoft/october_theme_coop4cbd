$(window).scroll(animateNumbers);

var viewed = false;

var documentHasScroll = function() {
    return window.innerHeight <= document.body.offsetHeight;
};

var width = $(window).width();

window.addEventListener('scroll', function (e) {
    var headernavbar = document.getElementById("headernavbar");
    var logo = document.getElementById("navbar-brand");
    if(headernavbar && logo){
        if (window.scrollY > headernavbar.offsetHeight){
            var headerNavbarNav = document.querySelector('#headerNavbarNav')
            headernavbar.classList.add('scrolled');
            logo.classList.add('scrolled');
        }else{
            headernavbar.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }
    }

});

$(document).ready(function() {
    // $("nav").removeClass("no-transition");
	/* MENU */
	$('.navbar-nav').attr('id', 'menu'); // please don't remove this line
	$( '<div class="calendar-top"></div>' ).insertBefore( "#calendar" );
	$( '<div class="card-profile-top"></div>' ).insertBefore( ".card.profile.card-profile" );
	var divs = $(".card-profiles > div");
	for(var i = 0; i < divs.length; i+=2) {
		divs.slice(i, i+2).wrapAll( '<div class="col-xs" />');
	}


    if (width > 990) { // desktop
        $("#menuToggle input").on("mouseover", function () {
            this.checked = !this.checked;
            $('#menu').show();
            $('#search').hide();
            $('#menu, #menu *').css({
                'visibility': 'visible'
            });
        });


        $("#menu").on("mouseenter", function () {
            $("#menuToggle input").prop("checked", true);
            $('#search').hide();
            $('#menu, #menu *').css({
                'visibility': 'visible'
            });
        }).on("mouseleave", function () {
            if ($("#search").is(':visible')) {
                $("#menuToggle input").prop("checked", true);
            } else {
                $("#menuToggle input").prop("checked", false);
            }
        });
    }

    if (width < 990) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show();
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide();
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }

    var loggedInMenuNavbar = $('.navbar-loggedin-user');
    loggedInMenuNavbar.find('#menu').removeAttr('id');


	var headerNavbar = $('#headerNavbar');
	var width100 = $('.width100');
	var innerWidth = $('body').innerWidth();
	headerNavbar.width(innerWidth);
	width100.width(innerWidth);

    $('.nav-item').children("a").each(function(){
        if($(this).attr('data-toggle') == 'dropdown'){
            $(this).removeAttr('data-toggle')
        }
    });

    $("nav").removeClass("no-transition");


    $('body').on('click', '.work_packages .accordion-toggle, .partners_list_container .accordion-toggle, .messages .accordion-toggle, .training-head', function () {
        $('.ui-accordion-header').show();
        if ($(this).next(".accordion-content, .training-body").is(':visible')) {
            $(this).next(".accordion-content, .training-body").slideUp(300);
            $(this).children(".plusminus").removeClass('active');
        } else {
            $(this).next(".accordion-content, .training-body").slideDown(300);
            $(this).children(".plusminus").addClass('active');
        }
    });

    $('.work_packages, .accordion-content, .partners_list_container .accordion-toggle, .messages .accordion-toggle').each(function( index, value ) {
        $(value).find('a').attr( "onclick", "window.open(this.href, '_blank');" )
    });


	onHashChange();
	$(window).on("hashchange", function() {
		onHashChange();
	});

	$('.nav.nav-pills').removeAttr('id');

    if (width < 1200) { // mobile
        $('#menuToggle input[type="checkbox"]').change(function(){
            var checked = $(this).is(":checked");
            if(checked){
                $('#menu').show("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('#menu, #menu *').css({
                    'visibility': 'visible'
                });
                $('body', 'html').css({
                    'overflow': 'hidden'
                });
            }else{
                $('#menu').hide("slide", { direction: "right" }, 400);
                $('#search').hide();
                $('body', 'html').css({
                    'overflow': 'auto'
                });
            }
        });
    }

	var count = $("h1").text().length;

	$('.numbers').attr('data-aos', 'fade-up');
	$('.mission .container').attr('data-aos', 'fade-up');
	$('.vision .container').attr('data-aos', 'fade-up');
	$('.goals .container').attr('data-aos', 'fade-up');
	$('.card-img-top').attr('data-aos', 'fade-up');
	$('.logo-container').attr('data-aos', 'fade-up');
	$('.subscribe-items a').attr('data-aos', 'fade-up');
	$('.icons a').attr('data-aos', 'fade-up');
	$('.about h1.display-1').attr('data-aos', 'fade-up');
	$('h2.underline').attr('data-aos', 'fade-up');
	$('.news_column').attr('data-aos', 'fade-up');
	// $('.timeline-item').attr('data-aos', 'fade-up');

	// about page

	$('.about img').attr('data-aos', 'fade-up');

	$('.country_map').attr('data-aos', 'fade-up');
	$('.partner-item').attr('data-aos', 'fade-up');

	// media
	$('.flyer_image_container img').attr('data-aos', 'fade-up');
	$('.broshure_and_poster img').attr('data-aos', 'fade-up');
	$('.card-container').attr('data-aos', 'fade-up');
	$('.coordinator_image').attr('data-aos', 'fade-up');

	$('.see_all_partners_link').hide();

    $(".timeline_container.left .blue_line").width(function() {
        return (innerWidth - $('.container').width())/2;
    });
    $(".timeline_container.right .blue_line").width(function() {
        var more = 250;
        if($(this).parent().find('.about-what').length){
            var more = 300;
        }
        if($(this).parent().find('.jpi-with').length){
            var more = 140;
        }
        return (innerWidth - $('.container').width())/2 + more;
    });

    // Open in new tab
    $('.training-body a').attr('target', '_blank');
    
    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(/storage/app/media/working-documents-live.svg) center center no-repeat; background-size: 100px; height: 200px" href="https://fondationbiodiversite.sharepoint.com/sites/CO-OP4CBD/Documents%20partages/Forms/AllItems.aspx" target="_blank" title="Working documents (live)"></a>\n' +
        '<h3 class="card-header"><a href="https://fondationbiodiversite.sharepoint.com/sites/CO-OP4CBD/Documents%20partages/Forms/AllItems.aspx" target="_blank" title="Working documents (live)">Working documents (live)</a></h3>\n' +
        '</div>').insertAfter($('.card.internal').last());

    $('<div class="col-xs-12 col-sm-3 card internal no-border" style="margin-bottom: 15px">\n' +
        '<a class="folder-background" style="display:flex; background: url(/storage/app/media/forms.svg) center center no-repeat; background-size: 100px; height: 200px" href="/internal-repository/reporting-forms" title="Reporting forms"></a>\n' +
        '<h3 class="card-header"><a href="/internal-repository/reporting-forms" title="Forms">Reporting forms</a></h3>\n' +
        '</div>').insertAfter($('.card.internal:nth-child(5)'));

    $('body').on('click', '#mycomponentpartners .accordion-toggle, .accordion-insider-members-list .accordion-toggle', function () {
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children(".plusminus").html('<span>Members</span><span class="plus"></span>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children(".plusminus").html('<span>Members</span><span class="minus"></span>');
        }
    });

    $('<div class="mark"></div>').insertAfter($('.group-holder input'));
    
    reorderTabs();
    function reorderTabs(){
        var allDocuments = $("a[data-type='0']").detach();
        var coopPublications = $("a[data-type='3']").detach();
        var technicalBriefs = $("a[data-type='6']").detach();
        var deliverables = $("a[data-type='1']").detach();
        var externalResources = $("a[data-type='2']").detach();
    
        // Change the text of Relevant Publications to External Resources
        externalResources.text("External Resources");
    
        // Append them in the desired order
        $("#mylibraryForm").append(allDocuments)
                            .append(coopPublications)
                            .append(technicalBriefs)
                            .append(deliverables)
                            .append(externalResources);
    }

   

    // bootstrap 3 breakpoints
    const breakpoint = {
        // extra small screen / phone
        xs: 280,
        // small screen / tablet
        sm: 768,
        // medium screen / desktop
        md: 992,
        // large screen / large desktop
        lg: 1200
    };

// bootstrap 3 responsive multi column slick carousel
    if($('#slick').length){
        $('#slick').slick({
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            focusOnSelect: true,
            dots: false,
            // infinite: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '10px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    $('.library .library-item .btn.btn-primary').text('Download');

    // Initialize training corner functionality
    initializeTrainingCorner();
    
    // Initialize training carousels
    initializeTrainingCarousels();

});

function expandReadMore(el){
    var $el, $ps, $up, totalHeight;

    totalHeight = 115;

    $el = $(el) // read-more link

    $up  = $el.parent(); // coordinator_info

    if ($el.text() == "Read more") {

        $ps = $up.find("p:not('.read-more')");

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function() {
            totalHeight += $(this).outerHeight();
        });

        $up.addClass('changed');

        $el.css({
            top: totalHeight - 120
        });
        // $el.html('<a class="revert" href="" onclick="revertChanges(this);">Read less</a>');

        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 9999,
        })
            .animate({
                "height": totalHeight
            });

        //Stuff to do when btn is in the read more state
        $el.html("Read less");
        // $up.slideDown();
    } else {

        $up.removeClass('changed');

        $el.css({
            top: 53
        });
        // $el.html('<a class="revert" href="" onclick="revertChanges(this);">Read less</a>');

        $up.css({
            // Set height to prevent instant jumpdown when max height is removed
            "height": $up.height(),
            "max-height": 460,
        })
            .animate({
                "height": totalHeight
            });
        //Stuff to do when btn is in the read less state
        $el.html("Read more");

        $('html, body').animate({
            scrollTop:  $up.offset().top - $('header').height() - 300
        });

        // $up.slideUp();
    }
    // fade out read-more
    // $up.fadeOut();

    // prevent jump-down
    return false;
}


function openCop16ModalBtn(){
    setTimeout(function() {
        $(".openCop16ModalBtn").trigger("click");
    },10);
}


function animateNumbers() {
    if (isScrolledIntoView($(".numbers")) && !viewed) {
        viewed = true;
        $('.count').each(function () {
            var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1800,
                easing: 'swing',
                step: function (now) {
                    $(this).text(parseFloat(now).toFixed(size));
                }
            });
        });
    }
}


function onHashChange(){
	$("path").removeClass('active_path');
	$(".accordion-content").hide();
	var caseStudiesHashTitle = location.hash;

	if(caseStudiesHashTitle){
		var caseStudiesTitle = caseStudiesHashTitle.substring(1, caseStudiesHashTitle.length);
		$("path[title='"+caseStudiesTitle.toUpperCase()+"']").addClass('active_path');

		$('.pilots .accordion-border').each(function(){
			var title = $(this).find(".accordion-toggle .col-xs.start-xs").text().toUpperCase();
			var toggler = $(this).find(".accordion-toggle");
			if ( title.indexOf(caseStudiesTitle.toUpperCase()) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
				toggler.trigger( "click" );
			}
		});
	}
}

function encodeURIObject(data){
    return Object.keys(data).map(function (i) {
        return encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
    }).join('&');
}

function appendProfile() {
    $(document).on('profile', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item"><a href="/profile" target = "_self">Profile</a></li >';
        headerNavbarNav.find('>ul').append(li);
    });
}
function appendSignIn(){
    $(document).on('signin', function (e) {
        var headerNavbarLogin = $('#headerNavbarNav');
        var li = '<li class="nav-item sign-in"><a href="/login" target = "_self">Login</a></li >';
		headerNavbarLogin.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function appendSignOut() {
    $(document).on('signout', function (e) {
        var headerNavbarNav = $('#headerNavbarNav');
        var li = '<li class="nav-item  sign-in"><a data-request="onLogout" data-request-data="redirect: \'/\'">Logout</a></li >';
        headerNavbarNav.find('>ul').append(li);
		var menu = $('#menuToggle');
		menu.find('>ul').append(li);
    });
}

function appendSearchAndSocialMedia(){
	var liSearch = '<li class="nav-item search_field"><a href=\"javascript: void(0);\" onclick=\"showSearchForm();\"></a></li>';
	var liSocial = '<li class="nav-item social">' +
        '<a href=\"https://twitter.com/coop4cbd\" target=\"_blank\" class=\"pr p-twitter big\" target=\"_blank\"></a>' +
        '<a href=\"https://www.linkedin.com/company/co-op4cbd/\" target=\"_blank\" class=\"pr p-linkedin big\" target=\"_blank\"></a></li>';
	var menu = $('#menuToggle');
	menu.find('>ul').append(liSearch).append(liSocial);
}

function redirectAndRefresh(url){
	$(".tabs a").each(function() {
		this.href = window.location.hash;
	});
	window.open(url, '_blank');
	location.reload();
}

function isBreakpointLarge() {
    return window.innerWidth <= 991;
}


function showSearchForm(){
    $('#layout-header').toggleClass('full-width');
    $('#search').toggle();
    $('#menu').hide();
    $('nav a:not(.navbar-brand)').hide();
    $(`#google_translate_element`).hide();
}

function hideSearchForm(){
    $('#layout-header').toggleClass('full-width');
    $('#search').hide();
    $('#menu').show();
    $('nav a').show();
    $(`#google_translate_element`).show();
}

function requestFormPartners() {
	$('#myPartnersForm').on('click', 'a', function () {
		var $form = $(this).closest('form');
		$form.request();
	})
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	if($(elem).height()){
		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	return;

}



function scrollDown(){
	var element = $('#layout-content');
	$("html, body").animate({ scrollTop: element.offset().top - 190 }, 500);
}

function onMapCustomPartners(code) {
		$('.partner-item').removeClass('active_partner');
		$.request('onPartners', {
			update: { 'components/partners_list': '#mycomponentpartners',
			},
			data: {
                code: code
			},
		}).then(response => {
            $('html, body').animate({
                scrollTop: $("#mycomponentpartners").offset().top - 200
            }, 1000);
            var tooltip = document.getElementById("tooltip");
            tooltip.classList.remove("active");
		});
}


function handleCustomSVGMapMouseMove(event) {
    var countryCode = $(event.target).attr('country_code');
    var title = $(event.target).attr('title');
    var tooltip = document.getElementById("tooltip");
    if (!countryCode) {
        countryCode = $(event.target).parent().attr('country_code');
        title = $(event.target).parent().attr('title');
    }

    switch (countryCode) {
        case "AF":
        case "AX":
        case "AL":
        case "DZ":
        case "AS":
        case "AD":
        case "AO":
        case "AI":
        case "AQ":
        case "AG":
        case "AR":
        case "AM":
        case "AW":
        case "AT":
        case "AZ":
        case "BS":
        case "BH":
        case "BD":
        case "BB":
        case "BY":
        case "BE":
        case "BZ":
        case "BJ":
        case "BM":
        case "BT":
        case "BO":
        case "BQ":
        case "BA":
        case "BW":
        case "BV":
        case "BR":
        case "IO":
        case "BN":
        case "BG":
        case "BF":
        case "BI":
        case "KH":
        case "CM":
        case "CV":
        case "KY":
        case "CF":
        case "TD":
        case "CL":
        case "CN":
        case "CX":
        case "CC":
        case "CO":
        case "KM":
        case "CG":
        case "CD":
        case "CK":
        case "CR":
        case "CI":
        case "HR":
        case "CU":
        case "CW":
        case "CY":
        case "CZ":
        case "DK":
        case "DJ":
        case "DM":
        case "DO":
        case "EC":
        case "EG":
        case "SV":
        case "GQ":
        case "ER":
        case "EE":
        case "ET":
        case "FK":
        case "FO":
        case "FI":
        case "FJ":
        case "GF":
        case "PF":
        case "TF":
        case "GA":
        case "GM":
        case "GE":
        case "GH":
        case "GI":
        case "GR":
        case "GL":
        case "GD":
        case "GP":
        case "GU":
        case "GT":
        case "GG":
        case "GN":
        case "GW":
        case "GY":
        case "HT":
        case "HM":
        case "VA":
        case "HN":
        case "HK":
        case "IS":
        case "ID":
        case "IR":
        case "IQ":
        case "IM":
        case "IL":
        case "IT":
        case "JM":
        case "JP":
        case "JE":
        case "JO":
        case "KZ":
        case "KE":
        case "KI":
        case "KP":
        case "KR":
        case "KW":
        case "KG":
        case "LA":
        case "LV":
        case "LB":
        case "LS":
        case "LR":
        case "LY":
        case "LI":
        case "LT":
        case "LU":
        case "MO":
        case "MK":
        case "MG":
        case "MW":
        case "MY":
        case "MV":
        case "ML":
        case "MT":
        case "MH":
        case "MQ":
        case "MR":
        case "MU":
        case "YT":
        case "MX":
        case "FM":
        case "MD":
        case "MC":
        case "MN":
        case "ME":
        case "MS":
        case "MA":
        case "MZ":
        case "MM":
        case "NA":
        case "NR":
        case "NP":
        case "NC":
        case "FR":
        case "IN":
        case "NL":
        case "HU":
        case "IE":
        case "CA":
        case "NZ":
        case "DE":
        case "NI":
        case "NE":
        case "NG":
        case "NU":
        case "NF":
        case "MP":
        case "NO":
        case "OM":
        case "PK":
        case "PW":
        case "PS":
        case "PA":
        case "PG":
        case "PY":
        case "PE":
        case "PH":
        case "PN":
        case "PT":
        case "PR":
        case "QA":
        case "RE":
        case "RU":
        case "RW":
        case "BL":
        case "SH":
        case "KN":
        case "LC":
        case "MF":
        case "PM":
        case "VC":
        case "WS":
        case "SM":
        case "ST":
        case "SA":
        case "SN":
        case "RS":
        case "SC":
        case "SL":
        case "SG":
        case "SX":
        case "SK":
        case "SI":
        case "SB":
        case "SO":
        case "ZA":
        case "GS":
        case "LK":
        case "SD":
        case "SR":
        case "SJ":
        case "SZ":
        case "SE":
        case "SY":
        case "TW":
        case "TJ":
        case "TZ":
        case "TH":
        case "TL":
        case "TG":
        case "TK":
        case "TO":
        case "TT":
        case "TN":
        case "TR":
        case "TM":
        case "TC":
        case "TV":
        case "UG":
        case "UA":
        case "AE":
        case "UM":
        case "UY":
        case "UZ":
        case "VU":
        case "VE":
        case "VN":
        case "VG":
        case "VI":
        case "WF":
        case "EH":
        case "YE":
        case "ZM":
        case "ZW":
        case "US":
        case "GB":
        case "ES":
        case "AU":
        case "RO":
        case "CH":
        case "PL":
            break;
        default:
            return tooltip.classList.remove("active");
    }

    var x = event.clientX;
    var y = event.clientY;

    tooltip.style.left = (x + 20) + "px";
    tooltip.style.top = (y - 20) + "px";

    tooltip.innerHTML = title;
    tooltip.classList.add("active");

}


function onCustomPartners(code) {
    $('.partner-item').removeClass('active_partner');
    $.request('onPartners', {
        update: { 'components/partners_list': '#mycomponentpartners',
        },
        data: {
            code: code
        },
    }).then(response => {
        $('html, body').animate({
            scrollTop: $("#mycomponentpartners").offset().top - 200
        }, 1000);
        var tooltip = document.getElementById("tooltip");
        tooltip.classList.remove("active");
    });
}




function hideMe(elem){
    $(elem).parent().hide();
}

function fetchMails(i, searchStr){
    // $('.group_mailing_list').hide();
    if($('.group_mailing_list_'+i).is(":visible")){
        $('.group_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchMailingList', {
            update: { 'mailing_list': '#mailing_list_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.group_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.mailing_list);
        });
        $('.group_mailing_list').hide();
        $('.group_mailing_list_'+i).show();
    }

}


function fetchSingleMail(i, searchStr){
    if($('.single_mailing_list_'+i).is(":visible")){
        $('.single_mailing_list_'+i).hide();
    }else{
        //groups
        $.request('onFetchSingleMail', {
            update: { 'individual_email': '#individual_tooltip_content_'+i,
            },
            data: {
                search_str: searchStr
            },
        }).then(response => {
            $('.single_mailing_list_'+i).html('<a class="close-btn" onclick="hideMe(this)">X</a>' + response.individual_email);
        });
        $('.single_mailing_list').hide();
        $('.single_mailing_list_'+i).show();
    }
}

function initMailingTooltip(){
    var searchStr = '';
    $('.group-holder').eq(0).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $(this).parent().css('display', 'inline-grid');
        $('<img src="/storage/app/media/CMS_icons_groups.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_'+i+'" onclick="fetchMails('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $('<div class="group_mailing_list group_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());


    });
    $('.group-holder').eq(1).find('.inputWithTooltip span').each(function(i, obj) {
        searchStr = $.trim($(obj).text());
        $('<img src="/storage/app/media/CMS_icons_individuals.svg" style="max-width: 16px; margin-left: 5px;" class="icon mailing_list_tooltip_individuals_'+i+'" onclick="fetchSingleMail('+i+', \'' + searchStr + '\')" />').insertAfter($(this).parent());
        $(this).parent().css('display', 'inline-grid');
        $('<div class="single_mailing_list single_mailing_list_' + i + '" style="display: none;"></div>').insertAfter($(this).parent());
    });

    $('.group-holder').eq(0).prepend( "<p style='margin-left: 10px; width: 100%;'>Prior to sending group emails, please make sure that all individuals you want to contact have been included in the respective group by clicking on the group icon.</p><p></p>" );
    $('.group-holder').eq(1).prepend( "<p style='margin-left: 10px; width: 100%;'>To see each person’s email, click on the account icon.</p><p></p>" );

}

function initializeTrainingCorner() {
    // Check if we're on the training corner page
    if (!$('.training-container-records').length) {
        return;
    }

    // Initialize Selectize on all filter dropdowns
    $('.filter-dropdown').each(function() {
        var $select = $(this);
        var placeholderText = $select.find('option[selected][disabled]').text();
        $select.selectize({
            allowEmptyOption: true,
            placeholder: placeholderText,
            onChange: function(value) {
                filterTrainings();
            }
        });
    });

    // Search functionality
    $('#trainingSearch').on('input', function() {
        searchTrainings();
    });

    $('#searchBtn').on('click', function() {
        searchTrainings();
    });
}

function searchTrainings() {
    var query = document.getElementById('trainingSearch').value;
    var filters = getActiveFilters();
    
    $.request('onFilterTrainings', {
        data: { 
            query: query,
            session: filters.session,
            audience: filters.audience,
            topic: filters.topic,
            keywords: filters.keywords
        },
        complete: function(data) {
            // Reinitialize carousels after DOM update is complete
            setTimeout(function() {
                if (typeof initializeTrainingCarousels === 'function') {
                    initializeTrainingCarousels();
                }
            }, 100);
        }
    });
}

function filterTrainings() {
    var query = document.getElementById('trainingSearch').value;
    var filters = getActiveFilters();
    
    $.request('onFilterTrainings', {
        data: { 
            query: query,
            session: filters.session,
            audience: filters.audience,
            topic: filters.topic,
            keywords: filters.keywords
        },
        complete: function(data) {
            // Reinitialize carousels after DOM update is complete
            setTimeout(function() {
                if (typeof initializeTrainingCarousels === 'function') {
                    initializeTrainingCarousels();
                }
            }, 100);
        }
    });
}

function getActiveFilters() {
    var sessionValue = $('#filter-session')[0].selectize ? $('#filter-session')[0].selectize.getValue() : '';
    var audienceValue = $('#filter-audience')[0].selectize ? $('#filter-audience')[0].selectize.getValue() : '';
    var topicValue = $('#filter-topic')[0].selectize ? $('#filter-topic')[0].selectize.getValue() : '';
    var keywordsValue = $('#filter-keywords')[0].selectize ? $('#filter-keywords')[0].selectize.getValue() : '';
    
    return {
        session: (sessionValue && sessionValue !== 'Training session' && sessionValue !== 'all') ? sessionValue : '',
        audience: (audienceValue && audienceValue !== 'Target audience' && audienceValue !== 'all') ? audienceValue : '',
        topic: (topicValue && topicValue !== 'Topic' && topicValue !== 'all') ? topicValue : '',
        keywords: (keywordsValue && keywordsValue !== 'Keywords' && keywordsValue !== 'all') ? keywordsValue : ''
    };
}

function initializeTrainingCarousels() {
    // Destroy existing carousels first to avoid conflicts
    $('.training-carousel-slick').each(function() {
        if ($(this).hasClass('slick-initialized')) {
            $(this).slick('unslick');
        }
    });

    // Initialize Slick carousel for training carousels
    if ($('.training-carousel-slick').length) {
        $('.training-carousel-slick').slick({
            slidesToShow: 2.3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

        // Remove any existing click handlers to avoid duplicates
        $('.training-carousel-arrows').off('click', '.training-carousel-prev, .training-carousel-next');

        // Custom arrow controls below carousel
        $('.training-carousel-arrows').each(function() {
            var $arrows = $(this);
            var $carousel = $arrows.siblings('.training-carousel-slick');
            $arrows.find('.training-carousel-prev').off('click').on('click', function() {
                $carousel.slick('slickPrev');
            });
            $arrows.find('.training-carousel-next').off('click').on('click', function() {
                $carousel.slick('slickNext');
            });
        });
    }
}

function init() {
    window.addEventListener('resize', function () {
        if (isBreakpointLarge()) {
            $('#card-carousel').slick('unslick');
        } else {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
             }
        }
        // keepFooter(documentHasScroll());

    });
    document.addEventListener('DOMContentLoaded', function () {
        appendTranslate()

        if (!isBreakpointLarge()) {
            if (typeof cardCarousel === 'function') {
                cardCarousel({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplay: true,
                    autoplaySpeed: 6000,
                    prevArrow: '<i class="slick-prev pr p-back"/>',
                    nextArrow: '<i class="slick-next pr p-forward"/>',
                });
            }
        }
		appendSearchAndSocialMedia()

		// requestFormLibrary()
		// requestFormPartners()
        // keepFooter(documentHasScroll());

    });
    // appendProfile()
    appendSignIn()
    appendSignOut()
}


function handlePilotsSVGMapMouseMove(event) {
	var title = $(event.target).attr('title');
	var tooltip = document.getElementById("tooltip");
	if (!title) {
		title = $(event.target).parent().attr('title');
	}

	switch (title) {
		case 'Salisbury Plain':
		case 'French Mediterranean natural reserves':
		case 'Friedeburg':
		case 'LTER Petrohan':
		case 'Mols Bjerge National Park':
		case 'Oostvaardersplassen Nature Reserve':
		case 'Island of Comino and surrounding islets':
			break;
		default:
			return tooltip.classList.remove("active");
	}

	var x = event.clientX;
	var y = event.clientY;

	tooltip.style.left = (x + 20) + "px";
	tooltip.style.top = (y - 20) + "px";

	tooltip.innerHTML = $(event.target).attr('title');
	tooltip.classList.add("active");

}

function appendTranslate() {
    var screnWidth = $(window).width();
    if(screnWidth < 1025) {
        var translateElement = $('#google_translate_element');
        var menu = $('#menuToggle');
        menu.find('>ul').append(translateElement);
    }
}

function onPilots(pTitle) {
	// $("path").removeClass('active_path');
	var tooltip = document.getElementById("tooltip");
	tooltip.classList.remove("active");
	if(!$("path[title='"+pTitle+"']").hasClass('active_path')){
        $("path[title='"+pTitle+"']").addClass('active_path');

        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && !toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
                $('html, body').animate({
                    scrollTop: toggler.parent().offset().top - 150
                }, 500);
            }
        });
    }else{
        $("path[title='"+pTitle+"']").removeClass('active_path');
        $('.accordion-border').each(function(){
            var title = $(this).find(".accordion-toggle .col-xs.start-xs").text();
            var toggler = $(this).find(".accordion-toggle");
            if ( title.indexOf(pTitle) >= 0 && toggler.next(".accordion-content").is(':visible') ){
                toggler.trigger( "click" );
            }
        });
    }

}

init()
