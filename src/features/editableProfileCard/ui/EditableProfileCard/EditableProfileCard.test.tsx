import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { $api } from 'shared/api/api';
import avatar from 'shared/assets/tests/storybook.jpg';
import userEvent from '@testing-library/user-event';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile:Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 19,
    username: 'bugazowww',
    city: 'Grozny',
    country: Country.Russia,
    currency: Currency.RUB,
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'islam',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard.test.tsx', () => {
    test('Режим рид онли должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });
    test('При отмене значения должны обнуляться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });
    // test('Должна появиться ошибка', async () => {
    //     componentRender(<EditableProfileCard id="1" />, options);
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    //
    //     await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    //
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));
    //
    //     expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    // });
    //
    // test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
    //     const mockPutReq = jest.spyOn($api, 'put');
    //     componentRender(<EditableProfileCard id="1" />, options);
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
    //
    //     await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    //
    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));
    //
    //     expect(mockPutReq).toHaveBeenCalled();
    // });
});
