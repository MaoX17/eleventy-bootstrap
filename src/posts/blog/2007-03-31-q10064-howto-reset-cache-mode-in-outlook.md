---
title: "Q10064 &#8211; HOWTO: Reset Cache Mode in Outlook"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-31"
permalink: "q10064-howto-reset-cache-mode-in-outlook/"
layout: "template_posts_md"
---
<p>thanks<br /><a href="http://www.lanlogic.net/support/docs/article.aspx?id=10064">http://www.lanlogic.net/support/docs/article.aspx?id=10064</a></p>
<p>You may need to turn off cache mode and turn it back on if your Outlook<br />client is running slow, or if you are suddenly unable to send or receive<br />emails.  Going through the steps will essentially remove the Outlook<br />cache from your computer, and then rebuild it.  The cache is the local<br />copies of your emails.</p>
<p><p>   1. Turn Off Cache Mode</p>
<p><p>         1. Open Outlook<br />         2. Tools<br />         3. Email Accounts<br />         4. Select View or change existing e-mail accounts<br />         5. Next<br />         6. With &quot;Microsoft Exchange Server&quot; selected, Click &quot;Change&quot;<br />         7. Uncheck the box for &quot;Use Cached Exchange Mode&quot;<br />         8. Next<br />         9. In the box that pops up, click on OK<br />        10. Click Finish</p>
<p><p>   2. Close Outlook<br />         1. File<br />         2. Exit</p>
<p><p>   3. Delete OST files from hard drive<br />         1. Start<br />         2. Search<br />         3. For Files or folders<br />         4. All files and Folders<br />         5. Expand &quot;More Advanced Options&quot;<br />         6. Check the box next to &quot;Search hidden files and folders&quot;<br />         7. Leave the other options at default<br />         8. In the top box for &quot;All or part of the file name&quot;, type in<br />            &quot;*.ost&quot;<br />         9. Look in should be &quot;Local Hard Drives&quot;<br />        10. Click Search<br />        11. It&#39;ll find files such as outlook.ost, outlook001.ost, etc. <br />            Select all the files it finds and select delete.  This will<br />            delete all the offline emails from your computer, but they<br />            are still on the server so you won&#39;t lose anything.</p>
<p><p>   4. Turn On Cache Mode</p>
<p><p>         1. Open Outlook<br />         2. Tools<br />         3. Email Accounts<br />         4. Select View or change existing e-mail accounts<br />         5. Next<br />         6. With &quot;Microsoft Exchange Server&quot; selected, Click &quot;Change&quot;<br />         7. Check the box for &quot;Use Cached Exchange Mode&quot;<br />         8. Next<br />         9. In the box that pops up, click on OK<br />        10. Click Finish</p>
<p><p>   5. Restart Outlook</p>
<p><p>Once Outlook is restarted, all of your emails will download to your<br />computer again.  It may take awhile, depending on the number of emails<br />you have.  You can watch the progress in the lower right corner of your<br />Outlook screen… it will show the folders as they update.</p>
