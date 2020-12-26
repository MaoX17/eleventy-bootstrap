---
title: "linux boot vga parameter value &#8211; grub and lilo"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-20"
permalink: "linux-boot-vga-parameter-value-grub-and-lilo/"
layout: "template_posts_md"
---
<p>Valori del parametro vga= da passare a lilo o grub</p>
<p>This is the table of value for the vga parameter<br />in your lilo.conf or grub.conf (or menu.lst)<br />put:<br />vga=xxx</p>
<p></p>
<table>
<caption><b>Reference value for x</b>   </caption>
<tbody>
<tr>
<th>      </th>
<th>640&#215;480       </th>
<th>800&#215;600       </th>
<th>1024&#215;768       </th>
<th>1280&#215;1024       </th>
<th>1152&#215;864       </th>
<th>1600&#215;1200       </th>
</tr>
<tr>
<th>8 bit       </th>
<td>769</td>
<td>771</td>
<td>773</td>
<td>775</td>
<td>353</td>
<td>800       </td>
</tr>
<tr>
<th>15 bit       </th>
<td>784</td>
<td>787</td>
<td>790</td>
<td>793</td>
<td>354</td>
<td>801       </td>
</tr>
<tr>
<th>16 bit       </th>
<td>785</td>
<td>788</td>
<td>791</td>
<td>794</td>
<td>355</td>
<td>802       </td>
</tr>
<tr>
<th>24 bit       </th>
<td>786</td>
<td>789</td>
<td>792</td>
<td>795</td>
<td>      </td>
<td>803</td>
</tr>
</tbody>
</table>
<p>per maggiori informazioni:<br /><a href="http://gentoo-wiki.com/HOWTO_fbsplash">http://gentoo-wiki.com/HOWTO_fbsplash</a></p>
