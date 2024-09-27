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
          const eventDetails = AppDOM.querySelector('.eventDetails');
          expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        given('the user is seeing the events rendered', async () => {
          AppComponent = render(<App />);
          const AppDOM = AppComponent.container.firstChild;
          const EventListDOM = AppDOM.querySelector('#event-list');

          await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
        });

        when('the user clicks the show details button', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetailsButton = AppDOM.querySelector('.show-details-btn');
          const user = userEvent.setup();
          await user.click(eventDetailsButton);
        });

        then('the event details should be shown', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.eventDetails');
          expect(eventDetails).not.toBeNull();
          expect(eventDetails).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let AppComponent;
        given('the user has clicked the show details button', async () => {
          AppComponent = render(<App />);
          const AppDOM = AppComponent.container.firstChild;
          const eventDetailsButton = AppDOM.querySelector('.show-details-btn');
          const user = userEvent.setup();
          await user.click(eventDetailsButton);
        });

        when('the user clicks the hide details button', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetailsButton = AppDOM.querySelector('.show-details-btn');
          const user = userEvent.setup();
          await user.click(eventDetailsButton);
        });

        then('the event details should be hidden', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const eventDetails = AppDOM.querySelector('.eventDetails');
          expect(eventDetails).toBeInTheDocument();
        });
    });
});
