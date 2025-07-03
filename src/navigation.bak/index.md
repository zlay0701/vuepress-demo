---
title: 导航(备份)
date: 2025-05-31 09:41:17
comments: false
---
<style>
	.link-navigation {
	  display: grid;
	  grid-template-columns: repeat(2, minmax(370px, 1fr));
	}
	@media (max-width: 767px) {
		.link-navigation {
		  display: grid;
		  grid-template-columns: repeat(1, minmax(330px, 1fr));
		}
	}
    .links-content {
      margin-top: 1rem;
    }
    .link-navigation::after {
      content: " ";
      display: block;
      clear: both;
    }
	.post-body{
		margin:3% 3% 3% 3%;
	}
    .card {
      font-size: 1rem;
      padding: 10px 20px;
      border-radius: 4px;
      transition-duration: 0.15s;
      margin-bottom: 1rem;
      display: flex;
	  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
	  margin-left: 1rem;
	  margin-right: 1rem;
    }
	@media (max-width: 767px) {
		.post-body{
			margin:3% 0% 3% 2%;
		}
		.card {
			padding: 10px 10px;
			margin-left: -18px;
			margin-right: 17px;
		}
	}
    .card:nth-child(odd) {
      float: left;
    }
    .card:nth-child(even) {
      float: right;
    }
    .card:hover {
      transform: scale(1.1);
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
	  background-color:#F5F5F5;
    }
    .card a {
      border: none;
    }
    .card .ava {
      width: 3rem !important;
      height: 3rem !important;
      margin: 0 !important;
      margin-right: 1em !important;
      border-radius: 4px;
	  padding-top: 6px;
    }
    .card .card-header {
      font-style: italic;
      overflow: hidden;
      width: 100%;
    }
    .card .card-header a {
      font-style: normal;
      color: #2bbc8a;
      font-weight: bold;
      text-decoration: none;
    }
    .card .card-header a:hover {
      color: #d480aa;
      text-decoration: none;
    }
    .card .card-header .info {
      font-style: normal;
      color: #a3a3a3;
      font-size: 14px;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  </style>

  <!-- more -->

  <div class="post-body">
    <div id="links">
      <div class="links-content">
	  <!--navigation start-->
		<h1 id="博客"><a href="#博客" class="headerlink" title="博客"></a>博客</h1>
        <div class="link-navigation">
		  <!--card start-->
          <div class="card">
            <img class="ava" src="/uploads/favicon-96x96.png" />
            <div class="card-header">
              <div>
                <a href="/home">博客首页</a>
              </div>
              <div class="info">你必须很努力,才能看起来毫不费力</div>
            </div>
          </div>
		  <!--card end-->
		  <!--card start-->
          <div class="card">
            <img class="ava" src="/uploads/favicon-96x96_2.png" />
            <div class="card-header">
              <div>
                <a href="https://hexo-demo.zlay.fun/">Hexo Next Demo</a>
              </div>
              <div class="info">Hexo + Next主题演示站点</div>
            </div>
          </div>
		  <!--card end-->
        </div>
		<!--navigation end-->
		<!--navigation start-->
		<h1 id="工具"><a href="#工具" class="headerlink" title="工具"></a>工具</h1>
        <div class="link-navigation">
		  <!--card start-->
          <div class="card">
            <img class="ava" src="/uploads/favicon-96x96_2.png" />
            <div class="card-header">
              <div>
                <a href="https://hugo-demo.zlay.fun/">hugo Next Demo</a>
              </div>
              <div class="info">Hugo + NexT主题演示站点</div>
            </div>
          </div>
		  <!--card end-->
        </div>
		<!--navigation end-->
      </div>
    </div>
  </div>
