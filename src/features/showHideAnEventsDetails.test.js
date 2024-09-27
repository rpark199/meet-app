import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the user opened the app', () => {
          AppComponent = render(<App />);
        });

        when('the list of events are rendered', async () => {
          const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
      
        });

        then('event details should not show', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.details');
          expect(eventDetails).not.toBeInTheDocument();
        });
    });
})