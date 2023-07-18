<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>2022-yuya/js/js/fly.js at master - KoekiGameDesign/2022-yuya</title>
    <meta property="og:title" content="2022-yuya/js/js/fly.js at master - KoekiGameDesign/2022-yuya" />
    <meta property="og:type" content="object" />
    <meta property="og:url" content="http://localhost:8880/KoekiGameDesign/2022-yuya/blob/master/js/js/fly.js" />
    
    
      <meta property="og:image" content="https://www.yatex.org/gitbucket/KoekiGameDesign/_avatar" />
      
        <meta property="og:description" content="高野の練習用" />
      
    
    <link rel="icon" href="https://www.yatex.org/gitbucket/assets/common/images/gitbucket.png?20230708173647" type="image/vnd.microsoft.icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/google-fonts/css/source-sans-pro.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/bootstrap-3.4.1/css/bootstrap.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/octicons-4.4.0/octicons.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/bootstrap-datetimepicker-4.17.44/css/bootstrap-datetimepicker.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/colorpicker/css/bootstrap-colorpicker.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/color-themes-for-google-code-prettify/github-v2.min.css?20230708173647" type="text/css" rel="stylesheet"/>
    <link href="https://www.yatex.org/gitbucket/assets/vendors/facebox/facebox.css?20230708173647" rel="stylesheet"/>
    <link href="https://www.yatex.org/gitbucket/assets/vendors/AdminLTE-2.4.2/css/AdminLTE.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/AdminLTE-2.4.2/css/skins/skin-green-light.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/font-awesome-4.7.0/css/font-awesome.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/jquery-ui/jquery-ui.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/jquery-ui/jquery-ui.structure.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/jquery-ui/jquery-ui.theme.min.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/common/css/gitbucket.css?20230708173647" rel="stylesheet">
    <link href="https://www.yatex.org/gitbucket/assets/vendors/tipped/tipped.css?20230708173647" rel="stylesheet">
    <script src="https://www.yatex.org/gitbucket/assets/vendors/jquery/jquery-3.5.1.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/jquery-ui/jquery-ui.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/dropzone/dropzone.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/common/js/validation.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/common/js/gitbucket.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/bootstrap-3.4.1/js/bootstrap.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/bootstrap3-typeahead/bootstrap3-typeahead.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/bootstrap-datetimepicker-4.17.44/js/moment.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/bootstrap-datetimepicker-4.17.44/js/bootstrap-datetimepicker.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/colorpicker/js/bootstrap-colorpicker.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/google-code-prettify/prettify.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/elastic/jquery.elastic.source.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/facebox/facebox.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/jquery-hotkeys/jquery.hotkeys.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/jquery-textcomplete-1.8.4/jquery.textcomplete.min.js?20230708173647"></script>
    <script src="https://www.yatex.org/gitbucket/assets/vendors/tipped/tipped.min.js?20230708173647"></script>
    
      <meta name="go-import" content="www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya git https://www.yatex.org/gitbucket/git/KoekiGameDesign/2022-yuya.git" />
    
    <script src="https://www.yatex.org/gitbucket/assets/vendors/AdminLTE-2.4.2/js/adminlte.min.js?20230708173647" type="text/javascript"></script>
    
      <style type="text/css">.content, .sidebar, .skin-green-light div.main-sidebar {
  background:  #efe;
}</style>
    
  </head>
  <body class="skin-green-light page-load sidebar-mini ">
    <div class="wrapper">
      <header class="main-header">
        <a href="https://www.yatex.org/gitbucket/" class="logo">
          <span class="logo-mini"><img src="https://www.yatex.org/gitbucket/assets/common/images/gitbucket.svg?20230708173647" alt="GitBucket" /></span>
          <span class="logo-lg">
            <img src="https://www.yatex.org/gitbucket/assets/common/images/gitbucket.svg?20230708173647" alt="GitBucket" />
            <span class="header-title strong">GitBucket</span>
          </span>
        </a>
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button" title="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
            </a>
          
          
            <form id="search" action="https://www.yatex.org/gitbucket/search" method="GET" class="pc navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" name="query" id="navbar-search-input" class="form-control" placeholder="Find a repository" aria-label="Search"/>
              </div>
            </form>
            <ul class="pc nav navbar-nav">
              <li><a href="https://www.yatex.org/gitbucket/dashboard/pulls">Pull requests</a></li>
              <li><a href="https://www.yatex.org/gitbucket/dashboard/issues">Issues</a></li>
              
                
                  <li><a href="https://www.yatex.org/gitbucket/gist">Snippets</a></li>
                
              
            </ul>
          
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              
                <li class="dropdown notifications-menu">
                  <a class="dropdown-toggle menu" data-toggle="dropdown" href="#" aria-label="Create new…">
                    <i class="octicon octicon-plus" style="color: black;"></i><span class="caret" style="color: black; vertical-align: middle;"></span>
                  </a>
                  <ul class="dropdown-menu pull-right" style="width: auto;">
                    <li>
                      <ul class="menu">
                        
                          <li><a href="https://www.yatex.org/gitbucket/new">New repository</a></li>
                        
                        <li><a href="https://www.yatex.org/gitbucket/groups/new">New group</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="dropdown notifications-menu">
                  <a class="dropdown-toggle menu" data-toggle="dropdown" href="#" data-toggle="tooltip" data-placement="bottom" title="Signed is as takayu">
                    <img src="https://www.gravatar.com/avatar/9d6e39825d008b0ddda26e82207a0a08?s=16&d=retro&r=g" class="avatar-mini" style="width: 16px; height: 16px;"
     alt="@takayu" /><span class="caret" style="color: black; vertical-align: middle;"></span>
                  </a>
                  <ul class="dropdown-menu pull-right" style="width: auto;">
                    <li>
                      <ul class="menu">
                        <li><a href="https://www.yatex.org/gitbucket/takayu">Your profile</a></li>
                        <li><a href="https://www.yatex.org/gitbucket/takayu/_edit">Account settings</a></li>
                        
                        <li><a href="https://www.yatex.org/gitbucket/signout">Sign out</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              
            </ul>
          </div>
        </nav>
      </header>
      
  


