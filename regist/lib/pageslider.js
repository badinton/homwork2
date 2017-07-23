/* Notes:
 * - History management is currently done using window.location.hash.  This could easily be changed to use Push State instead.
 * - jQuery dependency for now. This could also be easily removed.
 */
function PageSlider(container) {
    var container = container,
        currentPage,
        stateHistory = [];
    // Use this function if you want PageSlider to automatically determine the sliding direction based on the state history
    this.slidePage = function(page) {
        // console.log('stateHistory',stateHistory);
        var l = stateHistory.length,
            state = window.location.hash;
        if (l === 0) {
            stateHistory.push(state);
            this.slidePageFromMain(page);
            return;
        }
        if (state === stateHistory[l - 2]) {
            stateHistory.pop();
            this.slidePageFromMain(page, 'left');
        } else {
            stateHistory.push(state);
            this.slidePageFromMain(page, 'right');
        }
    }
    this.setEmptyHistory = function(){
        $(".page").remove();
        stateHistory = [];
    }
    this.setToOneHistory = function(){
        $(".page:gt(0)").remove();
        stateHistory = [];
    }
    this.slidePageFromMain = function(page, from) {
            // alert('main');
            container.append(page);
            if (!currentPage || !from) {
                page.attr("class", "page center");
                currentPage = page;
                return;
            }
            // Position the page at the starting position of the animation
            page.attr("class", "page " + from);
            currentPage.one('webkitTransitionEnd', function(e) {
                $(e.target).remove();
            });
            // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
            container[0].offsetWidth;
            // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
            page.attr("class", "page transition center");
            currentPage.attr("class", "page transition " + (from === "left" ? "right" : "left"));
            currentPage = page;
        }
        // Use this function directly if you want to control the sliding direction outside PageSlider
    this.slidePageFrom = function(page, from) {
        console.log(page);
        console.log(from);
        if (from != 'right' && $(".page.left").length > 0) {
            // if ($(".page.left").length > 0) {
            // alert('has left');
            $(".page.left:last").addClass('center');
            $(".page.left:last").addClass('page-left-old');
            $(".page.center:last").remove();
            $(".page.right").remove();
            
            $(".page.left:last").removeClass('left');
            // $(".page:last").html(page.html());
            // $(".page.transition").removeClass('transition');
            // return 0;
            // }
            // container.append($(".page").parent().html());
            // container.append(page);
            // console.log(page);
            // container[0].offsetWidth;
            // page.attr("class", "page transition center");
            // currentPage = page;
        } else {
            container.append(page);
            if (!currentPage || !from) {
                // alert(50);
                page.attr("class", "page center");
                currentPage = page;
                // container.append(currentPage);
                return;
            }
            // console.log('currentPage', currentPage);
            // alert('currentPage', currentPage[0].div);
            // Position the page at the starting position of the animation
            page.attr("class", "page " + from);
            currentPage.one('webkitTransitionEnd', function(e) {
                // alert(e.target.className);
                if (e.target.className == "page transition right" || e.target.className == "page transition center") {
                    $(e.target).remove();
                } else {
                    $(e.target).attr('page transition left');
                }
                // $(e.target).remove();
            });
            // Force reflow. More information here: http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
            container[0].offsetWidth;
            // Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
            page.attr("class", "page transition center");
            currentPage.attr("class", "page transition " + (from === "left" ? "right" : "left"));
            currentPage = page;
            if ($(".page.transition.center").length > 1) {
                $(".page.transition.center:eq(0)").attr('class', 'page transition left');
            }
        }
    }
}