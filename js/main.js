"use strict";
$(function() {
    let $container = $('.tr-cp-mainimg'),
        shopNowURL = () => $('#shopNowURL').val(),
        template,
        imgName,
        templates = {
            headline: () => { return `<div class='tr-cp-headline' style='top: 73px; left: 5px; width: 300px;' > <h1>Soft</h1> <h1>Focus</h1> <h1>Lorem</h1> <h2>Meet fashion's new POWER PIECES. Weightless fabrics &amp; FEMININE COLOURS step into frame for summer. Tailoring never looked so strong.</h2> <p>There's a relaxed romance influencing women's tailoring right now, but that's not to say these breezy pieces can't be just as empowering as their sharply cut counterparts. Take the soft trench for instance. In a barely-there tone of ballet pink, you could be mistaken for thinking it merely pretty. Only, with the sleeves pushed up, belt tied just so and the suggestion of, well, nothing underneath, all of sudden this damsel isn't so demure after all. </p> <a href='${shopNowURL()}' class='tr-shop-link'>Shop now</a> </div>` },
            profile: () => { return `<div class='tr-cp-profile' style='top:45px; left:50px;'> <h2>SS15 LOCATION</h2> <span class='tr-cp-down-arrow'></span> <h3>Architect</h3> <p>Eric Lloyd-Wright, son of Frank Lloyd-Wright, Jr.</p> <h3>Location</h3> <p>Malibu Hills, USA</p> <h3>Built</h3> <p>1984 but never finished</p> <h3>Best Described</h3><p>Monumental, organic, contemporary</p> <h3>Best Described</h3><p>Monumental, organic, contemporary</p> <h3>Best Described</h3><p>Monumental, organic, contemporary</p> <h3>Best Described</h3><p>Monumental, organic, contemporary</p> </div>` },
            interview: () => { return `<div class='tr-cp-interview' style='top: 0px; left: 670px; width:300px;'> <p>Confident and relaxed in front of the camera, Struss has been lensed by some of the best photographers in the business. Her lithe, Pilates-toned figure has graced the runways of Prada, Louis Vuitton, Chanel and Victoria’s Secret, and her fair features have leapt from the pages of the world’s leading magazines. </p> <p>With a charming mix of humour and drive, Struss is the kind of girl we could definitely be friends with, if only for her beauty and fitness tips alone. Here, she shares some insight into her beautiful life. </p> <p><span>Interviewer is asking a question</span>Response is given</p> <p><span>Interviewer is asking a question</span>Response is given.</p> <p><span>Interviewer is asking a question</span>Response is given</p> <p><span>Interviewer is asking a question</span>Response is given.</p> <p><span>Interviewer is asking a question</span>Response is given. <span class='tr-cp-triangle'></span></p> </div>` },
            item: () => { return `<div class="tr-cp-interview" style="top: 536px; left: 756px; width: 144px; right: auto; height: auto; bottom: auto;">      <p class=""><span style="text-transform: none; letter-spacing: 1px; ">Christy Jelly - $49.95</span></p>  </div>` },
            quotation: () => { return `<div class='tr-cp-quotation' style='top: 14px; left: 30px;'> <h1> ‘<strong>THIS SUMMER</strong>, a liberating nostalgia sweeps in on a salty breeze, bringing with it a fresh, MODERN PERSPECTIVE. </h1> <h1>Freedom and effortless style is at THE HEART of <strong>SS15</strong>’ </h1> </div>` },
            quotation2: () => { return `<div class='tr-cp-quotation2' style='width: 160px; top: 30px; left: 770px; '> <h1>‘There’s a relaxed simplicity EMPOWERING women’s tailoring. Luxurious, whisper-light fabrics in SOFT tones need minimal accessorising’</h1> </div>` },
            quotation3: () => { return `<div class='tr-cp-quotation2' style='width: 160px; top: 30px; left: 770px; '> <h1 style='font-family: DidotLTStd-Roman; '>‘There’s a relaxed simplicity EMPOWERING women’s tailoring. Luxurious, whisper-light fabrics in SOFT tones need minimal accessorising’</h1> </div>` },
            quotation4: () => { return `<div class='tr-cp-quotation2' style='width: 160px; top: 30px; left: 770px; '> <h1 style='font-family: DidotLTStd-Roman; font-size: 17px; line-height: 18px; text-indent:0; text-align:center;'>‘There’s a relaxed simplicity EMPOWERING women’s tailoring. Luxurious, whisper-light fabrics in SOFT tones need minimal accessorising’</h1> </div>` },
            quotation5: () => { return `<div class='tr-cp-quotation2' style='width: 160px; top: 30px; left: 770px; '> <h1 style='font-family: DidotLTStd-Roman; font-size: 15px; line-height: 15px; text-indent:0; text-align:center;'>‘There’s a relaxed simplicity EMPOWERING women’s tailoring. Luxurious, whisper-light fabrics in SOFT tones need minimal accessorising’</h1> </div>` },
            subheadline: () => { return `<div class='tr-cp-subhead' style='left: 30px; top:100px; width:220px;'> <h1>The new TUXEDO DRESSING</h1> <h1>The new TUXEDO DRESSING</h1> <h2>THE SEASON-APPROPRIATE WHITE SUIT GIVES A FRESH NEW SPIN ON A CLASSIC. </h2> <p>Surely Yves Saint Laurent, the designer responsible for first putting women in a rigorously cut tux, would approve of this summer-ready take on a fashion icon. Easy, elegant and perfectly suited to a pair of chic summer flats, the slightly relaxed jacket and trouser combination is a smart summer alternative in white.</p> <a href='${shopNowURL()}' class='tr-shop-link-black-border'>Shop now</a></div>` },
            subheadline2: () => { return `<div class='tr-cp-subheadline2' style='left: 30px; top:100px; width:300px;'> <h1>The new TUXEDO DRESSING</h1> <h1>The new TUXEDO DRESSING</h1> <h2>THE SEASON-APPROPRIATE WHITE SUIT GIVES A FRESH NEW SPIN ON A CLASSIC. </h2> <p>Surely Yves Saint Laurent, the designer responsible for first putting women in a rigorously cut tux, would approve of this summer-ready take on a fashion icon. Easy, elegant and perfectly suited to a pair of chic summer flats, the slightly relaxed jacket and trouser combination is a smart summer alternative in white.</p> <a href='${shopNowURL()}' class='tr-shop-link-underline'>Shop now</a></div>` },
            subheadline3: () => { return `<div class='tr-cp-subheadline3' style='left: 30px; top:100px; width:220px;'> <h1>The new TUXEDO DRESSING</h1> <p>Surely Yves Saint Laurent, the designer responsible for first putting women in a rigorously cut tux, would approve of this summer-ready take on a fashion icon. Easy, elegant and perfectly suited to a pair of chic summer flats, the slightly relaxed jacket and trouser combination is a smart summer alternative in white.</p></div>` },
            product: () => { return `<div class='tr-cp-product-details' style='top: 320px; left: 712px; width:240px;'> <h2>The Best-Ever Bucket Bag</h2> <p>Holds everything, goes with anything. Make friends with your new wardrobe hero. Tip: swing with attitude.</p> </div>` },
            blackBorderButton: () => { return `<a href='${shopNowURL()}' class='tr-shop-link-black-border' style='position: absolute;top: 510px;left: 786px; min-width: 100px;'>Shop now</a>` },
            whiteBorderButton: () => { return `<a href='${shopNowURL()}' class='tr-shop-link-white-border' style='position: absolute;top: 510px;left: 786px; min-width: 100px;'>Shop now</a>` },
            AW17Header: () => { return `<div class='tr-cp-aw17-header' style='top: 266px;left: 162px;width: auto;right: auto;height: auto;bottom: auto;'> <h1 class='' style='text-indent: 0px;'>OBJECTS OF DESIRE</h1>  </div>` },
            AW17subHeader: () => { return `<div class='tr-cp-aw17-subheader' style='width: auto;top: 345px;left: 174px;right: auto;height: auto;bottom: auto;'> <h1 class=''>DISCOVER 24:HR STYLE WITH THIS SEASON’S 10 HERO PIECES</h1> </div>` },
            AW17SubTitle: () => { return `<div class='tr-cp-aw17-title' style='top: 179px; left: 31px; right: auto; height: 78px; bottom: auto;'> <h1 class='' style='text-align: left; text-indent: 0px; font-size: 14px; line-height: 14px; letter-spacing: 0px;'>STYLED BY PEPA MACK</h1> </div>` },
            whiteShopButton: () => { return `<div class='tr-cp-shop-link' style='top: 391px; left: 425px; width: 134px; height: 30px; right: auto; bottom: auto;'><a href='${shopNowURL()}' class='tr-shop-link-white'>Shop now</a> </div>` },
            blackShopButton: () => { return `<div class='tr-cp-shop-link' style='top: 391px; left: 425px; width: 134px; height: 30px; right: auto; bottom: auto;'><a href='${shopNowURL()}' class='tr-shop-link-black'>Shop now</a> </div>` },
            AW17Title: () => { return `<div class='tr-cp-aw17-title' style='width: 298px; top: 60px; left: 330px; right: auto; height: 78px; bottom: auto;'> <h1 class='' style='text-align: center;'>THE COLLECTION THAT<br>TAKES YOU FROM MORNING<br>TO MIDNIGHT</h1> </div>` },
            toc: () => { return `<div class='tr-cp-toc' style='top: 501px; left: 145px; width: 78px; right: auto; height: auto; bottom: auto;'>      <p class=''>OBJECTS OF DESIRE</p>  <span class=''>This season's 10 must-haves</span><a href='${shopNowURL()}' class='tr-shop-link-underline' style='margin-top: 3px;'>read more</a></div>` },
            AW17Product: () => { return `<div class='tr-cp-aw17-product' style='width: 256px; top: 126px; left: 30px; right: auto; height: 95px; bottom: auto;'> <h1 class='' style='text-align: left; text-indent: 0px;'>THE COAT</h1> <span class=''>The classic three-quarter coat is re-imagined<br>this season with a relaxed, draped lapel in<br>silver-grey wool. Pair with layers of fresh<br>whites in sporty, relaxed silhouettes for<br>a low-fi yet polished look.</span><a href='${shopNowURL()}' class='tr-shop-link-black-border' style='position: absolute; min-width: 100px; width: 110px; right: auto; height: auto; bottom: auto; margin-top: 12px; padding: 6px 20px;'>Shop now</a></div>` }
        }

    class CreateTemplate {

        constructor(template) {
            this.template = template();
            this.backupOutput;
        }

        render() {
            this._initializePlugins();
        }

        output() {
            this._destroyPluginsAndOutput();
        }

        edit() {
            $container.children().not('img').remove();
            $('.output').empty();
            $container.append(this.backupOutput);
            this._initializePlugins(this.backupOutput);
        }

        _initializePlugins(initializedTemplate = $(this.template)) {

            // template needs to be appended first so draggable doesn't add position: relative
            $container.append(initializedTemplate); 
            // add delete element
            initializedTemplate.children().not('.ui-resizable-handle').addClass('delete');

            initializedTemplate
                .resizable({
                    handles: "e,w,n,s",
                    resize: function(event, ui) {
                        $(this).css('height', 'auto');
                    }
                })
                .draggable({
                    containment: ".tr-content-page",
                    scroll: false,
                    stop: function() {
                        let leftPos = $(this).css('left');
                        let topPos = $(this).css('top');
                    }
                });

            initializedTemplate.children()
                .editable()
                .on('edit', function(event,$editor) {
                    let $this = $(this);
                    $this.append('<button type="button" class="btn btn-default btn-xs white">W</button><button type="button" class="btn btn-default btn-xs black">B</button><button type="button" class="btn btn-default btn-xs left"><span class="glyphicon glyphicon-align-left" aria-hidden="true"></span></button><button type="button" class="btn btn-default btn-xs center"><span class="glyphicon glyphicon-align-center" aria-hidden="true"></span></button><button type="button" class="btn btn-default btn-xs right"><span class="glyphicon glyphicon-align-right" aria-hidden="true"></span></button><button type="button" class="btn btn-default btn-xs no-indent">no indent</button><button type="button" class="btn btn-default btn-xs indent-left"><span class="glyphicon glyphicon-indent-left" aria-hidden="true"></span></button>');
                    $('.white').hover(function(){$this.addClass('tr-white')});
                    $('.black').hover(function(){$this.removeClass('tr-white')});
                    $('.center').hover(function(){$this.css('text-align', 'center')});
                    $('.left').hover(function(){$this.css('text-align', 'left')});
                    $('.right').hover(function(){$this.css('text-align', 'right')});
                    $('.no-indent').hover(function(){$this.css('text-indent', '0')});
                    $('.indent-left').hover(function(){$this.css('text-indent', '30px')});
                })

        }

        _destroyPluginsAndOutput() {
            let outputHTML = $('.ui-resizable, .ui-draggable'),
                $output = $('.output'),
                imgElement = `<img src="/images/assetimages/2015/the-report/issue35/desktop/${imgName}" usemap="${imgName.replace(/.jpg/g, '')}">`;

            outputHTML.draggable('destroy').resizable('destroy');
            outputHTML.children().editable('destroy');
            $('.delete').removeClass('delete');
            $.each(outputHTML, function(i,v) {
                $output.append(outputHTML[i].outerHTML);
            })

            $output.wrapInner('<div class="tr-cp-mainimg"></div>');
            $output.children('.tr-cp-mainimg').prepend(imgElement);
            $output.html($output.html().replace(/\</g, '&lt;').replace(/\"/g, "\'").replace(/(?:\r\n|\r|\n)/g, ''));

            this.backupOutput = outputHTML;

            Prism.highlightAll();
        }

    }

    function renderImage(file) {

        let reader = new FileReader();
        reader.onload = function(event) {
            let url = event.target.result;
            $('.tr-cp-mainimg>img').attr('src', url);
        }
        reader.readAsDataURL(file);

    }

    $('.create-template').click(function() {
        let templateType = eval("templates." + $(this).data('template-type'));
        template = new CreateTemplate(templateType);
        template.render();
    });

    $('.outputButton').click(function() {
        template.output();
    });

    $('.editButton').click(function() {
        template.edit();
    });

    $('#backgroundImage').change(function() {
        renderImage(this.files[0]);
        imgName = this.files[0].name;
    });

    $('.resetButton').click(()=>{ 
        $('.output').empty(); 
        $('.tr-cp-mainimg').children().not('img').remove(); 
        $('.backgroundImage').attr('src', 'http://placehold.it/960x600') 
    });

    // delete button functionality on pseudo element
    $('body').on('click', '.delete', function(e) {
        e.preventDefault();
        if (e.offsetX > $(this).outerWidth()) {
                $(this).remove();
            }
    })

    $('body').on('click', 'a', function(e){e.preventDefault()});

    $('pre.copytoclipboard').each(function () {
        let $this = $(this),
        $button = $('<button>Copy</button>');
        $this.wrap('<div/>').removeClass('copytoclipboard');
        let $wrapper = $this.parent();
        $wrapper.addClass('copytoclipboard-wrapper').css({position: 'relative'})
        $button.css({position: 'absolute', top: 0, right: 0}).appendTo($wrapper).addClass('copytoclipboard btn btn-default btn-xs');
        /* */
        var copyCode = new Clipboard('button.copytoclipboard', {
            target: function (trigger) {
                return trigger.previousElementSibling;
            }
        });
        copyCode.on('success', function (event) {
            event.clearSelection();
            event.trigger.textContent = 'Copied';
            window.setTimeout(function () {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
        copyCode.on('error', function (event) {
            event.trigger.textContent = 'Press "Ctrl + C" to copy';
            window.setTimeout(function () {
                event.trigger.textContent = 'Copy';
            }, 2000);
        });
    });

});