<div class="main-sidebar">
  <div class="sidebar">
    <ul class="sidebar-menu">
      
  <li class = "menu-item-hover active">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya">
        <i class="menu-icon octicon octicon-code"></i>
        <span>Files</span>
        
      </a>
    
  </li>

      
        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/branches">
        <i class="menu-icon octicon octicon-git-branch"></i>
        <span>Branches</span>
        
          <span class="pull-right-container"><span class="label label-primary pull-right">1</span></span>
        
      </a>
    
  </li>

      
      
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/releases">
        <i class="menu-icon octicon octicon-tag"></i>
        <span>Releases</span>
        
      </a>
    
  </li>

      
        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/issues">
        <i class="menu-icon octicon octicon-issue-opened"></i>
        <span>Issues</span>
        
      </a>
    
  </li>

        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/pulls">
        <i class="menu-icon octicon octicon-git-pull-request"></i>
        <span>Pull requests</span>
        
      </a>
    
  </li>

        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/issues/labels">
        <i class="menu-icon octicon octicon-tag"></i>
        <span>Labels</span>
        
      </a>
    
  </li>

        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/issues/priorities">
        <i class="menu-icon octicon octicon-flame"></i>
        <span>Priorities</span>
        
      </a>
    
  </li>

        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/issues/milestones">
        <i class="menu-icon octicon octicon-milestone"></i>
        <span>Milestones</span>
        
      </a>
    
  </li>

      
      
        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/wiki">
        <i class="menu-icon octicon octicon-book"></i>
        <span>Wiki</span>
        
      </a>
    
  </li>

      
      
      
        
  <li class = "menu-item-hover ">
    
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/settings">
        <i class="menu-icon octicon octicon-gear"></i>
        <span>Settings</span>
        
      </a>
    
  </li>

      
    </ul>
  </div>
