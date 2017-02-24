<?php

// Setup theme support
add_theme_support( 'post-thumbnails' );

// Link to Redux stuff
// require_once (dirname(__FILE__) . '/redux_config/project_redux_config.php');


// Custom Post Types

// Register Proejct Custom Post Type
function project_cpt() {

	$labels = array(
		'name'                  => _x( 'Projects', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Project', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Projects', 'text_domain' ),
		'name_admin_bar'        => __( 'Project', 'text_domain' ),
		'archives'              => __( 'Project Archives', 'text_domain' ),
		'attributes'            => __( 'Project Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Project:', 'text_domain' ),
		'all_items'             => __( 'All Projects', 'text_domain' ),
		'add_new_item'          => __( 'Add New Project', 'text_domain' ),
		'add_new'               => __( 'Add New', 'text_domain' ),
		'new_item'              => __( 'New Project', 'text_domain' ),
		'edit_item'             => __( 'Edit Project', 'text_domain' ),
		'update_item'           => __( 'Update Project', 'text_domain' ),
		'view_item'             => __( 'View Project', 'text_domain' ),
		'view_items'            => __( 'View Projects', 'text_domain' ),
		'search_items'          => __( 'Search Project', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into Project', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this Project', 'text_domain' ),
		'items_list'            => __( 'Projects list', 'text_domain' ),
		'items_list_navigation' => __( 'Projects list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter projects list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Project', 'text_domain' ),
		'description'           => __( 'A design or development project displayed in the portfolio.', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'            => array( 'project_categories', ' project_tags' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-portfolio',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
		'rest_base'             => 'projects',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	register_post_type( 'project', $args );

}
add_action( 'init', 'project_cpt', 0 );

// Register Project Categories Taxonomy
function project_categories_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Project Categories', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Project Category', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Project Categories', 'text_domain' ),
		'all_items'                  => __( 'All Project Categories', 'text_domain' ),
		'parent_item'                => __( 'Parent Project Category', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Project Category:', 'text_domain' ),
		'new_item_name'              => __( 'New Project Category Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Project Category', 'text_domain' ),
		'edit_item'                  => __( 'Edit Project Category', 'text_domain' ),
		'update_item'                => __( 'Update Project Category', 'text_domain' ),
		'view_item'                  => __( 'View Project Category', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Project Categories with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Project Categories', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
		'popular_items'              => __( 'Popular Project Categories', 'text_domain' ),
		'search_items'               => __( 'Search Project Categories', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No Project Categories', 'text_domain' ),
		'items_list'                 => __( 'Project Categories list', 'text_domain' ),
		'items_list_navigation'      => __( 'Project Categories list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
		'rest_base'                  => 'project_categories',
		'rest_controller_class'      => 'WP_REST_Terms_Controller',
	);
	register_taxonomy( 'project_categories', array( 'project' ), $args );

}
add_action( 'init', 'project_categories_taxonomy', 0 );

// Register Project Keywords Taxonomy
function project_tags_taxonomy() {

	$labels = array(
		'name'                       => _x( 'Project Keywords', 'Taxonomy General Name', 'text_domain' ),
		'singular_name'              => _x( 'Project Keyword', 'Taxonomy Singular Name', 'text_domain' ),
		'menu_name'                  => __( 'Project Keywords', 'text_domain' ),
		'all_items'                  => __( 'All Project Keywords', 'text_domain' ),
		'parent_item'                => __( 'Parent Project Keyword', 'text_domain' ),
		'parent_item_colon'          => __( 'Parent Project Keyword:', 'text_domain' ),
		'new_item_name'              => __( 'New Project Keyword Name', 'text_domain' ),
		'add_new_item'               => __( 'Add New Project Keyword', 'text_domain' ),
		'edit_item'                  => __( 'Edit Project Keyword', 'text_domain' ),
		'update_item'                => __( 'Update Project Keyword', 'text_domain' ),
		'view_item'                  => __( 'View Project Keyword', 'text_domain' ),
		'separate_items_with_commas' => __( 'Separate Project Keywords with commas', 'text_domain' ),
		'add_or_remove_items'        => __( 'Add or remove Project Keywords', 'text_domain' ),
		'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
		'popular_items'              => __( 'Popular Project Keywords', 'text_domain' ),
		'search_items'               => __( 'Search Project Keywords', 'text_domain' ),
		'not_found'                  => __( 'Not Found', 'text_domain' ),
		'no_terms'                   => __( 'No Project Keywords', 'text_domain' ),
		'items_list'                 => __( 'Project Keywords list', 'text_domain' ),
		'items_list_navigation'      => __( 'Project Keywords list navigation', 'text_domain' ),
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => true,
		'show_in_rest'               => true,
		'rest_base'                  => 'project_keywords',
		'rest_controller_class'      => 'WP_REST_Terms_Controller',
	);
	register_taxonomy( 'project_keywords', array( 'project' ), $args );

}
add_action( 'init', 'project_tags_taxonomy', 0 );
