$(function() {

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // GitHub Milestone Issue HTML Generator
    $('[data-milestones-repo]').each(function(index, el) {

        var $container = $(el);
        var repo = $container.attr('data-milestones-repo');

        // https://api.github.com/repos/space-race/mc-core/milestones
        // https://api.github.com/repos/space-race/mc-core/issues?state=open&milestone=1

        $.getJSON('https://api.github.com/repos/' + repo + '/milestones', function(milestones) {
            milestones.forEach(function(ms) {
                var $milestoneDiv = $('<div class="milestone"></div>');
                var $issueList = $('<ul></ul>');
                $milestoneDiv.append(
                  $('<h3></h3>')
                    .append(
                      $('<a></a>')
                        .text(ms.title)
                        .attr('href', ms.html_url)
                        .attr('target', '_blank')
                    )
                );
                $milestoneDiv.append($('<p></p>').text(ms.description));
                $milestoneDiv.append($issueList);
                $.getJSON('https://api.github.com/repos/' + repo + '/issues?state=open&milestone=' + ms.number, function(issues) {
                    issues.forEach(function(issue) {
                        $issueList.append(
                          $('<li></li>').append(
                            $('<a></a>').text(issue.title).attr('href', issue.html_url).attr('target','_blank')
                          )
                        );
                    });
                });
                $container.append($milestoneDiv);
            });
        });

    });

});