</div>
<div class="content-wrapper">
  <div class="content body clearfix">
    <div class="headbar">
      <div class="container">
        

        
        <div class="head">
          <div class="pull-right">
            
              
  <div class="btn-group" >
    <button class="dropdown-toggle btn btn-default btn-sm" data-toggle="dropdown">
      
        
        <span class="strong"
              >
          Watching
        </span>
      
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right">
      
      
  
    <li>
      <a href="#" class="watch" data-id="watching">
        
  <i class="octicon octicon-check"></i>

        <span class="notification-label strong">Watching</span>
        <div class="muted small">Notify all conversations.</div>
      </a>
    </li>
  
    <li>
      <a href="#" class="watch" data-id="not_watching">
        
  <i class="octicon"></i>

        <span class="notification-label strong">Not watching</span>
        <div class="muted small">Notify when participating.</div>
      </a>
    </li>
  
    <li>
      <a href="#" class="watch" data-id="ignoring">
        
  <i class="octicon"></i>

        <span class="notification-label strong">Ignoring</span>
        <div class="muted small">Never notify.</div>
      </a>
    </li>
  

    </ul>
  </div>
  


<script>
$(function(){
  $('a.watch').click(function(){
    var selected = $(this);
    var notification = selected.data('id');
    $.post('https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/watch',
      { notification : notification },
      function(){
        $('a.watch i.octicon-check').removeClass('octicon-check');
        $('a.watch[data-id=' + notification + '] i').addClass('octicon-check');

        // Update button label
        var label = selected.find('span.notification-label').text().trim();
        selected.parents('div.btn-group').find('button>span.strong').text(label);
      }
    );
    return false;
  });
});
</script>

            
            
              
                <a class="btn btn-default btn-sm" href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/fork" rel="facebox">
                  <span class="strong"><i class="octicon octicon-repo-forked"></i>Fork</span><span class="muted">: 0</span>
                </a>
              
            
            <form id="fork-form" method="post" action="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/fork" style="display: none;">
              <input type="hidden" name="account" value="takayu"/>
            </form>
          </div>
          
  
    <i class="mega-octicon octicon-repo"></i>
  


          <a href="https://www.yatex.org/gitbucket/KoekiGameDesign">KoekiGameDesign</a> / <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya" class="strong">2022-yuya</a>

          
            
          
        </div>
      </div>
    </div>
    
    <style>
      .prettyprint {
        tab-size: 8
      }
    </style>
    <div class="head">
      <div class="pull-right hide-if-blame"><div class="btn-group">
        <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/blob/ca72f2a3246afc434857c1f5b069b16a2ed0521c/js/js/fly.js" data-hotkey="y" style="display: none;">Transfer to URL with SHA</a>
        <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/find/master" class="btn btn-sm btn-default" data-hotkey="t">Find file</a>
      </div></div>
      <div class="line-age-legend">
        <span>Newer</span>
        <ol>
            <li class="heat1"></li>
            <li class="heat2"></li>
            <li class="heat3"></li>
            <li class="heat4"></li>
            <li class="heat5"></li>
            <li class="heat6"></li>
            <li class="heat7"></li>
            <li class="heat8"></li>
            <li class="heat9"></li>
            <li class="heat10"></li>
        </ol>
        <span>Older</span>
      </div>
      <div id="branchCtrlWrapper" style="display:inline;">
      
  <div class="btn-group" style="min-width: 200px;">
    <button class="dropdown-toggle btn btn-default btn-sm" data-toggle="dropdown">
      
        
          <span class="muted">branch:</span>
        
        <span class="strong"
              style="display:inline-block; vertical-align:bottom; overflow-x:hidden; max-width:200px; text-overflow:ellipsis">
          master
        </span>
      
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      
      
  <li>
    <ul class="nav nav-tabs">
      <li class="active" id="branch-control-tab-branches"><a href="javascript:void(0);" class="nav-item" id="nav-item-branches">Branches</a></li>
      <li id="branch-control-tab-tags"><a href="javascript:void(0);" class="nav-item" id="nav-item-tags">Tags</a></li>
      <li><button id="branch-control-close" class="pull-right">&times</button></li>
    </ul>
    <li>
      <input id="branch-control-input" type="text" class="form-control input-sm dropdown-filter-input"/>
    </li>
    
        
          <li><a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/blob/master/js/js/fly.js">
  <i class="octicon octicon-check"></i>
 master</a></li>
        
      
    
      <li id="create-branch" style="display: none;">
        <a><form action="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/branches" method="post" style="margin: 0;">
          <span class="strong">Create branch:&nbsp;<span class="new-branch"></span></span>
          <br><span style="padding-left: 17px;">from&nbsp;'master'</span>
          <input type="hidden" name="new">
          <input type="hidden" name="from" value="master">
        </form></a>
      </li>
    
  </li>

    </ul>
  </div>
  


