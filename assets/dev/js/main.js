(function($) {
    'use strict';
    var box = {};

    box.openCloseMenu = function(e) {
        e.preventDefault();
        if($(this).data('action') === 'open') {
            $(this).addClass('opened').data('action', 'close');
            $('.site-header__navigation').addClass('opened');
            $('.header-navigation__menu').removeClass('slideOutLeft').addClass('slideInLeft');
            $('.header-navigation__brand').removeClass('zoomOut').addClass('zoomIn');

        } else {
            $(this).removeClass('opened').data('action', 'open');
            $('.site-header__navigation').removeClass('opened');
            $('.header-navigation__menu').removeClass('slideInLeft').addClass('slideOutLeft');
            $('.header-navigation__brand').removeClass('zoomIn');
        }
    };

    box.openSubMenu = function(e) {
        e.preventDefault();
        $('.header-navigation__submenu').addClass('fadeIn');
        console.log(e);
    };

    box.closeSubMenu = function(e) {
        e.preventDefault();
        $('.header-navigation__submenu').removeClass('fadeIn');
    };

    box.openLightBox = function(modal, e) {
        if($(e.target).closest('.site-header__navigation').hasClass('opened')) {
            $('.header-navigation-hamburg').removeClass('opened').data('action', 'open');
            $('.site-header__navigation').removeClass('opened');
            $('.header-navigation__menu').removeClass('slideInLeft').addClass('slideOutLeft');
            $('.header-navigation__brand').removeClass('zoomIn');  
        }
        $('.wrapper-lightbox').removeClass('hide');
        $(modal).removeClass('hide');
    };

    box.navLightBox = function() {
        if($(this).hasClass('continue')) {
            var goTo = $(this).data('goTo');
            $(this).closest('.modal-register').addClass('hide');
            $(goTo).removeClass('hide');
        }

        if($(this).hasClass('close')) {
            $(this)
                .closest('.modal-register').addClass('hide')
                .closest('.wrapper-lightbox').addClass('hide');
        }
    };

    box.closeLightBox = function(e) {
        if(e && e.keyCode === 27) {
            $('.modal-register')
                .addClass('hide')
                .closest('.wrapper-lightbox')
                    .addClass('hide');
        }
    };

    box.showFixedMenu = function(elem) {
        
        var scrollPos = $(document).scrollTop();
        
        if(scrollPos > box.positionInPage) {
            $(elem).addClass('header-navigation--fixed slideInDown');
        } else {
            $(elem).removeClass('header-navigation--fixed slideInDown');
        }
    };

    box.positionInPage = (function(elem) {
        return $(elem).offset().top + $(elem).outerHeight();
    }('.header-navigation'));

    box.menuIsVisibileIf = (function(elem) {
        if($(document).scrollTop() > box.positionInPage) {
            $(elem).addClass('header-navigation--fixed slideInDown');
        }
    }('.header-navigation'));

    box.navInPage = function(e) {
        e.preventDefault();
        var target = $($(this).data('target')).offset().top - $('.site-header__navigation').outerHeight();
        $('html,body').animate({scrollTop: target }, 500);
    };

    box.openCombo = function() {
        $(this).addClass('opened');
    };

    box.closeCombo = function() {
        $(this).closest('dl').removeClass('opened');
    };

    box.addEvents = (function() {
        $('.header-navigation-hamburg')
            .on('click', box.openCloseMenu);

        $('.menu-item-login')
            .on('click', box.openLightBox.bind(this, '.modal-register-form'));

        $('.modal-register__action')
            .on('click', box.navLightBox); 
        
        $('.menu-item-utility')
            .on('click', box.openSubMenu);
        
        $('.header-navigation__submenu')
            .on('mouseleave', box.closeSubMenu);

        $('.go-to')
            .on('click', box.navInPage);

        $('.register-form__combo')
            .on('click', box.openCombo)
            .on('mouseleave', 'dd', box.closeCombo);

        $(document)
            .on('keyup', box.closeLightBox)
            .on('scroll', box.showFixedMenu.bind(null, '.header-navigation'));

    }());
}(jQuery));