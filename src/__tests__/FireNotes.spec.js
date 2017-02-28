import React from 'react';
import { mount } from 'enzyme';
import { FireNotes } from '../FireNotes';

describe('FireNotes component', () => {
  describe('When user is not authenticated', () => {
    const props = { logout: () => { }, auth: false, user: null }

    it('shows a login screen', () => {
      const component = mount(<FireNotes {...props} />)
      expect(component.find('.login-container')).toBePresent('login-container')
    });
  });

  describe('When user is authenticated', () => {
    let component;
    const props = { logout: jest.fn(), auth: true, user: { email: 'test@gmail.com' } }

    beforeEach(() => {
      component = mount(<FireNotes {...props} />)
    })

    it('shows a notes screen', () => {
      expect(component.find('.fire-notes')).toBePresent()
    })

    it('shows a navbar with logout button', () => {
      expect(component.find('.logout')).toBePresent()
    })

    it('shows a navbar with user email in', () => {
      expect(component.find('.navbar')).toIncludeText('test@gmail.com')
    })

    describe('when click logout button', () => {
      beforeEach(() => {
        component.find('.logout').simulate('click');
      })

      it('logut function called', () => {
        expect(props.logout).toBeCalled()
      })
    })
  })
});