<script>
  $(function(){
    $('#branch-control-input').parent().click(function(e) {
      e.stopPropagation();
    });

    $('#branch-control-close').click(function() {
      $('[data-toggle="dropdown"]').parent().removeClass('open');
    });

    $('#branch-control-input').keyup(function() {
      updateBranchControlListFilter();
    });

    
      $('#create-branch').click(function() {
        $(this).find('input[name="new"]').val($('.dropdown-menu input').val())
        $(this).find('form').submit()
       });
    

    $('.btn-group').click(function() {
      $('#branch-control-input').val('');
      //$('.dropdown-menu li').show();
      $('#create-branch').hide();
    });

    $('#nav-item-branches').click(function(e) {
      e.stopPropagation();
      updateBranchControlList('branches');
    });

    $('#nav-item-tags').click(function(e) {
      e.stopPropagation();
      updateBranchControlList('tags');
    });

    function updateBranchControlList(active) {
      if (active == 'branches') {
        $('li#branch-control-tab-branches').addClass('active');
        $('li#branch-control-tab-tags').removeClass('active');

        $('li.branch-control-item-branch').show();
        $('li.branch-control-item-branch > a').addClass('active');

        $('li.branch-control-item-tag').hide();
        $('li.branch-control-item-tag > a').removeClass('active');
        
          $('#branch-control-input').attr('placeholder', 'Find or create branch ...');
        
      } else if (active == 'tags') {
        $('li#branch-control-tab-branches').removeClass('active');
        $('li#branch-control-tab-tags').addClass('active');

        $('li.branch-control-item-branch').hide();
        $('li.branch-control-item-branch > a').removeClass('active');

        $('li.branch-control-item-tag').show();
        $('li.branch-control-item-tag > a').addClass('active');
        $('#branch-control-input').attr('placeholder', 'Find tag ...');
      }
      updateBranchControlListFilter();
    }

    function updateBranchControlListFilter() {
      const inputVal = $('#branch-control-input').val();
      $.each($('#branch-control-input').parent().parent().find('a.active').not('.nav-item'), function(index, elem) {
        if (!inputVal || !elem.text.trim() || elem.text.trim().toLowerCase().indexOf(inputVal.toLowerCase()) >= 0) {
          $(elem).parent().show();
        } else {
          $(elem).parent().hide();
        }
      });
      if ($('li#branch-control-tab-branches.active').length > 0) {
        
          if (inputVal) {
            $('#create-branch').parent().find('li:last-child').show().find('.new-branch').text(inputVal);
          } else {
            $('#create-branch').parent().find('li:last-child').hide();
          }
        
      }
    }

    // Initialize the branch control list
    updateBranchControlList('branches');
  });
