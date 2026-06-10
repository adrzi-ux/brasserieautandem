<?php
add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'kadence-child-style', get_stylesheet_uri(), array( 'kadence-global' ) );
} );

/**
 * Quand un article n'a pas de featured image, cherche la première vraie photo
 * dans le contenu (hors screenshots du site lui-même).
 */
function _catea_first_content_image( $post_id ) {
	$post = get_post( $post_id );
	if ( ! $post ) return null;
	preg_match_all( '/<img[^>]+src=["\']([^"\']+)["\']/i', $post->post_content, $matches );
	if ( empty( $matches[1] ) ) return null;
	foreach ( $matches[1] as $src ) {
		$filename = basename( strtolower( $src ) );
		// Exclure les screenshots du site (nom contient "catea" ou "screenshot")
		if ( strpos( $filename, 'catea' ) !== false ) continue;
		if ( strpos( $filename, 'screenshot' ) !== false ) continue;
		return $src;
	}
	return null;
}

// Faire croire à Kadence qu'il y a un thumbnail quand on a une image de contenu
add_filter( 'has_post_thumbnail', function( $has, $post, $thumbnail_id ) {
	if ( $has ) return $has;
	return _catea_first_content_image( is_object( $post ) ? $post->ID : $post ) !== null;
}, 10, 3 );

// Fournir un ID d'attachment valide si l'image est dans la médiathèque WP
add_filter( 'post_thumbnail_id', function( $thumbnail_id, $post ) {
	if ( $thumbnail_id ) return $thumbnail_id;
	$src = _catea_first_content_image( is_object( $post ) ? $post->ID : $post );
	if ( ! $src ) return $thumbnail_id;
	$attachment_id = attachment_url_to_postid( $src );
	return $attachment_id ?: $thumbnail_id;
}, 10, 2 );

// Fallback HTML si l'attachment_id est toujours 0
add_filter( 'post_thumbnail_html', function( $html, $post_id, $post_thumbnail_id ) {
	if ( ! empty( $html ) ) return $html;
	$src = _catea_first_content_image( $post_id );
	if ( ! $src ) return $html;
	$alt = esc_attr( get_the_title( $post_id ) );
	return '<img src="' . esc_url( $src ) . '" alt="' . $alt . '" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" />';
}, 10, 3 );
