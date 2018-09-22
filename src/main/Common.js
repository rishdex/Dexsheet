import { Component } from 'react';
import $ from 'jquery';

export const BACKEND = "http://localhost:8000"

export class Common extends Component {
    
    static handleError(error) {
        $('.loading').hide();

        console.error(error);
    }

    static lastParameter(url) {
        let array = url.split("/");

        return array[array.length - 1]
    }

    static changeLastParameter(id) {
        console.log('select project', id);
        let array = window.location.href.split("/");
        array[array.length - 1] = id;

        window.location.href = array.join("/");
    }
}