$('.one').hide();
$('.two').hide();
$('.three').hide();
$('.four').hide();
$('.five').hide();

$('.one').on('click', function() {
	$('.two').hide();
    $(this).animate({ 'top': '-' + $(this).width() }, 1000);
});
$('.two').on('click', function() {
	$('.three').hide();
	$('.one').show();
    $(this).animate({ 'left': '' + $(this).width() }, 1000);
});
$('.three').on('click', function() {
	$('.four').hide();
	$('.two').show();
    $(this).animate({ 'top': '-' + $(this).width() }, 1000);
});
$('.four').on('click', function() {
	$('.five').hide();
	$('.three').show();
    $(this).animate({ 'top': '' + $(this).width() }, 1000);
});
$('.five').on('click', function() {
	$('.six').hide();
	$('.four').show();
    $(this).animate({ 'left': '' + $(this).width() }, 1000);
});
$('.six').on('click', function() {
	$('.five').show();
    $(this).animate({ 'left': '-' + $(this).width() }, 1000);
});
