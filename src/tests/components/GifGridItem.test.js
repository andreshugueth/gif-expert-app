import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);

    test('should render component correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('should have paragraph on title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('should check src and alt on img', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe( title );
    })

    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        // console.log( div.prop('className') );
        expect( className.includes('animate__fadeIn') ).toBe( true );
    })

})
