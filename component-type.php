<?php

class WpakComponentTypeLastRead extends WpakComponentType {

    protected function compute_data( $component, $options, $args = array() ) {
    }

    public function has_options( $component ) {
        return false;
    }

    public function get_options_to_display( $component ) {
        return array();
    }

    public function echo_form_fields( $component ) {
    }

    public function echo_form_javascript() {
    }

    public function get_ajax_action_html_answer( $action, $params ) {
    }

    protected static function echo_sub_options_html( $current_post_type, $current_taxonomy = '', $current_term = '', $current_hook = '' ) {
    }

    public function get_options_from_posted_form( $data ) {
        return array();
    }

}

WpakComponentsTypes::register_component_type( 'lastread', array( 'label' => __( 'Last Read', WpAppKit::i18n_domain ) ) );
