jQuery(".result code.r").zclip({
    path: "/resources/js/jquery/hacks/ZeroClipboard.swf",
    copy: function() {
        return jQuery.trim(jQuery(this).text());
    }}
);