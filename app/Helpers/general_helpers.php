<?php

function get_default_imap_config(): array {
    if(session()->has('imap_default_config')){
        return json_decode(session()->get('imap_default_config'), true);
    }
    return [];
}