</script>

      </div>
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/tree/master">2022-yuya</a> /
      
        
          <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/tree/master/js">js</a> /
        
      
        
          <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/tree/master/js/js">js</a> /
        
      
        
          fly.js
        
      
      
    </div>
    <div class="box-header" style="line-height: 28px;">
      <a href="https://www.yatex.org/gitbucket/takayu" class=""><img src="https://www.gravatar.com/avatar/9d6e39825d008b0ddda26e82207a0a08?s=20&d=retro&r=g" class="avatar-mini" style="width: 20px; height: 20px;"
     alt="@takano yuya" /></a>
      <a href="https://www.yatex.org/gitbucket/takayu" class="username strong">takano yuya</a>
      <span class="muted">
  <span data-toggle="tooltip" title="2023-07-17 23:27:57">
    
      10 hours ago
    
  </span>

</span>
      <span class="label label-default">2 KB</span>
      <a href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/commit/ca72f2a3246afc434857c1f5b069b16a2ed0521c" class="commit-message">Update fly.js</a>
      <div class="btn-group pull-right">
        <a class="btn btn-sm btn-default" href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/raw/ca72f2a3246afc434857c1f5b069b16a2ed0521c/js/js/fly.js">Raw</a>
        
          <a class="btn btn-sm btn-default blame-action" href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/blame/ca72f2a3246afc434857c1f5b069b16a2ed0521c/js/js/fly.js"
            data-url="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/get-blame/ca72f2a3246afc434857c1f5b069b16a2ed0521c/js/js/fly.js" data-repository="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya">Blame</a>
        
        <a class="btn btn-sm btn-default" href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/commits/master/js/js/fly.js">History</a>
        
          <a class="btn btn-sm" style="padding-right: 4px;" href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/edit/master/js/js/fly.js"><i class="octicon octicon-pencil" aria-label="Edit"></i></a>
        
        
          <a class="btn btn-sm" style="padding-right: 4px;" href="https://www.yatex.org/gitbucket/KoekiGameDesign/2022-yuya/remove/master/js/js/fly.js"><i class="octicon octicon-trashcan" aria-label="Remove"></i></a>
        
      </div>
    </div>
    
      
        
          <div class="box-content-bottom">
            <pre class="prettyprint linenums blob  no-renderable  ">window.addEventListener(&#x27;DOMContentLoaded&#x27;, init);

function init() {
    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector(&#x27;#canvas&#x27;),
        alpha: true,
    });
    // ウィンドウサイズ設定
    width = document.getElementById(&#x27;main_canvas&#x27;).getBoundingClientRect().width;
    height = document.getElementById(&#x27;main_canvas&#x27;).getBoundingClientRect().height;
    renderer.setPixelRatio(1);
    renderer.setSize(width, height);
    console.log(window.devicePixelRatio);
    console.log(width + &quot;, &quot; + height);

    // シーンを作成
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x87B8C0 ); // 背景色

    // カメラを作成
    
   camera = new THREE.PerspectiveCamera(90, width / height, 1, 10000);
        
    camera.position.set(0, 100, 500);
    camera.lookAt(0,0,0);
    var controls = new THREE.FlyControls(camera); 
    controls.movementSpeed = 1500;	//移動速度
    controls.rollSpeed = Math.PI / 4;   //回転速度
    controls.dragToLook = true;
   
 // カメラ位置をリセットするためのメニュー項目
      const gui = new dat.GUI();
      const settings = {
        resetCamera: function() {
       var delta = clock.getDelta();  
        controls.update(delta);  
          camera.position.set(0, 100, 500);
           camera.lookAt(0,0,0);
        }
      };
 
  // メニューGUI
      gui.add(settings, &#x27;resetCamera&#x27;);
      gui.open();
      
    // Load GLTF or GLB
    const loader = new THREE.GLTFLoader();
    const url = &#x27;pc.glb&#x27;;

    // window size
    const w_height = window.innerHeight;

    let model = null;
    loader.load(
        url,
        function (gltf) {
            model = gltf.scene;
            model.scale.set(100.0, 100.0, 100.0);
            model.position.set(0, (w_height / 3 * -1), 0);
            scene.add(gltf.scene);
        },
         function (error) {
            console.log(&#x27;An error happened&#x27;);
            console.log(error);
        }
     
    );
    renderer.gammaOutput = true;
    renderer.gammaFactor = 2.2;


    // 平行光源
    const light = new THREE.DirectionalLight(0xFFFFFF);
    light.intensity = 1; // 光の強さ
    light.position.set(3, 10, 1);
    // シーンに追加
    scene.add(light);


    //環境光源(アンビエントライト)：すべてを均等に照らす、影のない、全体を明るくするライト
    const ambient = new THREE.AmbientLight(0xf8f8ff, 0.7);
    scene.add(ambient); //シーンにアンビエントライトを追加

    var clock = new THREE.Clock();
    // 初回実行
    tick();

    function tick() {
    	
        var delta = clock.getDelta();  
        controls.update(delta);  

        if (model !== null) {
            console.log(model);
        }
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}
</pre>
          </div>
        
        
        
      
    
  
  </div>
</div>
<script>
$(function(){
  $('a[rel*=facebox]').facebox({
    'loadingImage': 'https://www.yatex.org/gitbucket/assets/vendors/facebox/loading.gif?20230708173647',
    'closeImage': 'https://www.yatex.org/gitbucket/assets/vendors/facebox/closelabel.png?20230708173647'
  });

  $(document).on("click", ".js-fork-owner-select-target", function() {
    var account = $(this).text().replace("@", "");
    $("#account").val(account);
    $("#fork").submit();
  });
});
</script>




    </div>
    <script>
      $(function(){
        
        
          $(".sidebar-toggle").on('click', function(e){
            $.post('https://www.yatex.org/gitbucket/sidebar-collapse', { collapse: !$('body').hasClass('sidebar-collapse') });
          });
        
      });
    </script>
    
  </body>
</html>

<script>
$(window).on('load', function(){
  window.onhashchange = function(){
    updateHighlighting();
  }

  const pre = $('pre.prettyprint');
  function updateSourceLineNum() {
    $('.source-line-num').remove();
    const pos = pre.find('ol.linenums').position();
    if (pos) {
      $('<div class="source-line-num">').css({
        height  : pre.height(),
        width   : '48px',
        cursor  : 'pointer',
        position: 'absolute',
        top     : pos.top + 'px',
        left    : pos.left + 'px'
      }).click(function(e){
        let pos = $(this).data("pos");
        if (!pos) {
          pos = $('ol.linenums li').map(function(){ return { id: $(this).attr("id"), top: $(this).position().top} }).toArray();
          $(this).data("pos",pos);
        }
        let i = 0;
        for(i = 0; i < pos.length - 1; i++){
          if(pos[i + 1].top > e.pageY){
            break;
          }
        }
        const line    = pos[i].id.replace(/^L/,'');
        const hash    = location.hash;
        const baseUrl = location.toString().split("#")[0];
        if (e.shiftKey == true && hash.match(/#L\d+(-L\d+)?/)) {
          const fragments = hash.split('-');
          window.history.pushState('', '', baseUrl + fragments[0] + '-L' + line);
        } else {
          const p = $("#L" + line).attr('id', '');
          window.history.pushState('', '', baseUrl + '#L' + line);
          p.attr('id','L' + line);
        }
        $("#branchCtrlWrapper .btn .muted").text("tree:");
        $("#branchCtrlWrapper .btn .strong").text("ca72f2a324");
        getSelection().empty();
        updateHighlighting();
      }).appendTo(pre);
      updateHighlighting();
    } else {
      // Maybe code view is not initialized yet. Retry until succeed.
      setTimeout(updateSourceLineNum, 300);
    }
  }
  const repository = $('.blame-action').data('repository');
  $('.blame-action').click(function(e){
    if(history.pushState && $('pre.prettyprint.no-renderable').length){
      e.preventDefault();
      history.pushState(null, null, this.href);
      updateBlame();
    }
  });

  function updateBlame(){
    const m = /\/(blame|blob)(\/.*)$/.exec(location.href);
    const mode = m[1];
    $('.blame-action').toggleClass("active", mode=='blame').attr('href', repository + (m[1] == 'blame' ? '/blob' : '/blame') + m[2]);
    if(pre.parents("div.box-content-bottom").find(".blame").length){
      pre.parent().toggleClass("blame-container", mode == 'blame');
      updateSourceLineNum();
      return;
    }
    if(mode == 'blob'){
      updateSourceLineNum();
      return;
    }
    $(document.body).toggleClass('no-box-shadow', document.body.style.boxShadow === undefined);
    $('.blame-action').addClass("active");
    const base = $('<div class="blame">').css({height: pre.height()}).prependTo(pre.parents("div.box-content-bottom"));
    base.parent().addClass("blame-container");
    updateSourceLineNum();
    $.get($('.blame-action').data('url')).done(function(data){
      let blame = data.blame;
      let lastDiv;
      const now = new Date().getTime();
      const index = [];
      for(let i = 0; i < blame.length; i++){
        for(let j = 0; j < blame[i].lines.length; j++){
          index[blame[i].lines[j]] = blame[i];
        }
      }

      $('pre.prettyprint ol.linenums li').each(function(i, e){
        const p = $(e).position();
        const h = $(e).height();
        if(blame == index[i]){
          lastDiv.css("min-height",(p.top + h + 1) - lastDiv.position().top);
        } else {
          $(e).addClass('blame-sep')
          blame = index[i];
          const sha = $('<div class="blame-sha">')
             .append($('<a>').attr("href", data.root + '/commit/' + blame.id).text(blame.id.substr(0, 7)));
          if (blame.prev) {
             sha.append($('<br />'))
             .append($('<a class="muted-link">').text('prev').attr("href", data.root + '/blame/' + blame.prev + '/' + (blame.prevPath || data.path)));
          }
          lastDiv = $('<div class="blame-info">')
           .addClass('heat' + Math.min(10, Math.max(1, Math.ceil((now - blame.commited) / (24 * 3600 * 1000 * 70)))))
           .toggleClass('blame-last', blame.id == data.last)
           .data('line', (i + 1))
           .css({
             "top"        : p.top + 'px',
             "min-height" : h + 'px'
           })
           .append(sha)
           .append($(blame.avatar).addClass('avatar').css({"float": "left"}))
           .append($('<div class="blame-commit-title">').text(blame.message))
           .append($('<div class="muted">').html(blame.author + " authed " + blame.authed))
           .appendTo(base);
        }
      });
    });
    return false;
  };

  $(document).on('expanded.pushMenu collapsed.pushMenu', function(e){
    setTimeout(updateBlame, 300);
  });

  updateBlame();
});

let scrolling = false;

/**
 * Highlight lines which are specified by URL hash.
 */
function updateHighlighting() {
  const hash = location.hash;
  const isDark = false;
  if (hash.match(/#L\d+(-L\d+)?/)) {
    if (isDark) {
      $('li.highlight-dark').removeClass('highlight-dark');
    } else {
      $('li.highlight').removeClass('highlight');
    }
    const fragments = hash.substr(1).split('-');
    if (fragments.length == 1) {
      if (isDark) {
        $('#' + fragments[0]).addClass('highlight-dark');
      } else {
        $('#' + fragments[0]).addClass('highlight');
      }
      if(!scrolling){
        $(window).scrollTop($('#' + fragments[0]).offset().top);
      }
    } else if(fragments.length > 1){
      const start = parseInt(fragments[0].substr(1));
      const end   = parseInt(fragments[1].substr(1));
      for (let i = start; i <= end; i++) {
        if (isDark) {
          $('#L' + i).addClass('highlight-dark');
        } else {
          $('#L' + i).addClass('highlight');
        }
      }
      if (!scrolling) {
        $(window).scrollTop($('#' + fragments[0]).offset().top);
      }
    }
  }
  scrolling = true;
}
</script>
