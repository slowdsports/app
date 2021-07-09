let googleAnalytics = `
<!--Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-174658361-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-174658361-1');
</script>
`
for(const ele of document.getElementsByClassName("analytics")){ele.innerHTML=(googleAnalytics)};