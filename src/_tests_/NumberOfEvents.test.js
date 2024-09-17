import NumberOfEvents from '../components/NumberOfEvents';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsComponent;
    
    beforeEach(() => {
        NumberOfEventsComponent = render(
            <NumberOfEvents 
                setCurrentNOE={() => {}}
                setErrorAlert={() => {}}
            />
        );
    });

    test('render element with role of textbox', () => { 
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toBeInTheDocument(); 
      });
    
    test('ensures the default value of textbox is 32', () => {
        const input = NumberOfEventsComponent.queryByRole('textbox');
        expect(input).toHaveValue('32');
    });

    test('change number of events when a user types in the textbox', async () => { 
        const numverOfEvents = NumberOfEventsComponent.getByRole('textbox');
        const user = userEvent.setup(); 
        await user.type(numverOfEvents, '{backspace}{backspace}10');   
        const allEvents = await getEvents(); 
        NumberOfEventsComponent.rerender(<NumberOfEvents setCurrentNOE={allEvents} setErrorAlert={() => {}} />);   
        expect(numverOfEvents).toHaveValue('10'); 
    }); 
});
